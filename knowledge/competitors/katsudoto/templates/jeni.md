---
source_url: https://nafisajessen.katsudoto.id/184339
competitor: katsudoto
template: jeni
katsudoto_id: 25
tags: [minimalist, nature]
released: 2023-06-14
used_count: 4
editable_colors: false
lite_bundle: true
captured_at: 2026-09-25
---
# Jeni (katsudoto) — analisis desain

## Ringkasan
**Minimalis modern "olive & stone"**: blok **olive gelap** (`#6b6b50`-an), **abu batu hangat** (`#d6d3cb`-an), dan putih gading. Tipografi **serif humanis tipis** (mirip "Gilda/Newsreader") untuk heading + **sans geometris** (Poppins) untuk body. **Tombol kotak bergaris tipis** tanpa radius. Label vertikal ("GROOM"/"BRIDE") di samping foto. Tanpa ornamen. Sederhana dan profesional. Warna tidak bisa diubah (non-editable).

## Layout & alur per section
1. **Cover pembuka**: foto fade putih di bawah, nama serif italic, "Hai {tamu}", tombol kotak olive.
2. **Cover**: foto di **bingkai garis tipis**, "Wedding Invitation", nama, hashtag.
3. **Ayat** di blok olive rata kanan. "The Wedding Of" + subjudul.
4. **Mempelai**: foto + **label vertikal "GROOM"/"BRIDE"** + garis, nama serif, ortu, tombol kotak "INSTAGRAM".
5. **Love story** (carousel foto + garis panjang di samping judul), **Save the date**: blok olive, **tanggal serif besar dengan superscript** ("August 03rd, 2024"), kotak countdown putih.
6. **Galeri** (carousel + panah), **Acara**: "It's The Day" + tanggal **"08 . 03 . 24"**, kartu bergaris, tombol kotak outline.
7. **Dresscode** (dot), **Rundown**, **RSVP**: blok olive dengan **E-Invitation QR** + "Download E-Invitation".
8. **Live streaming**, **Filter IG**, **Gift** (input kotak abu), **Ucapan** (kotak abu), **Terima kasih**, **Penutup** (blok olive + garis vertikal + nama).

## Temuan
- Daftar ucapan demo juga berisi **spam link** (`<a href=…>`, `[url=…]`) yang tampil sebagai teks. Konfirmasi kebutuhan **moderasi + filter link** di ucapan (lihat juga cassandra.md).

## Aset
- Nol ilustrasi. Garis vertikal & horizontal sebagai aksen.

## Tipografi & warna
- Heading: serif humanis tipis. Body: Poppins.
- Palet: olive `#6b6b50`-an, abu batu `#d6d3cb`-an, gading `#efece6`-an.

## Arah orisinal untuk kita
- Template "clean" tanpa aset = modal kecil, bisa dijual di tier murah. **Label vertikal** & **tanggal titik** (08 . 03 . 24) adalah detail tipografi murah tapi berkelas.
- Validasi: **filter otomatis URL/HTML di ucapan** (strip link, tolak `<a`, `[url`), selain rate limit.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 13,254 px ≈ 14.5 layar; 17 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Jessen & Nafissa | fade-down (3), zoom-in-up (1) | 1 |
| 2 | `quote` | 310 | – | fade-up (1) | 0 |
| 3 | `couple` | 1478 | The Wedding Of / David Jessen / Nafissa Quensha | fade-up (7), fade-left (4), zoom-in (3) | 2 |
| 4 | `love_story` | 943 | Our Story / We're Forever / First Date | fade-up (21), zoom-in-left (1) | 5 |
| 5 | `save_the_date` | 532 | Save The Date / 0 | fade-up (6), zoom-out (1), zoom-in (1) | 0 |
| 6 | `gallery_photo` | 386 | Potraits of Us | zoom-in (13), fade-up (2) | 13 |
| 7 | `event` | 1947 | It's The Day / Saturday, / 08 . 03 . 24 | fade-up (16), zoom-in (1), fade-down (1) | 2 |
| 8 | `rundown` | 474 | Rundown / Resepsi | – | 0 |
| 9 | `rsvp` | 912 | RSVP / Will Attend | fade-up (4), zoom-in (1) | 1 |
| 10 | `live_streaming` | 592 | Live Streaming | fade-up (2), zoom-in (1) | 1 |
| 11 | `filter_instagram` | 1018 | Wedding Filter | fade-up (5), fade-down (1) | 1 |
| 12 | `wedding_gift` | 1098 | Wedding Gift / BANK BCA / BANK BCA (014) | zoom-in (1), fade-up (1) | 2 |
| 13 | `wedding_wish` | 1471 | Wedding Wish / Katsudoto / Darwin | fade-up (11) | 0 |
| 14 | `greet_thanks` | 304 | Thank You | – | 0 |
| 15 | `footnote` | 545 | Jessen & Nafissa | fade-up (4), fade-down (1) | 0 |

### Tipografi

- Heading: Newsreader (25), Poppins (20), Roboto (8)
- Body: Poppins (58), Montserrat (2), Newsreader (1), Roboto (1)
- Tombol: Poppins (7)
- Font face termuat: Roboto 300, Roboto 400, Roboto 500, Montserrat 500, Butler Regular 400, Montserrat 100 900, Newsreader 300, Poppins 400

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

- Warna teks terbanyak: #000000 (59), #6a6853 (35), #ffffff (14), #000000 @0.5 (8), #edebe7 (1)
- Background terbanyak: #6a6853 (19), #ffffff (14), #d6d3cb (11), #edebe7 (7), #010101 (2), #d5e1de (2)

### Motion

- AOS: 120 elemen; efek teratas fade-up (82), zoom-in (21), fade-down (6), fade-left (4), zoom-out (3), fade-right (2); durasi 400–2500 ms (terbanyak 1200 (65), 1000 (49), 1500 (5)).
- CSS keyframes khas template: instagramAnimation; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 6 img + 1 background (format: png 4, jpeg 1, jpg 1, ? 1).
- Ornamen terbesar (px): 840×1189, 640×480, 377×274, 96×96, 96×96, 0×0.
- Foto/upload pengguna tampil: 23 (termasuk GIF: 0).
- Video embed: 0; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 4.

