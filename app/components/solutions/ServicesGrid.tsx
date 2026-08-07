"use client";

import {
  Bot,
  Globe,
  Smartphone,
  Workflow,
  Palette,
  Cloud,
} from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional websites, landing pages, eCommerce platforms, and custom web applications built for performance and growth.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "AI chatbots, AI voice agents, intelligent assistants, and custom AI-powered business solutions.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Automate repetitive tasks, streamline workflows, and integrate your business tools with modern automation platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform and native mobile applications designed for speed, usability, and scalability.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "User-focused interfaces and experiences that improve engagement and create memorable digital products.",
  },
  {
    icon: Cloud,
    title: "Cloud & Digital Solutions",
    description:
      "Cloud deployment, infrastructure, hosting, maintenance, and digital transformation services.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          badge="OUR SERVICES"
          title="Complete Digital Solutions Under One Roof"
          description="From websites to AI automation, we deliver end-to-end digital solutions that help businesses innovate, grow, and compete in today's digital world."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}