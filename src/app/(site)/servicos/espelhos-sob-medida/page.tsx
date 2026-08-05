// src/app/(site)/servicos/espelhos-sob-medida/page.tsx

import type { Metadata } from "next";
import {
  Expand,
  Lightbulb,
  Ruler,
  Sparkles,
} from "lucide-react";

import ServiceLandingPage, {
  type ServicePageData,
} from "@/client/services/ServiceLandingPage";
import { siteConfig } from "@/client/config/site.config";

const slug = "espelhos-sob-medida";
const pageUrl = `${siteConfig.seo.url}/servicos/${slug}`;

export const metadata: Metadata = {
  title: "Espelhos Sob Medida no Rio de Janeiro | E & L Vidraçaria",
  description:
    "Espelhos sob medida no Rio de Janeiro para banheiros, salas, quartos, academias, lojas e escritórios. Solicite orçamento.",
  keywords: [
    "espelhos sob medida no Rio de Janeiro",
    "espelho para banheiro RJ",
    "espelho para academia Rio de Janeiro",
    "vidraçaria no Rio de Janeiro",
    "espelho com iluminação RJ",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Espelhos Sob Medida no Rio de Janeiro",
    description:
      "Espelhos personalizados para ambientes residenciais e comerciais no Rio de Janeiro.",
    url: pageUrl,
    siteName: siteConfig.nome,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/servicos/espelho-com-led.png", alt: "Espelho sob medida no Rio de Janeiro" }],
  },
};

const data: ServicePageData = {
  name: "Espelhos sob medida",
  slug,
  eyebrow: "Espelhos sob medida no Rio de Janeiro",
  title: "Espelhos sob medida no Rio de Janeiro para residências e empresas",
  description:
    "Projetos personalizados para banheiros, salas, quartos, corredores, academias, lojas e escritórios, considerando as dimensões e a proposta de cada ambiente.",
  image: "/servicos/espelho-com-led.png",
  imageAlt:
    "Espelho sob medida instalado por vidraçaria no Rio de Janeiro",
  introTitle: "Espelhos planejados para valorizar cada ambiente",
  introParagraphs: [
    "O espelho pode ampliar visualmente o espaço, melhorar a distribuição da luz e complementar a decoração de ambientes residenciais ou comerciais.",
    "O projeto precisa considerar largura, altura, posição, recortes, tomadas, iluminação, bordas e forma de fixação.",
    "A E & L Vidraçaria realiza espelhos sob medida no Rio de Janeiro, com atendimento iniciado por fotos, referências e medidas aproximadas.",
  ],
  featureTitle: "Personalização para diferentes necessidades",
  featureDescription:
    "As dimensões e os detalhes do espelho são definidos conforme o ambiente e o resultado esperado.",
  features: [
    {
      icon: Ruler,
      title: "Medidas personalizadas",
      description:
        "O espelho é planejado conforme a parede, o móvel ou a área disponível.",
    },
    {
      icon: Expand,
      title: "Sensação de amplitude",
      description:
        "A aplicação pode contribuir para ampliar visualmente ambientes menores.",
    },
    {
      icon: Lightbulb,
      title: "Aproveitamento da luz",
      description:
        "O posicionamento pode favorecer a distribuição da iluminação no espaço.",
    },
    {
      icon: Sparkles,
      title: "Acabamento integrado",
      description:
        "O projeto considera a composição com móveis, revestimentos e outros elementos.",
    },
  ],
  applicationsTitle: "Espelhos para ambientes residenciais e comerciais",
  applicationsDescription:
    "Cada aplicação exige avaliação das medidas, da parede e da forma de instalação.",
  applications: [
    "Espelhos para banheiros e lavabos",
    "Espelhos para salas e corredores",
    "Espelhos para quartos e closets",
    "Paredes de espelho para academias",
    "Espelhos para lojas e provadores",
    "Aplicações em escritórios e recepções",
  ],
  processTitle: "Como solicitar um espelho sob medida",
  processDescription:
    "Envie fotos da parede, medidas aproximadas e referências do resultado desejado para iniciar a avaliação.",
  faqs: [
    {
      question: "O espelho pode ser produzido em qualquer medida?",
      answer:
        "As dimensões dependem do espaço, do acesso ao local, do transporte e das condições de instalação. A viabilidade é avaliada durante o orçamento.",
    },
    {
      question: "Vocês fazem espelho para banheiro?",
      answer:
        "Sim. O projeto pode considerar bancada, cuba, torneira, tomadas, iluminação e outros elementos existentes.",
    },
    {
      question: "É possível instalar espelho em academia ou loja?",
      answer:
        "Sim. A E & L atende aplicações residenciais e comerciais, incluindo academias, provadores, lojas, salões e escritórios.",
    },
    {
      question: "Vocês atendem espelhos sob medida fora da Vila da Penha?",
      answer:
        "A empresa atende diferentes regiões do Rio de Janeiro, conforme o endereço e as características do projeto.",
    },
  ],
  relatedServices: [
    {
      title: "Box de vidro",
      description: "Box sob medida para banheiros residenciais e comerciais.",
      href: "/servicos/box-de-vidro",
    },
    {
      title: "Portas de vidro",
      description: "Portas planejadas para residências, lojas e escritórios.",
      href: "/servicos/portas-de-vidro",
    },
    {
      title: "Fachadas de vidro",
      description: "Fachadas e vitrines para valorizar estabelecimentos comerciais.",
      href: "/servicos/fachadas-de-vidro",
    },
  ],
  whatsappMessage:
    "Olá! Gostaria de solicitar um orçamento de espelho sob medida no Rio de Janeiro.",
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
