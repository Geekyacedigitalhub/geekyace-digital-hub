"use client";

const tags = [
  "Next.js",
  "TypeScript",
  "React",
  "PostgreSQL",
  "Prisma",
  "Shopify",
  "Tailwind",
  "OpenAI",
  "Framer Motion",
  "Resend",
  "Node.js",
  "Supabase",
  "Liquid",
  "REST APIs",
  "Webhooks",
  "Railway",
  "Vercel",
  "Stripe",
  "Zod",
];

export default function Marquee() {
  const items = [...tags, ...tags];
  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-3">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="glass-card inline-flex items-center rounded-full border border-slate-200/60 bg-white/70 px-5 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-green-300/60 hover:text-green-700"
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500/70" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
