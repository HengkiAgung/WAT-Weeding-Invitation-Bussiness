---
source_url: https://bryananne.katsudoto.id/526925
competitor: katsudoto
template: palace
katsudoto_id: 26
tags: [floral, fairytale, nature]
released: 2023-07-14
used_count: 15
editable_colors: true
lite_bundle: true
captured_at: 2026-09-25
---
# Palace (katsudoto) — analisis desain

## Ringkasan
**Sketsa arsitektur istana Eropa + taman botani**: cover **sketsa pensil istana berkubah** samar, **ranting pohon hitam** (tinta), awan, balustrade batu, pohon, dan bunga botani (bunga matahari kuning, lili, hydrangea biru). Latar **abu-krem hangat** (`#efebe7`-an), tombol **cokelat kopi tua** (`#5a4535`-an). Heading **script kaligrafi cokelat**. Menampilkan **E-Invitation (kartu QR)** di section RSVP. Klasik elegan, netral.

## Layout & alur per section
1. **Cover pembuka**: ranting tinta di atas, sketsa istana, pohon + balustrade + bunga di bawah, nama script cokelat, "Hai {tamu} & Partner", tombol cokelat.
2. **Cover**: foto dalam **arch kapsul** dengan bunga botani di sudut, di atas rumput hijau; label "E-Invitation ↓".
3. **Pembukaan** (basmalah + salam) + **Mempelai**: foto dalam **bingkai emas ukir + karangan bunga botani**, nama script, ortu, IG (garis bawah).
4. **Save the date**: tanggal serif, 4 **kotak kartu bergaris cokelat** + tombol cokelat; bangku taman sketsa.
5. **Acara**: "It's The Day" + **pil bergaris** (SATURDAY | December 28th); kartu di antara **pilar sketsa** + bunga, View Maps cokelat.
6. **Dresscode** (dot cokelat), **Rundown**, **Reservation**: **kartu E-Invitation dengan QR code** + tombol "Download E-Invitation", status Will Attend.
7. **Love story**: foto + **kertas sobek** berisi teks. **Galeri**, **Video**, **Live streaming**, **Filter IG**, **Gift** (kartu bergaris), **Ucapan**, **Penutup** (sketsa + bunga + nama + tanggal).

## Aset
- Sketsa pensil istana & pilar, ranting tinta, pohon cat air, balustrade, bunga botani, kertas sobek, dan bingkai emas ukir.

## Animasi & interaksi
- AOS. **Download E-Invitation (QR)** dari undangan. Kita sudah punya W.ui.qrTicket + html2canvas download.

## Tipografi & warna
- Heading: script kaligrafi. Body: serif.
- Palet: abu-krem `#efebe7`-an, cokelat kopi `#5a4535`-an, hijau taman, kuning bunga matahari.

## Arah orisinal untuk kita
- **Sketsa pensil arsitektur** adalah gaya ringan (line, satu warna), mudah di-recolor, dan elegan. Versi kita: sketsa **Gedung Sate / Lawang Sewu / Kota Tua** untuk tema "Heritage Kota".
- Konfirmasi pola: **E-Invitation QR tampil setelah RSVP hadir** (sudah kita implementasi). Tambah tombol "Unduh" yang jelas.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 13,139 px ≈ 14.4 layar; 17 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Bryan & Anne / E-Invitation | fade-down-right (2), fade-down (2), fade-up (1) | 8 |
| 2 | `couple` | 1624 | The Wedding Of / Bryan Bagaskara / & | fade-up (7), zoom-in (2), zoom-out (2) | 14 |
| 3 | `save_the_date` | 748 | Save The Date / 0 | fade-up (2), zoom-in (1), fade-down-right (1) | 5 |
| 4 | `event` | 1696 | It's The Day / Saturday ¦ / Religious Ceremony | fade-up (22), zoom-in (1) | 13 |
| 5 | `rundown` | 471 | Rundown / Wedding Celebration | – | 0 |
| 6 | `rsvp` | 918 | Reservation / Will Attend | fade-up (4), zoom-in (1) | 3 |
| 7 | `love_story` | 1122 | – | zoom-in (6), fade-right (2), zoom-out (2) | 4 |
| 8 | `gallery_photo` | 717 | Potraits of Love | fade-up (3) | 19 |
| 9 | `gallery_video` | 379 | Our Footage | fade-up (2) | 2 |
| 10 | `live_streaming` | 512 | Live Streaming | zoom-in (2), fade-up (1) | 1 |
| 11 | `filter_instagram` | 805 | Wedding Filter | fade-up (4) | 4 |
| 12 | `wedding_gift` | 1048 | Wedding Gift / BANK BRI / BANK BRI (002) | zoom-in (1), fade-up (1) | 2 |
| 13 | `wedding_wish` | 604 | Wedding Wish / Katsudoto / Fanny & Partner | fade-up (7), fade-right (1), fade-left (1) | 0 |
| 14 | `quote` | 240 | – | fade-up (1) | 0 |
| 15 | `greet_thanks` | 254 | Thank You | – | 0 |
| 16 | `footnote` | 769 | Bryan & Anne | fade-up (8), fade-down-right (4), fade-down-left (1) | 11 |

### Tipografi

- Heading: Great Vibes (26), Libre Caslon Text (11), Roboto (3)
- Body: Libre Caslon Text (47), Roboto (11), Montserrat (2)
- Tombol: Libre Caslon Text (6), Roboto (4)
- Font face termuat: Roboto 400, Roboto 500, Roboto 700, Montserrat 500, Montserrat 100 900, Great Vibes 400, Libre Caslon Text 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#F1EDEA` |
| `--background-secondary` | `#E8DDD0` |
| `--background-tertiary` | `#534431` |
| `--text-primary` | `#534431` |
| `--text-secondary` | `#404040` |
| `--text-tertiary` | `#FAFAFA` |
| `--button-text-primary` | `#F1EDEA` |
| `--button-background-primary` | `#534431` |
| `--button-text-secondary` | `#534431` |
| `--button-background-secondary` | `#534431` |

- Warna teks terbanyak: #404040 (48), #534431 (35), #f1edea (10), #ffffff (9), #000000 (2), #000000 @0.5 (2)
- Background terbanyak: #e8ddd0 (12), #534431 (11), #fafafa (6), #f1edea (5), #ffffff (3), #404040 (2)

### Motion

- AOS: 113 elemen; efek teratas fade-up (69), zoom-in (15), fade-down-right (11), zoom-out (5), fade-right (4), fade-down (2); durasi 400–1500 ms (terbanyak 1000 (65), 1200 (38), 1500 (9)).
- CSS keyframes khas template: scaleAnimation, animationRantingLeft, animationRantingKanan, animationRight, animationPohonLeft, animationPagarKiri, animationPagarKanan, animationRumput, bungaSatu, cloud, move, daunGoyang; sedang jalan: cloud×4, daunGoyang×14, scaleAnimation×2, move×3, animationRight×7, animationPohonLeft×1, animationRumput×1.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 38 img + 7 background (format: png 41, jpg 2, jpeg 1, ? 1).
- Ornamen terbesar (px): 840×1170, 1280×720, 670×897, 600×880, 684×720, 913×502, 426×1029, 504×639.
- Foto/upload pengguna tampil: 25 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 6.

