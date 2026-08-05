// src/client/projects/projects.data.ts

export type ProjectData = {
  slug: string;
  name: string;
  client: string;
  service: string;
  location: string;
  description: string;
  longDescription: string[];
  imageSrc: string;
  imageAlt: string;
  highlights: string[];
  relatedServiceHref: string;
  relatedServiceLabel: string;
};

export const projects: ProjectData[] = [
  {
    slug: "club-men",
    name: "Fachada comercial Club Men",
    client: "Club Men",
    service: "Fachada comercial em vidro",
    location: "Estado do Rio de Janeiro",
    description:
      "Projeto de fachada comercial em vidro com foco em apresentação visual, transparência e valorização do acesso da loja.",
    longDescription: [
      "A fachada da Club Men foi desenvolvida para destacar a entrada do estabelecimento e ampliar a visibilidade do espaço comercial.",
      "O projeto utilizou vidro como elemento principal da composição, contribuindo para uma aparência mais moderna e para melhor exposição da área interna da loja.",
      "A execução considerou as dimensões do acesso, a estrutura existente e o acabamento necessário para integrar a fachada ao imóvel.",
    ],
    imageSrc: "/projects/fachada-club-men.jpg",
    imageAlt:
      "Fachada da loja Club Men com aplicação de vidro executada pela E & L Vidraçaria no estado do Rio de Janeiro",
    highlights: [
      "Fachada comercial em vidro",
      "Valorização da entrada da loja",
      "Maior visibilidade do ambiente interno",
      "Projeto planejado conforme o imóvel",
    ],
    relatedServiceHref: "/servicos/fachadas-de-vidro",
    relatedServiceLabel: "Fachadas de vidro",
  },
  {
    slug: "cresci-e-perdi",
    name: "Fachada Cresci e Perdi",
    client: "Cresci e Perdi",
    service: "Fachada e fechamento em vidro",
    location: "Estado do Rio de Janeiro",
    description:
      "Fachada de loja com fechamento em vidro voltada para exposição comercial, melhor aproveitamento da entrada e acabamento profissional.",
    longDescription: [
      "O projeto da Cresci e Perdi utilizou vidro para compor a fachada e o fechamento da entrada comercial.",
      "A solução foi planejada para favorecer a exposição da loja, manter a visibilidade do interior e oferecer uma apresentação mais organizada ao estabelecimento.",
      "As medidas, os acessos e a estrutura foram considerados durante a definição da instalação.",
    ],
    imageSrc: "/projects/fachada-cresci-e-perdi.jpg",
    imageAlt:
      "Fachada da loja Cresci e Perdi com estrutura em vidro instalada pela E & L Vidraçaria no estado do Rio de Janeiro",
    highlights: [
      "Fechamento comercial em vidro",
      "Melhor exposição da loja",
      "Integração entre fachada e entrada",
      "Acabamento profissional",
    ],
    relatedServiceHref: "/servicos/fachadas-de-vidro",
    relatedServiceLabel: "Fachadas de vidro",
  },
  {
    slug: "loja-de-departamentos",
    name: "Loja de departamentos",
    client: "Loja de departamentos",
    service: "Porta e fachada de vidro",
    location: "Estado do Rio de Janeiro",
    description:
      "Projeto comercial com porta e fachada em vidro desenvolvido para oferecer visual moderno e melhor aproveitamento do acesso.",
    longDescription: [
      "Este projeto comercial reuniu porta e fachada de vidro em uma única composição para organizar o acesso ao estabelecimento.",
      "O vidro contribuiu para manter a visibilidade da loja e criar uma entrada com aparência mais leve e atual.",
      "A instalação foi planejada de acordo com as dimensões do vão, a circulação e o funcionamento do espaço comercial.",
    ],
    imageSrc: "/projects/fachada-loja-de-departamentos.jpg",
    imageAlt:
      "Fachada de loja comercial com porta de vidro instalada pela E & L Vidraçaria no estado do Rio de Janeiro",
    highlights: [
      "Porta de vidro integrada à fachada",
      "Acesso comercial planejado",
      "Maior visibilidade da loja",
      "Solução sob medida",
    ],
    relatedServiceHref: "/servicos/portas-de-vidro",
    relatedServiceLabel: "Portas de vidro",
  },
  {
    slug: "smart-fit-fachada-espelhada",
    name: "Fachada espelhada Smart Fit",
    client: "Smart Fit",
    service: "Fachada espelhada",
    location: "Estado do Rio de Janeiro",
    description:
      "Projeto de fachada espelhada com presença visual marcante e acabamento voltado para empreendimento comercial.",
    longDescription: [
      "A fachada espelhada da Smart Fit foi executada para criar uma presença visual forte e alinhada ao perfil comercial do empreendimento.",
      "O acabamento espelhado contribuiu para uma composição moderna e para a integração da fachada com a identidade visual da unidade.",
      "O projeto considerou as dimensões da edificação e a aplicação do vidro em uma área comercial de grande visibilidade.",
    ],
    imageSrc: "/projects/fachada-smartfit.jpg",
    imageAlt:
      "Fachada espelhada da Smart Fit executada pela E & L Vidraçaria no estado do Rio de Janeiro",
    highlights: [
      "Fachada com acabamento espelhado",
      "Projeto comercial de grande presença visual",
      "Integração com a identidade da unidade",
      "Aplicação sob medida",
    ],
    relatedServiceHref: "/servicos/fachadas-de-vidro",
    relatedServiceLabel: "Fachadas de vidro",
  },
  {
    slug: "smart-fit-fachada-de-vidro",
    name: "Fachada de vidro Smart Fit",
    client: "Smart Fit",
    service: "Fachada comercial de vidro",
    location: "Estado do Rio de Janeiro",
    description:
      "Aplicação comercial com fachada em vidro e acabamento alinhado à identidade visual da unidade.",
    longDescription: [
      "Nesta unidade da Smart Fit, o vidro foi utilizado para compor uma fachada comercial alinhada ao padrão visual do empreendimento.",
      "A aplicação favoreceu a visibilidade da entrada e contribuiu para uma aparência mais moderna e integrada.",
      "A solução foi definida conforme a estrutura existente, as medidas e as necessidades do acesso comercial.",
    ],
    imageSrc: "/projects/fachada-smartfit-2.jpg",
    imageAlt:
      "Unidade da Smart Fit com fachada em vidro executada pela E & L Vidraçaria no estado do Rio de Janeiro",
    highlights: [
      "Fachada comercial em vidro",
      "Integração com a identidade visual",
      "Valorização do acesso",
      "Execução conforme a estrutura existente",
    ],
    relatedServiceHref: "/servicos/fachadas-de-vidro",
    relatedServiceLabel: "Fachadas de vidro",
  },
  {
    slug: "valisere-fachada",
    name: "Fachada Valisere",
    client: "Valisere",
    service: "Fachada comercial em vidro",
    location: "Estado do Rio de Janeiro",
    description:
      "Projeto de fachada comercial com vidro e acabamento refinado, contribuindo para uma apresentação mais elegante da loja.",
    longDescription: [
      "A fachada da Valisere foi desenvolvida para valorizar a apresentação da loja e preservar a visibilidade da vitrine.",
      "O vidro foi integrado ao acesso comercial para criar uma composição mais elegante e compatível com a identidade do estabelecimento.",
      "A instalação considerou medidas, estrutura e acabamento para manter a fachada alinhada ao imóvel.",
    ],
    imageSrc: "/projects/fachada-valisere.jpg",
    imageAlt:
      "Fachada da loja Valisere com aplicação de vidro executada pela E & L Vidraçaria no estado do Rio de Janeiro",
    highlights: [
      "Fachada comercial em vidro",
      "Valorização da vitrine",
      "Acabamento refinado",
      "Integração com o acesso da loja",
    ],
    relatedServiceHref: "/servicos/fachadas-de-vidro",
    relatedServiceLabel: "Fachadas de vidro",
  },
  {
    slug: "valisere-vitrine",
    name: "Vitrine Valisere",
    client: "Valisere",
    service: "Vitrine e fachada de vidro",
    location: "Estado do Rio de Janeiro",
    description:
      "Execução comercial em vidro pensada para valorizar a marca, a vitrine e a experiência visual do cliente.",
    longDescription: [
      "Este projeto da Valisere utilizou vidro para integrar vitrine e fachada em uma composição comercial mais aberta e visualmente organizada.",
      "A solução favoreceu a exposição dos produtos e a leitura da identidade da loja pelo público.",
      "O projeto foi executado conforme as dimensões do estabelecimento e as necessidades da entrada comercial.",
    ],
    imageSrc: "/projects/fachada-valisere-2.jpg",
    imageAlt:
      "Vitrine e fachada da loja Valisere com vidro instalado pela E & L Vidraçaria no estado do Rio de Janeiro",
    highlights: [
      "Vitrine comercial em vidro",
      "Maior exposição dos produtos",
      "Valorização da identidade da loja",
      "Projeto integrado à fachada",
    ],
    relatedServiceHref: "/servicos/fachadas-de-vidro",
    relatedServiceLabel: "Fachadas de vidro",
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((project) => project.slug === slug);
}
