import {
  CheckCircle2,
  Globe,
  Bot,
  Settings,
  Palette,
  DraftingCompass,
} from "lucide-react";

const skills = [
  {
    icon: Globe,
    title: "Website Development",
  },
  {
    icon: Bot,
    title: "AI Solutions",
  },
  {
    icon: Settings,
    title: "Business Automation",
  },
  {
    icon: Palette,
    title: "Graphic Design",
  },
  {
    icon: DraftingCompass,
    title: "CAD Drafting",
  },
  {
    icon: CheckCircle2,
    title: "Digital Strategy",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-screen-xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}

        <div>

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            About Geekyace
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight text-gray-900">
            Building Smart Digital Solutions

            <span className="block text-green-500">
              For Modern Businesses
            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Geekyace Digital Hub is a modern digital agency helping
            businesses grow through innovative technology, AI-powered
            automation, creative branding, and professional digital
            solutions.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We focus on creating high-performance digital experiences
            that improve productivity, strengthen brands, and help
            companies scale with confidence.
          </p>

          <div className="mt-10 flex gap-4">

            <div className="rounded-2xl bg-white shadow-md px-8 py-6 text-center">

              <h3 className="text-4xl font-bold text-green-500">
                50+
              </h3>

              <p className="text-gray-600 mt-2">
                Projects
              </p>

            </div>

            <div className="rounded-2xl bg-white shadow-md px-8 py-6 text-center">

              <h3 className="text-4xl font-bold text-green-500">
                20+
              </h3>

              <p className="text-gray-600 mt-2">
                Clients
              </p>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">

          <h3 className="text-3xl font-bold mb-8">
            What We Do
          </h3>

          <div className="space-y-5">

            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="flex items-center gap-4 rounded-2xl p-4 hover:bg-green-50 transition"
                >

                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

                    <Icon className="w-6 h-6 text-green-600" />

                  </div>

                  <span className="text-lg font-medium text-gray-800">
                    {skill.title}
                  </span>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}