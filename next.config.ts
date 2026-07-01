import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // Serve formatos modernos (menor peso) quando o navegador suportar
    formats: ["image/avif", "image/webp"],
    // Qualidades permitidas (Next 16 restringe a [75] por padrão)
    qualities: [72, 75],
    // Cache das imagens otimizadas por 31 dias
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
};

export default nextConfig;
