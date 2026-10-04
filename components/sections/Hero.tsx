"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Marquee } from "@/components/ui/Marquee";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

const floatAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const floatAnimationSlow = {
  y: [0, -8, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 1,
  },
};

function HeroDashboard() {
  return (
    <div className="relative h-[340px] w-full md:h-[420px] lg:h-[480px]">
      {/* Glow behind dashboard */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />

      {/* Main dashboard card */}
      <motion.div
        animate={floatAnimation}
        className="glass-card absolute top-8 right-0 left-4 md:left-8 p-5 md:p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="text-xs font-medium text-text-muted">Campaign Dashboard</span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            Live
          </span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-white/[0.03] p-3">
            <p className="text-[10px] text-text-dim">Reach</p>
            <p className="font-display text-lg font-bold text-text md:text-xl">24.8K</p>
            <p className="flex items-center gap-0.5 text-[10px] text-emerald-400">
              <TrendingUp className="h-3 w-3" aria-hidden="true" /> +18%
            </p>
          </div>
          <div className="rounded-xl bg-white/[0.03] p-3">
            <p className="text-[10px] text-text-dim">Engagement</p>
            <p className="font-display text-lg font-bold text-text md:text-xl">3.2K</p>
            <p className="flex items-center gap-0.5 text-[10px] text-emerald-400">
              <TrendingUp className="h-3 w-3" aria-hidden="true" /> +24%
            </p>
          </div>
          <div className="rounded-xl bg-white/[0.03] p-3">
            <p className="text-[10px] text-text-dim">Leads</p>
            <p className="font-display text-lg font-bold text-text md:text-xl">148</p>
            <p className="flex items-center gap-0.5 text-[10px] text-emerald-400">
              <TrendingUp className="h-3 w-3" aria-hidden="true" /> +32%
            </p>
          </div>
        </div>

        {/* Graph line (CSS-drawn) */}
        <div className="mt-4 h-16 w-full overflow-hidden rounded-lg bg-white/[0.02] p-2">
          <svg viewBox="0 0 200 40" className="h-full w-full" aria-hidden="true">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,35 Q20,30 40,28 T80,20 T120,15 T160,8 T200,5"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1.5"
              className="drop-shadow-[0_0_6px_var(--primary)]"
            />
            <path
              d="M0,35 Q20,30 40,28 T80,20 T120,15 T160,8 T200,5 L200,40 L0,40 Z"
              fill="url(#lineGrad)"
            />
          </svg>
        </div>
      </motion.div>

      {/* Floating social card */}
      <motion.div
        animate={floatAnimationSlow}
        className="glass-card absolute right-2 bottom-8 z-10 w-48 p-4 md:right-4 md:bottom-12"
      >
        <div className="flex items-center gap-2 mb-2">
          <Users className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          <span className="text-[10px] font-medium text-text-muted">Social Growth</span>
        </div>
        <p className="font-display text-2xl font-bold text-text">+47%</p>
        <p className="text-[10px] text-text-dim">Audience growth this quarter</p>
      </motion.div>

      {/* Floating status chip */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 },
        }}
        className="glass-card absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-2 md:top-2 md:right-8"
      >
        <Zap className="h-3.5 w-3.5 text-accent-warm" aria-hidden="true" />
        <span className="text-[11px] font-medium text-text">Campaign Live</span>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 md:pt-32" aria-label="Hero">
      {/* Background effects */}
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute top-0 left-0 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/4 rounded-full bg-primary/8 blur-[120px]" aria-hidden="true" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/4 rounded-full bg-accent/5 blur-[100px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: Copy */}
          <div className="pt-8 md:pt-16">
            {/* Label chips */}
            <motion.div
              className="mb-8 flex flex-wrap gap-2"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {["Strategy", "Creative", "Digital"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[var(--glass-border)] bg-glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-text-muted"
                >
                  {chip}
                </span>
              ))}
            </motion.div>

            <motion.h1
              className="heading-hero font-display"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="text-text">MAKE YOUR</span>
              <br />
              <span className="text-text">BRAND GO</span>
              <br />
              <span className="gradient-text">WIDER.</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-lg text-base leading-relaxed text-text-muted md:text-lg"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              We build brands through strategy, creativity, storytelling and digital marketing.
            </motion.p>

            <motion.p
              className="mt-4 max-w-lg text-sm leading-relaxed text-text-dim"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              From a single creative to a complete marketing campaign, BWIDE Media helps businesses
              create a stronger presence, connect with the right audience and turn attention into
              meaningful growth.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_24px_var(--primary-glow)]"
              >
                View Our Work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] px-7 py-3.5 text-sm font-semibold text-text transition-all duration-200 hover:border-[var(--glass-border-hover)] hover:bg-glass"
              >
                Start a Project
              </Link>
            </motion.div>
          </div>

          {/* Right: Floating dashboard composition */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <HeroDashboard />
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="mt-16 md:mt-24">
          <Marquee
            items={["Strategy", "Creativity", "Storytelling", "Digital"]}
          />
        </div>
      </div>
    </section>
  );
}
