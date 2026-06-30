"use client";

import Script from "next/script";
import { useConsent } from "@/lib/consent";

// Defina NEXT_PUBLIC_GA_ID no ambiente (ex.: G-XXXXXXXXXX).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Carrega o Google Analytics (gtag) APENAS após o usuário aceitar os cookies.
 * Reage ao consentimento, então ativa na hora do clique — sem reload.
 */
export function Analytics() {
  const consent = useConsent();

  if (!GA_ID || consent !== "accepted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
