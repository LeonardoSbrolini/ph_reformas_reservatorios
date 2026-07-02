/**
 * Brilho diagonal que varre o botão no hover.
 * Requer no botão pai: `group relative overflow-hidden`.
 */
export function ButtonShine() {
  return (
    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[130%]" />
  );
}
