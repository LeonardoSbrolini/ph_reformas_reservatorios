/**
 * Efeito sutil de ondas de água — bandas suaves que deslizam horizontalmente
 * em ritmos diferentes, evocando uma superfície de água em repouso.
 * Pensado para fundos claros (opacidade baixa, tom azul brand).
 */
export function WaterWaves() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Camada de fundo — mais lenta e mais difusa */}
      <Wave
        className="bottom-0 h-40 text-brand-light/7 animation-duration-[26s]"
        d="M0,40 C320,90 480,0 800,40 C1120,80 1280,10 1600,40 L1600,160 L0,160 Z"
      />
      {/* Camada intermediária */}
      <Wave
        className="bottom-0 h-32 text-brand-dark/6 animation-duration-[18s] direction-[reverse]"
        d="M0,50 C260,10 520,90 800,50 C1080,10 1340,90 1600,50 L1600,160 L0,160 Z"
      />
      {/* Camada da frente — sutil destaque mais claro */}
      <Wave
        className="bottom-0 h-24 text-brand-light/9 animation-duration-[14s]"
        d="M0,60 C300,100 500,20 800,60 C1100,100 1300,20 1600,60 L1600,160 L0,160 Z"
      />
    </div>
  );
}

function Wave({ className, d }: { className: string; d: string }) {
  return (
    <svg
      className={`absolute left-0 w-[200%] animate-[wave-drift_linear_infinite] ${className}`}
      viewBox="0 0 3200 160"
      preserveAspectRatio="none"
      fill="currentColor"
    >
      <path d={d} />
      <path d={d} transform="translate(1600,0)" />
    </svg>
  );
}
