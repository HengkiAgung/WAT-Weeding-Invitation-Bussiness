---
source_url: https://racheldave.katsudoto.id/605540
competitor: katsudoto
template: nadira
katsudoto_id: 40
tags: [floral]
released: 2024-10-21
used_count: 6
editable_colors: true
captured_at: 2026-09-25
---
# Nadira (katsudoto) — analisis desain

## Ringkasan
**Floral pastel "Timur Tengah-modern"**: demo pasangan muslim berhijab dengan arsitektur putih ber-**mashrabiya** (kisi kayu) di foto. Bunga cat air pastel (pink, ungu, peach, biru) bergaya flat-watercolor. Heading **serif small-caps** (Cinzel-like) warna **merah anggur**, dan kartu berbentuk **arch** berbingkai **hijau mint + kuning mentega** (kombinasi retro-pastel). Bersih, feminin, islami tanpa ornamen Arab eksplisit.

## Layout & alur per section
1. **Cover pembuka**: foto pasangan full dengan fade putih bawah, bunga cat air di sisi, nama serif small-caps merah, "Hai {tamu}", tombol merah anggur.
2. **Cover**: **bingkai "label/cartouche" bergelombang** (bentuk label vintage) bergaris pink di atas krem.
3. **Mempelai**: foto dalam **arch berujung runcing (ogee)** bergaris emas + bunga; nama small-caps besar; ortu; IG.
4. **Love story**: foto B/W + panah bulat, kartu teks **kuning mentega** di bawahnya.
5. **Save the date**: countdown di **cartouche bergaris mint** berisi kuning, bunga + bintang kilau hijau.
6. **Acara**: kartu **arch tinggi bingkai mint** berisi kuning, Akad & Resepsi dalam satu kartu, View Maps merah. Dresscode di kartu arch yang sama (ikon dalam lingkaran putih).
7. **Rundown** timeline merah. **Galeri** kolase + mosaik. **Video**.
8. **RSVP**: arch bergaris merah + medali bunga. **Live streaming**, **Filter IG**, **Gift**: dropdown merah dalam kartu kuning + form bergaris merah.
9. **Kado**: alamat dalam arch + produk **SOLD OUT**. **Ucapan** (tombol cokelat), **Quote** di antara bunga-bunga yang tersebar (pola "confetti bunga").
10. **Penutup**: nama + hashtag + tanggal di atas foto fade, bunga di bawah; footer merah anggur.

## Aset
- Bunga cat air flat (pastel), bentuk-bentuk frame vektor (cartouche bergelombang, ogee arch, arch tinggi), dan bintang kilau hijau. Relatif ringan.

## Animasi & interaksi
- AOS. Bunga tersebar sebagai pola dekoratif. Carousel love story panah bulat.

## Tipografi & warna
- Heading: serif small-caps (mirip "Cinzel"). Body: serif.
- Palet: krem `#f7f1ea`-an, merah anggur `#8c2433`-an, mint `#8fc7b5`-an, kuning mentega `#f6d89a`-an.

## Arah orisinal untuk kita
- **Kombinasi warna tak lazim** (merah anggur + mint + kuning) membuat template berbeda tanpa ornamen mahal. Contoh bagus untuk sistem **varian warna** kita.
- **Arch ogee** memberi nuansa islami halus. Raudhah kita sudah memakai arch; bisa tambah varian *ogee* via `clip-path`.
- Frame label vintage (cartouche) cukup dibuat SVG path. Kita bisa punya pustaka "frame shapes" di `_core` (arch, ogee, cartouche, scallop, stamp, lobed) yang bisa dipakai lintas template.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 14,520 px ≈ 15.9 layar; 19 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Rachel & Dave | zoom-in (13), fade-up (2), fade-left (2) | 14 |
| 2 | `couple` | 1535 | The Wedding of / Dave Leonard / & | zoom-in (14), fade-up (7), fade-up-right (4) | 22 |
| 3 | `love_story` | 679 | Our Story / First Meet / We're Forever | fade-right (8), zoom-in (5), fade-up (4) | 12 |
| 4 | `save_the_date` | 637 | Save The Date / 0 | zoom-in (12), fade-down-right (1), fade-down-left (1) | 11 |
| 5 | `event` | 1721 | It's Wedding Day / Saturday, / 01 February 2025 | zoom-in (17), fade-up (14) | 19 |
| 6 | `rundown` | 485 | Rundown / Resepsi | – | 0 |
| 7 | `gallery_photo` | 864 | Potraits of Us | zoom-in (6), fade-down (2), fade-up (1) | 8 |
| 8 | `gallery_video` | 367 | Our Footage | zoom-in (3), fade-up (2), zoom-out (1) | 6 |
| 9 | `rsvp` | 659 | RSVP / Will Attend | fade-up (8), zoom-in (7), fade-right (4) | 16 |
| 10 | `live_streaming` | 452 | Live Streaming | fade-left (4), fade-up (2), zoom-in (1) | 5 |
| 11 | `filter_instagram` | 822 | Wedding Filter | fade-up (12), zoom-in (6) | 15 |
| 12 | `wedding_gift` | 2023 | Wedding Gift / BANK BCA / BANK BCA (014) | zoom-in (7), fade-up (7), fade-right (4) | 23 |
| 13 | `wedding_wish` | 946 | Wedding Wish / Katsudoto | fade-up (11), zoom-in (2) | 2 |
| 14 | `quote` | 915 | – | zoom-in (18), fade-up (1) | 18 |
| 15 | `greet_thanks` | 270 | Thank You | – | 0 |
| 16 | `footnote` | 915 | Rachel&Dave | fade-up (20), zoom-out (5), fade-right (4) | 26 |

### Tipografi

- Heading: Cormorant SC (30), Cormorant Infant (21), Roboto (12)
- Body: Cormorant Infant (77), Roboto (14), Montserrat (2), Cormorant SC (1)
- Tombol: Cormorant Infant (10), Roboto (6)
- Font face termuat: Roboto 400, Roboto 500, Roboto 700, Montserrat 500, Montserrat 100 900, Cormorant SC 400, Cormorant SC 500, Cormorant SC 600

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#EAE2DC` |
| `--background-secondary` | `#F5D89F` |
| `--background-tertiary` | `#EAE2DC` |
| `--text-primary` | `#8A2D38` |
| `--text-secondary` | `#517470` |
| `--text-tertiary` | `#404040` |
| `--button-text-primary` | `#F2F1ED` |
| `--button-background-primary` | `#8A2D38` |
| `--button-text-secondary` | `#EAE2DC` |
| `--button-background-secondary` | `#A5785D` |

- Warna teks terbanyak: #8a2d38 (43), #517470 (38), #404040 (34), #f2f1ed (15), #ffffff (11), #000000 (2)
- Background terbanyak: #8a2d38 (18), #eae2dc (14), #f5d89f (12), #ffffff (4), #f6eed7 (2), #73859f @0.5 (2)

### Motion

- AOS: 285 elemen; efek teratas zoom-in (115), fade-up (104), fade-right (34), zoom-out (10), fade-left (10), fade-up-right (5); durasi 400–3500 ms (terbanyak 2000 (57), 1000 (55), 1500 (51)).
- CSS keyframes khas template: animate, goyang, up-down, blink, blink-2; sedang jalan: blink-2×3, animate×3, goyang×43, blink×16, up-down×18.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 44 img + 1 background (format: png 44, jpg 1).
- Ornamen terbesar (px): 2063×3069, 1440×1888, 1024×1732, 1560×960, 1560×824, 1028×1064, 1280×720, 656×1328.
- Foto/upload pengguna tampil: 11 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 3.

