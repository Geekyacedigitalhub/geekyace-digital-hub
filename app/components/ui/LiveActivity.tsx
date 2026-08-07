"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const activities = [
  {
    title: "Website Delivered",
    description:
      "Bella Vista Restaurant website launched successfully",
    color: "bg-blue-500",
  },
  {
    title: "AI Agent Activated",
    description:
      "Customer support automation is now running",
    color: "bg-purple-500",
  },
  {
    title: "New Project Started",
    description:
      "Mobile application development started",
    color: "bg-emerald-500",
  },
  {
    title: "Automation Completed",
    description:
      "Business workflow optimized successfully",
    color: "bg-orange-500",
  },
];

export default function LiveActivity() {

  const [index, setIndex] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setIndex((current) =>
        (current + 1) % activities.length
      );

    }, 4000);


    return () => clearInterval(timer);

  }, []);



  const activity = activities[index];


  return (

    <AnimatePresence mode="wait">

      <motion.div

        key={activity.title}

        initial={{
          opacity:0,
          y:20,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        exit={{
          opacity:0,
          y:-20,
        }}

        transition={{
          duration:0.5,
        }}

        className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"

      >

        <div className="flex items-start gap-3">


          <span
            className={`mt-1 h-3 w-3 rounded-full ${activity.color}`}
          />


          <div>

            <h4 className="font-semibold text-white">
              {activity.title}
            </h4>


            <p className="mt-1 text-sm text-slate-400">
              {activity.description}
            </p>


          </div>


        </div>


      </motion.div>


    </AnimatePresence>

  );
}