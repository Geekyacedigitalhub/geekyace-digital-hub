interface ProcessTimelineProps {
  steps: string[];
}

export default function ProcessTimeline({
  steps,
}: ProcessTimelineProps) {
  return (
    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-4xl font-bold text-center">
          Our Process
        </h2>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">

          {steps.map((step, index) => (

            <div
              key={step}
              className="rounded-2xl bg-white p-6 text-center shadow-md"
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">

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