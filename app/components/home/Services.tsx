import {
  Bot,
  Cloud,
  Globe,
  Palette,
  Smartphone,
  Workflow,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import FeatureCard from "@/app/components/ui/FeatureCard";
import SectionHeading from "@/app/components/ui/SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive, and high-performing websites built to strengthen your online presence and grow your business.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Intelligent AI chatbots, AI agents, and custom AI-powered solutions that automate tasks and improve customer engagement.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Streamline your business processes with workflow automation, integrations, and smart digital systems.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Beautiful, scalable Android and iOS applications designed to deliver exceptional user experiences.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Creative and user-focused interface designs that increase engagement and turn visitors into loyal customers.",
  },
  {
    icon: Cloud,
    title: "Cloud & Digital Solutions",
    description:
      "Secure cloud deployment, hosting, migration, and digital transformation services for modern businesses.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="OUR SERVICES"
          title="Complete Digital Solutions For Every Business"
          description="We help startups, entrepreneurs, and growing companies build modern digital products that increase productivity, improve customer experience, and accelerate business growth."
          centered
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