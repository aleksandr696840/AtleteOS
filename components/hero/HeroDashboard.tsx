"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import RecoveryRing from "./RecoveryRing";
import MetricCard from "./MetricCard";

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="card p-8"
    >
      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            Athlete Dashboard
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            Live Performance
          </h2>

        </div>

        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
          Online
        </div>

      </div>

      <div className="mt-10 flex justify-center">

        <RecoveryRing value={94} />

      </div>

      <div className="mt-10 space-y-4">

        <MetricCard
          icon={<HeartPulse size={20} />}
          title="Heart Rate Variability"
          value="84 ms"
        />

        <MetricCard
          icon={<Activity size={20} />}
          title="Training Readiness"
          value="High"
        />

        <MetricCard
          icon={<ShieldCheck size={20} />}
          title="Recovery"
          value="Excellent"
        />

        <MetricCard
          icon={<Brain size={20} />}
          title="AI Recommendation"
          value="Strength Session"
        />

      </div>

    </motion.div>
  );
}