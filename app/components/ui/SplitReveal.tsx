"use client";

import { motion, type Variants } from "framer-motion";

/**
 * Splits a string into words/characters and animates each word
 * with a mask-clipped slide-up reveal.
 */
export default function SplitReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
  staggerChildren = 0.06,
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "span" | "p";
  staggerChildren?: number;
}) {
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren: delay },
    },
  };
  const word: Variants = {
    hidden: {},
    visible: {},
  };
  const char: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const MotionTag = motion[Tag] as typeof motion.span;
  return (
    <MotionTag
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={word}
          className="inline-block overflow-hidden whitespace-nowrap align-bottom pr-[0.22em]"
          aria-hidden={false}
        >
          {w.split("").map((c, j) => (
            <motion.span
              key={j}
              variants={char}
              className="inline-block"
            >
              {c}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </MotionTag>
  );
}
