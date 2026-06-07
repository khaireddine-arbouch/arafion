# Track Policy

A live map of where AI and data center policy is actually happening — across the US (federal + every state), the EU and major member states, and key Asia-Pacific jurisdictions.

The goal is simple: make it easy to see, at a glance, which governments are restricting AI, which are courting it, which are still studying it, and which are doing nothing. Click into any jurisdiction to read the bills currently moving, the politicians driving them, and the latest news.

## Tech stack

- **Next.js 16** + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **react-simple-maps** + **d3-geo** + **topojson-client** for the interactive maps
- Legislation data sourced from **LegiScan**, news enriched via the **Anthropic API** with web search

## Map portfolio projects (geo pins)

Client / case-study pins on the map are **not** from LegiScan. They are static JSON merged in code.

### Where the data lives

| Source | Role |
|--------|------|
| [`data/arafion-data/projects.json`](data/arafion-data/projects.json) | Canonical **Arafion portfolio** rows (titles, clients, `location`, services, etc.). |
| [`lib/map-projects.ts`](lib/map-projects.ts) | Maps each row to the app’s `MapProject` shape (`ALL_MAP_PROJECTS`). Composite countries like `Morocco / International` collapse to a single filter country; bare `International` uses lat/lng heuristics so pins still land in the right regional map. |

### Updating with real data

1. Edit [`data/arafion-data/projects.json`](data/arafion-data/projects.json) (keep valid JSON and the schema described in [`data/arafion-data/schema.json`](data/arafion-data/schema.json)).
2. Use a **unique** `id` per project.
3. Set **`location.lat`**, **`location.lng`**, and **`location.country`**; for US state drill-down from coordinates, extend the small `inferUSState` helper in `lib/map-projects.ts` if you add more US pins.

**New countries:** If a normalized country is not in the US/Canada pair and not listed in the relevant `*_COUNTRIES` set inside [`lib/map-projects.ts`](lib/map-projects.ts), that pin may not appear on the **EU / Asia / MENA** regional map views. Add the country name to the appropriate `Set` there so it is included in the right region.

### Project shape (TypeScript)

Defined as `MapProject` in [`types/index.ts`](types/index.ts). Commonly used fields:

- `id`, `operator`, `location`, `state?`, `country?`, `lat`, `lng`
- `status`: `"live"` \| `"in-progress"` \| `"concept"`
- Optional: `capacityMW`, `yearBuilt`, `yearProposed`, `notes`, `primaryUser`, `source` (`"arafion"` \| `"researched"`), etc.
- **`concerns`**: string array of capability tags (see below).

### Capability tags (`concerns` / `impactTags`)

Labels and map dimension coloring use `ImpactTag` and `IMPACT_TAG_LABEL` in [`types/index.ts`](types/index.ts). Design-related tags include **`marketing`** (“Marketing & Growth”), **`branding`**, **`product-design`**, **`design-systems`**, **`strategy`**, plus engineering / AI / infra tags (`ai-ml`, `frontend-engineering`, etc.).

Example:

```json
"concerns": ["marketing", "branding", "frontend-engineering"]
```

Entity legislation rows in [`lib/placeholder-data.ts`](lib/placeholder-data.ts) and [`lib/international-entities.ts`](lib/international-entities.ts) use the same tag strings in `impactTags`.

### Current sample projects (35) by country

These are the placeholder engagements shipped in the repo JSON files—replace with your own rows as needed.

| Country | Count | Sample operators (from JSON) |
|---------|------:|------------------------------|
| United States | 10 | NeuroTrade, Meridian Health, Atlas Logistics, Civitas Gov, Verde Carbon, Delta, CloudScope, BioSync, TrailMetrics, InsureTech |
| Canada | 1 | Finova |
| United Kingdom | 1 | Revolut |
| Germany | 1 | Siemens Digital |
| Sweden | 1 | Klarna |
| Saudi Arabia | 2 | Aramco Digital, STC |
| United Arab Emirates | 1 | Careem |
| Kenya | 1 | Safaricom |
| Nigeria | 1 | Flutterwave |
| Singapore | 1 | Grab |
| China | 1 | Tencent Cloud |
| Japan | 1 | Sony |
| Estonia | 1 | Wise |
| South Africa | 1 | MTN |
| Egypt | 1 | Noon |
| India | 1 | Razorpay |
| Morocco | 2 | CIH Bank, OCP Group |
| Qatar | 2 | QIA, Hamad Medical |
| Bahrain | 1 | CBB |
| Kuwait | 1 | Zain |
| Oman | 1 | PDO |
| Jordan | 1 | Mawdoo3 |
| Lebanon | 1 | Anghami |
| Turkey | 2 | Getir, Trendyol |
