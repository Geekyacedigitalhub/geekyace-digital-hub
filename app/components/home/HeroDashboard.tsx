"use client";

import Image from "next/image";
import { MotionConfig, motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Cog,
  Globe,
  Smartphone,
  Sparkles,
  TrendingUp,
  Bell,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", value: "98%", color: "from-blue-500 to-cyan-400", width: "98%" },
  { icon: Bot, title: "AI Solutions", value: "92%", color: "from-violet-500 to-fuchsia-400", width: "92%" },
  { icon: Cog, title: "Business Automation", value: "95%", color: "from-green-500 to-emerald-400", width: "95%" },
  { icon: Smartphone, title: "Mobile Applications", value: "90%", color: "from-orange-500 to-amber-400", width: "90%" },
];

export default function HeroDashboard() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-xl lg:ml-auto"
      >
        {/* Soft backdrop glows */}
        <div aria-hidden="true" className="pointer-events-none absolute -inset-10 rounded-[3.5rem] bg-green-500/15 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-10 top-20 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl animate-float-slow" />

        {/* Floating notification badge (top-left) */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          className="glass-dark absolute -left-4 top-10 z-20 hidden items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:-left-8 sm:flex"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/20">
            <Bell className="h-4 w-4 text-green-400" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">New deployment</p>
            <p className="text-[11px] text-slate-400">StoreScout went live ✓</p>
          </div>
        </motion.div>

        {/* Floating conversion card (bottom-right) */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: [-6, 4, -6] }}
          transition={{
            delay: 1.0,
            duration: 0.6,
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="glass-dark absolute -bottom-4 -right-4 z-20 hidden items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/75 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:-right-8 sm:flex"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20">
            <TrendingUp className="h-4 w-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">+38% conversion</p>
            <p className="text-[11px] text-slate-400">vs last quarter</p>
          </div>
        </motion.div>

        {/* Main dashboard */}
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-slate-900/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl backdrop-saturate-180">
          {/* Glossy top highlight */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent" />
          {/* Edge gradient ring */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
          {/* Green light */}
          <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-green-500/20 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-teal-400/15 blur-3xl" />

          {/* Preview image of a real product */}
          <div className="relative">
            <Image
              src="/images/showcase/hero-dashboard.jpg"
              alt="Digital product dashboard preview"
              width={1200}
              height={720}
              className="h-48 w-full object-cover opacity-90 sm:h-56"
              priority
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/90" />
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_100%,rgba(22,163,74,0.25),transparent_70%)]" />

            {/* Header floating over the image */}
            <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/20 backdrop-blur-md ring-1 ring-white/10">
                  <Sparkles className="h-5 w-5 text-green-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white drop-shadow">Digital Growth Dashboard</p>
                  <div className="mt-0.5 flex items-center gap-2">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                    <span className="text-xs text-slate-300">Systems operating normally</span>
                  </div>
                </div>
              </div>
              <div className="hidden items-center gap-1.5 rounded-lg border border-green-400/30 bg-green-500/10 px-3 py-1.5 text-xs font-bold text-green-300 backdrop-blur-md sm:inline-flex">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                LIVE
              </div>
            </div>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-2 gap-3 p-5 sm:gap-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-400">Projects</p>
                <TrendingUp className="h-4 w-4 text-green-400" aria-hidden="true" />
              </div>
              <p className="mt-3 bg-gradient-to-br from-white to-slate-300 bg-clip-text text-2xl font-extrabold text-transparent">50+</p>
              <p className="mt-1 text-xs text-green-400">Growing portfolio</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-400">Availability</p>
                <CheckCircle2 className="h-4 w-4 text-green-400" aria-hidden="true" />
              </div>
              <p className="mt-3 bg-gradient-to-br from-white to-slate-300 bg-clip-text text-2xl font-extrabold text-transparent">24/7</p>
              <p className="mt-1 text-xs text-green-400">Support available</p>
            </motion.div>
          </div>

          {/* Capability bars */}
          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white">Core Capabilities</p>
                <p className="mt-1 text-xs text-slate-500">Digital solutions built for growth</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-slate-500" aria-hidden="true" />
            </div>
            <div className="space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.08, duration: 0.4, ease: "easeOut" }}
                    className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-green-400/30 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition group-hover:ring-green-400/30">
                        <Icon className="h-4 w-4 text-slate-300" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="truncate text-sm font-semibold text-slate-200">{service.title}</p>
                          <span className="text-xs font-bold text-green-400">{service.value}</span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: service.width }}
                            transition={{ delay: 0.6 + index * 0.08, duration: 0.8, ease: "easeOut" }}
                            className={`h-full rounded-full bg-gradient-to-r ${service.color} shadow-[0_0_8px_rgba(74,222,128,0.5)]`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom status */}
          <div className="border-t border-white/10 bg-gradient-to-r from-white/[0.03] to-green-500/[0.04] px-5 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
                <span className="text-xs font-medium text-slate-400">Digital systems active</span>
              </div>
              <span className="text-xs font-semibold text-green-400">Optimized</span>
            </div>
          </div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}
