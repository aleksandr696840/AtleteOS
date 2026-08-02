"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "For individual athletes",
    features: [
      "AI Recovery",
      "Training Analytics",
      "Wearable Sync",
      "Mobile App",
    ],
  },
  {
    name: "Professional",
    price: "$99",
    description: "For coaches & teams",
    featured: true,
    features: [
      "Unlimited Athletes",
      "AI Coach",
      "Advanced Dashboard",
      "Performance Reports",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations",
    features: [
      "Unlimited Users",
      "API Access",
      "Custom Integrations",
      "Dedicated Manager",
      "Enterprise Security",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-32"
    >
      <div className="container">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
            Pricing
          </div>

          <h2 className="text-5xl font-black text-white md:text-6xl">
            Simple Pricing
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Flexible plans for athletes, coaches and professional organizations.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (

            <motion.div
              key={plan.name}
              whileHover={{ y: -10 }}
              className={`rounded-[36px] border p-8 backdrop-blur-3xl ${
                plan.featured
                  ? "border-cyan-400/40 bg-cyan-400/10"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >

              <h3 className="text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-2 text-slate-400">
                {plan.description}
              </p>

              <div className="mt-8 text-5xl font-black text-white">
                {plan.price}
              </div>

              <div className="mt-10 space-y-5">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={18}
                      className="text-cyan-400"
                    />

                    <span className="text-slate-300">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

              <button className="btn-primary mt-10 w-full justify-center">
                Get Started
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}