"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import HeroContent from "./hero/HeroContent";
import HeroDashboard from "./hero/HeroDashboard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-28">

      <div className="absolute inset-0">

        <div className="blur-1" />

        <div className="blur-2" />

        <div className="blur-3" />

        <div className="hero-grid" />

      </div>

      <div className="container relative z-10">

        <div className="grid items-center gap-24 lg:grid-cols-[1.05fr_.95fr]">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .7,
            }}
          >

            <HeroContent />

            <div className="mt-12 flex flex-wrap gap-4">

              <button className="btn-primary">

                Request Demo

                <ArrowRight size={18} />

              </button>

              <button className="btn-secondary">

                Learn More

              </button>

            </div>

            <div className="mt-20 grid grid-cols-3 gap-10">

              <div>

                <div className="text-5xl font-black text-white">
                  98%
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Recovery Accuracy
                </p>

              </div>

              <div>

                <div className="text-5xl font-black text-white">
                  24/7
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  AI Monitoring
                </p>

              </div>

              <div>

                <div className="text-5xl font-black text-white">
                  250K+
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Sessions Analysed
                </p>

              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: .96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: .8,
            }}
          >

            <HeroDashboard />

          </motion.div>

        </div>

      </div>

    </section>
  );
}