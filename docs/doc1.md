# Arafion Codebase Architecture Report

## 1. Repository Inventory

### Framework + versions (file-backed)
- **Framework**: Next.js **16.2.3** (`c:\Users\khair\Downloads\Code\track-policy-main\track-policy-main\package.json`)
- **React**: **19.2.4** (`package.json`)
- **TypeScript**: **^5** (`package.json`, `tsconfig.json`)
- **App Router**: present (`app/layout.tsx`, `app/page.tsx`, `app/api/visitors/route.ts`)
- **Package manager**: **npm** (presence of `package-lock.json`; scripts use `next dev/build/start`)

### Major dependencies (file-backed)
From `package.json`:
- **Maps / geo**: `react-simple-maps`, `d3-geo`, `topojson-client`
- **GL map** (present, seemingly sandbox): `maplibre-gl`
- **Motion**: `framer-motion`
- **3D-ish globe**: `cobe` (plus a vendored patch in `app/sandbox/cobe-hero/cobe-patched.js`)
- **Analytics / KV**: `@vercel/analytics`, `@vercel/kv`
- **UI micro**: `@number-flow/react`, `react-grab` (dev-only via script tag)

### Build / deployment clues (file-backed)
- **Vercel**: analytics + KV usage (`app/layout.tsx`, `app/api/visitors/route.ts`, `package.json`)
- **Edge runtime** for visitor API: `export const runtime = "edge";` (`app/api/visitors/route.ts`)
- **Prebuild copy step**: `prebuild`: `cp data/news/summaries.json public/news-summaries.json` (`package.json`)  
  → homepage AI overview fetches `"/news-summaries.json"` at runtime (`components/sections/AIOverview.tsx`)

### Styling / theme / tokens (file-backed)
- **Tailwind CSS v4** with PostCSS plugin `@tailwindcss/postcss` (`package.json`, `postcss.config.mjs`)
- **No `tailwind.config.*` found** (search returned none), implying “configless” Tailwind v4 usage.
- Design tokens declared via Tailwind v4 `@theme` **CSS variables** (`app/globals.css`), including:
  - `--color-bg`, `--color-ink`, `--color-muted`, hairlines, map neutrals
  - stance palette: `--color-stance-*`
- Global reduced-motion “kill switch” (forces transitions/animations to ~0ms) (`app/globals.css`)

### Animation libraries / patterns (file-backed)
- `framer-motion` used for:
  - segmented controls / sliding pills (`components/sections/DimensionToggle.tsx`, `components/ui/TopToolbar.tsx`, `components/panel/SidePanel.tsx`, `components/ui/VisitorsWidget.tsx`)
  - list entrance reveals (`components/sections/LegislationTable.tsx`)
- CSS keyframe animations for drill transitions, highlight sweeps, live dot, accordions (`app/globals.css`)
- IntersectionObserver reveal wrapper: `components/ui/FadeInOnView.tsx`

### 3D libraries / readiness (file-backed)
- `cobe` is used for a dedicated globe page (`app/globe/page.tsx`) and a sandbox hero (`app/sandbox/cobe-hero/page.tsx`)
- MapLibre GL exists in sandbox renderer (`components/map/sandbox/GLMap.tsx`, `app/sandbox/europe/page.tsx` mentions MapLibre)

### CMS / content pipeline (file-backed)
No external CMS integration is visible in runtime app code. Instead:
- **Local JSON datasets** in `data/**` (legislation, news, politicians, datacenters, municipal, figures, etc.)
- **Sync/build scripts** in `scripts/**` orchestrate ingestion/classification/enrichment:
  - multiple “sync” scripts reference **Anthropic** (devDependency `@anthropic-ai/sdk`) and news pipelines (`scripts/sync/*`)
- A generator script writes a compiled TypeScript dataset:
  - `scripts/build-placeholder.ts` → overwrites `lib/placeholder-data.ts` deterministically.

### Concrete tree overview (repo “shape”)
(derived from file discovery; not every file listed)

- `app/`
  - `layout.tsx` → root metadata, Inter font, analytics, dev-only `react-grab`
  - `page.tsx` → **homepage**: fixed map + scroll narrative sections (client)
  - `globals.css` → Tailwind v4 theme tokens + global animations
  - `api/visitors/route.ts` → visitor counter via Vercel KV (edge)
  - `about/page.tsx` → static content page (+ `metadata`)
  - `contact/page.tsx` → static content page (+ `metadata`)
  - `methodology/page.tsx` → methodology page, includes `NuanceLegend`
  - `bills/page.tsx` → bills index (client; uses `LegislationTable`)
  - `legislation/[id]/page.tsx` → entity-specific legislation list (static params)
  - `datacenters/page.tsx` → datacenters index (client; uses `DataCentersOverview`)
  - `datacenters/[id]/page.tsx` → entity-specific facilities list (static params)
  - `news/page.tsx` → news index (uses `LiveNews`)
  - `news/[id]/page.tsx` → entity-specific news list (static params)
  - `politicians/page.tsx` + `politicians/PoliticiansClient.tsx` → politicians explorer (URL-driven filters)
  - `globe/page.tsx` → dedicated interactive globe (cobe)
  - `sandbox/`
    - `europe/page.tsx` → map renderer sandbox (Static/SVG/MapLibre variants)
    - `cobe-hero/page.tsx` + `cobe-patched.js` → patched cobe per-country hover test

- `components/`
  - `map/` → primary map system (`MapShell.tsx`, region maps, county drill, data center dots/cards)
  - `panel/` → `SidePanel.tsx` + content modules (bills, news, facilities, energy)
  - `sections/` → homepage sections (SummaryBar, DimensionToggle, AIOverview, LegislationTable, DataCentersOverview, PoliticiansOverview, LiveNews, NuanceLegend)
  - `ui/` → chrome primitives (TopToolbar, VisitorsWidget, badges, fade wrappers, stepper, etc.)
  - `hero/` → `Hero.tsx` + `GlobeHero.tsx`

- `lib/`
  - `placeholder-data.ts` → **generated** entity dataset (very large)
  - `international-entities.ts` + `international-researched.ts` → curated+researched non-US entities
  - `datacenters.ts` → merges data center datasets from `data/datacenters/*.json`
  - `politicians-data.ts` → merges multiple politician datasets + overlays + bill lookup
  - `dimensions.ts` → tag-to-dimension mapping + gradients + entity color logic
  - `search.ts` → builds an in-memory search index over ENTITIES + bills
  - `municipal-data.ts`, `energy-data.ts`, `map-utils.ts`, etc.

- `types/index.ts` → canonical TS domain model (Entity, Legislation, DataCenter, Legislator, etc.)

- `data/`
  - `legislation/` (`federal.json`, `states/*.json`)
  - `figures/` (`federal.json`, `states/*.json`)
  - `news/` (`summaries.json`, `feeds.json`, etc.)
  - `politicians/` (`us-enriched.json`, `us-summaries.json`, `uk.json`, `eu.json`, `global-leaders.json`, etc.)
  - `datacenters/` (`epoch-ai.json`, `researched.json`, `international.json`)
  - `municipal/` (many state files + `README.md`)
  - `meta/` (sync timestamps, etc.)
  - `votes/`, etc.

- `scripts/`
  - `build-placeholder.ts` → generates `lib/placeholder-data.ts`
  - `sync/*` → ingestion/enrichment pipelines (LegiScan/news/datacenters/international/politicians/etc.)
  - `cleanup/*`, `smoke/*`, utilities

- `public/`
  - `news-summaries.json` (copied from `data/news/summaries.json` at prebuild)
  - basic svg assets

---

## 2. Route Architecture

### Routing system summary (file-backed)
- **App Router** (`app/` directory).
- Mixture of **static routes** and **dynamic `[id]` entity routes** that reference `ENTITIES` from `lib/placeholder-data.ts`.
- Several “index” routes are effectively **alternate views of homepage sections**:
  - `/bills` links back to `/#legislation` on navigation.
  - `/datacenters` links back to `/#datacenters`.
  - `/news` links back to `/#news`.

### Route inventory table

| Route | File(s) | Purpose | Status | Notes |
|---|---|---|---|---|
| `/` | `app/page.tsx` | Main experience: fixed interactive map + long-scroll narrative sections | **production-ready** | Entire page is **client** (`"use client"`). Map is always mounted (`<MapShell/>`), hero reveals it via scroll progress. |
| `/about` | `app/about/page.tsx` | Static “About” | production-ready | Uses `export const metadata` (Next metadata). |
| `/methodology` | `app/methodology/page.tsx` | Explains data sources + taxonomy | production-ready | Includes `NuanceLegend` (taxonomy UI). |
| `/contact` | `app/contact/page.tsx` | Contact info | production-ready | Static. |
| `/bills` | `app/bills/page.tsx` | Full bills table view | production-ready | Client route; `LegislationTable` with `showAll`. On “navigate to entity” it does `router.push("/#legislation")`. |
| `/legislation/[id]` | `app/legislation/[id]/page.tsx` | Entity-specific legislation list (panel-like page) | production-ready | Server component; uses `ENTITIES` and `generateStaticParams()` for entities with bills. |
| `/datacenters` | `app/datacenters/page.tsx` | Full data centers table view | production-ready | Client; uses `DataCentersOverview showAll`. “Navigate” bounces to `/#datacenters`. |
| `/datacenters/[id]` | `app/datacenters/[id]/page.tsx` | Entity-specific facilities list | production-ready | Server component; uses `facilitiesForEntity()` and `generateStaticParams()` for entities with facilities. |
| `/news` | `app/news/page.tsx` | Full news feed view | production-ready | Uses `LiveNews showAll`. |
| `/news/[id]` | `app/news/[id]/page.tsx` | Entity-specific news list | production-ready | Server component; `generateStaticParams()` for entities with news. |
| `/politicians` | `app/politicians/page.tsx`, `app/politicians/PoliticiansClient.tsx` | Politicians explorer (filters/search/sort) | production-ready | Uses URL search params (`useSearchParams`) for deep links (`?country=`, `?id=`, `?bill=`). |
| `/globe` | `app/globe/page.tsx` | Dedicated cobe globe showing facility markers + drawer | **partial** | Looks feature-complete but visually/architecturally separate from main map stack; no reuse of `MapShell`. |
| `/sandbox/europe` | `app/sandbox/europe/page.tsx` | Map renderer sandbox: static/SVG/MapLibre | **partial** | Clearly experimental; not integrated into primary nav. |
| `/sandbox/cobe-hero` | `app/sandbox/cobe-hero/page.tsx`, `app/sandbox/cobe-hero/cobe-patched.js` | Experimental forked cobe hero w/ per-country hover/click mapping | **partial** | Testing a patched cobe pipeline; links back to “real homepage”. |

### Layouts / metadata handling (file-backed)
- Global metadata is set in `app/layout.tsx` (`export const metadata: Metadata = { title, description }`).
- Some routes define their own metadata:
  - `app/about/page.tsx`, `app/contact/page.tsx`, `app/methodology/page.tsx`
- `app/politicians/page.tsx` exports a `metadata` object (not typed as `Metadata` there, but present).
- No route groups (`(group)`) observed in discovered structure.

### Static vs dynamic
- `[id]` dynamic routes (`/legislation/[id]`, `/news/[id]`, `/datacenters/[id]`) are effectively **static pre-renderable** because they export `generateStaticParams()` based on `ENTITIES` (`app/legislation/[id]/page.tsx`, `app/news/[id]/page.tsx`, `app/datacenters/[id]/page.tsx`).

---

## 3. Homepage Decomposition

### Homepage entry + core architecture (file-backed)
- Entry: `app/page.tsx` (**client component**)
- It mounts the **map system** first:

  - `<MapShell revealProgress={progress} dimension={dimension} lens={lens} navigateRef={navigateRef} />` (`app/page.tsx`)
  - `<Hero progress={progress} onRegionClick={handleGlobeRegionClick} />` overlays a fixed hero with an SVG globe (dynamic import to avoid hydration mismatch) (`components/hero/Hero.tsx`)

- Scroll progress is driven by `useScrollProgress()` (`lib/use-scroll-progress.ts`, referenced in `app/page.tsx`).
- A large spacer exists: `<div className="h-[400vh]" aria-hidden />` in `app/page.tsx` to create the hero-to-map reveal runway.

### Homepage sections in order (file-backed)
From `app/page.tsx`:

1. **MapShell (background / fixed)**  
   - **Files**: `components/map/MapShell.tsx` + region maps + panel chrome
   - **Purpose**: persistent interactive atlas + drill-down + side panel

2. **Hero (fixed overlay, scroll-revealed)**  
   - **Files**: `components/hero/Hero.tsx`, `components/hero/GlobeHero.tsx`
   - **Purpose**: landing experience; globe click chooses region; scroll hint + reveal choreography

3. **Section 01 — “At a glance”**  
   - **Files**: `components/sections/SummaryBar.tsx`, `components/sections/DimensionToggle.tsx`, `components/ui/FadeInOnView.tsx`
   - **Data source**: `ENTITIES` from `lib/placeholder-data.ts` (used directly in `SummaryBar`)
   - **Purpose**: summary counts and “Color map by” control (dimension/lens)

4. **Section 02 — “Latest developments” (AIOverview)**  
   - **Files**: `components/sections/AIOverview.tsx`
   - **Data source**: runtime fetch `"/news-summaries.json"` (copied from `data/news/summaries.json` by prebuild) (`package.json`, `AIOverview.tsx`)
   - **Purpose**: narrative weekly summary with highlighted phrases

5. **Section 03 — “Every bill we’re tracking”**  
   - **Files**: `components/sections/LegislationTable.tsx`
   - **Data source**: `ENTITIES` → rows built by iterating `entity.legislation` (`LegislationTable.tsx`)
   - **Interactions**: filters, search, sort; row expand/collapse; “navigate to entity” drives `MapShell` via `navigateRef` and then auto-scrolls to map (`app/page.tsx`)

6. **Section 04 — “Data centers we’re tracking”**  
   - **Files**: `components/sections/DataCentersOverview.tsx`
   - **Data source**: `ALL_FACILITIES` from `lib/datacenters.ts`
   - **Interactions**: search, status filters, sort, row expansion; “navigate to map view” via `onNavigateToEntity`

7. **Section 05 — “Politicians”**  
   - **Files**: `components/sections/PoliticiansOverview.tsx`
   - **Data source**: `ALL_POLITICIANS` from `lib/politicians-data.ts`
   - **Interactions**: scope filter (US/GB/EU/all), tile expand, deep-link to `/politicians?id=...`

8. **Section 06 — “Live news”**  
   - **Files**: `components/sections/LiveNews.tsx`
   - **Data source**: `ENTITIES` → news aggregated from `entity.news`
   - **Interactions**: scope filter + derived topic filter (regex) + search + sort

9. **Footer**  
   - **Files**: inline in `app/page.tsx`
   - **Purpose**: basic navigation links

### Hardcoded vs data-driven (file-backed)
- **Data-driven**:
  - Maps, stances, bills, news, politicians, facilities all ultimately derive from JSON in `data/**`, compiled into TS or imported at runtime.
  - Primary structured models are in `types/index.ts` (Entity/Legislation/DataCenter/NewsItem/Legislator).
- **Hardcoded content**:
  - Section headings/blurbs are hardcoded in `app/page.tsx` and some section components.
  - `AIOverview.tsx` contains a fallback `CURATED` highlight phrases map (hardcoded).
  - International entities have significant hand-curated content in `lib/international-entities.ts` (not hardcoded UI, but hardcoded “content”).

### Strengths / weaknesses per section (decision-grade)

1) **MapShell**
- **Strengths**
  - Highly featured interaction model: region swipe rail, NA drill stack (countries→states→counties), pinch-zoom, keyboard navigation, tooltip system, panel docking, facility hover/pin (`components/map/MapShell.tsx`)
  - Explicit performance intent: hover gating during drag; DOM-driven rail transforms to avoid re-rendering heavy map subtrees (`MapShell.tsx`)
  - Browser back/forward integration via `window.history.pushState` with custom nav IDs (`MapShell.tsx`)
- **Weaknesses**
  - Centralizes too much: `MapShell.tsx` is doing navigation history, gesture systems, tooltip rendering, municipal/entity adaptation, legend rendering, and map mounting in one module (high coupling).
  - Depends on **monolithic `ENTITIES`** dataset from `lib/placeholder-data.ts` for most content surfaces.
- **Keep / refactor / remove**: **Refactor** (keep the interaction concepts, split the module).

2) **Hero + GlobeHero**
- **Strengths**
  - Smart handling of hydration mismatch via `dynamic(..., { ssr:false })` (`components/hero/Hero.tsx`)
  - Clear “region selection” UX: click globe → sets region in map before scrolling (`app/page.tsx`)
- **Weaknesses**
  - Globe is SVG projection-based (`react-simple-maps` + `d3-geo`), separate from cobe-based globe used elsewhere (`/globe`, sandbox). Two globe implementations exist.
- **Keep / refactor / remove**: **Keep** conceptually; **Refactor** to decide on one globe stack.

3) **SummaryBar**
- **Strengths**
  - Simple, legible aggregation of US states by stance using `ENTITIES` (`components/sections/SummaryBar.tsx`)
- **Weaknesses**
  - Imports `ENTITIES` directly in a client component, which can force large data into the client bundle (risk; see Section 9).
- **Keep / refactor / remove**: **Refactor** (data access pattern).

4) **DimensionToggle**
- **Strengths**
  - Clear lens/dimension model backed by explicit enums in `types/index.ts` and gradients/colors in `lib/dimensions.ts`
- **Weaknesses**
  - None structural; it’s fairly isolated.
- **Keep / refactor / remove**: **Keep**

5) **AIOverview**
- **Strengths**
  - Explicitly avoids bundling a large JSON blob by fetching `public/news-summaries.json` at runtime (`components/sections/AIOverview.tsx`, `package.json` prebuild)
  - Good “highlight span” mechanism for narrative emphasis.
- **Weaknesses**
  - Summary pipeline is external to the app runtime; if `public/news-summaries.json` isn’t produced, it falls back to empty state (it does tell you what script to run).
- **Keep / refactor / remove**: **Keep** (pattern is good)

6) **LegislationTable**
- **Strengths**
  - Robust filtering model: jurisdiction/category/status/dimension tags/search/sort, plus expandable row details (`components/sections/LegislationTable.tsx`)
  - Navigates map via a well-defined `ViewTarget` (`types/index.ts`)
- **Weaknesses**
  - Client component imports `ENTITIES` (same bundle size risk).
- **Keep / refactor / remove**: **Refactor** (data access + shared filtering logic extract).

7) **DataCentersOverview**
- **Strengths**
  - Clean table surface and meaningful derived stats (`components/sections/DataCentersOverview.tsx`)
  - Uses a dedicated data module `lib/datacenters.ts` merging sources (`epoch-ai` + researched + international).
- **Weaknesses**
  - Navigation target logic looks incomplete for non-US: `targetForFacility()` routes any non-US country to `{ region: "asia", naView:"countries", selectedGeoId:null }` regardless of actual country/region (`DataCentersOverview.tsx`). That is a concrete correctness gap for EU facilities.
- **Keep / refactor / remove**: **Refactor** (navigation correctness + shared “entity lookup” mapping).

8) **PoliticiansOverview**
- **Strengths**
  - Good “featured set” logic and tile UI; deep-link integration (`/politicians?id=...`) (`components/sections/PoliticiansOverview.tsx`)
- **Weaknesses**
  - Again: direct client import of `ALL_POLITICIANS` (potentially large).
- **Keep / refactor / remove**: **Refactor** (data access strategy).

9) **LiveNews**
- **Strengths**
  - Sophisticated filtering (scope/topic/search) and relevance scoring with recency decay (`components/sections/LiveNews.tsx`)
- **Weaknesses**
  - News model lacks first-class categorization; topic filters are regex-derived from headline/summary (fragile by design, but it is explicitly documented).
  - Uses `ENTITIES` in client (bundle size risk).
- **Keep / refactor / remove**: **Refactor** (data access + optional “topic” schema).

### Can this homepage support a “homepage command center” model?
**Partially, but with architectural constraints.** Evidence:
- The homepage already acts as a “command center” in practice: `MapShell` is always mounted and multiple sections drive navigation via `navigateRef` and `ViewTarget` (`app/page.tsx`, `components/map/MapShell.tsx`, `types/index.ts`).
- The limiting factor is **coupling + data-loading strategy**:
  - `MapShell.tsx` is a “god component.”
  - Several homepage sections import large datasets directly (`ENTITIES`, `ALL_POLITICIANS`), implying the command center may be paying for data it doesn’t need on initial load.

---

## 4. Component System Audit

### Major component clusters (file-backed)

#### A) Map system (`components/map/*`)
- **Core orchestrator**: `components/map/MapShell.tsx`
  - Owns: region rail (NA/EU/Asia), drill stack, gesture handling (swipe/pinch/wheel), tooltip rendering, facility hover/pin, panel integration.
- **Region maps**:
  - `NorthAmericaMap.tsx`, `USStatesMap.tsx`, `CountyMap.tsx`, `EuropeMap.tsx`, `AsiaMap.tsx`
- **Data center overlays**:
  - `DataCenterDots.tsx`, `DataCenterCard.tsx`
- **Mobile UI**:
  - `MobileLegend.tsx`
- **Sandbox renderers**:
  - `components/map/sandbox/*` including `GLMap.tsx`, `ZoomableSvgMap.tsx`, `StaticAdapter.tsx`

**Reusability**: high concept value, but current structure is over-centralized in `MapShell.tsx`.

#### B) Side panel system (`components/panel/*`)
- `SidePanel.tsx` is the container
- Content modules:
  - `LegislationList.tsx`, `BillExpanded.tsx`
  - `NewsSection.tsx`
  - `DataCentersList.tsx`, `FacilityDetail.tsx`
  - `EnergySection.tsx`, `KeyFigures.tsx`
  - `ContextBlurb.tsx`

**Reusability**: good modularity inside the panel; `SidePanel.tsx` itself is large but already decomposed into submodules.

#### C) Homepage sections (`components/sections/*`)
- `SummaryBar.tsx`, `DimensionToggle.tsx`, `AIOverview.tsx`, `LegislationTable.tsx`, `DataCentersOverview.tsx`, `PoliticiansOverview.tsx`, `LiveNews.tsx`, `NuanceLegend.tsx`

**Reusability**: medium; many are tightly bound to global datasets (`ENTITIES`, `ALL_FACILITIES`, `ALL_POLITICIANS`) rather than accepting data as props.

#### D) UI primitives (`components/ui/*`)
Notables:
- `TopToolbar.tsx` (map chrome + modals)
- `VisitorsWidget.tsx` (KV-backed visitor pill with fallback drift)
- `FadeInOnView.tsx` (IO-based reveal primitive)
- `DepthStepper.tsx`, `Breadcrumb.tsx` (navigation chrome)
- `StanceBadge.tsx`, `StagePill.tsx`, `ProposalProgress.tsx`, `BillTimeline.tsx` (domain UI atoms)

**Reusability**: generally good; these are the best “foundations” for a revamp.

### Duplicated / competing patterns (file-backed)
- **Two globe stacks**:
  - SVG orthographic globe: `components/hero/GlobeHero.tsx`
  - cobe globe: `app/globe/page.tsx` and `app/sandbox/cobe-hero/page.tsx` (+ patched JS)
- **Multiple map renderers exist** (static, zoomable SVG, MapLibre GL) but only the static/primary approach appears in production `MapShell` (sandbox suggests exploration).

### Components that look like strong foundations
- `components/map/MapShell.tsx` **interaction design** (not the file shape)
- `components/panel/*` modular content blocks (especially `LegislationList.tsx`, `FacilityDetail.tsx`, `NewsSection.tsx`)
- `components/sections/DimensionToggle.tsx` + `lib/dimensions.ts` + `types/index.ts` (explicit model)
- `components/ui/FadeInOnView.tsx`, `components/ui/TopToolbar.tsx`

### Components likely needing rewrite or major refactor
- `components/map/MapShell.tsx` (split responsibilities; currently too monolithic)
- Data-heavy client sections importing global datasets:
  - `components/sections/SummaryBar.tsx`, `LegislationTable.tsx`, `LiveNews.tsx`, `PoliticiansOverview.tsx`

### Dead weight / likely deletions
- Sandbox routes and renderers are not part of the primary user-facing architecture:
  - `app/sandbox/*`
  - `components/map/sandbox/*`
  - These are valuable as R&D but should not remain in production route space in a redesign unless intentionally exposed.

---

## 5. Data / Content Model Audit

### What the content model is today (file-backed)

#### Primary domain types (canonical)
- `types/index.ts` defines:
  - `Entity` (jurisdiction / bloc / overview)
  - `Legislation` (with `impactTags`, `category`, `dimensionStances`, stage, sponsors, optional vote tallies)
  - `NewsItem`
  - `DataCenter` (+ proposal metadata)
  - `Legislator` (+ votes, alignment, donor exposure, researchedBills, etc.)
  - `ViewTarget` (navigation contract between tables/search and the map)

This is a real schema, not ad hoc.

#### How “projects” are represented today
There is **no “project” concept** in this codebase. The closest equivalents:
- **Entity** (jurisdiction) is the central node (`types/index.ts`)
- **DataCenter** is a facility node (`types/index.ts`)
- **Legislation** and **NewsItem** attach to Entities
- **MunicipalEntity** exists for county/city actions (`types/index.ts`) and is adapted into `Entity` inside `MapShell.tsx`.

So: **the site is a policy atlas**, not a portfolio/projects site.

#### Where Entities come from (content pipeline)
- **US (NA) entities** are generated from JSON:
  - `scripts/build-placeholder.ts` composes:
    - `data/legislation/federal.json`
    - `data/legislation/states/*.json`
    - `data/figures/federal.json`
    - `data/figures/states/*.json`
    - `data/news/summaries.json` (entity news extraction)
  - Output: `lib/placeholder-data.ts` (generated; not hand-edited)
- **International entities** are merged from:
  - Hand-curated baselines in `lib/international-entities.ts` (`HAND_CURATED`)
  - Claude-researched additions in `lib/international-researched.ts` (via `scripts/sync/international.ts`, per comments)
  - Export: `INTERNATIONAL_ENTITIES` (`lib/international-entities.ts`)
- **All entities**: `ENTITIES` from `lib/placeholder-data.ts` is `[...NA_ENTITIES, ...INTERNATIONAL_ENTITIES]` (as generated by `scripts/build-placeholder.ts`)

#### Data centers (file-backed)
- `lib/datacenters.ts` imports:
  - `data/datacenters/epoch-ai.json`
  - `data/datacenters/researched.json`
  - `data/datacenters/international.json`
- Exports `ALL_FACILITIES`, plus region subsets and `facilitiesForEntity()`.

#### Politicians (file-backed)
- `lib/politicians-data.ts` merges:
  - `data/politicians/us-enriched.json` (votes/alignment/donors/etc.)
  - `data/politicians/suspicious-votes-cleaned.json`
  - `data/politicians/us-summaries.json` (Claude-researched summaries)
  - `data/politicians/uk.json`, `data/politicians/eu.json`
  - `data/politicians/global-leaders.json`
  - plus overlays from `ENTITIES` keyFigures (`lib/placeholder-data.ts`)

#### News summaries for AIOverview (file-backed)
- AIOverview fetches `public/news-summaries.json` (`components/sections/AIOverview.tsx`)
- That file is created by:
  - `prebuild` script: `cp data/news/summaries.json public/news-summaries.json` (`package.json`)

#### Municipal / county-level actions (file-backed)
- `types/index.ts` defines `MunicipalEntity` and `MunicipalAction`.
- `components/map/MapShell.tsx` adapts municipal actions into `Entity` + `Legislation`-shaped rows (`municipalityToEntity()` and `actionToLegislation()` in `MapShell.tsx`).
- Data source: `lib/municipal-data.ts` (not shown here, but referenced by `MapShell.tsx`).

### Concepts asked in your target architecture (evidence-based answers)

- **How are projects represented today?**  
  **They aren’t.** There is no `Project` type, no `projects/` routes, no slug model. The central content type is `Entity` + attached `Legislation`, `NewsItem`, `DataCenter`, `Legislator` (`types/index.ts`).

- **Is there already a schema for projects?**  
  **No.** Closest schema is `Entity` in `types/index.ts`.

- **Is there any concept of industries?**  
  **Only indirectly** in politician donor analysis:
  - `SuspiciousVote.industry` exists (`types/index.ts`)
  - `CATEGORY_TO_INDUSTRY` mapping exists (`lib/politicians-data.ts`)
  There is **no** first-class “Industry page” model.

- **Case studies / featured work?**  
  Not in a portfolio sense. “Featured” exists only as curated politician priority sets (`components/sections/PoliticiansOverview.tsx`, `app/politicians/PoliticiansClient.tsx`).

- **Regions/countries for the map?**  
  Yes:
  - `Region = "na" | "eu" | "asia"` (`types/index.ts`)
  - Entities have `region` and `geoId` (ISO numeric for many countries, e.g. Germany `276`) (`lib/international-entities.ts`)
  - NA drill uses `NaView = "countries" | "states" | "counties"` (`types/index.ts`)

- **Lab/R&D work?**  
  Not as content. There are **sandbox routes** (`app/sandbox/*`) which function as R&D experiments, but no lab content model.

- **Featured 3D showcase metadata?**  
  No. 3D usage is purely implementation (cobe) and not modeled as content.

### Can the current data model support your target structure?
If the goal is to redesign/extend **this same policy atlas** into:
- homepage command center
- world map
- detail pages (for entities/facilities/bills/news)
…then the current data model is already aligned.

If the goal is to evolve into a **portfolio operating system** with:
- project detail pages
- industry pages
- optional lab/R&D content
- optional 3D showcase metadata

…then **the current content model is not shaped for that** (because it is centered on jurisdictions/bills/facilities/politicians). You would need a new top-level content type (e.g., `Project`) and reframe or map existing nodes into that model.

Concrete limitation: the existing primary “detail” routes are entity-ID based (`/legislation/[id]`, `/news/[id]`, `/datacenters/[id]`) and assume `ENTITIES` is the spine of navigation. There is no taxonomy or routing for “industry,” and no `slug`-based content abstraction.

---

## 6. Styling / Design System Audit

### What exists (file-backed)
- Tailwind v4 import: `@import "tailwindcss";` (`app/globals.css`)
- Tailwind v4 tokens via `@theme`:
  - typography: `--font-sans`
  - neutrals: `--color-bg`, `--color-ink`, `--color-muted`, `--color-hairline`
  - stance palette and map base colors (`app/globals.css`)
- Components use Tailwind utility classes heavily (every component inspected).

### Design system signals vs ad hoc
**There is a partial design system.** Evidence:
- Consistent “Apple-style” neutrals and hairline borders are repeated across UI (`bg-white/85 backdrop-blur-2xl border border-black/[.04] shadow[...]` appears in `TopToolbar.tsx`, `VisitorsWidget.tsx`, tooltip cards in `MapShell.tsx`, etc.).
- Domain primitives exist (`StanceBadge.tsx`, `BillTimeline.tsx`, `StagePill.tsx`).
- Explicit tokenization for stance colors and map palette is present in CSS variables (`app/globals.css`).

**But** many layout primitives are still embedded in large components (e.g., `SidePanel.tsx` and `MapShell.tsx` contain a lot of bespoke spacing/shadow recipes inline).

### Scalability assessment for “premium” UI
- **Premium map UI**: already close; map chrome, blur pills, and motion patterns are cohesive (`MapShell.tsx`, `TopToolbar.tsx`, `SidePanel.tsx`).
- **Project detail pages / industry pages**: styling primitives exist, but the content model/routing is the bigger blocker (Section 5).
- **Apple-style scroll storytelling**: hero reveal + `FadeInOnView` + keyframe transitions show readiness (`app/page.tsx`, `components/ui/FadeInOnView.tsx`, `app/globals.css`).

---

## 7. Motion / Interaction / 3D Readiness

### What exists (file-backed)

#### Motion
- Framer Motion: pill/indicator transitions, widget count transitions, table row reveals (`DimensionToggle.tsx`, `TopToolbar.tsx`, `SidePanel.tsx`, `VisitorsWidget.tsx`, `LegislationTable.tsx`)
- CSS keyframes:
  - drill transitions (`.animate-drill-in`, `.animate-drill-out`)
  - highlight sweep (`.highlight-sweep`)
  - live dot pulse (`.live-dot`)
  - accordion grid-row technique (`.accordion`) (`app/globals.css`)
- Reduced-motion global override (decorative motion disabled universally) (`app/globals.css`)

#### Interactions
- Map interactions are extremely rich:
  - Region swipe rail driven by DOM transforms to avoid rerenders (`MapShell.tsx`)
  - Pinch zoom + two-finger pan layer (`MapShell.tsx`)
  - Keyboard navigation (WASD/arrows; 1/2/3 region jump; Esc resets) (`MapShell.tsx`)
  - Browser history sync (`MapShell.tsx`)
  - Tooltip complexity including county-specific tooltips and per-dimension aggregates (`MapShell.tsx`)

#### 3D / WebGL
- `cobe` globe:
  - Dedicated `/globe` page uses WebGL canvas + markers + drawer (`app/globe/page.tsx`)
  - Sandbox includes a patched `cobe-patched.js` and country-id texture hover mapping (`app/sandbox/cobe-hero/page.tsx`)

### Readiness classification (per your required rubric)
**Partially ready but needs architecture changes.**

Why (file-backed):
- The codebase already supports premium motion and high-interaction maps (clear from `MapShell.tsx` complexity and motion patterns).
- But interaction logic is centralized in a few very large components (`MapShell.tsx`, `SidePanel.tsx`), which will become brittle when adding major new content types (projects/industries/labs) and additional map layers.
- There are two separate globe implementations (SVG globe hero vs cobe globe) which suggests the 3D layer is not yet a unified part of the product architecture.

---

## 8. State Management / App Logic Audit

### What state management exists (file-backed)
- No Zustand/Redux observed; no store directory; no imports of those libraries in discovered files.
- State is managed via:
  - React local state + refs (`useState`, `useRef`, `useMemo`, `useEffect`)
  - URL search params for politicians (`app/politicians/PoliticiansClient.tsx`)
  - Browser history syncing via `window.history.pushState` in `MapShell.tsx`
- Server/client boundaries:
  - Many pages are server components by default, but the homepage and most interactive sections are explicit `"use client"` (e.g., `app/page.tsx`, most `components/sections/*`, `components/map/MapShell.tsx`).

### Health assessment
- **Simple and healthy for current scope**, but **hidden complexity is concentrated**:
  - `MapShell.tsx` contains a large amount of gesture/state logic (swipe, pinch, drill history, tooltips, facility selection, panel size).
  - That complexity is “managed” through refs and careful gating (good), but still hard to extend safely without refactoring.

### Will patterns break as interactions expand?
Potential breakpoints (evidence-based):
- Expanding beyond the `Region` enum (`"na" | "eu" | "asia"`) requires touching many conditionals (`types/index.ts`, `MapShell.tsx`, `TopToolbar.tsx`, multiple maps).
- Adding new cross-cutting content types (projects/industries) will require new “selection” state beyond `selectedGeoId` + facility selection; current navigation contract `ViewTarget` is map-centric (`types/index.ts`) and doesn’t model “open project panel” or “industry filter state.”

---

## 9. Performance / Maintainability / Risk Audit

### Critical risks

1) **Client bundle bloat risk from importing `ENTITIES` into client components**
- **Where**: `components/sections/SummaryBar.tsx`, `components/sections/LegislationTable.tsx`, `components/sections/LiveNews.tsx`, plus `lib/search.ts` builds an index over `ENTITIES`.
- **Why it matters**: `lib/placeholder-data.ts` is generated and can be extremely large (the file size read attempt exceeded limits). If it is pulled into the client bundle, initial load can degrade heavily.
- **Blocks**: “homepage command center” performance; any attempt to add richer homepage UI will fight load time.

2) **`components/map/MapShell.tsx` is a monolith (high coupling)**
- **Where**: `components/map/MapShell.tsx`
- **Why it matters**: It combines navigation stack, gesture systems, tooltip rendering, municipal adaptation, map mounting, and legend rendering. Changes for new features risk regressions in unrelated behaviors.
- **Blocks**: adding a world map layer stack, adding new panels/content types, adding 3D overlays, or multiple map modes.

3) **Navigation targeting correctness gaps for non-US facilities**
- **Where**: `components/sections/DataCentersOverview.tsx` (`targetForFacility`)
- **Why it matters**: Non-US facilities don’t route to a specific entity/country; this undermines “detail pages” and command-center navigation fidelity.
- **Blocks**: reliable “project detail pages” analog for facilities; accurate map navigation.

### Important risks

4) **Two separate globe/3D approaches**
- **Where**: `components/hero/GlobeHero.tsx` vs `app/globe/page.tsx` vs `app/sandbox/cobe-hero/page.tsx`
- **Why it matters**: Increases maintenance cost and makes it unclear which tech is the future.  
- **Blocks**: “optional 3D showcase layer” becoming coherent.

5) **Topic classification in news is regex-derived**
- **Where**: `components/sections/LiveNews.tsx` (`TOPIC_KEYWORDS`)
- **Why it matters**: Works now but will get brittle as content expands and as you try to build a stronger taxonomy (like industries).  
- **Blocks**: industry-driven content pages (if those rely on consistent classification).

### Minor risks

6) **Sandbox routes in production tree**
- **Where**: `app/sandbox/*`, `components/map/sandbox/*`
- **Why it matters**: Not harmful, but adds noise and can confuse future maintainers unless intentionally kept as internal tooling.  
- **Blocks**: maintainability clarity, not functionality.

---

## 10. Keep / Refactor / Rebuild

### 1) KEEP / REUSE
- `types/index.ts` (**strong domain schema** and navigation contract `ViewTarget`)
- `lib/dimensions.ts` (**dimension/tag model + gradients + entity coloring**)
- `components/ui/*` primitives (especially `FadeInOnView.tsx`, `TopToolbar.tsx`, badges/timelines)
- `components/panel/*` modular content blocks (Legislation/News/Facility/Energy sections)
- The **interaction concepts** in `components/map/MapShell.tsx` (rail swipe, drill stack, keyboard model)

### 2) REFACTOR
- `components/map/MapShell.tsx` (split into: navigation state machine, gesture controllers, map renderer host, tooltip system, facility layer, municipal adapter)
- Data-heavy homepage sections that import global datasets directly:
  - `components/sections/SummaryBar.tsx`
  - `components/sections/LegislationTable.tsx`
  - `components/sections/LiveNews.tsx`
  - `components/sections/PoliticiansOverview.tsx`
- Data center navigation targeting:
  - `components/sections/DataCentersOverview.tsx` (non-US mapping)
- Unify globe strategy:
  - choose between SVG globe (`components/hero/GlobeHero.tsx`) vs cobe globe (`app/globe/page.tsx` + `app/sandbox/cobe-hero/*`)

### 3) REBUILD / DELETE
- **Delete or quarantine from production routes**:
  - `app/sandbox/*`
  - `components/map/sandbox/*`
  (Keep in a separate internal-only area if still needed.)
- Potentially rebuild `/globe` if you want it integrated into the main map/command-center architecture; currently it’s a separate app surface with its own state and UI patterns.

---

## 11. Recommended Target Architecture

This recommendation is constrained to what’s actually present: a policy-atlas with a powerful map shell, entity-based content, and optional 3D experiments.

### Explicit recommendation: **hybrid refactor + selective rebuild**
**Why**:
- The core interaction design and domain schema are strong foundations worth keeping (`types/index.ts`, `MapShell` behaviors, panel modules).
- The current implementation concentrates too much complexity into a few files and risks performance issues due to data loading patterns.
- Introducing “projects/industries/lab/3D showcase” is a conceptual shift that will require **selective rebuild** of content modeling and routes, even if the UI primitives are reused.

### Route architecture (target)
- Keep App Router, but introduce a clearer separation between:
  - **Atlas surfaces** (map + jurisdictions)
  - **Content surfaces** (projects/industries/lab)
- Concrete proposed route groups (do not implement yet):
  - `/` → command center (still map-first)
  - `/atlas` (optional) → map-focused entry if homepage becomes more editorial
  - `/jurisdictions/[id]` (or keep existing patterns but normalize) → unified entity detail
  - `/facilities/[id]` → facility detail (currently only embedded via panel + `/globe`)
  - `/projects/[slug]` → new portfolio “project detail pages”
  - `/industries` + `/industries/[slug]` → new taxonomy pages
  - `/lab` + `/lab/[slug]` → optional R&D content
  - `/showcase/[slug]` → optional 3D showcase items

### Content model architecture (target)
- Keep existing atlas schema (`Entity`, `Legislation`, `DataCenter`, `NewsItem`, `Legislator`) but stop treating it as the only top-level “content.”
- Introduce a new first-class model (conceptual):
  - `Project` with relationships to:
    - linked entities (countries/states/regions)
    - linked facilities (data centers)
    - linked legislation/news
    - linked industries
    - optional 3D metadata (scene config refs, camera, assets)
- Key constraint: the current pipeline writes a giant `lib/placeholder-data.ts`. For an extensible architecture, move toward:
  - smaller, queryable modules (per-entity/per-topic slices), or
  - runtime fetching of JSON chunks (as already proven with `AIOverview.tsx` fetching `news-summaries.json`).

### Homepage “command center” architecture (target)
- Preserve the pattern: “map mounted + sections drive it via a navigation contract.”
- Refactor `ViewTarget` into a richer command-center router state that can represent:
  - map selection (region/drill/geo)
  - active panel tab
  - active content context (project/industry/lab)
- Keep the chrome primitives (`TopToolbar`, `SidePanel`, `DepthStepper`) but make panel content pluggable by “content type.”

### Map architecture (target)
- Split `MapShell` into explicit layers:
  - **MapRendererHost** (mounts NA/EU/Asia maps)
  - **InteractionController** (rail swipe, pinch pan/zoom, wheel gestures)
  - **NavigationStateMachine** (history stack + browser sync)
  - **OverlayLayer** (tooltips, data center dots, selection)
  - **PanelCoordinator** (selected entity/facility → panel props)
- Decide intentionally whether MapLibre GL becomes a first-class renderer (currently sandbox-only) vs continuing with `react-simple-maps`.

### Project detail pages / industry pages (target)
- These must be newly introduced; there is no existing reusable route/data model for them.
- Reuse UI primitives (cards, pills, fade-on-view, panel modules) and motion patterns.

### Optional lab/R&D architecture
- Replace `app/sandbox/*` with a controlled “lab” surface:
  - either excluded from production builds, or
  - mounted under `/lab` with explicit content and routing rather than ad hoc experiments.

### Optional premium motion / 3D architecture
- Unify globe/3D approach:
  - If cobe is the direction, align hero + showcase + any globe interactions to one system and remove the duplicate SVG globe path.
  - If SVG globe remains, keep cobe strictly for showcase scenes (but then treat it as a different “product layer,” not a navigation control).

---

## 12. Executive Summary

### 1. What this codebase already does well
- **Strong domain schema** for an interactive atlas (`types/index.ts`)
- **Highly capable map interaction model** (rail swipe, drill-down, pinch, keyboard, history sync) (`components/map/MapShell.tsx`)
- **Cohesive premium chrome** (blur pills, stance palettes, motion details) (`app/globals.css`, `TopToolbar.tsx`, `SidePanel.tsx`)
- **Real content pipeline** based on reproducible JSON + generator scripts (`scripts/build-placeholder.ts`, `data/**`, `lib/placeholder-data.ts`)

### 2. What is structurally weak
- Over-centralization in `components/map/MapShell.tsx`
- Data access pattern that likely pulls large datasets into client bundles (multiple `components/sections/*` import `ENTITIES` / `ALL_POLITICIANS`)
- Non-US facility navigation mapping appears incomplete (`components/sections/DataCentersOverview.tsx`)

### 3. What will become a problem if we start redesigning blindly
- Performance regressions and brittle interactions due to the `MapShell` monolith + heavy client imports
- Confusion/duplication around globe/3D direction (SVG globe vs cobe globe)
- Attempting to add “projects/industries/lab” without introducing a new content model will cause hacks around `Entity` and route structure.

### 4. The smartest revamp path
- **Hybrid refactor + selective rebuild**:
  - Refactor map shell architecture + data loading boundaries
  - Keep and reuse the UI primitives, panel submodules, and the domain typing model
  - Selectively rebuild routing + content modeling for “projects/industries/lab/showcase”

### 5. What an implementation agent should be told to do next
- First, do a performance-oriented audit of client bundles focusing on which components import `lib/placeholder-data.ts` and `lib/politicians-data.ts`, and redesign the data access boundaries (server fetch / chunked JSON / per-route slices).
- Then, break `components/map/MapShell.tsx` into composable modules with explicit responsibilities (navigation, gestures, overlays, renderer host, panel coordination) while preserving behavior.
- Finally, introduce a new `Project`/`Industry`/`Lab` content model and route architecture that can coexist with (not overwrite) the existing atlas schema.