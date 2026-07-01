"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { WaterWaves } from "@/components/WaterWaves";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { beforeAfterProjects } from "@/lib/projects-data";

type SliderProps = {
  beforeImage: string;
  afterImage: string;
  title: string;
};

function CompareSlider({ beforeImage, afterImage, title }: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [touched, setTouched] = useState(false);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    setTouched(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    draggingRef.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setTouched(true);
      setPosition((p) => Math.max(0, p - 5));
    }
    if (e.key === "ArrowRight") {
      setTouched(true);
      setPosition((p) => Math.min(100, p + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className="group/slider relative aspect-4/3 w-full cursor-ew-resize select-none touch-none overflow-hidden bg-surface-darkest"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* DEPOIS (camada de fundo, completa) */}
      <Image
        src={afterImage}
        alt={`${title} — depois`}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
      {/* Scrim superior para legibilidade das labels */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black/45 to-transparent" />
      <span
        className={cn(
          "absolute top-3 right-3 z-10 rounded-md bg-brand-dark/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm transition-opacity duration-300",
          position > 85 ? "opacity-0" : "opacity-100"
        )}
      >
        Depois
      </span>

      {/* ANTES (camada superior, recortada pela posição do slider) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={`${title} — antes`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black/45 to-transparent" />
        <span
          className={cn(
            "absolute top-3 left-3 z-10 rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md transition-opacity duration-300",
            position < 15 ? "opacity-0" : "opacity-100"
          )}
        >
          Antes
        </span>
      </div>

      {/* Dica "arraste" — some após a primeira interação */}
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-4 z-30 -translate-x-1/2 rounded-full bg-black/45 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm transition-opacity duration-500",
          touched ? "opacity-0" : "opacity-100"
        )}
      >
        Arraste para comparar
      </div>

      {/* Linha + alça do slider */}
      <div
        className="absolute inset-y-0 z-20 w-1 bg-linear-to-b from-white/70 via-white to-white/70 shadow-[0_0_12px_rgba(0,0,0,0.5)]"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <button
          type="button"
          aria-label={`Comparar antes e depois: ${title}`}
          onKeyDown={handleKeyDown}
          className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-brand-dark shadow-xl ring-4 ring-white/30 transition-transform duration-200 group-hover/slider:scale-110"
        >
          <ChevronLeft className="h-4 w-4 -mr-1" />
          <ChevronRight className="h-4 w-4 -ml-1" />
        </button>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section
      id="antes-depois"
      className="relative overflow-hidden bg-linear-to-br from-surface-tint via-white to-slate-100 py-24"
    >
      {/* Mesh de degradê — profundidade de cor */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(50% 45% at 12% 8%, rgba(97,110,215,0.16), transparent 60%), radial-gradient(50% 50% at 88% 92%, rgba(73,85,196,0.14), transparent 60%)",
        }}
      />

      {/* Mesh glow no topo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(55% 45% at 50% 0%, rgba(97,110,215,0.14), transparent 60%)",
        }}
      />

      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-brand-light/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-1/4 h-80 w-80 rounded-full bg-brand-dark/10 blur-3xl" />

      <WaterWaves />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge className="mb-4 border-brand-dark/20 bg-brand-dark/10 text-brand-dark hover:bg-brand-dark/20">
            Nossos Resultados
          </Badge>
          <h2 className="mb-4 text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Antes <span className="text-brand-light">&amp;</span> Depois
          </h2>
          {/* Divisor decorativo */}
          <div className="mx-auto mb-5 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-brand-dark/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
            <span className="h-px w-8 bg-brand-dark/15" />
          </div>
          <p className="mx-auto max-w-xl text-base text-gray-600">
            Veja a transformação em alguns dos reservatórios que já recuperamos.
            Arraste a barra para comparar o antes e o depois.
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {beforeAfterProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl shadow-brand-dark/10 transition-all duration-500 md:hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-dark/20"
            >
              <CompareSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                title={project.title}
              />

              {/* Info abaixo da imagem */}
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-brand-dark to-brand-light text-xs font-black text-white shadow-md shadow-brand-dark/30 transition-transform duration-300 group-hover:scale-110">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold leading-snug text-brand-navy">
                      {project.title}
                    </h3>
                    {project.location && (
                      <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-dark">
                        <span className="h-1 w-1 rounded-full bg-brand-light" />
                        {project.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Divisor em gradiente */}
                <div className="my-4 h-px w-full bg-linear-to-r from-brand-dark/15 via-brand-light/25 to-transparent" />

                <p className="text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-5 text-sm text-gray-600">
            Seu reservatório precisa de uma transformação como essas?
          </p>
          <Link
            href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para reforma de reservatório."
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 bg-linear-to-r from-brand-dark to-brand-light px-8 font-bold text-white shadow-lg shadow-brand-dark/40 hover:opacity-90"
            )}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Solicitar Orçamento Gratuito
          </Link>
        </div>
      </div>
    </section>
  );
}
