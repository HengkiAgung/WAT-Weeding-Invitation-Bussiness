---
source_url: https://tasyadanarjuna.katsudoto.id
competitor: katsudoto
template: tasya
katsudoto_id: 14
tags: [fairytale]
released: 2022-07-14
used_count: 1
editable_colors: false
lite_bundle: true
captured_at: 2026-09-25
---
# Tasya (katsudoto) — analisis desain

## Ringkasan
**Glamour ballroom khaki-emas (desain lama 2022)**: **khaki/taupe** (`#a58f6a`-an) + **krem pasir** (`#e8d6bb`-an) + panel **rose-salmon** (`#d9a19a`-an) di section gift. **Bingkai arch emas barok berukir** untuk semua foto, **pita/gulungan (scroll banner)** untuk countdown, dan **siluet istana/katedral emas** di penutup. Heading **script kaligrafi tebal** (mirip "Pinyon/Great Vibes") emas. Cover: **"We Got Married"** + tombol **"BUKA UNDANGAN"**. Banyak ucapan riil di demo (undangan pelanggan nyata dijadikan contoh).

## Layout & alur per section
1. **Cover pembuka**: foto glamour gelap, "We Got Married" script emas, "Dear Mr/Mrs/Ms", tombol putih "BUKA UNDANGAN", **watermark fotografer** kecil di bawah.
2. **Cover**: krem bertekstur, "The Wedding Of", nama script emas, hashtag, tanggal; foto dalam **arch emas barok**.
3. **Bride & Groom**: latar khaki, foto dalam arch ukir, nama lengkap script, "Putri Pertama dari Bapak (Alm.)…".
4. **Save the date**: countdown di atas **pita gulungan putih**. **Love story** (foto arch emas + teks panjang bahasa Indonesia di kartu putih).
5. **Acara**: kartu krem tanggal, ikon garis, Akad/Resepsi, tombol khaki.
6. **Live streaming** (dengan catatan), **Gift**: panel **rose** + dropdown + **QR rekening besar** + form label kiri.
7. **Ucapan** (banyak ucapan asli, "Show more comments"), **Penutup**: hashtag, nama, tanggal caps, **siluet istana emas**.

## Aset
- Bingkai arch barok emas, pita gulungan, siluet istana emas, tekstur krem.

## Tipografi & warna
- Heading: script kaligrafi tebal. Body: serif.
- Palet: khaki `#a58f6a`-an, krem `#e8d6bb`-an, rose `#d9a19a`-an, emas.

## Arah orisinal untuk kita
- Desain generasi awal katsudoto; menunjukkan evolusi dari "emas barok" ke gaya ilustrasi sekarang. Tidak perlu ditiru.
- Detail: **"(Alm.)" di nama ortu** muncul lagi (lihat linda.md) → wajib didukung schema. Cover dengan **headline custom** ("We Got Married") → field `cover.headline` opsional.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 8,392 px ≈ 9.2 layar; 11 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Buka Undangan` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 1015 | Tasya & Arjuna | fade-down (3), fade-up (3), zoom-in (2) | 2 |
| 2 | `couple` | 1246 | Bride & Groom / Arjuna Dewanto Suryo Putro / Tasya Revina | fade-up (7), zoom-in (4), zoom-out (2) | 2 |
| 3 | `save_the_date` | 334 | Save The Date / 0 | fade-up (7), zoom-out (2), zoom-in (1) | 0 |
| 4 | `love_story` | 1844 | Our Love Story | fade-up (4), zoom-in (3) | 4 |
| 5 | `event` | 717 | Saturday,February 12th, 2022 / Akad Nikah 10:00 - 11:00 / Akad Nikah | fade-up (12), zoom-in (1), fade-left (1) | 0 |
| 6 | `rsvp` | 0 | – | – | 0 |
| 7 | `live_streaming` | 506 | Live Streaming | fade-up (2), zoom-in (1) | 1 |
| 8 | `wedding_gift` | 1149 | Wedding Gift Your blessing and coming to our wedding are eno / Wedding | fade-up (2), fade-right (1), fade-left (1) | 2 |
| 9 | `wedding_wish` | 1200 | Wedding Wish | fade-up (7) | 0 |
| 10 | `footnote` | 347 | Tasya & Arjuna | fade-up (3), fade-down (1), zoom-in (1) | 0 |

### Tipografi

- Heading: ALS (10), Anglecia Pro Display (5), Roboto (3), Playfair Display (3)
- Body: Anglecia Pro Display (43)
- Tombol: Anglecia Pro Display (2)
- Font face termuat: Roboto 400, Roboto 500, Roboto 700, Montserrat 500, Playfair Display 400, Affair 400, Anglecia Pro Display 400, ALS 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#F4EBDC` |
| `--background-secondary` | `#D6A59A` |
| `--background-tertiary` | `#FFFFFF` |
| `--text-primary` | `#E2B744` |
| `--text-secondary` | `#0D2A30` |
| `--text-tertiary` | `#FFFFFF` |
| `--button-text-primary` | `#F4EBDC` |
| `--button-background-primary` | `#E2B744` |
| `--button-text-secondary` | `#0D2A30` |
| `--button-background-secondary` | `#D6A59A` |

- Warna teks terbanyak: #000000 (51), #ffffff (10), #90530f (7)
- Background terbanyak: #ffffff (11), #e6d0b7 (9), #a99170 (8), #ffa07a (2), #8f8f8f (2), #837b70 (1)

### Motion

- AOS: 84 elemen; efek teratas fade-up (49), zoom-in (14), zoom-out (7), fade-right (5), fade-left (5), fade-down (4); durasi 400–2000 ms (terbanyak 1000 (69), 1200 (7), 1500 (7)).
- CSS keyframes khas template: –; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 4 img + 8 background (format: png 10, jpg 1, ? 1).
- Ornamen terbesar (px): 917×1174, 1280×720, 710×1035, 0×0.
- Foto/upload pengguna tampil: 7 (termasuk GIF: 0).
- Video embed: 0; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor tidak, inline SVG 3.

