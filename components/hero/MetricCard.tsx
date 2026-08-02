"use client";

import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  value: string;
};

export default function MetricCard({
  icon,
  title,
  value,
}: Props) {
  return (
    <div className="metric-card">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
          {icon}
        </div>

        <div>
          <div className="text-sm text-slate-400">
            {title}
          </div>
        </div>
      </div>

      <div className="text-lg font-semibold text-white">
        {value}
      </div>
    </div>
  );
}