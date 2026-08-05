// src/app/(site)/servicos/guarda-corpo-e-corrimao/page.tsx

import type { Metadata } from "next";
import {
  Building2,
  Eye,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import ServiceLandingPage, {
  type ServicePageData,
} from "@/client/services/ServiceLandingPage";
import { siteConfig } from "@/client/config/site.config";

const slug = "guarda-corpo-e-corrimao";
const pageUrl = `${siteConfig.seo.url}/servicos/${slug}`;

export const metadata: Metadata = {
  title: "Guarda-Corpo e Corrimão de Vidro no Rio de Janeiro | E & L",
  description:
    "Guarda-corpo e corrimão de vidro no Rio de Janeiro para escadas, varandas, sacadas e mezaninos. Projetos residenciais e comerciais.",
  keywords: [
    "guarda-corpo de vidro no Rio de Janeiro",
    "corrimão de vidro RJ",
    "guarda-corpo para escada Rio de Janeiro",
    "vidraçaria no Rio de Janeiro",
    "guarda-corpo para sacada RJ",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Guarda-Corpo e Corrimão de Vidro no Rio de Janeiro",
    description:
      "Soluções em vidro para escadas, varandas, sacadas e mezaninos no Rio de Janeiro.",
    url: pageUrl,
    siteName: siteConfig.nome,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/servicos/Escada-em-aluminio-Preto.png", alt: "Guarda-corpo de vidro no Rio de Janeiro" }],
  },
};

const data: ServicePageData = {
  name: "Guarda-corpo e corrimão",
  slug,
  eyebrow: "Guarda-corpo de vidro no Rio de Janeiro",
  title: "Guarda-corpo e corrimão de vidro no Rio de Janeiro",
  description:
    "Projetos para escadas, varandas, sacadas, mezaninos e outras áreas que precisam combinar proteção, circulação e integração visual.",
  image: "/servicos/Escada-em-aluminio-Preto.png",
  imageAlt:
    "Guarda-corpo e corrimão de vidro instalados no Rio de Janeiro",
  introTitle: "Proteção e integração visual para escadas e áreas elevadas",
  introParagraphs: [
    "Guarda-corpo e corrimão precisam ser planejados conforme as medidas, a estrutura do local, a circulação e a aplicação prevista.",
    "O vidro pode contribuir para uma aparência mais leve e para a integração visual entre os ambientes, sem eliminar a necessidade de uma avaliação técnica adequada.",
    "A E & L Vidraçaria desenvolve projetos residenciais e comerciais no Rio de Janeiro, considerando fixação, vidro, perfis e acabamento.",
  ],
  featureTitle: "Projeto pensado para o ambiente e para a circulação",
  featureDescription:
    "A solução deve considerar o local, a estrutura existente e as necessidades de uso.",
  features: [
    {
      icon: ShieldCheck,
      title: "Planejamento da proteção",
      description:
        "A aplicação é avaliada conforme altura, medidas, estrutura e forma de uso.",
    },
    {
      icon: Eye,
      title: "Leveza visual",
      description:
        "O vidro pode preservar a visibilidade e a integração entre os espaços.",
    },
    {
      icon: Building2,
      title: "Uso residencial e comercial",
      description:
        "Projetos para casas, condomínios, lojas, escritórios e outros imóveis.",
    },
    {
      icon: Sparkles,
      title: "Acabamento integrado",
      description:
        "Perfis, ferragens e cores podem ser combinados com a proposta arquitetônica.",
    },
  ],
  applicationsTitle: "Aplicações de guarda-corpo e corrimão",
  applicationsDescription:
    "A solução precisa ser definida conforme o tipo de área e a estrutura disponível.",
  applications: [
    "Escadas internas residenciais",
    "Escadas em estabelecimentos comerciais",
    "Varandas e sacadas",
    "Mezaninos e corredores elevados",
    "Áreas de circulação em condomínios",
    "Projetos com perfis e ferragens aparentes",
  ],
  processTitle: "Como funciona o projeto",
  processDescription:
    "Fotos ajudam na avaliação inicial, mas medidas e condições estruturais precisam ser verificadas antes da definição final.",
  faqs: [
    {
      question: "Guarda-corpo e corrimão são feitos sob medida?",
      answer:
        "Sim. As dimensões, a fixação e os materiais são definidos conforme o local e o tipo de aplicação.",
    },
    {
      question: "É possível instalar em escadas residenciais?",
      answer:
        "Sim. A viabilidade depende da estrutura da escada, das medidas e da forma de fixação prevista.",
    },
    {
      question: "O vidro mantém a visibilidade do ambiente?",
      answer:
        "Em muitos projetos, o vidro contribui para preservar a passagem de luz e a integração visual entre os espaços.",
    },
    {
      question: "Vocês atendem projetos comerciais no Rio de Janeiro?",
      answer:
        "Sim. A E & L atende projetos residenciais e comerciais em diferentes regiões, conforme a disponibilidade para o endereço.",
    },
  ],
  relatedServices: [
    {
      title: "Fechamento de sacadas",
      description: "Soluções em vidro para proteção e melhor aproveitamento da sacada.",
      href: "/servicos/fechamento-de-sacadas",
    },
    {
      title: "Portas de vidro",
      description: "Portas para casas, escritórios, lojas e ambientes corporativos.",
      href: "/servicos/portas-de-vidro",
    },
    {
      title: "Fachadas de vidro",
      description: "Fachadas e vitrines para projetos comerciais.",
      href: "/servicos/fachadas-de-vidro",
    },
  ],
  whatsappMessage:
    "Olá! Gostaria de solicitar um orçamento de guarda-corpo ou corrimão de vidro no Rio de Janeiro.",
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
