import { HelpCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  items?: FAQItem[];
};

const defaultFaqs: FAQItem[] = [
  {
    question: "Quais serviços a E&L Vidraçaria realiza no Rio de Janeiro?",
    answer:
      "A E&L Vidraçaria atua com serviços em box de vidro, espelhos sob medida, guarda-corpo, corrimão, vidros temperados, fechamento de sacadas, portas de vidro e fachadas de vidro. Atendemos projetos residenciais e comerciais no Rio de Janeiro, sempre buscando unir segurança, funcionalidade, acabamento profissional e atendimento ágil em cada etapa do serviço.",
  },
  {
    question: "A E&L Vidraçaria atende todos os bairros do Rio de Janeiro?",
    answer:
      "Sim. A E&L Vidraçaria atende diferentes regiões do município do Rio de Janeiro, oferecendo suporte para clientes que buscam uma vidraçaria com atendimento em diversos bairros da cidade. Se você precisa de orçamento para residência, comércio ou empresa, nossa equipe pode avaliar a sua demanda e orientar a melhor solução para o local de instalação.",
  },
  {
    question: "Como funciona o orçamento para box de vidro, espelhos e outros serviços?",
    answer:
      "O processo começa com o atendimento inicial, em que entendemos a necessidade do cliente e reunimos as informações do projeto. Depois disso, avaliamos medidas aproximadas, tipo de serviço, acabamento desejado e local de instalação para apresentar um orçamento claro. Em muitos casos, a etapa de medição é essencial para confirmar todos os detalhes antes da fabricação e instalação.",
  },
  {
    question: "Vocês trabalham com espelhos sob medida?",
    answer:
      "Sim. Desenvolvemos espelhos sob medida para banheiros, salas, quartos, academias, corredores, lojas, escritórios e outros ambientes. Esse tipo de solução é muito procurado por quem deseja ampliar visualmente o espaço, melhorar a iluminação e valorizar o ambiente com um acabamento personalizado e mais sofisticado.",
  },
  {
    question: "Qual a diferença entre vidro comum e vidro temperado?",
    answer:
      "O vidro temperado passa por um processo de tratamento térmico que aumenta sua resistência mecânica e térmica em comparação ao vidro comum. Por isso, ele é amplamente utilizado em box de vidro, portas, fachadas, guarda-corpo e outras aplicações que exigem mais segurança e desempenho. A escolha do tipo de vidro ideal depende do uso, do local de instalação e das exigências do projeto.",
  },
  {
    question: "O box de vidro é feito sob medida para cada banheiro?",
    answer:
      "Sim. O box de vidro normalmente é produzido de acordo com as medidas e características de cada banheiro. Isso é importante para garantir melhor encaixe, segurança, funcionalidade no uso diário e um acabamento mais limpo. A definição do modelo, da abertura e dos detalhes do projeto depende do espaço disponível e da necessidade de cada cliente.",
  },
  {
    question: "Vocês fazem instalação de guarda-corpo e corrimão de vidro?",
    answer:
      "Sim. A E&L Vidraçaria também realiza projetos de guarda-corpo e corrimão em vidro para áreas internas e externas, como escadas, varandas, sacadas e mezaninos. Esse tipo de solução combina proteção, leveza visual e valorização arquitetônica, sendo bastante procurado em projetos residenciais e comerciais no Rio de Janeiro.",
  },
  {
    question: "Quanto tempo leva para concluir um projeto de vidraçaria?",
    answer:
      "O prazo pode variar conforme o tipo de serviço, as medidas, o nível de personalização, os materiais utilizados e a complexidade da instalação. Serviços menores podem ter uma execução mais rápida, enquanto projetos mais completos exigem etapas como atendimento, orçamento, medição, fabricação e instalação. O ideal é solicitar uma avaliação para receber uma previsão mais precisa para o seu caso.",
  },
  {
    question: "Trabalhar com marcas reconhecidas faz diferença no resultado final?",
    answer:
      "Faz sim. Em projetos de vidraçaria, a qualidade do vidro, das ferragens e dos acessórios influencia diretamente a segurança, o desempenho, a durabilidade e o acabamento do serviço. Por isso, utilizar marcas reconhecidas no mercado ajuda a transmitir mais confiança e contribui para um resultado final mais seguro e consistente, tanto em projetos residenciais quanto comerciais.",
  },
  {
    question: "Como solicitar um orçamento com a E&L Vidraçaria?",
    answer:
      "Você pode entrar em contato pelos canais informados no site para solicitar atendimento e orçamento. O ideal é enviar o máximo de informações possível sobre o serviço desejado, como tipo de projeto, local de instalação, medidas aproximadas e referências visuais, porque isso ajuda a agilizar o atendimento e permite orientar a solução mais adequada para sua necessidade.",
  },
];

export default function FAQSection({ items = defaultFaqs }: FAQSectionProps) {
  return (
    <section
      aria-labelledby="faq-title"
      className="bg-[var(--color-bg-primary)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <Badge className="rounded-full border-0 bg-[var(--color-bg-hover)] px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-bg-hover)]">
            Perguntas frequentes
          </Badge>

          <h2
            id="faq-title"
            className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
          >
            Dúvidas frequentes sobre vidraçaria no Rio de Janeiro
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text-tertiary)] sm:text-lg">
            Reunimos respostas para algumas das principais dúvidas sobre box de
            vidro, espelhos sob medida, guarda-corpo, fechamento de sacadas,
            vidros temperados e outros serviços realizados pela E&amp;L
            Vidraçaria no Rio de Janeiro.
          </p>
        </header>

        <div className="mt-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 shadow-sm sm:p-6">
          <Accordion className="w-full">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index + 1}`}
                className="border-b border-[var(--color-border)] last:border-b-0"
              >
                <AccordionTrigger className="gap-4 py-5 text-left text-base font-semibold text-[var(--color-text-primary)] hover:no-underline sm:text-lg">
                  <span className="flex items-start gap-3 text-left">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-hover)] text-[var(--color-accent)]">
                      <HelpCircle className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>{item.question}</span>
                  </span>
                </AccordionTrigger>

                <AccordionContent className="pb-5 pl-11 text-sm leading-7 text-[var(--color-text-tertiary)] sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}