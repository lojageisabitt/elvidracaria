    "use client";

import { useEffect } from "react";
import Script from "next/script";
import { Star } from "lucide-react";

export default function ReviewsSection() {
  useEffect(() => {
    // Reexecuta o widget caso o usuário navegue sem recarregar a página
    if ((window as any).SociableKit?.loadWidgets) {
      (window as any).SociableKit.loadWidgets();
    }
  }, []);

  const reviews = [
    {
      name: "Cliente Verificado",
      location: "Rio de Janeiro",
      text: "Atendimento excelente, instalação rápida e acabamento impecável. Recomendo a E&L Vidraçaria pela qualidade do serviço.",
    },
    {
      name: "Cliente Verificado",
      location: "Barra da Tijuca",
      text: "Solicitei um espelho sob medida e fiquei muito satisfeito com o resultado. Equipe pontual e muito profissional.",
    },
    {
      name: "Cliente Verificado",
      location: "Botafogo",
      text: "Serviço de instalação de box de vidro realizado com muito capricho. Excelente custo-benefício e ótimo atendimento.",
    },
  ];

  return (
    <section
      id="avaliacoes"
      className="py-20 bg-slate-50"
      aria-labelledby="reviews-title"
    >
      <div className="container mx-auto px-4">

        <div className="max-w-3xl mx-auto text-center mb-12">

          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Avaliações
          </span>

          <h2
            id="reviews-title"
            className="mt-3 text-3xl md:text-4xl font-bold text-slate-900"
          >
            Veja o que nossos clientes dizem sobre a E&amp;L Vidraçaria
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            A satisfação dos nossos clientes é o nosso maior compromisso.
            Confira avaliações reais de quem confiou na E&amp;L Vidraçaria para
            instalação de box de vidro, espelhos sob medida, guarda-corpo,
            fechamento de sacadas e outros serviços em todo o Rio de Janeiro.
          </p>
        </div>

        {/* Widget Google */}
        <div className="mb-16">
          <div
            className="sk-ww-google-reviews"
            data-embed-id="25567407"
          ></div>

          <Script
            src="https://widgets.sociablekit.com/google-reviews/widget.js"
            strategy="lazyOnload"
          />
        </div>

        {/* Reviews em HTML */}
        <div className="grid gap-6 md:grid-cols-3">

          {reviews.map((review, index) => (
            <article
              key={index}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex gap-1 mb-4 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-7">
                "{review.text}"
              </p>

              <footer className="mt-6">
                <p className="font-semibold text-slate-900">
                  {review.name}
                </p>

                <p className="text-sm text-slate-500">
                  {review.location}
                </p>
              </footer>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}