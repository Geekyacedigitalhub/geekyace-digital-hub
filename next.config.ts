import type { NextConfig } from "next";

// Fixed cache-busting build id so Vercel/CDNs serve a fresh asset bundle.
const BUILD_ID = "geekyace-glass-v2";

const nextConfig: NextConfig = {
  generateBuildId: async () => BUILD_ID,

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

  async redirects() {
    return [
      {
        source: "/showcase",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/showcase/:slug",
        destination: "/portfolio/:slug",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/dashboard/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, max-age=0" },
        ],
      },
      {
        // HTML pages — revalidate on each request so visitors always get the latest shell.
        source: "/((?!_next/static|_next/image|favicon.ico|Images/|images/|uploads/|api/).*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
        ],
      },
    ];
  },
};

export default nextConfig;
