import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GlassWater, Home, Building2, PanelsTopLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ServiceItem = {
  name: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

type ServicesSectionProps = {
  services?: ServiceItem[];
};

const defaultServices: ServiceItem[] = [
  {
    name: "Box de Vidro",
    description:
      "Instalação de box de vidro sob medida para banheiros residenciais e comerciais, com acabamento moderno, segurança e praticidade no dia a dia.",
    href: "/servicos/box-de-vidro",
    image: "/servicos/Box-Blindex.png",
    imageAlt: "Box de vidro instalado em banheiro moderno no Rio de Janeiro",
  },
  {
    name: "Espelhos Sob Medida",
    description:
      "Espelhos personalizados para salas, quartos, banheiros, academias, lojas e ambientes corporativos, valorizando iluminação e amplitude do espaço.",
    href: "/servicos/espelhos-sob-medida",
    image: "/servicos/espelho-com-led.png",
    imageAlt: "Espelho sob medida instalado em ambiente interno",
  },
  {
    name: "Guarda-Corpo e Corrimão",
    description:
      "Projetos em vidro para escadas, sacadas e áreas internas com foco em proteção, sofisticação visual e integração com diferentes estilos de ambiente.",
    href: "/servicos/guarda-corpo-e-corrimao",
    image: "/servicos/Escada-em-aluminio-Preto.png",
    imageAlt: "Guarda-corpo de vidro instalado em escada residencial",
  },
  {
    name: "Fechamento de Sacadas",
    description:
      "Soluções para fechamento de sacadas em vidro que aumentam conforto, proteção e aproveitamento do espaço em imóveis residenciais e comerciais.",
    href: "/servicos/fechamento-de-sacadas",
    image: "/servicos/Guarda-Corpo.png",
    imageAlt: "Fechamento de sacada com painéis de vidro",
  },
  {
    name: "Portas de Vidro",
    description:
      "Portas de vidro para casas, escritórios, lojas e empresas, unindo funcionalidade, design limpo e melhor aproveitamento visual dos ambientes.",
    href: "/servicos/portas-de-vidro",
    image: "/servicos/Porta-Fume.png",
    imageAlt: "Porta de vidro instalada em ambiente comercial",
  },
  {
    name: "Fachadas e Vidros Temperados",
    description:
      "Projetos em fachadas de vidro e aplicações com vidro temperado para quem busca resistência, elegância e uma apresentação profissional do imóvel.",
    href: "/servicos/fachadas-e-vidros-temperados",
    image: "/empresa-smartfit.jpeg",
    imageAlt: "Fachada de vidro em imóvel comercial no Rio de Janeiro",
  },
];

function ServiceIcon({ name }: { name: string }) {
  if (name.toLowerCase().includes("box")) {
    return <GlassWater className="h-4 w-4" aria-hidden="true" />;
  }

  if (name.toLowerCase().includes("espelho")) {
    return <Home className="h-4 w-4" aria-hidden="true" />;
  }

  if (
    name.toLowerCase().includes("fachada") ||
    name.toLowerCase().includes("porta")
  ) {
    return <Building2 className="h-4 w-4" aria-hidden="true" />;
  }

  return <PanelsTopLeft className="h-4 w-4" aria-hidden="true" />;
}

export default function ServicesSection({
  services = defaultServices,
}: ServicesSectionProps) {
  return (
    <section
      aria-labelledby="services-title"
      className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <Badge className="rounded-full border-0 bg-[var(--color-bg-hover)] px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-bg-hover)]">
            Principais serviços
          </Badge>

          <h2
            id="services-title"
            className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
          >
            Serviços de vidraçaria no Rio de Janeiro para residências e empresas
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text-tertiary)] sm:text-lg">
            Conheça os principais serviços da E&amp;L Vidraçaria para projetos
            residenciais e comerciais, com soluções sob medida em vidro,
            instalação especializada e atendimento em todo o Rio de Janeiro.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-secondary)]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                    <ServiceIcon name={service.name} />
                  </span>

                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    E&amp;L Vidraçaria
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  {service.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--color-text-tertiary)] sm:text-base">
                  {service.description}
                </p>

                <div className="mt-6">
                  <Button
                    
                    className="rounded-xl bg-[var(--color-accent)] text-[var(--color-text-light)] hover:bg-[var(--color-accent-hover)]"
                  >
                    <Link href={service.href}>
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}