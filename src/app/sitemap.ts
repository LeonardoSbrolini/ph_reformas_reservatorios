import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { servicesData } from "@/lib/services-data";

/**
 * Sitemap do site (/sitemap.xml). As páginas de serviço são geradas a partir de
 * `servicesData`, então novos serviços entram no sitemap automaticamente.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                              lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/servicos`,                lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contato`,                 lastModified, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${base}/avaliacoes`,              lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/sobre`,                   lastModified, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${base}/valores`,                 lastModified, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${base}/politica-de-privacidade`, lastModified, changeFrequency: "yearly",  priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${base}/servicos/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
