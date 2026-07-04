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
    title: "Recuperação e Pintura de Reservatório Vertical",
    location: "Reservatório metálico vertical",
    description:
      "Tratamento da corrosão e da chaparia externa, com preparação de superfície e nova pintura anticorrosiva. A escada tipo gaiola também foi recuperada e repintada, devolvendo proteção e um acabamento azul uniforme.",
    beforeImage: "/before_after/example1/before.jpeg",
    afterImage: "/before_after/example1/after.jpeg",
  },
  {
    title: "Recuperação Interna e Impermeabilização",
    location: "Interior de reservatório metálico",
    description:
      "Remoção da corrosão e do revestimento deteriorado, seguida do tratamento das chapas e da aplicação de novo revestimento interno impermeável. O interior enferrujado deu lugar a uma superfície selada, lisa e protegida.",
    beforeImage: "/before_after/example2/before.jpeg",
    afterImage: "/before_after/example2/after.jpeg",
  },
  {
    title: "Acabamento e Pintura de Reservatório Elevado",
    location: "Reservatório elevado — SAAE, Amparo/SP",
    description:
      "Acabamento e pintura externa de reservatório elevado, com proteção da estrutura e aplicação da identidade visual do cliente. A estrutura em obra recebeu a pintura final e a logomarca do SAAE, pronta para operação.",
    beforeImage: "/before_after/example3/before.jpg",
    afterImage: "/before_after/example3/after.jpg",
  },
];
