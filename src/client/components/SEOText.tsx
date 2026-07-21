import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Box de vidro sob medida",
  "Espelhos personalizados",
  "Guarda-corpo e corrimão",
  "Fechamento de sacadas",
  "Portas e fachadas de vidro",
  "Atendimento em todo o Rio de Janeiro",
];

export default function SEOText() {
  return (
    <section
      aria-labelledby="seo-text-title"
      className="bg-[var(--color-bg-secondary)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-6xl">
          <header className="mx-auto max-w-3xl text-center">
            <Badge className="rounded-full border-0 bg-[var(--color-bg-hover)] px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-bg-hover)]">
              Vidraçaria no Rio de Janeiro
            </Badge>

            <h2
              id="seo-text-title"
              className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
            >
              Soluções em vidro para imóveis residenciais e comerciais no Rio de
              Janeiro
            </h2>

            <p className="mt-4 text-base leading-7 text-[var(--color-text-tertiary)] sm:text-lg">
              A E&amp;L Vidraçaria atende todo o Rio de Janeiro com
              projetos sob medida em box de vidro, espelhos, guarda-corpo,
              corrimão, vidros temperados, fechamento de sacadas, portas de
              vidro e fachadas de vidro.
            </p>
          </header>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-4 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm font-medium leading-6 text-[var(--color-text-primary)] sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
                  Vidraçaria no Rio de Janeiro com atendimento técnico e serviço
                  sob medida
                </h2>

                <div className="mt-5 space-y-4 text-base leading-8 text-[var(--color-text-tertiary)]">
                  <p>
                    Escolher uma vidraçaria no Rio de Janeiro vai muito além de
                    comparar preços. Quem procura esse tipo de serviço quer
                    encontrar uma empresa que entenda o ambiente, avalie a
                    melhor solução e entregue um resultado seguro, bonito e bem
                    executado.
                  </p>
                  <p>
                    A E&amp;L Vidraçaria atua com foco em projetos sob medida
                    para clientes residenciais e comerciais, atendendo demandas
                    que envolvem estética, funcionalidade e durabilidade. Em
                    serviços com vidro, detalhes como medição, acabamento,
                    ferragens e instalação fazem diferença real no resultado.
                  </p>
                  <p>
                    Por isso, uma empresa especializada precisa oferecer não
                    apenas o produto final, mas também orientação durante todo o
                    processo. Esse cuidado transmite confiança e ajuda o cliente
                    a tomar uma decisão com mais segurança.
                  </p>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
                <h2 className="text-xl font-semibold text-[var(--color-text-primary)] sm:text-2xl">
                  O que mais procuram
                </h2>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-text-tertiary)] sm:text-base">
                  <li>Box de vidro para banheiro</li>
                  <li>Espelho sob medida</li>
                  <li>Guarda-corpo de vidro</li>
                  <li>Corrimão para escadas e varandas</li>
                  <li>Vidros temperados</li>
                  <li>Fechamento de sacadas</li>
                  <li>Portas de vidro</li>
                  <li>Fachadas de vidro</li>
                </ul>
              </div>
            </aside>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                Box de vidro e espelhos sob medida
              </h2>

              <div className="mt-5 space-y-4 text-base leading-8 text-[var(--color-text-tertiary)]">
                <p>
                  O box de vidro está entre os serviços mais procurados por quem
                  deseja mais praticidade, organização e valorização do
                  banheiro. Quando o projeto é feito sob medida, o espaço ganha
                  melhor encaixe, mais conforto de uso e acabamento mais limpo.
                </p>
                <p>
                  Os espelhos sob medida também têm grande procura no Rio de
                  Janeiro, especialmente para banheiros, lavabos, quartos,
                  salas, academias, lojas e escritórios. Além do apelo visual,
                  eles ajudam a ampliar a percepção do ambiente e a melhorar a
                  iluminação.
                </p>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[var(--color-text-primary)]">
                Quando essas soluções fazem mais sentido
              </h3>
              <p className="mt-3 text-base leading-8 text-[var(--color-text-tertiary)]">
                Esses serviços são ideais para ambientes que precisam unir
                praticidade, melhor aproveitamento do espaço e acabamento
                elegante. Quando a instalação respeita as medidas e a proposta
                do imóvel, o resultado tende a ser muito mais satisfatório.
              </p>
            </section>

            <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                Guarda-corpo, corrimão e vidros temperados
              </h2>

              <div className="mt-5 space-y-4 text-base leading-8 text-[var(--color-text-tertiary)]">
                <p>
                  Guarda-corpo e corrimão em vidro são escolhas frequentes em
                  imóveis que buscam proteção com visual leve e moderno.
                  Escadas, mezaninos, varandas e sacadas ganham mais sofisticação
                  quando esses elementos são bem planejados e corretamente
                  instalados.
                </p>
                <p>
                  Já os vidros temperados são muito usados em aplicações que
                  exigem mais resistência e segurança. Dependendo do projeto,
                  essa escolha é essencial para garantir desempenho adequado no
                  uso diário.
                </p>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[var(--color-text-primary)]">
                Segurança e acabamento caminham juntos
              </h3>
              <p className="mt-3 text-base leading-8 text-[var(--color-text-tertiary)]">
                Em vidraçaria, segurança não deve ser tratada separadamente do
                acabamento. Um projeto bem executado considera resistência,
                encaixe, ferragens e harmonia visual ao mesmo tempo.
              </p>
            </section>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                Fechamento de sacadas, portas e fachadas de vidro
              </h2>

              <div className="mt-5 space-y-4 text-base leading-8 text-[var(--color-text-tertiary)]">
                <p>
                  O fechamento de sacadas com vidro é uma solução muito buscada
                  por quem quer mais conforto, proteção e melhor aproveitamento
                  da área externa do imóvel. Em muitos casos, a sacada passa a
                  ser mais útil no dia a dia depois da instalação.
                </p>
                <p>
                  As portas de vidro e as fachadas de vidro também são bastante
                  valorizadas em residências e empresas que desejam ambientes
                  mais claros, modernos e visualmente bem resolvidos. Em
                  espaços comerciais, a fachada costuma ter papel importante na
                  apresentação do negócio.
                </p>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[var(--color-text-primary)]">
                Projetos sob medida para diferentes espaços
              </h3>
              <p className="mt-3 text-base leading-8 text-[var(--color-text-tertiary)]">
                Cada ambiente exige avaliação específica. Por isso, portas,
                sacadas e fachadas precisam ser dimensionadas de acordo com o
                uso, a circulação, a estrutura e o objetivo do projeto.
              </p>
            </section>

            <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                Atendimento em todo o Rio de Janeiro
              </h2>

              <div className="mt-5 space-y-4 text-base leading-8 text-[var(--color-text-tertiary)]">
                <p>
                  Um dos pontos mais importantes para quem busca uma vidraçaria
                  no Rio de Janeiro é saber se a empresa realmente atende a sua
                  região. A E&amp;L Vidraçaria atua em todo o Rio de Janeiro,
                  facilitando o atendimento de clientes residenciais e
                  comerciais em diferentes bairros.
                </p>
                <p>
                  Essa informação é importante tanto para o usuário quanto para
                  o SEO local, porque deixa clara a área de atuação da empresa e
                  reforça a relevância geográfica da página para buscas com
                  intenção local.
                </p>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[var(--color-text-primary)]">
                Mais clareza para quem está pesquisando
              </h3>
              <p className="mt-3 text-base leading-8 text-[var(--color-text-tertiary)]">
                Quando o visitante entende rapidamente o que a empresa faz e
                onde ela atende, a navegação fica mais objetiva e a chance de
                contato tende a aumentar.
              </p>
            </section>
          </div>

          <section className="mt-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
              Como escolher uma boa vidraçaria no RJ
            </h2>

            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Atendimento
                </h3>
                <p className="mt-3 text-base leading-8 text-[var(--color-text-tertiary)]">
                  Um bom atendimento ajuda o cliente a entender possibilidades,
                  limitações e soluções adequadas para o ambiente.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Medição
                </h3>
                <p className="mt-3 text-base leading-8 text-[var(--color-text-tertiary)]">
                  A medição correta é uma das etapas mais importantes para
                  garantir encaixe preciso e evitar retrabalho.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Instalação
                </h3>
                <p className="mt-3 text-base leading-8 text-[var(--color-text-tertiary)]">
                  Uma instalação bem executada melhora segurança, desempenho e
                  percepção de qualidade no resultado final.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-hover)] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
              E&amp;L Vidraçaria para projetos em vidro com mais segurança e
              agilidade
            </h2>

            <div className="mt-5 space-y-4 text-base leading-8 text-[var(--color-text-secondary)]">
              <p>
                Se você procura uma empresa de vidraçaria no Rio de Janeiro para
                executar box de vidro, espelhos sob medida, guarda-corpo,
                corrimão, vidros temperados, fechamento de sacadas, portas de
                vidro ou fachadas de vidro, contar com atendimento técnico faz
                diferença desde o primeiro contato.
              </p>
              <p>
                A proposta desta seção é reforçar com clareza o que a empresa
                faz, onde atende e quais soluções oferece, sem transformar a
                Home em um bloco cansativo de texto. Assim, o site continua
                bonito, melhora a leitura e mantém força para posicionamento
                orgânico.
              </p>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}