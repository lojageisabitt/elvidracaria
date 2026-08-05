// src/client/home/HomePage.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Star,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/5521964883630?text=Olá%2C%20quero%20solicitar%20um%20orçamento%20para%20um%20projeto%20de%20vidraçaria.";

const phoneHref = "tel:+5521964883630";

const services = [
  {
    title: "Box de vidro",
    description:
      "Box sob medida para banheiros, com opções de acabamento e instalação profissional.",
    href: "/servicos/box-de-vidro",
  },
  {
    title: "Espelhos sob medida",
    description:
      "Espelhos personalizados para banheiros, salas, quartos, academias e ambientes comerciais.",
    href: "/servicos/espelhos-sob-medida",
  },
  {
    title: "Guarda-corpo e corrimão",
    description:
      "Soluções para escadas, varandas e áreas elevadas, combinando segurança e acabamento.",
    href: "/servicos/guarda-corpo-e-corrimao",
  },
  {
    title: "Fechamento de sacadas",
    description:
      "Proteção e melhor aproveitamento do ambiente com fechamento planejado para o espaço.",
    href: "/servicos/fechamento-de-sacadas",
  },
  {
    title: "Portas de vidro",
    description:
      "Portas de correr, abrir e modelos personalizados para residências e estabelecimentos.",
    href: "/servicos/portas-de-vidro",
  },
  {
    title: "Fachadas de vidro",
    description:
      "Fachadas e vitrines para lojas, escritórios e empreendimentos comerciais.",
    href: "/servicos/fachadas-de-vidro",
  },
];

const differentials = [
  {
    icon: Ruler,
    title: "Projeto sob medida",
    description:
      "Cada solução é planejada conforme as medidas, o ambiente e a necessidade do cliente.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e qualidade",
    description:
      "Materiais adequados para cada aplicação e cuidado em todas as etapas da instalação.",
  },
  {
    icon: Clock3,
    title: "Atendimento objetivo",
    description:
      "Contato rápido para entender o projeto, orientar e preparar o orçamento.",
  },
  {
    icon: BadgeCheck,
    title: "Acabamento profissional",
    description:
      "Atenção aos detalhes para entregar um resultado funcional, seguro e bem finalizado.",
  },
];

const projects = [
  {
    title: "Guarda-corpo de vidro",
    category: "Projeto residencial",
    image: "/servicos/Guarda-Corpo.png",
    href: "/servicos/guarda-corpo-e-corrimao",
  },
  {
    title: "Porta de vidro fumê",
    category: "Portas de vidro",
    image: "/servicos/Porta-Fume.png",
    href: "/servicos/portas-de-vidro",
  },
  {
    title: "Escada com alumínio preto",
    category: "Guarda-corpo e corrimão",
    image: "/servicos/Escada-em-aluminio-Preto.png",
    href: "/servicos/guarda-corpo-e-corrimao",
  },
];

const faqs = [
  {
    question: "Como funciona o atendimento?",
    answer:
      "O atendimento acontece em quatro etapas: primeiro entendemos a sua necessidade; depois avaliamos medidas e detalhes do local; em seguida preparamos a solução e o orçamento; por fim, realizamos a instalação e a finalização do serviço.",
  },
  {
    question: "O orçamento é gratuito?",
    answer:
      "Você pode iniciar o orçamento pelo WhatsApp. Dependendo do projeto, poderá ser necessária uma avaliação técnica ou medição no local.",
  },
  {
    question: "A E & L Vidraçaria atende residências e empresas?",
    answer:
      "Sim. Atendemos projetos residenciais e comerciais, incluindo box, espelhos, portas, fachadas, vitrines, guarda-corpo, corrimão e fechamento de sacadas.",
  },
  {
    question: "Vocês trabalham com vidro temperado?",
    answer:
      "Sim. O tipo e a espessura do vidro são definidos de acordo com a aplicação, as medidas e os requisitos de segurança do projeto.",
  },
  {
    question: "Qual é o prazo para instalação?",
    answer:
      "O prazo depende do serviço, das medidas, do acabamento escolhido e da complexidade da instalação. A previsão é informada durante o orçamento.",
  },
  {
    question: "Quais regiões são atendidas?",
    answer:
      "A empresa está localizada na Vila da Penha e atende diferentes regiões do Rio de Janeiro. Envie o endereço pelo WhatsApp para confirmar a disponibilidade na sua localidade.",
  },
];

export default function HomePage() {
  return (
    <div
      className="w-full overflow-x-clip"
      style={{
        backgroundColor: "var(--color-bg-primary)",
        color: "var(--color-text-primary)",
      }}
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 82% 24%, color-mix(in srgb, var(--color-accent) 20%, transparent), transparent 34%), linear-gradient(135deg, var(--color-bg-primary), var(--color-bg-secondary))",
          }}
        />

        <div className="mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:py-24">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)]">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Vila da Penha • Atendimento no Rio de Janeiro
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
              Vidraçaria no Rio de Janeiro para projetos residenciais e comerciais
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)]">
              Box de vidro, espelhos sob medida, guarda-corpo, corrimão,
              fechamento de sacadas, portas e fachadas com atendimento
              personalizado.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 font-semibold text-[var(--color-text-light)] transition hover:bg-[var(--color-accent-hover)]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Solicitar orçamento
              </Link>

              <Link
                href="/servicos"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 py-3 font-semibold text-[var(--color-text-primary)] transition hover:border-[var(--color-accent)]"
              >
                Conhecer os serviços
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--color-text-tertiary)]">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 text-[var(--color-accent)]"
                  aria-hidden="true"
                />
                Projetos sob medida
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 text-[var(--color-accent)]"
                  aria-hidden="true"
                />
                Atendimento residencial e comercial
              </span>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-2xl sm:min-h-[520px]">
            <Image
              src="/servicos/Guarda-Corpo.png"
              alt="Projeto de guarda-corpo de vidro realizado pela E & L Vidraçaria"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent 50%, color-mix(in srgb, var(--color-bg-primary) 82%, transparent) 100%)",
              }}
            />

            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-black/45 p-5 text-white backdrop-blur-md sm:inset-x-8 sm:bottom-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Soluções personalizadas
              </p>

              <p className="mt-2 text-xl font-bold sm:text-2xl">
                Vidro, segurança e acabamento para valorizar cada ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        id="servicos"
        className="py-20 lg:py-28"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent-hover), var(--color-accent))",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
              Serviços de vidraçaria
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl lg:text-5xl">
              Encontre a solução ideal para o seu projeto
            </h2>

            <p className="mt-5 text-lg leading-8 text-[var(--color-text-hero-muted)]">
              Escolha o serviço para conhecer aplicações, opções disponíveis,
              projetos relacionados e respostas específicas.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex min-h-64 flex-col rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-light)] hover:bg-white/15"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-lg font-bold text-[var(--color-accent-light)]">
                  +
                </div>

                <h3 className="mt-6 text-xl font-bold text-[var(--color-text-light)]">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-[var(--color-text-hero-muted)]">
                  {service.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-accent-light)]">
                  Saiba mais
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 font-semibold text-[var(--color-text-light)]"
            >
              Ver todos os serviços
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-primary)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Por que escolher a E & L
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Atendimento orientado para a necessidade de cada cliente
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6"
              >
                <Icon
                  className="h-9 w-9 text-[var(--color-accent)]"
                  aria-hidden="true"
                />

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

      {/* PROJETOS */}
      <section
        id="projetos"
        className="py-20 lg:py-28"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
                Projetos recentes
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl lg:text-5xl">
                Alguns resultados em vidro
              </h2>

              <p className="mt-5 text-lg leading-8 text-[var(--color-text-hero-muted)]">
                Uma seleção breve na home. A galeria completa fica na página de
                projetos.
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
            {projects.map((project) => (
              <Link
                key={`${project.title}-${project.image}`}
                href={project.href}
                className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="text-sm font-semibold text-[var(--color-accent)]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[var(--color-text-primary)]">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-primary)] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-12">
          <div>
            <div className="flex gap-1 text-[var(--color-accent)]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                />
              ))}
            </div>

            <h2 className="mt-5 text-3xl font-bold text-[var(--color-text-primary)]">
              A confiança também vem da experiência dos clientes
            </h2>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 sm:p-8">
            <p className="text-lg leading-8 text-[var(--color-text-secondary)]">
              As avaliações completas devem ficar reunidas em uma página
              própria, sem repetir dezenas de depoimentos na home.
            </p>

            <Link
              href="/avaliacoes"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-accent)]"
            >
              Ver avaliações dos clientes
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ E PROCESSO */}
      <section
        id="duvidas"
        className="py-20 lg:py-28"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent-hover), var(--color-accent))",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
              Atendimento e dúvidas
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-light)] sm:text-4xl">
              Informações importantes antes de solicitar seu orçamento
            </h2>

            <p className="mt-5 leading-8 text-[var(--color-text-hero-muted)]">
              O processo de atendimento foi incorporado às perguntas
              frequentes para deixar a navegação mais simples.
            </p>

            <Link
              href="/duvidas-frequentes"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--color-text-light)]"
            >
              Ver todas as dúvidas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="divide-y divide-white/15 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[var(--color-text-light)]">
                  {faq.question}

                  <span className="text-xl text-[var(--color-accent-light)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-[var(--color-text-hero-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ONDE ATENDEMOS */}
      <section className="bg-[var(--color-bg-primary)] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Onde atendemos
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[var(--color-text-primary)]">
                Base na Vila da Penha e atendimento em diferentes regiões do Rio
                de Janeiro
              </h2>

              <p className="mt-4 leading-8 text-[var(--color-text-secondary)]">
                Em vez de uma lista extensa de bairros, confirme o atendimento
                enviando o endereço do projeto para nossa equipe.
              </p>
            </div>

            <Link
              href="/onde-atendemos"
              className="mt-7 inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-[var(--color-accent)] px-6 py-3 font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-bg-hover)] lg:mt-0"
            >
              Consultar área de atendimento
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="py-20 lg:py-28"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 px-6 py-10 shadow-2xl backdrop-blur-sm sm:px-10 sm:py-14 lg:px-14"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--color-accent-hover) 82%, transparent), color-mix(in srgb, var(--color-accent-light) 30%, transparent))",
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
                  Solicite seu orçamento com a E & L Vidraçaria
                </h2>

                <p className="mt-4 text-lg leading-8 text-[var(--color-text-hero-muted)]">
                  Envie o tipo de serviço, o bairro e, quando possível, fotos e
                  medidas do local para agilizar o atendimento.
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