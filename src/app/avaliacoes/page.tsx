import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Testimonials } from "@/components/Testimonials";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Avaliações dos Clientes",
  description: `Veja o que nossos clientes dizem sobre a ${siteConfig.name}. Avaliações reais de empresas que confiaram na nossa expertise em manutenção e reforma de tanques metálicos.`,
  keywords:
    "avaliações PH Reforma, depoimentos clientes reservatórios, reviews empresa tanques metálicos, satisfação clientes",
  alternates: { canonical: `${siteConfig.url}/avaliacoes` },
  openGraph: {
    title: `Avaliações dos Clientes | ${siteConfig.name}`,
    description:
      "Depoimentos reais de clientes satisfeitos com os serviços de manutenção e reforma de reservatórios metálicos.",
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
      <Testimonials />
    </>
  );
}
