interface ProcessTimelineProps {
  steps: string[];
}

export default function ProcessTimeline({
  steps,
}: ProcessTimelineProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-28">

      <div aria-hidden="true" className="absolute left-1/2 top-0 h-72 w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <p className="brand-eyebrow left-1/2 -translate-x-1/2">A clear path</p>
        <h2 className="mb-12 mt-5 text-center text-4xl font-black text-slate-950 sm:text-5xl">
          Our Process
        </h2>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">

          {steps.map((step, index) => (

            <div
              key={step}
              className="premium-card group rounded-[1.75rem] p-6 text-center transition duration-500 hover:-translate-y-2 hover:border-green-400"
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-xl font-black text-green-400 transition group-hover:bg-green-600 group-hover:text-white">

                {index + 1}

              </div>

              <h3 className="mt-6 font-semibold">
                {step}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
