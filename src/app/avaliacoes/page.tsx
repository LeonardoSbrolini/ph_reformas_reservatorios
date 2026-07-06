import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Testimonials } from "@/components/Testimonials";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Avaliações de Clientes",
  description: `Veja avaliações reais de clientes que confiaram na ${siteConfig.name} para reforma, recuperação e manutenção de reservatórios metálicos em ${siteConfig.seo.region}. Peça seu orçamento.`,
  keywords:
    "avaliações PH Reforma, depoimentos clientes reservatórios, reviews empresa tanques metálicos, melhor empresa reforma reservatório Araraquara Ribeirão Preto",
  alternates: { canonical: `${siteConfig.url}/avaliacoes` },
  openGraph: {
    title: `Avaliações de Clientes | ${siteConfig.name}`,
    description: `Depoimentos reais de clientes satisfeitos com a reforma e manutenção de reservatórios metálicos em ${siteConfig.seo.region}.`,
    url: `${siteConfig.url}/avaliacoes`,
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
      <div className="[&>section]:pt-12">
        <Testimonials />
      </div>
    </>
  );
}
