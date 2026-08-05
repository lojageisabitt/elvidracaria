// src/app/(site)/servicos/portas-de-vidro/page.tsx

import type { Metadata } from "next";
import {
  Building2,
  DoorOpen,
  Eye,
  Sparkles,
} from "lucide-react";

import ServiceLandingPage, {
  type ServicePageData,
} from "@/client/services/ServiceLandingPage";
import { siteConfig } from "@/client/config/site.config";

const slug = "portas-de-vidro";
const pageUrl = `${siteConfig.seo.url}/servicos/${slug}`;

export const metadata: Metadata = {
  title: "Portas de Vidro no Rio de Janeiro | E & L Vidraçaria",
  description:
    "Portas de vidro sob medida no Rio de Janeiro para casas, lojas, escritórios, recepções e ambientes comerciais.",
  keywords: [
    "portas de vidro no Rio de Janeiro",
    "porta de vidro para loja RJ",
    "porta de vidro temperado Rio de Janeiro",
    "vidraçaria no Rio de Janeiro",
    "porta de vidro sob medida RJ",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Portas de Vidro no Rio de Janeiro",
    description:
      "Portas de vidro sob medida para imóveis residenciais e comerciais.",
    url: pageUrl,
    siteName: siteConfig.nome,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/servicos/Porta-Fume.png", alt: "Porta de vidro no Rio de Janeiro" }],
  },
};

const data: ServicePageData = {
  name: "Portas de vidro",
  slug,
  eyebrow: "Portas de vidro no Rio de Janeiro",
  title: "Portas de vidro no Rio de Janeiro para residências e empresas",
  description:
    "Soluções sob medida para entradas, divisões internas, lojas, escritórios, recepções e outros ambientes que precisam unir funcionalidade e visibilidade.",
  image: "/servicos/Porta-Fume.png",
  imageAlt:
    "Porta de vidro instalada por vidraçaria no Rio de Janeiro",
  introTitle: "Portas planejadas conforme o acesso e o ambiente",
  introParagraphs: [
    "A porta de vidro pode ser utilizada para separar ambientes, criar acessos e manter a passagem de luz ou a visibilidade entre os espaços.",
    "A escolha entre porta de correr, abrir ou outro sistema depende da largura, da circulação, da estrutura e do uso previsto.",
    "A E & L Vidraçaria realiza portas de vidro no Rio de Janeiro para projetos residenciais e comerciais.",
  ],
  featureTitle: "Funcionalidade e acabamento para diferentes acessos",
  featureDescription:
    "O projeto considera abertura, medidas, ferragens, estrutura e frequência de uso.",
  features: [
    {
      icon: DoorOpen,
      title: "Abertura adequada",
      description:
        "O sistema é escolhido conforme a circulação e o espaço disponível.",
    },
    {
      icon: Eye,
      title: "Integração visual",
      description:
        "O vidro pode preservar luminosidade e visibilidade entre os ambientes.",
    },
    {
      icon: Building2,
      title: "Uso comercial",
      description:
        "Soluções para lojas, escritórios, recepções e outros estabelecimentos.",
    },
    {
      icon: Sparkles,
      title: "Acabamento personalizado",
      description:
        "Ferragens, perfis e tonalidades são avaliados conforme o projeto.",
    },
  ],
  applicationsTitle: "Portas para diferentes tipos de imóvel",
  applicationsDescription:
    "Cada acesso exige avaliação das medidas, da estrutura e da forma de uso.",
  applications: [
    "Portas de entrada para lojas",
    "Portas para escritórios e recepções",
    "Divisões internas residenciais",
    "Portas de correr para otimizar espaço",
    "Portas para áreas comerciais",
    "Acessos com vidro incolor ou tonalizado",
  ],
  processTitle: "Como solicitar uma porta de vidro",
  processDescription:
    "Envie fotos do vão, medidas aproximadas e informe como o acesso será utilizado.",
  faqs: [
    {
      question: "A porta de vidro pode ser feita sob medida?",
      answer:
        "Sim. As medidas, o sistema de abertura e os componentes são definidos conforme o vão e o uso do ambiente.",
    },
    {
      question: "Qual é melhor: porta de correr ou de abrir?",
      answer:
        "A escolha depende da circulação, do espaço livre, da largura do vão e da frequência de uso.",
    },
    {
      question: "Vocês fazem portas para lojas?",
      answer:
        "Sim. A E & L atende portas, vitrines e fachadas para diferentes tipos de estabelecimentos comerciais.",
    },
    {
      question: "A instalação é realizada em todo o Rio de Janeiro?",
      answer:
        "A empresa atende diferentes regiões. O endereço e o tipo de projeto devem ser enviados para confirmar a disponibilidade.",
    },
  ],
  relatedServices: [
    {
      title: "Fachadas de vidro",
      description: "Fachadas e vitrines para destacar estabelecimentos comerciais.",
      href: "/servicos/fachadas-de-vidro",
    },
    {
      title: "Espelhos sob medida",
      description: "Espelhos para residências, academias, lojas e escritórios.",
      href: "/servicos/espelhos-sob-medida",
    },
    {
      title: "Box de vidro",
      description: "Box sob medida para banheiros residenciais e comerciais.",
      href: "/servicos/box-de-vidro",
    },
  ],
  whatsappMessage:
    "Olá! Gostaria de solicitar um orçamento de porta de vidro no Rio de Janeiro.",
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
