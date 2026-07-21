import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  PhoneCall,
} from "lucide-react";

type FinalCTAProps = {
  whatsappHref?: string;
  phoneHref?: string;
  title?: string;
  subtitle?: string;
};

export default function FinalCTA({
  whatsappHref = "https://wa.me/5521964883630?text=Olá%2C%20quero%20solicitar%20um%20orçamento%20para%20um%20projeto%20de%20vidraçaria%20no%20Rio%20de%20Janeiro.",
  phoneHref = "tel:+5521964883630",
  title = "Solicite agora seu orçamento com a E & L Vidraçaria",
  subtitle = "Atendemos todo o Rio de Janeiro com soluções em box de vidro, espelhos sob medida, guarda-corpo, corrimão, fechamento de sacadas, portas de vidro, fachadas de vidro e vidros temperados. Fale com nossa equipe e receba um atendimento rápido para o seu projeto.",
}: FinalCTAProps) {
  return (
    <section
      id="contato"
      aria-labelledby="final-cta-title"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/15 px-6 py-10 shadow-2xl sm:px-8 sm:py-12 lg:px-12 lg:py-14"
          style={{
            background:
              "linear-gradient(135deg, var(--color-accent-hover) 0%, var(--color-accent) 52%, var(--color-accent-light) 100%)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(255,255,255,0.24), transparent 34%), radial-gradient(circle at bottom right, rgba(255,255,255,0.12), transparent 30%)",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-white/15 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-10 bottom-0 h-48 w-48 rounded-full opacity-30 blur-3xl"
            style={{
              backgroundColor:
                "var(--color-accent-light)",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur">
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
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Solicitar orçamento com a E & L Vidraçaria pelo WhatsApp"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-[var(--color-accent-hover)] shadow-lg transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-accent)]"
                >
                  <MessageCircle
                    className="h-5 w-5 shrink-0"
                    aria-hidden="true"
                  />

                  <span>
                    Solicitar orçamento no WhatsApp
                  </span>
                </Link>

                <Link
                  href={phoneHref}
                  aria-label="Ligar para a E & L Vidraçaria"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-accent)]"
                >
                  <PhoneCall
                    className="h-5 w-5 shrink-0"
                    aria-hidden="true"
                  />

                  <span>Ligar agora</span>
                </Link>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/75">
                Atendimento para projetos residenciais
                e comerciais, com mais agilidade,
                orientação técnica e acabamento
                profissional.
              </p>
            </div>

            <aside className="rounded-[1.75rem] border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-8">
              <h3 className="text-xl font-semibold text-white">
                Fale com a equipe e tire suas dúvidas
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-7 text-white/80 sm:text-base">
                <p>
                  Solicite informações sobre box de
                  vidro, espelhos sob medida,
                  guarda-corpo, corrimão, fechamento
                  de sacadas, portas de vidro,
                  fachadas de vidro e vidros
                  temperados.
                </p>

                <p>
                  Nossa equipe está pronta para
                  entender sua necessidade, orientar
                  a melhor solução e iniciar seu
                  atendimento com mais rapidez.
                </p>
              </div>

              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-white transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>
                  Falar com a E &amp; L Vidraçaria
                </span>

                <ArrowRight
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                />
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}