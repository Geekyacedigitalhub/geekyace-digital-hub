import {
  Award,
  Clock3,
  Headphones,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Efficient development process that helps launch your project quickly without compromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    description:
      "Every project is built with performance, security, scalability, and long-term maintenance in mind.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "We provide continuous technical support to ensure your business keeps running smoothly.",
  },
  {
    icon: Award,
    title: "Professional Quality",
    description:
      "Every website, application, and automation solution is crafted with attention to detail.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Meeting deadlines is part of our commitment so your business can move forward with confidence.",
  },
  {
    icon: Sparkles,
    title: "Modern Technology",
    description:
      "Using the latest frameworks, AI tools, and cloud technologies to build future-ready products.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          badge="WHY CHOOSE US"
          title="Everything You Need To Build, Grow & Scale"
          description="We combine creativity, technology, and strategy to deliver digital solutions that help businesses stay ahead in today's competitive market."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}