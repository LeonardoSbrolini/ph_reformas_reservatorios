import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Avaliações dos Clientes",
  description:
    "Veja o que nossos clientes dizem sobre a PH Reforma de Reservatórios. Avaliações reais de empresas que confiaram na nossa expertise em manutenção e reforma de tanques metálicos.",
  keywords:
    "avaliações PH Reforma, depoimentos clientes reservatórios, reviews empresa tanques metálicos, satisfação clientes",
  alternates: { canonical: "https://phreformas.com.br/avaliacoes" },
  openGraph: {
    title: "Avaliações dos Clientes | PH Reforma de Reservatórios",
    description:
      "Depoimentos reais de clientes satisfeitos com os serviços de manutenção e reforma de reservatórios metálicos.",
    url: "https://phreformas.com.br/avaliacoes",
  },
};

export default function AvaliacoesPage() {
  return (
    <>
      <PageBanner
        label="O que dizem sobre nós"
        title="Avaliações dos"
        titleHighlight="Clientes"
        description="A opinião de quem já confiou na PH Reforma de Reservatórios para cuidar de suas estruturas metálicas."
        breadcrumbs={[{ label: "Avaliações" }]}
      />
      <Testimonials />
    </>
  );
}
