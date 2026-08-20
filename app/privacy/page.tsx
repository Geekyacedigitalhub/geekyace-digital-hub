import Container from "../components/ui/Container";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#07110c_0,#07110c_18rem,#f8fafc_18rem)] py-20 sm:py-24">
      <Container>
        <article className="premium-card mx-auto max-w-4xl rounded-[2rem] p-8 sm:p-12 lg:p-16">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            Legal
          </span>

          <h1 className="mt-6 text-4xl font-black text-slate-950 sm:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-5 leading-8 text-slate-600">
            GeekyAce Digital Hub respects your privacy and is committed to
            protecting information shared with us through our website,
            services, forms, and other digital interactions.
          </p>

          <p className="mt-3 text-sm font-bold text-slate-500">Last updated: August 17, 2026</p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Information you choose to provide
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                We may collect your name, business contact details, company,
                project requirements, budget range, timeline, preferred service,
                and messages when you contact us, request a consultation or
                proposal, use the project planner, or agree to a follow-up.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                How we use information
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                We use submitted information to answer enquiries, assess project
                fit, prepare proposals, coordinate delivery, maintain client and
                project records, protect the website, and improve our services.
                We do not use an enquiry for follow-up unless the form or
                conversation records the required consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                AI assistant
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                Messages sent to GeekyAce AI are processed by our AI service
                provider to generate a response. Please do not submit passwords,
                payment information, confidential records, or other sensitive
                information in the chat. Contact and project details are saved as
                a lead only after you explicitly agree to follow-up storage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Service providers
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                We use specialist providers to operate the website and handle
                submitted information, including Vercel for hosting and file
                storage, Prisma for database services, Resend for transactional
                email, and Google&apos;s Gemini service for the AI assistant. These
                providers process information under their own security and
                privacy terms and only for the relevant service function.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Storage, retention, and security
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                We limit access to administrative and client information and use
                technical safeguards appropriate to the service. We retain
                enquiry and project information only for as long as it remains
                useful for the requested work, legitimate business records, or
                applicable legal obligations, after which it may be deleted or
                anonymized. No internet service can guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Cookies and measurement
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                Essential cookies may be used for secure administrator sessions
                and core website operation. We will provide an appropriate choice
                before enabling non-essential analytics or advertising cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Your choices
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                You may ask us to review, correct, or delete information you
                submitted, or withdraw follow-up consent. Some records may need
                to be retained where required for security, contracts, or legal
                obligations. We do not sell submitted personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Contact us
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                For a privacy question or request, email
                {" "}<a href="mailto:hello@geekyacedigitalhub.com" className="font-bold text-green-700 underline">hello@geekyacedigitalhub.com</a>{" "}
                or use our <Link href="/contact" className="font-bold text-green-700 underline">contact page</Link>.
              </p>
            </section>
          </div>
        </article>
      </Container>
    </main>
  );
}
