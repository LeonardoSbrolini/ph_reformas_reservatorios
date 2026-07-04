import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Services } from "@/components/Services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Serviços para Reservatórios Metálicos em ${siteConfig.address.city}/${siteConfig.address.state}`,
  description: `Manutenção preventiva, reforma e recuperação estrutural, pintura industrial, revitalização, impermeabilização e inspeção técnica de reservatórios metálicos em ${siteConfig.seo.region}. Orçamento gratuito.`,
  keywords:
    "serviços reforma reservatórios, manutenção preventiva tanque, reforma estrutural reservatório, pintura industrial tanque, inspeção técnica reservatório, impermeabilização reservatório São José do Rio Preto",
  alternates: { canonical: `${siteConfig.url}/servicos` },
  openGraph: {
    title: `Serviços para Reservatórios Metálicos em ${siteConfig.address.city}/${siteConfig.address.state}`,
    description: `Manutenção, reforma, recuperação, pintura industrial e inspeção de reservatórios metálicos em ${siteConfig.seo.region}. Orçamento gratuito.`,
    url: `${siteConfig.url}/servicos`,
  },
};

export default function ServicosPage() {
  return (
    <>
      <PageBanner
        label="O que fazemos"
        title="Nossos"
        titleHighlight="Serviços"
        description="Soluções completas para recuperar, proteger e prolongar a vida útil dos seus reservatórios metálicos."
        breadcrumbs={[{ label: "Serviços" }]}
      />
      <div className="[&>section]:pt-12">
        <Services />
      </div>
    </>
  );
}
