import type { MapProject, MunicipalAction } from "@/types";

export function findRelatedMapProjects(
  _action: MunicipalAction,
  _projects: MapProject[],
): string[] {
  return [];
}

export function findActionsForMapProject(
  _project: MapProject,
  _actions: Array<MunicipalAction & { municipalityName: string }>,
): Array<MunicipalAction & { municipalityName: string }> {
  return [];
}
