"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Michael Anderson",
    role: "Founder, Bella Vista Restaurant",
    text: "Geekyace Digital Hub transformed our online presence. The new website looks professional, loads quickly, and makes it much easier for customers to discover our restaurant and make reservations.",
  },
  {
    name: "Sarah Williams",
    role: "Operations Manager, Nova Medical Center",
    text: "The team understood our requirements and delivered a professional platform that made appointment management much easier for our patients and staff.",
  },
  {
    name: "David Thompson",
    role: "Director, Urban Properties",
    text: "We needed a modern property platform that could handle our growing listings. Geekyace delivered a clean, responsive solution that made property discovery much easier for our customers.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            Client Feedback
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            We focus on understanding the business behind every project and
            creating digital solutions that deliver real value.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white">
                <Quote className="h-6 w-6" />
              </div>

              {/* Rating */}
              <div className="mt-6 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-green-500 text-green-500"
                  />
                ))}
              </div>

              {/* Testimonial */}
              <p className="mt-6 text-base leading-8 text-slate-600">
                "{testimonial.text}"
              </p>

              {/* Client */}
              <div className="mt-8 border-t border-slate-200 pt-6">
                <h3 className="font-bold text-slate-900">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500">
            Ready to build something that works for your business?
          </p>
        </div>
      </div>
    </section>
  );
}