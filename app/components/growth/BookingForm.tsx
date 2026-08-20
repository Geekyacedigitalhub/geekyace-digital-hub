"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarCheck2, CheckCircle2, Clock3, LoaderCircle, ShieldCheck } from "lucide-react";
import { marketplaceServices } from "@/app/data/serviceMarketplace";
import { consultationSlots } from "@/app/data/v32GrowthOS";

export default function BookingForm({ initialService = "" }: { initialService?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<{ reference: string; preview: boolean } | null>(null);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to reserve this consultation request.");
      setSuccess({ reference: data.reference, preview: Boolean(data.preview) });
      form.reset();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to reserve this consultation request.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-[2rem] border border-green-200 bg-green-50 p-8 sm:p-10">
        <CheckCircle2 className="h-11 w-11 text-green-700" />
        <h2 className="mt-5 text-3xl font-black text-slate-950">Consultation request recorded.</h2>
        <p className="mt-4 leading-7 text-slate-600">Reference <strong>{success.reference}</strong>. {success.preview ? "This localhost preview did not write to the production database." : "The GeekyAce team will confirm the final meeting time by email."}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/client-portal" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-black text-white">Preview the client workspace <ArrowRight className="h-4 w-4" /></Link><button type="button" onClick={() => setSuccess(null)} className="rounded-full border border-green-300 bg-white px-6 py-3.5 font-black text-green-800">Book another time</button></div>
      </div>
    );
  }

  const field = "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-4 focus:ring-green-100";

  return (
    <form onSubmit={submit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-9">
      <div className="flex items-start justify-between gap-4"><div><span className="brand-eyebrow">Consultation request</span><h2 className="mt-4 text-3xl font-black text-slate-950">Choose a useful starting point.</h2></div><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-green-100 text-green-700"><CalendarCheck2 className="h-5 w-5" /></span></div>
      <p className="mt-4 leading-7 text-slate-600">Times are requested in UTC and confirmed by the team. No payment is taken on this page.</p>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-black text-slate-800">Full name<input name="name" required maxLength={100} className={field} placeholder="Your name" /></label>
        <label className="text-sm font-black text-slate-800">Business email<input name="email" type="email" required maxLength={160} className={field} placeholder="you@company.com" /></label>
        <label className="text-sm font-black text-slate-800">Company or brand<input name="company" maxLength={120} className={field} placeholder="Optional" /></label>
        <label className="text-sm font-black text-slate-800">Timezone<input name="timezone" required maxLength={80} className={field} placeholder="Example: WAT / UTC+1" /></label>
      </div>
      <label className="mt-5 block text-sm font-black text-slate-800">Service or outcome<select name="serviceSlug" required defaultValue={initialService} className={field}><option value="" disabled>Select the closest service</option>{marketplaceServices.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}</select></label>
      <fieldset className="mt-6"><legend className="text-sm font-black text-slate-800">Preferred consultation time</legend><div className="mt-3 grid gap-3 sm:grid-cols-2">{consultationSlots.map((slot) => <label key={slot} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 p-4 text-sm font-bold text-slate-700 transition has-[:checked]:border-green-500 has-[:checked]:bg-green-50 has-[:checked]:text-green-900"><input type="radio" name="preferredSlot" value={slot} required className="h-4 w-4 accent-green-600" /><Clock3 className="h-4 w-4 text-green-700" />{slot}</label>)}</div></fieldset>
      <label className="mt-6 block text-sm font-black text-slate-800">What should we prepare for?<textarea name="notes" rows={5} maxLength={1200} className={field} placeholder="Share the goal, problem, or decision you want to discuss." /></label>
      <label className="mt-5 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600"><input type="checkbox" name="consent" value="true" required className="mt-1 h-4 w-4 accent-green-600" /><span>I agree that GeekyAce may use these details to respond to this consultation request. <Link href="/privacy" className="font-black text-green-800 underline">Privacy policy</Link>.</span></label>
      {error ? <p role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{error}</p> : null}
      <button type="submit" disabled={submitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-green-500 disabled:cursor-wait disabled:opacity-60">{submitting ? <><LoaderCircle className="h-4 w-4 animate-spin" />Recording request</> : <>Request this consultation <ArrowRight className="h-4 w-4" /></>}</button>
      <p className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-slate-500"><ShieldCheck className="h-4 w-4 text-green-700" />No payment · No automatic calendar booking · Human confirmation</p>
    </form>
  );
}
