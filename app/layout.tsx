import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GeekyAceAI from "./components/ai/GeekyAceAI";
import ScrollProgress from "./components/layout/ScrollProgress";
import ScrollAmbient from "./components/layout/ScrollAmbient";
import Noise from "./components/layout/Noise";
import FloatingCTA from "./components/layout/FloatingCTA";
import ScrollToTop from "./components/layout/ScrollToTop";
import ScrollSpy from "./components/layout/ScrollSpy";
import SideDots from "./components/layout/SideDots";
import MobileStickyCTA from "./components/layout/MobileStickyCTA";
import ContactDrawer from "./components/layout/ContactDrawer";
import Confetti from "./components/ui/Confetti";
import LoadingScreen from "./components/ui/LoadingScreen";
import { ThemeProvider } from "./components/layout/ThemeProvider";

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
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "GeekyAce Insights RSS" }],
    },
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
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <ThemeProvider>
        <body className="relative min-h-screen overflow-x-hidden">
          {/* Scroll-timed ambient color wash */}
          <ScrollAmbient />

          {/* Global UI chrome */}
        <LoadingScreen />
        <ScrollProgress />
        <Noise />
        <ScrollSpy />
        <SideDots />
        <Confetti />

          <Header />
          <main className="relative">{children}</main>
          <Footer />

          <FloatingCTA />
          <ScrollToTop />
          <MobileStickyCTA />
          <ContactDrawer />
          <GeekyAceAI />
        </body>
      </ThemeProvider>
    </html>
  );
}