"""Turn a tools/capture_demo.mjs meta.json into a compact markdown digest (the deterministic half of a design analysis).

Usage:
    python tools/demo_digest.py .tmp/demos/<name>            # prints markdown
    python tools/demo_digest.py .tmp/demos/<name> --out f.md # writes it
    python tools/demo_digest.py .tmp/demos/<name> --inject knowledge/competitors/<site>/templates/<name>.md
                                                             # replaces the "## Data teknis" block of an analysis (or appends it)

The digest records structure, typography, colour tokens, motion profile and asset inventory. It never embeds
asset URLs for reuse — ornaments are summarised by count/format/size only.
"""
import argparse
import json
import re
import sys
from collections import Counter
from pathlib import Path

ICON_FONTS = re.compile(r"font awesome|phosphor|videojs|fontello|icomoon|slick", re.I)
GENERIC_KF = {"spin", "lds-dual-ring", "lg-right-end", "lg-left-end", "modal-video", "modal-video-inner", "lds-facebook",
              "lds-spinner", "dropdown-in", "loader", "bell_is_ringing", "pulse-beat", "pulse-beat-green", "tiny-rotate",
              "shake", "fromtop", "play-music", "slideDown", "CSSTransition", "CSSAnimation"}
USER_MEDIA = re.compile(r"^ar:|/media/public/|thumb-|/gif/", re.I)  # couple photos / uploads served via image proxy


def fmt_top(pairs, n=4):
    return ", ".join(f"{k} ({v})" for k, v in list(pairs)[:n]) if pairs else "–"


def rgb_hex(c):
    m = re.match(r"rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)", c or "")
    if not m:
        return c
    h = "#%02x%02x%02x" % tuple(int(x) for x in m.groups()[:3])
    return h + (f" @{m.group(4)}" if m.group(4) and m.group(4) != "1" else "")


def digest(meta):
    f = meta["full"]
    L = []
    doc = f["doc"]
    screens = doc["height"] / meta["viewport"]["height"]
    op = meta.get("open", {})
    L.append("## Data teknis (otomatis, `tools/demo_digest.py`)")
    L.append("")
    L.append(f"- Viewport capture: {meta['viewport']['width']}×{meta['viewport']['height']} (phone). Tinggi halaman ≈ {doc['height']:,} px ≈ {screens:.1f} layar; {meta.get('frames', '?')} frame.")
    L.append(f"- Bahasa demo: `{doc.get('lang') or '?'}`. Scroller: `{meta.get('scroller', {}).get('el', '?')}`.")
    L.append(f"- Tombol buka: {'`' + op.get('text', '') + '`' if op.get('found') else 'tidak ketemu'}" + (" (butuh DOM click)" if op.get("fallbackClick") else ""))
    L.append("")

    L.append("### Urutan section")
    L.append("")
    L.append("| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |")
    L.append("|---|---|---|---|---|---|")
    for i, s in enumerate(f["sections"], 1):
        heads = " / ".join(h for h in s["headings"][:3])[:70].replace("|", "¦")
        aos = fmt_top(sorted(s["aos"].items(), key=lambda kv: -kv[1]), 3)
        L.append(f"| {i} | `{s['key']}` | {s['h']} | {heads or '–'} | {aos} | {s['imgs']} |")
    L.append("")

    fonts = f["fonts"]
    faces = [x for x in fonts["loaded"] if not ICON_FONTS.search(x)]
    L.append("### Tipografi")
    L.append("")
    L.append(f"- Heading: {fmt_top(fonts['headings'])}")
    L.append(f"- Body: {fmt_top(fonts['body'])}")
    L.append(f"- Tombol: {fmt_top(fonts['buttons'], 3)}")
    L.append(f"- Font face termuat: {', '.join(faces) or '–'}")
    L.append("")

    v = f["colors"]["vars"]
    role = [k for k in v if re.match(r"--(background|text|button-(text|background))-(primary|secondary|tertiary)$", k)]
    L.append("### Warna")
    L.append("")
    if role:
        L.append("Token editor (primary/secondary/tertiary):")
        L.append("")
        L.append("| token | nilai |")
        L.append("|---|---|")
        for k in role:
            L.append(f"| `{k}` | `{v[k]}` |")
        L.append("")
    L.append(f"- Warna teks terbanyak: {', '.join(rgb_hex(c) + f' ({n})' for c, n in f['colors']['text'][:6])}")
    L.append(f"- Background terbanyak: {', '.join(rgb_hex(c) + f' ({n})' for c, n in f['colors']['backgrounds'][:6])}")
    L.append("")

    a = f["animation"]
    aos_total = sum(a["aos"].values())
    durs = sorted(int(k) for k in a["aosDuration"] if k.isdigit())
    custom_kf = [k for k in a["keyframes"] if k not in GENERIC_KF and not k.endswith("-effects")]
    running = {k: n for k, n in a["cssRunning"].items() if k not in GENERIC_KF}
    L.append("### Motion")
    L.append("")
    L.append(f"- AOS: {aos_total} elemen; efek teratas {fmt_top(sorted(a['aos'].items(), key=lambda kv: -kv[1]), 6)}; durasi {durs[0] if durs else '–'}–{durs[-1] if durs else '–'} ms (terbanyak {fmt_top(sorted(a['aosDuration'].items(), key=lambda kv: -kv[1]), 3)}).")
    L.append(f"- CSS keyframes khas template: {', '.join(custom_kf) or '–'}; sedang jalan: {', '.join(f'{k}×{n}' for k, n in running.items()) or '–'}.")
    if a["canvases"]:
        L.append(f"- Canvas (partikel/efek): {len(a['canvases'])} — " + ", ".join(f"{c['w']}×{c['h']} di `{c['parent'] or c['id'] or '?'}`" for c in a["canvases"][:4]))
    libs = [k for k, on in f["libs"].items() if on]
    L.append(f"- Library aktif: {', '.join(libs)}.")
    L.append("")

    m = f["media"]
    imgs = m["images"]
    user = [i for i in imgs if USER_MEDIA.search(i["src"])]
    tpl = {i["src"]: i for i in imgs if not USER_MEDIA.search(i["src"])}
    tpl_bg = [b for b in m["backgrounds"] if not USER_MEDIA.search(b)]
    big = sorted(tpl.values(), key=lambda i: -(i["w"] * i["h"]))[:8]
    ext = Counter(Path(s.split("?")[0]).suffix.lower().lstrip(".") or "?" for s in list(tpl) + tpl_bg)
    L.append("### Aset")
    L.append("")
    L.append(f"- Ornamen/ilustrasi template unik: {len(tpl)} img + {len(tpl_bg)} background (format: {', '.join(f'{k} {n}' for k, n in ext.most_common())}).")
    if big:
        L.append("- Ornamen terbesar (px): " + ", ".join(f"{i['w']}×{i['h']}" for i in big) + ".")
    L.append(f"- Foto/upload pengguna tampil: {len(user)} (termasuk GIF: {sum(1 for i in user if '/gif/' in i['src'])}).")
    yt = [x for x in m["iframes"] if "embed" in x]
    L.append(f"- Video embed: {len(yt)}; `<video>`: {len(m['video'])}; audio tag: {len(m['audio'])}.")
    L.append(f"- Ikon: Font Awesome {'ya' if f['icons']['fontAwesome'] else 'tidak'}, Phosphor {'ya' if f['icons']['phosphor'] else 'tidak'}, inline SVG {f['icons']['svgInline']}.")
    L.append("")

    if meta.get("logs"):
        L.append(f"- Error JS di halaman demo: {len(meta['logs'])} (contoh: `{meta['logs'][0][:100]}`).")
    return "\n".join(L) + "\n"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("demo_dir")
    ap.add_argument("--out")
    ap.add_argument("--inject", help="analysis .md whose '## Data teknis' block is replaced/appended")
    a = ap.parse_args()
    p = Path(a.demo_dir) / "meta.json"
    if not p.exists():
        sys.exit(f"no meta.json in {a.demo_dir}")
    md = digest(json.loads(p.read_text(encoding="utf-8")))
    if a.inject:
        t = Path(a.inject)
        body = t.read_text(encoding="utf-8")
        i = body.find("## Data teknis")
        body = (body[:i] if i > -1 else body.rstrip() + "\n\n") + md
        t.write_text(body, encoding="utf-8")
        print(f"digest injected into {t}")
    elif a.out:
        Path(a.out).write_text(md, encoding="utf-8")
    else:
        sys.stdout.reconfigure(encoding="utf-8")
        print(md)


if __name__ == "__main__":
    main()
