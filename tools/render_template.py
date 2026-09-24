"""Assemble a template package + invitation data into a static preview page.

Reference implementation of the server render step (S7 ports this to Next.js):
  1. validate/normalize data with the Zod schema (node templates/_core/scripts/parse-data.ts)
  2. build window.INVITE = {data, theme, sections, guest, runtime, labels, presets, registry, template}
  3. fill the HTML markers: <!--@HEAD--> <!--@VARIANT--> <!--@INVITE--> <!--@CORE-->
Output goes to .tmp/preview/<template>/ (disposable) together with the template assets,
fixture assets and the core runtime, so it can be opened with any static server.

Usage:
    python tools/render_template.py templates/eloise
    python tools/render_template.py templates/eloise --data templates/_core/fixtures/sample-kristen-en.json --variant dusty-rose
    python tools/render_template.py templates/eloise --no-guest --sections '{"gallery": false}' --serve 8080
"""
from __future__ import annotations

import argparse
import functools
import http.server
import json
import shutil
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _shared import ROOT, tmp_path  # noqa: E402

CORE = ROOT / "templates" / "_core"
MARKERS = ("<!--@HEAD-->", "<!--@VARIANT-->", "<!--@INVITE-->", "<!--@CORE-->")


def load_json(p: Path) -> dict:
    return json.loads(p.read_text(encoding="utf-8"))


def parse_data(path: Path) -> dict:
    """Validate + apply schema defaults via Node/Zod. Raises SystemExit on invalid data."""
    cmd = ["node", "--experimental-strip-types", "--no-warnings", str(CORE / "scripts" / "parse-data.ts"), str(path)]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", cwd=ROOT)
    if res.returncode != 0:
        raise SystemExit(f"invalid invitation data in {path}:\n{res.stderr.strip()}")
    return json.loads(res.stdout)


def script_json(obj: dict) -> str:
    """JSON safe to embed inside <script> (no </script> breakout, no U+2028 issues)."""
    s = json.dumps(obj, ensure_ascii=False, separators=(",", ":"))
    return s.replace("<", "\\u003c").replace(">", "\\u003e").replace("&", "\\u0026").replace("\u2028", "\\u2028").replace("\u2029", "\\u2029")


def build_context(manifest: dict, data: dict, variant: dict, sections: dict, guest: dict | None, runtime: dict) -> dict:
    lang = data.get("lang", "id")
    labels = load_json(CORE / "i18n" / f"{lang}.json")
    orn = manifest.get("ornaments") or {}
    ornament_base = orn.get("generated", "assets/ornaments/{variant}/").format(variant=variant["id"]) if variant.get("ornaments") else orn.get("source", "assets/svg/")
    return {
        "data": data,
        "theme": {"variant": variant["id"], "ornamentBase": ornament_base, "tokens": {}},
        "sections": sections,
        "guest": guest,
        "runtime": runtime,
        "labels": labels,
        "presets": load_json(CORE / "presets" / "religion.json"),
        "registry": load_json(CORE / "sections.json"),
        "template": {"id": manifest["id"], "sections": manifest["sections"]},
    }


def render(template_dir: Path, data_path: Path, variant_id: str | None, sections: dict, guest: dict | None,
           runtime: dict, out_dir: Path) -> Path:
    manifest = load_json(template_dir / "manifest.json")
    variants = {v["id"]: v for v in manifest["variants"]}
    variant = variants.get(variant_id or manifest["defaultVariant"])
    if not variant:
        raise SystemExit(f"unknown variant {variant_id!r}; available: {', '.join(variants)}")
    data = parse_data(data_path)
    ctx = build_context(manifest, data, variant, sections, guest, runtime)

    html = (template_dir / manifest.get("entry", "index.html")).read_text(encoding="utf-8")
    missing = [m for m in MARKERS if m not in html]
    if missing:
        raise SystemExit(f"{template_dir}/index.html missing markers: {missing}")
    lang = data.get("lang", "id")
    html = html.replace('<html lang="id">', f'<html lang="{lang}" data-variant="{variant["id"]}">', 1)
    html = html.replace("<!--@HEAD-->", '<meta name="generator" content="render_template.py (preview)">')
    html = html.replace("<!--@VARIANT-->", f'<link rel="stylesheet" href="{variant["css"]}">')
    html = html.replace("<!--@INVITE-->", f"<script>window.INVITE={script_json(ctx)};</script>")
    html = html.replace("<!--@CORE-->", '<script src="_core/core.js"></script>')

    if out_dir.exists():
        shutil.rmtree(out_dir)
    shutil.copytree(template_dir, out_dir)
    shutil.copytree(CORE / "fixtures" / "assets", out_dir / "fixtures" / "assets")
    (out_dir / "_core").mkdir()
    shutil.copy2(CORE / "runtime" / "core.js", out_dir / "_core" / "core.js")
    out = out_dir / "index.html"
    out.write_text(html, encoding="utf-8")
    return out


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("template", type=Path)
    ap.add_argument("--data", type=Path, default=CORE / "fixtures" / "sample-islam-id.json")
    ap.add_argument("--context", type=Path, default=CORE / "fixtures" / "render-context.json", help="guest/runtime/sections defaults")
    ap.add_argument("--variant")
    ap.add_argument("--sections", default=None, help='JSON object merged over context sections, e.g. \'{"story": true}\'')
    ap.add_argument("--no-guest", action="store_true", help="render without a resolved guest")
    ap.add_argument("--mode", choices=["preview", "demo", "live"], help="override runtime.mode")
    ap.add_argument("--out", type=Path, help="output dir (default .tmp/preview/<template>)")
    ap.add_argument("--serve", type=int, metavar="PORT", help="serve the output after rendering")
    args = ap.parse_args()

    ctx = load_json(args.context)
    sections = dict(ctx.get("sections") or {})
    if args.sections:
        sections.update(json.loads(args.sections))
    runtime = dict(ctx.get("runtime") or {"mode": "preview", "endpoint": None})
    if args.mode:
        runtime["mode"] = args.mode
    guest = None if args.no_guest else ctx.get("guest")
    out_dir = args.out or tmp_path("preview") / args.template.name

    out = render(args.template, args.data, args.variant, sections, guest, runtime, out_dir)
    print(f"rendered {out}")
    if args.serve:
        handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(out_dir))
        print(f"serving http://localhost:{args.serve}/  (Ctrl+C to stop)")
        http.server.ThreadingHTTPServer(("127.0.0.1", args.serve), handler).serve_forever()
    return 0


if __name__ == "__main__":
    sys.exit(main())
