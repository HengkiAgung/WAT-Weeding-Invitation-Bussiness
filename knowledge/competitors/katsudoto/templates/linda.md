---
source_url: https://lindabagus.katsudoto.id/
competitor: katsudoto
template: linda
katsudoto_id: 17
tags: [minimalist]
released: 2022-10-14
used_count: 3
editable_colors: false
lite_bundle: true
captured_at: 2026-09-25
---
# Linda (katsudoto) — analisis desain

## Ringkasan
**Hijau army & krem "militer elegan"**. Ini desain custom untuk **pasangan perwira TNI (pilot helikopter)** yang dijadikan template: **hijau hutan tua** (`#233d1f`-an), **krem** (`#f5f1e3`-an), aksen **peach** (`#e8c3a4`-an) untuk tombol. Heading **script tulisan tangan elegan** (mirip "Parisienne"). Foto dalam **arch** diapit **garis vertikal gradasi emas**. Menampilkan **gelar lengkap** ("Lettu Cpn Raden … S.Tr.Han", "S.E., M.Acc."), ortu "(Late)" = almarhum. Ada kaligrafi Arab (QS Yasin 82) di penutup.

## Layout & alur per section
1. **Cover pembuka**: foto full (PDH TNI + kebaya), nama script putih, "Dear Mr/Mrs/Ms", tombol putih.
2. **Cover**: foto + fade krem, "The Wedding Of", nama script, hashtag.
3. **Pembukaan & Mempelai**: foto dalam **arch** + **garis gradasi emas vertikal di kedua sisi**, nama lengkap dengan pangkat & gelar (script), ortu dengan "(Late)", IG.
4. **Love story "the story start from…"**: kartu hijau rounded berisi **grid foto 3×2**, lalu **carousel kartu tinggi** dengan caption ("Helicopter Pilot's Only", "Fly To The Moon").
5. **Save the date** (angka tipis), **Acara**: "It's The Day" + tanggal caps + ikon garis; tombol hijau.
6. **Rundown** (kartu krem tua), **Live streaming**, **Filter IG** (foto + bingkai), **Gift**: rekening + **kartu QR/logo emas**; form; **Ucapan** (latar hijau, "Load More Comment" peach).
7. **Penutup**: kaligrafi QS Yasin 82 + terjemahan; foto + nama; "Powered by" di pita peach.

## Aset
- Minim: garis gradasi emas, arch. Foto yang dominan.

## Tipografi & warna
- Heading: script elegan. Body: serif/sans kecil.
- Palet: hijau hutan `#233d1f`-an, krem `#f5f1e3`-an, peach `#e8c3a4`-an.

## Arah orisinal untuk kita
- **Kebutuhan data nyata**: pangkat/gelar panjang, ortu almarhum/almarhumah ("(Alm.)/(Almh.)"), dan ortu yang hanya satu. Schema kita wajib mendukung:
  - `parents.fatherLate` dan `parents.motherLate` (boolean, label i18n "Alm."/"Almh." atau "(Late)");
  - nama dengan gelar tanpa memotong (uji panjang 60+ karakter).
- **Segmen pasangan TNI/Polri/ASN**: pedang pora, PDU. Tema **"Pedang Pora"** (hijau army/biru polisi + emas) adalah ceruk nyata di Indonesia.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 11,217 px ≈ 12.3 layar; 15 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Linda & Bagus | fade-up (3), zoom-in (1) | 3 |
| 2 | `couple` | 1478 | Lettu Cpn Raden Bagus Suryo Gumelar Julieanto S.Tr.Han / & / Linda Wid | fade-up (7), fade-right (4), fade-left (4) | 2 |
| 3 | `love_story` | 1033 | the Story start from... / Engagement Day / First Date | fade-up (37), zoom-in-left (1) | 9 |
| 4 | `save_the_date` | 419 | Save The Date / 0 | fade-up (6), zoom-in (1) | 0 |
| 5 | `gallery_photo` | 457 | – | zoom-out (1), fade-left (1) | 8 |
| 6 | `gallery_video` | 713 | Fly To The Moon / Helicopter Pilot's Only | zoom-in (2), fade-up (2), zoom-out (1) | 7 |
| 7 | `event` | 984 | It's The Day / Saturday, / May 27 th 2023 | fade-up (14), fade-right (1), zoom-in (1) | 0 |
| 8 | `rundown` | 539 | Rundown / Resepsi | – | 0 |
| 9 | `rsvp` | 0 | – | – | 0 |
| 10 | `live_streaming` | 464 | Live Streaming | zoom-in (1), fade-up (1) | 1 |
| 11 | `filter_instagram` | 873 | Wedding Filter | fade-up (4) | 1 |
| 12 | `wedding_gift` | 1202 | Wedding Gift / BANK BRI / BANK BRI (002) | fade-up (9), zoom-in (1) | 3 |
| 13 | `wedding_wish` | 1406 | Wedding Wish / Katsudoto / saa | fade-up (12) | 0 |
| 14 | `quote` | 190 | – | fade-up (1) | 0 |
| 15 | `footnote` | 500 | Linda & Bagus | fade-up (3), zoom-out (1) | 3 |

### Tipografi

- Heading: New York (28), Tangerine (15), Roboto (8)
- Body: New York (51), Roboto (11), Butler Regular (1)
- Tombol: Roboto (5), New York (4)
- Font face termuat: Roboto 400, Butler Regular 400, Montserrat 500, Tangerine 400, New York 400

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

- Warna teks terbanyak: #000000 (46), #243c1c (29), #ffffff (29), #ffffff @0.5 (6), #e1c0a5 (4), #000000 @0.75 (2)
- Background terbanyak: #ffffff (24), #f9f7ed (14), #243c1c (10), #e1c0a5 (3), #ddd5b4 (2), #000000 (2)

### Motion

- AOS: 127 elemen; efek teratas fade-up (101), zoom-in (10), zoom-out (5), fade-right (5), fade-left (5), zoom-in-left (1); durasi 400–2500 ms (terbanyak 1200 (78), 1000 (36), 1500 (9)).
- CSS keyframes khas template: –; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 5 img + 4 background (format: png 5, jpg 3, ? 1).
- Ornamen terbesar (px): 1280×720, 1280×720, 377×274, 120×90, 0×0.
- Foto/upload pengguna tampil: 33 (termasuk GIF: 0).
- Video embed: 2; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 3.

