import Container from "../components/ui/Container";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 sm:py-24">
      <Container>
        <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            Legal
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-5 leading-8 text-slate-600">
            These terms describe the general expectations for using the
            GeekyAce Digital Hub website and engaging with our digital
            services.
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Use of Our Website
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                You agree to use this website lawfully and responsibly and
                not to misuse, disrupt, or attempt to compromise our digital
                systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Digital Services
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                Project requirements, timelines, pricing, deliverables, and
                other service conditions may vary depending on the scope and
                nature of each individual project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Intellectual Property
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                Ownership and usage rights for project deliverables should be
                determined according to the agreed terms for each project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Contact
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                If you have questions regarding these terms, please contact
                GeekyAce Digital Hub through our contact page.
              </p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}