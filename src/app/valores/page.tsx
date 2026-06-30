import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Values } from "@/components/Values";

export const metadata: Metadata = {
  title: "Missão, Visão e Valores",
  description:
    "Conheça a missão, visão e valores que guiam a PH Reforma de Reservatórios. Compromisso com qualidade, segurança, inovação e satisfação do cliente em cada projeto.",
  keywords:
    "missão visão valores PH Reforma, princípios empresa reservatórios, compromisso qualidade tanques metálicos",
  alternates: { canonical: "https://phreformas.com.br/valores" },
  openGraph: {
    title: "Missão, Visão e Valores | PH Reforma de Reservatórios",
    description:
      "Os princípios que guiam a PH Reforma de Reservatórios em cada projeto: qualidade, segurança e compromisso com o cliente.",
    url: "https://phreformas.com.br/valores",
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
