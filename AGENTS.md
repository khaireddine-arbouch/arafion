<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Dual-site (Arafion + Norex)

One `main` branch powers both brands via env:

| Env | Value | Domain | Locales |
|-----|--------|--------|---------|
| `NEXT_PUBLIC_SITE_ID` (or `SITE_ID`) | `arafion` (default) | arafion.com | en, fr, tr, ar |
| same | `norex` | norexsystems.com | en, he |

Brand config: [`lib/site/config.ts`](lib/site/config.ts).

**Project visibility:** when adding/editing a project in [`data/arafion-data/projects.json`](data/arafion-data/projects.json), set optional `"sites": ["arafion"]`, `["norex"]`, or both. Omit `sites` to show on both sites. Israel-only / Norex-only work must use `"sites": ["norex"]` so it stays off Arafion.

Deploy steps: [`DEPLOY.md`](DEPLOY.md).
