import Container from "../ui/Container";

const stats = [
  { value: "40+", label: "Products shipped", description: "From marketing sites to production SaaS platforms." },
  { value: "6", label: "Core disciplines", description: "Web, Shopify, AI, SaaS, tooling, automation." },
  { value: "20+", label: "Technologies", description: "Modern frontend, backend, data, cloud, and AI stacks." },
  { value: "12", label: "Countries served", description: "Remote-first, shipping for clients across the world." },
];

export default function ShowcaseStats() {
  return (
    <section className="border-y border-slate-200/70 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid divide-slate-200 md:grid-cols-2 md:divide-x lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`px-4 py-6 ${i % 2 === 0 ? "md:pl-0 md:pr-8" : "md:pl-8 md:pr-0"} lg:px-8 lg:first:pl-0 lg:last:pr-0`}>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-green-700">0{i + 1}</p>
              <p className="mt-4 font-serif text-5xl font-black tracking-tight text-slate-950">{stat.value}</p>
              <h3 className="mt-3 text-base font-bold text-slate-900">{stat.label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{stat.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
