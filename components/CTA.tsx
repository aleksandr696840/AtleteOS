"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-32"
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-indigo-500/10 px-10 py-20 backdrop-blur-3xl"
        >

          <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[140px]" />

          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-blue-500/15 blur-[160px]" />

          <div className="relative mx-auto max-w-4xl text-center">

            <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
              Start Today
            </div>

            <h2 className="text-5xl font-black text-white md:text-7xl">
              Build the Future
              <span className="gradient-text block">
                of Athlete Performance
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Join athletes, coaches and organizations using AthleteOS
              to transform performance through artificial intelligence.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <button className="btn-primary">

                Request Demo

                <ArrowRight size={18} />

              </button>

              <button className="btn-secondary">
                Contact Sales
              </button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}