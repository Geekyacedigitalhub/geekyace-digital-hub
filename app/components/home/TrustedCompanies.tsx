import {
  Globe,
  Bot,
  Smartphone,
  Palette,
  Database,
  Cloud,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const technologies = [
  {
    icon: Globe,
    title: "Website Development",
  },
  {
    icon: Bot,
    title: "AI Solutions",
  },
  {
    icon: Workflow,
    title: "Business Automation",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
  },
  {
    icon: Database,
    title: "Database Systems",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
  },
];

export default function TrustedCompanies() {
  return (
    <section className="border-y border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            OUR EXPERTISE
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Building Modern Digital Experiences
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-400">
            We combine innovative technologies, intelligent automation,
            and creative design to help businesses grow faster,
            operate smarter, and deliver exceptional customer experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-900"
              >
                <div className="mb-5 inline-flex rounded-xl bg-blue-500/10 p-3 transition group-hover:bg-blue-500/20">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}