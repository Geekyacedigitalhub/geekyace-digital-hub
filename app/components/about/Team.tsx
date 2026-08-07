"use client";

import { Users, UserCheck, HeartHandshake } from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const teamHighlights = [
  {
    icon: Users,
    title: "Collaborative Team",
    description:
      "Our designers, developers, and digital strategists work together to deliver exceptional results on every project.",
  },
  {
    icon: UserCheck,
    title: "Experienced Professionals",
    description:
      "Every project benefits from practical experience, technical expertise, and a commitment to quality.",
  },
  {
    icon: HeartHandshake,
    title: "Client Partnership",
    description:
      "We believe the best products are built through strong collaboration, clear communication, and shared goals.",
  },
];

export default function Team() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          badge="OUR TEAM"
          title="People Behind Geekyace Digital Hub"
          description="Behind every successful project is a passionate team dedicated to creating innovative digital experiences that help businesses grow."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {teamHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-20 max-w-3xl text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            More Than a Team — Your Technology Partner
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Geekyace Digital Hub, we don't just deliver projects—we build
            long-term partnerships. We take time to understand your goals,
            recommend the right technologies, and support your business long
            after launch.
          </p>
        </div>
      </Container>
    </section>
  );
}