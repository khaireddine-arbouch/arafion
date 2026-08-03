# Deploy: Arafion + Norex Systems

One Git repo / `main` branch. Two Vercel projects, same commit, different env + domains.

## 1. Arafion (existing)

- Project: existing Arafion Vercel project
- Production branch: `main`
- Domain: `arafion.com` (+ `www` if used)
- Environment variables:
  - `NEXT_PUBLIC_SITE_ID=arafion`
  - (optional) `SITE_ID=arafion`

## 2. Norex Systems (new)

1. In Vercel: **Add New Project** → import the **same** Git repository.
2. Production branch: `main`
3. Environment variables:
   - `NEXT_PUBLIC_SITE_ID=norex`
   - (optional) `SITE_ID=norex`
4. Domains: add `norexsystems.com` and `www.norexsystems.com`
5. DNS: point the domain to Vercel (A/CNAME as shown in the Vercel domain UI)

## Local development

```bash
# Arafion (default)
npm run dev

# Norex
# Windows PowerShell:
$env:NEXT_PUBLIC_SITE_ID="norex"; npm run dev
# macOS / Linux:
NEXT_PUBLIC_SITE_ID=norex npm run dev
```

## Norex offering scope

Norex (`NEXT_PUBLIC_SITE_ID=norex`) is **technical-only**:

- Services shown: Software, Websites, Intelligence/AI, Strategy (no Marketing / Architecture & 3D)
- Blog: software, AI, and data posts only (architecture / growth / production posts hidden)
- Portfolio: projects that are only marketing/3D/architecture services are hidden
- Default locale: Hebrew (`he`), plus English
- Logo: `/norex/Norex Logo.png`


## Project site flags

In `data/arafion-data/projects.json`:

```json
"sites": ["norex"]
```

Omit the field to show on both sites. See `data/arafion-data/README.md`.
