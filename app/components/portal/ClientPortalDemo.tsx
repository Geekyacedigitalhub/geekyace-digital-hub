"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock3, Download, FileText, FolderKanban, LayoutDashboard, LockKeyhole, MessageSquareText, Send, ShieldCheck } from "lucide-react";
import { previewPortalProject } from "@/app/data/v32GrowthOS";

type Tab = "overview" | "files" | "updates" | "feedback";

const tabs: { id: Tab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "files", label: "Files", icon: FileText },
  { id: "updates", label: "Updates", icon: MessageSquareText },
  { id: "feedback", label: "Feedback", icon: Send },
];

export default function ClientPortalDemo() {
  const [entered, setEntered] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [feedback, setFeedback] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [entered]);

  function submitFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (feedback.trim().length < 10) {
      setNotice("Please add a little more context before saving the demo note.");
      return;
    }
    setNotice("Demo feedback saved in this preview. No information was sent anywhere.");
    setFeedback("");
  }

  if (!entered) {
    return (
      <section className="premium-noise relative overflow-hidden bg-[#07110c] py-24 text-white sm:py-28 lg:py-32">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-60" />
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-[34rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-300/20 bg-green-300/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-green-300"><LockKeyhole className="h-4 w-4" /> Client workspace preview</span>
              <h1 className="text-balance mt-7 text-5xl font-black leading-[.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">A calmer way to review, approve, and move work forward.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Preview the workspace clients will use for milestones, files, decisions, updates, and structured feedback. The demonstration contains no real client data.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => setEntered(true)} className="inline-flex items-center justify-center gap-2 rounded-full bg-green-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-green-300">Open demo workspace <ArrowRight className="h-4 w-4" /></button>
                <Link href="/book" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-black text-white transition hover:bg-white/10">Book a consultation</Link>
              </div>
            </div>
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-7 sm:p-9">
              <div className="flex items-center justify-between"><span className="inline-flex items-center gap-2 text-sm font-black text-green-300"><ShieldCheck className="h-5 w-5" /> Northstar demo</span><span className="rounded-full bg-green-400/10 px-3 py-1.5 text-xs font-black text-green-300">On track</span></div>
              <h2 className="mt-7 text-3xl font-black">Digital launch system</h2>
              <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[68%] rounded-full bg-green-400" /></div>
              <div className="mt-3 flex justify-between text-xs font-bold text-slate-400"><span>Project progress</span><span>68%</span></div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-xs font-black uppercase tracking-[.14em] text-slate-500">Next milestone</p><p className="mt-2 font-black text-white">Responsive build review</p></div><div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-xs font-black uppercase tracking-[.14em] text-slate-500">Next meeting</p><p className="mt-2 font-black text-white">Thursday · 2:00 PM UTC</p></div></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 py-10 sm:py-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900 sm:flex-row sm:items-center sm:justify-between"><span><strong>Demo mode:</strong> this fictional workspace contains no client information and does not send or upload data.</span><button type="button" onClick={() => setEntered(false)} className="font-black underline underline-offset-4">Leave demo</button></div>
        <header className="rounded-[2rem] bg-[#07110c] p-7 text-white shadow-xl sm:p-9">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div><span className="text-xs font-black uppercase tracking-[.18em] text-green-400">{previewPortalProject.client}</span><h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{previewPortalProject.project}</h1><div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-xs font-black text-green-300">{previewPortalProject.status}</span><span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-black text-slate-300">{previewPortalProject.health}</span></div></div>
            <div className="w-full max-w-md"><div className="flex justify-between text-sm font-bold text-slate-300"><span>Overall progress</span><span>{previewPortalProject.progress}%</span></div><div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-green-400" style={{ width: `${previewPortalProject.progress}%` }} /></div></div>
          </div>
        </header>

        <div className="mt-6 grid gap-6 lg:grid-cols-[16rem_1fr]">
          <aside className="h-fit rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm lg:sticky lg:top-24">
            <nav aria-label="Client workspace sections" role="tablist" className="grid gap-1">{tabs.map((tab) => { const Icon = tab.icon; const active = activeTab === tab.id; return <button key={tab.id} type="button" role="tab" aria-selected={active} onClick={() => { setActiveTab(tab.id); setNotice(""); }} className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-sm font-black transition ${active ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-green-50 hover:text-green-800"}`}><Icon className="h-4 w-4" />{tab.label}</button>; })}</nav>
            <div className="mt-3 rounded-2xl bg-green-50 p-4"><p className="text-xs font-black uppercase tracking-[.14em] text-green-800">Project owner</p><p className="mt-2 text-sm font-bold text-slate-700">GeekyAce delivery team</p><Link href="/contact" className="mt-3 inline-flex items-center gap-1 text-xs font-black text-green-800">Ask a question <ArrowRight className="h-3 w-3" /></Link></div>
          </aside>

          <div>
            {notice ? <div role="status" className="mb-5 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-bold text-green-900">{notice}</div> : null}

            {activeTab === "overview" ? <div className="space-y-6"><div className="grid gap-5 md:grid-cols-3">{[["Next milestone", previewPortalProject.nextMilestone, Clock3], ["Next meeting", previewPortalProject.nextMeeting, MessageSquareText], ["Commercial health", previewPortalProject.budgetStatus, ShieldCheck]].map(([label, value, Icon]) => <article key={String(label)} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"><Icon className="h-5 w-5 text-green-700" /><p className="mt-5 text-xs font-black uppercase tracking-[.14em] text-slate-500">{String(label)}</p><p className="mt-2 font-black text-slate-950">{String(value)}</p></article>)}</div><div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><div className="flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-[.14em] text-green-700">Delivery plan</p><h2 className="mt-2 text-2xl font-black text-slate-950">Milestones and approvals</h2></div><FolderKanban className="h-7 w-7 text-slate-300" /></div><div className="mt-7 space-y-3">{previewPortalProject.milestones.map((milestone, index) => <div key={milestone.title} className="flex gap-4 rounded-2xl border border-slate-200 p-4"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-black ${milestone.status === "Complete" ? "bg-green-600 text-white" : milestone.status === "In progress" ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-500"}`}>{index + 1}</span><div><p className="font-black text-slate-950">{milestone.title}</p><p className="mt-1 text-sm text-slate-500">{milestone.status} · {milestone.date}</p></div></div>)}</div></div></div> : null}

            {activeTab === "files" ? <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><p className="text-xs font-black uppercase tracking-[.14em] text-green-700">Controlled handoff</p><h2 className="mt-2 text-3xl font-black text-slate-950">Project files and review links</h2><p className="mt-3 text-slate-600">Every deliverable has a clear state, owner, and review action.</p><div className="mt-8 space-y-3">{previewPortalProject.deliverables.map((file) => <div key={file.name} className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-slate-700"><FileText className="h-5 w-5" /></span><div><p className="font-black text-slate-950">{file.name}</p><p className="mt-1 text-sm text-slate-500">{file.type} · {file.state}</p></div></div><button type="button" onClick={() => setNotice(`${file.name} is a demo item; no file was downloaded.`)} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-black text-slate-700 transition hover:border-green-300 hover:text-green-800"><Download className="h-4 w-4" />Preview action</button></div>)}</div></div> : null}

            {activeTab === "updates" ? <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><p className="text-xs font-black uppercase tracking-[.14em] text-green-700">Project communication</p><h2 className="mt-2 text-3xl font-black text-slate-950">Decisions and progress updates</h2><div className="mt-8 space-y-5">{previewPortalProject.updates.map((update) => <article key={update.title} className="relative border-l-2 border-green-500 pl-6"><span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-green-600 ring-4 ring-green-100" /><p className="text-xs font-black uppercase tracking-[.14em] text-slate-400">{update.time}</p><h3 className="mt-2 text-xl font-black text-slate-950">{update.title}</h3><p className="mt-2 leading-7 text-slate-600">{update.body}</p></article>)}</div></div> : null}

            {activeTab === "feedback" ? <form onSubmit={submitFeedback} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><p className="text-xs font-black uppercase tracking-[.14em] text-green-700">Structured review</p><h2 className="mt-2 text-3xl font-black text-slate-950">Leave one clear decision or feedback note.</h2><p className="mt-3 leading-7 text-slate-600">In production this would be linked to a milestone and visible to the assigned delivery owner.</p><label htmlFor="portal-feedback" className="mt-7 block text-sm font-black text-slate-800">Demo feedback</label><textarea id="portal-feedback" value={feedback} onChange={(event) => setFeedback(event.target.value)} rows={7} placeholder="Example: The direction is approved. Please use the second headline on the pricing page." className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 leading-7 text-slate-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100" /><button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3.5 font-black text-white transition hover:-translate-y-1 hover:bg-green-500"><Send className="h-4 w-4" />Save demo feedback</button></form> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
