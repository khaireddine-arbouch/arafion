import type { Stage } from "@/types";

const STAGE_ORDER: Stage[] = ["Discovery", "In Progress", "Shipped", "Live", "Archived"];

const STAGE_COLOR: Record<Stage, string> = {
  Discovery: "#C9CBD1",
  "In Progress": "#FF9F0A",
  Shipped: "#30D158",
  Live: "#0A84FF",
  Archived: "#8E8E93",
};

function stageIndex(stage: Stage): number {
  const idx = STAGE_ORDER.indexOf(stage);
  return idx >= 0 ? idx : 0;
}

function isFinal(stage: Stage): boolean {
  return stage === "Live" || stage === "Archived";
}

export default function BillTimeline({ stage }: { stage: Stage }) {
  const idx = stageIndex(stage);
  const final = isFinal(stage);
  return (
    <div className="flex items-center gap-1">
      {STAGE_ORDER.map((s, i) => {
        const reached = i <= idx;
        const color = reached ? STAGE_COLOR[stage] : "#E5E5EA";
        return (
          <div
            key={s}
            className="h-1 flex-1 rounded-full"
            style={{ backgroundColor: color }}
            title={s}
          />
        );
      })}
    </div>
  );
}
