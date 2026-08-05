// src/app/(site)/servicos/fechamento-de-sacadas/page.tsx

import type { Metadata } from "next";
import {
  CloudRain,
  Expand,
  ShieldCheck,
  Wind,
} from "lucide-react";

import ServiceLandingPage, {
  type ServicePageData,
} from "@/client/services/ServiceLandingPage";
import { siteConfig } from "@/client/config/site.config";

const slug = "fechamento-de-sacadas";
const pageUrl = `${siteConfig.seo.url}/servicos/${slug}`;

export const metadata: Metadata = {
  title: "Fechamento de Sacadas no Rio de Janeiro | E & L Vidraçaria",
  description:
    "Fechamento de sacadas em vidro no Rio de Janeiro para apartamentos, casas e áreas comerciais. Solicite avaliação e orçamento.",
  keywords: [
    "fechamento de sacadas no Rio de Janeiro",
    "cortina de vidro RJ",
    "envidraçamento de sacada Rio de Janeiro",
    "vidraçaria no Rio de Janeiro",
    "fechamento de varanda RJ",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Fechamento de Sacadas no Rio de Janeiro",
    description:
      "Soluções em vidro para proteger e aproveitar melhor sacadas e varandas.",
    url: pageUrl,
    siteName: siteConfig.nome,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/servicos/Guarda-Corpo.png", alt: "Fechamento de sacada no Rio de Janeiro" }],
  },
};

const data: ServicePageData = {
  name: "Fechamento de sacadas",
  slug,
  eyebrow: "Fechamento de sacadas no Rio de Janeiro",
  title: "Fechamento de sacadas no Rio de Janeiro com solução sob medida",
  description:
    "Projetos em vidro para ampliar a proteção, o conforto e o aproveitamento de sacadas e varandas residenciais ou comerciais.",
  image: "/servicos/Guarda-Corpo.png",
  imageAlt:
    "Fechamento de sacada em vidro realizado no Rio de Janeiro",
  introTitle: "Mais proteção e melhor aproveitamento da sacada",
  introParagraphs: [
    "O fechamento em vidro pode ajudar a reduzir a entrada direta de vento e chuva, além de ampliar as possibilidades de uso da sacada.",
    "O projeto precisa considerar medidas, estrutura, sistema de abertura, ventilação, acesso para limpeza e regras do condomínio, quando aplicáveis.",
    "A E & L Vidraçaria atende projetos de fechamento de sacadas no Rio de Janeiro, mediante avaliação das condições do local.",
  ],
  featureTitle: "Solução planejada para o espaço",
  featureDescription:
    "Cada sacada possui dimensões, exposição e necessidades diferentes.",
  features: [
    {
      icon: Wind,
      title: "Redução da exposição ao vento",
      description:
        "O fechamento pode ajudar a tornar o ambiente mais protegido em determinadas condições.",
    },
    {
      icon: CloudRain,
      title: "Proteção contra chuva",
      description:
        "A solução ajuda a reduzir a entrada direta de água na área da sacada.",
    },
    {
      icon: Expand,
      title: "Melhor uso do espaço",
      description:
        "A sacada pode ganhar mais possibilidades de uso no dia a dia.",
    },
    {
      icon: ShieldCheck,
      title: "Projeto sob medida",
      description:
        "Medidas, estrutura e sistema são avaliados conforme o ambiente.",
    },
  ],
  applicationsTitle: "Fechamento para diferentes tipos de sacada",
  applicationsDescription:
    "A viabilidade precisa considerar a estrutura existente e as regras aplicáveis ao imóvel.",
  applications: [
    "Sacadas de apartamentos",
    "Varandas residenciais",
    "Coberturas e áreas de convivência",
    "Sacadas em imóveis comerciais",
    "Ambientes com painéis móveis de vidro",
    "Projetos que exigem aproveitamento da vista",
  ],
  processTitle: "Como solicitar a avaliação da sacada",
  processDescription:
    "Envie fotos, medidas aproximadas, endereço e informações do condomínio para iniciar a análise.",
  faqs: [
    {
      question: "O fechamento da sacada precisa ser aprovado pelo condomínio?",
      answer:
        "Em muitos condomínios existem regras de padronização. O cliente deve verificar as exigências internas antes da execução.",
    },
    {
      question: "O fechamento impede totalmente a entrada de chuva?",
      answer:
        "O sistema ajuda a reduzir a entrada direta de chuva, mas o desempenho depende da exposição, do vento, da estrutura e das características da instalação.",
    },
    {
      question: "É possível abrir os painéis para ventilação?",
      answer:
        "Isso depende do sistema escolhido. A forma de abertura é definida conforme as medidas e a proposta do projeto.",
    },
    {
      question: "A E & L atende condomínios no Rio de Janeiro?",
      answer:
        "A empresa atende diferentes regiões do Rio de Janeiro. Envie o endereço e as informações do projeto para confirmar a disponibilidade.",
    },
  ],
  relatedServices: [
    {
      title: "Guarda-corpo e corrimão",
      description: "Proteção em vidro para sacadas, varandas, escadas e mezaninos.",
      href: "/servicos/guarda-corpo-e-corrimao",
    },
    {
      title: "Portas de vidro",
      description: "Portas sob medida para residências e estabelecimentos comerciais.",
      href: "/servicos/portas-de-vidro",
    },
    {
      title: "Espelhos sob medida",
      description: "Espelhos personalizados para diferentes ambientes.",
      href: "/servicos/espelhos-sob-medida",
    },
  ],
  whatsappMessage:
    "Olá! Gostaria de solicitar um orçamento de fechamento de sacada no Rio de Janeiro.",
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
