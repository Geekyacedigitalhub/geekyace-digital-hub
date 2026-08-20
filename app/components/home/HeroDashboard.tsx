"use client";

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
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    value: "Product studio",
    color: "bg-green-300",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    value: "AI studio",
    color: "bg-green-400",
  },
  {
    icon: Cog,
    title: "Business Automation",
    value: "Systems studio",
    color: "bg-green-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    value: "Product studio",
    color: "bg-emerald-500",
  },
];

export default function HeroDashboard() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="soft-float relative mx-auto w-full max-w-xl lg:ml-auto"
      >
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-green-500/10 blur-3xl"
        />

        {/* Main dashboard */}
        <div className="glass-panel relative overflow-hidden rounded-[2rem] bg-slate-950/80 shadow-2xl shadow-black/30">
          {/* Dashboard header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
                <Sparkles
                  className="h-5 w-5 text-green-400"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  GeekyAce Project Studio
                </p>

                <div className="mt-0.5 flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-green-400"
                  />

                  <span className="text-xs text-slate-400">
                    New project window open
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 sm:block">
              Studio live
            </div>
          </div>

          {/* Main stats */}
          <div className="grid grid-cols-2 gap-3 p-5 sm:gap-4 sm:p-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-400">
                  Expert studios
                </p>

                <TrendingUp
                  className="h-4 w-4 text-green-400"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-2xl font-extrabold text-white">5</p>

              <p className="mt-1 text-xs text-green-400">
                Working as one
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-400">
                  Delivery
                </p>

                <CheckCircle2
                  className="h-4 w-4 text-green-400"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-2xl font-extrabold text-white">1 team</p>

              <p className="mt-1 text-xs text-green-400">
                End-to-end thinking
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white">
                  Your growth stack
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Connected expertise, not isolated services
                </p>
              </div>

              <ArrowUpRight
                className="h-5 w-5 text-slate-500"
                aria-hidden="true"
              />
            </div>

            <div className="space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.1 + index * 0.06,
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                        <Icon
                          className="h-4 w-4 text-slate-300"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="truncate text-sm font-semibold text-slate-200">
                            {service.title}
                          </p>

                          <span className="text-xs font-bold text-green-400">
                            {service.value}
                          </span>
                        </div>

                        <div className="mt-2 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                          <span className={`h-1.5 w-8 rounded-full ${service.color}`} />
                          Strategy · delivery · handover
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom status */}
          <div className="border-t border-white/10 bg-white/[0.025] px-5 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-green-500"
                />

                <span className="text-xs font-medium text-slate-400">
                  Ready for your next brief
                </span>
              </div>

              <span className="text-xs font-semibold text-green-400">
                Optimized
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}
