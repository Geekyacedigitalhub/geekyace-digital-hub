import Link from "next/link";

import Container from "../ui/Container";
import { services } from "@/app/data/services";

export default function ServicesPreview() {
  const featuredServices = services.filter(
    (service) => service.featured
  );

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-28">

      <div aria-hidden="true" className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-green-100/80 blur-3xl" />

      <Container>

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="brand-eyebrow">Our Services</span>


          <h2 className="text-balance mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Digital Solutions Built Around Your Business
          </h2>


          <p className="mt-6 text-xl leading-8 text-gray-600">
            From websites and mobile applications to AI solutions,
            automation and branding, Geekyace creates digital systems
            designed for growth.
          </p>

        </div>


        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {featuredServices.map((service, index) => {

            const Icon = service.icon;

            return (

              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="premium-card group rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-green-400"
              >

                {/* Number */}

                <div className="absolute right-6 top-5 text-6xl font-black text-slate-100 transition group-hover:text-green-100">
                  0{index + 1}
                </div>


                {/* Icon */}

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-green-400 transition duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">

                  <Icon size={32} />

                </div>


                <h3 className="mt-8 text-2xl font-bold text-gray-900">

                  {service.title}

                </h3>


                <p className="mt-4 leading-8 text-gray-600">

                  {service.description}

                </p>


                <div className="mt-8 inline-flex items-center font-semibold text-green-600 transition group-hover:text-green-700">

                  Learn More

                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>

                </div>


              </Link>

            );

          })}

        </div>


        {/* Button */}

        <div className="mt-16 text-center">

          <Link
            href="/services"
            className="inline-flex rounded-full bg-slate-950 px-8 py-4 font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-600 hover:shadow-xl"
          >
            View All Services
          </Link>

        </div>


      </Container>

    </section>
  );
}
