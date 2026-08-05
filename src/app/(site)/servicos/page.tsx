// src/app/(site)/servicos/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  GlassWater,
  Home,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";

type ServiceItem = {
  name: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

const services: ServiceItem[] = [
  {
    name: "Box de Vidro",
    description:
      "Instalação de box de vidro sob medida para banheiros residenciais e comerciais, com acabamento moderno, segurança e praticidade no dia a dia.",
    href: "/servicos/box-de-vidro",
    image: "/servicos/Box-Blindex.png",
    imageAlt: "Box de vidro instalado em banheiro moderno no Rio de Janeiro",
  },
  {
    name: "Espelhos Sob Medida",
    description:
      "Espelhos personalizados para salas, quartos, banheiros, academias, lojas e ambientes corporativos, valorizando iluminação e amplitude do espaço.",
    href: "/servicos/espelho-com-iluminacao",
    image: "/servicos/espelho-com-led.png",
    imageAlt: "Espelho sob medida instalado em ambiente interno",
  },
  {
    name: "Guarda-Corpo e Corrimão",
    description:
      "Projetos em vidro para escadas, sacadas e áreas internas com foco em proteção, sofisticação visual e integração com diferentes estilos de ambiente.",
    href: "/servicos/guarda-corpo-e-corrimao",
    image: "/servicos/Escada-em-aluminio-Preto.png",
    imageAlt: "Guarda-corpo de vidro instalado em escada residencial",
  },
  {
    name: "Fechamento de Sacadas",
    description:
      "Soluções para fechamento de sacadas em vidro que aumentam conforto, proteção e aproveitamento do espaço em imóveis residenciais e comerciais.",
    href: "/servicos/fechamento-de-sacadas",
    image: "/servicos/Guarda-Corpo.png",
    imageAlt: "Fechamento de sacada com painéis de vidro",
  },
  {
    name: "Portas de Vidro",
    description:
      "Portas de vidro para casas, escritórios, lojas e empresas, unindo funcionalidade, design limpo e melhor aproveitamento visual dos ambientes.",
    href: "/servicos/portas-de-vidro",
    image: "/servicos/Porta-Fume.png",
    imageAlt: "Porta de vidro instalada em ambiente comercial",
  },
  {
    name: "Fachadas e Vidros Temperados",
    description:
      "Projetos em fachadas de vidro e aplicações com vidro temperado para quem busca resistência, elegância e uma apresentação profissional do imóvel.",
    href: "/servicos/fachada-de-loja-com-vidro",
    image: "/empresa-smartfit.jpeg",
    imageAlt: "Fachada de vidro em imóvel comercial no Rio de Janeiro",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Conte sua necessidade",
    description:
      "Envie o tipo de serviço, o endereço e, quando possível, fotos e medidas do local.",
  },
  {
    icon: Ruler,
    title: "Avaliação e medição",
    description:
      "A equipe analisa o projeto e orienta sobre medidas, materiais, acabamentos e instalação.",
  },
  {
    icon: BadgeCheck,
    title: "Orçamento",
    description:
      "Você recebe uma proposta de acordo com o serviço e as características do ambiente.",
  },
  {
    icon: ShieldCheck,
    title: "Instalação",
    description:
      "O serviço é executado com atenção à segurança, ao funcionamento e ao acabamento.",
  },
];

const faqs = [
  {
    question: "A E & L Vidraçaria atende residências e empresas?",
    answer:
      "Sim. A empresa atende projetos residenciais e comerciais, como box, espelhos, portas, fachadas, vitrines, guarda-corpo, corrimão e fechamento de sacadas.",
  },
  {
    question: "O orçamento é gratuito?",
    answer:
      "O primeiro atendimento pode ser iniciado gratuitamente pelo WhatsApp. Dependendo do projeto, poderá ser necessária uma visita técnica ou medição no local.",
  },
  {
    question: "Vocês fazem serviços sob medida?",
    answer:
      "Sim. As soluções são planejadas conforme as medidas, o ambiente, o acabamento desejado e as necessidades de cada cliente.",
  },
  {
    question: "Vocês trabalham com vidro temperado?",
    answer:
      "Sim. O tipo e a espessura do vidro são definidos conforme a aplicação, as medidas e os requisitos de segurança do projeto.",
  },
  {
    question: "Qual é o prazo para instalação?",
    answer:
      "O prazo varia conforme o serviço, as medidas, o acabamento escolhido e a complexidade da instalação. A previsão é informada durante o orçamento.",
  },
  {
    question: "Quais regiões são atendidas?",
    answer:
      "A empresa está localizada na Vila da Penha e atende diferentes regiões do Rio de Janeiro. Envie o endereço pelo WhatsApp para confirmar a disponibilidade.",
  },
];

const whatsappHref =
  "https://wa.me/5521964883630?text=Olá%2C%20quero%20solicitar%20um%20orçamento%20para%20um%20serviço%20de%20vidraçaria.";

const phoneHref = "tel:+5521964883630";

const pageUrl = `${siteConfig.seo.url}/servicos`;

export const metadata: Metadata = {
  title: "Serviços de Vidraçaria no Rio de Janeiro | E & L Vidraçaria",
  description:
    "Conheça os serviços da E & L Vidraçaria: box de vidro, espelhos sob medida, guarda-corpo, corrimão, fechamento de sacadas, portas, fachadas e vidros temperados no Rio de Janeiro.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Serviços de Vidraçaria no Rio de Janeiro | E & L Vidraçaria",
    description:
      "Soluções sob medida em vidro para residências e empresas no Rio de Janeiro.",
    url: pageUrl,
    siteName: siteConfig.nome,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviços de Vidraçaria no Rio de Janeiro",
    description:
      "Box, espelhos, guarda-corpo, portas, fachadas, fechamento de sacadas e outras soluções em vidro.",
  },
};

function ServiceIcon({ name }: { name: string }) {
  const normalizedName = name.toLowerCase();

  if (normalizedName.includes("box")) {
    return <GlassWater className="h-5 w-5" aria-hidden="true" />;
  }

  if (normalizedName.includes("espelho")) {
    return <Home className="h-5 w-5" aria-hidden="true" />;
  }

  if (
    normalizedName.includes("fachada") ||
    normalizedName.includes("porta")
  ) {
    return <Building2 className="h-5 w-5" aria-hidden="true" />;
  }

  return <PanelsTopLeft className="h-5 w-5" aria-hidden="true" />;
}

export default function ServicesPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Serviços de Vidraçaria no Rio de Janeiro",
      description:
        "Serviços de vidraçaria para residências e empresas no Rio de Janeiro.",
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.nome,
        url: siteConfig.seo.url,
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.name,
          url: `${siteConfig.seo.url}${service.href}`,
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
          name: "Serviços",
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
    <div
      className="w-full overflow-x-clip bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
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
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20"
          style={{
            background:
              "linear-gradient(135deg, var(--color-accent-hover), var(--color-accent))",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 84% 20%, var(--color-accent-light), transparent 30%), radial-gradient(circle at 12% 90%, var(--color-accent-light), transparent 34%)",
          }}
        />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <nav
            aria-label="Navegação estrutural"
            className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-hero-muted)]"
          >
            <Link href="/" className="transition hover:text-white">
              Início
            </Link>

            <span aria-hidden="true">/</span>

            <span className="font-semibold text-[var(--color-text-light)]">
              Serviços
            </span>
          </nav>

          <div className="mt-10 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-text-light)] backdrop-blur-sm">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Vila da Penha • Atendimento no Rio de Janeiro
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text-light)] sm:text-5xl lg:text-6xl">
              Serviços de vidraçaria para residências e empresas
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-hero-muted)]">
              Soluções sob medida em vidro para banheiros, salas, escadas,
              sacadas, lojas, escritórios e diferentes tipos de ambientes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-success)] px-6 py-3 font-bold text-[var(--color-text-light)] transition hover:bg-[var(--color-bg-secondary)]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Solicitar orçamento
              </Link>

              <Link
                href="#lista-de-servicos"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-[var(--color-text-light)] backdrop-blur-sm transition hover:bg-white/20"
              >
                Ver todos os serviços
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        id="lista-de-servicos"
        aria-labelledby="services-title"
        className="scroll-mt-24 bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <header className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Principais serviços
            </span>

            <h2
              id="services-title"
              className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
            >
              Escolha a solução ideal para o seu projeto
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-secondary)]">
              Acesse a página de cada serviço para conhecer aplicações,
              detalhes, perguntas frequentes e projetos relacionados.
            </p>
          </header>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, transparent 55%, color-mix(in srgb, var(--color-bg-primary) 38%, transparent) 100%)",
                    }}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                      <ServiceIcon name={service.name} />
                    </span>

                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                      E &amp; L Vidraçaria
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    {service.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-text-tertiary)] sm:text-base">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]">
                    Saiba mais

                    <ArrowRight
                      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
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
              Como funciona
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl">
              Do primeiro contato à instalação
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-hero-muted)]">
              Um processo direto para entender o projeto e orientar a melhor
              solução para o ambiente.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-[var(--color-accent-light)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <span className="text-sm font-bold text-white/50">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-[var(--color-text-light)]">
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

      {/* DIFERENCIAIS */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Atendimento personalizado
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Soluções planejadas conforme o ambiente
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-secondary)]">
              Cada projeto possui medidas, aplicações e necessidades
              diferentes. Por isso, o atendimento considera o local, o uso e o
              acabamento esperado.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Projetos residenciais e comerciais",
              "Soluções e medidas personalizadas",
              "Orientação sobre materiais e acabamentos",
              "Instalação com atenção à segurança",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5"
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
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Dúvidas frequentes
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Antes de solicitar seu orçamento
            </h2>

            <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
              Confira informações gerais sobre atendimento, medidas, materiais
              e instalação.
            </p>

            <Link
              href="/duvidas-frequentes"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]"
            >
              Ver todas as dúvidas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="divide-y divide-[var(--color-border)] rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[var(--color-text-primary)]">
                  {faq.question}

                  <span className="text-xl text-[var(--color-accent)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-[var(--color-text-secondary)]">
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
          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/15 px-6 py-10 shadow-2xl sm:px-10 sm:py-14 lg:px-14"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent-hover), var(--color-accent), var(--color-accent-light))",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at top left, rgba(255,255,255,.22), transparent 34%), radial-gradient(circle at bottom right, rgba(255,255,255,.12), transparent 30%)",
              }}
            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl">
                  Qual serviço você precisa?
                </h2>

                <p className="mt-4 text-lg leading-8 text-[var(--color-text-hero-muted)]">
                  Envie fotos, medidas aproximadas e o bairro do projeto para
                  iniciar seu atendimento.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-success)] px-6 py-3 font-bold text-[var(--color-text-light)] transition hover:bg-[var(--color-bg-secondary)]"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Falar pelo WhatsApp
                </Link>

                <Link
                  href={phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-3 font-bold text-[var(--color-text-light)] transition hover:bg-white/20"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Ligar agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}