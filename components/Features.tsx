"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Activity,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Analytics",
    description:
      "Advanced artificial intelligence transforms athlete data into actionable insights.",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description:
      "Continuous tracking of performance, recovery and physiological metrics.",
  },
  {
    icon: ShieldCheck,
    title: "Recovery Intelligence",
    description:
      "Prevent overtraining with predictive recovery recommendations.",
  },
  {
    icon: Smartphone,
    title: "Wearable Integration",
    description:
      "Connect Garmin, WHOOP, Polar and other sports ecosystems.",
  },
];

export default function Features() {
  return (
    <section
      id="solutions"
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
            Platform
          </p>

          <h2 className="text-5xl font-black text-white">
            Everything Needed
            <span className="gradient-text block">
              For Elite Performance
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            AthleteOS combines AI, wearable devices and sports science
            into one unified platform.
          </p>

        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                className="card p-8 transition hover:-translate-y-1"
              >

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">

                  <Icon size={28} />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {feature.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}