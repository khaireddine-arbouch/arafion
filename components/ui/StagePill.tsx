import type { Stage } from "@/types";

interface StagePillProps {
  stage: Stage;
}

const STAGE_CLASSES: Record<Stage, string> = {
  Discovery: "bg-black/[.04] text-muted",
  "In Progress": "bg-amber-50 text-amber-700",
  Shipped: "bg-blue-50 text-blue-600",
  Live: "bg-green-50 text-green-700",
  Archived: "bg-black/[.04] text-muted italic",
};

export default function StagePill({ stage }: StagePillProps) {
  return (
    <span
      className={`rounded-full text-[10px] font-medium px-2.5 py-0.5 ${STAGE_CLASSES[stage]}`}
    >
      {stage}
    </span>
  );
}
