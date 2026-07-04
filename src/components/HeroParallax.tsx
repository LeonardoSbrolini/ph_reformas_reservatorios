import Image from "next/image";

/**
 * Foto de fundo do hero, estática (sem parallax).
 */
export function HeroParallax() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/teste-bg.jpg"
        alt="Reservatório metálico industrial"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center] sm:object-center"
        quality={72}
      />
    </div>
  );
}
