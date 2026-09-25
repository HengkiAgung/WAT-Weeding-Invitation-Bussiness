---
source_url: https://fannygetschindy.katsudoto.id
competitor: katsudoto
template: chindy
katsudoto_id: 6
tags: [fairytale]
released: 2021-12-14
used_count: 6
editable_colors: true
lite_bundle: true
captured_at: 2026-09-25
---
# Chindy (katsudoto) — analisis desain

## Ringkasan
**Marmer krem + daun emas (generasi awal 2021)**. Kemungkinan undangan pendiri katsudoto sendiri: love story menyebut membangun "usaha Undangan Digital". Latar **marmer putih-krem**, **ilustrasi daun/bunga kering sepia-emas** (magnolia, pampas), panel **taupe/khaki** (`#c6b196`-an). Heading **script signature tipis cokelat** (mirip "Allura/Mrs Saint Delafield"). Cover: abu datar dengan **"We get Married!"** + **daun berguguran (animasi partikel)** + tombol "Let's Go". Ada section **Protokol Kesehatan** dengan **ilustrasi karakter** (menjaga jarak 2 m).

## Layout & alur per section
1. **Cover pembuka**: abu polos + daun/bunga kering berjatuhan (tsParticles) + "We get Married!" script putih + tombol putih "Let's Go".
2. **Cover**: marmer, "The Wedding of", nama script cokelat, tanggal "27 . 06 . 2021", daun emas di sudut.
3. **Mempelai**: foto dalam **oval kapsul**, nama script panjang, "Putri dari Bapak …".
4. **Love story "Our Journey"**: kartu putih bergantian (foto + judul script + teks santai bahasa Indonesia) di atas latar marmer peach.
5. **Save the date** (panel taupe + **kotak countdown kapsul putih**), **Galeri** (mosaik foto acara lamaran), **Video** ("We're Engaged!").
6. **Acara**: "Wedding Day" + "InsyaAllah akan dilaksanakan pada" + **tanggal dalam kapsul putih** ("Sunday June 2021 27th"), Akad/Resepsi.
7. **Gift** (panel taupe, form bahasa Indonesia "Lanjutkan"), **Protokol kesehatan** (carousel ilustrasi karakter), **Ucapan** (banyak ucapan asli), **Penutup** (quote + tanggal + nama).

## Aset
- Tekstur marmer, daun/bunga kering sepia, partikel daun jatuh, ilustrasi karakter protokol kesehatan.

## Tipografi & warna
- Heading: script signature tipis. Body: serif.
- Palet: marmer krem `#f7f1ea`-an, taupe `#c6b196`-an, cokelat `#8b5a2b`-an.

## Arah orisinal untuk kita
- **Efek daun jatuh** di cover sudah jadi fitur jual katsudoto ("Fitur Daun Jatuh" Rp30rb; efek Mawar/Sakura/Sparkle/Snow di editor). Implementasi kita: canvas ringan di core (`W.fx.falling({shape, density, speed})`) tanpa tsParticles (±100 kB). SVG sprite kecil + requestAnimationFrame, dan hormati `prefers-reduced-motion`.
- Protokol kesehatan sudah tidak relevan (pasca-pandemi). Jangan dijadikan section default; cukup "catatan/himbauan" umum.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 12,053 px ≈ 13.2 layar; 16 frame.
- Bahasa demo: `en`. Scroller: `window`.
- Tombol buka: `Let's Go` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `start` | 915 | – | fade-up (3), fade-down (2), zoom-in (1) | 0 |
| 2 | `guest` | 100 | – | zoom-in (1) | 0 |
| 3 | `couple` | 1287 | – | fade-up (10), zoom-in (3) | 2 |
| 4 | `story-outer` | 2826 | – | zoom-in (12), zoom-in-down (4), fade-up (1) | 4 |
| 5 | `save` | 514 | – | zoom-in (7), fade-up (3) | 0 |
| 6 | `gallery` | 1316 | – | zoom-in (11), fade-up (2) | 11 |
| 7 | `video-gallery` | 348 | We're Engaged ! | fade-up (2), zoom-out-up (1), zoom-in (1) | 1 |
| 8 | `event-outer` | 1198 | Wedding Day / Sunday June 2021 27th Tesssssssssss / Akad Nikah 08:00 a | fade-up (12), fade-down (3), fade-left (2) | 2 |
| 9 | `mid-wrapper` | 0 | – | – | 0 |
| 10 | `gift` | 1127 | Wedding Gift Your blessing and coming to our wedding are eno / Wedding | fade-up (1), zoom-in-down (1), zoom-in (1) | 1 |
| 11 | `protocol` | 727 | Protokol Kesehatan | fade-down (1), fade-up (1), zoom-in (1) | 12 |
| 12 | `comment-outer` | 1228 | Wedding wish | fade-up (8), zoom-in-up (1) | 0 |
| 13 | `foot-wrapper` | 427 | – | fade-up (3), zoom-in (2) | 0 |
| 14 | `footer` | 40 | – | – | 0 |

### Tipografi

- Heading: Roboto (5), Mr De Haviland (4), Crimson Text (3)
- Body: Crimson Text (35)
- Tombol: Crimson Text (3)
- Font face termuat: Roboto 400 italic, Roboto 400, Roboto 700, Crimson Text 400, Crimson Text 600, Crimson Text 700, Mr De Haviland 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#fff` |
| `--background-secondary` | `#fff` |
| `--background-tertiary` | `#fff` |
| `--text-primary` | `#000` |
| `--text-secondary` | `#000` |
| `--text-tertiary` | `#000` |
| `--button-text-primary` | `#fff` |
| `--button-background-primary` | `#000` |
| `--button-text-secondary` | `#fff` |
| `--button-background-secondary` | `#000` |

- Warna teks terbanyak: #464646 (50), #906020 (33), #ffffff (7), #000000 (1)
- Background terbanyak: #d6c6af (16), #ffffff (15), #fff7f0 (6), #baa485 (4), #906020 (2), #fafafa (1)

### Motion

- AOS: 104 elemen; efek teratas fade-up (46), zoom-in (41), fade-down (6), zoom-in-down (5), fade-left (2), zoom-out-up (1); durasi 400–1500 ms (terbanyak 1000 (96), 1200 (6), 400 (1)).
- CSS keyframes khas template: –; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 25 img + 11 background (format: png 16, jpeg 15, jpg 4, ? 1).
- Ornamen terbesar (px): 1176×2098, 1136×2072, 963×2087, 884×2094, 542×2092, 963×1040, 950×818, 800×600.
- Foto/upload pengguna tampil: 1 (termasuk GIF: 0).
- Video embed: 0; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor tidak, inline SVG 1.

