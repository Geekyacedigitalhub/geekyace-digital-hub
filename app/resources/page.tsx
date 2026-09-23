import Link from "next/link";
import { ArrowRight, BookOpen, Bot, CheckCircle2, ClipboardCheck, FileText, Lightbulb, Rocket, ShieldCheck, Sparkles, Target } from "lucide-react";
import Container from "../components/ui/Container";

const resources = [
  { icon: ClipboardCheck, title: "Website Project Checklist", description: "A practical starting point for planning pages, content, features, integrations, domain, hosting, and launch requirements.", points: ["Define the business goal","Prepare content and brand assets","Prioritize required features"], href: "/contact", cta: "Plan a Website" },
  { icon: Bot, title: "AI & Automation Readiness", description: "A simple framework for identifying repetitive work and deciding where AI, integrations, or automation may fit.", points: ["Find repetitive tasks","Map the current workflow","Identify useful automation points"], href: "/services", cta: "Explore Services" },
  { icon: Rocket, title: "Launch Checklist", description: "Review the important details before a digital product goes live, from responsiveness and forms to SEO and performance.", points: ["Test key user journeys","Review mobile layouts","Check SEO and performance"], href: "/contact", cta: "Get Launch Support" },
  { icon: Target, title: "Digital Product Planning", description: "Turn an early idea into a clearer development brief by defining users, goals, features, priorities, and constraints.", points: ["Clarify the target user","Prioritize the MVP","Prepare the development brief"], href: "/contact", cta: "Discuss the Idea" },
  { icon: Sparkles, title: "AI Opportunity Map", description: "Think through customer support, internal operations, research, content, and other workflows where AI could reduce manual work.", points: ["Customer-facing opportunities","Internal workflow opportunities","Human-in-the-loop controls"], href: "/services", cta: "Explore AI" },
  { icon: FileText, title: "Project Scope Guide", description: "Use a simple scope conversation to define what is being built, what is not, how success is measured, and what comes next.", points: ["Define deliverables","Set priorities and milestones","Agree on the next step"], href: "/contact", cta: "Start a Scope Call" },
];

const principles = [
  { icon: Lightbulb, title: "Start With the Problem", description: "The product, platform, or integration should have a clear job to do before technology choices are made." },
  { icon: ShieldCheck, title: "Build for Reliability", description: "Good engineering includes maintainability, security, responsive UX, sensible integrations, and operational thinking." },
  { icon: CheckCircle2, title: "Make It Useful", description: "The finished solution should be understandable and practical for the people who actually use it." },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28 lg:py-32">
        <div aria-hidden="true" className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-green-500/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <Container>
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-bold text-green-300"><BookOpen className="h-4 w-4" /> Digital Toolkit</span>
            <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">Plan better.<span className="block text-green-400">Build with clarity.</span></h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">Practical checklists and planning frameworks for websites, SaaS products, AI workflows, Shopify systems, and other digital projects.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-4 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-green-400">Discuss a Project <ArrowRight size={18}/></Link>
              <Link href="/showcase" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10">See the Work</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Free Knowledge</span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Resources for making better digital decisions</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Use these as starting points before a project begins, during planning, or when you are deciding what to build next.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return <article key={resource.title} className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700 group-hover:bg-green-600 group-hover:text-white"><Icon size={23}/></div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{resource.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{resource.description}</p>
                <ul className="mt-5 space-y-3">{resource.points.map(point => <li key={point} className="flex gap-3 text-sm text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600"/>{point}</li>)}</ul>
                <Link href={resource.href} className="mt-auto pt-7 inline-flex items-center gap-2 font-bold text-green-700"> {resource.cta} <ArrowRight size={16}/></Link>
              </article>;
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Engineering Principles</span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Technology should serve the goal</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map(({icon: Icon, title, description}) => <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white"><Icon size={22}/></div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </div>)}
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black sm:text-5xl">Have the idea? Let&apos;s define the build.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">You do not need a finished specification. Start with the problem, desired outcome, and constraints.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-4 font-bold text-slate-950 hover:bg-green-400">Start a Conversation <ArrowRight size={18}/></Link>
          </div>
        </Container>
      </section>
    </main>
  );
}