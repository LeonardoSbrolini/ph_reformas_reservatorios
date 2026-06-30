export type BeforeAfterProject = {
  /** Título curto do projeto / serviço realizado */
  title: string;
  /** Local ou tipo de reservatório (opcional, exibido como legenda) */
  location?: string;
  /** Breve descrição do trabalho executado */
  description: string;
  /** Imagem do estado ANTES da intervenção */
  beforeImage: string;
  /** Imagem do estado DEPOIS da intervenção */
  afterImage: string;
};

/**
 * Projetos exibidos na section "Antes / Depois".
 *
 * COMO ADICIONAR FOTOS REAIS:
 * 1. Coloque as imagens em `public/projetos/` (ex: nome-do-projeto-antes.jpg).
 * 2. Atualize `beforeImage` / `afterImage` com o caminho a partir de `public`
 *    (ex: "/projetos/nome-do-projeto-antes.jpg").
 * 3. Para melhor resultado, use a MESMA proporção e o MESMO enquadramento nas
 *    fotos de antes e depois.
 *
 * Os caminhos abaixo apontam para "/hero-bg.jpg" apenas como PLACEHOLDER
 * temporário, para a section renderizar antes das fotos reais existirem.
 */
export const beforeAfterProjects: BeforeAfterProject[] = [
  {
    title: "Recuperação Estrutural de Reservatório",
    location: "Reservatório metálico industrial",
    description:
      "Tratamento completo de corrosão, recuperação da chaparia e reforço estrutural, devolvendo a integridade e segurança ao tanque.",
    beforeImage: "/before_after/example1/before.jpeg",
    afterImage: "/before_after/example1/after.jpeg",
  },
  {
    title: "Pintura e Proteção Anticorrosiva",
    location: "Tanque de armazenamento",
    description:
      "Preparação de superfície, aplicação de primer e pintura industrial de alta durabilidade para proteção contra a corrosão.",
    beforeImage: "/before_after/example2/before.jpeg",
    afterImage: "/before_after/example2/after.jpeg",
  },
  {
    title: "Reforma Geral de Reservatório",
    location: "Reservatório elevado",
    description:
      "Manutenção corretiva, substituição de componentes desgastados e acabamento final, prolongando a vida útil da estrutura.",
    beforeImage: "/hero-bg.jpg",
    afterImage: "/hero-bg.jpg",
  },
];
