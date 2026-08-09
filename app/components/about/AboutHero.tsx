import Container from "../ui/Container";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-green-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-50 blur-3xl"
      />

      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          {/* Label */}
          <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-bold text-green-700">
            About Geekyace Digital Hub
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            We Build Digital Solutions
            <br />
            <span className="text-green-600">
              That Move Businesses Forward
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl">
            Geekyace Digital Hub helps businesses turn ideas, challenges,
            and opportunities into modern digital products that are
            practical, scalable, and built for long-term growth.
          </p>

          {/* Highlights */}
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
              <p className="text-2xl font-extrabold text-green-600">
                50+
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-600">
                Projects Delivered
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
              <p className="text-2xl font-extrabold text-green-600">
                15+
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-600">
                Industries Served
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
              <p className="text-2xl font-extrabold text-green-600">
                20+
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-600">
                Technologies
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}