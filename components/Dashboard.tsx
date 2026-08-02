"use client";

import {
  Activity,
  HeartPulse,
  Moon,
  TrendingUp,
  Calendar,
  Flame,
} from "lucide-react";

const metrics = [
  {
    title: "Recovery",
    value: "94%",
    icon: HeartPulse,
    color: "text-cyan-400",
  },
  {
    title: "Training Load",
    value: "782",
    icon: Activity,
    color: "text-blue-400",
  },
  {
    title: "Sleep",
    value: "8h 21m",
    icon: Moon,
    color: "text-indigo-400",
  },
  {
    title: "VO₂ Max",
    value: "61",
    icon: TrendingUp,
    color: "text-emerald-400",
  },
];

const sessions = [
  {
    day: "Mon",
    type: "Strength",
    duration: "1h 25m",
    calories: 684,
  },
  {
    day: "Tue",
    type: "Running",
    duration: "58m",
    calories: 712,
  },
  {
    day: "Wed",
    type: "Recovery",
    duration: "35m",
    calories: 248,
  },
  {
    day: "Thu",
    type: "Intervals",
    duration: "1h 12m",
    calories: 803,
  },
];

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="py-32"
    >
      <div className="container">
        <div className="mb-20 text-center">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
            Dashboard Preview
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Premium Athlete Dashboard
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Every metric in one place. Built for professional athletes,
            coaches and sports organizations.
          </p>
        </div>

        <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-black/20 p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className={item.color}
                      size={28}
                    />

                    <span className="text-xs uppercase tracking-wider text-slate-500">
                      Live
                    </span>
                  </div>

                  <h3 className="mt-8 text-sm text-slate-400">
                    {item.title}
                  </h3>

                  <div className="mt-2 text-4xl font-black text-white">
                    {item.value}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-8 xl:grid-cols-[2fr,1fr]">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  Weekly Activity
                </h3>

                <Calendar
                  className="text-cyan-400"
                  size={22}
                />
              </div>

              <div className="mt-12 flex h-72 items-end justify-between gap-4">
                {[48, 74, 36, 86, 62, 96, 58].map((value, index) => (
                  <div
                    key={index}
                    className="flex flex-1 flex-col items-center"
                  >
                    <div
                      className="w-full rounded-t-2xl bg-gradient-to-t from-cyan-500 to-blue-600"
                      style={{
                        height: `${value}%`,
                      }}
                    />

                    <span className="mt-4 text-sm text-slate-500">
                      {["M", "T", "W", "T", "F", "S", "S"][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  Sessions
                </h3>

                <Flame
                  className="text-orange-400"
                  size={22}
                />
              </div>

              <div className="mt-8 space-y-5">
                {sessions.map((session) => (
                  <div
                    key={session.day}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white">
                        {session.type}
                      </span>

                      <span className="text-slate-500">
                        {session.day}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
                      <span>{session.duration}</span>

                      <span>{session.calories} kcal</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}