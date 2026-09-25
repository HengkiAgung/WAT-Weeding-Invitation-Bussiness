# Template Core — contract for every invitation template

`templates/_core/` is shared by all templates, the editor (S6) and the render route (S7).
A template = folder `templates/<id>/` that follows this contract and passes `python tools/validate_template.py templates/<id>`.

## Files

| File | Role |
|---|---|
| `schema.ts` | **Zod source of truth** for `InvitationData` (+ `Guest`, `Theme`, `Sections`, `Runtime`). One schema for all templates → switching templates never needs re-entry. |
| `schema.json` | Generated JSON Schema (`npm run schema:export`). Don't edit. |
| `sections.json` | Section registry: 22 ids, `core`/`opt`, default, `requires` (auto-hide when data empty), `hideWhenPhotoless`, editor `fields`. |
| `view-model.json` | Allowed binding paths (`W.V`) for `data-t/-if/-href/-src/-bg`. |
| `i18n/id.json`, `i18n/en.json` | UI labels (flat keys, `{var}` interpolation). Same key set in both (checked). |
| `presets/religion.json` | Salam/opening/closing per `religion` × lang + verse presets (Ar-Rum 21, Matius 19:6, Rg Veda X.85.42, …). |
| `runtime/core.js` | Browser runtime → `window.WeddingCore` (`W`). |
| `fixtures/` | Sample data (`sample-*.json`), default render context, placeholder SVG images. |
| `scripts/` | `export-schema.ts`, `check-fixtures.ts`, `parse-data.ts` (Node ≥ 22, `--experimental-strip-types`). |

## Data rules
- **Content ≠ copy.** Data holds names, dates, venues, accounts, photos. Titles/buttons/salam/ayat come from labels + religion presets; users override a single label via `data.copy["gift.title"]`, or salam/ayat via `opening` / `verse` / `closing`.
- **Derive, don't duplicate.** Couple names, monogram, "Putra pertama dari Bapak … & Ibu …", formatted dates, calendar title — built in `core.js`.
- Events use structured `date` + `timeStart`/`timeEnd` + `tz` (WIB/WITA/WIT). Times render in the event's own zone regardless of the viewer's.
- `events[].guestGroups` restrict an event to guests of those groups (`guest.group`). No guest → only unrestricted events.
- Assets are refs (R2 key / relative path / https). The server swaps them for short-lived signed URLs before injecting (S7).

## Render pipeline (server, S7 — reference: `tools/render_template.py`)
1. Parse `InvitationData` (Zod, defaults applied).
2. Inject **before** `core.js`:
   ```js
   window.INVITE = { data, theme: {variant, ornamentBase, tokens}, sections: {id: bool}, guest: {name, code, group, maxPax} | null,
                     runtime: {mode: 'preview'|'demo'|'live', slug, endpoint, token, brand: {name, url}},
                     labels /* i18n/<lang>.json */, presets /* religion.json */, registry /* sections.json */,
                     template: {id, sections /* manifest.sections */} };
   ```
3. Fill HTML markers: `<!--@HEAD-->` (meta/OG), `<!--@VARIANT-->` (variant css link), `<!--@INVITE-->`, `<!--@CORE-->` (core.js). Set `<html lang data-variant>` server-side (no flash).

Section visibility = in manifest **and** (core, or `sections[id]` ?? manifest default ?? registry default) **and** `requires` met **and** not (`hideWhenPhotoless` && photoless). Off sections are **removed** from the DOM.

## HTML binding attributes
| Attribute | Effect |
|---|---|
| `data-section="id"` | Wrapper per section (exactly one each). Removed when off. |
| `data-t="path"` | `textContent` from view model (never innerHTML). |
| `data-l="key"` | Label text. `data-l-attr="placeholder:key;aria-label:key"` for attributes. |
| `data-if="path"` / `data-if="!path"` | Remove element when value empty (or non-empty). |
| `data-href` / `data-src` / `data-bg` | URL from view model, passed through `safeUrl` (blocks `javascript:`). |
| `data-orn="file.svg"` | Ornament image; src = `theme.ornamentBase` + file (recolored per variant). |
| `data-photo` | Removed in photoless mode. |

No literal copy in template HTML — the validator fails on text nodes.

## Runtime API (`window.WeddingCore`)
`W.V` view model · `W.t(key, vars)` · `W.isOn(id)` · `W.section(id, fn)` (runs only when on, errors isolated) · `W.bind(scope)` ·
`W.esc` · `W.safeUrl` · `W.cssUrl` · `W.toast` · `W.copy` · `W.download` · `W.countdown(cb)` · `W.calendar.ics()` / `.gcalUrl()` ·
`W.api.rsvp(p)` / `.savedRsvp()` / `.wishes(cursor)` / `.addWish(w)` · `W.music.attach(audio, btn)` / `.start()` · `W.qr(el, text)` · `W.guestQrText()` ·
`W.onOpen(fn)` / `W.open()` (fires `invitation-open`) · `W.errors` (also `window.__INVITE_ERRORS__`) · `W.loadScript(src, globalFn)` · `W.fmtDate(iso, opts)`.

## Widgets (`W.ui`) — shared behaviour, template-owned markup
Interactive sections are implemented once in `core.js`; templates only write the markup (fixed ids below) and CSS, then call the widget inside `W.section`.

| Call | Required ids / markup |
|---|---|
| `W.section('rsvp', W.ui.rsvp)` | `#rsvpForm` (radios `name=attending` yes/no/maybe, submit button) · `#rsvpName` · `#rsvpPax` (select) · `#rsvpPaxRow` · `#rsvpEvents` (fieldset, `hidden`; checkboxes generated as `<label><input name=events><span>`) · `#rsvpDone` (`hidden`) · `#ticket` · `#rsvpStatus` · `#rsvpMsg` · `#ticketMeta` · `#changeRSVP` · `#saveTicket` (html2canvas lazy) |
| `W.section('wishes', () => W.ui.wishes({item}))` | `#wishForm` · `#wishName` · `#wishMsg` · `#wishList` · `#wishMore` (`hidden`). Default item `.wish-item > b + time + p`; `item(w, dateText)` overrides |
| `W.section('video', W.ui.video)` | `#videoBox` (thumb, `img[data-src=video.poster]`) · `#videoModal` (`hidden`) · `#videoHost` · `#videoClose` |
| `W.section('qrTicket', W.ui.qrTicket)` | `#qrBox` · `#qrCode` |
| `W.section('countdown', W.ui.countdown)` | `#cdD #cdH #cdM #cdS` · `#addToCalendar` · `#gcalLink` (all optional) |
| `W.ui.copyButtons(el)` | buttons `[data-copy="text"][data-copy-msg="label.key"]` inside `el` (gift cards) |
| `W.ui.inviters({col})` / `W.ui.swatches()` | return HTML for turut mengundang (couple order) / dress-code swatches |
| `W.ui.reveal(instant)` | reveal-on-scroll for `[data-rv]`: adds `html.rv-on`, then `.in` when visible. Hide targets **only** under `.rv-on`. `instant` (`?open=1`) shows all |
| `W.ui.validate([inputs])` | marks empty inputs `.invalid`, returns bool |

## API endpoints expected in `live` mode (implemented in S7)
Header `X-Render-Token: <runtime.token>` on every call. Other modes keep RSVP/wishes in `localStorage`.
- `POST {endpoint}/rsvp` `{name, attending: 'yes'|'no'|'maybe', pax, events: [eventId], code, at}` → `2xx`
- `GET {endpoint}/wishes?cursor=` → `{items: [{name, message, at}], next}`
- `POST {endpoint}/wishes` `{name, message, code, at}` → `{item}`

## Preview URL flags (template-side)
`?open=1` skips the envelope and reveal animations (editor live preview, screenshots); `?open=1#gift` jumps to a section. `?to=Nama` sets a guest name when no guest is injected.

## Commands
```bash
npm run schema:export                                    # regenerate schema.json after editing schema.ts
npm run schema:check                                     # fixtures vs Zod + label/preset consistency
python tools/recolor_svg.py templates/rimbun             # regenerate variant ornaments after editing SVGs/rules
python tools/validate_template.py templates/rimbun       # contract check (exit 1 on errors)
python tools/render_template.py templates/rimbun --variant sage --serve 8080       # preview
node tools/screenshot_page.mjs "http://127.0.0.1:8080/?open=1" out.png --scroll "#gift"   # screenshot + console errors
node tools/screenshot_page.mjs "http://127.0.0.1:8080/" out.png --click "#openBtn"           # cover-open animation
node tools/build_template.mjs templates/sekar            # production build → dist/templates/ (npm run build:templates = all)
```

Templates: `templates/rimbun/` (tropical garden, rich reference: GSAP/Swiper/AOS/tsParticles) · `templates/sekar/` (Jawa, no animation lib) · `templates/raudhah/` (Islami photoless-first, smallest — start new templates from this one). New template: `workflows/create_new_template.md`.
