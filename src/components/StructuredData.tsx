import { siteConfig, phoneE164, yearsInBusiness } from "@/lib/site-config";

/**
 * Dados estruturados (JSON-LD) da empresa — schema LocalBusiness/ProfessionalService.
 * Ajuda o Google a exibir o negócio no "pacote local", em resultados ricos e a
 * associar o site ao perfil da empresa. Renderizado uma vez no layout raiz.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: `Empresa especializada em reforma, recuperação e manutenção de reservatórios e tanques metálicos em ${siteConfig.seo.region}, com mais de ${yearsInBusiness} anos de experiência.`,
    url: siteConfig.url,
    telephone: phoneE164,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}${siteConfig.seo.ogImage}`,
    logo: `${siteConfig.url}/logo.png`,
    priceRange: siteConfig.seo.priceRange,
    foundingDate: "2012-10-09",
    slogan: siteConfig.slogan,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.seo.geo.latitude,
      longitude: siteConfig.seo.geo.longitude,
    },
    areaServed: siteConfig.seo.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: [siteConfig.social.facebook],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: `+${siteConfig.contact.whatsapp.number}`,
        areaServed: "BR",
        availableLanguage: "Portuguese",
      },
    ],
    // Ajuste os horários conforme o atendimento real da empresa.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
