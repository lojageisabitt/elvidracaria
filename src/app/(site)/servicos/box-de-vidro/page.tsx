import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/client/config/site.config";

const siteUrl = siteConfig.seo.url.replace(/\/$/, "");
const pagePath = "/projetos/box-de-vidro";
const pageUrl = `${siteUrl}${pagePath}`;

const beforeImage = "/images/before-after/box-banheiro-antes.jpg";
const afterImage = "/images/before-after/box-banheiro-depois.jpg";

const phone = `+${siteConfig.whatsapp}`;
const whatsappMessage = encodeURIComponent(
  "Olá! Vim pela página de box de vidro da E & L Vidraçaria e gostaria de solicitar um orçamento.",
);
const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;

const businessAddress = {
  streetAddress: "Av. Brás de Pina, 1308",
  neighborhood: "Vila da Penha",
  city: "Rio de Janeiro",
  region: "RJ",
  country: "BR",
};

export const metadata: Metadata = {
  title: "Box de Vidro no Rio de Janeiro | E & L Vidraçaria",

  description:
    "Box de vidro temperado sob medida para banheiros no Rio de Janeiro. Veja o antes e depois e solicite seu orçamento à E & L Vidraçaria.",

  keywords: [
    "box de vidro",
    "box para banheiro",
    "box de vidro temperado",
    "box sob medida",
    "box blindex",
    "instalação de box de vidro",
    "box de banheiro Rio de Janeiro",
    "vidraçaria no Rio de Janeiro",
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
    title: "Box de Vidro no Rio de Janeiro | E & L Vidraçaria",
    description:
      "Projeto e instalação de box de vidro temperado sob medida para banheiros residenciais e comerciais no Rio de Janeiro.",
    images: [
      {
        url: afterImage,
        width: 1200,
        height: 900,
        alt: "Banheiro após a instalação de box de vidro temperado sob medida",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Box de Vidro no Rio de Janeiro | E & L Vidraçaria",
    description:
      "Box de vidro temperado sob medida, com instalação profissional no Rio de Janeiro.",
    images: [afterImage],
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

  category: "Vidraçaria e instalação de box de vidro",

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
      "O box é planejado de acordo com as medidas, a abertura e as características específicas do banheiro.",
  },
  {
    title: "Vidro temperado",
    description:
      "Material resistente e apropriado para oferecer mais segurança e durabilidade durante o uso diário.",
  },
  {
    title: "Acabamento profissional",
    description:
      "Instalação cuidadosa, com atenção ao alinhamento, às ferragens, à vedação e ao funcionamento.",
  },
  {
    title: "Atendimento no Rio",
    description:
      "Atendimento personalizado para projetos residenciais e comerciais em toda a cidade do Rio de Janeiro.",
  },
];

const boxOptions = [
  {
    title: "Box de correr",
    description:
      "Ideal para banheiros pequenos e médios, pois as folhas deslizam sem ocupar a área externa.",
  },
  {
    title: "Box de abrir",
    description:
      "Uma solução elegante para ambientes que possuem espaço suficiente para a abertura da porta.",
  },
  {
    title: "Box de canto",
    description:
      "Indicado para áreas de banho posicionadas no encontro de duas paredes, aproveitando melhor o espaço.",
  },
  {
    title: "Box personalizado",
    description:
      "Projeto desenvolvido conforme o formato do banheiro, o tipo de vidro e o acabamento desejado.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Solicitação do orçamento",
    description:
      "Envie as informações iniciais, fotos do banheiro e, quando possível, as medidas aproximadas.",
  },
  {
    number: "02",
    title: "Avaliação do projeto",
    description:
      "A equipe analisa o espaço e orienta sobre o modelo, o vidro, a abertura e os acabamentos.",
  },
  {
    number: "03",
    title: "Conferência das medidas",
    description:
      "As dimensões são verificadas para que o box seja produzido corretamente e se adapte ao ambiente.",
  },
  {
    number: "04",
    title: "Instalação profissional",
    description:
      "O box é instalado com cuidado, conferindo alinhamento, movimentação, vedação e acabamento final.",
  },
];

const faqs = [
  {
    question: "Qual é o melhor tipo de vidro para box de banheiro?",
    answer:
      "O vidro temperado é amplamente utilizado em box de banheiro por sua resistência e segurança. O modelo, a espessura e o acabamento devem ser definidos conforme as medidas e as condições do local.",
  },
  {
    question: "O box de vidro é produzido sob medida?",
    answer:
      "Sim. Cada banheiro possui dimensões, paredes, bancadas e áreas de abertura diferentes. Por isso, o box deve ser planejado e produzido de acordo com as medidas do ambiente.",
  },
  {
    question: "Quais modelos de box estão disponíveis?",
    answer:
      "É possível desenvolver box de correr, de abrir, de canto e outras configurações personalizadas. A melhor opção depende do espaço livre, da posição do chuveiro e da circulação no banheiro.",
  },
  {
    question: "É possível escolher a cor do vidro e das ferragens?",
    answer:
      "Sim. As opções podem variar conforme o projeto e a disponibilidade, incluindo vidros transparentes, fumê ou jateados e diferentes acabamentos de perfis e ferragens.",
  },
  {
    question: "A E & L Vidraçaria atende quais regiões?",
    answer:
      "A E & L Vidraçaria está localizada na Vila da Penha e oferece atendimento para projetos em toda a cidade do Rio de Janeiro.",
  },
  {
    question: "Como solicitar um orçamento para box de vidro?",
    answer:
      "Entre em contato pelo WhatsApp e envie uma breve descrição do projeto, fotos do banheiro e, caso tenha, as medidas aproximadas. A equipe orientará sobre os próximos passos.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Box de Vidro no Rio de Janeiro | E & L Vidraçaria",
      description:
        "Projeto e instalação de box de vidro temperado sob medida para banheiros no Rio de Janeiro.",
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
        caption: "Box de vidro instalado em banheiro residencial",
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
          name: "Projetos",
          item: `${siteUrl}/projetos`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Box de vidro",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Box de vidro temperado sob medida",
      serviceType: "Projeto e instalação de box de vidro para banheiro",
      url: pageUrl,
      description:
        "Produção e instalação de box de vidro temperado sob medida para banheiros residenciais e comerciais no Rio de Janeiro.",
      image: `${siteUrl}${afterImage}`,

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
      image: `${siteUrl}${afterImage}`,

      address: {
        "@type": "PostalAddress",
        streetAddress: businessAddress.streetAddress,
        addressLocality: businessAddress.city,
        addressRegion: businessAddress.region,
        addressCountry: businessAddress.country,
      },

      areaServed: {
        "@type": "City",
        name: businessAddress.city,
      },

      knowsAbout: [
        "Box de vidro",
        "Vidros temperados",
        "Espelhos sob medida",
        "Vidros jateados",
        "Vidros fumê",
        "Serralheria",
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,

      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,

        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
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

export default async function BoxDeVidroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
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

                <span aria-hidden="true">/</span>

                <span
                  aria-current="page"
                  className="font-semibold text-[var(--color-text-primary)]"
                >
                  Box de vidro
                </span>
              </nav>

              <p className="mt-8 inline-flex rounded-full border border-[var(--color-accent-light)] bg-[var(--color-bg-hover)] px-4 py-2 text-sm font-bold text-[var(--color-accent-hover)]">
                Projeto sob medida no Rio de Janeiro
              </p>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
                Box de vidro para banheiro no Rio de Janeiro
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-tertiary)]">
                Transforme seu banheiro com um box de vidro temperado produzido
                sob medida, instalado com cuidado e pensado para unir segurança,
                praticidade e acabamento moderno.
              </p>

              <ul className="mt-8 grid gap-3 text-sm font-semibold text-[var(--color-text-secondary)] sm:grid-cols-2">
                {[
                  "Vidro temperado sob medida",
                  "Modelos de correr, abrir e canto",
                  "Atendimento personalizado",
                  "Instalação profissional",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-[var(--color-accent)]">
                      <CheckIcon />
                    </span>

                    {item}
                  </li>
                ))}
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
                  alt="Banheiro com box de vidro sob medida e perfis pretos após a instalação"
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
                    Box de vidro com estrutura preta
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
              oferece box de vidro, vidros temperados, espelhos sob medida,
              vidros jateados, vidros fumê e serviços de serralheria para
              projetos residenciais e comerciais.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Antes e depois"
            title="Uma transformação que melhora todo o banheiro"
            description="O box delimita a área do banho, ajuda a manter o ambiente mais organizado e acrescenta um acabamento moderno ao projeto."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm">
              <div className="relative aspect-[4/3] bg-[var(--color-bg-tertiary)]">
                <Image
                  src={beforeImage}
                  alt="Banheiro antes da instalação do box de vidro"
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
                  Banheiro sem fechamento
                </h2>

                <p className="mt-3 leading-7 text-[var(--color-text-tertiary)]">
                  A área do banho estava aberta, sem uma divisão adequada para
                  conter a água e finalizar visualmente o ambiente.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-[var(--color-accent-light)] bg-[var(--color-bg-card)] shadow-sm">
              <div className="relative aspect-[4/3] bg-[var(--color-bg-tertiary)]">
                <Image
                  src={afterImage}
                  alt="Banheiro depois da instalação do box de vidro com perfis pretos"
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
                  Box instalado sob medida
                </h2>

                <p className="mt-3 leading-7 text-[var(--color-text-tertiary)]">
                  O fechamento em vidro trouxe mais proteção, praticidade e um
                  visual elegante, respeitando o formato e a circulação do
                  banheiro.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Vantagens"
              title="Box pensado para o seu espaço"
              description="Cada projeto é analisado conforme as medidas, o tipo de abertura e o acabamento desejado."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-all hover:border-[var(--color-accent-light)] hover:bg-[var(--color-bg-hover)] hover:shadow-lg"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)] text-sm font-black text-[var(--color-text-light)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 text-lg font-black text-[var(--color-text-primary)]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-tertiary)]">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Modelos de box"
            title="Encontre a solução ideal para o seu banheiro"
            description="A configuração correta ajuda a aproveitar melhor o espaço e torna o uso diário mais confortável."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {boxOptions.map((option) => (
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
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-[var(--color-accent-light)] bg-[var(--color-bg-hover)] p-6 sm:p-8">
            <h2 className="text-2xl font-black text-[var(--color-text-primary)]">
              Transparente, fumê ou jateado?
            </h2>

            <div className="mt-5 grid gap-6 text-[var(--color-text-tertiary)] md:grid-cols-3">
              <div>
                <h3 className="font-black text-[var(--color-text-primary)]">
                  Vidro transparente
                </h3>

                <p className="mt-2 leading-7">
                  Ajuda a ampliar visualmente o banheiro e combina com
                  diferentes estilos de revestimento.
                </p>
              </div>

              <div>
                <h3 className="font-black text-[var(--color-text-primary)]">
                  Vidro fumê
                </h3>

                <p className="mt-2 leading-7">
                  Cria um acabamento mais marcante e oferece maior sensação de
                  privacidade.
                </p>
              </div>

              <div>
                <h3 className="font-black text-[var(--color-text-primary)]">
                  Vidro jateado
                </h3>

                <p className="mt-2 leading-7">
                  Permite a passagem de luz, mas reduz a visão direta da área
                  interna do box.
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
              description="Um processo claro para entender a necessidade do ambiente e entregar um box adequado ao projeto."
            />

            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
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
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Vidraçaria no Rio de Janeiro
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Atendimento local e projeto personalizado
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text-tertiary)]">
              <p>
                A {siteConfig.nome} está localizada na Vila da Penha e atende
                projetos de box de vidro em toda a cidade do Rio de Janeiro.
              </p>

              <p>
                Antes da produção, é importante avaliar as medidas do vão, o
                alinhamento das paredes, a posição da bancada, do vaso
                sanitário e dos demais elementos que podem interferir na
                abertura do box.
              </p>

              <p>
                Essa análise ajuda a escolher o modelo adequado e reduz riscos
                de folgas, dificuldade de movimentação ou necessidade de
                ajustes posteriores.
              </p>
            </div>

            <address className="mt-8 not-italic">
              <p className="font-black text-[var(--color-text-primary)]">
                {siteConfig.nome}
              </p>

              <p className="mt-2 text-[var(--color-text-tertiary)]">
                {businessAddress.streetAddress} —{" "}
                {businessAddress.neighborhood}
                <br />
                {businessAddress.city} — {businessAddress.region}
              </p>
            </address>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-accent)] p-7 text-[var(--color-text-light)] shadow-xl sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-light)]">
              Solicite seu orçamento
            </p>

            <h2 className="mt-4 text-3xl font-black text-[var(--color-text-light)]">
              Envie as informações do seu banheiro
            </h2>

            <p className="mt-5 leading-7 text-[var(--color-text-hero-muted)]">
              Para agilizar o atendimento, envie fotos do local, uma breve
              descrição do modelo desejado e, caso tenha, as medidas
              aproximadas da área do box.
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
              title="Perguntas sobre box de vidro"
              description="Informações importantes para planejar seu projeto antes de solicitar o orçamento."
            />

            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 open:border-[var(--color-accent-light)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-black text-[var(--color-text-primary)]">
                    <span>{faq.question}</span>

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
              ))}
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
                Seu banheiro pode ser o próximo projeto
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[var(--color-text-hero-muted)]">
                Fale com nossa equipe e solicite um orçamento para box de vidro
                sob medida no Rio de Janeiro.
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