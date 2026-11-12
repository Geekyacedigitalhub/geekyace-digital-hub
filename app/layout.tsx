import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GeekyAceAI from "./components/ai/GeekyAceAI";
import CursorGlow from "./components/layout/CursorGlow";
import CustomCursor from "./components/layout/CustomCursor";
import ScrollProgress from "./components/layout/ScrollProgress";
import ScrollAmbient from "./components/layout/ScrollAmbient";
import Noise from "./components/layout/Noise";
import FloatingCTA from "./components/layout/FloatingCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://geekyacedigitalhub.com"),
  title: {
    default: "GeekyAce Digital Hub | Full-Stack Developer",
    template: "%s | GeekyAce Digital Hub",
  },
  description:
    "GeekyAce Digital Hub builds full-stack web applications, Shopify systems, AI products, automation platforms, and modern digital experiences.",
  keywords: [
    "full stack developer",
    "Next.js developer",
    "React developer",
    "Shopify developer",
    "AI development",
    "SaaS development",
    "web application development",
    "GeekyAce Digital Hub",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GeekyAce Digital Hub | Full-Stack Developer",
    description:
      "Full-stack web development, Shopify engineering, AI products, and business automation.",
    url: "https://geekyacedigitalhub.com",
    siteName: "GeekyAce Digital Hub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeekyAce Digital Hub | Full-Stack Developer",
    description:
      "Full-stack web development, Shopify engineering, AI products, and automation systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="relative min-h-screen overflow-x-hidden bg-white text-slate-900">
        {/* Scroll-timed ambient color wash */}
        <ScrollAmbient />

        {/* Global UI chrome */}
        <ScrollProgress />
        <CursorGlow />
        <CustomCursor />
        <Noise />

        <Header />
        <main className="relative">{children}</main>
        <Footer />

        <FloatingCTA />
        <GeekyAceAI />
      </body>
    </html>
  );
}