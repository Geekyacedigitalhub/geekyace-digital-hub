import {
  Globe,
  Bot,
  Palette,
  DraftingCompass,
  ArrowRight,
} from "lucide-react";

const portfolio = [
  {
    icon: Globe,
    title: "Business Website",
    description:
      "Modern websites designed for businesses and startups.",
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    description:
      "Custom AI assistants for customer support and automation.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Professional logos, branding, and marketing materials.",
  },
  {
    icon: DraftingCompass,
    title: "CAD Drafting",
    description:
      "2D and 3D technical drafting for engineering projects.",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-screen-xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            Our Portfolio
          </span>

          <h2 className="text-5xl font-bold mt-6 text-gray-900">
            Projects We've Delivered
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            A selection of digital solutions showcasing our expertise
            across multiple industries.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {portfolio.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="flex items-center justify-between">

                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                    <Icon className="w-7 h-7 text-green-600" />

                  </div>

                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition" />

                </div>

                <h3 className="text-2xl font-bold mt-8 text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {item.description}
                </p>

                <button className="mt-8 text-green-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">

                  Learn More

                  <ArrowRight className="w-5 h-5" />

                </button>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}