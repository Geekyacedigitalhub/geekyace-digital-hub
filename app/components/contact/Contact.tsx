"use client";

import Container from "../ui/Container";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <ContactInfo />

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}