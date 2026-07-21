import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/client/config/site.config";

const siteUrl = siteConfig.seo.url.replace(/\/$/, "");
const pagePath = "/projetos/espelho-com-iluminacao";
const pageUrl = `${siteUrl}${pagePath}`;

const beforeImage =
  "/images/before-after/espelho-lavabo-antes.jpg";
const afterImage =
  "/images/before-after/espelho-lavabo-depois.jpg";

const phone = `+${siteConfig.whatsapp}`;

const whatsappMessage = encodeURIComponent(
  "Olá! Vim pela página de espelho com iluminação da E & L Vidraçaria e gostaria de solicitar um orçamento.",
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
    "Espelho com Iluminação em LED no Rio de Janeiro | E & L Vidraçaria",

  description:
    "Espelho sob medida com iluminação em LED para banheiros e lavabos no Rio de Janeiro. Veja o antes e depois e solicite seu orçamento.",

  keywords: [
    "espelho com iluminação",
    "espelho com LED",
    "espelho com iluminação em LED",
    "espelho para banheiro com LED",
    "espelho para lavabo",
    "espelho sob medida",
    "espelho sob medida Rio de Janeiro",
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

    title:
      "Espelho com Iluminação em LED no Rio de Janeiro",

    description:
      "Projeto de espelho sob medida com iluminação em LED para banheiros, lavabos e ambientes personalizados no Rio de Janeiro.",

    images: [
      {
        url: afterImage,
        width: 1200,
        height: 900,
        alt:
          "Lavabo após a instalação de espelho sob medida com iluminação em LED",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Espelho com Iluminação em LED | E & L Vidraçaria",

    description:
      "Espelhos sob medida com iluminação em LED e instalação profissional no Rio de Janeiro.",

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
    "Espelhos sob medida e vidraçaria",

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
      "O espelho é planejado conforme as dimensões da parede, da bancada e dos demais elementos do ambiente.",
  },
  {
    title: "Iluminação integrada",

    description:
      "A luz em LED cria um efeito moderno, melhora a iluminação do lavabo e destaca o acabamento do espelho.",
  },
  {
    title: "Sensação de amplitude",

    description:
      "Espelhos amplos ajudam a distribuir a luz e fazem banheiros e lavabos parecerem maiores e mais agradáveis.",
  },
  {
    title: "Instalação profissional",

    description:
      "Fixação cuidadosa, alinhamento correto e atenção aos recortes, bordas e ao ponto de alimentação elétrica.",
  },
];

const projectOptions = [
  {
    title: "Iluminação perimetral",

    description:
      "A luz contorna o espelho e cria um efeito elegante, uniforme e visualmente leve na parede.",
  },
  {
    title: "Espelho de parede ampla",

    description:
      "Uma solução que valoriza a bancada, amplia o ambiente e aproveita melhor a superfície disponível.",
  },
  {
    title: "Recortes personalizados",

    description:
      "O projeto pode considerar tomadas, interruptores, luminárias, acessórios e outros pontos existentes.",
  },
  {
    title: "Projeto para banheiro ou lavabo",

    description:
      "As dimensões e o acabamento são definidos de acordo com o uso, o estilo e as condições de cada ambiente.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Envio das informações",

    description:
      "Envie fotos do ambiente, medidas aproximadas e uma descrição do resultado desejado.",
  },
  {
    number: "02",
    title: "Avaliação do projeto",

    description:
      "A equipe analisa a parede, a bancada, os recortes necessários e o posicionamento da iluminação.",
  },
  {
    number: "03",
    title: "Produção sob medida",

    description:
      "O espelho é produzido conforme as dimensões aprovadas e as características definidas para o projeto.",
  },
  {
    number: "04",
    title: "Instalação e acabamento",

    description:
      "O espelho é instalado, alinhado e testado para entregar um resultado seguro, funcional e bem finalizado.",
  },
];

const faqs = [
  {
    question:
      "O espelho com iluminação é produzido sob medida?",

    answer:
      "Sim. O espelho é planejado de acordo com as medidas da parede, da bancada, das tomadas, dos interruptores e dos demais elementos existentes no ambiente.",
  },
  {
    question:
      "O espelho com LED pode ser instalado em banheiro?",

    answer:
      "Sim. O projeto deve considerar a umidade, as condições da parede e a disponibilidade de um ponto elétrico adequado. A avaliação correta ajuda a definir uma instalação segura e durável.",
  },
  {
    question:
      "É necessário ter um ponto elétrico atrás do espelho?",

    answer:
      "Normalmente é necessário disponibilizar alimentação elétrica próxima ao local de instalação. A posição e a preparação desse ponto devem ser avaliadas antes da produção do espelho.",
  },
  {
    question:
      "É possível fazer recortes para tomadas e interruptores?",

    answer:
      "Sim. Quando o projeto exige, os recortes podem ser planejados conforme as medidas e as posições exatas dos componentes existentes na parede.",
  },
  {
    question:
      "Qual tamanho de espelho fica melhor no lavabo?",

    answer:
      "O tamanho ideal depende da largura da bancada, da altura disponível, da posição da torneira, das luminárias e do efeito visual desejado. Um projeto sob medida permite aproveitar melhor o espaço.",
  },
  {
    question:
      "Como solicitar um orçamento?",

    answer:
      "Entre em contato pelo WhatsApp e envie fotos do ambiente, as medidas aproximadas e uma descrição do modelo desejado. A equipe orientará sobre a avaliação e os próximos passos.",
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
        "Espelho com Iluminação em LED no Rio de Janeiro | E & L Vidraçaria",

      description:
        "Projeto e instalação de espelho sob medida com iluminação em LED para banheiros e lavabos no Rio de Janeiro.",

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
          "Espelho sob medida com iluminação em LED instalado em lavabo",
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
          name: "Espelho com iluminação",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,

      name:
        "Espelho sob medida com iluminação em LED",

      serviceType:
        "Produção e instalação de espelho com iluminação para banheiros e lavabos",

      url: pageUrl,

      description:
        "Produção e instalação de espelhos sob medida com iluminação em LED para banheiros, lavabos e ambientes personalizados no Rio de Janeiro.",

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
        "Espelho com iluminação",
        "Espelho com LED",
        "Espelhos sob medida",
        "Espelhos para banheiro",
        "Espelhos para lavabo",
        "Vidros temperados",
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

export default async function EspelhoComIluminacaoPage() {
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
                  Espelho com iluminação
                </span>
              </nav>

              <p className="mt-8 inline-flex rounded-full border border-[var(--color-accent-light)] bg-[var(--color-bg-hover)] px-4 py-2 text-sm font-bold text-[var(--color-accent-hover)]">
                Projeto sob medida no Rio de Janeiro
              </p>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
                Espelho com iluminação em LED no Rio de Janeiro
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-tertiary)]">
                Valorize seu banheiro ou lavabo com um espelho sob medida,
                iluminação integrada e acabamento moderno pensado para as
                dimensões do seu ambiente.
              </p>

              <ul className="mt-8 grid gap-3 text-sm font-semibold text-[var(--color-text-secondary)] sm:grid-cols-2">
                {[
                  "Espelho produzido sob medida",
                  "Iluminação em LED integrada",
                  "Projeto para banheiro e lavabo",
                  "Instalação e acabamento profissional",
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
                  alt="Lavabo com espelho sob medida e iluminação em LED após a instalação"
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
                    Espelho com iluminação perimetral
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
              produz e instala espelhos sob medida para banheiros,
              lavabos, salas, quartos e ambientes comerciais no Rio de
              Janeiro.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="Antes e depois"
            title="Um novo destaque para o lavabo"
            description="O espelho com iluminação transforma a parede da bancada, melhora a luz do ambiente e acrescenta um acabamento mais sofisticado ao projeto."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm">
              <div className="relative aspect-[4/3] bg-[var(--color-bg-tertiary)]">
                <Image
                  src={beforeImage}
                  alt="Lavabo antes da instalação do espelho com iluminação"
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
                  Parede sem o espelho
                </h2>

                <p className="mt-3 leading-7 text-[var(--color-text-tertiary)]">
                  A bancada ainda não possuía um elemento que ampliasse o
                  ambiente, valorizasse a parede e melhorasse a iluminação
                  do lavabo.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-[var(--color-accent-light)] bg-[var(--color-bg-card)] shadow-sm">
              <div className="relative aspect-[4/3] bg-[var(--color-bg-tertiary)]">
                <Image
                  src={afterImage}
                  alt="Lavabo depois da instalação do espelho sob medida com iluminação em LED"
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
                  Espelho iluminado instalado
                </h2>

                <p className="mt-3 leading-7 text-[var(--color-text-tertiary)]">
                  O espelho sob medida trouxe amplitude, iluminação suave
                  e um acabamento moderno que valorizou toda a bancada.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Vantagens"
              title="Mais iluminação, amplitude e acabamento"
              description="O projeto combina a função do espelho com uma iluminação integrada que valoriza o ambiente durante o dia e à noite."
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
            title="Um projeto adaptado ao seu ambiente"
            description="O tamanho, a posição da iluminação e os recortes são definidos conforme a parede, a bancada e as necessidades do espaço."
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
              O que precisa ser avaliado antes da instalação?
            </h2>

            <div className="mt-5 grid gap-6 text-[var(--color-text-tertiary)] md:grid-cols-3">
              <div>
                <h3 className="font-black text-[var(--color-text-primary)]">
                  Medidas e alinhamento
                </h3>

                <p className="mt-2 leading-7">
                  A largura, a altura, o nivelamento da parede e a posição
                  da bancada interferem diretamente no resultado.
                </p>
              </div>

              <div>
                <h3 className="font-black text-[var(--color-text-primary)]">
                  Ponto elétrico
                </h3>

                <p className="mt-2 leading-7">
                  A alimentação da iluminação deve ser planejada antes da
                  instalação e posicionada de forma adequada.
                </p>
              </div>

              <div>
                <h3 className="font-black text-[var(--color-text-primary)]">
                  Recortes e acessórios
                </h3>

                <p className="mt-2 leading-7">
                  Tomadas, interruptores, torneiras e outros elementos
                  precisam ser considerados durante a medição.
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
              description="Um processo organizado para produzir um espelho adequado às medidas e às condições do ambiente."
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
              Espelhos sob medida no Rio de Janeiro
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Projeto personalizado para banheiro e lavabo
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text-tertiary)]">
              <p>
                A {siteConfig.nome} produz e instala espelhos sob medida
                para residências e ambientes comerciais em toda a cidade
                do Rio de Janeiro.
              </p>

              <p>
                Em projetos com iluminação integrada, a medição correta é
                fundamental para alinhar o espelho com a bancada, a
                torneira, as tomadas e os demais elementos existentes.
              </p>

              <p>
                O planejamento também deve considerar a alimentação
                elétrica, a condição da parede e o efeito de iluminação
                desejado para o ambiente.
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
              Envie as informações do seu ambiente
            </h2>

            <p className="mt-5 leading-7 text-[var(--color-text-hero-muted)]">
              Para agilizar o atendimento, envie fotos da parede e da
              bancada, as medidas aproximadas e uma referência do estilo
              de iluminação desejado.
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
              title="Perguntas sobre espelho com iluminação"
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
                Seu ambiente pode ser o próximo projeto
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[var(--color-text-hero-muted)]">
                Fale com nossa equipe e solicite um orçamento para espelho
                sob medida com iluminação no Rio de Janeiro.
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