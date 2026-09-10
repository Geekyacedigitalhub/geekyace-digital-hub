import Link from "next/link";
import SupportForm from "./SupportForm";

export const metadata = {
  title: "MerchantOS Support | GeekyAce Digital Hub",
  description:
    "Contact GeekyAce Digital Hub for MerchantOS Shopify theme support and bug reports.",
};

export default function MerchantOSSupportPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            MerchantOS Theme Support
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">How can we help?</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Send us the store URL and a clear description of the issue. A screenshot helps us reproduce problems faster.
          </p>
          <Link href="/merchantos/docs" className="mt-7 inline-flex font-semibold text-green-700 hover:text-green-800">
            Read MerchantOS documentation →
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-3xl bg-slate-950 p-7 text-white lg:self-start md:p-9">
            <h2 className="text-2xl font-extrabold">Before you submit</h2>
            <ul className="mt-6 space-y-4 leading-7 text-slate-300">
              <li>Check that the issue still happens in an unedited copy of MerchantOS when possible.</li>
              <li>Include the exact page where the problem happens.</li>
              <li>Explain the steps we can follow to reproduce it.</li>
              <li>Attach a screenshot or PDF when it makes the problem easier to understand.</li>
            </ul>
            <div className="mt-8 border-t border-slate-700 pt-6 text-sm leading-6 text-slate-400">
              <p>Support covers MerchantOS questions and confirmed theme bugs.</p>
              <p className="mt-3">Custom design, custom development, store setup, and third-party app work are separate services.</p>
            </div>
          </aside>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <SupportForm />
          </div>
        </div>
      </section>
    </main>
  );
}
