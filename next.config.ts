import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    qualities: [70, 75, 80],
  },

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
    ],
  },

  compress: true,
};

export default nextConfig;