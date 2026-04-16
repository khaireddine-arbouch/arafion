import type { MunicipalEntity } from "@/types";

const ALL: MunicipalEntity[] = [];

const BY_FIPS = new Map<string, MunicipalEntity>();
const BY_STATE = new Map<string, MunicipalEntity[]>();

export function getAllMunicipalities(): MunicipalEntity[] {
  return ALL;
}

export function getMunicipalityByFips(
  fips: string,
): MunicipalEntity | undefined {
  return BY_FIPS.get(String(fips).padStart(5, "0"));
}

export function getMunicipalitiesByState(state: string): MunicipalEntity[] {
  return BY_STATE.get(state) ?? [];
}
