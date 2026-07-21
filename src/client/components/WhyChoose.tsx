import {
  BadgeCheck,
  Clock3,
  GlassWater,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: MapPinned,
    title: "Atendimento em todo o Rio de Janeiro",
    description:
      "A E&L Vidraçaria atende todo o município do Rio de Janeiro com soluções sob medida para projetos residenciais e comerciais, facilitando o orçamento e a execução com mais agilidade.",
  },
  {
    icon: Clock3,
    title: "Orçamento rápido e atendimento ágil",
    description:
      "Quem procura vidraçaria no Rio de Janeiro quer resposta rápida. Por isso, nosso atendimento é direto, objetivo e focado em apresentar a melhor solução em vidro para cada necessidade.",
  },
  {
    icon: ShieldCheck,
    title: "Instalação especializada e segura",
    description:
      "Trabalhamos com instalação de box de vidro, guarda-corpo, corrimão, portas e fachadas com atenção técnica, segurança e acabamento profissional em cada etapa do serviço.",
  },
  {
    icon: GlassWater,
    title: "Projetos em vidro sob medida",
    description:
      "Cada ambiente exige uma solução específica. Desenvolvemos projetos personalizados em espelhos sob medida, vidros temperados, fechamento de sacadas e outras estruturas em vidro.",
  },
  {
    icon: Sparkles,
    title: "Acabamento que valoriza o ambiente",
    description:
      "Além da funcionalidade, priorizamos estética, durabilidade e bom acabamento para entregar projetos que valorizam banheiros, salas, fachadas comerciais e ambientes corporativos.",
  },
  {
    icon: BadgeCheck,
    title: "Confiança para obras residenciais e comerciais",
    description:
      "A E&L entrega soluções em vidraçaria com compromisso, clareza no atendimento e foco no resultado final, transmitindo mais segurança para clientes que buscam qualidade e bom custo-benefício.",
  },
];

export default function WhyChoose() {
  return (
    <section
      aria-labelledby="why-choose-title"
      className="bg-[var(--color-bg-accent)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[var(--color-bg-hover)] px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)]">
            Por que escolher a E&amp;L
          </span>

          <h2
            id="why-choose-title"
            className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
          >
            Motivos para escolher a E&amp;L Vidraçaria no Rio de Janeiro
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text-tertiary)] sm:text-lg">
            Unimos atendimento rápido, instalação especializada e soluções em
            vidro sob medida para entregar mais segurança, beleza e praticidade
            em projetos residenciais e comerciais.
          </p>
        </header>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <Card
                key={reason.title}
                className="h-full rounded-2xl border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm transition-transform duration-200 hover:-translate-y-1"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-tertiary)] sm:text-base">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}