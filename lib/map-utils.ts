import type { Dispatch, SetStateAction } from "react";
import type { Region, StanceType } from "@/types";

export const STANCE_HEX: Record<StanceType, string> = {
  flagship: "#0A84FF",
  growth: "#30D158",
  sprint: "#FF9F0A",
  advisory: "#BF5AF2",
  none: "#C9CBD1",
};

export const NEUTRAL_FILL = "#EFEDE8";
export const NEUTRAL_STROKE = "#E5E5E5";
export const INK = "#1D1D1F";

export interface TooltipState {
  x: number;
  y: number;
  label: string;
  geoId?: string;
  region?: Region;
  drillable?: boolean;
  countyFips?: string;
}

export type SetTooltip = Dispatch<SetStateAction<TooltipState | null>>;
