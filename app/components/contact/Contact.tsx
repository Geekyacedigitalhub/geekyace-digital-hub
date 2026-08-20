"use client";

import Container from "../ui/Container";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <div aria-hidden="true" className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-green-100/80 blur-3xl" />
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="brand-eyebrow">Start a Project</span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Tell Us About Your Project
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Have an idea, project, or business challenge? Share the details
            with us and we'll help you figure out the best way forward.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Contact Information */}
          <div>
            <ContactInfo />
          </div>

          {/* Contact Form */}
          <div
            id="contact-form"
            className="premium-card rounded-[2rem] p-6 sm:p-8 lg:p-10"
          >
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
