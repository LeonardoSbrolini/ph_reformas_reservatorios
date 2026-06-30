// Gerenciamento de consentimento de cookies (LGPD — Lei 13.709/2018).
// O Google Analytics só é carregado após consentimento explícito ("accepted").

import { useSyncExternalStore } from "react";

export const CONSENT_STORAGE_KEY = "ph-cookie-consent";
export const CONSENT_EVENT = "ph-cookie-consent-change";

export type ConsentValue = "accepted" | "rejected";

/** Lê a escolha salva. Retorna null quando o usuário ainda não decidiu. */
export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

/** Salva a escolha e avisa os componentes interessados sem precisar recarregar. */
export function setConsent(value: ConsentValue): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  window.dispatchEvent(
    new CustomEvent<ConsentValue>(CONSENT_EVENT, { detail: value })
  );
}

function subscribe(callback: () => void): () => void {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * Acompanha a escolha de consentimento de forma reativa, sincronizando com o
 * localStorage e o evento de mudança. No servidor retorna null (sem decisão).
 */
export function useConsent(): ConsentValue | null {
  return useSyncExternalStore(subscribe, getConsent, () => null);
}
