import Link from "next/link";

export const metadata = {
  title: "MerchantOS Documentation | GeekyAce Digital Hub",
  description:
    "Setup, customization, troubleshooting, and support documentation for the MerchantOS Shopify theme.",
};

const sections = [
  {
    title: "Getting started",
    items: [
      "Install MerchantOS from Shopify and open Online Store → Themes → Customize.",
      "Set your logo, typography, colors, page width, buttons, cart behavior, and other global options in Theme settings.",
      "Assign menus in the Header and Footer sections, then review the desktop and mobile navigation previews.",
      "Add your own products, collections, pages, policies, images, and videos before publishing the theme.",
    ],
  },
  {
    title: "Product pages",
    items: [
      "MerchantOS supports product variants, quantity selection, swatches, rich media, pickup availability, Shop Pay payment terms, accelerated checkout, sticky purchase controls, and native Shopify product recommendations.",
      "Use the default product template for a balanced retail layout. Alternate editorial and technical templates are available for storytelling or specification-heavy products.",
      "Gift card products can optionally be sent to a recipient with a name, email, message, and scheduled delivery date.",
      "Use Shopify metafields for structured specifications and product-specific information instead of hardcoding product data into the theme.",
    ],
  },
  {
    title: "Collections and search",
    items: [
      "Collection pages support Shopify storefront filtering, sorting, swatches, quick add, quick view, multiple catalog views, and pagination.",
      "Search supports products, articles, pages, and collections, with Shopify faceted filters available when configured in Search & Discovery.",
      "Large catalogs can use the technical and wholesale-oriented layouts for denser product discovery and ordering workflows.",
    ],
  },
  {
    title: "Cart and checkout",
    items: [
      "MerchantOS includes a cart drawer and full cart page with quantity updates, discount display, cart notes, shipping-progress messaging, and accelerated checkout buttons.",
      "Discounts, taxes, shipping rates, checkout, and payment processing are controlled by Shopify and your store settings.",
      "Do not add fake stock, fake customer activity, or misleading urgency content. Any inventory or promotional messaging should reflect real merchant data or a clearly configured promotion.",
    ],
  },
  {
    title: "Localization and accessibility",
    items: [
      "MerchantOS is built for Shopify localization and includes RTL architecture for right-to-left languages.",
      "Keep image alt text meaningful, preserve heading order, and test custom content for color contrast and keyboard access.",
      "After adding apps or custom code, re-test menus, dialogs, forms, product options, cart actions, and checkout on mobile and desktop.",
    ],
  },
];

const faqs = [
  [
    "Can GeekyAce customize my store for me?",
    "Theme support covers MerchantOS questions and bugs. Store setup, custom development, app integrations, and design services are separate services and are not included with the theme purchase.",
  ],
  [
    "What should I do before editing theme code?",
    "Duplicate your theme first. Custom code can affect updates and support, so keep a backup and document every code change.",
  ],
  [
    "Does MerchantOS require an app?",
    "Core theme functionality does not require a third-party app. Some Shopify platform features, such as advanced Search & Discovery configuration or app blocks, depend on Shopify or apps selected by the merchant.",
  ],
  [
    "How do I report a MerchantOS bug?",
    "Use the MerchantOS support form and include your store URL, a clear description, steps to reproduce the problem, and a screenshot when possible.",
  ],
  [
    "How quickly will support reply?",
    "MerchantOS theme-support requests are answered within two business days. Critical confirmed theme bugs are prioritized.",
  ],
];

export default function MerchantOSDocsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-flex rounded-full bg-green-500/15 px-4 py-2 text-sm font-semibold text-green-300">
            MerchantOS Shopify Theme
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
            MerchantOS documentation
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Setup guidance, feature notes, troubleshooting basics, and support information for merchants using MerchantOS.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/merchantos/support"
              className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-500"
            >
              Contact MerchantOS support
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-600 px-5 py-3 font-semibold text-white transition hover:border-slate-400"
            >
              Agency services
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[240px_1fr] lg:py-24">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-wider text-slate-500">On this page</p>
          <nav className="mt-4 grid gap-2 text-sm">
            {sections.map((section) => (
              <a key={section.title} href={`#${section.title.toLowerCase().replaceAll(" ", "-")}`} className="text-slate-600 hover:text-green-700">
                {section.title}
              </a>
            ))}
            <a href="#faq" className="text-slate-600 hover:text-green-700">FAQ</a>
            <a href="#support-policy" className="text-slate-600 hover:text-green-700">Support policy</a>
          </nav>
        </aside>

        <div className="min-w-0">
          <div className="space-y-14">
            {sections.map((section) => (
              <section key={section.title} id={section.title.toLowerCase().replaceAll(" ", "-")} className="scroll-mt-8">
                <h2 className="text-3xl font-extrabold tracking-tight">{section.title}</h2>
                <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                  {section.items.map((item) => (
                    <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">{item}</li>
                  ))}
                </ul>
              </section>
            ))}

            <section id="faq" className="scroll-mt-8">
              <h2 className="text-3xl font-extrabold tracking-tight">FAQ</h2>
              <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
                {faqs.map(([question, answer]) => (
                  <details key={question} className="group p-5">
                    <summary className="cursor-pointer font-semibold text-slate-900">{question}</summary>
                    <p className="mt-3 leading-7 text-slate-600">{answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section id="support-policy" className="scroll-mt-8 rounded-3xl bg-slate-950 p-7 text-white md:p-10">
              <h2 className="text-3xl font-extrabold">Support policy</h2>
              <p className="mt-5 leading-7 text-slate-300">
                GeekyAce Digital Hub supports MerchantOS theme-related questions and confirmed theme bugs. We aim to answer support requests within two business days. Critical confirmed bugs are prioritized for correction.
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                Theme support does not include custom store design, custom development, third-party app setup, data entry, migrations, or bespoke integrations. Those services can be requested separately through the GeekyAce Digital Hub contact page.
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                Before following any custom-code tutorial or editing MerchantOS files, duplicate your theme. Custom code can affect compatibility with future theme updates.
              </p>
              <Link href="/merchantos/support" className="mt-7 inline-flex rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-500">
                Open a support request
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
