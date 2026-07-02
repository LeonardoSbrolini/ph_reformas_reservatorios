"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Foto de fundo do hero com efeito de parallax ao rolar.
 * - Wrapper faz o parallax (translateY via scroll, throttle com rAF).
 * - <Image> interno mantém o Ken Burns (scale) sem conflito de transform.
 * - Só atualiza enquanto o hero está visível; respeita prefers-reduced-motion.
 */
export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (y <= window.innerHeight) {
        // desloca a ~30% da velocidade do scroll (cabe na folga do wrapper)
        el.style.transform = `translate3d(0, ${y * 0.3}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-x-0 top-[-34%] h-[148%] will-change-transform"
    >
      <Image
        src="/hero-bg.webp"
        alt="Reservatório metálico industrial"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center] sm:object-center scale-105 animate-[ken-burns_28s_ease-in-out_infinite_alternate] motion-reduce:animate-none"
        quality={72}
      />
    </div>
  );
}
