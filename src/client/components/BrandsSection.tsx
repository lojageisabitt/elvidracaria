import Image from "next/image";
import { Building2, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type ProjectItem = {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

type BrandsSectionProps = {
  logo?: string;
  logoAlt?: string;
  projects?: ProjectItem[];
};

const defaultProjects: ProjectItem[] = [
  {
    name: "Club Men",
    description:
      "Projeto de fachada comercial em vidro com foco em apresentação visual, transparência e valorização do acesso da loja.",
    imageSrc: "/projects/fachada-club-men.jpg",
    imageAlt:
      "Fachada da loja Club Men com aplicação de vidro em projeto executado pela E&L Vidraçaria no estado do Rio de Janeiro.",
  },
  {
    name: "Cresci e Perdi",
    description:
      "Fachada de loja com fechamento em vidro e solução voltada para melhor exposição comercial e acabamento profissional.",
    imageSrc: "/projects/fachada-cresci-e-perdi.jpg",
    imageAlt:
      "Fachada da loja Cresci e Perdi com estrutura em vidro instalada pela E&L Vidraçaria no estado do Rio de Janeiro.",
  },
  {
    name: "Loja de Departamentos",
    description:
      "Projeto comercial com porta e fachada em vidro, desenvolvido para oferecer visual moderno e melhor aproveitamento da entrada.",
    imageSrc: "/projects/fachada-loja-de-departamentos.jpg",
    imageAlt:
      "Fachada de loja comercial com porta de vidro instalada pela E&L Vidraçaria no estado do Rio de Janeiro.",
  },
  {
    name: "Smart Fit",
    description:
      "Projeto de fachada espelhada com visual marcante e acabamento voltado para empreendimentos comerciais de grande presença visual.",
    imageSrc: "/projects/fachada-smartfit.jpg",
    imageAlt:
      "Fachada espelhada da Smart Fit em projeto executado pela E&L Vidraçaria no estado do Rio de Janeiro.",
  },
  {
    name: "Smart Fit",
    description:
      "Outra aplicação comercial com fachada em vidro e acabamento alinhado à identidade visual da unidade.",
    imageSrc: "/projects/fachada-smartfit-2.jpg",
    imageAlt:
      "Unidade da Smart Fit com fachada em vidro executada pela E&L Vidraçaria no estado do Rio de Janeiro.",
  },
  {
    name: "Valisere",
    description:
      "Projeto de fachada comercial com vidro e acabamento refinado, contribuindo para uma apresentação mais elegante da loja.",
    imageSrc: "/projects/fachada-valisere.jpg",
    imageAlt:
      "Fachada da loja Valisere com aplicação de vidro em projeto da E&L Vidraçaria no estado do Rio de Janeiro.",
  },
  {
    name: "Valisere",
    description:
      "Execução de fachada com vidro em solução comercial pensada para valorizar a marca e a experiência visual da vitrine.",
    imageSrc: "/projects/fachada-valisere-2.jpg",
    imageAlt:
      "Outra fachada da loja Valisere com vidro instalado pela E&L Vidraçaria no estado do Rio de Janeiro.",
  },
];

export default function BrandsSection({
  logo = "/logo-new-temper.png",
  logoAlt = "Logo da New Temper",
  projects = defaultProjects,
}: BrandsSectionProps) {
  return (
    <section
      aria-labelledby="brands-title"
      className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <Badge className="rounded-full border-0 bg-[var(--color-bg-hover)] px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-bg-hover)]">
            New Temper e projetos comerciais
          </Badge>

          <h2
            id="brands-title"
            className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
          >
            Trabalhamos com a New Temper e já executamos fachadas de lojas no
            estado do Rio de Janeiro
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text-tertiary)] sm:text-lg">
            A E&amp;L Vidraçaria atua com soluções em vidro para projetos
            comerciais e residenciais, utilizando materiais de confiança e
            aplicando experiência prática em fachadas, portas de vidro e
            estruturas para lojas em diferentes regiões do estado do Rio de
            Janeiro.
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-5xl">
          <Card className="rounded-3xl border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="relative h-16 w-full max-w-[180px]">
                    <Image
                      src={logo}
                      alt={logoAlt}
                      fill
                      className="object-contain object-left"
                      sizes="180px"
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
                    New Temper como parceira em projetos com vidro
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--color-text-tertiary)] sm:text-base">
                    A E&amp;L Vidraçaria trabalha com a New Temper em projetos
                    que exigem qualidade, segurança e acabamento profissional.
                    Essa parceria reforça nosso compromisso com materiais
                    confiáveis e com um padrão técnico mais consistente em
                    serviços de vidraçaria para residências, comércios e
                    fachadas no Rio de Janeiro.
                  </p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <div>
                    <h4 className="text-base font-semibold text-[var(--color-text-primary)]">
                      Experiência prática em fachadas comerciais
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-text-tertiary)] sm:text-base">
                      Já executamos projetos para lojas e fachadas comerciais em
                      diferentes pontos do estado do Rio de Janeiro, com foco em
                      apresentação visual, instalação segura e acabamento de
                      qualidade.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
              Lojas e fachadas já executadas pela E&amp;L Vidraçaria
            </h3>

            <p className="mt-3 text-base leading-7 text-[var(--color-text-tertiary)]">
              Conheça alguns projetos comerciais com vidro já realizados pela
              nossa equipe em diferentes locais do estado do Rio de Janeiro.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={`${project.name}-${index}`}
                className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-5">
                  <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    {project.name}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-tertiary)]">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}