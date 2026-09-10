"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function SupportForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/merchantos-support", {
        method: "POST",
        body: data,
      });
      const body = await response.json().catch(() => null);
      if (!response.ok) throw new Error(body?.message || "Unable to send your support request.");
      form.reset();
      setSuccess(true);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to send your support request.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
      <input className="hidden" tabIndex={-1} autoComplete="off" name="website" aria-hidden="true" />
      <input type="hidden" name="themeName" value="MerchantOS" />

      {success && (
        <div role="status" className="flex gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
          <div>
            <p className="font-semibold">Support request received.</p>
            <p className="mt-1 text-sm">We also sent a confirmation to your email address.</p>
          </div>
        </div>
      )}

      {error && <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">{error}</div>}

      <div className="grid gap-6 md:grid-cols-2">
        <label className="grid gap-2 font-medium text-slate-800">
          Name
          <input name="name" required maxLength={120} autoComplete="name" className="min-h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" />
        </label>
        <label className="grid gap-2 font-medium text-slate-800">
          Email address
          <input name="email" type="email" required maxLength={254} autoComplete="email" className="min-h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" />
        </label>
      </div>

      <label className="grid gap-2 font-medium text-slate-800">
        Shopify store URL
        <input name="storeUrl" type="url" required maxLength={500} placeholder="https://storename.myshopify.com" className="min-h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" />
      </label>

      <label className="grid gap-2 font-medium text-slate-800">
        Describe the problem
        <textarea name="description" required maxLength={5000} rows={8} placeholder="Tell us what happened, where it happened, and the steps to reproduce it." className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100" />
      </label>

      <label className="grid gap-2 font-medium text-slate-800">
        Screenshot or file <span className="text-sm font-normal text-slate-500">(optional, PNG/JPG/WebP/PDF, max 5 MB)</span>
        <input name="attachment" type="file" accept="image/png,image/jpeg,image/webp,application/pdf" className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm" />
      </label>

      <button type="submit" disabled={loading} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60">
        {loading ? "Sending support request..." : <><Send className="h-5 w-5" />Send support request</>}
      </button>

      <p className="text-sm leading-6 text-slate-500">
        MerchantOS support is for theme-related questions and bugs. We aim to reply within two business days.
      </p>
    </form>
  );
}
