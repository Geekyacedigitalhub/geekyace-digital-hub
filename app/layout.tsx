import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GeekyAceAI from "./components/ai/GeekyAceAI";

export const metadata: Metadata = {
  title: "GeekyAce Digital Hub | Full-Stack Developer",
  description:
    "GeekyAce Digital Hub builds full-stack web applications, Shopify systems, AI products, automation platforms, and modern digital experiences.",
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

        <main>
          {children}
        </main>

        <Footer />

        {/* GeekyAce AI Assistant */}
        <GeekyAceAI />
      </body>
    </html>
  );
}