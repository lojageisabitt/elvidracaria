import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type AreasSectionProps = {
  neighborhoods?: string[];
  ctaHref?: string;
};

const defaultNeighborhoods = [
  "Barra da Tijuca",
  "Recreio dos Bandeirantes",
  "Jacarepaguá",
  "Freguesia",
  "Taquara",
  "Pechincha",
  "Curicica",
  "Cidade de Deus",
  "Tijuca",
  "Vila Isabel",
  "Maracanã",
  "Grajaú",
  "Andaraí",
  "Méier",
  "Cachambi",
  "Del Castilho",
  "Engenho Novo",
  "Engenho de Dentro",
  "Madureira",
  "Campinho",
  "Praça Seca",
  "Tanque",
  "Centro",
  "Lapa",
  "Glória",
  "Catete",
  "Flamengo",
  "Botafogo",
  "Copacabana",
  "Ipanema",
  "Leblon",
  "Lagoa",
  "Jardim Botânico",
  "Gávea",
  "São Conrado",
  "Urca",
  "Ilha do Governador",
  "Penha",
  "Olaria",
  "Ramos",
  "Bonsucesso",
  "Vigário Geral",
  "Pavuna",
  "Campo Grande",
  "Santa Cruz",
  "Bangu",
  "Realengo",
  "Padre Miguel",
  "Guaratiba",
];

function splitIntoColumns(items: string[], columns: number) {
  const perColumn = Math.ceil(items.length / columns);

  return Array.from({ length: columns }, (_, index) =>
    items.slice(index * perColumn, index * perColumn + perColumn)
  );
}

export default function AreasSection({
  neighborhoods = defaultNeighborhoods,
  ctaHref = "#contato",
}: AreasSectionProps) {
  const columns = splitIntoColumns(neighborhoods, 4);

  return (
    <section
      aria-labelledby="areas-title"
      className="bg-[var(--color-bg-secondary)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <Badge className="rounded-full border-0 bg-[var(--color-bg-hover)] px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-bg-hover)]">
            Áreas atendidas
          </Badge>

          <h2
            id="areas-title"
            className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
          >
            Bairros do Rio de Janeiro atendidos pela E&amp;L Vidraçaria
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text-tertiary)] sm:text-lg">
            A E&amp;L Vidraçaria atende clientes em diferentes bairros do Rio de
            Janeiro com serviços em box de vidro, espelhos sob medida,
            guarda-corpo, corrimão, fechamento de sacadas, portas de vidro,
            fachadas e vidros temperados. Se você procura uma vidraçaria no Rio
            de Janeiro com atendimento ágil e instalação especializada, confira
            algumas das regiões onde atuamos.
          </p>
        </header>

        <Card className="mt-10 rounded-3xl border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {columns.map((column, columnIndex) => (
                <div key={`column-${columnIndex}`} className="space-y-3">
                  {column.map((neighborhood) => (
                    <div
                      key={neighborhood}
                      className="flex items-start gap-3 rounded-xl px-2 py-2 text-sm text-[var(--color-text-secondary)] transition-colors duration-200 hover:bg-[var(--color-bg-hover)] sm:text-base"
                    >
                      <MapPinned
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]"
                        aria-hidden="true"
                      />
                      <span>{neighborhood}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <Separator className="my-8 bg-[var(--color-border-light)]" />

            <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  Precisa de um orçamento para o seu bairro?
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-tertiary)] sm:text-base">
                  Fale com a E&amp;L Vidraçaria e solicite atendimento para seu
                  projeto residencial ou comercial em qualquer região do Rio de
                  Janeiro.
                </p>
              </div>

              <Button 
                size="lg"
                className="min-h-11 rounded-xl bg-[var(--color-accent)] px-6 text-[var(--color-text-light)] hover:bg-[var(--color-accent-hover)]"
              >
                <Link href={ctaHref}>
                  Solicitar orçamento
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}