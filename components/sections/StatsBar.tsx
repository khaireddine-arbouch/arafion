"use client";

import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import FadeInOnView from "@/components/ui/FadeInOnView";

const STATS = [
  { value: 30, suffix: "+", label: "Projects shipped" },
  { value: 15, suffix: "+", label: "Countries" },
  { value: 4, suffix: "", label: "Continents" },
  { value: 100, suffix: "M+", label: "End users served" },
  { value: 98, suffix: "%", label: "On-time delivery" },
  { value: 12, suffix: "", label: "Avg. weeks to ship" },
];

export default function StatsBar() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <FadeInOnView>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-black/[.06] rounded-3xl overflow-hidden border border-black/[.06]">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="bg-white px-6 py-7 flex flex-col items-center text-center"
          >
            <div className="text-3xl md:text-4xl font-semibold text-ink tracking-tight tabular-nums">
              <NumberFlow
                value={ready ? stat.value : 0}
                format={{ useGrouping: false }}
              />
              <span className="text-muted/60">{stat.suffix}</span>
            </div>
            <div className="text-[11px] font-medium text-muted tracking-tight mt-2 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </FadeInOnView>
  );
}
