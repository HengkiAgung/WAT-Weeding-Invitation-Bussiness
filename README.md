# Undangan Digital — Wedding Invitation Business

Platform jualan undangan digital pernikahan untuk pasar Indonesia. Pengguna memilih template, mengisi data (nama, tanggal, lokasi, dll), membayar, lalu membagikan link undangan per tamu.

Dibangun di atas **WAT framework** (Workflows, Agents, Tools): AI mengatur alur kerja, kode deterministik menjalankan eksekusi. Detail aturan kerja ada di [CLAUDE.md](CLAUDE.md).

## Status

Proyek dikerjakan per sesi (S1–S11). Checkpoint dan keputusan tercatat di **[PROGRESS.md](PROGRESS.md)** — baca file ini dulu sebelum mulai kerja.

| Sesi | Fokus | Status |
|---|---|---|
| S1 | Knowledge base template + graphify | ✅ |
| S2 | Riset pasar undangan digital Indonesia | ✅ |
| S3 | Kerangka template bagian 1: core schema/runtime + Eloise sebagai Template Package | ✅ |
| S4 | Template ke-2 dari spesifikasi, build/obfuscate, SOP template baru | ✅ |
| S4c | Riset pesaing katsudoto.id: flow produk + analisis 59 desain | ✅ |
| S4d | Eloise didesain ulang jadi Rimbun (orisinal), SOP riset pesaing | ✅ |
| S5 | Scaffold aplikasi Next.js + Prisma + Auth + katalog | ⏳ |
| S6–S9 | Aplikasi: editor, render publik, Midtrans, tamu massal Excel | — |
| S10–S11 | Keamanan, admin, deploy | — |

## Konsep produk

- **Model hybrid**: template kurasi (layout & komponen tetap), pengguna mengisi data, memilih varian warna/font, dan menyalakan/mematikan section.
- **Schema data bersama**: semua template memakai struktur data yang sama, jadi pengguna bisa ganti template tanpa isi ulang.
- **Quick buy**: beli dengan form minimal untuk pengguna yang tidak mau repot.
- **Tamu massal**: upload Excel daftar tamu → link unik per tamu + teks WhatsApp siap kirim.
- **Proteksi**: copyright di template, render lock per domain, aset diakses lewat URL bertoken sementara.

Stack yang direncanakan: Next.js (App Router) + Prisma + PostgreSQL, Midtrans, Cloudflare R2, deploy di Vercel.

## Struktur folder

```
knowledge/          # Hasil analisis template & riset pasar (sumber pengetahuan)
graphify-out/       # Knowledge graph proyek (graph.json, GRAPH_REPORT.md, graph.html)
workflows/          # SOP markdown untuk tiap jenis pekerjaan
tools/              # Script Python/Node deterministik
templates/          # Template Package — _core/ (schema, runtime, label) + satu folder per template
app/                # (S5) Aplikasi Next.js
PROGRESS.md         # Checkpoint antar sesi
.env                # Secrets (gitignored) — salin dari .env.example
```

`wedding-template/` (referensi awal) adalah repo git terpisah dan di-gitignore. Referensi itu ternyata turunan desain pesaing, jadi template-nya didesain ulang total menjadi `templates/rimbun/` (lihat PROGRESS S4d).

## Setup

```
python -m venv .venv
.venv\Scripts\activate          # Windows
pip install -r requirements.txt
npm install                      # zod, esbuild, javascript-obfuscator (Node >= 22)
copy .env.example .env           # lalu isi nilainya
```

Preview template dengan data contoh:

```
python tools/validate_template.py templates/rimbun
python tools/render_template.py templates/rimbun --variant terakota --serve 8080
python tools/render_template.py templates/sekar --variant perak --serve 8080
```

Template tersedia: **Rimbun** (kebun tropis: monstera, kamboja, anyaman rotan), **Sekar** (Jawa keraton, pintu gebyok + gunungan), dan **Raudhah** (Islami minimalis, bisa tanpa foto).

Build produksi (minify + obfuscate + header copyright → `dist/templates/`, gitignored):

```
npm run build:templates
python tools/render_template.py dist/templates/sekar --serve 8080    # cek hasil build
```

Riset demo undangan pesaing (screenshot hanya ke `.tmp/`):

```
node tools/capture_demo.mjs <url-demo> .tmp/demos/<nama>        # cover, frame scroll, contact sheet, meta.json
python tools/demo_digest.py .tmp/demos/<nama>                   # ringkasan teknis markdown
```

Knowledge graph memakai [graphify](https://github.com/safishamsi/graphify):

```
pip install graphifyy
graphify install --platform claude
graphify explain "window.WEDDING config object (js/config.js)"   # contoh query
```

Buka `graphify-out/graph.html` di browser untuk melihat graph secara visual.

## Dokumen penting

- [PROGRESS.md](PROGRESS.md) — roadmap & checkpoint
- [knowledge/template-anatomy.md](knowledge/template-anatomy.md) — anatomi referensi awal "Eloise" (historis; template-nya kini Rimbun)
- [knowledge/market/](knowledge/market/) — riset pasar: harga kompetitor, katalog section & tema, matriks fitur
- [knowledge/competitors/katsudoto/](knowledge/competitors/katsudoto/README.md) — flow & fitur katsudoto, plus analisis desain 59 template (`templates/INDEX.md`); riset ide, bukan bahan jiplak
- [templates/_core/README.md](templates/_core/README.md) — kontrak template: schema data, binding HTML, runtime, API RSVP/ucapan
- [workflows/analyze_template.md](workflows/analyze_template.md) — SOP analisis template
- [workflows/create_new_template.md](workflows/create_new_template.md) — SOP membuat template baru (scaffold → validasi → QA visual → build)
- [graphify-out/GRAPH_REPORT.md](graphify-out/GRAPH_REPORT.md) — ringkasan knowledge graph
