import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Values } from "@/components/Values";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Missão, Visão e Valores",
  description: `Os princípios que guiam a ${siteConfig.name} em cada reforma de reservatório metálico em ${siteConfig.seo.region}: qualidade, segurança, compromisso e satisfação do cliente.`,
  keywords:
    "missão visão valores PH Reforma, princípios empresa reservatórios, compromisso qualidade tanques metálicos, empresa confiável reservatório Araraquara Ribeirão Preto",
  alternates: { canonical: `${siteConfig.url}/valores` },
  openGraph: {
    title: `Missão, Visão e Valores | ${siteConfig.name}`,
    description: `Qualidade, segurança e compromisso em cada reforma de reservatório metálico em ${siteConfig.seo.region}.`,
    url: `${siteConfig.url}/valores`,
  },
};

export default function ValoresPage() {
  return (
    <>
      <PageBanner
        label="Nossa Essência"
        title="Missão, Visão"
        titleHighlight="e Valores"
        description="Os princípios que nos guiam em cada projeto e definem o padrão de excelência que entregamos aos nossos clientes."
        breadcrumbs={[{ label: "Missão & Valores" }]}
      />
      <div className="[&>section]:pt-12">
        <Values />
      </div>
    </>
  );
}
