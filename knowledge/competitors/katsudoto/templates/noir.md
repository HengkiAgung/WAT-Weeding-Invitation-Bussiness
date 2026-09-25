---
source_url: https://oliviamichael.katsudoto.id/629425
competitor: katsudoto
template: noir
katsudoto_id: 29
tags: [minimalist]
released: 2023-10-14
used_count: 40
editable_colors: true
captured_at: 2026-09-25
---
# Noir (katsudoto) — analisis desain

## Ringkasan
**Hitam-putih sinematik**: seluruh halaman monokrom. Latar **foto B/W full-bleed** yang berganti per section (fixed/parallax), overlay gelap, dan **kartu kaca buram (glassmorphism)** abu transparan. Heading **serif small-caps** (mirip "Cinzel/Cormorant SC"), tombol **pil outline putih**. Tanpa ornamen, hanya foto + tipografi. Cocok untuk prewed fashion/editorial. Populer (40).

## Layout & alur per section
1. **Cover pembuka**: foto B/W full, "The Wedding Of", nama small-caps besar, hashtag, "Hai {tamu}", tombol pil transparan.
2. **Cover**: nama + tanggal + **countdown di cover** + tombol outline Add to Calendar.
3. **Ayat** di atas foto gelap. "The Wedding Of" di strip hitam solid.
4. **Mempelai**: foto close-up full-bleed, label "The Bride"/"The Groom" + garis, **kartu kaca buram pink-abu** berisi nama small-caps + ortu + IG.
5. **Galeri**: carousel foto di atas foto latar. **Video**.
6. **Acara**: blok hitam solid, tanggal dengan **angka besar + superscript** ("24th"), tombol outline View Maps.
7. **Rundown** di atas foto, timeline putih. **Reservation**: kartu kaca buram bergaris.
8. **Live streaming**, **Love story** (kartu kaca + slider), **Filter IG** (kartu kaca), **Gift** (dropdown + tombol Copy di samping + kartu kaca), **Ucapan** (kartu kaca), **Terima kasih**, **Penutup** (foto + nama + "Powered by" kecil).

## Aset
- Tidak ada ilustrasi. Hanya foto pengguna (banyak, dipakai sebagai latar tiap section) + ikon kecil.

## Animasi & interaksi
- **Latar foto fixed yang berganti per section** (parallax). AOS. Glassmorphism (`backdrop-filter: blur`).

## Tipografi & warna
- Heading: serif small-caps. Body: serif.
- Palet: hitam, putih, abu kaca transparan.

## Arah orisinal untuk kita
- **Template "Monokrom Foto"** tercepat untuk dibuat (tanpa aset) dan laris (40). Wajib ada di katalog kita. Pakai tipografi & susunan sendiri.
- Pola:
  - **foto latar per section dari galeri** (otomatis ambil `gallery[i]`);
  - **kartu kaca buram** (cek dukungan `backdrop-filter` di in-app browser; fallback warna solid transparan);
  - **countdown di cover**;
  - nama tamu "Zahwa & Partner" (plus-one di nama tamu).

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 11,004 px ≈ 12.0 layar; 14 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Olivia & Michael / 0 | fade-up (8), fade-down (2), zoom-out (1) | 1 |
| 2 | `quote` | 247 | – | fade-up (1) | 0 |
| 3 | `couple` | 1974 | The Wedding Of / The Groom / Michael Santoso | fade-up (9), zoom-in (3) | 2 |
| 4 | `gallery_photo` | 532 | Our Gallery | zoom-out (1), fade-up (1), fade-left (1) | 9 |
| 5 | `gallery_video` | 415 | Our Footage / The Pre-Wedding | zoom-out (1), zoom-out-up (1), zoom-in (1) | 2 |
| 6 | `event` | 1103 | It's The Day / Akad Nikah / Resepsi | fade-up (16), zoom-in (1) | 0 |
| 7 | `rundown` | 473 | Rundown / Resepsi | – | 0 |
| 8 | `rsvp` | 462 | Reservation / Unable To Attend | fade-up (2), zoom-in (1) | 0 |
| 9 | `live_streaming` | 360 | Live Streaming | zoom-in (1), fade-up (1) | 1 |
| 10 | `love_story` | 648 | Our Story / We're Forever / First Date | fade-up (10) | 0 |
| 11 | `filter_instagram` | 795 | Wedding Filter | fade-up (4) | 1 |
| 12 | `wedding_gift` | 974 | Wedding Gift / BANK BCA / 8375180797 | fade-up (2), zoom-in (1) | 1 |
| 13 | `wedding_wish` | 942 | Wedding Wish / Katsudoto / Zahwa & Partner | fade-up (10) | 0 |
| 14 | `greet_thanks` | 251 | Thank You | – | 0 |
| 15 | `footnote` | 915 | Olivia & Michael | zoom-out (5) | 0 |

### Tipografi

- Heading: Cormorant Unicase (27), Newsreader (14), Roboto (8)
- Body: Newsreader (52), Roboto (10)
- Tombol: Newsreader (5), Roboto (4)
- Font face termuat: Roboto 400, Roboto 700, Montserrat 500, Cormorant Unicase 400, Cormorant Unicase 500, Newsreader 200, Newsreader 400, Newsreader 500

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#000000` |
| `--background-secondary` | `#FFFFFF` |
| `--background-tertiary` | `#E6D8D5` |
| `--text-primary` | `#E6D8D5` |
| `--text-secondary` | `#FFFFFF` |
| `--text-tertiary` | `#000000` |
| `--button-text-primary` | `#000000` |
| `--button-background-primary` | `#FFFFFF` |
| `--button-text-secondary` | `#FFFFFF` |
| `--button-background-secondary` | `#0000000` |

- Warna teks terbanyak: #ffffff (90), #e6d8d5 (19), #000000 (4)
- Background terbanyak: #ffffff (8), #ffffff @0.5 (8), #000000 (4), #fafafa (2), #73859f @0.5 (2), #ffffff @0.4 (2)

### Motion

- AOS: 92 elemen; efek teratas fade-up (68), zoom-out (10), zoom-in (9), fade-down (3), fade-left (1), zoom-out-up (1); durasi 400–2000 ms (terbanyak 1000 (51), 1200 (33), 1500 (3)).
- CSS keyframes khas template: –; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 3 img + 1 background (format: jpg 2, ? 1, png 1).
- Ornamen terbesar (px): 1280×720, 1280×720, 0×0.
- Foto/upload pengguna tampil: 15 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 1.

