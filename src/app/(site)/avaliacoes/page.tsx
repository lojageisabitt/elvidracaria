// src/app/(site)/avaliacoes/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Quote,
  Star,
  BadgeCheck,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";

type ReviewItem = {
  name: string;
  dateLabel: string;
  datePublished: string;
  rating: number;
  text: string;
};

const reviews: ReviewItem[] = [
  {
    name: "Edmar Merlim",
    dateLabel: "June 21, 2024",
    datePublished: "2024-06-21",
    rating: 5,
    text: "Mto bem atendido tdos de parabéns",
  },
  {
    name: "Débora Silveira",
    dateLabel: "June 21, 2024",
    datePublished: "2024-06-21",
    rating: 5,
    text: "Ótimo atendimento e rapidez no orçamento!! 👏🏽👏🏽👏🏽 ...",
  },
  {
    name: "marcos viana",
    dateLabel: "June 21, 2024",
    datePublished: "2024-06-21",
    rating: 5,
    text: "marcos viana gives E L Vidraçaria 5 stars rating",
  },
  {
    name: "Ales5 Felipe",
    dateLabel: "June 21, 2023",
    datePublished: "2023-06-21",
    rating: 5,
    text: "Comprometimento, atenção e idoneidade. Incomparável. Recomendadissimo. Primeiramente o Leandro.",
  },
  {
    name: "S. Dias",
    dateLabel: "June 21, 2023",
    datePublished: "2023-06-21",
    rating: 4,
    text: "Bom atendimento, bons preços, boa localização.",
  },
  {
    name: "Luciano FB",
    dateLabel: "June 21, 2023",
    datePublished: "2023-06-21",
    rating: 5,
    text: "Luciano FB gives E L Vidraçaria 5 stars rating",
  },
  {
    name: "Helen Nascimento* Da Silva",
    dateLabel: "June 18, 2022",
    datePublished: "2022-06-18",
    rating: 5,
    text: "Simplesmente a melhor! Ótimo atendimento, fui muito bem atendida desde a cotação até a finalização do serviço!",
  },
  {
    name: "Guilherme Martins",
    dateLabel: "June 21, 2022",
    datePublished: "2022-06-21",
    rating: 5,
    text: "Guilherme Martins gives E L Vidraçaria 5 stars rating",
  },
  {
    name: "jose carlos",
    dateLabel: "June 21, 2022",
    datePublished: "2022-06-21",
    rating: 5,
    text: "Dedicação, qualidade e presteza em serviços, materiais e atendimento",
  },
  {
    name: "Larissa",
    dateLabel: "June 18, 2022",
    datePublished: "2022-06-18",
    rating: 5,
    text: "Ótimo atendimento! Super indico!!",
  },
  {
    name: "Helen Da Silva Nascimento Carvalho",
    dateLabel: "June 14, 2022",
    datePublished: "2022-06-14",
    rating: 5,
    text: "Helen Da Silva Nascimento Carvalho gives E L Vidraçaria 5 stars rating",
  },
  {
    name: "Brendo Santos",
    dateLabel: "June 19, 2021",
    datePublished: "2021-06-19",
    rating: 5,
    text: "Very good price and quality service",
  },
];

const aggregateRating = {
  ratingValue: 4.1,
  reviewCount: 15,
};

const pageUrl = `${siteConfig.seo.url}/avaliacoes`;

const whatsappMessage = encodeURIComponent(
  "Olá! Vi as avaliações da E & L Vidraçaria no site e gostaria de solicitar um orçamento.",
);

const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;

const avatarClasses = [
  "bg-sky-100 text-sky-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-fuchsia-100 text-fuchsia-700",
  "bg-indigo-100 text-indigo-700",
  "bg-rose-100 text-rose-700",
];

function getInitials(name: string): string {
  const words = name
    .replace(/[*]/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 1) {
    return words[0].slice(0, 1).toUpperCase();
  }

  return `${words[0][0] ?? ""}${words[1][0] ?? ""}`.toUpperCase();
}

function renderStars(rating: number) {
  return Array.from({ length: 5 }, (_, index) => {
    const filled = index < rating;

    return (
      <Star
        key={index}
        className={
          filled
            ? "h-4 w-4 fill-amber-400 text-amber-400"
            : "h-4 w-4 text-[var(--color-border)]"
        }
        aria-hidden="true"
      />
    );
  });
}

export const metadata: Metadata = {
  title: "Avaliações da E & L Vidraçaria no Rio de Janeiro",
  description:
    "Veja avaliações de clientes da E & L Vidraçaria no Rio de Janeiro e conheça a percepção de quem já contratou serviços como box de vidro, espelhos, fachadas e outros projetos.",
  keywords: [
    "avaliações E & L Vidraçaria",
    "vidraçaria no Rio de Janeiro",
    "depoimentos vidraçaria RJ",
    "avaliações de vidraçaria no Rio de Janeiro",
    "clientes E & L Vidraçaria",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Avaliações da E & L Vidraçaria no Rio de Janeiro",
    description:
      "Confira avaliações de clientes da E & L Vidraçaria no Rio de Janeiro.",
    url: pageUrl,
    siteName: siteConfig.nome,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: siteConfig.seo.ogImage,
        alt: "Avaliações da E & L Vidraçaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avaliações da E & L Vidraçaria no Rio de Janeiro",
    description:
      "Veja o que clientes dizem sobre a E & L Vidraçaria no Rio de Janeiro.",
    images: [siteConfig.seo.ogImage],
  },
};

export default function ReviewsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Avaliações da E & L Vidraçaria no Rio de Janeiro",
      headline: "Veja o que clientes dizem sobre a E & L Vidraçaria",
      description:
        "Página com avaliações de clientes da E & L Vidraçaria no Rio de Janeiro.",
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.nome,
        url: siteConfig.seo.url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteConfig.nome,
      url: siteConfig.seo.url,
      telephone: `+${siteConfig.whatsapp}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rio de Janeiro",
        addressRegion: "RJ",
        addressCountry: "BR",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
      },
      review: reviews.map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.name,
        },
        datePublished: review.datePublished,
        reviewBody: review.text,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: 5,
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
          name: "Avaliações",
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
              Avaliações
            </span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-text-light)] backdrop-blur-sm">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                Prova social da marca
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text-light)] sm:text-5xl lg:text-6xl">
                Avaliações da E &amp; L Vidraçaria no Rio de Janeiro
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-hero-muted)]">
                Veja o que clientes dizem sobre a E &amp; L Vidraçaria e
                conheça a percepção de quem já contratou serviços de box de
                vidro, espelhos sob medida, fachadas, portas e outros projetos
                no Rio de Janeiro.
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
                  href="/projetos"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-[var(--color-text-light)] backdrop-blur-sm transition hover:bg-white/20"
                >
                  Ver projetos
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-7 backdrop-blur-sm sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-text-hero-muted)]">
                    Resumo das avaliações
                  </p>

                  <h2 className="mt-3 text-3xl font-extrabold text-[var(--color-text-light)]">
                    E L Vidraçaria
                  </h2>
                </div>

                <Quote className="h-8 w-8 text-[var(--color-accent-light)]" aria-hidden="true" />
              </div>

              <div className="mt-6 flex items-center gap-4">
                <span className="text-5xl font-extrabold text-[var(--color-text-light)]">
                  {aggregateRating.ratingValue.toFixed(1)}
                </span>

                <div>
                  <div className="flex items-center gap-1">
                    {renderStars(4)}
                    <Star
                      className="h-4 w-4 fill-amber-400/40 text-amber-400"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-2 text-sm text-[var(--color-text-hero-muted)]">
                    Baseado em {aggregateRating.reviewCount} avaliações exibidas
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-2xl font-bold text-[var(--color-text-light)]">
                    20+
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-hero-muted)]">
                    Anos de experiência no ramo da vidraçaria
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-2xl font-bold text-[var(--color-text-light)]">
                    RJ
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-hero-muted)]">
                    Projetos residenciais e comerciais
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              O que os clientes dizem
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
              Avaliações reais da E &amp; L Vidraçaria
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[var(--color-text-secondary)]">
            <p>
              As avaliações abaixo foram montadas com base nas recomendações
              exibidas no print enviado, para que a página tenha um visual mais
              personalizado e alinhado ao restante do site.
            </p>

            <p>
              Isso fortalece a prova social da marca e melhora a leitura em
              dispositivos móveis e desktop, sem depender do widget externo.
            </p>

            <p>
              Você poderá substituir, remover ou acrescentar novas avaliações
              sempre que quiser, mantendo o mesmo padrão visual.
            </p>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section
        className="py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent-hover), var(--color-accent))",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
              Cards personalizados
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl">
              Recomendações de clientes
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-hero-muted)]">
              Cards leves, organizados e fáceis de estilizar conforme a
              identidade visual do projeto.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review, index) => (
              <article
                key={`${review.name}-${review.datePublished}`}
                className="flex h-full flex-col rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ${avatarClasses[index % avatarClasses.length]}`}
                  >
                    {getInitials(review.name)}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-tight text-[var(--color-text-light)]">
                      {review.name}
                    </h3>

                    <p className="mt-1 text-sm text-[var(--color-text-hero-muted)]">
                      {review.dateLabel}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>

                <p className="mt-5 flex-1 leading-7 text-[var(--color-text-light)]/90">
                  {review.text}
                </p>

                <div className="mt-6 border-t border-white/15 pt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-light)]">
                    <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                    Avaliação exibida no Google
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LINKS INTERNOS */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Continue navegando
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Conheça os serviços e projetos da empresa
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Serviços",
                description:
                  "Veja box de vidro, espelhos, fachadas, portas, guarda-corpo e outras soluções.",
                href: "/servicos",
              },
              {
                title: "Projetos",
                description:
                  "Conheça alguns projetos residenciais e comerciais já executados.",
                href: "/projetos",
              },
              {
                title: "Onde atendemos",
                description:
                  "Consulte as regiões atendidas pela E & L Vidraçaria no Rio de Janeiro.",
                href: "/onde-atendemos",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
              >
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
                  {item.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]">
                  Acessar página
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
                Solicite seu orçamento
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[var(--color-text-light)] sm:text-4xl">
                Quer seu projeto com uma vidraçaria no Rio de Janeiro?
              </h2>

              <p className="mt-4 text-lg leading-8 text-[var(--color-text-hero-muted)]">
                Fale com a E &amp; L Vidraçaria e solicite atendimento para seu
                projeto residencial ou comercial.
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