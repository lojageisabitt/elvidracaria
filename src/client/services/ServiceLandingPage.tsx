// src/client/services/ServiceLandingPage.tsx

import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";

export type ServiceFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type RelatedService = {
  title: string;
  description: string;
  href: string;
};

export type ServicePageData = {
  name: string;
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  introTitle: string;
  introParagraphs: string[];
  featureTitle: string;
  featureDescription: string;
  features: ServiceFeature[];
  applicationsTitle: string;
  applicationsDescription: string;
  applications: string[];
  processTitle: string;
  processDescription: string;
  faqs: ServiceFAQ[];
  relatedServices: RelatedService[];
  whatsappMessage: string;
};

const processSteps = [
  {
    icon: MessageCircle,
    title: "Primeiro contato",
    description:
      "Envie o bairro, o tipo de serviço, fotos do ambiente e medidas aproximadas, quando disponíveis.",
  },
  {
    icon: Ruler,
    title: "Avaliação e medidas",
    description:
      "A equipe analisa as informações e orienta sobre a necessidade de medição ou visita ao local.",
  },
  {
    icon: ShieldCheck,
    title: "Definição da solução",
    description:
      "Tipo de vidro, medidas, ferragens, acabamento e instalação são definidos conforme o projeto.",
  },
  {
    icon: Clock3,
    title: "Produção e instalação",
    description:
      "Após a aprovação, o prazo é informado de acordo com a fabricação e a complexidade do serviço.",
  },
];

export default function ServiceLandingPage({
  data,
}: {
  data: ServicePageData;
}) {
  const pageUrl = `${siteConfig.seo.url}/servicos/${data.slug}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    data.whatsappMessage,
  )}`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: data.name,
      serviceType: data.name,
      description: data.description,
      url: pageUrl,
      areaServed: [
        {
          "@type": "City",
          name: "Rio de Janeiro",
        },
        {
          "@type": "AdministrativeArea",
          name: "Rio de Janeiro",
        },
      ],
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: siteConfig.nome,
        url: siteConfig.seo.url,
        telephone: `+${siteConfig.whatsapp}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rio de Janeiro",
          addressRegion: "RJ",
          addressCountry: "BR",
        },
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
          name: "Serviços",
          item: `${siteConfig.seo.url}/servicos`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: data.name,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <div className="w-full overflow-x-clip bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      {structuredData.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
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
              "radial-gradient(circle at 88% 15%, var(--color-accent-light), transparent 30%), radial-gradient(circle at 8% 92%, var(--color-accent-light), transparent 34%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-12 lg:py-24">
          <div>
            <nav
              aria-label="Navegação estrutural"
              className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-hero-muted)]"
            >
              <Link href="/" className="transition hover:text-white">
                Início
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/servicos"
                className="transition hover:text-white"
              >
                Serviços
              </Link>

              <span aria-hidden="true">/</span>

              <span className="font-semibold text-[var(--color-text-light)]">
                {data.name}
              </span>
            </nav>

            <span className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-text-light)] backdrop-blur-sm">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {data.eyebrow}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text-light)] sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-hero-muted)]">
              {data.description}
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
                href="#detalhes"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-[var(--color-text-light)] backdrop-blur-sm transition hover:bg-white/20"
              >
                Conhecer o serviço
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl">
            <Image
              src={data.image}
              alt={data.imageAlt}
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
      </section>

      {/* INTRODUÇÃO */}
      <section
        id="detalhes"
        className="scroll-mt-24 bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Solução sob medida
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
              {data.introTitle}
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[var(--color-text-secondary)]">
            {data.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
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
              Características do serviço
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl lg:text-5xl">
              {data.featureTitle}
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-hero-muted)]">
              {data.featureDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-[var(--color-accent-light)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <h3 className="mt-5 text-xl font-bold text-[var(--color-text-light)]">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--color-text-hero-muted)]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APLICAÇÕES */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Onde pode ser utilizado
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              {data.applicationsTitle}
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-secondary)]">
              {data.applicationsDescription}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {data.applications.map((application) => (
              <div
                key={application}
                className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]"
                  aria-hidden="true"
                />

                <span className="font-semibold leading-7 text-[var(--color-text-primary)]">
                  {application}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Como funciona
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              {data.processTitle}
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)]">
              {data.processDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <span className="text-sm font-bold text-[var(--color-text-muted)]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[var(--color-text-primary)]">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
              Perguntas frequentes
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl">
              Dúvidas sobre {data.name.toLowerCase()}
            </h2>

            <p className="mt-5 leading-8 text-[var(--color-text-hero-muted)]">
              Informações gerais para ajudar no primeiro atendimento. As
              especificações finais dependem das medidas e do ambiente.
            </p>

            <Link
              href="/duvidas-frequentes"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--color-text-light)]"
            >
              Ver todas as dúvidas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="divide-y divide-white/15 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
            {data.faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[var(--color-text-light)]">
                  {faq.question}

                  <span className="text-xl text-[var(--color-accent-light)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-[var(--color-text-hero-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS RELACIONADOS */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Outros serviços
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Conheça outras soluções em vidro
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {data.relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
              >
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
                  {service.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]">
                  Conhecer serviço
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

      {/* CTA FINAL */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Atendimento no Rio de Janeiro
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">
                Solicite um orçamento de {data.name.toLowerCase()}
              </h2>

              <p className="mt-4 text-lg leading-8 text-[var(--color-text-secondary)]">
                Envie o bairro, fotos e medidas aproximadas para iniciar a
                avaliação do seu projeto.
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