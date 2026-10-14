import type { MetadataRoute } from 'next'
import { siteConfig } from '@/client/config/site.config'
import { projects } from '@/client/projects/projects.data'
import { prisma } from '@/core/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.seo.url.replace(/\/+$/, '')
  const paths = ['/', '/loja', '/blog', '/sobre', '/servicos', '/onde-atendemos', '/projetos', '/duvidas-frequentes', '/avaliacoes',
    ...['box-de-vidro', 'espelhos-sob-medida', 'guarda-corpo-e-corrimao', 'fechamento-de-sacadas', 'portas-de-vidro', 'fachadas-de-vidro'].map(slug => '/servicos/' + slug),
    ...projects.map(project => '/projetos/' + project.slug)]
  const entries: MetadataRoute.Sitemap = paths.map(path => ({ url: base + (path === '/' ? '' : path) }))
  // Keep static public URLs available when the content database is unavailable.
  const results = await Promise.allSettled([
    prisma.post.findMany({ where: { published: true }, select: { slug: true, updatedAt: true } }),
    prisma.blogCategory.findMany({ select: { slug: true } }),
    prisma.product.findMany({ select: { slug: true, updatedAt: true } }),
    prisma.category.findMany({ select: { slug: true } }),
    prisma.customPage.findUnique({ where: { slug: 'personalizado' }, select: { updatedAt: true } }),
  ])
  const prefixes = ['/blog/', '/blog/categoria/', '/loja/produto/', '/loja/categoria/']
  results.slice(0, 4).forEach((result, index) => {
    if (result.status === 'fulfilled' && Array.isArray(result.value)) {
      for (const record of result.value) {
        if ('slug' in record && !(index === 3 && record.slug === 'todos')) entries.push({ url: base + prefixes[index] + encodeURIComponent(record.slug), ...('updatedAt' in record ? { lastModified: record.updatedAt } : {}) })
      }
    } else if (result.status === 'rejected') console.error('Sitemap: fonte de conteúdo indisponível', prefixes[index])
  })
  const custom = results[4]
  if (custom.status === 'fulfilled' && custom.value && !Array.isArray(custom.value)) entries.push({ url: base + '/personalizado', lastModified: custom.value.updatedAt })
  return [...new Map(entries.map(entry => [entry.url, entry])).values()]
}
