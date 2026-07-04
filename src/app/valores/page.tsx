import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Values } from "@/components/Values";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Missão, Visão e Valores",
  description: `Conheça a missão, visão e valores que guiam a ${siteConfig.name}. Compromisso com qualidade, segurança, inovação e satisfação do cliente em cada projeto.`,
  keywords:
    "missão visão valores PH Reforma, princípios empresa reservatórios, compromisso qualidade tanques metálicos",
  alternates: { canonical: `${siteConfig.url}/valores` },
  openGraph: {
    title: `Missão, Visão e Valores | ${siteConfig.name}`,
    description: `Os princípios que guiam a ${siteConfig.name} em cada projeto: qualidade, segurança e compromisso com o cliente.`,
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
      <Values />
    </>
  );
}
