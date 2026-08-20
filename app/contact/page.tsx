import type { Metadata } from "next";
import ContactHero from "@/app/components/contact/ContactHero";
import Contact from "@/app/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact & Project Enquiry",
  description: "Tell GeekyAce about your project, request an expert squad, or share an AceMatch brief for a focused next step.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <Contact />
    </main>
  );
}
