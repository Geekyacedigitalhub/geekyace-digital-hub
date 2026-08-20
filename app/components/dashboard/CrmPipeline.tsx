"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CircleDollarSign, Filter, RefreshCcw, Search, Sparkles } from "lucide-react";
import { previewGrowthLeads } from "@/app/data/v32GrowthOS";

type Status = "NEW" | "CONTACTED" | "QUALIFIED" | "PROPOSAL" | "WON" | "CLOSED";
type CrmLead = { id: string; label: string; service: string; studioId: string; source: string; status: Status; valueBand: string; age: string; nextAction: string };
const columns: Status[] = ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL", "WON"];
const labels: Record<Status, string> = { NEW: "New", CONTACTED: "Contacted", QUALIFIED: "Qualified", PROPOSAL: "Proposal", WON: "Won", CLOSED: "Closed" };

const previewLeads: CrmLead[] = previewGrowthLeads.map((lead) => ({ ...lead }));

export default function CrmPipeline() {
  const [leads, setLeads] = useState<CrmLead[]>(previewLeads);
  const [mode, setMode] = useState<"loading" | "live" | "preview">("loading");
  const [search, setSearch] = useState("");
  const [source, setSource] = useState("ALL");

  async function load() {
    setMode("loading");
    try {
      const response = await fetch("/api/leads", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok || !Array.isArray(data.leads)) throw new Error("Unavailable");
      const live = data.leads.map((lead: Record<string, unknown>): CrmLead => ({
        id: String(lead.id),
        label: String(lead.businessName || lead.name || lead.projectType || "Buyer enquiry"),
        service: String(lead.recommendedService || lead.projectType || "Discovery needed"),
        studioId: String(lead.studioId || "unassigned"),
        source: String(lead.source || "CONTACT"),
        status: columns.includes(String(lead.status) as Status) || lead.status === "CLOSED" ? String(lead.status) as Status : "NEW",
        valueBand: String(lead.budget || "Not set"),
        age: new Date(String(lead.createdAt)).toLocaleDateString(),
        nextAction: String(lead.mainGoal || "Review and qualify").slice(0, 90),
      }));
      if (live.length > 0) { setLeads(live); setMode("live"); } else { setLeads(previewLeads); setMode("preview"); }
    } catch { setLeads(previewLeads); setMode("preview"); }
  }

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => void load());
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const filtered = useMemo(() => leads.filter((lead) => {
    const query = search.toLowerCase().trim();
    return (!query || `${lead.label} ${lead.service} ${lead.nextAction}`.toLowerCase().includes(query)) && (source === "ALL" || lead.source === source);
  }), [leads, search, source]);

  async function move(lead: CrmLead, status: Status) {
    setLeads((current) => current.map((item) => item.id === lead.id ? { ...item, status } : item));
    if (mode !== "live") return;
    const response = await fetch(`/api/leads/${lead.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
    if (!response.ok) { setLeads((current) => current.map((item) => item.id === lead.id ? lead : item)); }
  }

  return (
    <div className="mx-auto max-w-[1600px] px-5 py-10 sm:px-7 lg:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-green-800"><Sparkles className="h-4 w-4" />Growth operations</span><h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Buyer pipeline and next actions.</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">See where every enquiry came from, what the buyer wants, and what must happen next.</p></div><div className={`rounded-2xl border px-4 py-3 text-sm font-bold ${mode === "live" ? "border-green-200 bg-green-50 text-green-800" : "border-amber-200 bg-amber-50 text-amber-900"}`}>{mode === "loading" ? "Checking live enquiries…" : mode === "live" ? "Live database records" : "Local preview records"}</div></div>
      <div className="mt-8 grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_14rem_auto]"><label className="relative"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search buyer, service, or action" className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100" /></label><label className="relative"><Filter className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><select value={source} onChange={(event) => setSource(event.target.value)} className="w-full appearance-none rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm font-bold outline-none focus:border-green-500">{["ALL", "ACEMATCH", "BOOKING", "PROPOSAL", "CONTACT"].map((item) => <option key={item}>{item}</option>)}</select></label><button type="button" onClick={load} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white"><RefreshCcw className="h-4 w-4" />Refresh</button></div>
      <div className="mt-8 grid gap-5 xl:grid-cols-5">{columns.map((column) => { const items = filtered.filter((lead) => lead.status === column); return <section key={column} className="min-h-80 rounded-[1.5rem] border border-slate-200 bg-slate-100/70 p-3"><div className="flex items-center justify-between px-2 py-2"><h2 className="font-black text-slate-950">{labels[column]}</h2><span className="rounded-full bg-white px-2.5 py-1 text-xs font-black text-slate-500 shadow-sm">{items.length}</span></div><div className="mt-2 space-y-3">{items.map((lead) => <article key={lead.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><div className="flex items-start justify-between gap-3"><span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-[.12em] text-green-800">{lead.source}</span><span className="text-xs font-bold text-slate-400">{lead.age}</span></div><h3 className="mt-4 font-black leading-6 text-slate-950">{lead.label}</h3><p className="mt-1 text-sm font-bold text-green-700">{lead.service}</p><p className="mt-3 text-sm leading-6 text-slate-600">{lead.nextAction}</p><div className="mt-4 flex items-center gap-2 text-xs font-black text-slate-500"><CircleDollarSign className="h-4 w-4 text-green-700" />{lead.valueBand}</div><select aria-label={`Move ${lead.label}`} value={lead.status} onChange={(event) => void move(lead, event.target.value as Status)} className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-black text-slate-700 outline-none focus:border-green-500">{[...columns, "CLOSED" as Status].map((status) => <option key={status} value={status}>{labels[status]}</option>)}</select></article>)}{items.length === 0 ? <p className="rounded-2xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-400">No matching opportunities.</p> : null}</div></section>; })}</div>
      <div className="mt-8 flex flex-col gap-4 rounded-[1.5rem] bg-[#07110c] p-6 text-white sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-black uppercase tracking-[.16em] text-green-400">Operating rule</p><p className="mt-2 font-black">Every qualified opportunity needs one owner and one next action.</p></div><a href="/dashboard/analytics" className="inline-flex items-center gap-2 font-black text-green-300">Open attribution analytics <ArrowRight className="h-4 w-4" /></a></div>
    </div>
  );
}
