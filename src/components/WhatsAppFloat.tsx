"use client";

import { WhatsAppSvg } from "@/components/WhatsAppSvg";
import { whatsappLink, whatsappMessages } from "@/lib/site-config";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(whatsappMessages.avaliacao)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 animate-[float-bob_3.5s_ease-in-out_infinite] motion-reduce:animate-none"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp opacity-40 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-whatsapp opacity-20 animate-ping [animation-delay:0.4s]" />

      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp-dark shadow-2xl transition-transform duration-300 hover:scale-110">
        <WhatsAppSvg className="w-7 h-7 fill-white" />
      </span>
    </a>
  );
}
