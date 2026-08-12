import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GeekyAceAI from "./components/ai/GeekyAceAI";

export const metadata: Metadata = {
  title: "GeekyAce Digital Hub",
  description:
    "GeekyAce Digital Hub helps businesses grow through websites, AI solutions, automation, mobile apps, branding, and modern digital experiences.",
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