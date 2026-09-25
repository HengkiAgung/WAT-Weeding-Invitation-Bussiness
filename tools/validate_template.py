"""Validate a template package against the core contract (templates/_core).

Checks (errors fail the run, warnings don't):
  manifest   required keys, section ids exist in registry, all core sections present, variants/css exist
  html       every manifest section has exactly one [data-section], no unknown data-section,
             data-t/data-if/data-href/data-src/data-bg paths exist in view-model.json,
             data-l / data-l-attr keys exist in i18n id+en, data-orn files exist,
             render markers present, NO literal copy in text nodes, no banned libs, script hosts allow-listed
  js         t('key') / 'ns.key' labels exist (template scripts + core.js), W.section('id') ids are in the manifest
  css        color literals only inside :root (style.css) or variant files; variants define every --c-* token
  ornaments  generated variant sets exist and are up to date with tools/recolor_svg.py
  legal      copyright header in html/css/js

Usage:
    python tools/validate_template.py templates/rimbun
    python tools/validate_template.py templates/rimbun --json   # machine-readable
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _shared import ROOT  # noqa: E402
from recolor_svg import recolor_svg  # noqa: E402

CORE = ROOT / "templates" / "_core"
MARKERS = ("<!--@HEAD-->", "<!--@VARIANT-->", "<!--@INVITE-->", "<!--@CORE-->")
BANNED_LIBS = ("jquery", "lightgallery", "slick-carousel", "selectize", "exmouth", "font-awesome", "modal-video", "video.js", "vjs.zencdn")
SCRIPT_HOSTS = ("https://cdn.jsdelivr.net/", "https://cdnjs.cloudflare.com/")
STYLE_HOSTS = SCRIPT_HOSTS + ("https://fonts.googleapis.com/",)
NEUTRAL_COLORS = re.compile(r"^(#fff|#ffffff|#000|#000000|rgba\(\s*0\s*,\s*0\s*,\s*0\s*,[^)]*\)|rgba\(\s*255\s*,\s*255\s*,\s*255\s*,[^)]*\)|transparent)$", re.I)
COLOR_LITERAL = re.compile(r"#[0-9a-fA-F]{3,8}\b|rgba?\((?!\s*var\()[^)]*\)")  # rgb(var(--token-rgb) / a) is fine
REQUIRED_MANIFEST = ("id", "name", "version", "category", "sections", "variants", "defaultVariant", "entry", "libs", "fonts")
BINDING_ATTRS = ("data-t", "data-if", "data-href", "data-src", "data-bg")


class Report:
    def __init__(self) -> None:
        self.errors: list[str] = []
        self.warnings: list[str] = []

    def err(self, area: str, msg: str) -> None:
        self.errors.append(f"[{area}] {msg}")

    def warn(self, area: str, msg: str) -> None:
        self.warnings.append(f"[{area}] {msg}")


class TemplateHTML(HTMLParser):
    """Collect elements with attributes, literal text nodes and external resources."""

    SKIP_TEXT = {"script", "style", "title", "svg"}

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.elements: list[tuple[str, dict, int]] = []
        self.text: list[tuple[str, int]] = []
        self.stack: list[str] = []
        self.scripts: list[str] = []
        self.styles: list[str] = []

    def handle_starttag(self, tag, attrs):
        a = {k: (v or "") for k, v in attrs}
        self.elements.append((tag, a, self.getpos()[0]))
        if tag == "script" and a.get("src"):
            self.scripts.append(a["src"])
        if tag == "link" and a.get("rel") == "stylesheet":
            self.styles.append(a.get("href", ""))
        if tag not in ("meta", "link", "img", "input", "br", "source", "path", "i"):
            self.stack.append(tag)

    def handle_endtag(self, tag):
        if tag in self.stack:
            while self.stack and self.stack.pop() != tag:
                pass

    def handle_data(self, data):
        if data.strip() and not (set(self.stack) & self.SKIP_TEXT) and "body" in self.stack:
            self.text.append((data.strip(), self.getpos()[0]))


def load(p: Path):
    return json.loads(p.read_text(encoding="utf-8"))


def check_manifest(tpl: Path, m: dict, registry: dict, r: Report) -> None:
    for k in REQUIRED_MANIFEST:
        if k not in m:
            r.err("manifest", f"missing key {k!r}")
    if m.get("id") != tpl.name:
        r.err("manifest", f"id {m.get('id')!r} must equal folder name {tpl.name!r}")
    reg_ids = {s["id"]: s for s in registry["sections"]}
    ids = [s["id"] if isinstance(s, dict) else s for s in m.get("sections", [])]
    if len(ids) != len(set(ids)):
        r.err("manifest", "duplicate section ids")
    for i in ids:
        if i not in reg_ids:
            r.err("manifest", f"section {i!r} not in _core/sections.json")
    for sid, s in reg_ids.items():
        if s["status"] == "core" and sid not in ids:
            r.err("manifest", f"core section {sid!r} missing")
    vids = [v["id"] for v in m.get("variants", [])]
    if m.get("defaultVariant") not in vids:
        r.err("manifest", f"defaultVariant {m.get('defaultVariant')!r} not in variants")
    for v in m.get("variants", []):
        if not (tpl / v.get("css", "")).is_file():
            r.err("manifest", f"variant {v['id']}: css {v.get('css')!r} not found")
    for lib in m.get("libs", []):
        if not lib.get("license"):
            r.err("manifest", f"lib {lib.get('name')!r} has no license")


def check_html(tpl: Path, m: dict, vm: dict, labels: dict[str, dict], r: Report) -> TemplateHTML:
    html = (tpl / m.get("entry", "index.html")).read_text(encoding="utf-8")
    for mk in MARKERS:
        if mk not in html:
            r.err("html", f"render marker {mk} missing")
    p = TemplateHTML()
    p.feed(html)
    ids = [s["id"] if isinstance(s, dict) else s for s in m.get("sections", [])]
    found: dict[str, int] = {}
    paths = set(vm["scalars"]) | set(vm["lists"])
    orn_src = tpl / (m.get("ornaments") or {}).get("source", "assets/svg/")
    for tag, a, line in p.elements:
        if "data-section" in a:
            found[a["data-section"]] = found.get(a["data-section"], 0) + 1
        for attr in BINDING_ATTRS:
            if attr in a:
                path = a[attr].lstrip("!")
                allowed = paths if attr == "data-if" else set(vm["scalars"])
                if path not in allowed:
                    r.err("html", f"line {line}: {attr}={a[attr]!r} not in view-model.json")
        keys = []
        if "data-l" in a:
            keys.append(a["data-l"])
        if "data-l-attr" in a:
            for pair in a["data-l-attr"].split(";"):
                kv = pair.split(":")
                if len(kv) != 2:
                    r.err("html", f"line {line}: bad data-l-attr {a['data-l-attr']!r}")
                else:
                    keys.append(kv[1].strip())
        for k in keys:
            for lang, lab in labels.items():
                if k not in lab:
                    r.err("html", f"line {line}: label {k!r} missing in i18n/{lang}.json")
        if "data-orn" in a and not (orn_src / a["data-orn"]).is_file():
            r.err("html", f"line {line}: ornament {a['data-orn']!r} not in {orn_src.relative_to(tpl)}")
        if tag == "img" and a.get("src", "").startswith("assets/") and not (tpl / a["src"]).is_file():
            r.err("html", f"line {line}: img {a['src']!r} missing")
    for sid in ids:
        n = found.get(sid, 0)
        if n != 1:
            r.err("html", f"section {sid!r}: expected 1 [data-section], found {n}")
    for sid in found:
        if sid not in ids:
            r.err("html", f"[data-section={sid!r}] not declared in manifest")
    for text, line in p.text:
        if not re.fullmatch(r"[\s&·•|/\-–—:,.0-9]*", text):
            r.err("html", f"line {line}: literal copy {text[:40]!r} — use data-l / data-t")
    low = html.lower()
    for lib in BANNED_LIBS:
        if lib in low:
            r.err("html", f"banned library/font reference {lib!r}")
    for src in p.scripts:
        if src.startswith("http") and not src.startswith(SCRIPT_HOSTS):
            r.err("html", f"script host not allow-listed: {src}")
    for href in p.styles:
        if href.startswith("http") and not href.startswith(STYLE_HOSTS):
            r.err("html", f"stylesheet host not allow-listed: {href}")
    return p


def check_label_keys(name: str, src: str, labels: dict[str, dict], r: Report, only_in_t: bool = False) -> None:
    """t('key') calls plus any 'ns.key' literal whose namespace is a label namespace (ternaries, data-copy-msg, …).
    only_in_t: look for literals only inside t(...) arguments (core.js also holds data paths like 'gift.accounts')."""
    for k in set(re.findall(r"\bt\('([A-Za-z0-9_.]+)'\s*[,)]", src)):
        for lang, lab in labels.items():
            if k not in lab:
                r.err("js", f"{name}: t({k!r}) missing in i18n/{lang}.json")
    namespaces = {k.split(".")[0] for lab in labels.values() for k in lab if "." in k}
    if only_in_t:
        src = "\n".join(re.findall(r"\bt\(([^()]*)\)", src))
    for k in set(re.findall(r"""['"]([a-z][A-Za-z]*\.[A-Za-z0-9_.]*[A-Za-z0-9_])['"]""", src)):
        if k.split(".")[0] in namespaces:
            for lang, lab in labels.items():
                if k not in lab:
                    r.err("js", f"{name}: label literal {k!r} missing in i18n/{lang}.json")


def check_js(tpl: Path, m: dict, labels: dict[str, dict], r: Report) -> None:
    ids = {s["id"] if isinstance(s, dict) else s for s in m.get("sections", [])}
    check_label_keys("_core/runtime/core.js", (CORE / "runtime" / "core.js").read_text(encoding="utf-8"), labels, r, only_in_t=True)
    for js in m.get("scripts", []):
        src = (tpl / js).read_text(encoding="utf-8")
        check_label_keys(js, src, labels, r)
        for dyn in set(re.findall(r"\bt\('([A-Za-z0-9_.]+\.)'\s*\+", src)):
            r.warn("js", f"{js}: dynamic label prefix {dyn!r}… not statically checked")
        for sid in set(re.findall(r"W\.section\('([A-Za-z]+)'", src)):
            if sid not in ids:
                r.err("js", f"{js}: W.section({sid!r}) not in manifest")
        for lib in BANNED_LIBS:
            if lib in src.lower():
                r.err("js", f"{js}: banned library reference {lib!r}")


def check_css(tpl: Path, m: dict, r: Report) -> None:
    for css in m.get("styles", []):
        text = (tpl / css).read_text(encoding="utf-8")
        body = re.sub(r"/\*.*?\*/", "", text, flags=re.S)
        root = re.search(r":root\s*\{(.*?)\}", body, re.S)
        tokens = set(re.findall(r"(--c-[a-z0-9-]+)\s*:", root.group(1))) if root else set()
        outside = body.replace(root.group(0), "") if root else body
        for lit in COLOR_LITERAL.findall(outside):
            if not NEUTRAL_COLORS.match(lit.strip()):
                r.err("css", f"{css}: color literal {lit} outside :root — use a --c-* token")
        if not tokens:
            r.err("css", f"{css}: no --c-* tokens in :root")
        for v in m.get("variants", []):
            vp = tpl / v.get("css", "")
            if not vp.is_file():
                continue
            vt = vp.read_text(encoding="utf-8")
            if f'[data-variant="{v["id"]}"]' not in vt:
                r.err("css", f"{v['css']}: selector [data-variant=\"{v['id']}\"] missing")
            missing = tokens - set(re.findall(r"(--c-[a-z0-9-]+)\s*:", vt))
            if missing:
                r.err("css", f"{v['css']}: tokens not overridden: {', '.join(sorted(missing))}")


def check_ornaments(tpl: Path, m: dict, r: Report) -> None:
    orn = m.get("ornaments") or {}
    src = tpl / orn.get("source", "assets/svg/")
    for v in m.get("variants", []):
        rules = (v.get("ornaments") or {}).get("rules")
        if not rules:
            continue
        out = tpl / orn.get("generated", "assets/ornaments/{variant}/").format(variant=v["id"])
        for svg in src.glob("*.svg"):
            dst = out / svg.name
            if not dst.is_file():
                r.err("ornaments", f"{v['id']}: {dst.relative_to(tpl)} missing — run tools/recolor_svg.py")
            elif dst.read_text(encoding="utf-8") != recolor_svg(svg.read_text(encoding="utf-8"), rules):
                r.err("ornaments", f"{v['id']}: {svg.name} stale — run tools/recolor_svg.py")


def check_legal(tpl: Path, m: dict, r: Report) -> None:
    files = [m.get("entry", "index.html")] + m.get("styles", []) + m.get("scripts", [])
    for f in files:
        head = (tpl / f).read_text(encoding="utf-8")[:800]
        if "(c)" not in head.lower() or "all rights reserved" not in head.lower():
            r.err("legal", f"{f}: copyright header missing")


def validate(tpl: Path) -> Report:
    r = Report()
    mp = tpl / "manifest.json"
    if not mp.is_file():
        r.err("manifest", f"{mp} not found")
        return r
    m = load(mp)
    registry = load(CORE / "sections.json")
    vm = load(CORE / "view-model.json")
    labels = {lang: load(CORE / "i18n" / f"{lang}.json") for lang in m.get("languages", ["id", "en"])}
    check_manifest(tpl, m, registry, r)
    if r.errors:
        return r
    check_html(tpl, m, vm, labels, r)
    check_js(tpl, m, labels, r)
    check_css(tpl, m, r)
    check_ornaments(tpl, m, r)
    check_legal(tpl, m, r)
    return r


def main() -> int:
    sys.stdout.reconfigure(encoding="utf-8")
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("template", type=Path)
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()
    r = validate(args.template)
    if args.json:
        print(json.dumps({"ok": not r.errors, "errors": r.errors, "warnings": r.warnings}, ensure_ascii=False, indent=2))
    else:
        for e in r.errors:
            print("ERROR  ", e)
        for w in r.warnings:
            print("WARN   ", w)
        print(f"\n{args.template}: {'OK' if not r.errors else 'FAILED'} — {len(r.errors)} error(s), {len(r.warnings)} warning(s)")
    return 1 if r.errors else 0


if __name__ == "__main__":
    sys.exit(main())
