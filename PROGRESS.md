# PROGRESS — Digital Invitation Business

**Start every session:** read this file → read `knowledge/template-anatomy.md` (and `graphify-out/GRAPH_REPORT.md`; query with `graphify explain "X"` / `/graphify query "..."`) → do the session's items → tick boxes, log decisions/issues below → commit.

Full plan: `C:\Users\xeon6\.claude\plans\aku-ingin-membuat-bisnis-cuddly-jellyfish.md`

## Locked decisions
- Product model: **Hybrid** — curated templates; user fills data + picks color/font variant + toggles sections.
- Stack: **Next.js (App Router) + Prisma + PostgreSQL**, deploy Vercel.
- Payment: **Midtrans** Snap. Storage: **Cloudflare R2** (private, presigned URLs).
- Core data schema shared by all templates (switch template without re-entering data).
- Ask user before any paid API call (Midtrans production, etc.).

## Sessions

### S1 — Setup & template knowledge base
- [x] Install graphify skill (`graphify install --platform claude`, graphifyy 0.9.17)
- [x] `knowledge/template-anatomy.md` — sections, schema, tokens, libs/licensing, hardcoded strings, gaps
- [x] `workflows/analyze_template.md`
- [x] Run graphify on project root → `graphify-out/` (107 nodes, 163 edges, 13 communities; template assets excluded via `.graphifyignore`)
- [x] Commit

### S2 — Indonesian market research
- [ ] Research demo sites (Shopee/Tokopedia sellers, Satu Momen, Viding, Invitato, etc.)
- [ ] `knowledge/market/` — competitors & pricing, section catalog, theme catalog (Jawa, Sunda, Islami, rustic, luxury, Bali, Minang, Chinese…), feature matrix
- [ ] Final list: standard sections + Indonesia-specific sections (ayat, turut mengundang, amplop digital/QRIS, QR check-in…)
- [ ] `graphify add` notable demo URLs; rebuild graph (`/graphify . --update`)

### S3 — Template framework (part 1)
- [ ] `templates/_core/`: Zod core schema, i18n labels id/en, section registry, runtime binder, API client (RSVP/wish)
- [ ] Refactor Eloise → `templates/eloise/` (copy, not move): manifest, `data-section`, toggles, i18n, semantic tokens, variants, recolorable ornaments, replace lightGallery/Slick/Selectize, fix known bugs
- [ ] `tools/validate_template.py`

### S4 — Template framework (part 2)
- [ ] Clone 2nd template from spec (e.g. Jawa / gold) to prove it
- [ ] `tools/build_template` (bundle, minify, obfuscate, copyright header)
- [ ] `workflows/create_new_template.md`

### S5 — App scaffold
- [ ] Next.js + Prisma schema + migrations, Auth.js (Google + magic link), seed templates from manifests, catalog + demo preview

### S6 — Invitation editor
- [ ] Schema-driven form, live preview iframe, R2 upload (presigned PUT), variant + section toggles, drafts

### S7 — Public render & guests
- [ ] `/{slug}`, `/{slug}/g/{code}`, HMAC render token, presigned asset GET, RSVP/wish API, RSVP dashboard

### S8 — Payment & quick buy
- [ ] Midtrans Snap + webhook signature verify, Order states, activation; quick-buy flow + auto account

### S9 — Bulk guests (Excel)
- [ ] Import xlsx/csv + validation, guest codes, export links + WA text, downloadable Excel template

### S10 — Hardening & admin
- [ ] Demo watermark, domain lock test, rate limits, CSP, sanitization, admin panel

### S11 — Deploy & QA
- [ ] Vercel + Neon + R2 + Midtrans prod, mobile QA (WhatsApp in-app browser), per-invitation OG image

## Decision / issue log
- 2026-09-24 (S1): Eloise uses lightGallery (GPLv3) and Exmouth (commercial font) → must license or replace before selling (planned in S3).
- 2026-09-24 (S1): SVG ornaments have baked-in colors → color variants need recolorable SVG strategy (S3).
- 2026-09-24 (S1): graphify output lives at project root `graphify-out/` (skill query fast-path expects cwd). Health check: 5 dangling-endpoint + 2 collapsed edges (minor, graph usable).
- 2026-09-24 (S1): `wedding-template/` gitignored (user decision) — stays as read-only reference; S3 copies it into `templates/eloise/` which is tracked.
