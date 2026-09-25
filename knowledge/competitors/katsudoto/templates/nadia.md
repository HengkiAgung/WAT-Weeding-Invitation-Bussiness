---
source_url: https://elarafino.katsudoto.id/241557
competitor: katsudoto
template: nadia
katsudoto_id: 55
tags: [minimalist]
released: 2026-01-12
used_count: 24
editable_colors: true
captured_at: 2026-09-25
---
# Nadia (katsudoto) — analisis desain

## Ringkasan
**"Film-look summer / Korean indie movie"**: seluruh halaman memakai **foto pasangan full-bleed berlapis** (langit biru, padang bunga, golden light) yang berganti di tiap section. Teks **script tulisan tangan kuning lemon** (`#f2e36b`-an), tombol **hijau matcha/olive** (`#98a653`-an) dan **oranye-merah** (`#ec5b3a`-an) untuk live streaming. Kartu **krem kuning pucat** transparan. **Kalender bulan penuh** di save the date. Sangat photo-driven, nostalgik, dan muda.

## Layout & alur per section
1. **Cover pembuka**: foto full (langit + pasangan), nama script kuning di langit, "Hai {tamu}", tombol hijau transparan.
2. **Cover & quote**: foto berganti, kutipan script kuning.
3. **Mempelai**: foto rounded tertumpuk di atas foto latar, nama script kuning **miring**, ortu.
4. **Save the date**: countdown + **kalender bulanan grid (Mo–Su)** dengan tanggal acara ditandai, tombol "Add to Calendar".
5. **Acara**: "The Wedding Day"; Akad/Resepsi dengan **tanggal dilingkari garis putus-putus oval** (seperti coretan tangan), tombol "View Maps" hijau.
6. **Dresscode**: kartu **bergaris outline putih** dengan ikon line-art + swatch + label script "Casual".
7. **Rundown**: **pil dua warna** (jam di hijau | kegiatan di krem).
8. **RSVP** (dengan batas tanggal), **Galeri** (foto + strip thumbnail), **Video "Our Footage"** (2 video: "The Pre-wedding", "Final Chapter"), **Live streaming** (tombol oranye).
9. **Love story** (foto kecil + teks script), **Gift** (pil bank hijau + form di kartu krem), **Kado** (alamat + produk + "Load more"), **Filter IG**, **Ucapan**, **Terima kasih**, **Penutup**.

## Aset
- Nol ilustrasi; semua foto pengguna (±15+ foto dipakai sebagai latar). Kalender dari CSS grid.

## Tipografi & warna
- Heading: script tulisan tangan casual (mirip "Caveat Brush/Kalam"). Body: sans tulisan tangan tipis.
- Palet: kuning lemon `#f2e36b`-an, matcha `#98a653`-an, oranye `#ec5b3a`-an, krem kuning, biru langit (dari foto).

## Arah orisinal untuk kita
- **Kalender bulan dengan tanggal ditandai** jelas dan disukai. Tambahkan komponen `W.ui.calendar` (opsional di section countdown).
- **Latar foto per section** (lihat juga noir.md): katsudoto punya 2 template populer dengan pola ini (24 & 40 pemakaian). Kita perlu mode "photo backdrop" di core: `sections.*.bgPhoto` (index galeri).
- **Coretan oval di tanggal** (SVG path) = sentuhan personal murah.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 15,824 px ≈ 17.3 layar; 21 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Elara & Fino | fade-down (1), fade-up (1), zoom-out (1) | 1 |
| 2 | `quote` | 495 | – | zoom-out (1), fade-up (1) | 0 |
| 3 | `couple` | 1287 | The Wedding of / Fino Felix / & | fade-up (9), zoom-out (3) | 4 |
| 4 | `save_the_date` | 788 | Save the Date / 0 | fade-up (5), fade-down (2), zoom-out (1) | 0 |
| 5 | `event` | 1632 | The Wedding Day / Akad Nikah / Resepsi | fade-up (22), fade-left (4), fade-right (4) | 2 |
| 6 | `rundown` | 915 | Rundown / Resepsi | fade-left (5), zoom-out (1), fade-sup (1) | 0 |
| 7 | `rsvp` | 915 | Reservation / Unable To Attend | fade-up (4), zoom-out (1) | 0 |
| 8 | `gallery_photo` | 915 | – | zoom-out (1), fade-up (1) | 38 |
| 9 | `gallery_video` | 915 | Our Footage Our Footage / Our Footage / The Pre-Wedding | fade-up (4), zoom-out (1) | 4 |
| 10 | `live_streaming` | 915 | Live Streaming | fade-up (3), zoom-out (1) | 1 |
| 11 | `love_story` | 915 | Our Love Story / First Sight / We're Forever | fade-up (6), zoom-out (1) | 2 |
| 12 | `wedding_gift` | 1881 | Wedding Gift / BANK EKSPOR INDONESIA / Upload proof of transfer | zoom-in (8), fade-up (5), zoom-out (1) | 5 |
| 13 | `filter_instagram` | 713 | Wedding Filter | fade-up (3), zoom-out (1) | 1 |
| 14 | `wedding_wish` | 915 | Wedding Wish / Katsudoto | fade-up (7), zoom-out (1) | 0 |
| 15 | `greet_thanks` | 473 | Thank You! | zoom-out (1), fade-up (1) | 0 |
| 16 | `footnote` | 1239 | Elara & Fino | zoom-out (3) | 1 |

### Tipografi

- Heading: Hurricane (39), Indie Flower (14), Roboto (8)
- Body: Indie Flower (73), Roboto (11), Hurricane (2)
- Tombol: Indie Flower (7), Roboto (5)
- Font face termuat: Roboto 400, Montserrat 500, Hurricane 400, Indie Flower 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#FFFCF1` |
| `--background-secondary` | `#FEFFDE` |
| `--background-tertiary` | `#98A250` |
| `--text-primary` | `#F2E380` |
| `--text-secondary` | `#FFFCF1` |
| `--text-tertiary` | `#E45D36` |
| `--button-text-primary` | `#FFFCF1` |
| `--button-background-primary` | `#98A250` |
| `--button-text-secondary` | `#FAF7F0` |
| `--button-background-secondary` | `#E45D36` |

- Warna teks terbanyak: #fffcf1 (81), #f2e380 (57), #e45d36 (24), #ffffff (10), #faf7f0 (2)
- Background terbanyak: #98a250 (20), #fffcf1 (7), #feffde (5), #fafafa (3), #feffde @0.75 (3), #f6eed7 (2)

### Motion

- AOS: 124 elemen; efek teratas fade-up (78), zoom-out (21), fade-left (9), zoom-in (8), fade-right (4), fade-down (3); durasi 400–3000 ms (terbanyak 2900 (79), 1900 (17), 1000 (10)).
- CSS keyframes khas template: –; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas, anime.

### Aset

- Ornamen/ilustrasi template unik: 8 img + 1 background (format: png 5, jpg 3, ? 1).
- Ornamen terbesar (px): 1280×720, 1280×720, 377×274, 280×280, 120×90, 96×96, 96×96, 0×0.
- Foto/upload pengguna tampil: 49 (termasuk GIF: 0).
- Video embed: 2; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 4.

