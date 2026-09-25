---
source_url: https://thearonan.katsudoto.id/187469
competitor: katsudoto
template: tia
katsudoto_id: 54
tags: [minimalist]
released: 2026-01-02
used_count: 7
editable_colors: true
captured_at: 2026-09-25
---
# Tia (katsudoto) — analisis desain

## Ringkasan
**"Alice in Wonderland tea party" yang whimsical**: latar kuning mentega pucat, kain/pita **biru muda** menjuntai, sulur anggur ungu, kelinci cokelat & putih, dan **karakter makanan berkaki** (cangkir teh, cupcake, kue stroberi, teko, kue kering) yang berbaris. Hijau sage untuk tombol sekunder. Lucu dan playful; untuk pasangan muda yang mau undangan beda.

## Layout & alur per section
1. **Cover pembuka**: gapura sulur anggur dengan kain biru terikat pita, di dalamnya lanskap meja teh taman. Nama script biru, "Hai {tamu}". Barisan kelinci + karakter makanan berkaki di bawah, tombol pil biru muda.
2. **Cover**: monogram inisial tipis di atas cat air mint, kartu krem membulat berisi foto, nama script, dan hashtag.
3. **Pembuka**: **amplop tosca terbuka dengan segel lilin** + teks undangan. Tepi atas bergelombang (scalloped).
4. **Mempelai**: foto dalam **bingkai oval ukir biru muda**, kelinci mengintip dari bingkai, nama script, dan badge IG biru.
5. **Acara**: kartu biru muda dengan **bingkai pita hijau berpilin** + kelinci & buah di sudut, ikon cincin, dan tombol View Maps.
6. **Dresscode**: ikon kartu (jas/gaun) + **swatch kapsul vertikal** besar.
7. **Save the date**: kain biru terjuntai dengan countdown di "kertas" bertepi putus-putus.
8. **Reservation**: blok biru dengan tepi bawah **scalloped/awan**, teks status RSVP.
9. **Rundown**: pil krem dengan jam di kapsul biru; karakter makanan menempel di pinggir.
10. **Galeri**: carousel foto (1 utama + tepi foto sebelah terlihat).
11. **Video**, **Love story** (kartu + panah), **Live streaming**, **Gift** (blok biru + kain), **Kado**, **Filter IG** (bingkai dashed), **Ucapan** (tombol hijau sage).
12. **Terima kasih**: kartu krem ber-border **wavy biru**, cangkir teh. **Penutup**: gapura anggur + kain biru + meja teh; footer biru muda.

## Aset
- Ilustrasi cat air: kain/pita biru, sulur anggur, kelinci, karakter makanan kartun berkaki, meja teh taman, dan buah stroberi.
- Bentuk tepi: scalloped, wavy, dan dashed. Segel lilin.

## Animasi & interaksi
- AOS fade/zoom; karakter berjalan dengan ayunan kecil (keyframe goyang). Carousel galeri peek.
- Ada **pemilih bahasa** (ikon bendera) di pojok kanan atas.

## Tipografi & warna
- Heading: script elegan biru. Body: serif ringan.
- Palet: butter `#fbf6d8`-an, biru muda `#b6d3e6`-an, hijau sage `#9aae6e`-an, aksen merah stroberi.

## Arah orisinal untuk kita
- Segmen **"playful / kawaii"** untuk Gen-Z. Versi kita: karakter **jajan pasar** berkaki (klepon, kue lapis, onde-onde, teh poci), kucing oren, latar pastel. Ini orisinal dan sangat lokal.
- Pola layak diadopsi:
  - tepi section **scalloped/wavy** (bisa pakai CSS mask, murah);
  - **karakter kecil sebagai dekorasi rundown**;
  - **pemilih bahasa di undangan** (kita punya i18n id/en, tinggal tampilkan toggle bila `languages.length > 1`).

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 14,558 px ≈ 15.9 layar; 19 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Thea & Ronan | zoom-out (3), fade-down (2), zoom-in-up (1) | 4 |
| 2 | `quote` | 549 | – | zoom-out (5), zoom-in (1), fade-up (1) | 4 |
| 3 | `couple` | 1641 | The Wedding of / The Groom / Ronan Edward | fade-up (7), zoom-in (6), zoom-in-up (2) | 6 |
| 4 | `event` | 2357 | It’s Wedding Day / Saturday, / 07 March 2026 | zoom-in (33), fade-up (14) | 31 |
| 5 | `save_the_date` | 675 | Save the Date / 0 | zoom-in (3), zoom-out (3), fade-up (2) | 6 |
| 6 | `rsvp` | 570 | Reservation / Unable To Attend | fade-up (4), zoom-in (1) | 4 |
| 7 | `rundown` | 603 | Rundown / Reception | zoom-in-up (6), fade-sup (1), fade-up (1) | 6 |
| 8 | `gallery_photo` | 501 | Potraits of Love | zoom-out (1), fade-up (1), fade-left (1) | 21 |
| 9 | `gallery_video` | 523 | Our Footage Once upon a time at favorite garden. . . / Our Footage / T | zoom-in (7), zoom-out (4), fade-up (2) | 12 |
| 10 | `love_story` | 801 | Our Story / Where It All Began / A Love That Grows | zoom-out (6), fade-up (5), fade-left (4) | 10 |
| 11 | `live_streaming` | 377 | Live Streaming | fade-up (2), zoom-in (1) | 1 |
| 12 | `wedding_gift` | 1846 | Wedding Gift / BANK MANDIRI / Upload proof of transfer | zoom-in (24), fade-up (7), fade-right (2) | 26 |
| 13 | `filter_instagram` | 754 | Wedding Filter | fade-up (4), zoom-out (2), zoom-in-up (2) | 7 |
| 14 | `wedding_wish` | 881 | Wedding Wish / Katsudoto | fade-up (9) | 1 |
| 15 | `greet_thanks` | 525 | Thankyou! | zoom-in (2), fade-up (2), fade-down-right (2) | 9 |
| 16 | `footnote` | 806 | Thea&Ronan | zoom-in (13), zoom-out (1), fade-down (1) | 13 |

### Tipografi

- Heading: Miss Fajardose (25), Bellefair (19), Roboto (10)
- Body: Bellefair (64), Roboto (10), Montserrat (2)
- Tombol: Bellefair (6), Roboto (4)
- Font face termuat: Roboto 400, Roboto 500, Montserrat 500, Montserrat 100 900, Bellefair 400, Miss Fajardose 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#FFFADC` |
| `--background-secondary` | `#B2D3E2` |
| `--background-tertiary` | `#FAF7F0` |
| `--text-primary` | `#455D69` |
| `--text-secondary` | `#616161` |
| `--text-tertiary` | `#5E7D1F` |
| `--button-text-primary` | `#455D69` |
| `--button-background-primary` | `#B2D3E2` |
| `--button-text-secondary` | `#FAF7F0` |
| `--button-background-secondary` | `#9BAC66` |

- Warna teks terbanyak: #455d69 (65), #616161 (29), #5e7d1f (10), #ffffff (9), #faf7f0 (6)
- Background terbanyak: #b2d3e2 (21), #faf7f0 (17), #9bac66 (6), #fffadc (5), #ffffff (5), #f6eed7 (2)

### Motion

- AOS: 236 elemen; efek teratas zoom-in (108), fade-up (64), zoom-out (28), zoom-in-up (11), fade-left (5), fade-down (4); durasi 400–4500 ms (terbanyak 1000 (89), 1200 (35), 1600 (23)).
- CSS keyframes khas template: goyang, fly-1, flap, move-sway, move-sway-2; sedang jalan: flap×4, goyang×48, move-sway×6.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 36 img + 1 background (format: png 35, jpg 2).
- Ornamen terbesar (px): 1564×2168, 1280×720, 1280×720, 800×982, 656×968, 640×942, 600×996, 640×921.
- Foto/upload pengguna tampil: 27 (termasuk GIF: 1).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 7.

