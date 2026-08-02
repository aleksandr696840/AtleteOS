"use client";

import {
  Brain,
  Sparkles,
  TrendingUp,
  HeartPulse,
  Clock3,
  ArrowRight,
} from "lucide-react";

const insights = [
  {
    title: "Today's Readiness",
    value: "High",
    icon: TrendingUp,
  },
  {
    title: "Recovery Score",
    value: "94%",
    icon: HeartPulse,
  },
  {
    title: "Recommended Session",
    value: "Strength",
    icon: Brain,
  },
  {
    title: "Estimated Duration",
    value: "75 min",
    icon: Clock3,
  },
];

export default function AISection() {
  return (
    <section
      id="ai"
      className="py-32"
    >
      <div className="container">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
              <Sparkles size={16} />
              Artificial Intelligence
            </div>

            <h2 className="mt-8 text-5xl font-black text-white">
              Your Personal
              <span className="gradient-text block">
                AI Performance Coach
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              AthleteOS continuously analyzes training load, HRV,
              sleep quality, heart rate, previous workouts and
              recovery to generate personalized coaching decisions.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400" />
                <p className="text-slate-300">
                  Daily AI recovery analysis
                </p>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400" />
                <p className="text-slate-300">
                  Automatic training recommendations
                </p>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400" />
                <p className="text-slate-300">
                  Injury risk prediction
                </p>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400" />
                <p className="text-slate-300">
                  Garmin data synchronization
                </p>
              </div>
            </div>

            <button className="btn-primary mt-12">
              Explore AI

              <ArrowRight size={18} />
            </button>
          </div>

          <div className="card p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">
                  AI Decision Engine
                </p>

                <h3 className="mt-2 text-4xl font-black text-white">
                  Ready to Train
                </h3>
              </div>

              <div className="rounded-2xl bg-cyan-500/10 p-4">
                <Brain
                  size={34}
                  className="text-cyan-400"
                />
              </div>
            </div>

            <div className="mt-10 space-y-5">
              {insights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="metric-card"
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        size={22}
                        className="text-cyan-400"
                      />

                      <span className="metric-title">
                        {item.title}
                      </span>
                    </div>

                    <span className="metric-value">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
              <p className="text-sm uppercase tracking-widest text-cyan-300">
                AI Recommendation
              </p>

              <h4 className="mt-3 text-2xl font-bold text-white">
                Complete a strength session today.
              </h4>

              <p className="mt-4 leading-7 text-slate-300">
                Recovery indicators are excellent. Expected performance
                increase is above your 30-day average.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}