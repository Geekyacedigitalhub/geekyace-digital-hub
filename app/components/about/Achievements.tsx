"use client";

import {
  BriefcaseBusiness,
  Building2,
  Globe,
  Trophy,
} from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const achievements = [
  {
    icon: BriefcaseBusiness,
    value: "50+",
    title: "Projects Delivered",
    description:
      "Successfully completed projects across websites, AI solutions, automation, and mobile applications.",
  },
  {
    icon: Building2,
    value: "10+",
    title: "Industries Served",
    description:
      "Helping businesses across multiple industries embrace digital transformation.",
  },
  {
    icon: Globe,
    value: "24/7",
    title: "Client Support",
    description:
      "Providing reliable support before, during, and after every project launch.",
  },
  {
    icon: Trophy,
    value: "100%",
    title: "Commitment",
    description:
      "Dedicated to delivering quality, innovation, and long-term business value.",
  },
];

export default function Achievements() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="OUR ACHIEVEMENTS"
          title="Measuring Success Through Results"
          description="Every milestone reflects our commitment to building high-quality digital products that help businesses grow with confidence."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-5xl font-extrabold text-green-600">
                  {item.value}
                </h3>

                <h4 className="mt-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}