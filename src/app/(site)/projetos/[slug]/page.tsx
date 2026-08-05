// src/app/(site)/projetos/[slug]/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";
import {
  getProjectBySlug,
  projects,
} from "@/client/projects/projects.data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado | E & L Vidraçaria",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageUrl = `${siteConfig.seo.url}/projetos/${project.slug}`;
  const title = `${project.name} | Projeto de Vidraçaria no Rio de Janeiro`;

  return {
    title,
    description: project.description,
    keywords: [
      project.service,
      "projeto de vidraçaria no Rio de Janeiro",
      "fachada de vidro no Rio de Janeiro",
      "E & L Vidraçaria",
      project.client,
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description: project.description,
      url: pageUrl,
      siteName: siteConfig.nome,
      locale: "pt_BR",
      type: "article",
      images: [
        {
          url: project.imageSrc,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: [project.imageSrc],
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const pageUrl = `${siteConfig.seo.url}/projetos/${project.slug}`;

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Olá! Vi o projeto "${project.name}" no site e gostaria de solicitar um orçamento para um serviço semelhante no Rio de Janeiro.`,
  );

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: project.name,
      description: project.description,
      image: `${siteConfig.seo.url}${project.imageSrc}`,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      author: {
        "@type": "Organization",
        name: siteConfig.nome,
        url: siteConfig.seo.url,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.nome,
        url: siteConfig.seo.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.seo.url}${siteConfig.logoHorizontal}`,
        },
      },
      about: {
        "@type": "Service",
        name: project.service,
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: siteConfig.nome,
          url: siteConfig.seo.url,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Rio de Janeiro",
        },
      },
      contentLocation: {
        "@type": "Place",
        name: project.location,
      },
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
          name: "Projetos",
          item: `${siteConfig.seo.url}/projetos`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.name,
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
        className="relative overflow-hidden"
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
              "radial-gradient(circle at 88% 16%, var(--color-accent-light), transparent 30%), radial-gradient(circle at 8% 92%, var(--color-accent-light), transparent 34%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <nav
            aria-label="Navegação estrutural"
            className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-hero-muted)]"
          >
            <Link href="/" className="transition hover:text-white">
              Início
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href="/projetos"
              className="transition hover:text-white"
            >
              Projetos
            </Link>

            <span aria-hidden="true">/</span>

            <span className="font-semibold text-[var(--color-text-light)]">
              {project.client}
            </span>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-text-light)] backdrop-blur-sm">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                Projeto comercial em vidro
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text-light)] sm:text-5xl lg:text-6xl">
                {project.name}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-hero-muted)]">
                {project.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-success)] px-6 py-3 font-bold text-[var(--color-text-light)] transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-success)]"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Solicitar projeto semelhante
                </Link>

                <Link
                  href="/projetos"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-[var(--color-text-light)] backdrop-blur-sm transition hover:bg-white/20"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Voltar aos projetos
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 45vw"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 58%, rgba(0,0,0,.42) 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJETO, SERVIÇO E LOCALIZAÇÃO */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                Projeto
              </p>

              <h2 className="mt-2 text-xl font-bold text-[var(--color-text-primary)]">
                {project.client}
              </h2>
            </article>

            <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                <PanelsTopLeft className="h-5 w-5" aria-hidden="true" />
              </span>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                Serviço
              </p>

              <h2 className="mt-2 text-xl font-bold text-[var(--color-text-primary)]">
                {project.service}
              </h2>
            </article>

            <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                Localização
              </p>

              <h2 className="mt-2 text-xl font-bold text-[var(--color-text-primary)]">
                {project.location}
              </h2>
            </article>
          </div>
        </div>
      </section>

      {/* DETALHES */}
      <section
        className="py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent-hover), var(--color-accent))",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
              Sobre o projeto
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl lg:text-5xl">
              Solução em vidro para ambiente comercial
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[var(--color-text-hero-muted)]">
            {project.longDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Características
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Principais pontos do projeto
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-secondary)]">
              A solução foi planejada conforme as características do imóvel e
              a necessidade comercial do estabelecimento.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]"
                  aria-hidden="true"
                />

                <span className="font-semibold leading-7 text-[var(--color-text-primary)]">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇO RELACIONADO */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Serviço utilizado
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">
                {project.relatedServiceLabel}
              </h2>

              <p className="mt-4 text-lg leading-8 text-[var(--color-text-secondary)]">
                Conheça mais detalhes sobre o serviço aplicado neste projeto e
                veja como funciona o orçamento.
              </p>
            </div>

            <Link
              href={project.relatedServiceHref}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 font-bold text-[var(--color-text-light)] transition hover:bg-[var(--color-accent-hover)]"
            >
              Conhecer o serviço
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* OUTROS PROJETOS */}
      <section
        className="py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
                Outros trabalhos
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl">
                Conheça outros projetos comerciais
              </h2>
            </div>

            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 font-semibold text-[var(--color-text-light)]"
            >
              Ver todos os projetos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/projetos/${item.slug}`}
                className="group overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 767px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-accent-light)]">
                    {item.service}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[var(--color-text-light)]">
                    {item.name}
                  </h3>

                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--color-text-light)]">
                    Ver projeto
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Atendimento no Rio de Janeiro
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">
                Precisa de um projeto semelhante?
              </h2>

              <p className="mt-4 text-lg leading-8 text-[var(--color-text-secondary)]">
                Envie fotos, medidas aproximadas, o tipo de serviço e o bairro
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
