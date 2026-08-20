import { CheckCircle } from "lucide-react";

interface FeatureListProps {
  title: string;
  items: string[];
}

export default function FeatureList({
  title,
  items,
}: FeatureListProps) {
  const isTechnology = title.toLowerCase().includes("technolog");

  return (
    <section className={`relative overflow-hidden py-20 sm:py-24 ${isTechnology ? "bg-[#07110c] text-white" : "bg-white"}`}>

      {isTechnology ? <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-60" /> : null}

      <div className="relative mx-auto max-w-7xl px-6">

        <span className={isTechnology ? "text-xs font-black uppercase tracking-[0.2em] text-green-400" : "brand-eyebrow"}>Capabilities</span>
        <h2 className={`mb-10 mt-4 text-4xl font-black sm:text-5xl ${isTechnology ? "text-white" : "text-slate-950"}`}>
          {title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {items.map((item) => (

            <div
              key={item}
              className={`group flex items-center gap-4 rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${isTechnology ? "border-white/10 bg-white/5 text-slate-200 hover:border-green-400/40 hover:bg-white/10" : "premium-card border-slate-200 bg-white text-slate-800 hover:border-green-400"}`}
            >

              <CheckCircle className={`h-6 w-6 shrink-0 ${isTechnology ? "text-green-400" : "text-green-600"}`} />

              <span className="font-medium">
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
