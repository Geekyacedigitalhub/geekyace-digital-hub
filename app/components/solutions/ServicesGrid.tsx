"use client";

import {
  Bot,
  Cloud,
  Globe,
  Palette,
  PenTool,
  Ruler,
  Smartphone,
  Workflow,
} from "lucide-react";

import Container from "../ui/Container";
import FeatureCard from "../ui/FeatureCard";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional business websites, landing pages, eCommerce platforms, and custom web applications built for performance, usability, and growth.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "AI chatbots, intelligent assistants, AI-powered systems, and custom automation solutions designed to improve productivity and customer experiences.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Automate repetitive tasks, connect your business tools, streamline workflows, and reduce manual work with smart digital automation.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Modern mobile applications for Android and iOS designed with intuitive experiences, strong performance, and scalable technology.",
  },
  {
    icon: Palette,
    title: "UI / UX & Branding",
    description:
      "Clean interfaces, visual identities, graphics, and user experiences that help businesses create a professional and memorable digital presence.",
  },
  {
    icon: Ruler,
    title: "CAD Drafting",
    description:
      "Accurate and professional CAD drafting, floor plans, technical drawings, and digital design support for construction and property projects.",
  },
  {
    icon: Cloud,
    title: "Cloud & Digital Solutions",
    description:
      "Cloud deployment, hosting, backend systems, maintenance, integrations, and digital infrastructure built to support growing businesses.",
  },
  {
    icon: PenTool,
    title: "Creative Digital Solutions",
    description:
      "Digital creative services that help businesses communicate their ideas, strengthen their brand, and present their products professionally online.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            What We Do
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Digital Solutions for Modern Businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
            We combine technology, creativity, and business strategy to
            build digital solutions that solve real problems and create
            measurable value.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-lg leading-8 text-slate-600">
            Don't see exactly what you need? We can create a custom
            solution around your business goals, workflow, and budget.
          </p>
        </div>
      </Container>
    </section>
  );
}