import { getSiteConfig, type SiteId } from "./config";

/** UI service category ids from `translations.services.categories`. */
export const ALL_SERVICE_CATEGORY_IDS = [
  "software",
  "websites",
  "intelligence",
  "marketing",
  "visualization",
  "strategy",
] as const;

export type ServiceCategoryId = (typeof ALL_SERVICE_CATEGORY_IDS)[number];

const NOREX_SERVICE_CATEGORY_IDS: readonly ServiceCategoryId[] = [
  "software",
  "websites",
  "intelligence",
  "strategy",
];

/** Project JSON serviceCategories to hide on technical-only sites. */
const NOREX_EXCLUDED_PROJECT_SERVICES = new Set([
  "marketing-production",
  "architecture-visualization",
  "3d-rendering",
]);

/** Blog categorySlugs hidden on technical-only sites. */
const NOREX_EXCLUDED_BLOG_CATEGORIES = new Set([
  "architecture",
  "growth",
  "production",
]);

/** Hero feature titles (EN source) to hide on technical-only sites. */
const NOREX_EXCLUDED_HERO_FEATURES = new Set(["Marketing Systems"]);

export function isTechnicalOnlySite(siteId: SiteId = getSiteConfig().id): boolean {
  return siteId === "norex";
}

export function getVisibleServiceCategoryIds(
  siteId: SiteId = getSiteConfig().id,
): readonly ServiceCategoryId[] {
  if (isTechnicalOnlySite(siteId)) return NOREX_SERVICE_CATEGORY_IDS;
  return ALL_SERVICE_CATEGORY_IDS;
}

export function filterServiceCategories<T extends { id: string }>(
  categories: T[],
  siteId: SiteId = getSiteConfig().id,
): T[] {
  const allowed = new Set<string>(getVisibleServiceCategoryIds(siteId));
  return categories.filter((c) => allowed.has(c.id));
}

/** Indices into the full 6-slot capabilities arrays for the current site. */
export function getVisibleServiceIndices(
  siteId: SiteId = getSiteConfig().id,
): number[] {
  const allowed = new Set<string>(getVisibleServiceCategoryIds(siteId));
  return ALL_SERVICE_CATEGORY_IDS.map((id, index) =>
    allowed.has(id) ? index : -1,
  ).filter((i) => i >= 0);
}

export function isBlogCategoryAllowed(
  categorySlug: string,
  siteId: SiteId = getSiteConfig().id,
): boolean {
  if (!isTechnicalOnlySite(siteId)) return true;
  return !NOREX_EXCLUDED_BLOG_CATEGORIES.has(categorySlug);
}

export function isBlogPostAllowed(
  post: { categorySlug: string },
  siteId: SiteId = getSiteConfig().id,
): boolean {
  return isBlogCategoryAllowed(post.categorySlug, siteId);
}

export function filterHeroFeatures<T extends { title: string }>(
  features: T[],
  siteId: SiteId = getSiteConfig().id,
): T[] {
  if (!isTechnicalOnlySite(siteId)) return features;
  return features.filter((f) => !NOREX_EXCLUDED_HERO_FEATURES.has(f.title));
}

/** Keep projects that still have at least one non-excluded service category. */
export function isProjectOfferingAllowed(
  serviceCategories: string[] | undefined,
  siteId: SiteId = getSiteConfig().id,
): boolean {
  if (!isTechnicalOnlySite(siteId)) return true;
  const cats = serviceCategories ?? [];
  if (cats.length === 0) return true;
  return cats.some((c) => !NOREX_EXCLUDED_PROJECT_SERVICES.has(c));
}

export function contactHrefForService(id: string): string {
  switch (id) {
    case "software":
      return "/contact?service=software";
    case "websites":
      return "/contact?service=websites";
    case "intelligence":
      return "/contact?service=ai";
    case "marketing":
      return "/contact?service=marketing";
    case "visualization":
      return "/contact?service=3d";
    case "strategy":
      return "/contact?service=strategy";
    default:
      return "/contact";
  }
}
