"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
          aria-hidden
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-16 w-16"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 shadow-[0_0_40px_rgba(34,197,94,0.6)]" />
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                className="absolute inset-0 flex items-center justify-center font-black text-slate-950 text-2xl"
              >
                G
              </motion.div>
            </motion.div>
            {/* Loading bar */}
            <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-green-400 to-transparent"
              />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-green-400">loading</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
