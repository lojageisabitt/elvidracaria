// src/app/(site)/onde-atendemos/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  MapPin,
  MapPinned,
  MessageCircle,
  PanelsTopLeft,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";

type RegionGroup = {
  title: string;
  description: string;
  neighborhoods: string[];
};

const regionGroups: RegionGroup[] = [
  {
    title: "Zona Norte e Grande Tijuca",
    description:
      "Atendimento para projetos residenciais e comerciais em diferentes bairros da Zona Norte do Rio de Janeiro.",
    neighborhoods: [
      "Vila da Penha",
      "Tijuca",
      "Vila Isabel",
      "Maracanã",
      "Grajaú",
      "Andaraí",
      "Méier",
      "Cachambi",
      "Del Castilho",
      "Engenho Novo",
      "Engenho de Dentro",
      "Madureira",
      "Campinho",
      "Penha",
      "Olaria",
      "Ramos",
      "Bonsucesso",
      "Vigário Geral",
      "Pavuna",
      "Ilha do Governador",
    ],
  },
  {
    title: "Zona Oeste",
    description:
      "Serviços de vidraçaria sob medida para casas, apartamentos, condomínios, lojas e empresas na Zona Oeste.",
    neighborhoods: [
      "Barra da Tijuca",
      "Recreio dos Bandeirantes",
      "Jacarepaguá",
      "Freguesia",
      "Taquara",
      "Pechincha",
      "Curicica",
      "Cidade de Deus",
      "Praça Seca",
      "Tanque",
      "Campo Grande",
      "Santa Cruz",
      "Bangu",
      "Realengo",
      "Padre Miguel",
      "Guaratiba",
    ],
  },
  {
    title: "Centro e Zona Sul",
    description:
      "Atendimento para projetos de vidro em imóveis residenciais e estabelecimentos comerciais no Centro e na Zona Sul.",
    neighborhoods: [
      "Centro",
      "Lapa",
      "Glória",
      "Catete",
      "Flamengo",
      "Botafogo",
      "Copacabana",
      "Ipanema",
      "Leblon",
      "Lagoa",
      "Jardim Botânico",
      "Gávea",
      "São Conrado",
      "Urca",
    ],
  },
];

const services = [
  {
    icon: Home,
    title: "Projetos residenciais",
    description:
      "Box de vidro, espelhos, guarda-corpo, corrimão, portas e fechamento de sacadas.",
  },
  {
    icon: Building2,
    title: "Projetos comerciais",
    description:
      "Fachadas, vitrines, portas e aplicações em vidro para lojas, academias e empresas.",
  },
  {
    icon: PanelsTopLeft,
    title: "Soluções sob medida",
    description:
      "Atendimento conforme as medidas, o tipo de instalação e as características do ambiente.",
  },
];

const faqs = [
  {
    question: "A E & L Vidraçaria atende todo o Rio de Janeiro?",
    answer:
      "A empresa atende diferentes regiões da cidade e do estado do Rio de Janeiro. A disponibilidade depende do bairro, do tipo de serviço e das condições do projeto. Envie o endereço pelo WhatsApp para confirmar.",
  },
  {
    question: "A vidraçaria está localizada em qual bairro?",
    answer:
      "A E & L Vidraçaria tem base na Vila da Penha, na Zona Norte do Rio de Janeiro.",
  },
  {
    question: "Vocês atendem projetos residenciais e comerciais?",
    answer:
      "Sim. A empresa atende casas, apartamentos, condomínios, lojas, escritórios, academias e outros estabelecimentos comerciais.",
  },
  {
    question: "Como confirmar se meu bairro é atendido?",
    answer:
      "Envie o bairro, o endereço aproximado, o tipo de serviço e, quando possível, fotos e medidas do local pelo WhatsApp.",
  },
  {
    question: "É possível solicitar orçamento à distância?",
    answer:
      "O primeiro atendimento pode ser iniciado pelo WhatsApp. Fotos, vídeos e medidas aproximadas ajudam na avaliação inicial, mas alguns projetos podem exigir visita técnica.",
  },
];

const allNeighborhoods = regionGroups.flatMap((region) => region.neighborhoods);

const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de confirmar o atendimento da E & L Vidraçaria no meu bairro e solicitar um orçamento.",
);

const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;
const pageUrl = `${siteConfig.seo.url}/onde-atendemos`;

export const metadata: Metadata = {
  title: "Vidraçaria no Rio de Janeiro | Bairros atendidos pela E & L",
  description:
    "Veja onde a E & L Vidraçaria atende no Rio de Janeiro. Serviços de box, espelhos, fachadas, portas, guarda-corpo, corrimão e projetos sob medida em diferentes bairros.",
  keywords: [
    "vidraçaria no Rio de Janeiro",
    "vidraçaria Rio de Janeiro",
    "vidraçaria Vila da Penha",
    "vidraçaria Zona Norte RJ",
    "vidraçaria Zona Oeste RJ",
    "vidraçaria Zona Sul RJ",
    "serviços de vidraçaria RJ",
    "bairros atendidos vidraçaria Rio de Janeiro",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Vidraçaria no Rio de Janeiro | Onde atendemos",
    description:
      "Conheça os bairros e regiões atendidos pela E & L Vidraçaria no Rio de Janeiro.",
    url: pageUrl,
    siteName: siteConfig.nome,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: siteConfig.seo.ogImage,
        alt: "E & L Vidraçaria no Rio de Janeiro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidraçaria no Rio de Janeiro | Onde atendemos",
    description:
      "Veja as regiões atendidas pela E & L Vidraçaria no Rio de Janeiro.",
    images: [siteConfig.seo.ogImage],
  },
};

export default function AreasPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Áreas atendidas pela E & L Vidraçaria no Rio de Janeiro",
      headline: "Vidraçaria no Rio de Janeiro: bairros e regiões atendidos",
      description:
        "Conheça os bairros e regiões atendidos pela E & L Vidraçaria em projetos residenciais e comerciais.",
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.nome,
        url: siteConfig.seo.url,
      },
      about: {
        "@type": "HomeAndConstructionBusiness",
        name: siteConfig.nome,
        url: siteConfig.seo.url,
        telephone: `+${siteConfig.whatsapp}`,
        description:
          "Vidraçaria no Rio de Janeiro especializada em soluções residenciais e comerciais em vidro.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rio de Janeiro",
          addressRegion: "RJ",
          addressCountry: "BR",
        },
        areaServed: allNeighborhoods.map((neighborhood) => ({
          "@type": "Place",
          name: `${neighborhood}, Rio de Janeiro, RJ`,
        })),
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
          name: "Onde atendemos",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
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
              Onde atendemos
            </span>
          </nav>

          <div className="mt-10 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-text-light)] backdrop-blur-sm">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Base na Vila da Penha
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text-light)] sm:text-5xl lg:text-6xl">
              Vidraçaria no Rio de Janeiro: conheça as regiões atendidas
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-hero-muted)]">
              A E & L Vidraçaria atende projetos residenciais e comerciais em
              diferentes bairros do Rio de Janeiro, com soluções sob medida em
              box, espelhos, portas, fachadas, guarda-corpo, corrimão e
              fechamento de sacadas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-success)] px-6 py-3 font-bold text-[var(--color-text-light)] transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-success)]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Confirmar atendimento
              </Link>

              <Link
                href="#bairros-atendidos"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-[var(--color-text-light)] backdrop-blur-sm transition hover:bg-white/20"
              >
                Ver bairros atendidos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Atendimento local
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
              Serviços de vidraçaria em diferentes regiões do Rio de Janeiro
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[var(--color-text-secondary)]">
            <p>
              Localizada na Vila da Penha, a E & L atua como vidraçaria no Rio
              de Janeiro há mais de 20 anos, atendendo projetos para casas,
              apartamentos, condomínios, lojas, escritórios e empresas.
            </p>

            <p>
              A área de atendimento pode variar conforme o tipo de serviço, as
              medidas, a complexidade da instalação e a disponibilidade para o
              endereço informado.
            </p>

            <p>
              Para confirmar o atendimento, envie o bairro, o tipo de projeto
              e, quando possível, fotos e medidas aproximadas pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* TIPOS DE ATENDIMENTO */}
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
              Tipos de projeto
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl">
              Atendimento residencial e comercial
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
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

      {/* BAIRROS */}
      <section
        id="bairros-atendidos"
        aria-labelledby="areas-title"
        className="scroll-mt-24 bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <header className="max-w-4xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Bairros e regiões
            </span>

            <h2
              id="areas-title"
              className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
            >
              Bairros do Rio de Janeiro atendidos pela E & L Vidraçaria
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)]">
              Confira algumas das regiões onde a empresa realiza serviços de
              vidraçaria. Outros bairros podem ser avaliados durante o
              atendimento.
            </p>
          </header>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {regionGroups.map((region) => (
              <article
                key={region.title}
                className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 sm:p-8"
              >
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                  {region.title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
                  {region.description}
                </p>

                <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {region.neighborhoods.map((neighborhood) => (
                    <div
                      key={neighborhood}
                      className="flex items-start gap-2 rounded-xl px-2 py-2 text-sm text-[var(--color-text-secondary)] transition hover:bg-[var(--color-bg-hover)] sm:text-base"
                    >
                      <MapPinned
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]"
                        aria-hidden="true"
                      />

                      <span>{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <p className="leading-7 text-[var(--color-text-secondary)]">
              Seu bairro não aparece na lista? Isso não significa que o
              atendimento não seja possível. Envie o endereço pelo WhatsApp
              para verificar a disponibilidade.
            </p>
          </div>
        </div>
      </section>

      {/* COMO CONFIRMAR */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Solicitação de atendimento
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Como confirmar o atendimento no seu bairro
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-secondary)]">
              Algumas informações ajudam a equipe a avaliar o projeto e a
              disponibilidade para o endereço.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Informe o bairro e o endereço aproximado.",
              "Explique qual serviço de vidraçaria você precisa.",
              "Envie fotos ou vídeos do ambiente.",
              "Inclua medidas aproximadas, quando possível.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]"
                  aria-hidden="true"
                />

                <span className="font-semibold leading-7 text-[var(--color-text-primary)]">
                  {item}
                </span>
              </div>
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
              Dúvidas frequentes
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl">
              Atendimento de vidraçaria no Rio de Janeiro
            </h2>

            <p className="mt-5 leading-8 text-[var(--color-text-hero-muted)]">
              Informações importantes antes de solicitar seu orçamento.
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
            {faqs.map((faq) => (
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

      {/* CTA FINAL */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Consulte sua região
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">
                Precisa de uma vidraçaria no Rio de Janeiro?
              </h2>

              <p className="mt-4 text-lg leading-8 text-[var(--color-text-secondary)]">
                Envie seu bairro e o tipo de serviço para confirmar o
                atendimento e iniciar o orçamento.
              </p>
            </div>

            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-success)] px-6 py-3 font-bold text-[var(--color-text-light)] transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-success)]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Confirmar meu bairro
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}