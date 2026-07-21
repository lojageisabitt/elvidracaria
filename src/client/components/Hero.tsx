import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type HeroProps = {
  whatsappHref?: string;
  quoteHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function Hero({
  whatsappHref = "https://wa.me/5521964683530?text=Olá!%20Quero%20solicitar%20um%20orçamento%20para%20um%20projeto%20de%20vidraçaria.",
  quoteHref = "#contato",
  imageSrc = "/empresa-smartfit.jpeg",
  imageAlt =  "Fachada espelhada da Smart Fit com guarda-corpo de blindex no terraço, em projeto da E&L Vidraçaria no Rio de Janeiro.",
}: HeroProps) {
  const highlights = [
    "Atendimento em todo o Rio de Janeiro",
    "Orçamento rápido",
    "Instalação especializada",
  ];

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,var(--color-bg-primary)_0%,var(--color-bg-secondary)_100%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <header className="flex max-w-3xl flex-col">
          <div className="mb-5 flex flex-wrap gap-3">
            <Badge className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card)]">
              E&amp;L Vidraçaria
            </Badge>

            <Badge className="rounded-full border-0 bg-[var(--color-bg-hover)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)] hover:bg-[var(--color-bg-hover)]">
              Projetos residenciais e comerciais no Rio de Janeiro
            </Badge>
          </div>

          <h1
            id="hero-title"
            className="max-w-4xl text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl"
          >
            Vidraçaria no Rio de Janeiro para Box de Vidro, Espelhos Sob Medida e
            Projetos em Vidro
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-tertiary)] sm:text-lg">
            A E&amp;L Vidraçaria atende todo o Rio de Janeiro com
            soluções em box de vidro, espelhos sob medida, guarda-corpo,
            corrimão, vidros temperados, fechamento de sacadas, portas de vidro
            e fachadas de vidro. Atendimento rápido, instalação especializada e
            acabamento de confiança para residências, comércios e empresas.
          </p>

          <ul className="mt-8 grid gap-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-[var(--color-text-secondary)] sm:text-base"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-hover)] text-[var(--color-success)]">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="min-h-11 rounded-xl bg-[var(--color-accent)] px-6 text-[var(--color-text-light)] hover:bg-[var(--color-accent-hover)]"
            >
              <Link href={quoteHref}>
                Solicitar orçamento
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="min-h-11 rounded-xl border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-primary)]"
            >
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a E&L Vidraçaria pelo WhatsApp"
              >
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                WhatsApp
              </Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-[var(--color-text-muted)]">
            Solicite seu orçamento com atendimento ágil para projetos
            residenciais e comerciais em toda a cidade do Rio de Janeiro.
          </p>
        </header>

        <div className="relative">
          <Card className="overflow-hidden rounded-3xl border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-[0_20px_50px_-20px_var(--color-overlay)]">
            <div className="relative aspect-[4/3] bg-[var(--color-bg-secondary)]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <CardContent className="grid gap-4 border-t border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 sm:grid-cols-3">
              <article className="rounded-2xl bg-[var(--color-bg-secondary)] p-4">
                <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Box de vidro
                </h2>
                <p className="mt-1 text-sm leading-6 text-[var(--color-text-tertiary)]">
                  Soluções sob medida para banheiros mais modernos, seguros e
                  funcionais.
                </p>
              </article>

              <article className="rounded-2xl bg-[var(--color-bg-secondary)] p-4">
                <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Espelhos e guarda-corpo
                </h2>
                <p className="mt-1 text-sm leading-6 text-[var(--color-text-tertiary)]">
                  Projetos com acabamento preciso para valorizar ambientes
                  residenciais e comerciais.
                </p>
              </article>

              <article className="rounded-2xl bg-[var(--color-bg-secondary)] p-4">
                <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Atendimento em todo o RJ
                </h2>
                <p className="mt-1 text-sm leading-6 text-[var(--color-text-tertiary)]">
                  Equipe preparada para atender clientes em todo o
                  Rio de Janeiro.
                </p>
              </article>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}