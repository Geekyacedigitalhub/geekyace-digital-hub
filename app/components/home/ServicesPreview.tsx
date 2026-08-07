import Link from "next/link";

import Container from "../ui/Container";
import { services } from "@/app/data/services";

export default function ServicesPreview() {
  const featuredServices = services.filter(
    (service) => service.featured
  );

  return (
    <section className="bg-gray-50 py-24">

      <Container>

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            Our Services
          </span>


          <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-gray-900">
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
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-green-500
                  hover:shadow-2xl
                "
              >

                {/* Number */}

                <div className="absolute right-6 top-6 text-5xl font-black text-gray-100 transition group-hover:text-green-100">
                  0{index + 1}
                </div>


                {/* Icon */}

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition duration-300 group-hover:scale-110">

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
            className="
              inline-flex
              rounded-xl
              bg-green-600
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:-translate-y-1
              hover:bg-green-700
              hover:shadow-xl
            "
          >
            View All Services
          </Link>

        </div>


      </Container>

    </section>
  );
}