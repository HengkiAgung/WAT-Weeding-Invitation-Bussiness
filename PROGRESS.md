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
- [x] 2nd template `templates/sekar/` (Jawa keraton: gebyok gate, gunungan, kawung batik; 4 variants maroon/sogan/zamrud/perak; 22 sections; no animation lib) — built from the contract only, zero `_core` changes; validator OK, visual QA 4 fixtures × variants, no console errors
- [x] `tools/build_template.mjs` (validate → bundle → esbuild minify → javascript-obfuscator → copyright header → content-hashed files in `dist/templates/`; `render_template.py` renders dist builds) — both templates render from build, no leaked globals
- [x] `workflows/create_new_template.md`
- [x] (S4b) 3rd template `templates/raudhah/` (Islami minimalis, photoless-first: mihrab arches, khatam star mask, lanterns, monogram/initials; 4 variants sage/ivory/navy/dusty-rose) + shared widgets moved to core `W.ui` (rsvp, wishes, video, qrTicket, countdown, copyButtons, inviters, swatches, reveal, validate); Eloise + Sekar refactored onto `W.ui`

### S4c — Competitor study: katsudoto.id
- [x] Product/flow/pricing/editor/guest-management/guestbook study → `knowledge/competitors/katsudoto/product-flow.md` (adoption table §8)
- [x] Catalog of 59 designs → `knowledge/competitors/katsudoto/catalog.json`
- [x] 59 per-template design analyses (layout per section, assets, motion, type, colour, "arah orisinal") + auto technical digest → `knowledge/competitors/katsudoto/templates/*.md`; synthesis + table in `templates/INDEX.md`
- [x] Tools: `tools/capture_demo.mjs` (phone/desktop capture, open-cover, scroll frames, contact sheets, meta.json) + `tools/demo_digest.py` (meta → markdown, `--inject`)
- [x] User decision (2026-09-25): fix Eloise IP risk now → done in S4d
- [x] User approved SOP → `workflows/research_competitor_templates.md`

### S4d — Eloise → Rimbun (original redesign)
- [x] `templates/eloise/` → `templates/rimbun/` ("Rimbun", tropical garden). Replaced every signature piece:
  - name;
  - cover: envelope + wax seal + polaroid → a woven rattan medallion framed by monstera, fern and banana leaves; the leaves part, the medallion grows, and the cover closes as an iris;
  - couple polaroids → leaf-shaped photos in a woven rim;
  - vinyl music button → spinning rattan ring;
  - lace/pearls → woven-rattan bands (CSS `--weave`) under titles and cards;
  - falling petals → dry leaves;
  - fonts Pinyon Script + Instrument Serif → Allura + Fraunces;
  - default palette olive → rimba green + rattan.
- [x] Ornaments are code: `templates/rimbun/art/build_art.py` generates 7 original SVGs (monstera, pisang, pakis, kamboja, rotan, daun, divider). Variants: rimba (default), sage, terakota, kopi, recoloured by hue rules.
- [x] Default copy that matched the competitor demo replaced:
  - `en.json` gallery/video titles;
  - fixture story art ("THE FIRST HELLO" → "CHAPTER ONE").
- [x] Verified:
  - validator OK for all 3 templates; `schema:check` OK;
  - screenshots of the cover (rimba id + terakota en), mid-open and opened states, couple section;
  - RSVP ticket from source and `dist` build (js 25.5 kB, css 30.2 kB).
- [ ] Decide whether to rename Sekar too (katsudoto has an unrelated "Sekar"; the name is a generic Javanese word, the design is ours). Kept for now.

### S5 — App scaffold
- [ ] Next.js + Prisma schema + migrations, Auth.js (Google + magic link), seed templates from manifests, catalog + demo preview
- [ ] (from S4c) Catalog filters by tag (adat/floral/fairytale/minimalis/nature/vintage) + "populer"/"baru" badges; demo preview link per template with a sample guest (`?to=`), like katsudoto `url_preview`

### S6 — Invitation editor
- [ ] Schema-driven form, live preview iframe, R2 upload (presigned PUT), variant + section toggles, drafts
- [ ] (from S4c) Schema additions: `events[].main` (drives cover/countdown/WA date), `events[].private`, `events[].note`, event-type presets (akad, pemberkatan, resepsi, ngunduh mantu, teh pai/sangjit, after party), `parents.fatherLate/motherLate` ("Alm./Almh."), `gift.accounts[].qr`, `gift.registry[] {img,name,desc,qty,price,url}` + shipping address, `videos[] {title,url}`, `cover.photos[]` (slideshow), `cover.headline`, `cover.rsvpShortcut`, `credits.photographer`, `music.start/end` (crop), `rsvp.deadline`, `rsvp.questions[]` (RSVP+ meals/accommodation, max 3, privacy per group), `seo {indexable, thumbnail}`
- [ ] (from S4c) Editor: preview device switch (phone/tablet/desktop × portrait/landscape); section reorder + per-section font size (upper tier); free colour editor as 3 roles (primary/secondary/tertiary × bg/text/button) on top of variant presets; typography (heading/body font, size, weight, case); cover effects (petals/sakura/sparkle/snow × density × speed); custom loading (logo/initials or text)
- [ ] (from S4c) Core runtime: `W.fx.falling` (light canvas, reduced-motion aware), floating language switch when >1 language, `W.ui.calendar` (month grid), gallery modes (grid/carousel/strip/cards), per-section photo backdrop, wishes pagination, frame-shape + textile-pattern SVG library

### S7 — Public render & guests
- [ ] `/{slug}`, `/{slug}/g/{code}`, HMAC render token, presigned asset GET, RSVP/wish API, RSVP dashboard
- [ ] (from S4c) Guest status funnel `new → sent → opened → going / not going` (+ `reminded`); RSVP reminder + H-n wedding-day reminder (manual WA/email first, WA API later); gift transfer confirmation form (+ quick amounts 50/100/200rb/lainnya) + "dana terkumpul" + registry purchase confirmation (sold out); **wish moderation** (pending/approve, link/HTML filter, rate limit, guests-only toggle) — katsudoto demos show SQLi payloads, spam links and trolls live; guest category badge (VIP/VVIP) on cover

### S8 — Payment & quick buy
- [ ] Midtrans Snap + webhook signature verify, Order states, activation; quick-buy flow + auto account
- [ ] (from S4c) Pricing model "base + add-ons" with live calculator + bundles as anchors (katsudoto: base Rp250rb, add-ons Rp10–150rb, bundles 400/500/700rb); `Entitlement` per feature (upgrade anytime, active instantly); invoice expiry 24 h; voucher/referral code

### S9 — Bulk guests (Excel)
- [ ] Import xlsx/csv + validation, guest codes, export links + WA text, downloadable Excel template
- [ ] (from S4c) Import review screen before commit; guest groups with per-group sessions/RSVP limit/text; **self-registration form link per group** (quota, collects WA/email, auto-sends personal link); "tamu khusus vs tamu umum"

### S10 — Hardening & admin
- [ ] Demo watermark, domain lock test, rate limits, CSP, sanitization, admin panel

### S11 — Deploy & QA
- [ ] Vercel + Neon + R2 + Midtrans prod, mobile QA (WhatsApp in-app browser), per-invitation OG image

### Next templates (original concepts, from S4c research — build after S5 or in between)
Each follows `workflows/create_new_template.md`. Run the originality check (step 9 of `research_competitor_templates.md`) before release. The katsudoto file in brackets is only a *demand signal*; do not use it as a design source.
1. **Pasundan** — Sunda: siger + kujang icons, Priangan landscape (tea hills, Tangkuban Parahu) as flat/line art, Mega Mendung / Garutan batik textures, green-gold or maroon. Section style: cinematic cover without a frame (name over mist). [demand: anselma, 106 uses]
2. **Sekar Taman** — light variant/sibling of Sekar: cream paper, green-sogan gunungan line-art, watercolour-style melati/kantil (our own), formal Indonesian Islamic copy by default. [alsa 87, silika 55, kinanti 37]
3. **Monokrom Foto** — no ornaments. Gallery photos become per-section backdrops, frosted-glass cards, countdown on the cover, small-caps serif. Needs core `sections.*.bgPhoto`. [noir 40]
4. **Film Summer** — photo-first, casual handwriting script, month calendar with the date circled, two-tone rundown pills. Needs `W.ui.calendar`. [nadia 24]
5. **Peranakan** — Lasem/encim batik (red-blue), Peranakan tiles, paper lanterns; event types Teh Pai / Sangjit; lobed photo frames. [chinese 15]
6. **Garis** — one-colour line-art of Indonesian flora (melati, cempaka, anggrek bulan, pakis) → the cheapest variant system (mask + `--c-accent`). Editorial full-width couple photos. [hanna]
7. **Adat series skins** — one layout, swappable ornament and texture sets: Minang (gonjong, songket, marawa colours), Bugis (rumah panggung, tenun chevron), Batak (gorga, ulos), Bali (candi bentar, endek), Betawi (gigi balang, ondel-ondel). Needs a manifest "skin" concept. [katrina, sintia]
8. **Avatar faceless option** — illustrated couple characters (hijab / non-hijab; beskap, kebaya, jas, gaun), colours follow the variant. Usable in any template instead of photos; upsell. [alunan, serene]
9. **Poster / Kota** — condensed display type, names over photos, big chapter numbers, brick/concrete palette; masculine / anti-mainstream segment. [ayyara, cassandra]
10. **Pasar Malam** (nostalgia), **Laut Nusantara** (Raja Ampat, phinisi), **Heritage Kota** (pencil sketches of Gedung Sate / Lawang Sewu), **Raden Saleh** (public-domain romantic Javanese landscapes — verify PD status of the reproductions) — niche, later.

Shared core work these templates need is listed under S6 (from S4c): frame-shape + textile-pattern SVG library, `W.fx.falling`, calendar, photo backdrops, gallery modes.

### Backlog (post-MVP, from S4c)
- Digital guestbook (day-of): usher web app (passkey/QR login; check-in/check-out/tracking modes), QR scan / name search / on-the-spot add, selfie check-in, printed number ticket, gift numbering + titipan, welcome screen (TV), table & souvenir management, doorprize, offline hybrid mode, bulk e-invitation (QR card) download, auto thank-you message
- New templates → see "Next templates" above
- Wedding planner (budget, seserahan, seragam, vendor, to-do) as retention bonus

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
- 2026-09-24 (S4): Sekar proves the contract: new template needed **no change** to `_core` (schema, labels, runtime). Only validator fixes (see below). Same data/fixtures render in both templates → template switch without re-entry holds.
- 2026-09-24 (S4): Sekar is library-light (GLightbox + qrcode-generator + Phosphor; html2canvas lazy) — reveal via IntersectionObserver `[data-rv]` hidden only after JS adds `html.rv-on`; gate = CSS transitions. Batik pattern = CSS `mask` + `--c-accent` (recolors by token, no generated SVG). Fonts Cinzel / Cormorant Garamond / Italianno (OFL).
- 2026-09-24 (S4): Validator: `t('key')` regex matched dynamic prefixes (`t('rsvp.' + x)`) → now requires `'` then `,`/`)`; plus every `'ns.key'` string literal in JS whose namespace is a label namespace must exist (covers ternaries, `data-copy-msg`).
- 2026-09-24 (S4): Build: esbuild 0.28.2 + javascript-obfuscator 5.8.0 (devDeps, exact). Obfuscator hoists string-array helpers (`_0x…`) to program scope even inside an IIFE → output wrapped **after** obfuscation (checked: 0 leaked globals). `renameGlobals`/`transformObjectKeys` off (contract names), `controlFlowFlattening`/`deadCodeInjection` off (cheap phones). Seeded by source hash → reproducible. `dist/` gitignored; deploy (S5/S7) runs `npm run build:templates`. Sizes: sekar js 30 kB / css 19 kB, eloise js 40 kB / css 29 kB, core separate.
- 2026-09-24 (S4): RSVP / wishes / gift / video-modal JS is duplicated between Eloise and Sekar (~150 lines). Candidate to move into `_core` as optional widgets when template #3 arrives — not done now to keep templates free to restyle markup.
- 2026-09-24 (S4): `tools/screenshot_page.mjs --click "#openBtn" [--after-click ms]` added to QA cover-open animations headlessly.
- 2026-09-24 (S4b): Duplicated widget code moved to `core.js` as `W.ui` (behaviour) — templates keep markup/CSS with fixed ids (table in `templates/_core/README.md`). Template JS: eloise 413→272 lines, sekar 303→148, raudhah 126. core.js 423→621. Built JS: eloise 40→26 kB, sekar 30→14 kB, raudhah 13 kB.
- 2026-09-24 (S4b): Raudhah = market priority #3 (Islami minimalis tanpa foto, S2 theme catalog). Photoless-first: monogram in cover/hero arch, script initials instead of couple photos, star/lantern ornaments. Fonts Marcellus / Lora / Alex Brush (OFL). Marcellus digits look like letters ("0"≈"O") → numbers use Lora.
- 2026-09-24 (S4b): Validator now also checks label keys used in `core.js` (only inside `t(...)`, since core also has data paths like `'gift.accounts'`). Regression: RSVP submit (clicked) shows the ticket in all 3 templates, source and dist builds; no console errors.
- 2026-09-24 (S4b): graphify `--update` after S3–S4b: 38 changed files (27 code AST, 11 docs via 2 semantic subagents, ~179k tokens) → 1019 nodes, 1437 edges, 68 communities, health OK. `.graphifyignore` now skips `dist/`, template/fixture assets, `package-lock.json`. Note: generated `templates/_core/schema.json` adds ~20 low-value JSON-Schema communities → consider ignoring it on the next rebuild (schema.ts already covers it).
- 2026-09-25 (S4c): **Eloise IP risk.** katsudoto.id sells a template named "Eloise" (id 61, Jul 2026, their most used: 128). Our `wedding-template/` → `templates/eloise` matches it in name, olive/cream palette, lace-oval/envelope/vinyl/pearl motifs, demo copy ("Portrait of Us", Maya Angelou quote, "The First Hello", "Click to open invitation"), library stack (identical versions) and **fonts (Exmouth + Instrument Serif)**. Our code/assets are rewritten (placeholder SVGs, own runtime), but the *design* is derivative → before selling: rename, replace signature motifs + composition, rewrite all default copy (e.g. `gallery.title` "Portrait of Us" in `_core/i18n/en.json`). Also consider renaming Sekar: katsudoto has a "Sekar" too (different design, name only).
- 2026-09-25 (S4c): Scope choice — user asked to scrape and clone all katsudoto templates. Not done: their HTML/CSS/JS, painted PNG ornaments, photos and some fonts are copyrighted (demos even contain third-party material, e.g. Disney). Delivered the user's fallback instead: detailed per-template design analyses with an "arah orisinal" section, so new templates are designed from patterns, not copied. Screenshots stay in `.tmp/demos/` (gitignored), never committed.
- 2026-09-25 (S4c): Capture quirks (handled in `capture_demo.mjs`): AOS animations up to 3.5 s → default 3 s wait per scroll step; open-button text varies ("Open Invitation", "Buka Undangan", "Step Inside", "Start The Journey", "Let's Go") → text heuristics + `--open` selector; old (2021–22) templates keep the window scroll-locked → unlock + beyond-viewport clip fallback; contact-sheet viewport must be an integer (CDP "Invalid parameters").
- 2026-09-25 (S4c): Market facts: katsudoto (since 2018, 11.8k couples) Premium Rp250rb (1 yr) … Rp700rb (lifetime) + à-la-carte add-ons; Lite Rp100rb / 2 months; wedding planner Rp99rb; guestbook sold via WhatsApp only. Their pages are heavy (≈150 images, ~15 libs, 100–500 AOS nodes) → our light runtime is a real differentiator on low-end phones / WhatsApp in-app browser.
- 2026-09-25 (S4d): Eloise IP risk resolved by a full redesign → **Rimbun**. What changed: name, cover concept and animation, photo frames, music button, ornaments (all regenerated from `art/build_art.py`), fonts, palette, and default copy. What stayed: the data contract, section ids, widget ids and `W.ui` behaviour, so existing invitations render unchanged. `knowledge/template-anatomy.md` still describes the historical `wedding-template/` (Eloise) as a record; it is not a design source. S1–S4b log entries that say "eloise" refer to the same template before the rename.
- 2026-09-25 (S4d): Headless check of the open animation: the cover iris uses `clip-path` keyframes and the leaves use GSAP. The mid-state capture (`--after-click 800`) shows the leaves parting and the medallion growing; at 3500 ms the cover is gone. Still check once on a real phone (GSAP + clip-path on low-end Android).
