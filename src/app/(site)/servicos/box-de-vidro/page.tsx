// src/app/(site)/servicos/box-de-vidro/page.tsx

import type { Metadata } from "next";
import {
  Droplets,
  Expand,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import ServiceLandingPage, {
  type ServicePageData,
} from "@/client/services/ServiceLandingPage";
import { siteConfig } from "@/client/config/site.config";

const slug = "box-de-vidro";
const pageUrl = `${siteConfig.seo.url}/servicos/${slug}`;

export const metadata: Metadata = {
  title: "Box de Vidro no Rio de Janeiro | E & L Vidraçaria",
  description:
    "Box de vidro sob medida no Rio de Janeiro para banheiros residenciais e comerciais. Solicite orçamento com a E & L Vidraçaria.",
  keywords: [
    "box de vidro no Rio de Janeiro",
    "box para banheiro RJ",
    "box de vidro sob medida",
    "vidraçaria no Rio de Janeiro",
    "box Blindex Rio de Janeiro",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Box de Vidro no Rio de Janeiro | E & L Vidraçaria",
    description:
      "Instalação de box de vidro sob medida para banheiros no Rio de Janeiro.",
    url: pageUrl,
    siteName: siteConfig.nome,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/servicos/Box-Blindex.png", alt: "Box de vidro no Rio de Janeiro" }],
  },
};

const data: ServicePageData = {
  name: "Box de vidro",
  slug,
  eyebrow: "Box de vidro no Rio de Janeiro",
  title: "Box de vidro no Rio de Janeiro sob medida para seu banheiro",
  description:
    "A E & L Vidraçaria desenvolve e instala box de vidro para banheiros residenciais e comerciais, considerando as medidas, o espaço disponível e o tipo de abertura mais adequado.",
  image: "/servicos/Box-Blindex.png",
  imageAlt:
    "Box de vidro instalado em banheiro por vidraçaria no Rio de Janeiro",
  introTitle: "Box de vidro planejado conforme as medidas do banheiro",
  introParagraphs: [
    "O box de vidro ajuda a separar a área do banho, controlar a água no ambiente e melhorar o aproveitamento visual do banheiro.",
    "Cada instalação precisa considerar largura, altura, nivelamento, posição do chuveiro, circulação e espaço disponível para abertura.",
    "Com base na Vila da Penha, a E & L oferece atendimento para box de vidro em diferentes regiões do Rio de Janeiro, conforme a disponibilidade para o endereço.",
  ],
  featureTitle: "Um box adequado ao espaço e ao uso diário",
  featureDescription:
    "O modelo é definido conforme as características do banheiro e as necessidades do cliente.",
  features: [
    {
      icon: Expand,
      title: "Produção sob medida",
      description:
        "Medidas e abertura são planejadas conforme o espaço disponível no banheiro.",
    },
    {
      icon: ShieldCheck,
      title: "Vidro adequado",
      description:
        "A aplicação considera o tipo de vidro e os componentes necessários para o projeto.",
    },
    {
      icon: Droplets,
      title: "Melhor contenção da água",
      description:
        "O box ajuda a separar a área molhada e manter o restante do banheiro mais protegido.",
    },
    {
      icon: Sparkles,
      title: "Acabamento visual",
      description:
        "Perfis, ferragens e detalhes podem ser escolhidos conforme a proposta do ambiente.",
    },
  ],
  applicationsTitle: "Modelos para diferentes tipos de banheiro",
  applicationsDescription:
    "A configuração depende do espaço disponível e da forma de circulação no ambiente.",
  applications: [
    "Box frontal com portas de correr",
    "Box de canto para banheiros compactos",
    "Box com porta de abrir, quando o espaço permite",
    "Divisória fixa de vidro para área do banho",
    "Projetos para casas e apartamentos",
    "Aplicações em banheiros comerciais",
  ],
  processTitle: "Como solicitar seu box de vidro",
  processDescription:
    "Fotos e medidas aproximadas ajudam no primeiro atendimento, mas a confirmação das dimensões é importante antes da fabricação.",
  faqs: [
    {
      question: "O box de vidro é feito sob medida?",
      answer:
        "Sim. As medidas, a abertura e os detalhes são definidos conforme as características de cada banheiro.",
    },
    {
      question: "Qual modelo de box é melhor para banheiro pequeno?",
      answer:
        "A escolha depende da largura, da circulação e do espaço para abertura. Modelos de correr ou de canto costumam ser avaliados em ambientes compactos.",
    },
    {
      question: "É necessário medir o banheiro antes da fabricação?",
      answer:
        "Sim. A confirmação das medidas e das condições do local é necessária para reduzir problemas de encaixe e instalação.",
    },
    {
      question: "A E & L instala box de vidro em diferentes bairros do Rio?",
      answer:
        "A empresa atende diferentes regiões do Rio de Janeiro. Envie o bairro e o endereço aproximado para confirmar a disponibilidade.",
    },
  ],
  relatedServices: [
    {
      title: "Espelhos sob medida",
      description: "Espelhos para banheiros, salas, quartos e áreas comerciais.",
      href: "/servicos/espelhos-sob-medida",
    },
    {
      title: "Portas de vidro",
      description: "Portas residenciais e comerciais planejadas conforme o ambiente.",
      href: "/servicos/portas-de-vidro",
    },
    {
      title: "Fechamento de sacadas",
      description: "Soluções em vidro para proteção e melhor uso da sacada.",
      href: "/servicos/fechamento-de-sacadas",
    },
  ],
  whatsappMessage:
    "Olá! Gostaria de solicitar um orçamento de box de vidro no Rio de Janeiro.",
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
