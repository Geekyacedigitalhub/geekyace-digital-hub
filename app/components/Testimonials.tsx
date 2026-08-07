import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Anderson",
    role: "CEO, Apex Logistics",
    quote:
      "Geekyace Digital Hub transformed our online presence with a modern website that exceeded our expectations. Their professionalism and attention to detail were outstanding.",
  },
  {
    name: "Sarah Williams",
    role: "Founder, Bloom Creative",
    quote:
      "The AI automation solution developed by Geekyace helped us save hours of manual work every week. The entire process was smooth and efficient.",
  },
  {
    name: "Michael Johnson",
    role: "Director, Prime Consult",
    quote:
      "From branding to website development, Geekyace delivered exactly what we needed. I highly recommend their services to any growing business.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-6">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in helping businesses grow through technology,
            creativity, and innovative digital solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex gap-1 mb-6">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    className="w-5 h-5 fill-green-500 text-green-500"
                  />

                ))}

              </div>

              <p className="text-gray-600 leading-8 italic">
                "{item.quote}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-green-600">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}