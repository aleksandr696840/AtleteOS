"use client";

import { motion } from "framer-motion";

type RecoveryRingProps = {
  value: number;
};

export default function RecoveryRing({
  value,
}: RecoveryRingProps) {
  const radius = 82;
  const stroke = 12;

  const circumference = 2 * Math.PI * radius;

  const progress =
    circumference -
    (value / 100) * circumference;

  return (
    <div className="relative flex h-64 w-64 items-center justify-center">

      <svg
        width="220"
        height="220"
        className="-rotate-90"
      >
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,.06)"
          strokeWidth={stroke}
        />

        <motion.circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{
            strokeDashoffset: circumference,
          }}
          animate={{
            strokeDashoffset: progress,
          }}
          transition={{
            duration: 1.4,
          }}
        />

        <defs>
          <linearGradient
            id="gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#22d3ee"
            />

            <stop
              offset="100%"
              stopColor="#2563eb"
            />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute text-center">

        <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
          Recovery
        </div>

        <div className="mt-2 text-6xl font-black text-white">
          {value}%
        </div>

        <div className="mt-2 text-cyan-400">
          Excellent
        </div>

      </div>

    </div>
  );
}