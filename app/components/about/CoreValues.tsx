"use client";

import {
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "../ui/Container";

const values = [
  {
    icon: HeartHandshake,
    number: "01",
    title: "Integrity",
    description:
      "We build lasting relationships through honesty, transparency, accountability, and clear communication at every stage of a project.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Innovation",
    description:
      "We embrace modern technologies and creative thinking to develop smarter solutions to real business challenges.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Quality",
    description:
      "We care about the details. Our solutions are built with performance, security, scalability, usability, and reliability in mind.",
  },
  {
    icon: Users,
    number: "04",
    title: "Collaboration",
    description:
      "We work closely with our clients, turning ideas and feedback into digital products that reflect their goals and vision.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            What We Stand For
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Our Core Values
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            The principles that guide how we work, how we build, and how we
            create meaningful relationships with our clients.
          </p>
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:bg-white hover:shadow-xl sm:p-8"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-black text-slate-200 transition-colors duration-300 group-hover:text-green-100">
                  {value.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:shadow-lg">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="relative mt-7 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-7 h-1 w-10 rounded-full bg-green-500 transition-all duration-300 group-hover:w-20" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-base font-medium leading-8 text-slate-500 sm:text-lg">
            These values keep us focused on one goal:{" "}
            <span className="font-bold text-slate-900">
              creating digital solutions that genuinely help businesses move
              forward.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}