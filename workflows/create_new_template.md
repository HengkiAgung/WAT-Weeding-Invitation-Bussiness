# Workflow: Create New Invitation Template

## Objective
Add a new sellable template to `templates/<id>/` that follows the core contract (`templates/_core/README.md`), works with every existing invitation's data unchanged, passes the validator, and ships as an obfuscated, content-hashed build.

## Inputs
- `template_id`: lowercase slug, also used as the folder name (e.g. `sekar`).
- `concept`: theme and category (`rustic`, `jawa`, `islami`, `luxury`, `sunda`, `bali`, `minang`, `chinese`, …). Pick from `knowledge/market/theme-catalog.md`.
- `variants`: 3–4 color variants (id, name, palette). Say which one gets recolored ornaments.
- `fonts`: Google Fonts only (OFL). No commercial fonts unless a license is bought and logged.
- Optional: a visual reference such as a screenshot, a Figma frame or a competitor demo URL. Take inspiration from it only; never copy its assets or code.

## Tools
- `tools/validate_template.py templates/<id>`: contract check covering the manifest, bindings, labels, literal copy, CSS tokens, ornaments and copyright headers. Exits 1 on errors.
- `tools/recolor_svg.py templates/<id>`: generates the ornament SVG sets for each variant from the manifest hue rules.
- `tools/render_template.py templates/<id> [--data …] [--variant …] [--sections '{…}'] [--no-guest] [--out …]`: builds a preview in `.tmp/preview/`.
- `tools/screenshot_page.mjs <url> <out.png> [--scroll "#id"] [--full] [--click "#openBtn"]`: headless Chrome screenshot. Exits 1 if the page logs console errors or anything lands in `__INVITE_ERRORS__`.
- `tools/build_template.mjs templates/<id>` (or `npm run build:templates`): validates, bundles, minifies, obfuscates, adds the copyright header and writes hashed output to `dist/templates/`.
- Fixtures in `templates/_core/fixtures/`:
  - `sample-islam-id` (full data, guest groups)
  - `sample-kristen-en` (photoless, English)
  - `sample-minimal` (quick buy)

## Steps
1. **Scaffold.** Create `templates/<id>/` with `manifest.json`, `index.html`, `css/style.css`, `variants/<v>.css`, `js/<id>.js` and `assets/svg/`. Copy the manifest shape from `templates/sekar/manifest.json` (the smallest template); `templates/eloise/` is the richer reference.
2. **Manifest.**
   - `id` must equal the folder name.
   - List all 22 section ids from `_core/sections.json` in display order. You may leave out optional ones, but every section with status `core` is required. Override a default with `{ "id": "turutMengundang", "default": true }`.
   - List every CDN library with its version and license. Allowed hosts: jsDelivr, cdnjs and Google Fonts.
3. **HTML.**
   - Exactly one `data-section="<id>"` wrapper per manifest section.
   - Keep all 4 markers: `<!--@HEAD-->`, `<!--@VARIANT-->`, `<!--@INVITE-->` before library scripts, and `<!--@CORE-->` before the template JS.
   - Write no literal text. Text comes from `data-l` (labels), `data-t` (view-model paths in `_core/view-model.json`) or JS `t()`.
   - Put `data-photo` on anything that must disappear in photoless mode. Pair each photo with a `data-if="!images.hero"` fallback ornament so photoless still looks designed.
   - Ornaments are `<img data-orn="file.svg">` so they get recolored per variant.
   - Put a copyright comment at the top of the file.
4. **CSS.**
   - Write color only as `--c-*` tokens. Use the same token names as the other templates (see `:root` in either `style.css`). Copy `:root` from Sekar and change the values.
   - Write alpha colors as `rgb(var(--c-x-rgb) / .5)`.
   - Single-tone patterns such as batik tiles use `mask: url(...)` with `background: var(--c-accent)`. That recolors them through tokens, so they don't need a generated SVG set.
   - Every variant file defines **every** `--c-*` token under `[data-variant="<v>"]`. The default variant mirrors `:root`.
5. **JS.**
   - Wrap everything in an IIFE, and wrap each renderer in `W.section('<id>', fn)`.
   - Read data only from `W.V` and build strings with `esc()`. URLs go through `W.safeUrl` / `attr()`.
   - Pass label keys to `t()` as literals so the validator can check them. Use a ternary rather than `t('ns.' + x)`.
   - Required behaviour:
     - `?open=1` skips the cover animation and shows all revealed content (editor preview and screenshots).
     - `?open=1#section` scrolls to that section.
     - `prefers-reduced-motion` is respected.
     - Content must stay visible if an animation library fails to load. Hide reveal targets only after JS adds a class; see `rv-on` in Sekar.
     - Music starts on open through `W.music.attach()` and `W.music.start()`.
   - Reuse the RSVP, wishes, gift, video-modal and QR code from Sekar. Their DOM ids are part of that code.
6. **Ornaments.** Draw or commission SVGs into `assets/svg/`, using only colors the hue rules target. Add a hue rule to each variant that needs recolored ornaments, then run `python tools/recolor_svg.py templates/<id>`.
7. **Validate.** Run `python tools/validate_template.py templates/<id>` and fix everything until it reports 0 errors. Also re-run it on the other templates if you touched `_core/` or the validator.
8. **Visual QA.**
   - Serve the preview: `python -m http.server 8091 --bind 127.0.0.1 --directory .tmp/preview/<id>` (run in background).
   - Screenshot the cover (no `?open=1`), the open button (`--click "#openBtn"`) and then each section with `?open=1#<id> --scroll "#<id>"`.
   - Cover at least this matrix:
     - `sample-islam-id` on the default variant with a guest.
     - `sample-kristen-en` on the recolored variant, photoless.
     - `sample-minimal` on another variant with `--no-guest`.
     - All optional sections on (`--sections '{"rundown":true,"live":true,"story":true,"video":true,"qrTicket":true,"igFilter":true,"dresscode":true,"protocol":true}'`).
   - The screenshot tool must exit 0 every time, meaning no console errors.
9. **Build.**
   - Run `node tools/build_template.mjs templates/<id>`.
   - Render the build output with `python tools/render_template.py dist/templates/<id> --out .tmp/preview/<id>` and screenshot the cover and a couple of sections again.
   - Obfuscation must not break the page.
10. **Log.** Tick the item in PROGRESS.md, record decisions (fonts, libraries, anything unusual) in the decision log, and add the template to the README.

## Outputs
- `templates/<id>/` (tracked in git).
- `templates/<id>/assets/ornaments/<variant>/`: generated ornament sets, tracked in git so the validator can detect stale ones.
- `dist/templates/<id>/` and `dist/templates/_core/core.<hash>.js`: gitignored build output. The deploy step rebuilds them.
- Screenshots in `.tmp/shots/`, which are disposable.

## Edge Cases & Learnings
- **Obfuscator globals.** javascript-obfuscator hoists its string-array helpers (`_0x…`) to program scope even when the input is an IIFE. `build_template.mjs` wraps the output **after** obfuscation. Without that, core and template bundles leak globals that could collide.
- **Obfuscator options.** Keep `renameGlobals: false` and `transformObjectKeys: false`. `window.INVITE`, `window.WeddingCore` and the `W.V.*` paths are the contract.
- **Obfuscator cost.** `controlFlowFlattening` and `deadCodeInjection` stay off because cheap Android phones in the WhatsApp in-app browser pay for them. Obfuscation only makes copying harder. The real protection is the render token and asset URLs (S7/S10).
- **Label regex.** The validator's `t('key')` regex once matched dynamic prefixes (`t('rsvp.' + x)`). It now requires `'` followed by `,` or `)`. Any `'ns.key'` literal whose namespace is a label namespace is also checked, which covers ternaries and `data-copy-msg`.
- **CSS urls.** A `url()` inside a custom property resolves relative to the stylesheet. Keep the bundle in `css/` so `../assets/...` still resolves after the build (the builder does this).
- **Headless screenshots.** `requestAnimationFrame` barely runs in headless Chrome, so GSAP timelines stall. Always test with `?open=1`; the template must open instantly on that flag.
- **Clicked animations.** Test the cover-open animation with `--click "#openBtn" --after-click 900`, which captures mid-animation, then again with `--after-click 3000`, which captures it open. Still check once on a real phone before release.
- **Label and preset changes.** A new UI string needs new keys in **both** `_core/i18n/id.json` and `en.json`, then `npm run schema:check`. Don't put copy in the template.
