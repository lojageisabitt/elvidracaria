// src/app/(site)/sobre/page.tsx

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
  ShieldCheck,
  Store,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";

const pageUrl = `${siteConfig.seo.url}/sobre`;

const whatsappMessage = encodeURIComponent(
  "Olá! Conheci a E & L Vidraçaria pelo site e gostaria de solicitar um orçamento no Rio de Janeiro.",
);

const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;

const services = [
  {
    icon: GlassWater,
    title: "Box de vidro",
    description:
      "Box sob medida para banheiros residenciais e comerciais, com diferentes opções de acabamento.",
    href: "/servicos/box-de-vidro",
  },
  {
    icon: Home,
    title: "Espelhos sob medida",
    description:
      "Espelhos para banheiros, salas, quartos, academias, lojas e ambientes corporativos.",
    href: "/servicos/espelho-com-iluminacao",
  },
  {
    icon: PanelsTopLeft,
    title: "Guarda-corpo e corrimão",
    description:
      "Soluções em vidro para escadas, varandas, sacadas e outras áreas que exigem proteção.",
    href: "/servicos/guarda-corpo-e-corrimao",
  },
  {
    icon: Building2,
    title: "Fechamento de sacadas",
    description:
      "Projetos planejados para ampliar proteção, conforto e aproveitamento do ambiente.",
    href: "/servicos/fechamento-de-sacadas",
  },
  {
    icon: Store,
    title: "Portas de vidro",
    description:
      "Portas sob medida para casas, lojas, escritórios e diferentes espaços comerciais.",
    href: "/servicos/portas-de-vidro",
  },
  {
    icon: BadgeCheck,
    title: "Fachadas de vidro",
    description:
      "Fachadas, vitrines e aplicações comerciais desenvolvidas para valorizar o estabelecimento.",
    href: "/servicos/fachada-de-loja-com-vidro",
  },
];

const experienceHighlights = [
  {
    icon: Clock3,
    title: "Mais de 20 anos no ramo",
    description:
      "Experiência acumulada em serviços de vidraçaria para diferentes tipos de ambientes.",
  },
  {
    icon: Home,
    title: "Projetos residenciais",
    description:
      "Soluções para banheiros, salas, escadas, varandas, sacadas e outros espaços residenciais.",
  },
  {
    icon: Building2,
    title: "Projetos comerciais",
    description:
      "Fachadas, vitrines, portas e aplicações em vidro para lojas, academias e empresas.",
  },
  {
    icon: MapPin,
    title: "Atendimento no Rio de Janeiro",
    description:
      "Base na Vila da Penha e atendimento em diferentes regiões, conforme a disponibilidade.",
  },
];

const commitments = [
  "Atendimento para projetos residenciais e comerciais.",
  "Soluções planejadas conforme as medidas e o uso do ambiente.",
  "Orientação sobre tipos de vidro, aplicações e acabamentos.",
  "Cuidado com segurança, funcionamento e acabamento final.",
];

const projectImages = [
  {
    src: "/projects/fachada-club-men.jpg",
    alt: "Fachada comercial executada por vidraçaria no Rio de Janeiro",
  },
  {
    src: "/projects/fachada-smartfit.jpg",
    alt: "Fachada espelhada executada pela E & L Vidraçaria no Rio de Janeiro",
  },
  {
    src: "/projects/fachada-valisere.jpg",
    alt: "Fachada de loja com vidro instalada no Rio de Janeiro",
  },
];

export const metadata: Metadata = {
  title:
    "Sobre a E & L | Vidraçaria no Rio de Janeiro há mais de 20 anos",
  description:
    "Conheça a E & L Vidraçaria no Rio de Janeiro, com mais de 20 anos de experiência em box de vidro, espelhos, fachadas, portas, guarda-corpo, corrimão e projetos sob medida.",
  keywords: [
    "vidraçaria no Rio de Janeiro",
    "vidraçaria Rio de Janeiro",
    "vidraçaria Vila da Penha",
    "empresa de vidraçaria no Rio de Janeiro",
    "serviços de vidraçaria RJ",
    "E & L Vidraçaria",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "E & L Vidraçaria no Rio de Janeiro | Mais de 20 anos de experiência",
    description:
      "Conheça a trajetória da E & L Vidraçaria e seus projetos residenciais e comerciais no Rio de Janeiro.",
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
    title: "E & L Vidraçaria no Rio de Janeiro",
    description:
      "Mais de 20 anos de experiência em projetos residenciais e comerciais em vidro.",
    images: [siteConfig.seo.ogImage],
  },
};

export default function AboutPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Sobre a E & L Vidraçaria no Rio de Janeiro",
      headline:
        "E & L Vidraçaria no Rio de Janeiro: mais de 20 anos de experiência",
      description:
        "Página institucional da E & L Vidraçaria, empresa com mais de 20 anos de experiência em projetos residenciais e comerciais no Rio de Janeiro.",
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.nome,
        url: siteConfig.seo.url,
      },
      about: {
        "@type": "HomeAndConstructionBusiness",
        name: siteConfig.nome,
        description:
          "Vidraçaria no Rio de Janeiro especializada em projetos residenciais e comerciais, incluindo box, espelhos, guarda-corpo, corrimão, portas, fachadas e fechamento de sacadas.",
        url: siteConfig.seo.url,
        logo: `${siteConfig.seo.url}${siteConfig.logoHorizontal}`,
        image: `${siteConfig.seo.url}${siteConfig.seo.ogImage}`,
        telephone: `+${siteConfig.whatsapp}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rio de Janeiro",
          addressRegion: "RJ",
          addressCountry: "BR",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Rio de Janeiro",
          },
          {
            "@type": "Place",
            name: "Vila da Penha",
          },
          {
            "@type": "AdministrativeArea",
            name: "Estado do Rio de Janeiro",
          },
        ],
        knowsAbout: [
          "Box de vidro",
          "Espelhos sob medida",
          "Guarda-corpo de vidro",
          "Corrimão",
          "Fechamento de sacadas",
          "Portas de vidro",
          "Fachadas de vidro",
          "Vidro temperado",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de vidraçaria no Rio de Janeiro",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              url: `${siteConfig.seo.url}${service.href}`,
              areaServed: {
                "@type": "City",
                name: "Rio de Janeiro",
              },
            },
          })),
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
          name: "Sobre a E & L Vidraçaria",
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
              "radial-gradient(circle at 86% 18%, var(--color-accent-light), transparent 30%), radial-gradient(circle at 8% 90%, var(--color-accent-light), transparent 34%)",
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
              Sobre
            </span>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-text-light)] backdrop-blur-sm">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Vidraçaria na Vila da Penha • Rio de Janeiro
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text-light)] sm:text-5xl lg:text-6xl">
                E &amp; L Vidraçaria no Rio de Janeiro: mais de 20 anos de
                experiência
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-hero-muted)]">
                Somos uma vidraçaria no Rio de Janeiro com experiência em
                projetos residenciais e comerciais, oferecendo soluções sob
                medida em box, espelhos, guarda-corpo, corrimão, portas,
                fachadas e fechamento de sacadas.
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
                  href="/servicos"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-[var(--color-text-light)] backdrop-blur-sm transition hover:bg-white/20"
                >
                  Conhecer os serviços
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-3xl border border-white/20">
                <Image
                  src="/projects/fachada-smartfit.jpg"
                  alt="Projeto comercial executado pela E & L Vidraçaria no Rio de Janeiro"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  className="object-cover"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 55%, rgba(0,0,0,.45) 100%)",
                  }}
                />
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-[var(--color-text-light)] backdrop-blur-sm">
                <p className="text-3xl font-extrabold">20+</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-hero-muted)]">
                  Anos atuando no ramo de vidraçaria
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-[var(--color-text-light)] backdrop-blur-sm">
                <p className="text-3xl font-extrabold">RJ</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-hero-muted)]">
                  Projetos residenciais e comerciais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAJETÓRIA */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Nossa trajetória
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
              Uma vidraçaria no Rio de Janeiro para projetos residenciais e
              comerciais
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[var(--color-text-secondary)]">
            <p>
              Ao longo de mais de duas décadas, a E & L Vidraçaria participou
              de diferentes projetos no Rio de Janeiro, atendendo casas,
              apartamentos, condomínios, lojas, academias, escritórios e outros
              estabelecimentos.
            </p>

            <p>
              A experiência da empresa inclui instalação de box de vidro,
              espelhos sob medida, guarda-corpo, corrimão, fechamento de
              sacadas, portas, vitrines, fachadas e aplicações com vidro
              temperado.
            </p>

            <p>
              Localizada na Vila da Penha, nossa vidraçaria atende diferentes
              regiões da cidade e do estado do Rio de Janeiro, conforme o tipo
              de serviço e a disponibilidade para o endereço do projeto.
            </p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
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
              Soluções em vidro
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl lg:text-5xl">
              Serviços da nossa vidraçaria no Rio de Janeiro
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-hero-muted)]">
              Conheça as principais soluções oferecidas para imóveis
              residenciais e comerciais no Rio de Janeiro.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-light)] hover:bg-white/15"
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
                  Conhecer o serviço
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

      {/* EXPERIÊNCIA */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Experiência e atuação
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Experiência em vidraçaria construída ao longo de mais de 20 anos
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {experienceHighlights.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

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

      {/* NEW TEMPER */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)] p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-12">
            <div>
              <div className="relative h-20 w-full max-w-[220px]">
                <Image
                  src="/logo-new-temper.png"
                  alt="Logo da New Temper, fornecedora utilizada pela E & L Vidraçaria"
                  fill
                  sizes="220px"
                  className="object-contain object-left"
                />
              </div>

              <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Materiais e confiança
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                New Temper em projetos da E & L Vidraçaria
              </h2>

              <p className="mt-5 text-lg leading-8 text-[var(--color-text-secondary)]">
                A E & L Vidraçaria trabalha com a New Temper em projetos que
                exigem qualidade, segurança e acabamento profissional. Essa
                relação reforça o compromisso com materiais confiáveis em
                aplicações residenciais, comerciais e fachadas no Rio de
                Janeiro.
              </p>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
                <Store
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]"
                  aria-hidden="true"
                />

                <p className="leading-7 text-[var(--color-text-secondary)]">
                  A experiência acumulada inclui fachadas comerciais executadas
                  para lojas e empreendimentos em diferentes regiões do estado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPROMISSOS */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Nosso compromisso
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Atendimento de vidraçaria pensado para cada projeto
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-secondary)]">
              O objetivo é entender o ambiente e orientar uma solução adequada
              para o uso, as medidas e o resultado esperado.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {commitments.map((item) => (
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

      {/* PROJETOS */}
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
                Projetos executados
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl">
                Projetos de vidraçaria no Rio de Janeiro
              </h2>

              <p className="mt-5 text-lg leading-8 text-[var(--color-text-hero-muted)]">
                Conheça alguns projetos comerciais realizados ao longo da
                trajetória da empresa.
              </p>
            </div>

            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 font-semibold text-[var(--color-text-light)]"
            >
              Ver todos os projetos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projectImages.map((project) => (
              <div
                key={project.src}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/20"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Vidraçaria na Vila da Penha
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">
                Atendimento de vidraçaria no Rio de Janeiro
              </h2>

              <p className="mt-4 text-lg leading-8 text-[var(--color-text-secondary)]">
                A E & L está localizada na Vila da Penha e atende projetos em
                diferentes regiões do Rio de Janeiro. Envie o bairro e o tipo
                de serviço para confirmar a disponibilidade no endereço.
              </p>

              <Link
                href="/onde-atendemos"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]"
              >
                Consultar áreas atendidas
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
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