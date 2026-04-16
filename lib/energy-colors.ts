import type { FuelType } from "@/types";

export const FUEL_COLOR: Record<FuelType | "other", string> = {
  "natural-gas": "#888", coal: "#888", nuclear: "#888", hydro: "#888",
  solar: "#888", wind: "#888", biomass: "#888", geothermal: "#888",
  battery: "#888", oil: "#888", other: "#888",
};

export const FUEL_LABEL: Record<FuelType, string> = {
  "natural-gas": "Gas", coal: "Coal", nuclear: "Nuclear", hydro: "Hydro",
  solar: "Solar", wind: "Wind", biomass: "Biomass", geothermal: "Geo",
  battery: "Battery", oil: "Oil", other: "Other",
};

export function collapseFuel(f: FuelType | string): FuelType {
  return (f as FuelType) ?? "other";
}

export function plantRadius(_mw: number): number {
  return 2;
}
