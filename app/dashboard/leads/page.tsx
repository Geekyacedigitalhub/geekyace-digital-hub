"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Inbox, Mail, RefreshCcw, Search } from "lucide-react";

type Lead = {
  id: string;
  name: string | null;
  email: string | null;
  businessName: string | null;
  projectType: string | null;
  mainGoal: string | null;
  timeline: string | null;
  budget: string | null;
  recommendedService: string | null;
  conversationSummary: string | null;
  status: string;
  createdAt: string;
};

const statuses = ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL", "WON", "CLOSED"];

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");

  async function loadLeads() {
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/leads", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok || !Array.isArray(data.leads)) throw new Error(data.message || "Unable to load leads.");
      setLeads(data.leads);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Unable to load leads.");
    } finally { setLoading(false); }
  }

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => void loadLeads());
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const filtered = useMemo(() => leads.filter((lead) => {
    const haystack = [lead.name, lead.email, lead.businessName, lead.projectType, lead.mainGoal].join(" ").toLowerCase();
    return (status === "ALL" || lead.status === status) && haystack.includes(search.toLowerCase());
  }), [leads, search, status]);

  async function updateStatus(id: string, nextStatus: string) {
    const previous = leads;
    setLeads((items) => items.map((lead) => lead.id === id ? { ...lead, status: nextStatus } : lead));
    const response = await fetch(`/api/leads/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status: nextStatus }) });
    if (!response.ok) { setLeads(previous); setError("The status could not be updated."); }
  }

  const count = (value: string) => leads.filter((lead) => lead.status === value).length;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-green-700"><ArrowLeft className="h-4 w-4" />Back to dashboard</Link>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-green-800"><Inbox className="h-4 w-4" />Lead workspace</span><h1 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">Buyer enquiries</h1><p className="mt-3 max-w-2xl leading-7 text-slate-600">Review website and AI enquiries, then move each buyer through a simple qualification pipeline.</p></div><button type="button" onClick={() => void loadLeads()} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-black text-slate-700"><RefreshCcw className="h-4 w-4" />Refresh</button></div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-6">{statuses.map((item) => <button key={item} type="button" onClick={() => setStatus(item)} className={`rounded-2xl border p-4 text-left ${status === item ? "border-green-500 bg-green-50" : "border-slate-200 bg-white"}`}><p className="text-2xl font-black text-slate-950">{count(item)}</p><p className="mt-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-slate-500">{item}</p></button>)}</div>

        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row"><label className="relative flex-1"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search buyer, company, service, or brief" className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-green-500" /></label><select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold text-slate-700"><option value="ALL">All statuses</option>{statuses.map((item) => <option key={item}>{item}</option>)}</select></div>

        {error && <p role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">{error}</p>}
        {loading ? <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-12 text-center font-bold text-slate-500">Loading enquiries…</div> : filtered.length === 0 ? <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center"><Inbox className="mx-auto h-8 w-8 text-slate-300" /><h2 className="mt-4 text-xl font-black text-slate-900">No matching enquiries</h2><p className="mt-2 text-slate-500">New contact and AI leads will appear here.</p></div> : <div className="mt-8 grid gap-5 lg:grid-cols-2">{filtered.map((lead) => <article key={lead.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-green-700">{lead.projectType || lead.recommendedService || "General enquiry"}</p><h2 className="mt-2 text-2xl font-black text-slate-950">{lead.name || "Unnamed buyer"}</h2><p className="mt-1 text-sm text-slate-500">{lead.businessName || "No company provided"}</p></div><select aria-label={`Status for ${lead.name || "lead"}`} value={lead.status} onChange={(event) => void updateStatus(lead.id, event.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-black text-slate-700">{statuses.map((item) => <option key={item}>{item}</option>)}</select></div>{lead.email && <a href={`mailto:${lead.email}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-700"><Mail className="h-4 w-4" />{lead.email}</a>}<div className="mt-5 grid grid-cols-2 gap-3">{[["Budget", lead.budget], ["Timeline", lead.timeline]].map(([label, value]) => <div key={label} className="rounded-xl bg-slate-50 p-4"><p className="text-[0.65rem] font-black uppercase tracking-[0.12em] text-slate-400">{label}</p><p className="mt-2 text-sm font-bold text-slate-800">{value || "Not provided"}</p></div>)}</div>{lead.mainGoal && <div className="mt-5 rounded-xl border border-slate-100 p-4"><p className="text-xs font-black uppercase tracking-[0.12em] text-slate-400">Buyer brief</p><p className="mt-3 max-h-36 overflow-auto whitespace-pre-wrap text-sm leading-6 text-slate-600">{lead.mainGoal}</p></div>}<p className="mt-5 text-xs text-slate-400">Received {new Date(lead.createdAt).toLocaleString()}</p></article>)}</div>}
      </div>
    </main>
  );
}
