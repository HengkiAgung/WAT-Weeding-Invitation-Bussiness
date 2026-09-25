---
source_url: https://daffinanddanela.katsudoto.id/923752
competitor: katsudoto
template: juwita
katsudoto_id: 2
tags: [minimalist]
released: 2021-10-14
used_count: 4
editable_colors: true
lite_bundle: true
captured_at: 2026-09-25
---
# Juwita (katsudoto) — analisis desain

## Ringkasan
**Navy malam + emas pasir (generasi awal 2021)**: **navy tinta** (`#0d1631`-an) bertekstur, **pita cat air navy bergradasi** (sapuan kuas horizontal), panel **pasir/khaki** (`#d7b98a`-an), tombol **peach** (`#f0b98c`-an), dan **ornamen floral line-art emas** di sudut. Heading **script tebal peach-emas** (mirip "Alex Brush"). Section ucapan di **latar marmer abu**. Cover: **slideshow foto B/W berganti** + tombol **"Start The Journey"**. Salah satu desain awal katsudoto yang masih dipakai sebagai demo FAQ.

## Layout & alur per section
1. **Cover pembuka**: foto B/W bergantian (fade slideshow), nama script peach, "Hai {tamu}", tombol peach "Start The Journey".
2. **Cover**: logo hati, foto rounded, sapuan cat air navy, "Wedding Invitation", nama, hashtag, dan line-art emas di sudut.
3. **Mempelai**: foto rounded dengan **sudut line-art emas**, nama script peach, ortu, IG.
4. **Save the date** (panel pasir, angka besar), **Love story** (foto + garis bawah + teks justify), **Galeri** (latar marmer, mosaik), **Video** ("Clip of us").
5. **Acara**: tanggal serif besar di antara 2 garis, ikon garis peach, tombol peach.
6. **Dresscode** (ikon + dot), **Rundown horizontal** (timeline mendatar 4 kolom + baris kedua, garis putus-putus). Tidak biasa, layak dicatat.
7. **RSVP** (ornamen emas "RSVP" + bingkai), **Live streaming**, **Filter IG**, **Gift** (kartu putih + QR besar + form label kiri), **Ucapan** (marmer), **Ayat** (bahasa Inggris), **Terima kasih** (bahasa Indonesia), **Penutup**.

## Aset
- Sapuan cat air navy, tekstur marmer, floral line-art emas, logo hati.

## Tipografi & warna
- Heading: script tebal. Body: serif (Playfair).
- Palet: navy `#0d1631`-an, pasir `#d7b98a`-an, peach `#f0b98c`-an, marmer abu.

## Arah orisinal untuk kita
- **Cover slideshow foto** (2–3 foto bergantian fade) dengan murah menambah dinamika. Tambahkan opsi `cover.photos[]` di core.
- **Rundown horizontal** adalah alternatif untuk rundown pendek (≤6 item).

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 12,958 px ≈ 14.2 layar; 17 frame.
- Bahasa demo: `en`. Scroller: `kat-page__solo-pane`.
- Tombol buka: `Start The Journey` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Daffin & Danela | zoom-out (2), fade-down (2), zoom-in (1) | 3 |
| 2 | `couple` | 1275 | The Wedding of / Daffin Ezra Haris / Danela Asahy | fade-up-left (4), fade-up-right (4), fade-up (3) | 2 |
| 3 | `save_the_date` | 365 | Save The Date / 0 | fade-up (5), zoom-out-up (1), flip-right (1) | 0 |
| 4 | `love_story` | 1560 | Our Story / First Date / Proposal | zoom-out-up (3), zoom-in (3), fade-down (3) | 3 |
| 5 | `gallery_photo` | 801 | Picts of us A successful marriage requires falling in love m / Picts o | zoom-in (7), zoom-out-up (1), fade-up (1) | 7 |
| 6 | `gallery_video` | 439 | Clip of us it’s about finding the right person / Clip of us / Pre wedd | fade-up (2), zoom-out-up (1), zoom-in (1) | 2 |
| 7 | `event` | 1746 | It's Wedding Day True love stands by each other’s side on go / It's We | zoom-in-up (7), fade-up (4), zoom-in (2) | 2 |
| 8 | `rundown` | 370 | Rundown / Resepsi | – | 0 |
| 9 | `rsvp` | 436 | RSVP / Unable To Attend | fade-up (3) | 0 |
| 10 | `live_streaming` | 615 | Live Streaming | zoom-in-up (2), fade-up (1), zoom-in (1) | 1 |
| 11 | `filter_instagram` | 822 | Wedding Filter | fade-up (4) | 1 |
| 12 | `wedding_gift` | 1244 | Wedding Gift Your blessing and coming to our wedding are eno / Wedding | fade-up (1), zoom-in-down (1), zoom-in (1) | 4 |
| 13 | `wedding_wish` | 1114 | Wedding Wish | fade-up (8), zoom-in-up (1), fade-down (1) | 0 |
| 14 | `quote` | 232 | – | fade-up (1) | 0 |
| 15 | `greet_thanks` | 295 | Terima Kasih | – | 0 |
| 16 | `footnote` | 407 | Daffin & Danela | zoom-out-up (1), fade-down (1), zoom-in (1) | 0 |

### Tipografi

- Heading: Bonheur Royale (21), Playfair Display (12), Roboto (10)
- Body: Playfair Display (65), Roboto (10), Montserrat (2)
- Tombol: Roboto (4), Playfair Display (3)
- Font face termuat: Roboto 400, Roboto 700, Montserrat 500, Montserrat 100 900, Bonheur Royale 400, Playfair Display 400 900, Playfair Display 400 900 italic

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#081023` |
| `--background-secondary` | `#FAFAFA` |
| `--background-tertiary` | `#CFB381` |
| `--text-primary` | `#F0B98B` |
| `--text-secondary` | `#081023` |
| `--text-tertiary` | `#FFFFFF` |
| `--button-text-primary` | `#081023` |
| `--button-background-primary` | `#F0B98B` |
| `--button-text-secondary` | `#FFFFFF` |
| `--button-background-secondary` | `#FFFFFF` |

- Warna teks terbanyak: #ffffff (69), #081023 (42), #f0b98b (7), #000000 (2)
- Background terbanyak: #fafafa (16), #ffffff (12), #081023 (7), #f0b98b (6), #cfb381 (3), #73859f @0.5 (2)

### Motion

- AOS: 105 elemen; efek teratas fade-up (39), zoom-in (19), zoom-in-up (12), fade-down (9), zoom-out-up (7), fade-right (4); durasi 400–3000 ms (terbanyak 1000 (95), 1200 (7), 400 (1)).
- CSS keyframes khas template: zoom-out; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 5 img + 9 background (format: png 10, jpg 3, ? 1).
- Ornamen terbesar (px): 1280×720, 640×480, 96×96, 96×96, 0×0.
- Foto/upload pengguna tampil: 19 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor tidak, inline SVG 3.

