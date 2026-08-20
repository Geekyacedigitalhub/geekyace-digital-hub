"use client";

import {
  Users,
  UserCheck,
  HeartHandshake,
  MessageSquareText,
  Code2,
  Lightbulb,
  ExternalLink,
  Globe,
  BriefcaseBusiness,
} from "lucide-react";

import Link from "next/link";
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

const founderLinks = [
  {
    label: "LinkedIn",
    description: "Professional profile",
    href: "",
  },
  {
    label: "GitHub",
    description: "Projects & technology",
    href: "",
  },
  {
    label: "Instagram",
    description: "Social profile",
    href: "",
  },
  {
    label: "YouTube",
    description: "Videos & content",
    href: "",
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

        {/* Founder Recognition */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              Leadership
            </span>

            <h3 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Meet the Founder Behind GeekyAce Digital Hub
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              GeekyAce Digital Hub is driven by a vision to help businesses
              turn ideas into useful, professional, and scalable digital
              solutions.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-green-200 bg-white shadow-sm">
            <div className="bg-gradient-to-br from-green-50 via-white to-slate-50 px-8 py-10 md:px-12 md:py-12">
              <div className="flex flex-col items-center gap-8 md:flex-row">
                {/* Founder Avatar */}
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-green-100 text-4xl font-extrabold text-green-700 ring-4 ring-white shadow-md">
                  OA
                </div>

                {/* Founder Information */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                    <h4 className="text-3xl font-extrabold text-slate-900">
                      Opeyemi Ajose
                    </h4>

                    <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">
                      Founder & CEO
                    </span>
                  </div>

                  <p className="mt-2 text-lg font-semibold text-green-600">
                    Founder & CEO — GeekyAce Digital Hub
                  </p>

                  <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                    Opeyemi Ajose leads GeekyAce Digital Hub with a focus on
                    technology, digital solutions, innovation, and helping
                    businesses use modern technology to achieve their goals.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
                      Digital Technology
                    </span>

                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
                      Digital Entrepreneurship
                    </span>

                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
                      Software & Web Development
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Links */}
            <div className="border-t border-slate-100 px-8 py-8 md:px-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {founderLinks.map((item) => {
                  const isAvailable = Boolean(item.href);

                  return isAvailable ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-green-400 hover:bg-green-50 hover:shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-green-100 group-hover:text-green-700">
                          <Globe size={19} />
                        </div>

                        <div>
                          <p className="font-bold text-slate-900">
                            {item.label}
                          </p>

                          <p className="text-xs text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <ExternalLink
                        size={16}
                        className="text-slate-400 transition-colors group-hover:text-green-600"
                      />
                    </Link>
                  ) : (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-400 ring-1 ring-slate-200">
                          <Globe size={19} />
                        </div>

                        <div>
                          <p className="font-bold text-slate-700">
                            {item.label}
                          </p>

                          <p className="text-xs text-slate-400">
                            Coming soon
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Founder Profile CTA */}
            <div className="border-t border-slate-100 bg-slate-50 px-8 py-6 md:px-12">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness
                    size={20}
                    className="text-green-600"
                  />

                  <p className="text-sm font-semibold text-slate-600">
                    Want to learn more about our founder and the agency?
                  </p>
                </div>

                <Link
                  href="/about#team"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-green-700 hover:shadow-lg"
                >
                  Meet Our Team
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          </div>
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
