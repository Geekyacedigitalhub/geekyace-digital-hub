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

const process = [
  {
    icon: Search,
    title: "Discovery & Consultation",
    description:
      "We learn about your business, goals, challenges, target audience, and requirements before recommending the right solution.",
  },
  {
    icon: ClipboardList,
    title: "Strategy & Planning",
    description:
      "We define the project scope, features, technology, milestones, timeline, and delivery plan so everything is clear from the beginning.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "We create clean, intuitive, and user-focused designs that reflect your brand and provide an excellent experience across devices.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Our team turns the approved designs and requirements into secure, scalable, responsive, and high-performing digital products.",
  },
  {
    icon: Rocket,
    title: "Testing & Launch",
    description:
      "We test functionality, responsiveness, performance, and user experience before deploying your solution for a smooth launch.",
  },
  {
    icon: LifeBuoy,
    title: "Support & Growth",
    description:
      "After launch, we can provide maintenance, support, improvements, and ongoing development as your business continues to grow.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            From Idea to Digital Solution
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
            We follow a clear and collaborative process designed to keep
            your project organized, transparent, and focused on achieving
            your business goals.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {process.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group relative rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white hover:shadow-xl"
              >
                {/* Number */}
                <div className="absolute right-7 top-6 text-5xl font-extrabold text-slate-200 transition-colors duration-300 group-hover:text-green-100">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    size={30}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {step.description}
                </p>

                {/* Step Indicator */}
                <div className="mt-7 h-1 w-12 rounded-full bg-green-500 transition-all duration-300 group-hover:w-20" />
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-lg leading-8 text-slate-600">
            Every project is different, so we adapt our process to your
            goals, requirements, timeline, and budget.
          </p>
        </div>
      </Container>
    </section>
  );
}