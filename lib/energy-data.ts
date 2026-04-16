import type { PowerPlant, StateEnergyProfile } from "@/types";

export const ALL_PLANTS: PowerPlant[] = [];

export function plantsInState(_stateName: string): PowerPlant[] {
  return [];
}

export function getStateProfile(_stateName: string): StateEnergyProfile | undefined {
  return undefined;
}

export function plantsNearby(_lat: number, _lng: number, _miles: number): PowerPlant[] {
  return [];
}
