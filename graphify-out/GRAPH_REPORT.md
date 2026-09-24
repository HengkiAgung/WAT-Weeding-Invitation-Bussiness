# Graph Report - .  (2026-09-24)

## Corpus Check
- 14 files · ~13,035 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 269 nodes · 455 edges · 16 communities (15 shown, 1 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 58 edges (avg confidence: 0.82)
- Token cost: 163,233 input · 0 output

## Community Hubs (Navigation)
- Business Plan & Guest Links
- Section Registry & Core Schema
- Theming & Variants
- Competitor Pricing Landscape
- Placeholder Asset Generator
- Acaranya Packages
- Libraries & Licensing
- Hadirly Day-of Check-in
- Sangmempelai Packages
- Themes, Religion & Events
- Indoinvite Packages
- Template Runtime (main.js)
- Shared Python Helpers
- WAT Framework
- Python Dependencies

## God Nodes (most connected - your core abstractions)
1. `PROGRESS.md session checkpoint` - 24 edges
2. `Template Anatomy — Eloise (Olive & Cream)` - 24 edges
3. `Competitors & pricing (ID digital invitations)` - 19 edges
4. `Final section registry (22 ids, core/opt)` - 18 edges
5. `Theme catalog (Indonesian digital invitations)` - 14 edges
6. `Feature matrix: competitors vs our plan` - 13 edges
7. `Section catalog (standard + Indonesian)` - 13 edges
8. `README — Undangan Digital business` - 11 edges
9. `f()` - 10 edges
10. `Core data changes for Zod schema (S3)` - 10 edges

## Surprising Connections (you probably didn't know these)
- `DIY-plus tier draft (Hemat 79rb / Lengkap 149rb / Premium 249rb)` --semantically_similar_to--> `DIY-plus positioning Rp79/149/249rb (not locked)`  [INFERRED] [semantically similar]
  knowledge/market/competitors-pricing.md → PROGRESS.md
- `Not phase-1 priorities (WA blast, video, usher, custom domain, non-wedding)` --semantically_similar_to--> `Deferred features (WA blast API, video, custom domain, non-wedding, QR check-in)`  [INFERRED] [semantically similar]
  knowledge/market/feature-matrix.md → PROGRESS.md
- `#gallery Swiper + lightbox section` --references--> `lightGallery 2.8.2 (GPLv3/commercial)`  [INFERRED]
  wedding-template/index.html → knowledge/template-anatomy.md
- `Core data changes for Zod schema (S3)` --implements--> `Core data schema shared by all templates`  [INFERRED]
  knowledge/market/section-catalog.md → PROGRESS.md
- `Draft core schema from config.js` --conceptually_related_to--> `Core data schema shared by all templates`  [INFERRED]
  knowledge/template-anatomy.md → PROGRESS.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **MVP differentiators vs competitors** — readme_quick_buy, readme_bulk_guests_excel, knowledge_market_feature_matrix_guest_open_tracking, knowledge_market_feature_matrix_template_switch_without_reentry, readme_asset_protection [EXTRACTED 1.00]
- **religion drives opening/verse/closing presets** — knowledge_market_section_catalog_religion_field, knowledge_market_section_catalog_opening, knowledge_market_section_catalog_verse, knowledge_market_section_catalog_closing, knowledge_market_theme_catalog_religion_adat_text_presets [EXTRACTED 1.00]
- **Color variant pipeline (tokens, recolorable SVG, variants)** — knowledge_template_anatomy_semantic_tokens, knowledge_template_anatomy_hardcoded_color_literals, knowledge_template_anatomy_baked_svg_ornament_colors, knowledge_template_anatomy_variants_css, knowledge_market_theme_catalog_color_variants_2026 [INFERRED 0.85]
- **QR Check-in Digital Guestbook across vendors** — knowledge_market_raw_acaranya_id_harga_qr_code_check_in, knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_qr_check_in_system, knowledge_market_raw_indoinvite_com_harga_qrcode_check_in_tamu, knowledge_market_raw_sangmempelai_id_pricelist_checkin_qrcode, knowledge_market_raw_invitato_id_pricing_paket_buku_tamu_digital [INFERRED 0.85]
- **Acaranya Simple/Mengundang/Meriah tier ladder** — knowledge_market_raw_acaranya_id_harga_paket_simple, knowledge_market_raw_acaranya_id_harga_paket_mengundang, knowledge_market_raw_acaranya_id_harga_paket_meriah [EXTRACTED 1.00]
- **Hadirly event-day check-in flow** — knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_import_excel_daftar_tamu, knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_qr_check_in_system, knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_check_in_manual, knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_monitor_kehadiran, knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_live_greeting_display, knowledge_market_raw_hadirly_id_tutorial_buku_tamu_qr_export_laporan [EXTRACTED 1.00]
- **WAT three-layer architecture** — claude_workflows_layer, claude_agents_layer, claude_tools_layer, claude_wat_framework [EXTRACTED 1.00]

## Communities (16 total, 1 thin omitted)

### Community 0 - "Business Plan & Guest Links"
Cohesion: 0.09
Nodes (36): DIY-plus tier draft (Hemat 79rb / Lengkap 149rb / Premium 249rb), Per-guest URL /{slug}/g/{code}, WhatsApp text export (4 styles, wa.me links), Suggested template priority (Eloise, Jawa, Islami, Luxury...), Guest name via ?to= query param, Hardcoded strings (must move to i18n), Known bugs (story.title ignored, thanks h2 hardcoded, kenburns no-op), Behaviour gaps for SaaS (+28 more)

### Community 1 - "Section Registry & Core Schema"
Cohesion: 0.08
Nodes (34): Not phase-1 priorities (WA blast, video, usher, custom domain, non-wedding), closing section, Core data changes for Zod schema (S3), countdown section, couple section, cover section, Day-of features (QR check-in, layar sapa, attendance dashboard), footer credit section (+26 more)

### Community 2 - "Theming & Variants"
Cohesion: 0.14
Nodes (25): Popular 2026 color variants (variants[]), Theme = color/font tokens + SVG ornaments + text presets, SVG ornaments bake colors (recolor strategy needed), tools/build-assets.js placeholder SVG generator, CSS design tokens (--olive, --cream, --wood...), data-t textContent binding, Draft core schema from config.js, Eloise reference template (wedding-template/) (+17 more)

### Community 3 - "Competitor Pricing Landscape"
Cohesion: 0.12
Nodes (24): Acaranya, Time-limited active period + cheap extension + auto archive, Market add-on pricing (custom domain, WA blast, video, extension...), Core features are commoditized, Competitors & pricing (ID digital invitations), Indoinvite, Invitato, Market price tiers (DIY / mid / premium / day-of service) (+16 more)

### Community 4 - "Placeholder Asset Generator"
Cohesion: 0.19
Nodes (19): bez(), bud(), cluster(), f(), fs, IMG, landscape(), leaf() (+11 more)

### Community 5 - "Acaranya Packages"
Cohesion: 0.16
Nodes (18): Acaranya.id, Amplop Digital & Tanda Kasih, Form RSVP & Ucapan, Layar Sapa & Check-In Counter, Masa Aktif Undangan, Paket Mengundang, Paket Meriah, Paket Simple (+10 more)

### Community 6 - "Libraries & Licensing"
Cohesion: 0.15
Nodes (18): CDN libraries & licensing, Exmouth font (commercial), GSAP 3.12.5 (+ScrollTrigger), jQuery 3.7.1, lightGallery 2.8.2 (GPLv3/commercial), PhotoSwipe / GLightbox (MIT replacement), Selectize 0.15.2 (jQuery), Slick 1.8.1 (unmaintained, jQuery) (+10 more)

### Community 7 - "Hadirly Day-of Check-in"
Cohesion: 0.18
Nodes (17): Check-in Manual, Export Laporan, Hadirly, Import Excel Daftar Tamu, Kirim Undangan, Live Greeting Display, Monitor Kehadiran, Offline Mode Scanner (+9 more)

### Community 8 - "Sangmempelai Packages"
Cohesion: 0.18
Nodes (16): Mitra Reseller, Buku Tamu Digital, Checkin QRcode, Dashboard Undangan, Double Web Premium, Paket Express, Program Reseller, RSVP System (+8 more)

### Community 9 - "Themes, Religion & Events"
Cohesion: 0.21
Nodes (15): Kekondangan, events section, events[].type / tz / guestGroups, photoless mode, Adat (regional) themes, Bali (Hindu) theme, Chinese theme (sangjit/tea pai), Islami theme (photoless option) (+7 more)

### Community 10 - "Indoinvite Packages"
Cohesion: 0.22
Nodes (13): Buat Undangan Di Chat AI, Custom Domain, Indoinvite, Paket Basic, Paket Berlangganan, Paket Free, Paket Klasik, Paket Premium (+5 more)

### Community 11 - "Template Runtime (main.js)"
Cohesion: 0.19
Nodes (6): copy(), initScroll(), ready(), renderWishes(), toast(), wishes()

### Community 12 - "Shared Python Helpers"
Cohesion: 0.25
Nodes (8): Path, load_env(), Shared helpers for tools. Load env, resolve paths, standard I/O.  Deterministi, Load .env from project root. No-op if python-dotenv missing., Return env var or raise clear error naming the missing key., Path inside .tmp/. Creates .tmp/ if absent. Files here are disposable., require_env(), tmp_path()

### Community 13 - "WAT Framework"
Cohesion: 0.25
Nodes (8): Agents Layer (Decision-Maker), .env secrets store, Self-Improvement Loop, .tmp/ disposable intermediates, Tools Layer (Python scripts), WAT Framework (Workflows, Agents, Tools), Workflows Layer (Markdown SOPs), Workflow Template (_template.md)

## Knowledge Gaps
- **40 isolated node(s):** `fs`, `path`, `ROOT`, `SVG`, `IMG` (+35 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `PROGRESS.md session checkpoint` connect `Business Plan & Guest Links` to `Section Registry & Core Schema`, `Theming & Variants`, `Competitor Pricing Landscape`, `Libraries & Licensing`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Why does `Template Anatomy — Eloise (Olive & Cream)` connect `Theming & Variants` to `Business Plan & Guest Links`, `Section Registry & Core Schema`, `Libraries & Licensing`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Why does `Competitors & pricing (ID digital invitations)` connect `Competitor Pricing Landscape` to `Business Plan & Guest Links`, `Themes, Religion & Events`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **What connects `fs`, `path`, `ROOT` to the rest of the system?**
  _40 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Business Plan & Guest Links` be split into smaller, more focused modules?**
  _Cohesion score 0.09206349206349207 - nodes in this community are weakly interconnected._
- **Should `Section Registry & Core Schema` be split into smaller, more focused modules?**
  _Cohesion score 0.08377896613190731 - nodes in this community are weakly interconnected._
- **Should `Theming & Variants` be split into smaller, more focused modules?**
  _Cohesion score 0.14333333333333334 - nodes in this community are weakly interconnected._