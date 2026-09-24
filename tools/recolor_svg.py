"""Generate recolored ornament SVG sets for a template's color variants.

Ornament SVGs bake colors in, so a CSS token change cannot reach them when they
are used as <img>. For every variant in manifest.json with `ornaments.rules`,
this tool rewrites each hex color whose hue falls in a rule's range and writes
the result to `assets/ornaments/<variant>/`. core.js points `img[data-orn]` at
that folder via THEME.ornamentBase.

Rule: {"hue": [from, to], "to": targetHue, "sat": multiplier, "light": delta}
  - hue in degrees 0-360; colors with saturation < 0.06 (greys/whites) are left alone.

Usage:
    python tools/recolor_svg.py templates/eloise            # all variants
    python tools/recolor_svg.py templates/eloise --variant sage
"""
from __future__ import annotations

import argparse
import colorsys
import json
import re
import shutil
import sys
from pathlib import Path

HEX = re.compile(r"#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b")


def _expand(h: str) -> str:
    return "".join(c * 2 for c in h) if len(h) == 3 else h


def recolor_hex(hex_color: str, rules: list[dict]) -> str:
    h6 = _expand(hex_color.lstrip("#"))
    r, g, b = (int(h6[i:i + 2], 16) / 255 for i in (0, 2, 4))
    hue, light, sat = colorsys.rgb_to_hls(r, g, b)
    deg = hue * 360
    if sat < 0.06:
        return hex_color
    for rule in rules:
        lo, hi = rule["hue"]
        if lo <= deg <= hi:
            new_h = (rule["to"] % 360) / 360
            new_s = min(1.0, max(0.0, sat * rule.get("sat", 1.0)))
            new_l = min(1.0, max(0.0, light + rule.get("light", 0.0)))
            nr, ng, nb = colorsys.hls_to_rgb(new_h, new_l, new_s)
            return "#" + "".join(f"{round(c * 255):02x}" for c in (nr, ng, nb))
    return hex_color


def recolor_svg(text: str, rules: list[dict]) -> str:
    return HEX.sub(lambda m: recolor_hex(m.group(0), rules), text)


def run(template_dir: Path, only: str | None = None) -> list[Path]:
    manifest = json.loads((template_dir / "manifest.json").read_text(encoding="utf-8"))
    orn = manifest.get("ornaments") or {}
    src = template_dir / orn.get("source", "assets/svg/")
    pattern = orn.get("generated", "assets/ornaments/{variant}/")
    written: list[Path] = []
    for v in manifest.get("variants", []):
        if only and v["id"] != only:
            continue
        rules = (v.get("ornaments") or {}).get("rules")
        if not rules:
            continue
        out = template_dir / pattern.format(variant=v["id"])
        if out.exists():
            shutil.rmtree(out)
        out.mkdir(parents=True)
        for svg in sorted(src.glob("*.svg")):
            dst = out / svg.name
            dst.write_text(recolor_svg(svg.read_text(encoding="utf-8"), rules), encoding="utf-8")
            written.append(dst)
        print(f"{v['id']}: {len(list(out.glob('*.svg')))} svg -> {out.relative_to(template_dir)}")
    return written


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("template", type=Path, help="template package dir, e.g. templates/eloise")
    ap.add_argument("--variant", help="only this variant id")
    args = ap.parse_args()
    if not (args.template / "manifest.json").exists():
        print(f"error: {args.template}/manifest.json not found", file=sys.stderr)
        return 2
    run(args.template, args.variant)
    return 0


if __name__ == "__main__":
    sys.exit(main())
