import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Globe,
  Smartphone,
  Workflow,
} from "lucide-react";

import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";

const solutions = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional business websites, landing pages, eCommerce platforms, and custom web applications built for performance.",
    href: "/solutions/web-development",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "AI chatbots, AI voice agents, workflow automation, and intelligent assistants that improve productivity.",
    href: "/solutions/ai-solutions",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Automate repetitive tasks, integrate your tools, and streamline business operations using modern workflows.",
    href: "/solutions/business-automation",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile applications designed for speed, usability, and long-term scalability.",
    href: "/solutions/mobile-development",
    color: "from-orange-500 to-amber-500",
  },
];

export default function SolutionsPreview() {
  return (
    <section className="bg-slate-950 py-24">
      <Container>
        <SectionHeading
          badge="OUR SOLUTIONS"
          title="Technology That Helps Your Business Grow"
          description="We combine strategy, design, software engineering, and artificial intelligence to build solutions that create measurable business results."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-slate-700"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${solution.color}`}
                />

                <div
                  className={`mb-8 inline-flex rounded-2xl bg-gradient-to-r ${solution.color} p-4 text-white`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {solution.description}
                </p>

                <Link
                  href={solution.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}