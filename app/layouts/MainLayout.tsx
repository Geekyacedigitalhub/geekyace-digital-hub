import { ReactNode } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">

      <Header />

      <main
        id="main-content"
        className="flex-1"
      >
        {children}
      </main>

      <Footer />

    </div>
  );
}