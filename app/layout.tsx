import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GeekyAceAI from "./components/ai/GeekyAceAI";

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
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <GeekyAceAI />
      </body>
    </html>
  );
}