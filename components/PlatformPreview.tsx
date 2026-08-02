"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  HeartPulse,
  Moon,
} from "lucide-react";

export default function PlatformPreview() {
  return (
    <section
      id="platform"
      className="py-28"
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Dashboard
          </p>

          <h2 className="text-5xl font-black text-white">
            One Platform
            <span className="gradient-text block">
              Complete Athlete Intelligence
            </span>
          </h2>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="card overflow-hidden p-10"
        >

          <div className="grid gap-8 lg:grid-cols-[1.5fr_.9fr]">

            <div>

              <div className="mb-8 flex items-center justify-between">

                <h3 className="text-2xl font-bold text-white">
                  Athlete Overview
                </h3>

                <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                  Live
                </span>

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <div className="metric-card">

                  <div className="flex items-center gap-3">

                    <HeartPulse
                      className="text-cyan-400"
                      size={22}
                    />

                    <span className="metric-title">
                      HRV
                    </span>

                  </div>

                  <span className="metric-value">
                    84 ms
                  </span>

                </div>

                <div className="metric-card">

                  <div className="flex items-center gap-3">

                    <Activity
                      className="text-cyan-400"
                      size={22}
                    />

                    <span className="metric-title">
                      Load
                    </span>

                  </div>

                  <span className="metric-value">
                    Optimal
                  </span>

                </div>

                <div className="metric-card">

                  <div className="flex items-center gap-3">

                    <Moon
                      className="text-cyan-400"
                      size={22}
                    />

                    <span className="metric-title">
                      Sleep
                    </span>

                  </div>

                  <span className="metric-value">
                    8h 21m
                  </span>

                </div>

                <div className="metric-card">

                  <div className="flex items-center gap-3">

                    <Brain
                      className="text-cyan-400"
                      size={22}
                    />

                    <span className="metric-title">
                      AI Score
                    </span>

                  </div>

                  <span className="metric-value">
                    96/100
                  </span>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8">

              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                Recommendation
              </p>

              <h4 className="mt-4 text-3xl font-bold text-white">
                Strength Session
              </h4>

              <p className="mt-6 leading-8 text-slate-400">
                Recovery level is excellent.
                AI recommends high-intensity strength
                training with reduced aerobic load.
              </p>

              <div className="mt-10 rounded-2xl bg-cyan-500/10 p-6">

                <div className="text-sm text-cyan-300">
                  Recovery Score
                </div>

                <div className="mt-2 text-5xl font-black text-white">
                  94%
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}