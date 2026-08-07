import {
  Globe,
  Bot,
  Cpu,
  Database,
  Code2,
  Layers,
} from "lucide-react";

const technologies = [
  { icon: Globe, name: "Next.js" },
  { icon: Code2, name: "React" },
  { icon: Cpu, name: "TypeScript" },
  { icon: Layers, name: "Tailwind CSS" },
  { icon: Bot, name: "AI Integration" },
  { icon: Database, name: "Database" },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            Technologies
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Technologies We Use
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We build powerful digital products using modern technologies.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
              >

                <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center">

                  <Icon className="w-8 h-8 text-green-600" />

                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {tech.name}
                </h3>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}