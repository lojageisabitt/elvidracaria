// src/app/(site)/servicos/fachadas-de-vidro/page.tsx

import type { Metadata } from "next";
import {
  Building2,
  Eye,
  Store,
  Sun,
} from "lucide-react";

import ServiceLandingPage, {
  type ServicePageData,
} from "@/client/services/ServiceLandingPage";
import { siteConfig } from "@/client/config/site.config";

const slug = "fachadas-de-vidro";
const pageUrl = `${siteConfig.seo.url}/servicos/${slug}`;

export const metadata: Metadata = {
  title: "Fachadas de Vidro no Rio de Janeiro | E & L Vidraçaria",
  description:
    "Fachadas de vidro no Rio de Janeiro para lojas, academias, escritórios e estabelecimentos comerciais. Projetos sob medida.",
  keywords: [
    "fachadas de vidro no Rio de Janeiro",
    "fachada de loja RJ",
    "vitrine de vidro Rio de Janeiro",
    "vidraçaria no Rio de Janeiro",
    "fachada comercial de vidro RJ",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Fachadas de Vidro no Rio de Janeiro",
    description:
      "Projetos de fachadas e vitrines em vidro para estabelecimentos comerciais.",
    url: pageUrl,
    siteName: siteConfig.nome,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/projects/fachada-smartfit.jpg", alt: "Fachada de vidro no Rio de Janeiro" }],
  },
};

const data: ServicePageData = {
  name: "Fachadas de vidro",
  slug,
  eyebrow: "Fachadas de vidro no Rio de Janeiro",
  title: "Fachadas de vidro no Rio de Janeiro para lojas e empresas",
  description:
    "Projetos de fachadas, vitrines e acessos comerciais em vidro para valorizar a apresentação, a visibilidade e a entrada do estabelecimento.",
  image: "/projects/fachada-smartfit.jpg",
  imageAlt:
    "Fachada comercial de vidro executada no Rio de Janeiro",
  introTitle: "Uma fachada comercial alinhada ao espaço e à marca",
  introParagraphs: [
    "A fachada é um dos primeiros pontos de contato entre o cliente e o estabelecimento. O vidro pode ampliar a visibilidade, destacar a vitrine e contribuir para uma apresentação mais moderna.",
    "O projeto precisa considerar dimensões, acessos, portas, estrutura, exposição ao ambiente externo e acabamento desejado.",
    "Com mais de 20 anos no ramo, a E & L Vidraçaria possui experiência em fachadas comerciais executadas no estado do Rio de Janeiro.",
  ],
  featureTitle: "Visibilidade e acabamento para o estabelecimento",
  featureDescription:
    "A solução é planejada conforme o imóvel, a identidade visual e o funcionamento do negócio.",
  features: [
    {
      icon: Store,
      title: "Valorização da vitrine",
      description:
        "O vidro pode ampliar a exposição dos produtos e a comunicação visual da loja.",
    },
    {
      icon: Eye,
      title: "Mais visibilidade",
      description:
        "A fachada transparente favorece a visualização do interior do estabelecimento.",
    },
    {
      icon: Building2,
      title: "Projetos comerciais",
      description:
        "Soluções para lojas, academias, escritórios, recepções e outros negócios.",
    },
    {
      icon: Sun,
      title: "Aproveitamento da luz",
      description:
        "O projeto pode contribuir para maior entrada de luz natural, conforme o ambiente.",
    },
  ],
  applicationsTitle: "Fachadas e vitrines para diferentes negócios",
  applicationsDescription:
    "A configuração depende das medidas, da estrutura, dos acessos e da proposta visual.",
  applications: [
    "Fachadas para lojas de rua",
    "Vitrines em centros comerciais",
    "Entradas de academias",
    "Fachadas para escritórios e clínicas",
    "Portas integradas à fachada",
    "Aplicações com vidro incolor, fumê ou espelhado",
  ],
  processTitle: "Como funciona o projeto da fachada",
  processDescription:
    "O primeiro contato pode ser feito com fotos, medidas aproximadas, endereço e referências visuais.",
  faqs: [
    {
      question: "A fachada de vidro é feita sob medida?",
      answer:
        "Sim. O projeto considera as dimensões, a estrutura, os acessos e o tipo de aplicação previsto para o estabelecimento.",
    },
    {
      question: "Vocês fazem vitrines e portas junto com a fachada?",
      answer:
        "A composição pode incluir vitrines, portas e outros elementos, conforme a necessidade e a viabilidade do projeto.",
    },
    {
      question: "A E & L possui experiência em fachadas comerciais?",
      answer:
        "Sim. A empresa já executou projetos para lojas e empreendimentos em diferentes regiões do estado do Rio de Janeiro.",
    },
    {
      question: "É possível usar vidro fumê ou espelhado?",
      answer:
        "A escolha da tonalidade e do acabamento depende da proposta visual, da aplicação e das condições do local.",
    },
  ],
  relatedServices: [
    {
      title: "Portas de vidro",
      description: "Portas para entradas comerciais, lojas, escritórios e recepções.",
      href: "/servicos/portas-de-vidro",
    },
    {
      title: "Guarda-corpo e corrimão",
      description: "Soluções em vidro para escadas, sacadas e áreas elevadas.",
      href: "/servicos/guarda-corpo-e-corrimao",
    },
    {
      title: "Espelhos sob medida",
      description: "Espelhos para lojas, academias, escritórios e residências.",
      href: "/servicos/espelhos-sob-medida",
    },
  ],
  whatsappMessage:
    "Olá! Gostaria de solicitar um orçamento de fachada de vidro no Rio de Janeiro.",
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
