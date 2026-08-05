const skills = [
  "Website Development",
  "AI Solutions",
  "Business Automation",
  "Graphic Design",
  "CAD Drafting",
  "Digital Strategy",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold mb-6">
            About Geekyace
          </span>

          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Building Smart Digital Solutions
            <span className="block text-green-500">
              For Modern Businesses
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Geekyace Digital Hub is a modern digital agency dedicated to
            helping businesses grow through innovative technology,
            creative design, AI-powered automation, and professional
            digital solutions.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe every business deserves powerful digital tools that
            improve efficiency, strengthen branding, and create better
            customer experiences.
          </p>

        </div>

        {/* Right Side */}
        <div className="bg-white rounded-3xl shadow-xl border border-green-100 p-10">

          <h3 className="text-3xl font-bold mb-8">
            What We Do
          </h3>

          <div className="grid gap-5">

            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-50 transition"
              >
                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                  ✓
                </div>

                <span className="text-lg font-medium text-gray-800">
                  {skill}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}