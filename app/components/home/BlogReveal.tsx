"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function BlogReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.article>
  );
}
