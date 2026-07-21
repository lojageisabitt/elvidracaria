import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/client/config/site.config";

const siteUrl = siteConfig.seo.url.replace(/\/$/, "");
const pagePath = "/servicos/portas-de-vidro";
const pageUrl = `${siteUrl}${pagePath}`;

const serviceImage = "/servicos/Porta-Fume.png";

const phone = `+${siteConfig.whatsapp}`;

const whatsappMessage = encodeURIComponent(
  "Olá! Vim pela página de portas de vidro da E & L Vidraçaria e gostaria de solicitar um orçamento.",
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
    "Portas de Vidro Sob Medida no Rio de Janeiro | E & L Vidraçaria",

  description:
    "Portas de vidro temperado sob medida para residências, lojas e escritórios no Rio de Janeiro. Modelos de correr, abrir e vidro fumê. Peça seu orçamento.",

  keywords: [
    "portas de vidro",
    "porta de vidro temperado",
    "porta de vidro fumê",
    "porta de vidro de correr",
    "porta de vidro de abrir",
    "porta blindex",
    "porta de vidro sob medida",
    "porta de vidro para loja",
    "porta de vidro para escritório",
    "portas de vidro Rio de Janeiro",
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
      "Portas de Vidro Sob Medida no Rio de Janeiro",

    description:
      "Projeto, produção e instalação de portas de vidro temperado para residências e estabelecimentos comerciais.",

    images: [
      {
        url: serviceImage,
        width: 1200,
        height: 900,
        alt:
          "Porta de vidro fumê instalada com estrutura sob medida",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Portas de Vidro Sob Medida | E & L Vidraçaria",

    description:
      "Portas de vidro temperado com instalação profissional no Rio de Janeiro.",

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
    "Portas de vidro, vidraçaria e instalações sob medida",

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
    title: "Produção sob medida",

    description:
      "A porta é planejada conforme as dimensões do vão, a circulação e as condições específicas do ambiente.",
  },
  {
    title: "Vidro temperado",

    description:
      "Material resistente e apropriado para aplicações que precisam combinar segurança, durabilidade e acabamento moderno.",
  },
  {
    title: "Mais luminosidade",

    description:
      "O vidro permite melhor aproveitamento da luz e ajuda a integrar visualmente os ambientes.",
  },
  {
    title: "Instalação profissional",

    description:
      "Montagem cuidadosa, com atenção ao alinhamento, às ferragens, à abertura e ao acabamento final.",
  },
];

const applications = [
  {
    title: "Residências",

    description:
      "Portas para salas, cozinhas, varandas, áreas de serviço, corredores e outros ambientes da casa.",
  },
  {
    title: "Lojas e comércios",

    description:
      "Soluções para entradas comerciais que valorizam a fachada e mantêm a visibilidade do interior.",
  },
  {
    title: "Escritórios",

    description:
      "Portas para salas, recepções e divisórias que preservam a luminosidade e deixam o ambiente mais leve.",
  },
  {
    title: "Clínicas e consultórios",

    description:
      "Projetos personalizados para recepções, salas internas e áreas de circulação profissional.",
  },
];

const doorOptions = [
  {
    title: "Porta de vidro de correr",

    description:
      "Indicada para ambientes que precisam aproveitar melhor o espaço sem utilizar uma área ampla para abertura.",
  },
  {
    title: "Porta de vidro de abrir",

    description:
      "Uma solução clássica e funcional para entradas residenciais, comerciais e divisões internas.",
  },
  {
    title: "Porta de vidro fumê",

    description:
      "Oferece um visual moderno, maior sensação de privacidade e um acabamento marcante para o projeto.",
  },
  {
    title: "Porta de vidro transparente",

    description:
      "Mantém a passagem de luz, amplia visualmente o ambiente e combina com diferentes estilos de decoração.",
  },
];

const glassOptions = [
  {
    title: "Vidro transparente",

    description:
      "Ideal para ambientes que precisam manter luminosidade, integração visual e sensação de amplitude.",
  },
  {
    title: "Vidro fumê",

    description:
      "Cria um acabamento sofisticado e reduz a visão direta entre os ambientes.",
  },
  {
    title: "Vidro jateado",

    description:
      "Permite a passagem de luz e oferece mais privacidade para áreas residenciais ou profissionais.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Envio das informações",

    description:
      "Envie fotos do vão, medidas aproximadas e uma descrição do tipo de porta desejado.",
  },
  {
    number: "02",
    title: "Avaliação do ambiente",

    description:
      "A equipe analisa as dimensões, a circulação, os pontos de fixação e as possibilidades de abertura.",
  },
  {
    number: "03",
    title: "Definição do projeto",

    description:
      "São definidos o vidro, o sistema de abertura, os perfis, as ferragens, os puxadores e o acabamento.",
  },
  {
    number: "04",
    title: "Produção e instalação",

    description:
      "A porta é produzida sob medida e instalada com conferência de alinhamento, movimentação e fechamento.",
  },
];

const faqs = [
  {
    question:
      "As portas de vidro são produzidas sob medida?",

    answer:
      "Sim. Cada porta é planejada conforme as dimensões do vão, o tipo de abertura, a circulação e as condições da estrutura onde será instalada.",
  },
  {
    question:
      "Qual vidro é utilizado em portas?",

    answer:
      "O vidro temperado é frequentemente utilizado em portas por sua resistência e segurança. A espessura e a configuração devem ser definidas conforme as medidas e o tipo de aplicação.",
  },
  {
    question:
      "É melhor escolher uma porta de correr ou de abrir?",

    answer:
      "A escolha depende do espaço disponível e do uso do ambiente. A porta de correr ajuda a economizar espaço, enquanto a porta de abrir pode ser indicada quando existe uma área livre adequada para movimentação.",
  },
  {
    question:
      "É possível instalar uma porta de vidro fumê?",

    answer:
      "Sim. O vidro fumê é uma opção para quem busca um visual mais marcante e maior sensação de privacidade. Também podem ser avaliados vidros transparentes ou jateados.",
  },
  {
    question:
      "As ferragens e os puxadores podem ser personalizados?",

    answer:
      "Sim. As opções de ferragens, perfis e puxadores podem variar conforme o sistema escolhido e o acabamento desejado para o projeto.",
  },
  {
    question:
      "Como solicitar um orçamento para porta de vidro?",

    answer:
      "Entre em contato pelo WhatsApp e envie fotos do vão, medidas aproximadas e uma descrição do modelo desejado. A equipe orientará sobre a avaliação e os próximos passos.",
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
        "Portas de Vidro Sob Medida no Rio de Janeiro | E & L Vidraçaria",

      description:
        "Projeto, produção e instalação de portas de vidro temperado sob medida no Rio de Janeiro.",

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
          "Porta de vidro fumê produzida e instalada sob medida",
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
          name: "Portas de vidro",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,

      name:
        "Portas de vidro sob medida",

      serviceType:
        "Projeto, produção e instalação de portas de vidro",

      url: pageUrl,

      description:
        "Portas de vidro temperado sob medida para residências, lojas, escritórios e ambientes comerciais no Rio de Janeiro.",

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
        "Portas de vidro",
        "Portas de vidro temperado",
        "Portas de correr",
        "Portas de vidro fumê",
        "Vidros jateados",
        "Vidraçaria comercial",
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

export default async function PortasDeVidroPage() {
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
                  Portas de vidro
                </span>
              </nav>

              <p className="mt-8 inline-flex rounded-full border border-[var(--color-accent-light)] bg-[var(--color-bg-hover)] px-4 py-2 text-sm font-bold text-[var(--color-accent-hover)]">
                Projeto sob medida no Rio de Janeiro
              </p>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
                Portas de vidro sob medida no Rio de Janeiro
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-tertiary)]">
                Portas de vidro temperado para residências, lojas e
                escritórios, com modelos de correr ou abrir e opções de
                vidro transparente, fumê e jateado.
              </p>

              <ul className="mt-8 grid gap-3 text-sm font-semibold text-[var(--color-text-secondary)] sm:grid-cols-2">
                {[
                  "Produção sob medida",
                  "Vidro temperado",
                  "Modelos de correr ou abrir",
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
                  alt="Porta de vidro fumê produzida e instalada sob medida"
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
                    Porta de vidro fumê
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
              produz e instala portas de vidro para residências, lojas,
              escritórios, clínicas e outros ambientes no Rio de Janeiro.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10 lg:py-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] shadow-xl sm:aspect-[5/4]">
            <Image
              src={serviceImage}
              alt="Detalhes de porta de vidro fumê com ferragens e estrutura sob medida"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Funcionalidade e acabamento
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Uma porta planejada para o seu ambiente
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text-tertiary)]">
              <p>
                A porta de vidro ajuda a distribuir a iluminação, ampliar
                visualmente o espaço e criar uma divisão mais leve entre
                ambientes residenciais ou comerciais.
              </p>

              <p>
                Antes da produção, é necessário analisar as medidas do
                vão, o alinhamento, a circulação, o sentido de abertura e
                os pontos disponíveis para instalação das ferragens.
              </p>

              <p>
                Essa avaliação permite definir o modelo, o tipo de vidro,
                os puxadores e o acabamento mais adequado para o uso
                diário do ambiente.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 font-extrabold text-[var(--color-text-light)] transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-light)]"
            >
              Falar sobre minha porta

              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Vantagens"
              title="Mais leveza, iluminação e praticidade"
              description="A porta de vidro pode dividir ambientes sem criar uma barreira visual pesada e ainda valoriza a arquitetura do espaço."
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
            title="Portas para diferentes tipos de ambiente"
            description="O projeto pode ser adaptado a imóveis residenciais e comerciais, respeitando a circulação e a necessidade de cada espaço."
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
              eyebrow="Modelos"
              title="Escolha a abertura adequada ao espaço"
              description="O tipo de porta deve considerar a circulação, a largura do vão e a área disponível para movimentação."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {doorOptions.map(
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
            eyebrow="Tipos de vidro"
            title="Transparente, fumê ou jateado"
            description="A escolha do vidro interfere na luminosidade, na privacidade e no resultado visual do ambiente."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {glassOptions.map(
              (option) => (
                <article
                  key={option.title}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-7 transition-all hover:border-[var(--color-accent-light)] hover:bg-[var(--color-bg-hover)] hover:shadow-lg"
                >
                  <h3 className="text-xl font-black text-[var(--color-text-primary)]">
                    {option.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[var(--color-text-tertiary)]">
                    {option.description}
                  </p>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Como funciona"
              title="Do orçamento à instalação"
              description="Um processo organizado para avaliar o ambiente e produzir uma porta adequada ao espaço."
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
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Vidraçaria no Rio de Janeiro
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Portas personalizadas para seu imóvel
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text-tertiary)]">
              <p>
                A {siteConfig.nome} produz e instala portas de vidro para
                residências, lojas, escritórios, clínicas e outros
                ambientes em toda a cidade do Rio de Janeiro.
              </p>

              <p>
                Para iniciar o atendimento, envie fotos do vão, medidas
                aproximadas e uma referência do tipo de vidro, abertura ou
                acabamento desejado.
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
              Envie as informações do vão
            </h2>

            <p className="mt-5 leading-7 text-[var(--color-text-hero-muted)]">
              Envie fotos do local, medidas aproximadas e uma descrição
              do modelo de porta que deseja instalar.
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
        </section>

        <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Dúvidas frequentes"
              title="Perguntas sobre portas de vidro"
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
                Seu ambiente pode receber uma porta sob medida
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[var(--color-text-hero-muted)]">
                Fale com nossa equipe e solicite um orçamento para porta
                de vidro no Rio de Janeiro.
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