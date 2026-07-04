"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Observa todos os elementos com a classe `.reveal` e adiciona `.is-visible`
 * quando entram na viewport, disparando a animação de entrada (fade + slide).
 *
 * Fica no layout raiz, que NÃO remonta na navegação client-side do App Router.
 * Por isso o efeito depende de `pathname`: a cada troca de página ele volta a
 * observar os novos elementos `.reveal` (senão eles ficariam presos em
 * opacity: 0, deixando o conteúdo "em branco").
 *
 * Respeita `prefers-reduced-motion` (revela tudo de imediato).
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
    );
    if (els.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
