import Link from "next/link";
import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";

type FinalCTAProps = {
  whatsappHref?: string;
  phoneHref?: string;
  title?: string;
  subtitle?: string;
};

export default function FinalCTA({
  whatsappHref = "https://wa.me/5521999999999?text=Olá%2C%20quero%20solicitar%20um%20orçamento%20para%20um%20projeto%20de%20vidraçaria%20no%20Rio%20de%20Janeiro.",
  phoneHref = "tel:+5521999999999",
  title = "Solicite agora seu orçamento com a E&L Vidraçaria",
  subtitle = "Atendemos todo o município do Rio de Janeiro com soluções em box de vidro, espelhos sob medida, guarda-corpo, corrimão, fechamento de sacadas, portas de vidro, fachadas de vidro e vidros temperados. Fale com nossa equipe e receba um atendimento rápido para o seu projeto.",
}: FinalCTAProps) {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_#0f172a_0%,_#0f766e_50%,_#14b8a6_100%)] px-6 py-10 shadow-2xl sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_28%)]"
          />
          <div
            aria-hidden="true"
            className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur">
                Orçamento rápido no Rio de Janeiro
              </span>

              <h2
                id="final-cta-title"
                className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {title}
              </h2>

              <p className="mt-5 text-base leading-8 text-white/85 sm:text-lg">
                {subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 rounded-xl bg-white text-slate-900 shadow-lg hover:bg-white/90"
                >
                  <Link
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                    Solicitar orçamento no WhatsApp
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-xl border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:text-white"
                >
                  <Link href={phoneHref}>
                    <PhoneCall className="mr-2 h-5 w-5" aria-hidden="true" />
                    Ligar agora
                  </Link>
                </Button>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/70">
                Atendimento para projetos residenciais e comerciais, com mais
                agilidade, orientação técnica e acabamento profissional.
              </p>
            </div>

            <aside className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-8">
              <h3 className="text-xl font-semibold text-white">
                Fale com a equipe e tire suas dúvidas
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-7 text-white/80 sm:text-base">
                <p>
                  Solicite informações sobre box de vidro, espelhos sob medida,
                  guarda-corpo, corrimão, fechamento de sacadas, portas de
                  vidro, fachadas de vidro e vidros temperados.
                </p>
                <p>
                  Nossa equipe está pronta para entender sua necessidade,
                  orientar a melhor solução e iniciar seu atendimento com mais
                  rapidez.
                </p>
              </div>

              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Falar com a E&amp;L Vidraçaria
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}