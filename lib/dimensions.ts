import type { Dimension, DimensionLens, Entity, ImpactTag } from "@/types";
import { STANCE_HEX } from "./map-utils";

export const DIMENSION_TAGS: Record<Exclude<Dimension, "overall">, ImpactTag[]> = {
  engineering: [
    "frontend-engineering",
    "backend-engineering",
    "api-development",
    "devops",
  ],
  design: [
    "product-design",
    "design-systems",
    "branding",
  ],
  ai: [
    "ai-ml",
    "data-engineering",
  ],
  infrastructure: [
    "cloud-infrastructure",
    "devops",
    "mobile",
  ],
};

export const DIMENSION_COLOR: Record<Exclude<Dimension, "overall">, string> = {
  engineering: "#0A84FF",
  design: "#FF375F",
  ai: "#BF5AF2",
  infrastructure: "#30D158",
};

export const DIMENSION_TEXT: Record<Exclude<Dimension, "overall">, string> = {
  engineering: "#FFFFFF",
  design: "#FFFFFF",
  ai: "#FFFFFF",
  infrastructure: "#FFFFFF",
};

export const DIMENSION_GRADIENT: Record<
  Exclude<Dimension, "overall">,
  { from: string; to: string }
> = {
  engineering: { from: "#4DA6FF", to: "#0050B3" },
  design: { from: "#FF6B8A", to: "#CC0033" },
  ai: { from: "#D68AFF", to: "#7B2FBF" },
  infrastructure: { from: "#66E088", to: "#1A8040" },
};

function lerpHex(a: string, b: string, t: number): string {
  const ar = parseInt(a.slice(1, 3), 16);
  const ag = parseInt(a.slice(3, 5), 16);
  const ab = parseInt(a.slice(5, 7), 16);
  const br = parseInt(b.slice(1, 3), 16);
  const bg = parseInt(b.slice(3, 5), 16);
  const bb = parseInt(b.slice(5, 7), 16);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const blue = Math.round(ab + (bb - ab) * t);
  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(blue)}`;
}

function getDimensionScore(
  entity: Entity,
  dimension: Exclude<Dimension, "overall">,
): number {
  const relevantTags = DIMENSION_TAGS[dimension];
  const allTags = entity.legislation.flatMap((l) => l.impactTags ?? []);
  const matches = allTags.filter((t) => relevantTags.includes(t)).length;
  return Math.min(1, matches / 5);
}

export function getEntityColorForDimension(
  entity: Entity,
  dimension: Dimension,
  lens: DimensionLens = "portfolio",
): string {
  if (dimension === "overall") {
    const stance = lens === "ai" ? entity.stanceAI : entity.stancePortfolio;
    return STANCE_HEX[stance];
  }
  const score = getDimensionScore(entity, dimension);
  const grad = DIMENSION_GRADIENT[dimension];
  return lerpHex(grad.from, grad.to, score);
}
