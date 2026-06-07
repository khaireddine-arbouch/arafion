# Spec: Cinematic Globe Hero + Work Explorer (Arafion)

**Status:** Draft for implementation (locked decisions in §0)  
**Scope:** Visual direction, information architecture, content rules, and acceptance criteria for the **homepage** cinematic globe, the temporary `/globe` route, and the structured “Work” portfolio surface.  
**Non-goal:** Replacing `data/arafion-data/projects.json` schema — this spec consumes it and constrains how it is *shown*.

---

## 0. Locked decisions (stakeholder input)

| Topic | Decision |
|-------|----------|
| **Where the full cinematic globe lives** | **`/` (homepage)** — the complete cinematic globe experience is the primary hero on the home page, not a shortened teaser linking away. |
| **`/globe` route** | **Keep during development** for QA and sharing; **remove before final website ship** so production has a single globe entry point on home. Until removal, both `/` and `/globe` should share one implementation (shared component) to avoid drift. |
| **Project click → detail UI** | Use the **same project card / panel pattern as the current homepage interactive map** — i.e. the `FacilityDetail` experience inside the map shell / side panel (`components/panel/FacilityDetail.tsx`, composed via `SidePanel` in `components/map/MapShell.tsx`). **Do not** use the dark right-rail / bottom-sheet drawer pattern from `app/globe/page.tsx` as the canonical detail UI on home. (The globe page drawer may remain temporarily on `/globe` only until that route is deleted, or `/globe` can be switched to the same card for parity.) |
| **Projects with null or vague coordinates** | **Region centroids only** — derive stable lat/lng from `location.region` / normalized country (see `lib/map-projects.ts`); do not scatter random ocean points and do not invent city pins. |
| **Compare UX** | **Undecided.** Recommended implementation default: **modal or slide-over compare** on `/work` for MVP (less routing work); upgrade to **`/work/compare?ids=`** if shareable compare links become a priority before launch. |

---

## 1. Product intent

### 1.1 Dual-layer story

| Layer | Role | Visitor feeling |
|-------|------|-----------------|
| **Cinematic globe** (**`/`** homepage hero — full experience) | Emotional hook: global reach, motion, craft | “This is a serious technical studio with real global work.” |
| **`/globe`** | **Temporary** mirror for dev/review until pre-ship removal (see §0). | Same as above; not a second canonical UX long-term. |
| **Work explorer** (dedicated `/work` and/or same-page section *below* the fold on marketing pages) | Functional proof engine | “I can filter, compare, read cases, and verify what they actually ship.” |

**Critical product rule:** Do not make the legacy regional map / table the primary above-the-fold hero — it reads governmental and data-heavy. Do not make the spinning globe the *only* way to browse the full portfolio — it is beautiful but not scalable for comparison and proof.

**Execution bar:** Surgical changes only — no speculative redesign of unrelated pages, no new fake metrics, no placeholder client names in user-visible surfaces.

---

## 2. Visual direction — Cinematic Globe Hero

### 2.1 Atmosphere

- **Background:** Deep, near-black base (not pure `#000` unless contrast-tested); subtle vignette or radial falloff so the globe reads as the focal plane.
- **Globe body:** Dotted / particle / low-noise sphere (current `cobe`-style treatment is aligned); avoid photorealistic Earth texture for this hero — keep it abstract-technical.
- **Motion:** Slow, confident auto-rotation; pause on user interaction; resume gracefully after idle.
- **First impression:** Premium, restrained, high signal-to-noise — motion supports meaning, not decoration.

### 2.2 Geographic storytelling (arcs)

- **Animated great-circle arcs** connecting a small, curated set of hubs, emphasizing:
  - **Morocco**
  - **Türkiye**
  - **Europe** (treat as a cluster or 1–2 representative coordinates — implementation chooses stable anchor points; labels stay regional, not fake city claims)
  - **International** — projects whose `location` is composite (`… / International`) or non-country-specific: use **region / country centroid** rules (§0); arcs may connect hub centroids without implying a fake HQ street address.

- Arcs are **thin, low-opacity**, possibly **pulse-traveling** highlights (one direction or bidirectional — pick one system-wide). Avoid rainbow gradients; prefer single accent hue + neutral secondary.

### 2.3 Project pins

- **Subtle by default:** Small markers; slight bloom or ring only on hover / focus / selection — not Las Vegas LEDs on every pin.
- **Density:** If many projects share a cell, cluster visually (existing clustering logic may be reused) but **sorting and sizing must not imply fake MW, GW, H100e, dollar capex, or any energy-style capacity** (see §4).

### 2.4 Labels

- **Subtle labels:** Low-contrast typography; appear on hover, selection, or zoom — not a wall of text at default zoom.
- **Label content = Arafion project categories** — use vocabulary derived from canonical `ServiceCategory` in `data/arafion-data/schema.json`, rendered as human-readable strings (examples: “AI systems”, “SaaS & software”, “Dashboards & intelligence”, “Architecture visualization”, “Marketing & production”, “Websites”, “E‑commerce”, “Internal tools”, “Digital presence”, “3D rendering”).  
  - **Do not** show client legal names on the globe by default when `client.isConfidential` or visibility rules forbid it; prefer category + region or “Confidential engagement” patterns consistent with site policy in `data/arafion-data/site-content.json`.
- **Forbidden on globe UI:** Invented megawatt/gigawatt/cost/compute labels, “institutional trading volume” style numbers, or any metric not sourced from an explicit, truthful field in `projects.json` (most portfolio rows will **not** have public quantitative KPIs — **do not fabricate**).

### 2.5 Brand posture

Copy and framing should reinforce: **global · technical · serious · product-grade** — language is precise, not hype. The layout should feel like a **product surface** (spacing, typography hierarchy, intentional empty space), not a stock template hero (generic gradient + three feature cards).

---

## 3. Micro-signals (animated affordances)

Small, looping or triggered **ambient signals** around the globe or in the chrome (not misleading counters tied to fake data):

| Signal | Meaning (communicative only) | Implementation note |
|--------|-------------------------------|---------------------|
| Requests | API / integration / delivery throughput *as a motif* | Abstract pulse, not a number claiming RPS |
| Projects | Active portfolio motion | Optional dot burst or orbit tick |
| Renders | 3D / viz pipeline | Subtle scanline or frame flash |
| Campaigns | GTM / ads / production | Timeline shimmer |
| Dashboards | Intelligence surfaces | Grid or spark motif |

These are **stylistic**, not KPI widgets, unless wired to real, approved analytics later.

---

## 4. Data & content integrity (hard rules)

1. **No fake MW / capacity / capex / GPU counts** on the globe or in pin tooltips drawn from legacy `MapProject` fields that were repurposed from an energy map (`capacityMW`, `formatMW`, `formatH100e`, `formatCost` in `app/globe/page.tsx` are **legacy liabilities** — remove from user-visible globe UI or repurpose internally with **zero** user-facing display unless the JSON explicitly contains a truthful, labeled field).
2. **Banned placeholder identities** in any user-visible portfolio or marketing surface tied to this initiative: **NeuroTrade, CIH, QIA**, and other fictional “big logo” names from `lib/placeholder-data.ts`, `lib/international-entities.ts`, `components/sections/ClientMarquee.tsx`, `components/sections/FeaturedCaseStudies.tsx`, etc. Replace with **anonymous**, **aggregated**, or **real `projects.json`** entries only.
3. **Single source of truth:** Portfolio rows come from `data/arafion-data/projects.json`; map/globe transforms via `lib/map-projects.ts` must not invent location or client facts.
4. **`doNotClaim`:** Respect per-project `doNotClaim` (when present in data) in case study and explorer copy.

---

## 5. Interaction — Globe

### 5.1 Click / tap targets

- **Pins (homepage):** Click selects pin → **homepage map project card** — same structure and styling as today’s map selection: **`FacilityDetail`** (white panel, title, status, description, metadata rows, category-style chips — see §0). Positioning may be overlay / side panel over the globe viewport; **content model and component reuse** match the map, not `app/globe/page.tsx`’s dark drawer.
- **Deep links:** Optional `?project=<slug>` on `/` or `/work?project=<slug>` when slug exists, aligned with explorer routing.
- **Regions:** Clicking “empty” ocean should not mis-fire; optional **soft region halos** (EU / MENA / Americas) activated by clicking **region affordances** (outline buttons or segmented map chips) that **rotate and frame** the globe to that centroid — not a second full political map in the hero unless explicitly approved later.

### 5.2 Accessibility

- Keyboard: focusable pins or a “skip to work explorer” link.
- Respect `prefers-reduced-motion`: disable or drastically reduce arc animation and auto-spin; keep static globe + labels.

---

## 6. Work section — Practical project explorer

### 6.1 Placement

- **Preferred:** New route **`/work`** hosting the structured explorer (filters, cards, compare, case studies).  
- **Alternative:** Same homepage as today, but **map / table / `MapShell`-style UI only below the fold**, with a clear in-page anchor (`#work`) and nav entry “Work”.

### 6.2 Required capabilities

| Capability | Description |
|------------|-------------|
| Filter by region | Derived from `location.region` / normalized country (`lib/map-projects.ts` conventions). |
| Filter by service | Multi-select on `serviceCategories` → `ServiceCategory` labels. |
| Filter by status | Map `ProjectStatus` to readable chips (Live, Delivered, In development, etc.). |
| Project cards | Title, category chips, region, status, optional thumbnail from proof types — **no fake metrics**. |
| Compare projects | Select 2–4 projects → comparison table (services, status, region, proof types, stack tags if public) — **no fabricated KPI column**. |
| Case studies | Deep pages or expanded drawers from `slug` / narrative fields in JSON. |
| Browse proof | Filter or badges by `ProofType` (screenshots, renders, public link, etc.). |

### 6.3 Relationship to globe

- Selecting a project in one surface should **optionally sync** URL state (query params) so share links work.
- Globe remains the **hook**; `/work` remains the **system of record** for dense browsing.

---

## 7. Information architecture (summary)

```
/ (home)
  ├─ Full cinematic globe (primary hero) + pin → FacilityDetail-style card
  ├─ Scroll: existing marketing sections, stats, capabilities, etc.
  └─ #work (and/or /work): structured explorer — map/table-style proof engine

/globe
  └─ TEMPORARY: same globe implementation as home for dev/QA; delete before ship

/work  (new or existing pattern extended)
  └─ Filters + cards + compare + case study routes
```

---

## 8. Acceptance criteria (binary)

- [ ] Globe UI shows **no** MW / GW / H100e / dollar investment strings unless backed by explicit truthful project fields and labeled as such.
- [ ] Globe labels and default pin tooltips emphasize **service category** + **region**, not fake client empires.
- [ ] Arc animation includes **Morocco ↔ Türkiye ↔ Europe ↔ international** narrative paths without claiming false office locations.
- [ ] Placeholder client names (**NeuroTrade, CIH, QIA**, etc.) are **absent** from marquee, featured cases, globe sample data, and explorer seed content visible to visitors.
- [ ] Pins are **subtle** at rest; **stronger** on hover/focus/selection.
- [ ] Visitors can **click pins** and **invoke region framing** (if region UI is in scope for v1).
- [ ] **Animated signals** (requests / projects / renders / campaigns / dashboards) exist as subtle motion language, not fake dashboards.
- [ ] **Home** ships the **full** cinematic globe as the hero (not only `/globe`).
- [ ] Pin selection on home opens **`FacilityDetail`** (or a thin wrapper with identical fields/layout), not the `/globe` dark drawer pattern.
- [ ] **`/globe`** is either removed or clearly non-canonical before production ship; no duplicate globe logic forks.
- [ ] **Work explorer** supports region + service + status filters and project cards; **compare** supports at least two projects without fabricated metric columns (compare UX per §0 default until revised).
- [ ] `prefers-reduced-motion` is honored on globe animations.

---

## 9. Implementation pointers (current codebase)

| Area | File / note |
|------|-------------|
| Homepage composition | `app/page.tsx` — integrate full globe hero; reconcile order with `Hero`, `MapShell` (map may move below fold / `/work` per §6). |
| Canonical project card | `components/panel/FacilityDetail.tsx` + `components/panel/SidePanel.tsx` — align with spec §4 (remove MW/capacity from UI); rename “Issues” section to **service categories** / capabilities per `ServiceCategory` when wired to `projects.json`. |
| Globe page (temporary) | `app/globe/page.tsx` — share core globe with home; strip fake aggregate GW stats before any public surface; align detail UI with `FacilityDetail` if route kept. |
| Map data pipeline | `lib/map-projects.ts` — **centroid fallback** for null lat/lng; replace “engagement scale” hacks with neutral weights (e.g. featured, recency, manual `featured` flag) if pin size still needed. |
| Map shell | `components/map/MapShell.tsx` — candidate for relocation to `/work` or `#work`; selection callbacks may need to drive globe + panel together on home. |
| Schema vocabulary | `data/arafion-data/schema.json` — `ServiceCategory`, `ProjectStatus`, `ProofType`. |
| Placeholder pollution | `lib/placeholder-data.ts`, `lib/international-entities.ts`, `components/sections/ClientMarquee.tsx`, `components/sections/FeaturedCaseStudies.tsx`. |

---

## 10. Out of scope (unless separately specified)

- Real-time analytics wired to production metrics.
- Localized copy for every `ServiceCategory` string beyond EN v1.
- Full redesign of `MapShell` topology — only relocation / filtering / metric hygiene as required by this spec.

---

## 11. Reference visuals (design intent)

- **Light map + white rounded card** (stakeholder screenshot) — target **card** treatment for home globe selection: same rhythm as current map `FacilityDetail` (title, status, blurb, metadata rows, category chips). Strip MW/capacity lines per §4.
- **Dark particle globe + dark sidebar** (stakeholder screenshot) — reference for **globe atmosphere** (dots, pins, motion, premium dark chrome) **only**; **not** the canonical project-detail chrome on home (§0: use white `FacilityDetail`-style card there).

---

*End of spec.*
