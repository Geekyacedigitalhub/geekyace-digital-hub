"use client";

import {
  Users,
  UserCheck,
  HeartHandshake,
  MessageSquareText,
  Code2,
  Lightbulb,
} from "lucide-react";

import Container from "../ui/Container";

const teamHighlights = [
  {
    icon: Users,
    title: "Collaborative Team",
    description:
      "Our designers, developers, and digital strategists work together closely to turn ideas into practical digital solutions.",
  },
  {
    icon: UserCheck,
    title: "Experienced Professionals",
    description:
      "Every project benefits from technical expertise, practical experience, attention to detail, and a strong commitment to quality.",
  },
  {
    icon: HeartHandshake,
    title: "Client Partnership",
    description:
      "We work with our clients as partners, keeping communication clear and making sure every solution aligns with their business goals.",
  },
];

const workingPrinciples = [
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    description:
      "We keep you informed throughout the project with clear updates, feedback, and practical recommendations.",
  },
  {
    icon: Code2,
    title: "Technical Excellence",
    description:
      "We choose modern technologies and development practices to create reliable, scalable, and maintainable solutions.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "We look beyond the surface to understand your challenges and create digital solutions that deliver real business value.",
  },
];

export default function Team() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            Our Team
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            A Team Focused on Your Digital Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
            Great digital products are built through collaboration,
            experience, and a clear understanding of the people and
            businesses they are created for.
          </p>
        </div>

        {/* Team Highlights */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {teamHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl md:p-10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">
                  <Icon size={30} strokeWidth={2} />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* How We Work */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              How We Work
            </span>

            <h3 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
              More Than a Team — Your Technology Partner
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From the first conversation to launch and beyond, we focus on
              building solutions that are useful, reliable, and aligned with
              your long-term goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {workingPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Icon size={22} />
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-20 rounded-3xl bg-slate-950 px-8 py-12 text-center text-white md:px-16 md:py-16">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
              Built Around Your Goals
            </span>

            <h3 className="mt-6 text-3xl font-extrabold md:text-4xl">
              Your Success Is the Goal Behind Every Project
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              We take time to understand your business, recommend the right
              approach, and build technology that helps you move forward with
              confidence.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}