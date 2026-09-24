# Template Anatomy — "Eloise" (Olive & Cream)

Source: `wedding-template/` (nested git repo, commits `5b525a0`, `7c5a19a`). Reference implementation for every future template.
Purpose of this doc: everything needed to (a) turn Eloise into a reusable Template Package and (b) clone new templates from the same spec.

## 1. File map

| File | Size | Role |
|---|---|---|
| `index.html` | 17 KB | Static markup of all sections. Text bound via `data-t="path"`; list containers filled by JS. |
| `js/config.js` | 7 KB | `window.WEDDING` — single data object (all content). **Basis of the core data schema.** |
| `js/main.js` | 25 KB | Behaviour: bindings, list rendering, libs init, RSVP/wish, music, envelope open animation. IIFE, ES5, no build step. |
| `css/style.css` | 32 KB | All styling. Design tokens on `:root`. 9 breakpoints. 15 keyframes. |
| `assets/svg/*` | — | Ornaments: envelope (front/back), 6 botanical ornaments `orn-01..06`, pearls, petal (particle), vinyl (music btn), divider, click hint. |
| `assets/img/*` | — | Photos (jpg real, svg placeholders): hero-1/2, quote-bg, groom, bride, groom-bride, story-1..3, gallery-1..9, akad, resepsi, thanks. |
| `assets/fonts/` | — | Expects licensed `Exmouth.woff2` (commercial). Fallback Pinyon Script. |
| `tools/build-assets.js` | — | Node generator for placeholder SVGs; colors hardcoded (`OLIVE #353a20`, `CREAM #f5f0e8`, `GOLD #d9b680`). |

## 2. Rendering model

1. `config.js` sets `window.WEDDING = {...}`.
2. `main.js` (IIFE) reads `C = window.WEDDING`:
   - **Static binding**: every `[data-t]` element → `textContent = get(C, path)`. Safe (textContent, no HTML).
   - **Images**: set by id (`#heroBg`, `#quoteBg`, `#tyBg`, `#igPhoto` as background-image; `#polaroidImg`, `#groomPolaroid`, `#bridePolaroid` as `src`).
   - **Lists**: HTML strings built with `esc()` helper → `innerHTML` (quote, couple, story, events, rundown, gallery, gift, wishes, cover slides).
   - **Guest**: `?to=Name` (trim, max 40 chars) → `#guestName`, prefill RSVP/wish name. Fallback `guestFallback`.
3. Boot: body `locked` → loader → fonts ready (race 2.5 s) → `ready()` (hide loader, GSAP scroll init). Safety timeout 6 s.
4. Open: click wax seal / hint → GSAP envelope timeline → `finish()` unlocks scroll, dispatches `invitation-open` (AOS start event), shows music btn, autoplay music, hero stagger-in, destroys particles.
5. Every lib init wrapped in `safe(name, fn)` → a failed CDN never breaks the page. If AOS missing, `data-aos` attributes are stripped so content stays visible.

## 3. Section inventory (order = page order)

| # | Section id (HTML) | Purpose | Data (config path) | JS / libs | Required? |
|---|---|---|---|---|---|
| 0 | `#loader` | Spinner | — | CSS | core |
| 1 | `#topCover` | Cover + envelope + wax seal + guest card + petals | `coverNames, coverLabel, monogram, clickText, images.cover[], images.polaroidCover`, guest | Slick (cover fade), tsParticles (petal.svg), GSAP timeline | core |
| — | `#musicBtn` / `#bgm` | Background music toggle (vinyl spin) | `music.src, music.autoplay` | native audio; hides if file 404 | optional |
| 2 | `#primaryPane` | Hero (fixed left pane ≥992px) | `coverNames, date.display, hashtag, images.hero` | GSAP parallax (mobile) / pointer (desktop) | core |
| 3 | `#quote` | Quote slider | `quote` (object or array), `images.quote` | Slick if >1 | optional |
| 4 | `#couple` | Intro + polaroids + groom & bride blocks | `intro.*, groom{label,name,parents,instagram,photo}, bride{…}` | AOS | core |
| 5 | `#story` | Love story, pinned scroll-scrub chapters | `story.title` (**unused — h2 hardcoded**), `story.chapters[]{title,text,photo}` | GSAP ScrollTrigger pin | optional |
| 6 | `#saveDate` | Countdown + .ics download + Google Calendar link | `saveDate.*, date.startISO/endISO/short/calendar*` | setInterval, Blob | core |
| 7 | `#agenda` | Events (akad/resepsi) with arch-clipped photos + Maps btn | `agenda.title/text, agenda.events[]{title,date,time,place,address,map,photo}` | AOS, SVG clipPath `#archClip` | core |
| 8 | `#live` | Live streaming link | `live{title,text,url,button}` | — | optional |
| 9 | `#rundown` | Timeline | `rundown.title, rundown.items[]{time,title}` | AOS | optional |
| 10 | `#toRsvp` | RSVP form → ticket → save PNG | `rsvp{title,text,maxGuests}` | Selectize, html2canvas, localStorage, `endpoint` POST | optional (common) |
| 11 | `#gallery` | Coverflow slider (first 5) + justified grid + lightbox | `gallery.title, gallery.photos[]` | Swiper, lightGallery (+thumbnail) | optional |
| 12 | `#footage` | Video thumb → YouTube modal or MP4 Video.js modal | `footage{title,label,youtubeId,mp4}, images.footage` | modal-video, Video.js | optional |
| 13 | `#ig` | Instagram filter card + hashtag copy | `instagram{title,text,button,url}, hashtag, images.ig` | clipboard | optional |
| 14 | `#gift` | Bank/e-wallet cards + shipping address, copy buttons | `gift{title,text,accounts[]{bank,number,holder},address{label,name,phone,text}}` | clipboard | optional (very common in ID) |
| 15 | `#wish` | Wishes form + list | `wish{title,text,seed[]}` | localStorage, `endpoint` POST | optional (common) |
| 16 | `#thanks` | Thank-you with bg image | `thanks{title,text,names}, images.thanks` | AOS | core |
| 17 | `#footnote` + footer | Dress code / notes + credit | `footnote{text,credit}` | — | core (credit = copyright hook) |

Hidden helpers: `#vjsModal`, `#toast`, SVG `<clipPath id="archClip">`.

## 4. Data model (from `config.js`) → draft core schema

```
meta:     lang, title, hashtag, monogram, storageKey, endpoint
cover:    coverNames, coverLabel, guestFallback, clickText
date:     startISO, endISO, display, short, calendarTitle, calendarLocation, calendarDetails
images:   cover[], hero, quote, polaroidCover, thanks, ig, footage
music:    src, autoplay
quote:    {text, author} | [{text, author}]
intro:    kicker, text
groom/bride: label, name, parents, instagram, photo
story:    title, chapters[]{title, text, photo}
saveDate: title, calendarButton
agenda:   title, text, events[]{title, date, time, place, address, map, photo}
live:     title, text, url, button
rundown:  title, items[]{time, title}
rsvp:     title, text, maxGuests
gallery:  title, photos[]
footage:  title, label, youtubeId, mp4
instagram:title, text, button, url
gift:     title, text, accounts[]{bank, number, holder}, address{label, name, phone, text}
wish:     title, text, seed[]{name, message, at}
thanks:   title, text, names
footnote: text, credit
```

Schema refactor rules (for `templates/_core/schema`):
- Split **content data** (user-entered: names, parents, dates, venues, accounts, photos) from **copy/labels** (section titles, button text, UI strings) — labels come from template i18n defaults (`id`/`en`), user may override.
- **Derive, don't duplicate**: `coverNames`, `thanks.names`, `title`, `calendarTitle`, `monogram` can be derived from groom/bride names; `date.display/short` derived from `startISO` + locale; `calendarLocation` from main event.
- Events need structured date/time (`startISO`, `endISO`, `timezone` WIB/WITA/WIT) instead of free-text strings, so countdown/calendar/format are consistent.
- Add Indonesia-specific fields: `groom.fullName` + `nickname`, `parents{father, mother}`, `childOrder` ("Putra pertama dari"), `turutMengundang[]`, `ayat{text, source}` (QS Ar-Rum 21 default), `gift.qris` image, `event.type` (akad/pemberkatan/resepsi/unduh mantu), dress code.

## 5. Theming

CSS tokens on `:root`:
```
--olive #353a20 (primary/dark, 40 uses)   --cream #f5f0e8 (light bg/text on dark, 31)
--wood  #d9b680 (accent/gold, 15)         --white #fff (11)   --sec #f6eed7 (7)   --line #d4cfc2 (7)
--olive-2 #4a5030  --olive-3 #252915  --brown #452812  --grey #878787
--script 'Exmouth','Pinyon Script',…      --serif 'Instrument Serif',…
--pane-w clamp(460px,40vw,640px)          --ease-slow cubic-bezier(.77,0,.18,1)
```
Blockers for color variants:
- **41 hardcoded color literals** (`#hex` / `rgba(`) in `style.css` (e.g. `pulse-beat-green` uses `rgba(53,58,32,…)`) → convert to tokens (use `color-mix()` or `--olive-rgb` triplets).
- **SVG ornaments bake colors in** (generated by `build-assets.js`) → recolor strategy needed: inline SVG with `currentColor`/CSS vars, or regenerate SVG set per variant at build time.
- `<meta name="theme-color" content="#353a20">` and html2canvas `backgroundColor:'#ffffff'` hardcoded.
- Semantic token names needed for cross-template reuse: `--c-primary, --c-primary-2, --c-bg, --c-surface, --c-accent, --c-text, --c-muted, --c-line, --f-script, --f-serif, --f-sans`.

## 6. Hardcoded strings (must move to i18n labels)

HTML: "Wedding Invitation", "Our Love Story", "Days/Hours/Minutes/Seconds", "or open in Google Calendar", "Name", "Number of guests", "Will you attend?", "Will Attend/Will Not Attend", "Send RSVP", "Change", "Save image", "Message", "Write your wishes…", "Send Wish", "Thank You" (h2), "Hai,", alt text "Reza"/"Nurul", `<title>`, og/description meta.
JS: "Buka Maps", "person/people", RSVP ack messages, "guest(s)", "Copied", "Hashtag copied", "Copy", "Copy address", "a.n.", "Calendar file downloaded", "Thank you for your wishes", "Save is unavailable offline", "Could not save image", "Play video:", `'en-GB'` date locale, file names `wedding-nurul-reza.ics`, `rsvp-nurul-reza.png`, PRODID "Eloise Invitation".

## 7. Libraries (all CDN) & licensing

| Lib | Version | Used for | License / note |
|---|---|---|---|
| jQuery | 3.7.1 | only for Slick + Selectize | MIT — removable if those replaced |
| AOS | 2.3.4 | scroll reveal | MIT |
| GSAP (+ScrollTrigger, Observer) | 3.12.5 | envelope, story pin, parallax | Free incl. commercial (since 2024 Webflow) |
| tsParticles | 3.9.1 | petals on cover | MIT (heavy bundle — use slim) |
| Slick | 1.8.1 | cover + quote fade | MIT, unmaintained, needs jQuery → replace with Swiper fade |
| Swiper | 12 | gallery coverflow | MIT |
| **lightGallery** | 2.8.2 | lightbox | **GPLv3 / commercial licence required** (placeholder key) → buy or replace (PhotoSwipe MIT / GLightbox MIT) |
| Video.js | 8.16.1 | self-hosted mp4 | Apache-2.0 |
| modal-video | 2.4.8 | YouTube modal | MIT |
| Selectize | 0.15.2 | guest count select | Apache-2.0, needs jQuery → native select |
| html2canvas | 1.4.1 | RSVP ticket PNG | MIT |
| Font Awesome | 5.9 | quote mark, star, instagram | Free (icons CC BY 4.0) |
| Phosphor Icons | 2.1.1 | UI icons | MIT |
| **Exmouth font** | — | script | **Commercial**; need web/app licence for resale, else Google font |

14 CDN requests → slim target: GSAP, Swiper, AOS, PhotoSwipe/GLightbox, html2canvas (lazy), one icon set.

## 8. Layout & motion

- Mobile-first. ≥992px: split screen (`.primary-pane` fixed left, `.secondary-pane` scroll right, width `--pane-w`).
- Breakpoints: 1025 · 992 · 980 · 768 · 600 · 425 · 400 · 390 · 280, plus `max-height:640px` and `prefers-reduced-motion`.
- Motion vocabulary (reusable across templates): envelope open, petals particles, AOS fade/zoom (long 1.5–3.4 s durations = "slow luxurious" feel), `sway`/`sway-2` ornament swing, GSAP pinned story, pulse on wax seal, vinyl spin, Ken Burns (currently no-op).
- Signature pieces that make it "Eloise": envelope + wax seal + polaroids + arch-clipped event photos + botanical ornaments.

## 9. Behaviour gaps to fix for SaaS

- RSVP & wishes in **localStorage** (per device) → must POST to app API and read wishes from server.
- No section toggle: missing data → empty section or JS error (e.g. `C.story.chapters.map` throws if story absent; caught only for lib inits, not for renderers).
- Guest name from `?to=` only → add `/g/{code}` resolved server-side (tracking opened/RSVP per guest).
- Bugs: `story.title` ignored; `thanks.title` rendered as kicker while h2 hardcoded "Thank You"; `person()` ignores `cls`; `kenburns` keyframe no-op; external image URLs in CSS `url("…")` not escaped.
- No copyright header, no domain lock, assets publicly addressable.

## 10. What a new template must provide (clone checklist)

1. `manifest.json` (id, name, category, sections[], variants[], fonts, libs).
2. `index.html` with `data-section="<id>"` wrapper per section and `data-t` / `data-l` (label) bindings only — no literal copy.
3. `style.css` using only semantic tokens; `variants/*.css` overriding tokens.
4. Renderers for list sections following the same data shape (shared core runtime handles bindings, i18n, guests, RSVP/wish API, music, calendar, copy, toasts).
5. Signature cover/opening animation + ornament set (recolorable).
6. Pass `tools/validate_template.py`.
