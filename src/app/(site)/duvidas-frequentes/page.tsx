// src/app/(site)/duvidas-frequentes/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  GlassWater,
  HelpCircle,
  Home,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
  Ruler,
  ShieldCheck,
} from "lucide-react";

import { siteConfig } from "@/client/config/site.config";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQGroup = {
  title: string;
  description: string;
  icon: typeof HelpCircle;
  items: FAQItem[];
};

const faqGroups: FAQGroup[] = [
  {
    title: "Serviços de vidraçaria",
    description:
      "Dúvidas sobre os principais serviços realizados pela E & L Vidraçaria no Rio de Janeiro.",
    icon: GlassWater,
    items: [
      {
        question:
          "Quais serviços a E & L Vidraçaria realiza no Rio de Janeiro?",
        answer:
          "A E & L Vidraçaria realiza serviços como box de vidro, espelhos sob medida, guarda-corpo, corrimão, fechamento de sacadas, portas de vidro, fachadas, vitrines e aplicações com vidro temperado. O atendimento inclui projetos residenciais e comerciais no Rio de Janeiro.",
      },
      {
        question: "A E & L Vidraçaria atende residências e empresas?",
        answer:
          "Sim. A empresa atende casas, apartamentos, condomínios, lojas, academias, escritórios e outros estabelecimentos comerciais, de acordo com as características de cada projeto.",
      },
      {
        question: "Vocês trabalham com espelhos sob medida?",
        answer:
          "Sim. A E & L Vidraçaria desenvolve espelhos sob medida para banheiros, salas, quartos, corredores, academias, lojas, escritórios e outros ambientes. As medidas e o acabamento são definidos conforme o local de instalação.",
      },
      {
        question: "Vocês fazem instalação de guarda-corpo e corrimão?",
        answer:
          "Sim. A empresa realiza projetos de guarda-corpo e corrimão para escadas, varandas, sacadas, mezaninos e outras áreas internas ou externas. A solução precisa considerar medidas, estrutura, tipo de fixação e requisitos de segurança do ambiente.",
      },
      {
        question: "Vocês fazem portas e fachadas de vidro?",
        answer:
          "Sim. A E & L Vidraçaria realiza portas, vitrines e fachadas de vidro para imóveis residenciais e comerciais, com projetos planejados conforme as dimensões, a estrutura e o uso do espaço.",
      },
    ],
  },
  {
    title: "Orçamento, medição e prazo",
    description:
      "Informações sobre avaliação, medidas, fabricação e instalação.",
    icon: Ruler,
    items: [
      {
        question:
          "Como funciona o orçamento para box, espelhos e outros serviços?",
        answer:
          "O atendimento começa com informações sobre o tipo de serviço, o bairro, o local de instalação e, quando possível, fotos, vídeos e medidas aproximadas. Dependendo do projeto, pode ser necessária uma medição técnica para confirmar os detalhes antes da fabricação e da instalação.",
      },
      {
        question: "O orçamento pode ser iniciado pelo WhatsApp?",
        answer:
          "Sim. O primeiro atendimento pode ser iniciado pelo WhatsApp. Para agilizar a avaliação, envie o tipo de serviço, o bairro, fotos do ambiente e medidas aproximadas, quando disponíveis.",
      },
      {
        question: "É necessária uma visita para realizar a medição?",
        answer:
          "Alguns serviços podem ser avaliados inicialmente por fotos e medidas aproximadas, mas projetos sob medida normalmente exigem confirmação das dimensões e das condições do local antes da fabricação.",
      },
      {
        question: "Quanto tempo leva para concluir um projeto de vidraçaria?",
        answer:
          "O prazo varia conforme o tipo de serviço, as medidas, o acabamento, os materiais, a fabricação e a complexidade da instalação. A previsão é informada durante o orçamento, após a equipe compreender as necessidades do projeto.",
      },
      {
        question: "O box de vidro é produzido sob medida?",
        answer:
          "Sim. O box normalmente é produzido conforme as medidas e as características do banheiro. Isso ajuda a garantir melhor encaixe, funcionamento adequado e acabamento compatível com o espaço disponível.",
      },
    ],
  },
  {
    title: "Vidros, segurança e acabamento",
    description:
      "Perguntas sobre vidro temperado, materiais, ferragens e escolha da aplicação.",
    icon: ShieldCheck,
    items: [
      {
        question: "Qual é a diferença entre vidro comum e vidro temperado?",
        answer:
          "O vidro temperado passa por um processo térmico que aumenta sua resistência mecânica e térmica em relação ao vidro comum. Por isso, é utilizado em diferentes aplicações de vidraçaria. A escolha do vidro deve considerar o local, as medidas, o tipo de uso e as necessidades de segurança do projeto.",
      },
      {
        question: "Como escolher o tipo de vidro adequado?",
        answer:
          "A escolha depende da aplicação, das medidas, da estrutura existente, do ambiente e do resultado esperado. A equipe pode orientar sobre opções de vidro, espessura, acabamento e acessórios durante a avaliação do projeto.",
      },
      {
        question: "A qualidade das ferragens interfere no resultado?",
        answer:
          "Sim. Vidro, ferragens, perfis, acessórios e instalação influenciam o funcionamento, a durabilidade, a segurança e o acabamento final. Por isso, todos esses elementos precisam ser considerados em conjunto.",
      },
      {
        question: "Vidro temperado pode ser cortado depois de pronto?",
        answer:
          "Não. Depois do processo de têmpera, o vidro não pode ser cortado, furado ou ajustado. Por isso, as medidas e os recortes precisam ser definidos antes da fabricação.",
      },
      {
        question: "Todos os serviços utilizam o mesmo tipo de vidro?",
        answer:
          "Não. Cada aplicação pode exigir um tipo de vidro, espessura, acabamento ou sistema de instalação diferente. Box, espelhos, fachadas, portas e guarda-corpo possuem necessidades específicas.",
      },
    ],
  },
  {
    title: "Atendimento no Rio de Janeiro",
    description:
      "Dúvidas sobre localização, bairros atendidos e solicitação de atendimento.",
    icon: MapPin,
    items: [
      {
        question:
          "A E & L Vidraçaria atende todos os bairros do Rio de Janeiro?",
        answer:
          "A empresa atende diferentes regiões da cidade e do estado do Rio de Janeiro. A disponibilidade pode variar conforme o bairro, o tipo de serviço e as condições do projeto. Envie o endereço pelo WhatsApp para confirmar o atendimento.",
      },
      {
        question: "Onde fica a E & L Vidraçaria?",
        answer:
          "A E & L Vidraçaria tem base na Vila da Penha, na Zona Norte do Rio de Janeiro.",
      },
      {
        question: "Como confirmar se meu bairro é atendido?",
        answer:
          "Envie o bairro, o endereço aproximado, o tipo de serviço e, quando possível, fotos e medidas do local. A equipe verificará a disponibilidade para o projeto.",
      },
      {
        question:
          "A E & L Vidraçaria atende projetos comerciais fora da Vila da Penha?",
        answer:
          "Sim. A empresa já executou projetos comerciais em diferentes regiões do estado do Rio de Janeiro. A disponibilidade é confirmada conforme o endereço e as características do serviço.",
      },
      {
        question: "Como solicitar um orçamento?",
        answer:
          "Entre em contato pelo WhatsApp e informe o serviço desejado, o bairro, o tipo de imóvel e as medidas aproximadas. Fotos ou vídeos do local ajudam a tornar o primeiro atendimento mais rápido e preciso.",
      },
    ],
  },
];

const allFaqs = faqGroups.flatMap((group) => group.items);

const whatsappMessage = encodeURIComponent(
  "Olá! Li as dúvidas frequentes no site e gostaria de solicitar um orçamento de vidraçaria no Rio de Janeiro.",
);

const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;
const pageUrl = `${siteConfig.seo.url}/duvidas-frequentes`;

export const metadata: Metadata = {
  title: "Dúvidas sobre Vidraçaria no Rio de Janeiro | E & L",
  description:
    "Tire dúvidas sobre box de vidro, espelhos, guarda-corpo, corrimão, fachadas, portas, vidro temperado, orçamento e atendimento da E & L Vidraçaria no Rio de Janeiro.",
  keywords: [
    "dúvidas sobre vidraçaria",
    "vidraçaria no Rio de Janeiro",
    "orçamento vidraçaria Rio de Janeiro",
    "box de vidro RJ",
    "espelhos sob medida RJ",
    "vidro temperado Rio de Janeiro",
    "E & L Vidraçaria",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dúvidas sobre Vidraçaria no Rio de Janeiro | E & L",
    description:
      "Respostas sobre serviços, orçamento, medição, vidro temperado e atendimento da E & L Vidraçaria.",
    url: pageUrl,
    siteName: siteConfig.nome,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: siteConfig.seo.ogImage,
        alt: "Dúvidas sobre a E & L Vidraçaria no Rio de Janeiro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dúvidas sobre Vidraçaria no Rio de Janeiro",
    description:
      "Confira respostas sobre serviços, orçamento, medição e instalação de vidro.",
    images: [siteConfig.seo.ogImage],
  },
};

export default function FAQPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name: "Dúvidas frequentes sobre vidraçaria no Rio de Janeiro",
      url: pageUrl,
      mainEntity: allFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
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
          name: "Dúvidas frequentes",
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
              Dúvidas frequentes
            </span>
          </nav>

          <div className="mt-10 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-text-light)] backdrop-blur-sm">
              <HelpCircle className="h-4 w-4" aria-hidden="true" />
              Perguntas frequentes
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text-light)] sm:text-5xl lg:text-6xl">
              Dúvidas frequentes sobre vidraçaria no Rio de Janeiro
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-hero-muted)]">
              Encontre respostas sobre box de vidro, espelhos sob medida,
              guarda-corpo, corrimão, portas, fachadas, vidro temperado,
              orçamento, medição e instalação.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-success)] px-6 py-3 font-bold text-[var(--color-text-light)] transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-success)]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Tirar outra dúvida
              </Link>

              <Link
                href="#perguntas"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-[var(--color-text-light)] backdrop-blur-sm transition hover:bg-white/20"
              >
                Ver perguntas
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
              Antes do orçamento
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
              Informações importantes sobre serviços de vidraçaria
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[var(--color-text-secondary)]">
            <p>
              Cada projeto de vidro possui medidas, aplicações, ferragens e
              necessidades diferentes. Por isso, o orçamento depende das
              características do ambiente e do serviço solicitado.
            </p>

            <p>
              As respostas desta página ajudam no primeiro contato, mas a
              orientação definitiva depende da avaliação do local, das medidas
              e do tipo de instalação.
            </p>

            <p>
              A E & L Vidraçaria atende projetos residenciais e comerciais em
              diferentes regiões do Rio de Janeiro.
            </p>
          </div>
        </div>
      </section>

      {/* ACESSOS RÁPIDOS */}
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
              Encontre sua dúvida
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl">
              Perguntas organizadas por assunto
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {faqGroups.map(({ title, description, icon: Icon }, index) => (
              <Link
                key={title}
                href={`#grupo-${index + 1}`}
                className="group rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15"
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

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-text-light)]">
                  Ver perguntas
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

      {/* PERGUNTAS */}
      <section
        id="perguntas"
        className="scroll-mt-24 bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <header className="max-w-4xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Perguntas e respostas
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
              Tire suas dúvidas sobre a E & L Vidraçaria
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)]">
              Consulte informações sobre serviços, orçamento, materiais,
              segurança e atendimento no Rio de Janeiro.
            </p>
          </header>

          <div className="mt-12 space-y-12">
            {faqGroups.map((group, groupIndex) => {
              const Icon = group.icon;

              return (
                <section
                  key={group.title}
                  id={`grupo-${groupIndex + 1}`}
                  className="scroll-mt-28"
                  aria-labelledby={`grupo-${groupIndex + 1}-title`}
                >
                  <div className="mb-6 flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>

                    <div>
                      <h3
                        id={`grupo-${groupIndex + 1}-title`}
                        className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl"
                      >
                        {group.title}
                      </h3>

                      <p className="mt-2 leading-7 text-[var(--color-text-secondary)]">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="divide-y divide-[var(--color-border)] rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
                    {group.items.map((item) => (
                      <details key={item.question} className="group p-6">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-bold text-[var(--color-text-primary)] sm:text-lg">
                          <span className="flex items-start gap-3">
                            <HelpCircle
                              className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]"
                              aria-hidden="true"
                            />

                            <span>{item.question}</span>
                          </span>

                          <span className="text-xl text-[var(--color-accent)] transition-transform group-open:rotate-45">
                            +
                          </span>
                        </summary>

                        <p className="mt-4 pl-8 leading-7 text-[var(--color-text-secondary)]">
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* LINKS INTERNOS */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Continue navegando
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Conheça os serviços e as regiões atendidas
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: GlassWater,
                title: "Serviços de vidraçaria",
                description:
                  "Veja box, espelhos, guarda-corpo, portas, fachadas e outras soluções.",
                href: "/servicos",
              },
              {
                icon: Building2,
                title: "Projetos executados",
                description:
                  "Conheça fachadas, vitrines e outros projetos comerciais em vidro.",
                href: "/projetos",
              },
              {
                icon: MapPin,
                title: "Onde atendemos",
                description:
                  "Consulte bairros e regiões atendidos no Rio de Janeiro.",
                href: "/onde-atendemos",
              },
            ].map(({ icon: Icon, title, description, href }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
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

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]">
                  Acessar página
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

      {/* CTA FINAL */}
      <section
        className="py-16 sm:py-20 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 rounded-[2rem] border border-white/20 bg-white/10 p-7 backdrop-blur-sm sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Atendimento pelo WhatsApp
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[var(--color-text-light)] sm:text-4xl">
                Ainda tem alguma dúvida sobre seu projeto?
              </h2>

              <p className="mt-4 text-lg leading-8 text-[var(--color-text-hero-muted)]">
                Envie o serviço desejado, o bairro, fotos e medidas aproximadas
                para receber uma orientação inicial.
              </p>
            </div>

            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-success)] px-6 py-3 font-bold text-[var(--color-text-light)] transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-success)]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Falar com a vidraçaria
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}