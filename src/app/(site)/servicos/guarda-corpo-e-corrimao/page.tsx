import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/client/config/site.config";

const siteUrl = siteConfig.seo.url.replace(/\/$/, "");
const pagePath = "/servicos/guarda-corpo-e-corrimao";
const pageUrl = `${siteUrl}${pagePath}`;

const serviceImage = "/servicos/Escada-em-aluminio-Preto.png";

const phone = `+${siteConfig.whatsapp}`;

const whatsappMessage = encodeURIComponent(
  "Olá! Vim pela página de guarda-corpo e corrimão da E & L Vidraçaria e gostaria de solicitar um orçamento.",
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
    "Guarda-Corpo e Corrimão no Rio de Janeiro | E & L Vidraçaria",

  description:
    "Guarda-corpo e corrimão sob medida para escadas, varandas, sacadas e rampas no Rio de Janeiro. Solicite seu orçamento à E & L Vidraçaria.",

  keywords: [
    "guarda-corpo",
    "corrimão",
    "guarda-corpo de vidro",
    "corrimão de alumínio",
    "guarda-corpo de alumínio",
    "guarda-corpo para escada",
    "corrimão para escada",
    "guarda-corpo para varanda",
    "guarda-corpo Rio de Janeiro",
    "corrimão Rio de Janeiro",
    "vidraçaria Rio de Janeiro",
    "serralheria Rio de Janeiro",
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
      "Guarda-Corpo e Corrimão no Rio de Janeiro",

    description:
      "Projeto, produção e instalação de guarda-corpo e corrimão sob medida para escadas, varandas, sacadas e rampas.",

    images: [
      {
        url: serviceImage,
        width: 1200,
        height: 900,
        alt:
          "Escada com guarda-corpo e corrimão em alumínio preto",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Guarda-Corpo e Corrimão | E & L Vidraçaria",

    description:
      "Guarda-corpo e corrimão sob medida com instalação profissional no Rio de Janeiro.",

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
    "Guarda-corpo, corrimão, vidraçaria e serralheria",

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
    title: "Projeto sob medida",

    description:
      "Cada estrutura é planejada conforme as dimensões, o formato e as condições da escada, varanda, sacada ou rampa.",
  },
  {
    title: "Mais segurança",

    description:
      "O guarda-corpo e o corrimão ajudam a proteger áreas elevadas e oferecem apoio durante a circulação.",
  },
  {
    title: "Acabamento moderno",

    description:
      "Vidro, alumínio e perfis bem definidos valorizam o ambiente sem comprometer a leveza visual do projeto.",
  },
  {
    title: "Instalação profissional",

    description:
      "Montagem cuidadosa, com atenção ao alinhamento, aos pontos de fixação, à estabilidade e ao acabamento final.",
  },
];

const applications = [
  {
    title: "Escadas residenciais",

    description:
      "Estruturas sob medida para oferecer apoio e proteção em escadas internas ou externas.",
  },
  {
    title: "Varandas e sacadas",

    description:
      "Fechamentos que preservam a visibilidade do ambiente e ajudam a proteger áreas elevadas.",
  },
  {
    title: "Rampas e acessos",

    description:
      "Corrimãos planejados para melhorar o apoio e tornar a circulação mais confortável.",
  },
  {
    title: "Ambientes comerciais",

    description:
      "Soluções para lojas, escritórios, condomínios e outros espaços com circulação de pessoas.",
  },
];

const materialOptions = [
  {
    title: "Vidro com estrutura de alumínio",

    description:
      "Combinação que oferece transparência, leveza visual e um acabamento contemporâneo.",
  },
  {
    title: "Alumínio preto",

    description:
      "Uma opção moderna que cria contraste e combina com ambientes de estilo industrial ou minimalista.",
  },
  {
    title: "Perfis e ferragens personalizados",

    description:
      "Os componentes podem ser definidos conforme a proposta estética e as exigências técnicas do local.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Contato e informações",

    description:
      "Envie fotos do local, medidas aproximadas e uma descrição do tipo de guarda-corpo ou corrimão desejado.",
  },
  {
    number: "02",
    title: "Avaliação do espaço",

    description:
      "A equipe analisa o formato, os desníveis, a circulação e os pontos disponíveis para fixação.",
  },
  {
    number: "03",
    title: "Definição do projeto",

    description:
      "São definidos materiais, dimensões, perfis, ferragens, acabamento e forma de instalação.",
  },
  {
    number: "04",
    title: "Produção e instalação",

    description:
      "A estrutura é produzida sob medida e instalada com conferência de alinhamento, estabilidade e acabamento.",
  },
];

const faqs = [
  {
    question:
      "Qual é a diferença entre guarda-corpo e corrimão?",

    answer:
      "O guarda-corpo protege as laterais de escadas, varandas, sacadas, mezaninos e outras áreas elevadas. O corrimão funciona como apoio para as mãos durante a circulação. Em muitos projetos, os dois elementos são utilizados juntos.",
  },
  {
    question:
      "O guarda-corpo é produzido sob medida?",

    answer:
      "Sim. A estrutura deve considerar as dimensões, o formato, os desníveis, a circulação e os pontos de fixação existentes no local.",
  },
  {
    question:
      "É possível fazer guarda-corpo de vidro com alumínio preto?",

    answer:
      "Sim. O vidro pode ser combinado com perfis, montantes e ferragens em acabamento preto, conforme a configuração e as necessidades do projeto.",
  },
  {
    question:
      "O serviço atende escadas e varandas?",

    answer:
      "Sim. O guarda-corpo e o corrimão podem ser desenvolvidos para escadas, varandas, sacadas, rampas, mezaninos e ambientes comerciais.",
  },
  {
    question:
      "Como saber qual material é adequado?",

    answer:
      "A escolha depende do local, das medidas, da exposição ao tempo, do tipo de uso, dos pontos de fixação e do acabamento desejado. A avaliação do espaço ajuda a definir a solução mais adequada.",
  },
  {
    question:
      "Como solicitar um orçamento?",

    answer:
      "Entre em contato pelo WhatsApp e envie fotos do espaço, medidas aproximadas e uma descrição do projeto. A equipe orientará sobre a avaliação e os próximos passos.",
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
        "Guarda-Corpo e Corrimão no Rio de Janeiro | E & L Vidraçaria",

      description:
        "Projeto, produção e instalação de guarda-corpo e corrimão sob medida no Rio de Janeiro.",

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
          "Escada com guarda-corpo e corrimão em alumínio preto",
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
          name: "Guarda-corpo e corrimão",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,

      name:
        "Guarda-corpo e corrimão sob medida",

      serviceType:
        "Projeto, produção e instalação de guarda-corpo e corrimão",

      url: pageUrl,

      description:
        "Guarda-corpo e corrimão sob medida para escadas, varandas, sacadas, rampas e ambientes comerciais no Rio de Janeiro.",

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
        "Guarda-corpo",
        "Corrimão",
        "Guarda-corpo de vidro",
        "Corrimão de alumínio",
        "Vidros temperados",
        "Serralheria",
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

export default async function GuardaCorpoECorrimaoPage() {
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
                  Guarda-corpo e corrimão
                </span>
              </nav>

              <p className="mt-8 inline-flex rounded-full border border-[var(--color-accent-light)] bg-[var(--color-bg-hover)] px-4 py-2 text-sm font-bold text-[var(--color-accent-hover)]">
                Projeto sob medida no Rio de Janeiro
              </p>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
                Guarda-corpo e corrimão no Rio de Janeiro
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-tertiary)]">
                Soluções sob medida para escadas, varandas, sacadas,
                rampas e ambientes comerciais, combinando proteção,
                apoio e acabamento moderno.
              </p>

              <ul className="mt-8 grid gap-3 text-sm font-semibold text-[var(--color-text-secondary)] sm:grid-cols-2">
                {[
                  "Produção sob medida",
                  "Vidro e alumínio",
                  "Projetos residenciais e comerciais",
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
                  alt="Escada com guarda-corpo e corrimão em alumínio preto"
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
                    Estrutura em alumínio preto
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
              desenvolve guarda-corpo, corrimão, estruturas em vidro e
              serviços de serralheria para projetos residenciais e
              comerciais no Rio de Janeiro.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10 lg:py-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] shadow-xl sm:aspect-[5/4]">
            <Image
              src={serviceImage}
              alt="Detalhes de guarda-corpo e corrimão instalados em escada"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Proteção e acabamento
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Estruturas planejadas para cada ambiente
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text-tertiary)]">
              <p>
                Guarda-corpos e corrimãos precisam ser dimensionados de
                acordo com o local onde serão instalados. O formato da
                escada, os desníveis, a circulação e os pontos de fixação
                interferem diretamente no projeto.
              </p>

              <p>
                A combinação entre vidro, alumínio, perfis e ferragens
                permite criar soluções discretas ou marcantes, sempre
                respeitando as necessidades funcionais e visuais do
                ambiente.
              </p>

              <p>
                Antes da produção, é importante avaliar as medidas e as
                condições da estrutura para definir a configuração mais
                adequada e evitar ajustes posteriores.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 font-extrabold text-[var(--color-text-light)] transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-light)]"
            >
              Falar sobre meu projeto

              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Vantagens"
              title="Segurança sem abrir mão do visual"
              description="O projeto correto oferece proteção, apoio e um acabamento integrado à arquitetura do ambiente."
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
            eyebrow="Onde instalar"
            title="Soluções para diferentes espaços"
            description="Guarda-corpo e corrimão podem ser adaptados a ambientes residenciais, comerciais e áreas de circulação."
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
              eyebrow="Materiais e acabamentos"
              title="Personalize o projeto conforme o ambiente"
              description="A escolha dos materiais deve considerar o local, a exposição, o uso e o resultado visual desejado."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {materialOptions.map(
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
            description="Um processo organizado para entender o espaço e produzir uma estrutura adequada ao projeto."
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
                Projeto personalizado para seu imóvel
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text-tertiary)]">
                <p>
                  A {siteConfig.nome} desenvolve soluções em guarda-corpo,
                  corrimão, vidro e serralheria para residências, lojas,
                  condomínios e outros ambientes no Rio de Janeiro.
                </p>

                <p>
                  Para iniciar o atendimento, envie fotos do espaço,
                  medidas aproximadas e uma referência do acabamento
                  desejado. A equipe avaliará as informações e orientará
                  sobre os próximos passos.
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
                Envie as informações do local
              </h2>

              <p className="mt-5 leading-7 text-[var(--color-text-hero-muted)]">
                Envie fotos da escada, varanda, sacada ou rampa, medidas
                aproximadas e uma descrição do tipo de estrutura desejada.
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
              title="Perguntas sobre guarda-corpo e corrimão"
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
                Seu espaço pode receber mais segurança e acabamento
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[var(--color-text-hero-muted)]">
                Fale com nossa equipe e solicite um orçamento para
                guarda-corpo e corrimão sob medida no Rio de Janeiro.
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