# Graph Report - .  (2026-09-24)

## Corpus Check
- 38 files · ~39,236 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1019 nodes · 1437 edges · 68 communities (66 shown, 2 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 107 edges (avg confidence: 0.85)
- Token cost: 179,318 input · 0 output

## Community Hubs (Navigation)
- Eloise Template Anatomy
- Schema: Person Fields
- Schema: Guest & Gift
- Raudhah Template
- Zod Schema Types
- Sekar Template
- Eloise Template Package
- Node Package & Build Deps
- SVG Recolor Tool
- Template Core Contract
- Section Ids (Core README)
- Schema: Assets & Media
- Eloise Libraries & Ornaments
- Section Registry Ids
- Schema: String Limits
- Placeholder Art Generator
- Render Template Tool
- Competitor Pricing Tiers
- Schema: URLs
- Theme Catalog & Priorities
- Runtime Modes
- Sangmempelai Features
- Schema: Label Overrides
- Acaranya Packages
- Section Catalog & Schema Changes
- W.ui Widgets (Countdown/Video)
- Schema: Misc Fields
- Original main.js (Reference)
- Feature Matrix & Day-of
- Indoinvite Packages
- Schema: Theme
- Differentiators & Payment
- Religion Enum
- Schema: Events
- Screenshot Tool
- Project Roadmap & Docs
- Schema: Rundown/Story Items
- Schema: Verse
- Schema Runtime Export
- Cover Opening & Preview Flag
- Schema: Closing
- WAT Framework
- Hadirly Check-in
- Invitato Features
- Akaddigitech Demo Sections
- Color Variants & Presets
- W.ui RSVP & Wishes
- InvitationData Root
- Schema: Gallery
- Schema: Gift QRIS
- Schema: Opening
- Build & Protection
- Couple Order Enum
- Schema: Dresscode Colors
- Language Enum
- Schema: Protocol
- Schema: Gift Address
- Schema: Gift Accounts
- Schema: Sections Map
- Schema: Rundown
- Eloise JS Entry
- Schema: Events Limits
- Schema: Story
- Python Deps

## God Nodes (most connected - your core abstractions)
1. `Eloise template (rich reference, GSAP/Swiper/AOS)` - 54 edges
2. `Sekar template (Jawa, no animation lib)` - 43 edges
3. `Raudhah template (Islami, photoless-first, minimal starter)` - 41 edges
4. `sections.json section registry` - 25 edges
5. `Create New Invitation Template workflow` - 25 edges
6. `enum` - 23 edges
7. `Template Anatomy — Eloise (Olive & Cream)` - 21 edges
8. `data-orn ornament recoloring` - 21 edges
9. `Template Core Contract` - 19 edges
10. `PROGRESS.md (session checkpoint roadmap)` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Mask-based single-tone patterns` --semantically_similar_to--> `data-orn ornament recoloring`  [INFERRED] [semantically similar]
  workflows/create_new_template.md → templates/_core/README.md
- `religion field (drives salam/ayat/event presets)` --shares_data_with--> `Religion Presets (religion.json)`  [INFERRED]
  knowledge/market/section-catalog.md → PROGRESS.md
- `Recolorable SVG Ornaments (token-driven)` --semantically_similar_to--> `Color Variants via [data-variant] CSS Tokens`  [INFERRED] [semantically similar]
  knowledge/market/theme-catalog.md → PROGRESS.md
- `Draft core schema from config.js` --conceptually_related_to--> `Shared Core Data Schema`  [INFERRED]
  knowledge/template-anatomy.md → PROGRESS.md
- `Template Protection (copyright, domain lock, tokened asset URLs)` --conceptually_related_to--> `S10 Hardening & Admin`  [INFERRED]
  README.md → PROGRESS.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Three templates implementing the shared window.INVITE contract with W.ui widgets** — progress_eloise_template, progress_sekar_template, progress_raudhah_template, progress_w_ui, progress_window_invite_render_contract, progress_shared_core_schema [EXTRACTED 1.00]
- **Template validate -> render -> recolor -> screenshot -> build toolchain** — progress_validate_template_py, progress_render_template_py, progress_recolor_svg_py, progress_screenshot_page_mjs, progress_build_template_mjs [INFERRED 0.85]
- **MVP differentiators vs competitors** — readme_quick_buy, readme_bulk_guests_excel, knowledge_market_feature_matrix_guest_open_tracking, knowledge_market_feature_matrix_template_switch_without_reentry, readme_template_protection [EXTRACTED 1.00]
- **W.ui widget contract: core behaviour + template-owned fixed-id markup** — templates__core_readme_w_ui, templates__core_readme_w_ui_rsvp, templates__core_readme_id_rsvpform, templates_eloise_index_template, templates_sekar_index_template, templates_raudhah_index_template [EXTRACTED 1.00]
- **Server render pipeline** — templates__core_readme_render_pipeline, templates__core_readme_window_invite, templates__core_readme_html_markers, templates__core_readme_core_js, templates__core_readme_section_visibility [EXTRACTED 1.00]
- **New-template toolchain (validate, recolor, render, screenshot, build)** — templates__core_readme_validate_template_py, templates__core_readme_recolor_svg_py, templates__core_readme_render_template_py, templates__core_readme_screenshot_page_mjs, templates__core_readme_build_template_mjs, workflows_create_new_template_workflow [EXTRACTED 1.00]
- **Color variant pipeline (tokens, recolorable SVG, variants)** — knowledge_template_anatomy_semantic_tokens, knowledge_template_anatomy_hardcoded_color_literals, knowledge_template_anatomy_baked_svg_ornament_colors, knowledge_template_anatomy_variants_css [INFERRED 0.85]
- **QR Check-in Digital Guestbook across vendors** — knowledge_market_raw_acaranya_id_harga_qr_code_check_in, knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_qr_check_in_system, knowledge_market_raw_indoinvite_com_harga_qrcode_check_in_tamu, knowledge_market_raw_sangmempelai_id_pricelist_checkin_qrcode, knowledge_market_raw_invitato_id_pricing_paket_buku_tamu_digital [INFERRED 0.85]
- **Acaranya Simple/Mengundang/Meriah tier ladder** — knowledge_market_raw_acaranya_id_harga_paket_simple, knowledge_market_raw_acaranya_id_harga_paket_mengundang, knowledge_market_raw_acaranya_id_harga_paket_meriah [EXTRACTED 1.00]
- **Hadirly event-day check-in flow** — knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_import_excel_daftar_tamu, knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_qr_check_in_system, knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_check_in_manual, knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_monitor_kehadiran, knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_live_greeting_display, knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_export_laporan [EXTRACTED 1.00]
- **WAT three-layer architecture** — claude_workflows_layer, claude_agents_layer, claude_tools_layer, claude_wat_framework [EXTRACTED 1.00]

## Communities (68 total, 2 thin omitted)

### Community 0 - "Eloise Template Anatomy"
Cohesion: 0.06
Nodes (53): SVG ornaments bake colors (recolor strategy needed), tools/build-assets.js placeholder SVG generator, CDN libraries & licensing, New template clone checklist, CSS design tokens (--olive, --cream, --wood...), data-section wrapper per section, data-t textContent binding, Draft core schema from config.js (+45 more)

### Community 1 - "Schema: Person Fields"
Cohesion: 0.05
Nodes (46): fullName, nickname, default, items, maxItems, properties, required, type (+38 more)

### Community 2 - "Schema: Guest & Gift"
Cohesion: 0.05
Nodes (41): code, name, default, type, default, properties, required, type (+33 more)

### Community 3 - "Raudhah Template"
Cohesion: 0.05
Nodes (40): geometric, islamic, js/raudhah.js, lantern, mihrab, minimalist, photoless, category (+32 more)

### Community 4 - "Zod Schema Types"
Cohesion: 0.06
Nodes (33): AssetRef, ChildOrder, Event, EVENT_TYPES, GiftAccount, GroupName, Guest, HexColor (+25 more)

### Community 5 - "Sekar Template"
Cohesion: 0.05
Nodes (39): batik, gate, gold, gunungan, javanese, js/sekar.js, keraton, category (+31 more)

### Community 6 - "Eloise Template Package"
Cohesion: 0.05
Nodes (37): botanical, envelope, js/eloise.js, polaroid, split-screen, category, defaultVariant, description (+29 more)

### Community 7 - "Node Package & Build Deps"
Cohesion: 0.08
Nodes (32): esbuild, javascript-obfuscator, dependencies, zod, devDependencies, esbuild, javascript-obfuscator, engines (+24 more)

### Community 8 - "SVG Recolor Tool"
Cohesion: 0.13
Nodes (24): HTMLParser, _expand(), main(), Path, Generate recolored ornament SVG sets for a template's color variants.  Ornamen, recolor_hex(), recolor_svg(), run() (+16 more)

### Community 9 - "Template Core Contract"
Cohesion: 0.10
Nodes (31): HTML binding attributes (data-t/data-l/data-if/data-href), tools/build_template.mjs, Content != copy rule, runtime/core.js, data-photo photoless mode, Core fixtures (sample-*.json), HTML render markers (@HEAD/@VARIANT/@INVITE/@CORE), i18n labels (id.json/en.json) (+23 more)

### Community 10 - "Section Ids (Core README)"
Cohesion: 0.17
Nodes (31): #qrBox widget id, Section: closing, Section: countdown, Section: couple, Section: cover, Section: dresscode, Section: events, Section: footer (+23 more)

### Community 11 - "Schema: Assets & Media"
Cohesion: 0.08
Nodes (25): src, default, type, properties, required, type, maxLength, minLength (+17 more)

### Community 12 - "Eloise Libraries & Ornaments"
Cohesion: 0.13
Nodes (23): data-orn ornament recoloring, AOS 2.3.4, Swiper 12.2.0, tsParticles 3.9.1, #musicBtn (eloise), Ornament click.svg, Ornament env-back.svg, Ornament env-front.svg (+15 more)

### Community 13 - "Section Registry Ids"
Cohesion: 0.10
Nodes (21): closing, countdown, couple, cover, dresscode, footer, gallery, gift (+13 more)

### Community 14 - "Schema: String Limits"
Cohesion: 0.10
Nodes (21): maxLength, minLength, type, maxLength, minLength, type, default, items (+13 more)

### Community 15 - "Placeholder Art Generator"
Cohesion: 0.19
Nodes (19): bez(), bud(), cluster(), f(), fs, IMG, landscape(), leaf() (+11 more)

### Community 16 - "Render Template Tool"
Cohesion: 0.15
Nodes (18): Path, build_context(), load_json(), main(), parse_data(), Path, Assemble a template package + invitation data into a static preview page.  Ref, Validate + apply schema defaults via Node/Zod. Raises SystemExit on invalid data (+10 more)

### Community 17 - "Competitor Pricing Tiers"
Cohesion: 0.12
Nodes (19): Acaranya, Active Period + Cheap Extension + Auto Archive, Market Add-on Pricing, Competitors & Pricing (S2 market research), DIY-plus Positioning Rp79-249rb (Hemat/Lengkap/Premium), Indoinvite, Kekondangan, Indonesian Market 4 Price Tiers (+11 more)

### Community 18 - "Schema: URLs"
Cohesion: 0.11
Nodes (19): url, properties, required, type, properties, required, type, maxLength (+11 more)

### Community 19 - "Theme Catalog & Priorities"
Cohesion: 0.20
Nodes (18): rsvp section, Bali (Hindu) Theme, Islami Theme (photoless option), Jawa Adat Theme (sogan-gold, gunungan, batik kawung), Kristen/Katolik Theme, Luxury / Elegan Theme (black marble-gold), Photoless Mode, Rustic Theme (olive, wood) (+10 more)

### Community 20 - "Runtime Modes"
Cohesion: 0.12
Nodes (16): demo, live, preview, anyOf, default, enum, type, endpoint (+8 more)

### Community 21 - "Sangmempelai Features"
Cohesion: 0.20
Nodes (15): Custom Domain, Buku Tamu Digital, Checkin QRcode, Dashboard Undangan, Double Web Premium, Paket Express, RSVP System, Sangmempelai.id (+7 more)

### Community 22 - "Schema: Label Overrides"
Cohesion: 0.18
Nodes (14): maxLength, type, additionalProperties, default, propertyNames, type, copy, tokens (+6 more)

### Community 23 - "Acaranya Packages"
Cohesion: 0.24
Nodes (13): Acaranya.id, Amplop Digital & Tanda Kasih, Form RSVP & Ucapan, Layar Sapa & Check-In Counter, Masa Aktif Undangan, Mitra Reseller, Paket Mengundang, Paket Meriah (+5 more)

### Community 24 - "Section Catalog & Schema Changes"
Cohesion: 0.19
Nodes (13): closing section, Core Data Changes for Zod Schema (religion, events.type/tz/guestGroups, inviters, gift.qris, guest.maxPax, photoless), cover section, events section (acara, guestGroups, tz), gift section (amplop digital, QRIS), events[].guestGroups + guest.group visibility, opening section (salam pembuka), religion field (drives salam/ayat/event presets) (+5 more)

### Community 25 - "W.ui Widgets (Countdown/Video)"
Cohesion: 0.15
Nodes (13): #addToCalendar widget id, #cdD countdown ids widget id, #videoBox widget id, #videoModal widget id, W.ui shared widgets, W.ui.copyButtons, W.ui.countdown, W.ui.reveal (+5 more)

### Community 26 - "Schema: Misc Fields"
Cohesion: 0.15
Nodes (13): type, pattern, type, properties, default, type, dresscode, hashtag (+5 more)

### Community 27 - "Original main.js (Reference)"
Cohesion: 0.19
Nodes (6): copy(), initScroll(), ready(), renderWishes(), toast(), wishes()

### Community 28 - "Feature Matrix & Day-of"
Cohesion: 0.21
Nodes (12): Invitato, Viding, Feature Matrix - Competitors vs Plan, Phase 1 Non-priorities (WA blast, video invite, usher, custom domain, non-wedding), Day-of Features (QR check-in, layar sapa, attendance dashboard), Global Elements (music, bottom nav, guest name, photoless, language), qrTicket section (QR check-in), Section Catalog - Standard + Indonesian (+4 more)

### Community 29 - "Indoinvite Packages"
Cohesion: 0.24
Nodes (12): Buat Undangan Di Chat AI, Indoinvite, Paket Basic, Paket Berlangganan, Paket Free, Paket Klasik, Paket Premium, Paket Pro (+4 more)

### Community 30 - "Schema: Theme"
Cohesion: 0.17
Nodes (12): variant, Theme, maxLength, type, ornamentBase, variant, properties, required (+4 more)

### Community 31 - "Differentiators & Payment"
Cohesion: 0.18
Nodes (11): Marketplace Sellers (Tokopedia/Shopee manual service), Guest Link Route /{slug}/g/{code}, Per-guest Open Tracking (Guest.openedAt), Realistic MVP Differentiators, Template Switch Without Re-entry, Midtrans Snap Payment, S7 Public Render & Guests, S8 Payment & Quick Buy (+3 more)

### Community 32 - "Religion Enum"
Cohesion: 0.18
Nodes (11): buddha, hindu, islam, katolik, konghucu, kristen, umum, religion (+3 more)

### Community 33 - "Schema: Events"
Cohesion: 0.18
Nodes (11): properties, date, guestGroups, id, mapUrl, time, timeEnd, timeStart (+3 more)

### Community 34 - "Screenshot Tool"
Cohesion: 0.18
Nodes (6): args, logs, pending, proc, [url, out], VALUED

### Community 35 - "Project Roadmap & Docs"
Cohesion: 0.31
Nodes (10): workflows/analyze_template.md, graphify Knowledge Graph Tool, Next.js + Prisma + PostgreSQL Stack (Vercel), PROGRESS.md (session checkpoint roadmap), S11 Deploy & QA, S1 Setup & Template Knowledge Base, S5 App Scaffold, knowledge/template-anatomy.md (+2 more)

### Community 36 - "Schema: Rundown/Story Items"
Cohesion: 0.22
Nodes (10): date, time, timeStart, title, type, venue, items, required (+2 more)

### Community 37 - "Schema: Verse"
Cohesion: 0.20
Nodes (10): pattern, type, preset, source, verse, maxLength, type, default (+2 more)

### Community 38 - "Schema Runtime Export"
Cohesion: 0.22
Nodes (8): mode, $comment, $defs, Runtime, required, $schema, type, $schema

### Community 39 - "Cover Opening & Preview Flag"
Cohesion: 0.22
Nodes (9): ?open=1 preview flag, Envelope cover, GSAP 3.12.5 (+ScrollTrigger, Observer), #openBtn (eloise), Lantern cover, #openBtn (raudhah), Gate cover (#gate), #openBtn (sekar) (+1 more)

### Community 40 - "Schema: Closing"
Cohesion: 0.22
Nodes (9): default, maxLength, minLength, properties, type, maxLength, type, closing (+1 more)

### Community 41 - "WAT Framework"
Cohesion: 0.25
Nodes (8): Agents Layer (Decision-Maker), .env secrets store, Self-Improvement Loop, .tmp/ disposable intermediates, Tools Layer (Python scripts), WAT Framework (Workflows, Agents, Tools), Workflows Layer (Markdown SOPs), Workflow Template (_template.md)

### Community 42 - "Hadirly Check-in"
Cohesion: 0.36
Nodes (8): Check-in Manual, Export Laporan, Hadirly, Import Excel Daftar Tamu, Kirim Undangan, Monitor Kehadiran, Offline Mode Scanner, QR Check-in System

### Community 43 - "Invitato Features"
Cohesion: 0.36
Nodes (8): Seating Plan Editor, Invitato, Paket Buku Tamu Digital, Paket RSVP Assistance, Paket Website Invitation, Real-time Dashboard, Table & Seat Management, WhatsApp Broadcast Official

### Community 44 - "Akaddigitech Demo Sections"
Cohesion: 0.25
Nodes (8): Akad Nikah & Resepsi Detail, Akaddigitech Tema Adat Jawa, Live Streaming, Love Story Timeline, Personalized Guest Name Cover, QS Ar-Rum 21 Quote, RSVP & Ucapan Doa, Save the Date Countdown

### Community 45 - "Color Variants & Presets"
Cohesion: 0.25
Nodes (8): Popular Color Variants 2026, Recolorable SVG Ornaments (token-driven), Color Variants via [data-variant] CSS Tokens, templates/_core core.js runtime, tools/recolor_svg.py, Religion Presets (religion.json), S3 Template Framework Part 1, tools/screenshot_page.mjs (CDP screenshot/console check)

### Community 46 - "W.ui RSVP & Wishes"
Cohesion: 0.29
Nodes (8): #rsvpForm widget id, #ticket widget id, #wishForm widget id, #wishList widget id, Live-mode API endpoints (rsvp/wishes, X-Render-Token), W.ui.rsvp, W.ui.wishes, RSVP submit smoke test

### Community 48 - "InvitationData Root"
Cohesion: 0.29
Nodes (7): bride, events, groom, InvitationData, required, $schema, type

### Community 49 - "Schema: Gallery"
Cohesion: 0.29
Nodes (7): default, items, maxItems, type, maxLength, minLength, gallery

### Community 50 - "Schema: Gift QRIS"
Cohesion: 0.29
Nodes (7): properties, type, gift, qris, maxLength, minLength, type

### Community 51 - "Schema: Opening"
Cohesion: 0.29
Nodes (7): maxLength, type, default, properties, type, greeting, opening

### Community 52 - "Build & Protection"
Cohesion: 0.33
Nodes (6): footer section (credit), tools/build_template.mjs (production build), esbuild 0.28.2, javascript-obfuscator 5.8.0, tools/validate_template.py, Template Protection (copyright, domain lock, tokened asset URLs)

### Community 53 - "Couple Order Enum"
Cohesion: 0.33
Nodes (6): bride_first, groom_first, default, enum, type, coupleOrder

### Community 54 - "Schema: Dresscode Colors"
Cohesion: 0.33
Nodes (6): default, items, maxItems, type, properties, colors

### Community 55 - "Language Enum"
Cohesion: 0.33
Nodes (6): en, id, default, enum, type, lang

### Community 56 - "Schema: Protocol"
Cohesion: 0.33
Nodes (6): protocol, text, properties, type, maxLength, type

### Community 57 - "Schema: Gift Address"
Cohesion: 0.40
Nodes (5): text, properties, required, type, address

### Community 58 - "Schema: Gift Accounts"
Cohesion: 0.40
Nodes (5): default, items, maxItems, type, accounts

### Community 59 - "Schema: Sections Map"
Cohesion: 0.40
Nodes (5): Sections, additionalProperties, propertyNames, $schema, type

### Community 60 - "Schema: Rundown"
Cohesion: 0.40
Nodes (5): rundown, default, items, maxItems, type

### Community 62 - "Schema: Events Limits"
Cohesion: 0.50
Nodes (4): maxItems, minItems, type, events

### Community 63 - "Schema: Story"
Cohesion: 0.50
Nodes (4): story, default, maxItems, type

## Knowledge Gaps
- **432 isolated node(s):** `fs`, `path`, `ROOT`, `SVG`, `IMG` (+427 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `properties` connect `Schema: Misc Fields` to `Schema: Person Fields`, `Schema: Guest & Gift`, `Schema: Assets & Media`, `Schema: String Limits`, `Schema: URLs`, `Schema: Label Overrides`, `Religion Enum`, `Schema: Verse`, `Schema: Closing`, `InvitationData Root`, `Schema: Gallery`, `Schema: Gift QRIS`, `Schema: Opening`, `Couple Order Enum`, `Language Enum`, `Schema: Protocol`, `Schema: Rundown`, `Schema: Events Limits`, `Schema: Story`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Why does `InvitationData` connect `InvitationData Root` to `Schema: Misc Fields`, `Schema Runtime Export`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `$defs` connect `Schema Runtime Export` to `InvitationData Root`, `Schema: Guest & Gift`, `Schema: Sections Map`, `Schema: Theme`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Are the 23 inferred relationships involving `sections.json section registry` (e.g. with `Section: closing` and `Section: countdown`) actually correct?**
  _`sections.json section registry` has 23 INFERRED edges - model-reasoned connections that need verification._
- **What connects `fs`, `path`, `ROOT` to the rest of the system?**
  _432 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Eloise Template Anatomy` be split into smaller, more focused modules?**
  _Cohesion score 0.05805515239477504 - nodes in this community are weakly interconnected._
- **Should `Schema: Person Fields` be split into smaller, more focused modules?**
  _Cohesion score 0.05314009661835749 - nodes in this community are weakly interconnected._