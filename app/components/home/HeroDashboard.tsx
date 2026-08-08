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
    value: "98%",
    color: "bg-blue-500",
    width: "98%",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    value: "92%",
    color: "bg-violet-500",
    width: "92%",
  },
  {
    icon: Cog,
    title: "Business Automation",
    value: "95%",
    color: "bg-green-500",
    width: "95%",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    value: "90%",
    color: "bg-orange-500",
    width: "90%",
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
        className="relative mx-auto w-full max-w-xl lg:ml-auto"
      >
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-green-500/10 blur-3xl"
        />

        {/* Main dashboard */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/95 shadow-2xl shadow-black/30">
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
                  Digital Growth Dashboard
                </p>

                <div className="mt-0.5 flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-green-400"
                  />

                  <span className="text-xs text-slate-400">
                    Systems operating normally
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300 sm:block">
              Live
            </div>
          </div>

          {/* Main stats */}
          <div className="grid grid-cols-2 gap-3 p-5 sm:gap-4 sm:p-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-400">
                  Projects
                </p>

                <TrendingUp
                  className="h-4 w-4 text-green-400"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-2xl font-extrabold text-white">50+</p>

              <p className="mt-1 text-xs text-green-400">
                Growing portfolio
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-400">
                  Availability
                </p>

                <CheckCircle2
                  className="h-4 w-4 text-green-400"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 text-2xl font-extrabold text-white">24/7</p>

              <p className="mt-1 text-xs text-green-400">
                Support available
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white">
                  Core Capabilities
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Digital solutions built for growth
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

                        <div
                          className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800"
                          aria-label={`${service.title}: ${service.value}`}
                        >
                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            animate={{
                              width: service.width,
                            }}
                            transition={{
                              delay: 0.2 + index * 0.06,
                              duration: 0.6,
                              ease: "easeOut",
                            }}
                            className={`h-full rounded-full ${service.color}`}
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
          <div className="border-t border-white/10 bg-white/[0.025] px-5 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-green-500"
                />

                <span className="text-xs font-medium text-slate-400">
                  Digital systems active
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