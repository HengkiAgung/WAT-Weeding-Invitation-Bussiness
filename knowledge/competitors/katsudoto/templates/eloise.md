---
source_url: https://annajeremiah.katsudoto.id/107754
competitor: katsudoto
template: eloise
katsudoto_id: 61
tags: [minimalist, floral]
released: 2026-07-13
used_count: 128
editable_colors: true
captured_at: 2026-09-25
---
# Eloise (katsudoto) — analisis desain

> ⚠️ **Relevan langsung ke repo kita**: `wedding-template/` (sumber template `templates/eloise`) adalah rekonstruksi desain ini. Buktinya: nama sama, palet olive & krem, bingkai renda oval, amplop, piringan hitam, mutiara, kertas sobek, dan stack library identik. Copy teks demo juga sama: kutipan Maya Angelou, "The First Hello", "Portrait of Us", "Click to open invitation". Lihat catatan risiko IP di `PROGRESS.md`. **Status 2026-09-25: sudah ditangani. Template kita didesain ulang total menjadi `templates/rimbun/` (kebun tropis + anyaman rotan, font Allura/Fraunces).**

## Ringkasan
**Garden-romantic minimalis**: hijau zaitun gelap (olive) + putih/krem, renda putih, mutiara, dan lili calla. Fotografi prewed outdoor (bukit berkabut, pohon willow) dan studio putih. Tenang dan elegan, cocok untuk pernikahan taman/intimate. Ini desain terpopuler di katalog (128 pemakaian, Jul 2026).

## Layout & alur per section
1. **Cover pembuka**: foto lanskap berkabut full-bleed dengan **bingkai renda oval** berisi foto pasangan di tengah. Tombol "Click to open invitation".
2. **Quote**: pita hijau olive + kutipan italic putih.
3. **Mempelai**: latar putih, judul script "Groom and Bride", dua **foto polaroid miring** bertumpuk, nama script abu besar + "&" raksasa pudar.
4. **Love story**: latar olive; kartu **kertas sobek krem** bertumpuk (slider), untaian mutiara, dan setangkai bunga.
5. **Save the date**: amplop hijau terbuka (ilustrasi) + tombol Add to Calendar. Tanggal besar "25.07 / Saturday / 2026" di atas foto lanskap.
6. **Acara**: kartu dengan **bingkai renda** (akad & resepsi), foto polaroid, lalu dresscode berupa **kartu putih membulat** berisi ikon garis jas/gaun + swatch warna.
7. **Live streaming**: kartu foto + tombol. **Rundown**: garis waktu vertikal tengah dengan jam dan kegiatan kiri-kanan bergantian, label acara dalam pil.
8. **RSVP** → **Galeri "Portrait of Us"**: kolase foto asimetris bertumpuk (grid bergeser).
9. **Video "Our Footage"**, **Filter IG** (kartu melengkung atas + foto + nama), **Wedding Gift** (accordion bank + form konfirmasi), **Kado** (kartu olive melengkung + slider produk), **Ucapan** (input + kartu ucapan bertanda centang).
10. **Terima kasih**: kartu putih **bertepi bergelombang (scalloped)** dengan segel lilin emas.
11. **Footnote**: foto pasangan di dalam **amplop terbuka**, monogram inisial, tirai beludru hijau, lalu "Powered by".

## Aset
- Ornamen PNG: renda oval, bingkai renda persegi, tepi renda horizontal, polaroid, kertas sobek, mutiara, lili/bunga putih, amplop, segel lilin, dan tirai beludru hijau.
- Ikon garis dresscode (jas, gaun). Foto lanskap berkabut sebagai latar section (cover, save the date).

## Animasi & interaksi
- AOS fade/zoom lembut. Slider love story dan kado. Amplop di penutup. Music box piringan hitam.
- tsParticles termuat (efek partikel opsional/"daun jatuh").

## Tipografi & warna
- Heading: script kaligrafi tipis. Body: serif klasik kecil.
- Palet: olive gelap ±`#353a20`, putih, krem, abu hangat.

## Arah orisinal untuk kita
- Template `templates/eloise` **harus dibedakan** sebelum dijual:
  - ganti nama;
  - ganti motif tanda tangan (renda oval → misalnya anyaman rotan atau bingkai daun melinjo);
  - ubah komposisi cover dan penutup (amplop);
  - ganti semua copy default ("Portrait of Us" dan seterusnya) dengan teks kita sendiri;
  - jangan pakai kutipan/cerita demo mereka.
- Yang boleh dipertahankan sebagai pola umum (bukan milik siapa pun): palet hijau+krem, polaroid, timeline rundown, dan dresscode dengan swatch.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 14,808 px ≈ 16.2 layar; 19 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Click to open invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Anna & Jeremiah | zoom-in (3), fade-down (2), zoom-out (1) | 3 |
| 2 | `quote` | 181 | – | fade-up (1) | 0 |
| 3 | `couple` | 1190 | Groom and Bride / Jeremiah Sanjaya / & | fade-up (9), zoom-in (4), fade-right (2) | 8 |
| 4 | `love_story` | 1715 | Our Love Story / Forever Begins | zoom-in (7), zoom-out (6), fade-down-right (3) | 21 |
| 5 | `save_the_date` | 659 | Save the date / 0 | fade-up (7), zoom-in (3), fade-up-right (2) | 11 |
| 6 | `event` | 1934 | Our Special Day / 25.07 / Saturday | zoom-in (16), fade-up (12), zoom-out (4) | 24 |
| 7 | `live_streaming` | 547 | Live Streaming | zoom-out (2), zoom-in-right (2), fade-up (2) | 5 |
| 8 | `rundown` | 807 | Rundown / Reception | fade-up (2), zoom-in (1) | 0 |
| 9 | `rsvp` | 254 | Will Attend | fade-up (2) | 0 |
| 10 | `gallery_photo` | 1474 | Portrait of Us | fade-up (7) | 6 |
| 11 | `gallery_video` | 471 | Our Fotage / The Pre Wedding | zoom-in (4), zoom-out (1), zoom-out-up (1) | 5 |
| 12 | `filter_instagram` | 788 | Wedding Filter | fade-up (4), fade-left (3), fade-right (1) | 5 |
| 13 | `wedding_gift` | 1607 | Wedding Gift / BANK BCA / Upload proof of transfer | zoom-in (3), fade-up (3), zoom-in-up (2) | 11 |
| 14 | `wedding_wish` | 527 | Share Your Blessing... / Katsudoto | fade-up (7) | 1 |
| 15 | `greet_thanks` | 659 | Thank You! | zoom-in (8), fade-up (2), fade-down (1) | 9 |
| 16 | `footnote` | 1080 | Anna & Jeremiah | zoom-out (5), zoom-in-up (5), zoom-in (2) | 15 |

### Tipografi

- Heading: Exmouth (28), Instrument Serif (13), Roboto (9)
- Body: Instrument Serif (56), Roboto (10), Exmouth (5)
- Tombol: Instrument Serif (6), Roboto (4)
- Font face termuat: Roboto 400 italic, Roboto 400, Montserrat 500, Instrument Serif 400 italic, Instrument Serif 400, Exmouth 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#FFFF` |
| `--background-secondary` | `#353A20` |
| `--background-tertiary` | `#56584B` |
| `--text-primary` | `#353A20` |
| `--text-secondary` | `#F5F0E8` |
| `--text-tertiary` | `#8A7B6B` |
| `--button-text-primary` | `#F5F0E8` |
| `--button-background-primary` | `#353A20` |
| `--button-text-secondary` | `#353A20` |
| `--button-background-secondary` | `#FFFF` |

- Warna teks terbanyak: #353a20 (45), #f5f0e8 (40), #8a7b6b (19), #ffffff (9)
- Background terbanyak: #ffffff (14), #353a20 (14), #f6eed7 (6), #b3c6d5 (2), #47472f (2), #a19c7f (2)

### Motion

- AOS: 199 elemen; efek teratas fade-up (68), zoom-in (57), zoom-out (24), fade-left (10), zoom-in-up (9), fade-right (6); durasi 400–7000 ms (terbanyak 1000 (32), 1200 (32), 3000 (29)).
- CSS keyframes khas template: goyang; sedang jalan: goyang×13.
- Library aktif: jquery, gsap, ScrollTrigger, AOS, tsParticles, Swiper, slick, lightGallery, videojs, html2canvas, Flip, Draggable.

### Aset

- Ornamen/ilustrasi template unik: 43 img + 2 background (format: png 41, jpg 3, ? 1).
- Ornamen terbesar (px): 1280×720, 600×1047, 600×1037, 620×928, 580×908, 564×848, 600×775, 2740×164.
- Foto/upload pengguna tampil: 26 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 9.

