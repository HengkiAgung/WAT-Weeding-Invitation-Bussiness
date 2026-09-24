# Graph Report - D:/Code/claude/WAT-Weeding-Invitation-Bussiness  (2026-09-24)

## Corpus Check
- Corpus is ~11,212 words - fits in a single context window. You may not need a graph.

## Summary
- 107 nodes · 163 edges · 13 communities
- Extraction: 83% EXTRACTED · 17% INFERRED · 0% AMBIGUOUS · INFERRED: 27 edges (avg confidence: 0.89)
- Token cost: 83,477 input · 0 output

## Community Hubs (Navigation)
- Placeholder SVG Generator
- Business Plan & Template Spec
- Invitation Runtime Functions
- WAT Framework Layers
- Python Tool Helpers
- Libraries & Licensing
- Data Schema & Indonesia Fields
- Eloise Page Layout
- Guest Links & Security
- Config-Driven Rendering
- Envelope Opening Animation
- RSVP & Wishes Storage

## God Nodes (most connected - your core abstractions)
1. `Eloise index.html page` - 16 edges
2. `Digital Invitation Business Progress Plan` - 14 edges
3. `f()` - 10 edges
4. `Workflow: Analyze Invitation Template` - 8 edges
5. `Eloise Template (Olive & Cream) Anatomy` - 7 edges
6. `js/main.js runtime (IIFE, ES5)` - 7 edges
7. `Eloise Invitation README` - 7 edges
8. `rng()` - 5 edges
9. `landscape()` - 5 edges
10. `window.WEDDING config object (js/config.js)` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Guest name via ?to= query param` --semantically_similar_to--> `Public render /{slug}/g/{code} with HMAC render token`  [INFERRED] [semantically similar]
  knowledge/template-anatomy.md → PROGRESS.md
- `Eloise index.html page` --references--> `Hardcoded strings to move to i18n`  [INFERRED]
  wedding-template/index.html → knowledge/template-anatomy.md
- `templates/_core framework (Zod schema, i18n, section registry, runtime binder, API client)` --implements--> `Draft Core Schema (data model)`  [INFERRED]
  PROGRESS.md → knowledge/template-anatomy.md
- `tools/validate_template.py (planned)` --references--> `New Template Clone Checklist (manifest, data-section, variants)`  [EXTRACTED]
  PROGRESS.md → knowledge/template-anatomy.md
- `Eloise index.html page` --implements--> `Section Inventory (18 sections)`  [INFERRED]
  wedding-template/index.html → knowledge/template-anatomy.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **WAT three-layer architecture** — claude_workflows_layer, claude_agents_layer, claude_tools_layer, claude_wat_framework [EXTRACTED 1.00]
- **Eloise config-driven rendering pipeline** — knowledge_template_anatomy_window_wedding, knowledge_template_anatomy_main_js, wedding_template_index_page, knowledge_template_anatomy_safe_wrapper, knowledge_template_anatomy_cdn_libraries [EXTRACTED 1.00]
- **Template Package refactor requirements (variants, schema, i18n)** — knowledge_template_anatomy_semantic_tokens, knowledge_template_anatomy_recolorable_svg, knowledge_template_anatomy_schema_refactor_rules, knowledge_template_anatomy_hardcoded_strings, knowledge_template_anatomy_template_manifest, progress_templates_core [INFERRED 0.85]

## Communities (13 total, 0 thin omitted)

### Community 0 - "Placeholder SVG Generator"
Cohesion: 0.19
Nodes (19): bez(), bud(), cluster(), f(), fs, IMG, landscape(), leaf() (+11 more)

### Community 1 - "Business Plan & Template Spec"
Cohesion: 0.14
Nodes (18): tools/build-assets.js placeholder SVG generator, New Template Clone Checklist (manifest, data-section, variants), CSS Design Tokens (:root olive/cream/wood), Recolorable SVG ornament strategy, Semantic tokens (--c-primary, --c-bg, --f-script...), manifest.json (id, sections, variants, fonts, libs), Bulk Guest Import (Excel) with guest codes, Cloudflare R2 Storage (private, presigned URLs) (+10 more)

### Community 2 - "Invitation Runtime Functions"
Cohesion: 0.19
Nodes (6): copy(), initScroll(), ready(), renderWishes(), toast(), wishes()

### Community 3 - "WAT Framework Layers"
Cohesion: 0.21
Nodes (12): Agents Layer (Decision-Maker), .env secrets store, Self-Improvement Loop, .tmp/ disposable intermediates, Tools Layer (Python scripts), WAT Framework (Workflows, Agents, Tools), Workflows Layer (Markdown SOPs), tools/validate_template.py (planned) (+4 more)

### Community 4 - "Python Tool Helpers"
Cohesion: 0.25
Nodes (8): Path, load_env(), Shared helpers for tools. Load env, resolve paths, standard I/O.  Deterministi, Load .env from project root. No-op if python-dotenv missing., Return env var or raise clear error naming the missing key., Path inside .tmp/. Creates .tmp/ if absent. Files here are disposable., require_env(), tmp_path()

### Community 5 - "Libraries & Licensing"
Cohesion: 0.40
Nodes (6): CDN Libraries & Licensing, Exmouth font (commercial), lightGallery 2.8.2 (GPLv3/commercial), Slick + Selectize (jQuery-dependent, to replace), #gallery Swiper + lightbox section, Eloise Invitation README

### Community 6 - "Data Schema & Indonesia Fields"
Cohesion: 0.33
Nodes (6): Draft Core Schema (data model), Hardcoded strings to move to i18n, Indonesia-specific fields (turutMengundang, ayat, QRIS, childOrder), Schema Refactor Rules (content vs labels, derive don't duplicate), Indonesian Market Research (S2), #gift wedding gift section

### Community 7 - "Eloise Page Layout"
Cohesion: 0.40
Nodes (6): Eloise Template (Olive & Cream) Anatomy, Section Inventory (18 sections), Split-screen layout >=992px (primary/secondary pane), SVG clipPath #archClip, Eloise index.html page, #saveDate countdown + calendar section

### Community 8 - "Guest Links & Security"
Cohesion: 0.40
Nodes (5): Behaviour gaps for SaaS (localStorage RSVP, no toggles, bugs), Guest name via ?to= query param, tools/build_template (bundle, minify, obfuscate, copyright header), Hardening (demo watermark, domain lock, CSP, rate limits), Public render /{slug}/g/{code} with HMAC render token

### Community 9 - "Config-Driven Rendering"
Cohesion: 0.67
Nodes (4): js/main.js runtime (IIFE, ES5), Rendering Model (config.js -> main.js data-t binding), safe(name, fn) lib init wrapper, window.WEDDING config object (js/config.js)

### Community 10 - "Envelope Opening Animation"
Cohesion: 0.67
Nodes (3): Envelope + wax seal opening animation (Eloise signature), GSAP 3.12.5 (+ScrollTrigger, Observer), #topCover cover/envelope section

### Community 11 - "RSVP & Wishes Storage"
Cohesion: 0.67
Nodes (3): RSVP/wish storage in localStorage + endpoint POST, #toRsvp RSVP form + ticket section, #wish wishes section

## Knowledge Gaps
- **16 isolated node(s):** `fs`, `path`, `ROOT`, `SVG`, `IMG` (+11 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Eloise index.html page` connect `Eloise Page Layout` to `Business Plan & Template Spec`, `Libraries & Licensing`, `Data Schema & Indonesia Fields`, `Config-Driven Rendering`, `Envelope Opening Animation`, `RSVP & Wishes Storage`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **Why does `Workflow: Analyze Invitation Template` connect `Business Plan & Template Spec` to `WAT Framework Layers`, `Eloise Page Layout`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Why does `Digital Invitation Business Progress Plan` connect `Business Plan & Template Spec` to `Guest Links & Security`, `Libraries & Licensing`, `Data Schema & Indonesia Fields`, `Eloise Page Layout`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `Eloise index.html page` (e.g. with `Split-screen layout >=992px (primary/secondary pane)` and `Hardcoded strings to move to i18n`) actually correct?**
  _`Eloise index.html page` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `fs`, `path`, `ROOT` to the rest of the system?**
  _16 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Business Plan & Template Spec` be split into smaller, more focused modules?**
  _Cohesion score 0.1437908496732026 - nodes in this community are weakly interconnected._