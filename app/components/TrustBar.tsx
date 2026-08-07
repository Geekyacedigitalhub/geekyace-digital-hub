import {
  Code2,
  Database,
  Globe,
  Smartphone,
  ArrowRight,
  Monitor,
} from "lucide-react";

import Container from "./ui/Container";

const technologies = [
  {
    icon: Code2,
    name: "Next.js",
  },
  {
    icon: Globe,
    name: "React",
  },
  {
    icon: Database,
    name: "Firebase",
  },
  {
    icon: ArrowRight,
    name: "OpenAI",
  },
  {
    icon: Smartphone,
    name: "React Native",
  },
  {
    icon: Monitor,
    name: "AutoCAD",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y bg-white py-10">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            Technologies We Work With
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="flex flex-col items-center rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-50"
              >
                <Icon className="h-8 w-8 text-green-600" />

                <span className="mt-3 text-center text-sm font-semibold text-gray-700">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}