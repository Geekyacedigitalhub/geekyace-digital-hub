"use client";

import {
  ClipboardCheck,
  Compass,
  Palette,
  Code2,
  Rocket,
  LifeBuoy,
} from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Discover",
    description:
      "We learn about your business, goals, challenges, and target audience before writing a single line of code.",
  },
  {
    icon: Compass,
    title: "Plan",
    description:
      "We create a clear strategy, define milestones, choose the right technologies, and prepare the project roadmap.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Beautiful, user-focused interfaces are designed to deliver a modern experience and improve conversions.",
  },
  {
    icon: Code2,
    title: "Develop",
    description:
      "Our developers build fast, scalable, secure digital products using modern technologies and best practices.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "After extensive testing, we deploy your project and ensure everything runs smoothly from day one.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description:
      "We continue improving, maintaining, and supporting your product as your business grows.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="OUR PROCESS"
          title="From Idea to Successful Launch"
          description="Every successful digital product follows a proven process. We work closely with you from discovery to long-term support."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => {
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