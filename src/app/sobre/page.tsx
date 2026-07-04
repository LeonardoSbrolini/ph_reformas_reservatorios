import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { About } from "@/components/About";
import { siteConfig, yearsInBusiness } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: `Conheça a ${siteConfig.name}. Empresa especializada em manutenção e reforma de tanques metálicos, com mais de ${yearsInBusiness} anos de experiência no mercado.`,
  keywords:
    "sobre PH Reforma, empresa manutenção reservatórios, quem somos PH Reforma, história empresa",
  alternates: { canonical: `${siteConfig.url}/sobre` },
  openGraph: {
    title: `Sobre Nós | ${siteConfig.name}`,
    description: `Conheça a ${siteConfig.name}. Empresa especializada em manutenção e reforma de tanques metálicos, com mais de ${yearsInBusiness} anos de experiência.`,
    url: `${siteConfig.url}/sobre`,
  },
};

export default function SobrePage() {
  return (
    <>
      <PageBanner
        label="Quem Somos"
        title="Sobre a"
        titleHighlight="PH Reforma"
        description={`Especialistas em manutenção e reforma de reservatórios metálicos há mais de ${yearsInBusiness} anos, com compromisso inabalável com qualidade e segurança.`}
        breadcrumbs={[{ label: "Sobre" }]}
      />
      <About />
    </>
  );
}
