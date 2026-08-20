"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Clapperboard,
  Clipboard,
  Clock3,
  Copy,
  Download,
  Palette,
  RotateCcw,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import Container from "@/app/components/ui/Container";
import { getMarketplaceService } from "@/app/data/serviceMarketplace";
import { getStudio, type Studio } from "@/app/data/studios";

type GoalId = Studio["id"];

type TeamMember = {
  id: string;
  name: string;
  role: string;
  skills: string[];
  expertise: string[];
  availability: string;
};

const goals = [
  { id: "technology" as GoalId, label: "Build a website, app, AI, or automation", description: "Create or improve a digital product, system, workflow, or intelligent experience.", icon: Workflow },
  { id: "creative" as GoalId, label: "Create a stronger brand or visual system", description: "Make the business look distinctive and consistent across buyer touchpoints.", icon: Palette },
  { id: "growth" as GoalId, label: "Generate more attention, leads, or sales", description: "Strengthen the journey from discovery to a measurable buyer action.", icon: TrendingUp },
  { id: "video" as GoalId, label: "Tell the story through video or motion", description: "Explain an offer, launch, or idea with channel-ready visual storytelling.", icon: Clapperboard },
  { id: "support" as GoalId, label: "Add reliable business or operations support", description: "Create more capacity through research, documentation, data, or virtual support.", icon: BriefcaseBusiness },
];

const audiences = ["Consumers", "Businesses", "Internal team", "Community or members", "Mixed audience", "Not sure yet"];
const stages = ["I only have an idea", "I have a rough plan", "I have content or designs", "I have an existing product", "I need ongoing support"];
const timelines = ["As soon as practical", "Within one month", "Within 2–3 months", "Within 3–6 months", "Flexible / exploring"];
const budgets = ["Under $500", "$500–$1,500", "$1,500–$5,000", "$5,000–$15,000", "$15,000+", "I need guidance"];

const recommendations: Record<GoalId, {
  title: string;
  route: string;
  deliverables: string[];
  phases: string[];
  roles: string[];
  keywords: string[];
}> = {
  technology: {
    title: "Technology & Product Squad",
    route: "/services",
    deliverables: ["Product and technical discovery", "Experience design or workflow architecture", "Build, quality assurance, and launch plan"],
    phases: ["Discovery", "Prototype", "Build", "Launch"],
    roles: ["Project strategist", "Product designer", "Developer / automation specialist"],
    keywords: ["developer", "web", "mobile", "software", "ai", "automation", "product", "technical", "code"],
  },
  creative: {
    title: "Brand & Creative Squad",
    route: "/services/graphic-design",
    deliverables: ["Creative direction", "Core identity or campaign system", "Reusable assets and usage guidance"],
    phases: ["Audit", "Direction", "Design", "Asset handover"],
    roles: ["Brand strategist", "Graphic designer", "UI / presentation designer"],
    keywords: ["brand", "graphic", "design", "creative", "ui", "ux", "adobe", "presentation"],
  },
  growth: {
    title: "Marketing & Growth Squad",
    route: "/contact?studio=growth",
    deliverables: ["Audience and funnel diagnosis", "Channel and content plan", "Campaign assets, measurement, and optimization"],
    phases: ["Research", "Strategy", "Campaign", "Optimize"],
    roles: ["Growth strategist", "Content / SEO specialist", "Campaign creative"],
    keywords: ["marketing", "growth", "seo", "content", "social", "campaign", "sales", "lead"],
  },
  video: {
    title: "Video & Motion Squad",
    route: "/contact?studio=video",
    deliverables: ["Story and format direction", "Script, edit, or motion production", "Channel-ready versions and source handover"],
    phases: ["Concept", "Pre-production", "Production", "Delivery"],
    roles: ["Creative producer", "Video editor", "Motion designer"],
    keywords: ["video", "motion", "animation", "editor", "youtube", "reel", "production"],
  },
  support: {
    title: "Business Support Squad",
    route: "/contact?studio=support",
    deliverables: ["Workflow and responsibility mapping", "Research, documentation, or data setup", "Operating rhythm and quality checks"],
    phases: ["Diagnose", "Set up", "Operate", "Improve"],
    roles: ["Operations lead", "Research / data specialist", "Virtual support specialist"],
    keywords: ["operations", "assistant", "research", "data", "support", "admin", "documentation", "business"],
  },
};

const questions = [
  { eyebrow: "The outcome", title: "What should this project help you achieve?", copy: "Choose the result that matters most. AceMatch will use it to choose the right specialist studio." },
  { eyebrow: "The audience", title: "Who is the work mainly for?", copy: "A clear audience helps shape the message, experience, format, and delivery team." },
  { eyebrow: "The starting point", title: "How far along is the project?", copy: "Your current stage determines the first useful phase and what should not be skipped." },
  { eyebrow: "The timing", title: "When would you like to make progress?", copy: "This is a planning signal, not a delivery guarantee. Scope and availability confirm the schedule." },
  { eyebrow: "The brief", title: "What should the squad know before the first conversation?", copy: "Choose an investment range and describe the problem, goal, or deliverable in your own words." },
];

export default function ProjectPlanner() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState<GoalId | "">("");
  const [audience, setAudience] = useState("");
  const [stage, setStage] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [context, setContext] = useState("");
  const [serviceInterest, setServiceInterest] = useState("");
  const [copied, setCopied] = useState(false);
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/team-members", { cache: "no-store", signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("Team unavailable")))
      .then((data: { members?: TeamMember[] }) => setTeam(Array.isArray(data.members) ? data.members : []))
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const requestedService = searchParams.get("service");
    const matchedService = requestedService ? getMarketplaceService(requestedService) : undefined;
    const requestedStudio = searchParams.get("studio") as GoalId | null;

    const frame = window.requestAnimationFrame(() => {
      if (matchedService) {
        setServiceInterest(matchedService.slug);
        setGoal(matchedService.studioId);
      } else if (requestedStudio && requestedStudio in recommendations) {
        setGoal(requestedStudio);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const recommendation = recommendations[goal || "technology"];
  const studio = getStudio(goal || "technology");
  const selectedService = serviceInterest ? getMarketplaceService(serviceInterest) : undefined;
  const selectedGoal = goals.find((item) => item.id === goal)?.label ?? "Digital project";
  const canContinue = [Boolean(goal), Boolean(audience), Boolean(stage), Boolean(timeline), Boolean(budget && context.trim().length >= 10)][step];

  const matchKeywords = useMemo(
    () => selectedService
      ? [...recommendation.keywords, ...selectedService.searchTerms]
      : recommendation.keywords,
    [recommendation.keywords, selectedService],
  );

  const recommendedRoles = selectedService?.specialistRoles ?? recommendation.roles;
  const recommendedDeliverables = selectedService?.deliverables.slice(0, 3) ?? recommendation.deliverables;
  const recommendedPhases = selectedService?.process ?? recommendation.phases;

  const matchedMembers = useMemo(() => team.filter((member) => {
    const searchable = [member.role, ...(member.skills ?? []), ...(member.expertise ?? [])].join(" ").toLowerCase();
    return matchKeywords.some((keyword) => searchable.includes(keyword));
  }).slice(0, 3), [matchKeywords, team]);

  const squad = matchedMembers.length > 0
    ? matchedMembers.map((member) => ({ name: member.name, role: member.role, note: member.availability || "Availability confirmed during scoping" }))
    : recommendedRoles.map((role, index) => ({ name: `Squad role ${index + 1}`, role, note: "Matched specialist confirmed after scope review" }));

  const brief = useMemo(() => [
    "GEEKYACE ACEMATCH PROJECT BRIEF",
    "",
    `Primary goal: ${selectedGoal}`,
    `Recommended studio: ${studio.name}`,
    `Service interest: ${selectedService?.title ?? "To be confirmed through discovery"}`,
    `Primary audience: ${audience}`,
    `Current stage: ${stage}`,
    `Preferred timing: ${timeline}`,
    `Investment range: ${budget}`,
    `Project context: ${context.trim()}`,
    "",
    `Suggested squad: ${recommendedRoles.join(", ")}`,
    `Suggested phases: ${recommendedPhases.join(" → ")}`,
    `Starting deliverables: ${recommendedDeliverables.join("; ")}`,
    "",
    "Note: This is a planning recommendation. Final scope, team, timing, and cost are confirmed after discovery.",
  ].join("\n"), [audience, budget, context, recommendedDeliverables, recommendedPhases, recommendedRoles, selectedGoal, selectedService?.title, stage, studio.name, timeline]);

  const reset = () => {
    setStep(0); setGoal(""); setAudience(""); setStage(""); setTimeline(""); setBudget(""); setContext(""); setServiceInterest(""); setCopied(false);
  };

  const copyBrief = async () => {
    await navigator.clipboard.writeText(brief);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const downloadBrief = () => {
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "geekyace-acematch-brief.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  const setSimpleAnswer = (value: string) => {
    if (step === 1) setAudience(value);
    if (step === 2) setStage(value);
    if (step === 3) setTimeline(value);
  };

  const simpleOptions = step === 1 ? audiences : step === 2 ? stages : timelines;
  const simpleValue = step === 1 ? audience : step === 2 ? stage : timeline;

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="premium-noise relative overflow-hidden bg-[#07110c] pb-32 pt-20 text-white sm:pt-24">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-70" />
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-3xl" />
        <Container>
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-green-300"><Sparkles className="h-4 w-4" />AceMatch 2.0 · Service-aware squad builder</span>
            <h1 className="text-balance mt-6 text-4xl font-black leading-[1.03] sm:text-6xl lg:text-7xl">Build your project squad in about 90 seconds.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">Carry a marketplace service into the questionnaire or begin with the outcome. Get a recommended studio, starting roles, delivery phases, and a reusable buyer brief—no signup required.</p>
          </div>
        </Container>
      </section>

      <section className="relative -mt-20 pb-24">
        <Container>
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_40px_100px_-38px_rgba(2,8,23,.38)]">
            {step < 5 ? (
              <div className="grid lg:grid-cols-[300px_1fr]">
                <aside className="bg-slate-950 p-7 text-white sm:p-9">
                  <div className="flex items-center gap-3 text-sm font-bold text-green-400"><Target className="h-5 w-5" />Your project signal</div>
                  <div className="mt-8 space-y-5">
                    {["Outcome", "Audience", "Starting point", "Timing", "Brief"].map((label, index) => (
                      <div key={label} className="flex items-center gap-3">
                        <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-black ${index < step ? "border-green-400 bg-green-400 text-slate-950" : index === step ? "border-green-400 text-green-400" : "border-white/15 text-slate-600"}`}>{index < step ? <Check className="h-4 w-4" /> : index + 1}</div>
                        <span className={index <= step ? "font-bold text-white" : "text-slate-600"}>{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-green-400 transition-all duration-500" style={{ width: `${((step + 1) / 5) * 100}%` }} /></div>
                  <p className="mt-3 text-xs text-slate-500">About 90 seconds · No signup</p>
                </aside>

                <div className="min-h-[590px] p-7 sm:p-10 lg:p-12">
                  <AnimatePresence mode="wait">
                    <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.28 }}>
                      <span className="brand-eyebrow">{questions[step].eyebrow}</span>
                      <h2 className="text-balance mt-5 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{questions[step].title}</h2>
                      <p className="mt-4 max-w-2xl leading-7 text-slate-600">{questions[step].copy}</p>

                      {step === 0 && selectedService && (
                        <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-green-200 bg-green-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.16em] text-green-700">Marketplace service carried into AceMatch</p>
                            <p className="mt-2 text-lg font-black text-slate-950">{selectedService.title}</p>
                            <p className="mt-1 text-sm leading-6 text-slate-600">{selectedService.summary}</p>
                          </div>
                          <button type="button" onClick={() => setServiceInterest("")} className="shrink-0 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-black text-green-800 transition hover:border-green-400">
                            Remove service
                          </button>
                        </div>
                      )}

                      {step === 0 && (
                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                          {goals.map((item) => { const Icon = item.icon; const active = goal === item.id; return <button key={item.id} type="button" onClick={() => setGoal(item.id)} className={`group flex items-start gap-4 rounded-2xl border p-5 text-left transition-all ${active ? "border-green-500 bg-green-50 shadow-lg shadow-green-900/5" : "border-slate-200 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"}`}><span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${active ? "bg-green-600 text-white" : "bg-slate-100 text-slate-700 group-hover:bg-green-100 group-hover:text-green-700"}`}><Icon className="h-5 w-5" /></span><span><span className="block font-black text-slate-950">{item.label}</span><span className="mt-1 block text-sm leading-6 text-slate-500">{item.description}</span></span></button>; })}
                        </div>
                      )}

                      {step > 0 && step < 4 && (
                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                          {simpleOptions.map((option) => { const active = simpleValue === option; return <button key={option} type="button" onClick={() => setSimpleAnswer(option)} className={`flex min-h-20 items-center justify-between rounded-2xl border px-5 py-4 text-left font-bold transition-all ${active ? "border-green-500 bg-green-50 text-green-800 shadow-lg shadow-green-900/5" : "border-slate-200 text-slate-800 hover:-translate-y-1 hover:border-green-300 hover:shadow-md"}`}><span>{option}</span><span className={`grid h-7 w-7 place-items-center rounded-full border ${active ? "border-green-600 bg-green-600 text-white" : "border-slate-200 text-transparent"}`}><Check className="h-4 w-4" /></span></button>; })}
                        </div>
                      )}

                      {step === 4 && (
                        <div className="mt-8 grid gap-7">
                          <div><p className="text-sm font-black text-slate-950">Working investment range</p><div className="mt-3 grid gap-3 sm:grid-cols-3">{budgets.map((option) => <button key={option} type="button" onClick={() => setBudget(option)} className={`rounded-xl border px-4 py-3 text-left text-sm font-bold transition ${budget === option ? "border-green-500 bg-green-50 text-green-800" : "border-slate-200 text-slate-700 hover:border-green-300"}`}>{option}</button>)}</div></div>
                          <div><label htmlFor="project-context" className="text-sm font-black text-slate-950">Project context <span className="font-medium text-slate-500">(10 characters minimum)</span></label><textarea id="project-context" value={context} onChange={(event) => setContext(event.target.value)} rows={5} placeholder="Example: We need a premium website and lead journey for a consulting offer launching in October..." className="mt-3 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100" /></div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
                    <button type="button" onClick={() => setStep((value) => Math.max(0, value - 1))} disabled={step === 0} className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold text-slate-600 transition hover:bg-slate-100 disabled:invisible"><ArrowLeft className="h-4 w-4" />Back</button>
                    <button type="button" onClick={() => setStep((value) => value + 1)} disabled={!canContinue} className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5 hover:bg-green-500 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none">{step === 4 ? "Build my squad" : "Continue"}<ArrowRight className="h-4 w-4" /></button>
                  </div>
                </div>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="premium-noise relative overflow-hidden bg-slate-950 p-8 text-white sm:p-12">
                    <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-60" />
                    <div className="relative">
                      <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-green-400"><Sparkles className="h-4 w-4" />AceMatch recommendation</span>
                      <h2 className="mt-5 text-4xl font-black leading-tight">{recommendation.title}</h2>
                      <p className="mt-3 font-bold text-green-300">{studio.name}</p>
                      {selectedService && <p className="mt-2 text-sm font-black text-white">Service focus: {selectedService.title}</p>}
                      <p className="mt-5 leading-7 text-slate-300">{studio.outcome} Discovery confirms the exact scope, availability, timeline, and cost.</p>
                      <div className="mt-8 space-y-3">{recommendedDeliverables.map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" /><span className="font-bold">{item}</span></div>)}</div>
                      <Link href={selectedService ? `/services/${selectedService.slug}` : recommendation.route} className="mt-8 inline-flex items-center gap-2 font-black text-green-400 hover:text-green-300">{selectedService ? "Review the service guide" : "Explore this studio"} <ArrowRight className="h-4 w-4" /></Link>
                    </div>
                  </div>

                  <div className="p-8 sm:p-12">
                    <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-green-100 text-green-700"><Users className="h-5 w-5" /></span><div><p className="text-xs font-black uppercase tracking-[0.18em] text-green-700">Suggested starting squad</p><h3 className="text-xl font-black text-slate-950">Roles matched to the brief</h3></div></div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">{squad.map((member) => <article key={`${member.name}-${member.role}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><span className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 text-xs font-black text-green-300">{member.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span><h4 className="mt-4 font-black text-slate-950">{member.name}</h4><p className="mt-1 text-sm font-bold text-green-700">{member.role}</p><p className="mt-2 text-xs leading-5 text-slate-500">{member.note}</p></article>)}</div>
                    <div className="mt-7"><p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Suggested delivery path</p><div className="mt-3 flex flex-wrap gap-2">{recommendedPhases.map((phase, index) => <span key={phase} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700">{index + 1}. {phase}</span>)}</div></div>
                  </div>
                </div>

                <div className="border-t border-slate-200 p-8 sm:p-12">
                  <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-green-100 text-green-700"><Clipboard className="h-5 w-5" /></span><div><p className="text-xs font-black uppercase tracking-[0.18em] text-green-700">Ready to share</p><h3 className="text-xl font-black text-slate-950">Your reusable buyer brief</h3></div></div>
                  <pre className="mt-6 max-h-80 overflow-auto whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-5 font-sans text-sm leading-7 text-slate-700">{brief}</pre>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <button type="button" onClick={copyBrief} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 font-bold text-slate-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"><Copy className="h-4 w-4" />{copied ? "Copied" : "Copy brief"}</button>
                    <button type="button" onClick={downloadBrief} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 font-bold text-slate-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"><Download className="h-4 w-4" />Download .txt</button>
                    <Link href={`/contact?brief=${encodeURIComponent(brief)}#contact-form`} className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-green-500">Send to GeekyAce <ArrowRight className="h-4 w-4" /></Link>
                  </div>
                  <button type="button" onClick={reset} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900"><RotateCcw className="h-4 w-4" />Start over</button>
                  <div className="mt-8 flex items-start gap-3 rounded-2xl bg-green-50 p-4 text-sm leading-6 text-green-900"><Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />This recommendation is a planning tool, not a quote or delivery guarantee. The enquiry form will be pre-filled with your brief.</div>
                </div>
              </motion.div>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}
