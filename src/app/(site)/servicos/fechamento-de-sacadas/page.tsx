import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/client/config/site.config";

const siteUrl = siteConfig.seo.url.replace(/\/$/, "");
const pagePath = "/servicos/fechamento-de-sacadas";
const pageUrl = `${siteUrl}${pagePath}`;

const serviceImage = "/servicos/Guarda-Corpo.png";

const phone = `+${siteConfig.whatsapp}`;

const whatsappMessage = encodeURIComponent(
  "Olá! Vim pela página de fechamento de sacadas da E & L Vidraçaria e gostaria de solicitar um orçamento.",
);

const whatsappUrl =
  `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;

const businessAddress = {
  streetAddress: "Av. Brás de Pina, 1308",
  neighborhood: "Vila da Penha",
  city: "Rio de Janeiro",
  region: "RJ",
  country: "BR",
};

export const metadata: Metadata = {
  title:
    "Fechamento de Sacadas com Vidro no Rio de Janeiro | E & L Vidraçaria",

  description:
    "Fechamento de sacadas e varandas com vidro sob medida no Rio de Janeiro. Mais proteção, conforto e aproveitamento do espaço. Solicite seu orçamento.",

  keywords: [
    "fechamento de sacadas",
    "fechamento de varanda",
    "sacada de vidro",
    "varanda de vidro",
    "envidraçamento de sacada",
    "fechamento de sacada com vidro",
    "fechamento de varanda com vidro",
    "cortina de vidro",
    "vidro para sacada",
    "fechamento de sacadas Rio de Janeiro",
    "vidraçaria Rio de Janeiro",
    "vidraçaria Vila da Penha",
    "E & L Vidraçaria",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    siteName: siteConfig.nome,

    title:
      "Fechamento de Sacadas com Vidro no Rio de Janeiro",

    description:
      "Projeto e instalação de fechamento de sacadas e varandas com vidro sob medida, acabamento moderno e melhor aproveitamento do ambiente.",

    images: [
      {
        url: serviceImage,
        width: 1200,
        height: 900,
        alt:
          "Sacada com fechamento em vidro instalado sob medida",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Fechamento de Sacadas com Vidro | E & L Vidraçaria",

    description:
      "Fechamento de sacadas e varandas com vidro sob medida no Rio de Janeiro.",

    images: [
      serviceImage,
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category:
    "Fechamento de sacadas, varandas e vidraçaria",

  authors: [
    {
      name: siteConfig.nome,
      url: siteUrl,
    },
  ],

  creator: siteConfig.nome,
  publisher: siteConfig.nome,
};

const benefits = [
  {
    title: "Mais proteção",

    description:
      "O fechamento ajuda a reduzir a entrada direta de vento, chuva, poeira e outros elementos externos na sacada.",
  },
  {
    title: "Melhor aproveitamento",

    description:
      "A varanda se torna um espaço mais confortável e funcional para descanso, convivência ou integração com outros ambientes.",
  },
  {
    title: "Leveza visual",

    description:
      "O vidro preserva a iluminação natural e a sensação de amplitude, sem bloquear completamente a vista externa.",
  },
  {
    title: "Projeto sob medida",

    description:
      "Cada fechamento é planejado de acordo com as dimensões, o formato, a estrutura e as necessidades da sacada.",
  },
];

const applications = [
  {
    title: "Sacadas de apartamentos",

    description:
      "Soluções sob medida para proteger o espaço e melhorar o uso da varanda em diferentes condições climáticas.",
  },
  {
    title: "Varandas residenciais",

    description:
      "Fechamentos que ajudam a integrar a varanda ao imóvel sem perder luminosidade e visibilidade.",
  },
  {
    title: "Coberturas e terraços",

    description:
      "Projetos que contribuem para proteger áreas elevadas e criar espaços mais confortáveis.",
  },
  {
    title: "Ambientes comerciais",

    description:
      "Fechamentos para restaurantes, escritórios, salões e outros estabelecimentos com áreas externas.",
  },
];

const projectOptions = [
  {
    title: "Folhas de vidro deslizantes",

    description:
      "Permitem abrir ou fechar parte do espaço conforme a necessidade de ventilação e uso do ambiente.",
  },
  {
    title: "Fechamento fixo",

    description:
      "Indicado para áreas que precisam de proteção permanente sem necessidade de abertura frequente.",
  },
  {
    title: "Perfis e ferragens personalizados",

    description:
      "Os componentes podem ser definidos conforme a estrutura existente e o acabamento desejado.",
  },
  {
    title: "Integração com guarda-corpo",

    description:
      "O fechamento pode ser planejado considerando o guarda-corpo, o parapeito e os demais elementos da sacada.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Envio das informações",

    description:
      "Envie fotos da sacada, medidas aproximadas e uma descrição do tipo de fechamento desejado.",
  },
  {
    number: "02",
    title: "Avaliação do local",

    description:
      "A equipe analisa o formato, a estrutura, o guarda-corpo, os pontos de fixação e as possibilidades de abertura.",
  },
  {
    number: "03",
    title: "Definição do projeto",

    description:
      "São definidos os vidros, perfis, ferragens, divisões, sistema de abertura e acabamento.",
  },
  {
    number: "04",
    title: "Produção e instalação",

    description:
      "O fechamento é produzido sob medida e instalado com conferência de alinhamento, movimentação e acabamento.",
  },
];

const faqs = [
  {
    question:
      "O fechamento de sacada é feito sob medida?",

    answer:
      "Sim. Cada sacada possui medidas, formatos, estruturas e guarda-corpos diferentes. Por isso, o fechamento deve ser planejado de acordo com as características do local.",
  },
  {
    question:
      "O fechamento ajuda a proteger contra chuva e vento?",

    answer:
      "O fechamento em vidro ajuda a reduzir a entrada direta de vento, chuva, poeira e outros elementos externos. O desempenho depende do sistema utilizado, das condições da estrutura e da forma de instalação.",
  },
  {
    question:
      "É possível abrir os vidros da sacada?",

    answer:
      "Sim. Dependendo do projeto, podem ser utilizadas folhas deslizantes ou outras configurações que permitem abrir parte do fechamento para ventilação.",
  },
  {
    question:
      "O fechamento deixa a varanda escura?",

    answer:
      "O vidro preserva grande parte da iluminação natural e mantém a vista externa, criando proteção sem bloquear completamente a claridade do ambiente.",
  },
  {
    question:
      "É necessário avaliar o guarda-corpo existente?",

    answer:
      "Sim. O guarda-corpo, o parapeito, o piso, o teto e os pontos de fixação precisam ser avaliados antes da definição do sistema de fechamento.",
  },
  {
    question:
      "Como solicitar um orçamento para fechamento de sacada?",

    answer:
      "Entre em contato pelo WhatsApp e envie fotos da sacada, medidas aproximadas e uma descrição do projeto. A equipe orientará sobre a avaliação e os próximos passos.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,

      name:
        "Fechamento de Sacadas com Vidro no Rio de Janeiro | E & L Vidraçaria",

      description:
        "Projeto e instalação de fechamento de sacadas e varandas com vidro sob medida no Rio de Janeiro.",

      inLanguage: "pt-BR",

      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },

      about: {
        "@id": `${pageUrl}#service`,
      },

      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },

      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}${serviceImage}`,

        caption:
          "Sacada com fechamento em vidro instalado sob medida",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Fechamento de sacadas",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,

      name:
        "Fechamento de sacadas com vidro",

      serviceType:
        "Projeto e instalação de fechamento de sacadas e varandas com vidro",

      url: pageUrl,

      description:
        "Fechamento de sacadas, varandas, coberturas e áreas externas com vidro sob medida no Rio de Janeiro.",

      image:
        `${siteUrl}${serviceImage}`,

      areaServed: {
        "@type": "City",
        name: businessAddress.city,
      },

      provider: {
        "@id": `${siteUrl}/#localbusiness`,
      },
    },

    {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${siteUrl}/#localbusiness`,

      name: siteConfig.nome,
      url: siteUrl,
      telephone: phone,

      image:
        `${siteUrl}${serviceImage}`,

      address: {
        "@type": "PostalAddress",
        streetAddress:
          businessAddress.streetAddress,
        addressLocality:
          businessAddress.city,
        addressRegion:
          businessAddress.region,
        addressCountry:
          businessAddress.country,
      },

      areaServed: {
        "@type": "City",
        name: businessAddress.city,
      },

      knowsAbout: [
        "Fechamento de sacadas",
        "Fechamento de varandas",
        "Cortina de vidro",
        "Vidros temperados",
        "Guarda-corpo",
        "Estruturas em vidro",
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,

      mainEntity: faqs.map(
        (faq) => ({
          "@type": "Question",
          name: faq.question,

          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        }),
      ),
    },
  ],
};

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5 12 4 4L19 6"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-6-6 6 6-6 6"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3H7a2 2 0 0 1 1.9 1.37l1.05 3.15a2 2 0 0 1-.5 2.05l-1.2 1.2a15.5 15.5 0 0 0 5 5l1.2-1.2a2 2 0 0 1 2.05-.5l3.15 1.05A2 2 0 0 1 21 17v1.5a2.5 2.5 0 0 1-2.5 2.5h-1C9.49 21 3 14.51 3 6.5v-1Z"
      />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-7 text-[var(--color-text-tertiary)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default async function FechamentoDeSacadasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c",
            ),
        }}
      />

      <div className="overflow-hidden bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        <section className="relative isolate overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at top right, var(--color-accent-light), transparent 42%)",
            }}
          />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-10 lg:py-24">
            <div>
              <nav
                aria-label="Navegação estrutural"
                className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-muted)]"
              >
                <Link
                  href="/"
                  className="transition-colors hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                >
                  Início
                </Link>

                <span aria-hidden="true">
                  /
                </span>

                <span
                  aria-current="page"
                  className="font-semibold text-[var(--color-text-primary)]"
                >
                  Fechamento de sacadas
                </span>
              </nav>

              <p className="mt-8 inline-flex rounded-full border border-[var(--color-accent-light)] bg-[var(--color-bg-hover)] px-4 py-2 text-sm font-bold text-[var(--color-accent-hover)]">
                Projeto sob medida no Rio de Janeiro
              </p>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
                Fechamento de sacadas com vidro no Rio de Janeiro
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-tertiary)]">
                Aproveite melhor sua varanda com um fechamento em vidro
                sob medida, pensado para oferecer mais proteção,
                conforto e leveza visual ao ambiente.
              </p>

              <ul className="mt-8 grid gap-3 text-sm font-semibold text-[var(--color-text-secondary)] sm:grid-cols-2">
                {[
                  "Projeto produzido sob medida",
                  "Vidros e perfis personalizados",
                  "Mais proteção para a varanda",
                  "Instalação profissional",
                ].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="text-[var(--color-accent)]">
                        <CheckIcon />
                      </span>

                      {item}
                    </li>
                  ),
                )}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 font-extrabold text-[var(--color-text-light)] transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-secondary)]"
                >
                  Solicitar orçamento

                  <ArrowIcon />
                </a>

                <a
                  href={`tel:${phone}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-3 font-bold text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent-light)] hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                >
                  <PhoneIcon />

                  {siteConfig.whatsappDisplay}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] shadow-2xl sm:aspect-[5/4]">
                <Image
                  src={serviceImage}
                  alt="Sacada com fechamento em vidro instalado sob medida"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />

                <div
                  className="absolute inset-x-0 bottom-0 p-6 pt-24"
                  style={{
                    background:
                      "linear-gradient(to top, var(--color-overlay), transparent)",
                  }}
                >
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">
                    Projeto personalizado
                  </p>

                  <p className="mt-2 text-xl font-black text-[var(--color-text-light)]">
                    Fechamento em vidro sob medida
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 shadow-xl sm:-left-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  Atendimento
                </p>

                <p className="mt-1 font-black text-[var(--color-text-primary)]">
                  {siteConfig.cidade}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
            <p className="text-center text-sm leading-6 text-[var(--color-text-tertiary)]">
              A{" "}
              <strong className="text-[var(--color-text-primary)]">
                {siteConfig.nome}
              </strong>{" "}
              desenvolve fechamentos em vidro para sacadas, varandas,
              coberturas e ambientes comerciais no Rio de Janeiro.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10 lg:py-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] shadow-xl sm:aspect-[5/4]">
            <Image
              src={serviceImage}
              alt="Detalhes de sacada com fechamento em vidro"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Conforto e proteção
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Aproveite melhor sua sacada durante todo o ano
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text-tertiary)]">
              <p>
                O fechamento em vidro ajuda a transformar a sacada em um
                ambiente mais protegido e funcional, sem retirar a
                iluminação natural ou bloquear completamente a vista.
              </p>

              <p>
                Antes da produção, é necessário avaliar as dimensões, o
                formato da varanda, o guarda-corpo, o piso, o teto e os
                pontos disponíveis para fixação.
              </p>

              <p>
                Essa análise permite definir o sistema de abertura, as
                divisões dos vidros, os perfis e o acabamento mais
                adequado para o espaço.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 font-extrabold text-[var(--color-text-light)] transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-light)]"
            >
              Falar sobre minha sacada

              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Vantagens"
              title="Mais conforto sem perder a luminosidade"
              description="O fechamento em vidro protege o ambiente e mantém a sensação de amplitude característica das sacadas."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(
                (benefit, index) => (
                  <article
                    key={benefit.title}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-all hover:border-[var(--color-accent-light)] hover:bg-[var(--color-bg-hover)] hover:shadow-lg"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)] text-sm font-black text-[var(--color-text-light)]">
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <h3 className="mt-5 text-lg font-black text-[var(--color-text-primary)]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--color-text-tertiary)]">
                      {benefit.description}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Onde utilizar"
            title="Soluções para diferentes tipos de varanda"
            description="O fechamento pode ser desenvolvido para imóveis residenciais e comerciais, sempre considerando a estrutura existente."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {applications.map(
              (application) => (
                <article
                  key={application.title}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-all hover:border-[var(--color-accent-light)] hover:bg-[var(--color-bg-hover)] hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 text-[var(--color-accent)]">
                      <CheckIcon />
                    </span>

                    <div>
                      <h3 className="text-xl font-black text-[var(--color-text-primary)]">
                        {application.title}
                      </h3>

                      <p className="mt-3 leading-7 text-[var(--color-text-tertiary)]">
                        {application.description}
                      </p>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Possibilidades"
              title="Um projeto adaptado ao formato da sacada"
              description="A configuração dos vidros, perfis e aberturas é definida conforme as medidas e o uso do ambiente."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {projectOptions.map(
                (option) => (
                  <article
                    key={option.title}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-7"
                  >
                    <span className="text-[var(--color-accent)]">
                      <CheckIcon />
                    </span>

                    <h3 className="mt-5 text-xl font-black text-[var(--color-text-primary)]">
                      {option.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[var(--color-text-tertiary)]">
                      {option.description}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Como funciona"
            title="Do orçamento à instalação"
            description="Um processo organizado para avaliar a sacada e desenvolver um fechamento adequado ao ambiente."
          />

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(
              (step) => (
                <li
                  key={step.number}
                  className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
                >
                  <span className="text-4xl font-black text-[var(--color-accent)]">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-lg font-black text-[var(--color-text-primary)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-tertiary)]">
                    {step.description}
                  </p>
                </li>
              ),
            )}
          </ol>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Atendimento no Rio de Janeiro
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                Fechamento personalizado para sua varanda
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text-tertiary)]">
                <p>
                  A {siteConfig.nome} desenvolve fechamentos em vidro para
                  sacadas, varandas, coberturas e ambientes comerciais em
                  toda a cidade do Rio de Janeiro.
                </p>

                <p>
                  Para iniciar o atendimento, envie fotos do espaço,
                  medidas aproximadas e uma descrição do tipo de abertura
                  ou acabamento desejado.
                </p>
              </div>

              <address className="mt-8 not-italic">
                <p className="font-black text-[var(--color-text-primary)]">
                  {siteConfig.nome}
                </p>

                <p className="mt-2 text-[var(--color-text-tertiary)]">
                  {businessAddress.streetAddress}
                  {" — "}
                  {businessAddress.neighborhood}
                  <br />
                  {businessAddress.city}
                  {" — "}
                  {businessAddress.region}
                </p>
              </address>
            </div>

            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-accent)] p-7 text-[var(--color-text-light)] shadow-xl sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-light)]">
                Solicite seu orçamento
              </p>

              <h2 className="mt-4 text-3xl font-black text-[var(--color-text-light)]">
                Envie as informações da sacada
              </h2>

              <p className="mt-5 leading-7 text-[var(--color-text-hero-muted)]">
                Envie fotos da varanda, medidas aproximadas e uma
                descrição do fechamento que deseja instalar.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-bg-card)] px-6 py-3 text-center font-extrabold text-[var(--color-accent-hover)] transition-colors hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text-light)]"
              >
                Pedir orçamento pelo WhatsApp

                <ArrowIcon />
              </a>

              <a
                href={`tel:${phone}`}
                className="mt-4 block rounded-xl border border-[var(--color-accent-light)] p-4 text-center transition-colors hover:bg-[var(--color-accent-hover)]"
              >
                <span className="block text-xs font-bold uppercase tracking-wide text-[var(--color-text-hero-muted)]">
                  Telefone e WhatsApp
                </span>

                <span className="mt-1 block font-bold text-[var(--color-text-light)]">
                  {siteConfig.whatsappDisplay}
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-bg-primary)] py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Dúvidas frequentes"
              title="Perguntas sobre fechamento de sacadas"
              description="Informações importantes para planejar o serviço antes de solicitar o orçamento."
            />

            <div className="mt-12 space-y-4">
              {faqs.map(
                (faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 open:border-[var(--color-accent-light)]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-black text-[var(--color-text-primary)]">
                      <span>
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className="text-2xl font-light text-[var(--color-accent)] transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <p className="mt-4 max-w-3xl leading-7 text-[var(--color-text-tertiary)]">
                      {faq.answer}
                    </p>
                  </details>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-accent)]">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:px-10">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--color-text-hero-muted)]">
                {siteConfig.nome}
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-[var(--color-text-light)] sm:text-4xl">
                Sua sacada pode se tornar mais confortável
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[var(--color-text-hero-muted)]">
                Fale com nossa equipe e solicite um orçamento para
                fechamento de sacada com vidro no Rio de Janeiro.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-bg-card)] px-7 py-4 font-extrabold text-[var(--color-accent-hover)] transition-colors hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-text-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-accent)]"
            >
              Solicitar orçamento

              <ArrowIcon />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}