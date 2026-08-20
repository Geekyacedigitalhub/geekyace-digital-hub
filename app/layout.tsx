import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GeekyAceAI from "./components/ai/GeekyAceAI";
import SiteExperience from "./components/site/SiteExperience";

export const metadata: Metadata = {
  metadataBase: new URL("https://geekyacedigitalhub.com"),
  title: {
    default: "GeekyAce Digital Hub | Digital Products, AI & Automation",
    template: "%s | GeekyAce Digital Hub",
  },
  description:
    "GeekyAce Digital Hub helps businesses grow through websites, AI solutions, automation, mobile apps, branding, and modern digital experiences.",
  keywords: [
    "digital agency",
    "website development",
    "AI solutions",
    "business automation",
    "mobile app development",
    "digital product design",
  ],
  openGraph: {
    type: "website",
    siteName: "GeekyAce Digital Hub",
    title: "GeekyAce Digital Hub | Digital Products, AI & Automation",
    description: "Strategy, design, software, AI, and automation built around real business goals.",
    url: "https://geekyacedigitalhub.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeekyAce Digital Hub | Expert Digital Agency",
    description: "Coordinated experts across technology, creative, growth, video, and business support.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "GeekyAce Digital Hub",
  url: "https://geekyacedigitalhub.com",
  logo: "https://geekyacedigitalhub.com/images/logo.png",
  email: "hello@geekyacedigitalhub.com",
  telephone: "+2348028793121",
  sameAs: [
    "https://www.facebook.com/geekyacedigitalhub",
    "https://www.instagram.com/geekyacedigitalhub/",
    "https://www.linkedin.com/company/geekyace-digital-hub",
    "https://github.com/Geekyacedigitalhub",
  ],
  knowsAbout: ["Web development", "Artificial intelligence", "Business automation", "Brand design", "Digital marketing", "Video production"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-lg bg-slate-950 px-4 py-3 font-bold text-white transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />

        <div id="main-content" className="site-main">
          {children}
        </div>

        <Footer />
        <SiteExperience />

        {/* GeekyAce AI Assistant */}
        <GeekyAceAI />
      </body>
    </html>
  );
}
