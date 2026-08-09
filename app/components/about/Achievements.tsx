"use client";

import {
  BriefcaseBusiness,
  Building2,
  Globe,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "../ui/Container";

const achievements = [
  {
    icon: BriefcaseBusiness,
    value: "50+",
    title: "Projects Delivered",
    description:
      "Digital projects across websites, AI solutions, automation, mobile applications, and business systems.",
  },
  {
    icon: Building2,
    value: "15+",
    title: "Industries Served",
    description:
      "Supporting businesses across different industries with practical digital solutions tailored to their needs.",
  },
  {
    icon: Globe,
    value: "Worldwide",
    title: "Remote Services",
    description:
      "Working with businesses beyond borders through flexible remote collaboration and digital delivery.",
  },
  {
    icon: Trophy,
    value: "100%",
    title: "Commitment",
    description:
      "Focused on quality, communication, performance, and creating long-term value for every client.",
  },
];

export default function Achievements() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            Our Track Record
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Experience That Keeps Growing
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Our work continues to grow through projects, partnerships, and
            opportunities to help businesses use technology more effectively.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-lg">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Number */}
                <h3 className="mt-8 text-4xl font-extrabold tracking-tight text-green-600 sm:text-5xl">
                  {item.value}
                </h3>

                {/* Title */}
                <h4 className="mt-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 rounded-3xl border border-green-100 bg-green-50 p-7 text-center sm:p-8">
          <p className="text-base font-semibold leading-7 text-slate-700 sm:text-lg">
            Every project is an opportunity to learn, improve, and deliver
            something better than before.
          </p>
        </div>
      </Container>
    </section>
  );
}