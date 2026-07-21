import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/client/config/site.config";

const siteUrl = siteConfig.seo.url.replace(/\/$/, "");
const pagePath = "/projetos/fachada-de-loja-com-vidro";
const pageUrl = `${siteUrl}${pagePath}`;

const beforeImage =
  "/images/before-after/fachada-loja-antes.jpg";
const afterImage =
  "/images/before-after/fachada-loja-depois.jpg";

const phone = `+${siteConfig.whatsapp}`;

const whatsappMessage = encodeURIComponent(
  "Olá! Vim pela página de fachada de loja com vidro da E & L Vidraçaria e gostaria de solicitar um orçamento.",
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
    "Fachada de Loja com Vidro no Rio de Janeiro | E & L Vidraçaria",

  description:
    "Fachada de loja com vidro temperado e estrutura sob medida no Rio de Janeiro. Veja o antes e depois e solicite seu orçamento.",

  keywords: [
    "fachada de loja com vidro",
    "fachada comercial de vidro",
    "fachada de vidro",
    "porta de vidro para loja",
    "vidro temperado para loja",
    "fechamento comercial em vidro",
    "fachada de vidro Rio de Janeiro",
    "vidraçaria comercial Rio de Janeiro",
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
      "Fachada de Loja com Vidro no Rio de Janeiro",

    description:
      "Projeto e instalação de fachada comercial em vidro sob medida, com acabamento moderno e profissional.",

    images: [
      {
        url: afterImage,
        width: 1200,
        height: 900,
        alt:
          "Loja após a instalação de fachada de vidro com estrutura preta",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Fachada de Loja com Vidro | E & L Vidraçaria",

    description:
      "Fachadas comerciais em vidro sob medida com instalação profissional no Rio de Janeiro.",

    images: [
      afterImage,
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
    "Fachadas comerciais e vidraçaria",

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
    title: "Mais visibilidade para a loja",

    description:
      "A fachada de vidro permite que produtos, iluminação e o interior do estabelecimento sejam vistos com mais facilidade.",
  },
  {
    title: "Projeto sob medida",

    description:
      "A estrutura é planejada conforme as dimensões do vão, a entrada, a circulação e as necessidades do estabelecimento.",
  },
  {
    title: "Visual moderno",

    description:
      "O vidro combinado com perfis e ferragens bem definidos cria uma fachada mais limpa, elegante e profissional.",
  },
  {
    title: "Instalação especializada",

    description:
      "Montagem cuidadosa, com atenção ao alinhamento, aos pontos de fixação, à abertura das portas e ao acabamento final.",
  },
];

const projectOptions = [
  {
    title: "Fachada com portas de vidro",

    description:
      "Solução indicada para entradas comerciais que precisam unir transparência, circulação e acabamento moderno.",
  },
  {
    title: "Fechamento frontal em vidro",

    description:
      "Permite proteger o interior da loja sem bloquear a visualização dos produtos e da identidade do ambiente.",
  },
  {
    title: "Estrutura com perfis pretos",

    description:
      "Uma opção contemporânea que cria contraste, valoriza as linhas da fachada e combina com projetos comerciais modernos.",
  },
  {
    title: "Projeto personalizado",

    description:
      "A quantidade de folhas, o tipo de abertura, os puxadores e a divisão dos vidros são definidos conforme o espaço.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Análise da fachada",

    description:
      "A equipe avalia o vão, a circulação, o tipo de entrada e as necessidades de segurança e exposição da loja.",
  },
  {
    number: "02",
    title: "Definição do projeto",

    description:
      "São definidos o formato da fachada, as divisões, as portas, os perfis, as ferragens e os acabamentos.",
  },
  {
    number: "03",
    title: "Produção sob medida",

    description:
      "Os vidros e componentes são preparados conforme as medidas aprovadas para o estabelecimento.",
  },
  {
    number: "04",
    title: "Instalação e ajustes",

    description:
      "A fachada é instalada, alinhada e testada para garantir abertura adequada, segurança e acabamento profissional.",
  },
];

const faqs = [
  {
    question:
      "Qual vidro é indicado para fachada de loja?",

    answer:
      "O vidro temperado é frequentemente utilizado em fachadas comerciais por sua resistência e segurança. A espessura, as dimensões e a configuração devem ser definidas conforme o projeto e as condições do local.",
  },
  {
    question:
      "A fachada de vidro é feita sob medida?",

    answer:
      "Sim. Cada loja possui um vão, uma entrada e necessidades de circulação diferentes. Por isso, a fachada deve ser planejada de acordo com as medidas e a estrutura existente.",
  },
  {
    question:
      "É possível instalar portas de vidro na fachada?",

    answer:
      "Sim. O projeto pode incluir portas de abrir, de correr ou outras soluções adequadas ao espaço. O tipo de abertura depende da circulação, da largura disponível e do uso diário da loja.",
  },
  {
    question:
      "Posso escolher a cor dos perfis e das ferragens?",

    answer:
      "Sim. As opções podem variar conforme o sistema escolhido e a disponibilidade. Perfis pretos são muito utilizados em fachadas modernas, mas outros acabamentos também podem ser avaliados.",
  },
  {
    question:
      "A fachada de vidro ajuda a valorizar a loja?",

    answer:
      "Sim. O vidro amplia a visibilidade do interior, valoriza a iluminação, cria uma entrada mais profissional e pode contribuir para uma apresentação mais atraente do estabelecimento.",
  },
  {
    question:
      "Como solicitar um orçamento para fachada de loja?",

    answer:
      "Entre em contato pelo WhatsApp e envie fotos da frente do estabelecimento, medidas aproximadas e uma descrição do projeto desejado. A equipe orientará sobre a avaliação e os próximos passos.",
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
        "Fachada de Loja com Vidro no Rio de Janeiro | E & L Vidraçaria",

      description:
        "Projeto e instalação de fachada comercial em vidro sob medida no Rio de Janeiro.",

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
        url: `${siteUrl}${afterImage}`,

        caption:
          "Fachada comercial com vidro e estrutura preta instalada em loja",
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
          name: "Fachada de loja com vidro",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,

      name:
        "Fachada de loja com vidro sob medida",

      serviceType:
        "Projeto e instalação de fachada comercial em vidro",

      url: pageUrl,

      description:
        "Produção e instalação de fachadas de loja com vidro temperado, portas e estruturas sob medida no Rio de Janeiro.",

      image:
        `${siteUrl}${afterImage}`,

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
        `${siteUrl}${afterImage}`,

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
        "Fachadas de vidro",
        "Portas de vidro",
        "Vidros temperados",
        "Fechamentos comerciais",
        "Estruturas para vidro",
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

export default async function FachadaDeLojaComVidroPage() {
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
                  Fachada de loja com vidro
                </span>
              </nav>

              <p className="mt-8 inline-flex rounded-full border border-[var(--color-accent-light)] bg-[var(--color-bg-hover)] px-4 py-2 text-sm font-bold text-[var(--color-accent-hover)]">
                Projeto comercial no Rio de Janeiro
              </p>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
                Fachada de loja com vidro no Rio de Janeiro
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-tertiary)]">
                Valorize a entrada do seu estabelecimento com uma fachada
                de vidro sob medida, mais visibilidade para a loja e um
                acabamento moderno e profissional.
              </p>

              <ul className="mt-8 grid gap-3 text-sm font-semibold text-[var(--color-text-secondary)] sm:grid-cols-2">
                {[
                  "Fachada produzida sob medida",
                  "Portas e fechamentos em vidro",
                  "Estrutura e ferragens personalizadas",
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
                  src={afterImage}
                  alt="Fachada de loja com vidro e estrutura preta após a instalação"
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
                    Resultado final
                  </p>

                  <p className="mt-2 text-xl font-black text-[var(--color-text-light)]">
                    Fachada comercial com vidro
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
              desenvolve fachadas, portas, fechamentos e estruturas em
              vidro para lojas e estabelecimentos comerciais no Rio de
              Janeiro.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Antes e depois"
            title="Uma fachada mais moderna e profissional"
            description="O fechamento em vidro valoriza a entrada, permite visualizar o interior da loja e cria uma apresentação mais atraente para o público."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm">
              <div className="relative aspect-[4/3] bg-[var(--color-bg-tertiary)]">
                <Image
                  src={beforeImage}
                  alt="Loja antes da instalação da fachada de vidro"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-text-primary)] shadow">
                  Antes
                </span>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-black text-[var(--color-text-primary)]">
                  Entrada comercial aberta
                </h2>

                <p className="mt-3 leading-7 text-[var(--color-text-tertiary)]">
                  A frente da loja ainda não possuía um fechamento que
                  protegesse o ambiente e mantivesse a visibilidade do
                  interior.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-[var(--color-accent-light)] bg-[var(--color-bg-card)] shadow-sm">
              <div className="relative aspect-[4/3] bg-[var(--color-bg-tertiary)]">
                <Image
                  src={afterImage}
                  alt="Loja depois da instalação da fachada de vidro com estrutura preta"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-text-light)] shadow">
                  Depois
                </span>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-black text-[var(--color-text-primary)]">
                  Fachada de vidro instalada
                </h2>

                <p className="mt-3 leading-7 text-[var(--color-text-tertiary)]">
                  O vidro criou um fechamento elegante, preservou a
                  visibilidade da loja e valorizou a arquitetura do
                  estabelecimento.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Vantagens"
              title="Uma fachada que apresenta melhor o seu negócio"
              description="O projeto em vidro combina proteção, transparência e um acabamento profissional que valoriza a entrada da loja."
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
            eyebrow="Possibilidades"
            title="Projeto adaptado ao seu estabelecimento"
            description="A fachada pode ser configurada conforme o tamanho do vão, o fluxo de pessoas, o tipo de porta e o visual desejado."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {projectOptions.map(
              (option) => (
                <article
                  key={option.title}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-all hover:border-[var(--color-accent-light)] hover:bg-[var(--color-bg-hover)] hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 text-[var(--color-accent)]">
                      <CheckIcon />
                    </span>

                    <div>
                      <h3 className="text-xl font-black text-[var(--color-text-primary)]">
                        {option.title}
                      </h3>

                      <p className="mt-3 leading-7 text-[var(--color-text-tertiary)]">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>

          <div className="mt-12 rounded-3xl border border-[var(--color-accent-light)] bg-[var(--color-bg-hover)] p-6 sm:p-8">
            <h2 className="text-2xl font-black text-[var(--color-text-primary)]">
              O que deve ser avaliado antes da instalação?
            </h2>

            <div className="mt-5 grid gap-6 text-[var(--color-text-tertiary)] md:grid-cols-3">
              <div>
                <h3 className="font-black text-[var(--color-text-primary)]">
                  Medidas e estrutura
                </h3>

                <p className="mt-2 leading-7">
                  O vão, o piso, o teto e os pontos de fixação precisam
                  ser conferidos antes da produção.
                </p>
              </div>

              <div>
                <h3 className="font-black text-[var(--color-text-primary)]">
                  Circulação e abertura
                </h3>

                <p className="mt-2 leading-7">
                  O tipo de porta deve facilitar a entrada, a saída e o
                  fluxo diário de clientes e funcionários.
                </p>
              </div>

              <div>
                <h3 className="font-black text-[var(--color-text-primary)]">
                  Divisão dos vidros
                </h3>

                <p className="mt-2 leading-7">
                  A quantidade de folhas e perfis deve equilibrar
                  segurança, estética e visibilidade do interior.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Como funciona"
              title="Do orçamento à instalação"
              description="Um processo organizado para desenvolver uma fachada adequada ao espaço e ao funcionamento da loja."
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
              Vidraçaria comercial no Rio de Janeiro
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Fachada planejada para valorizar a sua loja
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text-tertiary)]">
              <p>
                A {siteConfig.nome} desenvolve fachadas e fechamentos em
                vidro para lojas e estabelecimentos comerciais em toda a
                cidade do Rio de Janeiro.
              </p>

              <p>
                O projeto deve considerar as medidas do vão, o tipo de
                entrada, a circulação, os pontos de fixação e a
                visibilidade desejada para o interior do estabelecimento.
              </p>

              <p>
                Um planejamento correto permite escolher a melhor
                configuração de portas, folhas fixas, perfis, ferragens e
                puxadores para o uso diário da loja.
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
              Envie as informações da fachada
            </h2>

            <p className="mt-5 leading-7 text-[var(--color-text-hero-muted)]">
              Para agilizar o atendimento, envie fotos da frente da loja,
              medidas aproximadas do vão e uma descrição do tipo de
              fechamento ou porta desejada.
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
              title="Perguntas sobre fachada de loja com vidro"
              description="Informações importantes para planejar seu projeto antes de solicitar o orçamento."
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
                Sua loja pode ser o próximo projeto
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[var(--color-text-hero-muted)]">
                Fale com nossa equipe e solicite um orçamento para fachada
                comercial em vidro no Rio de Janeiro.
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