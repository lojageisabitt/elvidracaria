// src/app/(site)/projetos/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
  Store,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";

type ProjectItem = {
  name: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const projects: ProjectItem[] = [
  {
    name: "Fachada comercial Club Men",
    category: "Fachada de loja",
    description:
      "Projeto de fachada comercial em vidro com foco em apresentação visual, transparência e valorização do acesso da loja.",
    imageSrc: "/projects/fachada-club-men.jpg",
    imageAlt:
      "Fachada da loja Club Men com aplicação de vidro em projeto executado pela E & L Vidraçaria no estado do Rio de Janeiro.",
  },
  {
    name: "Fachada Cresci e Perdi",
    category: "Fachada de loja",
    description:
      "Fachada com fechamento em vidro voltada para exposição comercial, melhor aproveitamento da entrada e acabamento profissional.",
    imageSrc: "/projects/fachada-cresci-e-perdi.jpg",
    imageAlt:
      "Fachada da loja Cresci e Perdi com estrutura em vidro instalada pela E & L Vidraçaria no estado do Rio de Janeiro.",
  },
  {
    name: "Loja de departamentos",
    category: "Porta e fachada de vidro",
    description:
      "Projeto comercial com porta e fachada em vidro, desenvolvido para oferecer visual moderno e melhor aproveitamento do acesso.",
    imageSrc: "/projects/fachada-loja-de-departamentos.jpg",
    imageAlt:
      "Fachada de loja comercial com porta de vidro instalada pela E & L Vidraçaria no estado do Rio de Janeiro.",
  },
  {
    name: "Fachada Smart Fit",
    category: "Fachada espelhada",
    description:
      "Projeto de fachada espelhada com presença visual marcante e acabamento voltado para empreendimento comercial.",
    imageSrc: "/projects/fachada-smartfit.jpg",
    imageAlt:
      "Fachada espelhada da Smart Fit em projeto executado pela E & L Vidraçaria no estado do Rio de Janeiro.",
  },
  {
    name: "Unidade Smart Fit",
    category: "Fachada de vidro",
    description:
      "Aplicação comercial com fachada em vidro e acabamento alinhado à identidade visual da unidade.",
    imageSrc: "/projects/fachada-smartfit-2.jpg",
    imageAlt:
      "Unidade da Smart Fit com fachada em vidro executada pela E & L Vidraçaria no estado do Rio de Janeiro.",
  },
  {
    name: "Fachada Valisere",
    category: "Fachada de loja",
    description:
      "Projeto de fachada comercial com vidro e acabamento refinado, contribuindo para uma apresentação mais elegante da loja.",
    imageSrc: "/projects/fachada-valisere.jpg",
    imageAlt:
      "Fachada da loja Valisere com aplicação de vidro em projeto da E & L Vidraçaria no estado do Rio de Janeiro.",
  },
  {
    name: "Vitrine Valisere",
    category: "Vitrine e fachada",
    description:
      "Execução comercial em vidro pensada para valorizar a marca, a vitrine e a experiência visual do cliente.",
    imageSrc: "/projects/fachada-valisere-2.jpg",
    imageAlt:
      "Outra fachada da loja Valisere com vidro instalado pela E & L Vidraçaria no estado do Rio de Janeiro.",
  },
];

const projectTypes = [
  {
    icon: Store,
    title: "Fachadas de lojas",
    description:
      "Soluções em vidro para destacar a entrada, a vitrine e a identidade visual do estabelecimento.",
  },
  {
    icon: Building2,
    title: "Projetos comerciais",
    description:
      "Portas, fechamentos e aplicações em vidro para lojas, academias, escritórios e outros negócios.",
  },
  {
    icon: PanelsTopLeft,
    title: "Projetos sob medida",
    description:
      "Execuções planejadas conforme as medidas, o local, o uso e o acabamento esperado.",
  },
];

const whatsappMessage = encodeURIComponent(
  "Olá! Vi os projetos no site e gostaria de solicitar um orçamento para um serviço semelhante.",
);

const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;
const pageUrl = `${siteConfig.seo.url}/projetos`;

export const metadata: Metadata = {
  title: "Projetos de Vidraçaria no Rio de Janeiro | E & L Vidraçaria",
  description:
    "Conheça projetos comerciais executados pela E & L Vidraçaria, incluindo fachadas de lojas, vitrines, portas e aplicações em vidro no Rio de Janeiro.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Projetos de Vidraçaria no Rio de Janeiro | E & L Vidraçaria",
    description:
      "Veja fachadas, vitrines, portas e outros projetos comerciais em vidro executados pela E & L Vidraçaria.",
    url: pageUrl,
    siteName: siteConfig.nome,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: siteConfig.seo.ogImage,
        alt: "Projetos executados pela E & L Vidraçaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projetos de Vidraçaria no Rio de Janeiro",
    description:
      "Conheça projetos comerciais em vidro executados pela E & L Vidraçaria.",
    images: [siteConfig.seo.ogImage],
  },
};

export default function ProjectsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Projetos de Vidraçaria no Rio de Janeiro",
      description:
        "Galeria de projetos comerciais em vidro executados pela E & L Vidraçaria.",
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.nome,
        url: siteConfig.seo.url,
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.name,
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
          name: "Projetos",
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
              "radial-gradient(circle at 85% 20%, var(--color-accent-light), transparent 30%), radial-gradient(circle at 10% 90%, var(--color-accent-light), transparent 32%)",
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
              Projetos
            </span>
          </nav>

          <div className="mt-10 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-text-light)] backdrop-blur-sm">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Projetos executados no Rio de Janeiro
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text-light)] sm:text-5xl lg:text-6xl">
              Projetos comerciais e soluções em vidro
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-hero-muted)]">
              Conheça algumas fachadas, vitrines, portas e aplicações comerciais
              executadas pela E & L Vidraçaria.
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
                href="#galeria"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-[var(--color-text-light)] backdrop-blur-sm transition hover:bg-white/20"
              >
                Ver projetos
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TIPOS DE PROJETO */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-5 md:grid-cols-3">
            {projectTypes.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <h2 className="mt-5 text-xl font-bold text-[var(--color-text-primary)]">
                  {title}
                </h2>

                <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section
        id="galeria"
        aria-labelledby="projects-title"
        className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent-hover), var(--color-accent))",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <header className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
              Trabalhos executados
            </span>

            <h2
              id="projects-title"
              className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl lg:text-5xl"
            >
              Fachadas e projetos comerciais
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-hero-muted)]">
              Uma seleção de projetos realizados para diferentes tipos de
              estabelecimentos comerciais.
            </p>
          </header>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={`${project.name}-${index}`}
                className="group overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
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

                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-accent-light)]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[var(--color-text-light)]">
                    {project.name}
                  </h3>

                  <p className="mt-3 leading-7 text-[var(--color-text-hero-muted)]">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INFORMAÇÕES */}
      <section className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Projetos personalizados
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Cada ambiente exige uma solução diferente
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-secondary)]">
              As medidas, o tipo de vidro, a estrutura e o acabamento são
              definidos conforme o local e a necessidade do projeto.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Avaliação das medidas e do espaço",
              "Definição do tipo de aplicação",
              "Orientação sobre materiais e acabamento",
              "Instalação planejada para o ambiente",
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

      {/* CTA */}
      <section className="bg-[var(--color-bg-secondary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] sm:text-4xl">
                Precisa de um projeto semelhante?
              </h2>

              <p className="mt-4 text-lg leading-8 text-[var(--color-text-secondary)]">
                Envie fotos, medidas aproximadas e o bairro para iniciar seu
                atendimento.
              </p>
            </div>

            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-success)] px-6 py-3 font-bold text-[var(--color-text-light)] transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-success)] lg:mt-0"
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