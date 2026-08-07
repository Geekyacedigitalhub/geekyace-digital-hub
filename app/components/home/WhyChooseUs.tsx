"use client";

import {
  Lightbulb,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "../ui/Container";
import FadeUp from "../animations/FadeUp";

import { stats } from "@/app/data/stats";


const features = [
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description:
      "Every project begins with understanding your business, customers, and long-term goals.",
  },
  {
    icon: Rocket,
    title: "Modern Technology",
    description:
      "We build scalable digital solutions using modern frameworks and reliable technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Partnership",
    description:
      "We support, improve and maintain your digital products even after launch.",
  },
  {
    icon: Users,
    title: "User Experience",
    description:
      "We create simple, beautiful experiences that users enjoy and businesses benefit from.",
  },
];


export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-24">

      <Container>


        {/* Heading */}

        <FadeUp>

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
              Why Choose Geekyace
            </span>


            <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-gray-900">
              A Technology Partner Focused on Results
            </h2>


            <p className="mt-6 text-xl leading-8 text-gray-600">
              We combine strategy, design and engineering to create
              digital solutions that help businesses grow with confidence.
            </p>

          </div>

        </FadeUp>



        {/* Statistics */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat, index) => (

            <FadeUp
              key={stat.id}
              delay={index * 0.08}
            >

              <div
                className="
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
                  hover:shadow-xl
                "
              >

                <h3 className="text-5xl font-extrabold text-green-600">
                  {stat.value}
                </h3>


                <h4 className="mt-5 text-xl font-bold text-gray-900">
                  {stat.label}
                </h4>


                <p className="mt-3 leading-7 text-gray-600">
                  {stat.description}
                </p>


              </div>

            </FadeUp>

          ))}

        </div>



        {/* Feature Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2">


          {features.map((feature, index) => {

            const Icon = feature.icon;


            return (

              <FadeUp
                key={feature.title}
                delay={index * 0.1}
              >

                <div
                  className="
                    group
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
                    hover:shadow-xl
                  "
                >


                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition group-hover:scale-110">

                    <Icon size={30} />

                  </div>



                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>


                  <p className="mt-4 leading-8 text-gray-600">
                    {feature.description}
                  </p>


                </div>


              </FadeUp>

            );

          })}


        </div>


      </Container>

    </section>
  );
}