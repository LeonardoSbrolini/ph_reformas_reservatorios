import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { Services } from "@/components/Services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Nossos Serviços",
  description: `Conheça todos os serviços da ${siteConfig.name}: manutenção preventiva, reforma estrutural, recuperação, pintura industrial, revitalização e inspeção técnica em tanques metálicos.`,
  keywords:
    "serviços reforma reservatórios, manutenção preventiva tanque, reforma estrutural reservatório, pintura industrial tanque, inspeção técnica reservatório",
  alternates: { canonical: `${siteConfig.url}/servicos` },
  openGraph: {
    title: `Nossos Serviços | ${siteConfig.name}`,
    description:
      "Soluções completas em manutenção, reforma e recuperação de reservatórios metálicos.",
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
      <Services />
    </>
  );
}
