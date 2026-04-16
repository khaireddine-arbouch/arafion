import { STANCE_LABEL, type StanceType } from "@/types";

interface StanceBadgeProps {
  stance: StanceType;
  size?: "sm" | "md";
}

const DOT_COLOR: Record<StanceType, string> = {
  flagship: "#0A84FF",
  growth: "#30D158",
  sprint: "#FF9F0A",
  advisory: "#BF5AF2",
  none: "#C9CBD1",
};

export default function StanceBadge({ stance, size = "md" }: StanceBadgeProps) {
  const text = size === "md" ? "text-xs" : "text-[11px]";
  const dot = size === "md" ? "w-1.5 h-1.5" : "w-1 h-1";
  return (
    <span className={`inline-flex items-center gap-1.5 ${text} text-ink`}>
      <span
        className={`${dot} rounded-full`}
        style={{ backgroundColor: DOT_COLOR[stance] }}
      />
      <span>{STANCE_LABEL[stance]}</span>
    </span>
  );
}
