"use client";

import { WhatsAppSvg } from "@/components/WhatsAppSvg";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar uma avaliação e orçamento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp opacity-40 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-whatsapp opacity-20 animate-ping [animation-delay:0.4s]" />

      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp-dark shadow-2xl transition-transform duration-300 hover:scale-110">
        <WhatsAppSvg className="w-7 h-7 fill-white" />
      </span>
    </a>
  );
}
