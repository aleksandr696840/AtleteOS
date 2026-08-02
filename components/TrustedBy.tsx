"use client";

import { motion } from "framer-motion";

const companies = [
  "GARMIN",
  "WHOOP",
  "POLAR",
  "SUUNTO",
  "COROS",
  "WAHOO",
];

export default function TrustedBy() {
  return (
    <section className="py-24">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <p className="mb-12 text-center text-sm uppercase tracking-[0.35em] text-slate-500">
            Built for the Future of Connected Sports
          </p>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">

            {companies.map((company) => (

              <div
                key={company}
                className="flex h-24 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] transition duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/[0.04]"
              >

                <span className="text-lg font-semibold tracking-[0.18em] text-slate-400 transition duration-300 hover:text-white">
                  {company}
                </span>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}