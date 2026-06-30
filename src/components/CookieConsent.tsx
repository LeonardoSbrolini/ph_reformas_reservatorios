"use client";

import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { setConsent, useConsent, type ConsentValue } from "@/lib/consent";

/**
 * Banner de consentimento de cookies (LGPD). Aparece apenas enquanto o usuário
 * ainda não escolheu. Aceitar libera o Google Analytics; rejeitar mantém só os
 * cookies essenciais ao funcionamento do site.
 */
export function CookieConsent() {
  const consent = useConsent();

  // Só exibe quando ainda não há decisão. No SSR/1ª renderização o snapshot é
  // null, mas o banner é fixo na base da tela, sem causar layout shift.
  if (consent !== null) return null;

  const choose = (value: ConsentValue) => {
    setConsent(value);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-60 p-3 sm:p-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative max-w-4xl mx-auto bg-surface-darkest text-white rounded-2xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-brand-dark/20 blur-3xl pointer-events-none" />
        <div className="h-px w-full bg-linear-to-r from-transparent via-brand-light/40 to-transparent" />

        <div className="relative p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="flex items-start gap-4 flex-1">
            <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-brand-light/15 border border-brand-light/20">
              <Cookie className="w-5 h-5 text-brand-light" />
            </span>
            <div>
              <h2 className="text-sm font-bold text-white mb-1">
                Nós usamos cookies
              </h2>
              <p className="text-white/55 text-xs sm:text-[13px] leading-relaxed">
                Utilizamos cookies para melhorar sua experiência e analisar o
                tráfego do site. Cookies de análise (Google Analytics) só são
                ativados com o seu consentimento. Saiba mais na nossa{" "}
                <Link
                  href="/politica-de-privacidade"
                  className="text-brand-light hover:underline font-medium"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => choose("rejected")}
              className="h-10 px-4 rounded-xl text-xs font-semibold text-white/70 border border-white/12 hover:bg-white/5 hover:text-white transition-colors"
            >
              Rejeitar
            </button>
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="h-10 px-5 rounded-xl text-xs font-bold text-white bg-brand-dark hover:bg-brand-light shadow-lg shadow-brand-dark/30 transition-colors"
            >
              Aceitar cookies
            </button>
          </div>

          <button
            type="button"
            aria-label="Fechar e rejeitar cookies"
            onClick={() => choose("rejected")}
            className="absolute top-3 right-3 sm:hidden text-white/40 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
