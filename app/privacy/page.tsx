import Container from "../components/ui/Container";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 sm:py-24">
      <Container>
        <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            Legal
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 leading-8 text-slate-600">
            GeekyAce Digital Hub respects your privacy and is committed to
            protecting information shared with us through our website,
            services, forms, and other digital interactions.
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Information We Collect
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                We may collect information you voluntarily provide when you
                contact us, request a service, submit a project inquiry, or
                interact with features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                How We Use Information
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                Information may be used to respond to inquiries, provide
                requested services, communicate about projects, improve our
                website, and deliver a better client experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Information Protection
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                We take reasonable measures to protect information handled
                through our digital systems and limit access to information
                where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Contact
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                If you have questions about this Privacy Policy, please
                contact GeekyAce Digital Hub through our contact page.
              </p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}