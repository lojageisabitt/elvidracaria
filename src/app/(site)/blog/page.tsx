// src/app/(site)/blog/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarDays,
  Clock3,
  FolderOpen,
  GlassWater,
  Home,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
  ShieldCheck,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";
import { prisma } from "@/core/lib/prisma";

export const dynamic = "force-dynamic";

const pageUrl = `${siteConfig.seo.url}/blog`;

const whatsappMessage = encodeURIComponent(
  "Olá! Vim pelo blog da E & L Vidraçaria e gostaria de solicitar um orçamento no Rio de Janeiro.",
);

const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

const topics = [
  {
    icon: GlassWater,
    title: "Box de vidro",
    description:
      "Modelos, medidas, cuidados, instalação e escolhas para banheiros residenciais e comerciais.",
    href: "/servicos/box-de-vidro",
  },
  {
    icon: Home,
    title: "Espelhos sob medida",
    description:
      "Dicas para escolher espelhos para banheiros, salas, quartos, academias e lojas.",
    href: "/servicos/espelho-com-iluminacao",
  },
  {
    icon: ShieldCheck,
    title: "Vidro e segurança",
    description:
      "Informações sobre vidro temperado, espessuras, ferragens, aplicações e manutenção.",
    href: "/duvidas-frequentes",
  },
  {
    icon: PanelsTopLeft,
    title: "Guarda-corpo e sacadas",
    description:
      "Conteúdos sobre proteção, aproveitamento de espaços e soluções em vidro sob medida.",
    href: "/servicos/guarda-corpo-e-corrimao",
  },
  {
    icon: Building2,
    title: "Fachadas comerciais",
    description:
      "Ideias e orientações para fachadas, vitrines, portas e projetos comerciais em vidro.",
    href: "/servicos/fachada-de-loja-com-vidro",
  },
  {
    icon: MapPin,
    title: "Vidraçaria no Rio de Janeiro",
    description:
      "Conteúdos locais sobre atendimento, orçamento e serviços de vidraçaria no Rio de Janeiro.",
    href: "/onde-atendemos",
  },
];

function stripHtml(value: string): string {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function createExcerpt(excerpt: string | null, content: string): string {
  const text = excerpt?.trim() || stripHtml(content);

  if (text.length <= 180) {
    return text;
  }

  return `${text.slice(0, 177).trimEnd()}...`;
}

function absoluteUrl(value: string | null | undefined): string {
  if (!value) {
    return `${siteConfig.seo.url}${siteConfig.seo.ogImage}`;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `${siteConfig.seo.url}${value.startsWith("/") ? value : `/${value}`}`;
}

function estimateReadingTime(content: string): number {
  const words = stripHtml(content).split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 200));
}

export const metadata: Metadata = {
  title: "Blog de Vidraçaria no Rio de Janeiro | E & L Vidraçaria",
  description:
    "Conteúdos sobre box de vidro, espelhos sob medida, vidro temperado, guarda-corpo, fechamento de sacadas, portas e fachadas da E & L Vidraçaria no Rio de Janeiro.",
  keywords: [
    "blog de vidraçaria",
    "vidraçaria no Rio de Janeiro",
    "dicas de vidraçaria",
    "box de vidro Rio de Janeiro",
    "espelhos sob medida RJ",
    "vidro temperado RJ",
    "fachada de vidro Rio de Janeiro",
    "guarda-corpo de vidro RJ",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Blog de Vidraçaria no Rio de Janeiro | E & L",
    description:
      "Dicas e informações sobre serviços, aplicações, segurança e projetos em vidro.",
    url: pageUrl,
    siteName: siteConfig.nome,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: siteConfig.seo.ogImage,
        alt: "Blog da E & L Vidraçaria no Rio de Janeiro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Vidraçaria no Rio de Janeiro",
    description:
      "Conteúdos sobre box, espelhos, vidro temperado, fachadas e outros serviços de vidraçaria.",
    images: [siteConfig.seo.ogImage],
  },
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    prisma.post.findMany({
      where: {
        published: true,
      },
      include: {
        category: true,
        seo: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.blogCategory.findMany({
      where: {
        posts: {
          some: {
            published: true,
          },
        },
      },
      orderBy: [
        {
          featured: "desc",
        },
        {
          order: "asc",
        },
        {
          name: "asc",
        },
      ],
    }),
  ]);

  const featuredPost =
    posts.find((post) => post.category?.featured) ?? posts[0] ?? null;

  const remainingPosts = featuredPost
    ? posts.filter((post) => post.id !== featuredPost.id)
    : [];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Blog da E & L Vidraçaria",
      headline: "Conteúdos sobre vidraçaria no Rio de Janeiro",
      description:
        "Artigos sobre box, espelhos, vidro temperado, fachadas, portas, guarda-corpo e outros serviços de vidraçaria.",
      url: pageUrl,
      inLanguage: "pt-BR",
      publisher: {
        "@type": "HomeAndConstructionBusiness",
        name: siteConfig.nome,
        url: siteConfig.seo.url,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.logoHorizontal),
        },
      },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.seo?.metaTitle || post.title,
        description:
          post.seo?.metaDesc || createExcerpt(post.excerpt, post.content),
        url: `${siteConfig.seo.url}/blog/${post.slug}`,
        datePublished: post.createdAt.toISOString(),
        dateModified: post.updatedAt.toISOString(),
        image: absoluteUrl(post.coverImage),
        author: {
          "@type": "Organization",
          name: siteConfig.nome,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.nome,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: siteConfig.seo.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <div className="w-full overflow-x-clip bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      {/* HERO */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent-hover), var(--color-accent))",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 86% 16%, var(--color-accent-light), transparent 30%), radial-gradient(circle at 8% 90%, var(--color-accent-light), transparent 34%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <nav
            aria-label="Navegação estrutural"
            className="flex items-center gap-2 text-sm text-[var(--color-text-hero-muted)]"
          >
            <Link href="/" className="transition hover:text-white">
              Início
            </Link>

            <span aria-hidden="true">/</span>

            <span className="font-semibold text-[var(--color-text-light)]">
              Blog
            </span>
          </nav>

          <div className="mt-10 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-text-light)] backdrop-blur-sm">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Conteúdos e orientações
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text-light)] sm:text-5xl lg:text-6xl">
              Blog de vidraçaria no Rio de Janeiro
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-hero-muted)]">
              Informações sobre box de vidro, espelhos sob medida, vidro
              temperado, guarda-corpo, fechamento de sacadas, portas, fachadas
              e outros projetos residenciais e comerciais.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-success)] px-6 py-3 font-bold text-[var(--color-text-light)] transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-success)]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Solicitar orçamento
              </Link>

              <Link
                href="#artigos"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-[var(--color-text-light)] backdrop-blur-sm transition hover:bg-white/20"
              >
                Ver artigos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIGO EM DESTAQUE */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <header className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Conteúdo em destaque
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Informação para planejar melhor seu projeto
            </h2>
          </header>

          {featuredPost ? (
            <article className="mt-10 grid overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] lg:grid-cols-[1.05fr_0.95fr]">
              <Link
                href={`/blog/${featuredPost.slug}`}
                aria-label={`Ler artigo: ${featuredPost.title}`}
                className="group relative min-h-72 overflow-hidden sm:min-h-96 lg:min-h-full"
              >
                <img
                  src={
                    featuredPost.coverImage ||
                    siteConfig.seo.ogImage
                  }
                  alt={`Capa do artigo ${featuredPost.title}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 45%, rgba(0,0,0,.40) 100%)",
                  }}
                />
              </Link>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                {featuredPost.category ? (
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-bg-hover)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)]">
                    <FolderOpen className="h-4 w-4" aria-hidden="true" />
                    {featuredPost.category.name}
                  </span>
                ) : null}

                <h3 className="mt-6 text-3xl font-bold leading-tight text-[var(--color-text-primary)] sm:text-4xl">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="transition hover:text-[var(--color-accent)]"
                  >
                    {featuredPost.title}
                  </Link>
                </h3>

                <p className="mt-5 text-lg leading-8 text-[var(--color-text-secondary)]">
                  {createExcerpt(featuredPost.excerpt, featuredPost.content)}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--color-text-muted)]">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    {dateFormatter.format(featuredPost.createdAt)}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4" aria-hidden="true" />
                    {estimateReadingTime(featuredPost.content)} min de leitura
                  </span>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-8 inline-flex w-fit items-center gap-2 font-bold text-[var(--color-accent)]"
                >
                  Ler artigo completo
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ) : (
            <div className="mt-10 rounded-[2rem] border border-dashed border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-8 text-center sm:p-12">
              <BookOpen
                className="mx-auto h-10 w-10 text-[var(--color-accent)]"
                aria-hidden="true"
              />

              <h3 className="mt-5 text-2xl font-bold text-[var(--color-text-primary)]">
                Novos conteúdos serão publicados em breve
              </h3>

              <p className="mx-auto mt-3 max-w-2xl leading-7 text-[var(--color-text-secondary)]">
                Enquanto isso, consulte os serviços, projetos e dúvidas
                frequentes da E &amp; L Vidraçaria.
              </p>

              <Link
                href="/servicos"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[var(--color-accent)]"
              >
                Conhecer os serviços
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CATEGORIAS E TEMAS */}
      <section
        className="py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent-hover), var(--color-accent))",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
              Assuntos do blog
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl lg:text-5xl">
              Conteúdos sobre serviços de vidraçaria
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-hero-muted)]">
              Informações para ajudar na escolha de materiais, aplicações,
              acabamentos e soluções em vidro no Rio de Janeiro.
            </p>
          </div>

          {categories.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category.id}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-text-light)] backdrop-blur-sm"
                >
                  <FolderOpen
                    className="h-4 w-4 text-[var(--color-accent-light)]"
                    aria-hidden="true"
                  />
                  {category.name}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-[var(--color-accent-light)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <h3 className="mt-5 text-xl font-bold text-[var(--color-text-light)]">
                  {title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-[var(--color-text-hero-muted)]">
                  {description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-text-light)]">
                  Acessar conteúdo relacionado
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LISTA DE ARTIGOS */}
      <section
        id="artigos"
        className="scroll-mt-24 bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <header className="max-w-4xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Artigos recentes
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
              Dicas de vidraçaria no Rio de Janeiro
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)]">
              Conteúdos para ajudar você a conhecer as aplicações e planejar
              melhor seu projeto em vidro.
            </p>
          </header>

          {remainingPosts.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {remainingPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-lg"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Ler artigo: ${post.title}`}
                    className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-secondary)]"
                  >
                    <img
                      src={post.coverImage || siteConfig.seo.ogImage}
                      alt={`Capa do artigo ${post.title}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    {post.category ? (
                      <span className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
                        <FolderOpen className="h-4 w-4" aria-hidden="true" />
                        {post.category.name}
                      </span>
                    ) : null}

                    <h3 className="mt-4 text-xl font-bold leading-snug text-[var(--color-text-primary)]">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition hover:text-[var(--color-accent)]"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="mt-3 flex-1 leading-7 text-[var(--color-text-secondary)]">
                      {createExcerpt(post.excerpt, post.content)}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--color-text-muted)]">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" aria-hidden="true" />
                        {dateFormatter.format(post.createdAt)}
                      </span>

                      <span className="inline-flex items-center gap-2">
                        <Clock3 className="h-4 w-4" aria-hidden="true" />
                        {estimateReadingTime(post.content)} min
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--color-accent)]"
                    >
                      Ler artigo
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : featuredPost ? (
            <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
              <p className="leading-7 text-[var(--color-text-secondary)]">
                Este é o primeiro conteúdo publicado no blog. Novos artigos
                aparecerão automaticamente nesta seção.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      {/* SEO LOCAL E LINKS INTERNOS */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Informação e atendimento
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Conteúdo produzido por uma vidraçaria no Rio de Janeiro
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[var(--color-text-secondary)]">
            <p>
              A E &amp; L Vidraçaria atua há mais de 20 anos em projetos
              residenciais e comerciais, com base na Vila da Penha e
              atendimento em diferentes regiões do Rio de Janeiro.
            </p>

            <p>
              Os artigos ajudam a esclarecer dúvidas gerais, mas medidas,
              especificações e instalação precisam ser avaliadas conforme cada
              ambiente.
            </p>

            <div className="flex flex-wrap gap-5 pt-2">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 font-bold text-[var(--color-accent)]"
              >
                Conhecer os serviços
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/duvidas-frequentes"
                className="inline-flex items-center gap-2 font-bold text-[var(--color-accent)]"
              >
                Ver dúvidas frequentes
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 rounded-[2rem] border border-white/20 bg-white/10 p-7 backdrop-blur-sm sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Atendimento pelo WhatsApp
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[var(--color-text-light)] sm:text-4xl">
                Precisa de uma vidraçaria no Rio de Janeiro?
              </h2>

              <p className="mt-4 text-lg leading-8 text-[var(--color-text-hero-muted)]">
                Envie o tipo de serviço, o bairro, fotos e medidas aproximadas
                para iniciar seu orçamento.
              </p>
            </div>

            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-success)] px-6 py-3 font-bold text-[var(--color-text-light)] transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-success)]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}