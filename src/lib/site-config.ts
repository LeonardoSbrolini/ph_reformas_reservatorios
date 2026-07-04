/**
 * Configuração central da empresa.
 *
 * TODAS as informações institucionais (nome, contato, endereço, redes sociais,
 * ano de fundação, domínio, etc.) ficam aqui. Para atualizar qualquer dado do
 * site, altere APENAS este arquivo — os componentes e páginas consomem estas
 * variáveis.
 */
export const siteConfig = {
  /** Nome de exibição da marca */
  name: "PH Reforma de Reservatórios",
  /** Versão curta usada em espaços reduzidos */
  shortName: "PH Reforma",
  /** Razão social */
  legalName: "PH DE SOUZA REFORMAS DE RESERVATÓRIOS ME",
  /** Slogan / lema da empresa */
  slogan: "Deus vai na frente cuidando de tudo",
  /** Descrição institucional padrão (usada em SEO) */
  description:
    "Especialistas em manutenção, reforma e recuperação de reservatórios metálicos. Soluções eficientes, seguras e duradouras desde 2012.",
  /** URL de produção (sem barra final) */
  url: "https://phreformas.com.br",

  /** Dados de fundação */
  founded: {
    /** Ano de fundação — base para o cálculo de anos de experiência */
    year: 2012,
    /** Data completa de abertura */
    date: "09/10/2012",
  },

  /** Canais de contato */
  contact: {
    email: "contato@phreformas.com.br", // TODO: confirmar e-mail oficial
    /** Telefone para ligação (o clique disca) */
    phone: {
      display: "(16) 98212-3525",
      href: "tel:+5516982123525",
    },
    /** WhatsApp — canal principal de atendimento */
    whatsapp: {
      display: "(16) 99746-7727",
      /** Número no formato internacional, apenas dígitos (para wa.me) */
      number: "5516997467727",
    },
  },

  /** Endereço / área de atuação */
  address: {
    city: "São José do Rio Preto",
    state: "SP",
    country: "Brasil",
    /** Cidade + UF prontos para exibição */
    full: "São José do Rio Preto, SP",
  },

  /** Redes sociais */
  social: {
    facebook: "https://www.facebook.com/ph.reformadereservatorios.7",
  },
} as const;

/** Anos de experiência, calculados dinamicamente a partir do ano de fundação. */
export const yearsInBusiness = new Date().getFullYear() - siteConfig.founded.year;

/**
 * Monta um link do WhatsApp para o número oficial, com mensagem opcional
 * já codificada para URL.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.contact.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Mensagens padrão para os CTAs de WhatsApp, reutilizáveis no site. */
export const whatsappMessages = {
  orcamento: "Olá! Gostaria de solicitar um orçamento.",
  avaliacao:
    "Olá! Gostaria de solicitar uma avaliação e orçamento para meu reservatório.",
  manutencao:
    "Olá! Gostaria de solicitar um orçamento para manutenção de reservatório.",
  reforma:
    "Olá! Gostaria de solicitar um orçamento para reforma de reservatório.",
} as const;
