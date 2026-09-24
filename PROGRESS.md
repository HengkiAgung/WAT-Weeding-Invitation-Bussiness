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
- [x] Research demo sites (Satu Momen, Viding, Invitato, Indoinvite, Sangmempelai, Acaranya, Menica, Kekondangan, Tokopedia sellers, akaddigitech/tamuspecial demos)
- [x] `knowledge/market/` — `competitors-pricing.md`, `section-catalog.md`, `theme-catalog.md`, `feature-matrix.md`
- [x] Final list: section registry (22 ids, core/opt) + core-schema additions → `knowledge/market/section-catalog.md`
- [x] `graphify add` 6 URLs → `knowledge/market/raw/`; graph rebuilt (`/graphify . --update`): 269 nodes, 455 edges, 16 communities, health OK

### S3 — Template framework (part 1)
- [x] `templates/_core/`: Zod core schema (`schema.ts` → `schema.json`), i18n labels id/en, religion presets, section registry (22 ids), view-model binding list, runtime `core.js` (binder, toggles, i18n, dates/TZ, calendar, RSVP/wish API client, music, QR), fixtures (islam-id full, kristen-en photoless, minimal quick-buy) — contract in `templates/_core/README.md`
- [x] Refactor Eloise → `templates/eloise/`: manifest, `data-section` ×22, zero literal copy, semantic `--c-*` tokens, 4 variants (olive/sage/dusty-rose/latte), recolored ornament sets, new sections (opening, turutMengundang, qrTicket, dresscode, protocol), photoless mode, known bugs fixed
- [x] `tools/validate_template.py` (+ `render_template.py` preview, `recolor_svg.py`, `screenshot_page.mjs` CDP screenshot/console check) — Eloise: OK 0 errors; negative test catches all 12 injected violations

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
- 2026-09-24 (S2): Market = DIY Rp0–150rb (saturated), mid Rp200–750rb, service Rp1–2jt+. Proposed positioning DIY-plus Rp79/149/249rb — **price not locked, user decides in S8**.
- 2026-09-24 (S2): Core schema (S3) must add `religion` (drives salam/ayat/event presets), `events[].type/tz/guestGroups`, `childOrder/father/mother`, `inviters[]` (turut mengundang), `gift.qris` + ewallet, `guest{group,maxPax}`, `photoless`.
- 2026-09-24 (S2): Differentiators to protect: quick buy, self-serve Excel→link+WA text, per-guest open tracking, template switch without re-entry. Deferred: WA blast API (paid), video invitation, custom domain, non-wedding categories, day-of QR check-in/welcome screen.
- 2026-09-24 (S2): WebFetch blocked on satumomen.com (HTTP 402), inv.acaranya.id (403); tamuspecial.com timed out in `graphify add`. Data for those from search snippets.
- 2026-09-24 (S3): Render contract = single global `window.INVITE = {data, theme, sections, guest, runtime, labels, presets, registry, template}` (replaces planned WEDDING/THEME/SECTIONS) + HTML markers `<!--@HEAD/@VARIANT/@INVITE/@CORE-->`. `tools/render_template.py` is the reference for the S7 Next.js route.
- 2026-09-24 (S3): Libraries: jQuery, Slick, Selectize, lightGallery (GPL), Video.js, modal-video, Font Awesome removed → Swiper fade, native select, GLightbox (MIT), own video modal (youtube-nocookie / native video), Phosphor only. Exmouth (commercial) dropped → Pinyon Script. Licensing blocker from S1 resolved. 14 CDN files → 8 scripts + 5 css (html2canvas lazy on click).
- 2026-09-24 (S3): Eloise sample JPGs (bride.jpg 3.4 MB, unknown license) NOT copied; fixtures use SVG placeholders from `templates/_core/fixtures/assets/`. Real demo photos needed before catalog (S5) — must be licensed.
- 2026-09-24 (S3): **User to proofread** `templates/_core/presets/religion.json` (salam, ayat, closing per agama) + `i18n/id.json` before launch. Buddha/Konghucu have no default verse (custom only).
- 2026-09-24 (S3): Color variants: CSS tokens via `[data-variant]` files; ornaments recolored at build (`tools/recolor_svg.py`, hue rules in manifest) into `assets/ornaments/<variant>/`, selected by `theme.ornamentBase`.
- 2026-09-24 (S3): Zod `Date.parse` accepted `2026-02-30` → IsoDate now round-trip checked. Registry has 22 ids (added `hero`).
- 2026-09-24 (S3): Headless `chrome --screenshot` cannot capture scrolled pages and has ~500 px min width → `tools/screenshot_page.mjs` (CDP, device emulation, console/`__INVITE_ERRORS__` → exit 1). Template flag `?open=1[#section]` skips envelope + reveal animations (also for editor preview S6).
- 2026-09-24 (S3): Verified visually: islam-id/olive (guest + group-restricted akad), kristen-en/dusty-rose/photoless, minimal/sage/no guest, all-sections/latte — no console errors. RSVP/wish submit only exercised via localStorage path; real API e2e in S7.
