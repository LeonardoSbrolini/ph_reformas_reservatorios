import { Wrench, HardHat, Shield, PaintBucket, RotateCcw, SearchCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceData = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  fullDesc: string[];
  benefits: string[];
  accent: string;
  seoTitle: string;
  seoDesc: string;
  seoKeywords: string;
};

export const servicesData: ServiceData[] = [
  {
    slug: "manutencao-preventiva",
    icon: Wrench,
    title: "Manutenção Preventiva",
    shortDesc:
      "Inspeções e intervenções periódicas para prevenir falhas e prolongar a vida útil dos reservatórios.",
    fullDesc: [
      "A manutenção preventiva é essencial para garantir a longevidade e segurança dos reservatórios metálicos. Através de inspeções regulares e intervenções planejadas, identificamos e corrigimos problemas antes que evoluam para falhas críticas.",
      "Nossa equipe técnica realiza avaliações sistemáticas da integridade estrutural, detectando pontos de corrosão, desgaste ou fadiga. Com base no diagnóstico, executamos as intervenções necessárias com mínimo impacto operacional.",
    ],
    benefits: [
      "Redução de custos com reparos emergenciais",
      "Prolongamento da vida útil do reservatório",
      "Conformidade com normas técnicas vigentes",
      "Relatórios técnicos detalhados de cada inspeção",
      "Cronograma de manutenção personalizado",
    ],
    accent: "from-[#0A2E6D] to-[#0B4DDA]",
    seoTitle: "Manutenção Preventiva em Reservatórios Metálicos | PH Reforma",
    seoDesc:
      "Serviço de manutenção preventiva para reservatórios metálicos. Inspeções periódicas, diagnóstico técnico e intervenções planejadas para prolongar a vida útil da estrutura.",
    seoKeywords:
      "manutenção preventiva reservatório, manutenção tanque metálico, inspeção reservatório, conservação tanque",
  },
  {
    slug: "reforma-estrutural",
    icon: HardHat,
    title: "Reforma Estrutural",
    shortDesc:
      "Substituição ou reforço de elementos estruturais comprometidos, restaurando integridade e capacidade operacional.",
    fullDesc: [
      "A reforma estrutural é o processo de recuperação de reservatórios com comprometimento severo de seus elementos de sustentação e resistência. Realizamos a análise completa da estrutura para definir o escopo de intervenção mais adequado.",
      "Executamos substituição de chapas, reforço de vigas, correção de deformações e soldagem estrutural com qualidade industrial, devolvendo ao reservatório sua capacidade plena de operação com segurança.",
    ],
    benefits: [
      "Análise estrutural completa pré-intervenção",
      "Soldagem com qualificação técnica",
      "Substituição parcial ou total de elementos danificados",
      "Certificação técnica pós-reforma",
      "Laudo de conformidade estrutural",
    ],
    accent: "from-[#0B4DDA] to-[#1E90FF]",
    seoTitle: "Reforma Estrutural de Reservatórios Metálicos | PH Reforma",
    seoDesc:
      "Reforma estrutural especializada em reservatórios e tanques metálicos. Substituição de elementos, reforço estrutural e soldagem profissional com garantia de qualidade.",
    seoKeywords:
      "reforma estrutural reservatório, reforma tanque metálico, substituição chapa reservatório, reforço estrutural tanque",
  },
  {
    slug: "recuperacao-estrutural",
    icon: Shield,
    title: "Recuperação Estrutural",
    shortDesc:
      "Recuperação de estruturas danificadas por corrosão ou desgaste, devolvendo segurança ao reservatório.",
    fullDesc: [
      "A recuperação estrutural visa restaurar reservatórios que sofreram danos por corrosão, impactos ou desgaste ao longo do tempo. Utilizamos técnicas avançadas para reconstruir a integridade das estruturas metálicas.",
      "O processo inclui limpeza profunda, remoção de óxidos, tratamento superficial, aplicação de produtos de recuperação e proteção anticorrosiva. O resultado é uma estrutura recuperada com durabilidade equivalente ao material original.",
    ],
    benefits: [
      "Eliminação de focos de corrosão ativos",
      "Tratamento anticorrosivo de alta durabilidade",
      "Recuperação sem necessidade de substituição completa",
      "Economia de até 60% em comparação à troca",
      "Prazo de execução otimizado",
    ],
    accent: "from-[#0A2E6D] to-[#0B4DDA]",
    seoTitle: "Recuperação Estrutural de Reservatórios Metálicos | PH Reforma",
    seoDesc:
      "Recuperação de reservatórios e tanques metálicos danificados por corrosão ou desgaste. Tratamento especializado que restaura integridade estrutural com economia e qualidade.",
    seoKeywords:
      "recuperação estrutural reservatório, tratamento corrosão tanque, recuperação tanque metálico, restauração reservatório",
  },
  {
    slug: "pintura-industrial",
    icon: PaintBucket,
    title: "Pintura Industrial",
    shortDesc:
      "Sistemas anticorrosivos de alta performance que protegem a estrutura metálica contra agentes agressivos.",
    fullDesc: [
      "A pintura industrial é uma das principais barreiras de proteção para reservatórios metálicos. Aplicamos sistemas de pintura anticorrosiva com produtos de alta performance desenvolvidos especificamente para ambientes industriais.",
      "Nosso processo inclui jateamento abrasivo, aplicação de primer anticorrosivo, demãos intermediárias e acabamento final, seguindo as especificações das normas ABNT e SSPC para máxima durabilidade e proteção.",
    ],
    benefits: [
      "Jateamento abrasivo com grau SA 2,5 ou SA 3",
      "Primers epóxi e poliuretano de alta aderência",
      "Sistemas aprovados para contato com água potável",
      "Garantia de durabilidade de 5 a 15 anos",
      "Controle de espessura e aderência por ensaios",
    ],
    accent: "from-[#0B4DDA] to-[#1E90FF]",
    seoTitle: "Pintura Industrial em Reservatórios Metálicos | PH Reforma",
    seoDesc:
      "Pintura industrial anticorrosiva para reservatórios e tanques metálicos. Sistemas epóxi e poliuretano com jateamento abrasivo e aplicação técnica especializada.",
    seoKeywords:
      "pintura industrial reservatório, pintura anticorrosiva tanque, jateamento abrasivo reservatório, proteção anticorrosiva tanque metálico",
  },
  {
    slug: "revitalizacao",
    icon: RotateCcw,
    title: "Revitalização",
    shortDesc:
      "Limpeza, tratamento superficial e acabamento final com padrão de qualidade elevado para novos ciclos de uso.",
    fullDesc: [
      "A revitalização é o processo completo de renovação do reservatório, combinando limpeza profunda, tratamento superficial, correções pontuais e novo acabamento. É ideal para estruturas que perderam sua aparência e proteção original.",
      "Realizamos o processo de forma integrada: inspeção inicial, limpeza e desengraxamento, remoção de tinta antiga, tratamento anticorrosivo, correção de imperfeições e aplicação de novo sistema de pintura com padrão de qualidade elevado.",
    ],
    benefits: [
      "Processo completo em uma única mobilização",
      "Recuperação total da aparência e proteção",
      "Eliminação de contaminantes e depósitos",
      "Novo ciclo de vida útil garantido",
      "Custo-benefício superior à substituição",
    ],
    accent: "from-[#0A2E6D] to-[#0B4DDA]",
    seoTitle: "Revitalização de Reservatórios Metálicos | PH Reforma",
    seoDesc:
      "Serviço completo de revitalização de reservatórios metálicos. Limpeza profunda, tratamento superficial e novo acabamento para renovar a proteção e estética da estrutura.",
    seoKeywords:
      "revitalização reservatório, renovação tanque metálico, limpeza reservatório industrial, tratamento superficial tanque",
  },
  {
    slug: "inspecao-tecnica",
    icon: SearchCheck,
    title: "Inspeção Técnica",
    shortDesc:
      "Avaliação detalhada das condições estruturais com diagnóstico preciso para decisões assertivas.",
    fullDesc: [
      "A inspeção técnica é o ponto de partida para qualquer intervenção eficaz em reservatórios metálicos. Realizamos avaliação minuciosa de todos os elementos estruturais, identificando condições de risco e oportunidades de melhoria.",
      "Utilizamos técnicas de inspeção visual, ensaios de espessura por ultrassom, verificação de aderência de revestimentos e avaliação de integridade das soldas. O resultado é um laudo técnico completo que fundamenta as decisões de manutenção ou reforma.",
    ],
    benefits: [
      "Laudo técnico detalhado com registro fotográfico",
      "Medição de espessura por ultrassom",
      "Mapeamento de áreas críticas",
      "Recomendações técnicas priorizadas",
      "Suporte para decisões de investimento",
    ],
    accent: "from-[#0B4DDA] to-[#1E90FF]",
    seoTitle: "Inspeção Técnica de Reservatórios Metálicos | PH Reforma",
    seoDesc:
      "Inspeção técnica especializada em reservatórios e tanques metálicos. Laudo completo com avaliação estrutural, medição por ultrassom e diagnóstico para tomada de decisões.",
    seoKeywords:
      "inspeção técnica reservatório, vistoria tanque metálico, laudo técnico reservatório, diagnóstico estrutural tanque",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
