import { Star } from "lucide-react";

import Container from "@/app/components/ui/Container";
import SectionHeading from "@/app/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    review:
      "Geekyace Digital Hub transformed our online presence with a modern website and seamless automation. Their professionalism exceeded our expectations.",
  },
  {
    name: "Michael Adams",
    role: "Founder, GrowthLab",
    review:
      "The AI chatbot they developed significantly improved our customer support and reduced response times. Highly recommended.",
  },
  {
    name: "Emily Carter",
    role: "Operations Manager",
    review:
      "Their workflow automation saved our team countless hours every week. Communication and delivery were excellent from start to finish.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          badge="CLIENT TESTIMONIALS"
          title="Trusted by Businesses That Want Results"
          description="We build long-term relationships by delivering quality solutions and exceptional client experiences."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-600">
                "{testimonial.review}"
              </p>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <h4 className="font-semibold text-slate-900">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}