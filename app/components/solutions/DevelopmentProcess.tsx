"use client";

import {
  ClipboardList,
  Search,
  Palette,
  Code2,
  Rocket,
  LifeBuoy,
} from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const process = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We understand your business, challenges, objectives, and users before recommending the best digital solution.",
  },
  {
    icon: ClipboardList,
    title: "Strategy & Planning",
    description:
      "A detailed roadmap is created, including timelines, milestones, technologies, and project requirements.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Our designers create intuitive interfaces and engaging user experiences tailored to your audience.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Our engineers build secure, scalable, and high-performing applications using modern technologies.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "After rigorous testing, we deploy your solution to a reliable production environment with confidence.",
  },
  {
    icon: LifeBuoy,
    title: "Support & Growth",
    description:
      "We continue to monitor, maintain, and improve your solution as your business evolves.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          badge="OUR DEVELOPMENT PROCESS"
          title="A Proven Process for Successful Digital Projects"
          description="Every project follows a structured workflow that ensures quality, transparency, and long-term success."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {process.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={30} />
                  </div>

                  <span className="text-5xl font-extrabold text-slate-100">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}