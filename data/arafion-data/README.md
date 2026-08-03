# Arafion Data Pack

This folder contains JSON data for rebuilding the Arafion website from the old Track Policy-style codebase.

## Files

- `projects.json` — all current Arafion project records, including client work, internal products, SaaS prototypes, intelligence dashboards, confidential rendering work, and marketing/production work.
- `services.json` — service lines for the website.
- `packages.json` — quote/package data, especially architecture rendering and software/custom quote structures.
- `filters.json` — region, service, project type, status, and proof filters for map/project explorer UI.
- `site-content.json` — hero copy, CTAs, homepage structure, confidentiality copy.
- `schema.json` — recommended data shape and enum values.

## Important implementation notes

1. Do not keep old policy/data-center language.
2. Rename old concepts:
   - `policy` -> `project`
   - `jurisdiction` -> `region`
   - `operator` -> `client/project`
   - `concerns` -> `serviceCategories` or `proofTypes`
   - `impactTags` -> `serviceCategories`
   - `legislation` -> `case studies`
   - `state policies` -> `project details`
3. Use the dark spinning globe for hero.
4. Use the structured regional map/project explorer for `/work`, not as the primary brand hero.
5. Confidential work should be labeled honestly:
   - "Client name withheld. Visuals shown with permission."
6. Do not overclaim:
   - No unverified revenue impact.
   - No enterprise adoption unless proven.
   - No clinical/medical-grade claims for Evo2.
   - No live intelligence/market/feed claims for demo dashboards unless implemented.
   - No guaranteed campaign performance.
7. **Dual-site visibility (`sites`)**: optional `sites: ["arafion"] | ["norex"] | ["arafion","norex"]` on each project in `projects.json`.
   - Omit `sites` → project appears on **both** arafion.com and norexsystems.com.
   - `"sites": ["norex"]` → Israel/Palestine-only (hidden on Arafion).
   - `"sites": ["arafion"]` → Arafion-only.
   - Set this whenever a project must not appear on both brands. Filtered in `lib/map-projects.ts` via `SITE_ID` / `NEXT_PUBLIC_SITE_ID`.

## Recommended first integration

Create:

```txt
data/arafion/projects.json
data/arafion/services.json
data/arafion/packages.json
data/arafion/filters.json
data/arafion/site-content.json
data/arafion/schema.json
```

Then update homepage and `/work` to consume this data.
