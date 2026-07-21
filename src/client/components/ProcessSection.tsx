import {
  Calculator,
  Headset,
  PackageCheck,
  Ruler,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type StepItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type ProcessSectionProps = {
  steps?: StepItem[];
};

const defaultSteps: StepItem[] = [
  {
    title: "Atendimento",
    description:
      "Entendemos sua necessidade, tiramos dúvidas e orientamos sobre a melhor solução em vidro para o seu projeto residencial ou comercial no Rio de Janeiro.",
    icon: Headset,
  },
  {
    title: "Orçamento",
    description:
      "Após o atendimento inicial, enviamos um orçamento claro e objetivo, considerando o tipo de serviço, medidas aproximadas e acabamento desejado.",
    icon: Calculator,
  },
  {
    title: "Medição",
    description:
      "Realizamos a medição com atenção técnica para garantir encaixe preciso, segurança na instalação e melhor resultado final em cada detalhe do projeto.",
    icon: Ruler,
  },
  {
    title: "Fabricação",
    description:
      "Com as medidas definidas, o projeto segue para fabricação de acordo com o serviço contratado, mantendo padrão de qualidade e acabamento profissional.",
    icon: PackageCheck,
  },
  {
    title: "Instalação",
    description:
      "Finalizamos com instalação especializada, organização no atendimento e cuidado com o ambiente para entregar um serviço seguro, funcional e bem executado.",
    icon: Wrench,
  },
];

export default function ProcessSection({
  steps = defaultSteps,
}: ProcessSectionProps) {
  return (
    <section
      aria-labelledby="process-title"
      className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <Badge className="rounded-full border-0 bg-[var(--color-bg-hover)] px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-bg-hover)]">
            Como funciona
          </Badge>

          <h2
            id="process-title"
            className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
          >
            Etapas do atendimento da E&amp;L Vidraçaria
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text-tertiary)] sm:text-lg">
            Nosso processo foi pensado para oferecer mais clareza, agilidade e
            segurança desde o primeiro contato até a instalação final do seu
            projeto em vidro.
          </p>
        </header>

        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const stepNumber = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={step.title}
                  className="relative flex w-[280px] shrink-0 items-stretch lg:w-[240px] xl:w-[250px]"
                >
                  <Card className="relative flex h-full w-full flex-col rounded-2xl border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex items-center justify-between gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>

                        <span className="text-sm font-bold tracking-[0.16em] text-[var(--color-text-muted)]">
                          {stepNumber}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-semibold text-[var(--color-text-primary)]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[var(--color-text-tertiary)] sm:text-base">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>

                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute left-full top-1/2 hidden h-[2px] w-6 -translate-y-1/2 bg-[var(--color-border)] lg:block"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}