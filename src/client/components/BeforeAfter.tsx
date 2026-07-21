import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export type BeforeAfterItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  beforeImage: string;
  beforeImageAlt: string;
  afterImage: string;
  afterImageAlt: string;
};

type BeforeAfterProps = {
  items?: BeforeAfterItem[];
};

const defaultItems: BeforeAfterItem[] = [
  {
    id: "box-banheiro-zona-sul",
    title: "Box de vidro em banheiro residencial",
    description:
      "Transformação de banheiro com instalação de box de vidro sob medida, melhorando a funcionalidade, a segurança e o acabamento visual do ambiente.",
    href: "/projetos/box-de-vidro-banheiro-residencial",
    beforeImage: "/images/before-after/box-banheiro-antes.jpg",
    beforeImageAlt: "Banheiro antes da instalação do box de vidro",
    afterImage: "/images/before-after/box-banheiro-depois.jpg",
    afterImageAlt: "Banheiro depois da instalação do box de vidro",
  },
  {
    id: "espelho-sala-comercial",
    title: "Espelho sob medida em ambiente comercial",
    description:
      "Projeto com espelho sob medida para ampliar a sensação de espaço, valorizar a iluminação e entregar um visual mais sofisticado ao ambiente.",
    href: "/projetos/espelho-sob-medida-ambiente-comercial",
    beforeImage: "/images/before-after/espelho-antes.jpg",
    beforeImageAlt: "Ambiente comercial antes da instalação do espelho",
    afterImage: "/images/before-after/espelho-depois.jpg",
    afterImageAlt: "Ambiente comercial depois da instalação do espelho",
  },
  {
    id: "fechamento-sacada-rj",
    title: "Fechamento de sacada com vidro",
    description:
      "Sacada transformada com fechamento em vidro para aumentar conforto, proteção contra vento e chuva e melhor aproveitamento do espaço no imóvel.",
    href: "/projetos/fechamento-de-sacada-rj",
    beforeImage: "/images/before-after/sacada-antes.jpg",
    beforeImageAlt: "Sacada antes do fechamento com vidro",
    afterImage: "/images/before-after/sacada-depois.jpg",
    afterImageAlt: "Sacada depois do fechamento com vidro",
  },
];

function ProjectMedia({
  beforeImage,
  beforeImageAlt,
  afterImage,
  afterImageAlt,
}: Pick<
  BeforeAfterItem,
  "beforeImage" | "beforeImageAlt" | "afterImage" | "afterImageAlt"
>) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <article className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
          <span className="rounded-full bg-[var(--color-bg-hover)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            Antes
          </span>
        </div>

        <div className="relative aspect-[4/3]">
          <Image
            src={beforeImage}
            alt={beforeImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </article>

      <article className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
          <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-light)]">
            Depois
          </span>
        </div>

        <div className="relative aspect-[4/3]">
          <Image
            src={afterImage}
            alt={afterImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </article>
    </div>
  );
}

export default function BeforeAfter({
  items = defaultItems,
}: BeforeAfterProps) {
  return (
    <section
      aria-labelledby="before-after-title"
      className="bg-[var(--color-bg-secondary)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <Badge className="rounded-full border-0 bg-[var(--color-bg-hover)] px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-bg-hover)]">
            Antes e depois
          </Badge>

          <h2
            id="before-after-title"
            className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
          >
            Veja alguns resultados dos nossos projetos em vidro
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text-tertiary)] sm:text-lg">
            Compare o antes e depois de alguns serviços realizados pela E&amp;L
            Vidraçaria e veja como soluções em vidro podem transformar estética,
            funcionalidade e valorização dos ambientes.
          </p>
        </header>

        <div className="mt-10 grid gap-6">
          {items.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden rounded-3xl border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <ProjectMedia
                    beforeImage={item.beforeImage}
                    beforeImageAlt={item.beforeImageAlt}
                    afterImage={item.afterImage}
                    afterImageAlt={item.afterImageAlt}
                  />

                  <div className="flex flex-col">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                        <ImageIcon className="h-5 w-5" aria-hidden="true" />
                      </span>

                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                        Projeto realizado
                      </p>
                    </div>

                    <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[var(--color-text-tertiary)] sm:text-base">
                      {item.description}
                    </p>

                    <div className="mt-6">
                      <Button
                        className="rounded-xl bg-[var(--color-accent)] text-[var(--color-text-light)] hover:bg-[var(--color-accent-hover)]"
                      >
                        <Link href={item.href}>
                          Ver detalhes do projeto
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}