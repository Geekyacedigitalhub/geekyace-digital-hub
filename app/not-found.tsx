"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


export default function NotFound() {

  return (

    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">


      <motion.div

        initial={{
          opacity:0,
          y:40,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        transition={{
          duration:0.6,
        }}

        className="text-center"

      >


        {/* Logo */}

        <div className="mb-10 flex justify-center">

          <Image

            src="/images/logo.png"

            alt="Geekyace Digital Hub"

            width={220}

            height={70}

            className="object-contain"

          />

        </div>




        {/* 404 */}

        <motion.h1

          animate={{
            scale:[1,1.05,1],
          }}

          transition={{
            duration:2,
            repeat:Infinity,
          }}

          className="text-8xl font-black text-green-600"

        >

          404

        </motion.h1>





        <h2 className="mt-6 text-4xl font-bold text-slate-900">

          Page Not Found

        </h2>





        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">

          The page you are looking for does not exist,
          has been moved, or the link may be incorrect.

          Let Geekyace Digital Hub help you find your way back.

        </p>





        {/* Buttons */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">


          <Link

            href="/"

            className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"

          >

            Return Home

          </Link>





          <Link

            href="/contact"

            className="rounded-xl border border-green-600 px-8 py-3 font-semibold text-green-600 transition hover:bg-green-50"

          >

            Contact Us

          </Link>


        </div>




      </motion.div>


    </main>

  );

}