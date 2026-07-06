import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { About } from "@/components/About";
import { siteConfig, yearsInBusiness } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: `Conheça a ${siteConfig.name}: mais de ${yearsInBusiness} anos reformando, recuperando e mantendo reservatórios e tanques metálicos em ${siteConfig.seo.region}, com segurança, qualidade e laudos técnicos.`,
  keywords:
    "sobre PH Reforma, empresa manutenção reservatórios, quem somos PH Reforma, reforma de reservatório Vista Alegre do Alto, reforma de reservatório Araraquara",
  alternates: { canonical: `${siteConfig.url}/sobre` },
  openGraph: {
    title: `Sobre a ${siteConfig.name}`,
    description: `Mais de ${yearsInBusiness} anos reformando e mantendo reservatórios metálicos em ${siteConfig.seo.region}, com segurança e qualidade.`,
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
      <div className="[&>section]:pt-12">
        <About />
      </div>
    </>
  );
}
