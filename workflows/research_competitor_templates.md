# Workflow: Research Competitor Invitation Templates

## Objective
Study a competitor's product (flow, features, pricing) and every public template demo. Record each one as a design analysis that we can learn from, never as a copy. Output goes to `knowledge/competitors/<site>/`.

## Inputs
- `site`: competitor slug (e.g. `katsudoto`) and its catalog URL.
- `demo_urls`: the list of live demo URLs. Get it from the catalog's data endpoint if there is one, otherwise from the catalog HTML.
- Optional: user guide or docs (look for `llms.txt` / `.md` variants first; they are cheaper than scraping HTML).

## Tools
- `WebFetch` / `curl`: product, pricing and guide pages.
- `node tools/capture_demo.mjs <url> .tmp/demos/<name> [--open "<selector>"] [--step-wait 3500] [--no-desktop]`: headless Chrome capture. Produces:
  - `cover.png` and `desktop.png`;
  - scroll frames after the cover is opened;
  - contact sheets `sheet-*.png` (the files to look at);
  - `meta.json` with sections, fonts, colour tokens, libraries, animation counts and the asset inventory.
- `python tools/demo_digest.py .tmp/demos/<name> [--inject <analysis.md>]`: turns `meta.json` into a markdown "Data teknis" block and replaces or appends it in the analysis file.

## Steps
1. **Rules first.** Read `knowledge/competitors/katsudoto/README.md` → "Aturan pakai". We study ideas and patterns only.
   - Never download or store competitor HTML/CSS/JS, illustrations, photos, fonts or copy for reuse.
   - Screenshots stay in `.tmp/` (gitignored).
2. **Robots/terms.** Check `robots.txt`. Keep requests sequential or at most 3 in parallel. Never log in, pay, or submit forms on the competitor site.
3. **Product study.** Fetch landing, pricing and guide pages. Write `knowledge/competitors/<site>/product-flow.md`:
   - product lines, prices and add-ons;
   - signup → pay → dashboard flow;
   - editor menus;
   - guest management and day-of features;
   - a table of ideas to adopt, each with its target session.
4. **Catalog.** Save the design list as `catalog.json` (id, name, tags, release date, usage, demo URL).
5. **Capture** every demo: `cat list | xargs -P 3 -L 1 sh -c 'node tools/capture_demo.mjs "$1" ".tmp/demos/$0"'`. Re-run the failures with the fixes listed under Edge Cases.
6. **Analyse.** For each demo, look at `sheet-1.png` (and `cover.png`) and write `templates/<name>.md` with:
   - front matter: source_url, tags, release date, usage, editable colours;
   - the sections Ringkasan, "Layout & alur per section", Aset, "Animasi & interaksi", "Tipografi & warna";
   - **"Arah orisinal untuk kita"**: how to turn the idea into something ours (local motif, different composition), which UI patterns to reuse, and what to avoid.
   - Then run `demo_digest.py --inject`.
7. **Synthesise** `templates/INDEX.md`:
   - a table sorted by usage;
   - cross-template patterns;
   - core/schema gaps;
   - the recommended next templates;
   - warnings (IP, security).
8. **Update** `PROGRESS.md` (session items, backlog, decision log), `knowledge/market/competitors-pricing.md` and `feature-matrix.md`.
9. **Originality check against our own templates.** Compare each of our templates with the closest competitor analyses on:
   - name;
   - signature motif and cover composition;
   - fonts;
   - default copy.
   Flag any overlap to the user.
10. Commit on a branch (no screenshots).

## Outputs
- `knowledge/competitors/<site>/{README.md, product-flow.md, catalog.json, templates/*.md, templates/INDEX.md}`, tracked in git.
- `.tmp/demos/<name>/`: screenshots and meta. Disposable, never committed.

## Edge Cases & Learnings
- **Hidden catalog data.** Catalogs are often filled by AJAX. Read the page JS to find the endpoint. katsudoto: `POST /desain/` with form field `status=get_all_designs` returns JSON.
- **Docs.** GitBook-style docs expose `llms.txt` plus `.md` for every page. Download these instead of rendering the HTML.
- **Open button.** Its text varies ("Open Invitation", "Buka Undangan", "Step Inside", "Start The Journey", "Let's Go"). The tool matches these by text. If the cover stays closed, pass `--open "<css selector>"`.
- **Slow reveals.** AOS reveal animations can take up to 3.5 s, and frames come out empty with short waits. The default `--step-wait` is 3000 ms; use 3500 if content is still blank.
- **Scroll-locked pages.** Old templates keep the window scroll-locked. The tool unlocks it for the capture and falls back to beyond-viewport clips; animations are not captured in that mode.
- **Contact sheets.** The contact-sheet viewport must be whole pixels, otherwise CDP returns "Invalid parameters".
- **Demo junk.** Public demos show spam, SQL-injection payloads and troll comments in their wish lists, and some use third-party copyrighted media (e.g. Disney). Record these as lessons, never as reference material.
- **Our Eloise.** Our first template (Eloise) was found to be a reconstruction of katsudoto's Eloise. It was redesigned as Rimbun in S4d. Always run step 9.
