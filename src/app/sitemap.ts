import type { MetadataRoute } from 'next'
import { siteConfig } from '@/client/config/site.config'
import { projects } from '@/client/projects/projects.data'
import { prisma } from '@/core/lib/prisma'

type SitemapRecord = { slug: string; updatedAt?: Date }
type Source = { prefix: string; load: () => Promise<SitemapRecord[]> }

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.seo.url.replace(/\/+$/, '')
  const paths = ['/', '/blog', '/sobre', '/servicos', '/onde-atendemos', '/projetos', '/duvidas-frequentes', '/avaliacoes',
    ...['box-de-vidro', 'espelhos-sob-medida', 'guarda-corpo-e-corrimao', 'fechamento-de-sacadas', 'portas-de-vidro', 'fachadas-de-vidro'].map(slug => '/servicos/' + slug),
    ...projects.map(project => '/projetos/' + project.slug)]
  if (siteConfig.store.enabled) paths.push('/loja')
  const entries: MetadataRoute.Sitemap = paths.map(path => ({ url: base + (path === '/' ? '' : path) }))
  const sources: Source[] = [
    { prefix: '/blog/', load: () => prisma.post.findMany({ where: { published: true }, select: { slug: true, updatedAt: true } }) },
    { prefix: '/blog/categoria/', load: () => prisma.blogCategory.findMany({ select: { slug: true } }) },
  ]
  // Never query commercial records when the module is disabled.
  if (siteConfig.store.enabled) sources.push(
    { prefix: '/loja/produto/', load: () => prisma.product.findMany({ select: { slug: true, updatedAt: true } }) },
    { prefix: '/loja/categoria/', load: () => prisma.category.findMany({ where: { slug: { not: 'todos' } }, select: { slug: true } }) },
  )
  const results = await Promise.allSettled(sources.map(source => source.load()))
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      for (const record of result.value) entries.push({
        url: base + sources[index].prefix + encodeURIComponent(record.slug),
        ...(record.updatedAt ? { lastModified: record.updatedAt } : {}),
      })
    } else console.error('Sitemap: fonte de conteúdo indisponível', sources[index].prefix)
  })
  try {
    const custom = await prisma.customPage.findUnique({ where: { slug: 'personalizado' }, select: { updatedAt: true } })
    if (custom) entries.push({ url: base + '/personalizado', lastModified: custom.updatedAt })
  } catch { console.error('Sitemap: página personalizada indisponível') }
  return [...new Map(entries.map(entry => [entry.url, entry])).values()]
}
