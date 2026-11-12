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
import JsonLd from "./components/seo/JsonLd";
import { ThemeProvider } from "./components/layout/ThemeProvider";
import { site } from "./data/site-meta";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: site.titleTemplate },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: site.keywords,
  alternates: {
    canonical: "/",
    languages: { "en-NG": "/", "en-US": "/" },
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "GeekyAce Insights RSS" }],
    },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_NG",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: "@geekyacehub",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
    shortcut: "/favicon.ico",
  },
  verification: {
    // Replace with real values from Google / Bing / Yandex search consoles when available.
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
    // bing: "YOUR_BING_TOKEN",
  },
  formatDetection: { email: false, address: false, telephone: false },
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
          <JsonLd site={site} />

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
