---
source_url: https://kenannabelle.katsudoto.id/190005
competitor: katsudoto
template: anabelle
katsudoto_id: 45
tags: [minimalist]
released: 2025-04-17
used_count: 8
editable_colors: true
captured_at: 2026-09-25
---
# Anabelle (katsudoto) — analisis desain

## Ringkasan
**Photo-first, playful-modern / "Korean prewed casual"**: cover foto full-bleed dengan overlay teal, **font display bulat tebal** (bubbly, mirip "Chango/Bagel") untuk heading, pola **papan catur hijau-putih**, dan palet **hijau botol tua** + **pink salmon** + krem. Dekorasi minim: bintang kilau garis, bunga kuning kecil, dan badge bergerigi. Ilustrasi sedikit, jadi ringan. Cocok untuk prewed candid.

## Layout & alur per section
1. **Cover pembuka**: foto pasangan full-bleed dengan tint teal, nama display krem besar, bintang kilau, "Hai {tamu}", dan **tombol pil lebar** pink bergaris hijau.
2. **Cover**: foto dengan **tepi bawah bergelombang (scalloped)** + bunga kuning, monogram, nama display pink, hashtag, dan strip **checkerboard**.
3. **Quote** di blok pink + bintang kilau. **Love story**: dropdown pemilih bab ("First Meet") + foto dalam **frame hijau tebal membulat**.
4. **Mempelai**: foto dalam **bingkai berbentuk bunga/cloud (lobed)** bergaris pink, nama display hijau, ortu pink, **pil IG** bergaris, dan badge bergerigi hijau.
5. **Save the date**: kartu pink dengan tepi atas bergelombang, countdown kotak pink bergaris, tombol hijau.
6. **Galeri "Potraits of Love"**: carousel foto dengan frame hijau + peek. **Video**.
7. **Acara**: kartu pink bertepi scalloped, ikon cincin garis, **tanggal angka besar** (20) di antara hari & bulan, dan jam pink.
8. **Dresscode**: blok **hijau tua bertepi scalloped** + kartu ikon putih + dot warna.
9. **Rundown**: kartu pink + timeline titik. **RSVP**: kartu bergaris hijau dengan sudut membulat.
10. **Live streaming**, **Gift**: dropdown + **kartu rekening berbingkai checkerboard** + tombol copy hijau, form input pil. **Kado** (alamat berbingkai checker, produk).
11. **Filter IG**, **Ucapan** (kartu dengan bayangan offset hijau + badge bergerigi), **Terima kasih**, **Penutup**: foto full + tint hijau + nama display + tanggal; footer hijau tua.

## Aset
- Hampir tanpa ilustrasi besar: bintang kilau, bunga kuning kecil, badge bergerigi, dan pola checker. Foto yang jadi bintang.
- Bentuk: scalloped, lobed frame, dan checker border.

## Animasi & interaksi
- AOS ringan. Dropdown pemilih cerita (bukan slider). Carousel galeri.

## Tipografi & warna
- Heading: display bubbly tebal (all-caps kecil-besar campur). Body: sans geometris.
- Palet: krem `#fdf6e3`-an, hijau botol `#0f5132`-an, pink salmon `#f4d5cc`-an / `#e0566b`-an teks.

## Arah orisinal untuk kita
- **Template "photo-first ringan"**: murah dibuat, cepat dimuat, dan cocok untuk prewed candid. Kita perlu minimal satu template seperti ini untuk tier murah.
- Pola layak diadopsi:
  - **cover foto full-bleed + tint warna tema** (CSS `mix-blend`/overlay);
  - **tanggal angka besar**;
  - **dropdown pemilih bab cerita** (alternatif slider yang aksesibel);
  - border checker/scalloped via CSS.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 13,405 px ≈ 14.7 layar; 18 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 756 | Ken & Anabelle | fade-up (3), fade-down (2), zoom-in-up (1) | 5 |
| 2 | `quote` | 371 | – | fade-up (5) | 4 |
| 3 | `love_story` | 730 | Our Love Story / First Meet / We're Forever | fade-up (6), zoom-in (3) | 2 |
| 4 | `couple` | 1730 | The Wedding of / Ken Aprilio / & | fade-up (11), zoom-in (9), zoom-out (4) | 9 |
| 5 | `save_the_date` | 688 | Save The Date / 0 | fade-up (3), zoom-in (2), fade-down-right (1) | 5 |
| 6 | `gallery_photo` | 592 | Potraits of Love | zoom-in (4), zoom-out (1), fade-up (1) | 15 |
| 7 | `gallery_video` | 383 | Our Footage / The Pre-wedding | zoom-out (1), zoom-out-up (1), zoom-in (1) | 2 |
| 8 | `event` | 1725 | It's Wedding Day / Akad Nikah / Saturday, | fade-up (18), zoom-in (9) | 12 |
| 9 | `rundown` | 502 | Rundown / Resepsi | – | 0 |
| 10 | `rsvp` | 487 | RSVP / Will Attend | fade-up (2), zoom-in (1) | 0 |
| 11 | `live_streaming` | 394 | Live Streaming | fade-up (2), zoom-in (1) | 1 |
| 12 | `wedding_gift` | 1725 | Wedding Gift / BANK BRI / BANK BRI (002) | zoom-in (4), fade-up (2) | 7 |
| 13 | `filter_instagram` | 754 | Wedding Filter | fade-up (4) | 1 |
| 14 | `wedding_wish` | 1206 | Wedding Wish / Katsudoto | fade-up (11), zoom-in (6) | 0 |
| 15 | `greet_thanks` | 238 | Thank You | – | 0 |
| 16 | `footnote` | 804 | Ken&Anabelle | fade-up (6), zoom-out (5) | 8 |

### Tipografi

- Heading: Luckiest Guy (30), Fredoka (22), Roboto (12)
- Body: Fredoka (67), Roboto (16), Montserrat (2)
- Tombol: Roboto (14), Fredoka (6)
- Font face termuat: Roboto 400, Roboto 500, Montserrat 500, Montserrat 100 900, Fredoka 300 700, Luckiest Guy 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#FFF8E6` |
| `--background-secondary` | `#F6DBD0` |
| `--background-tertiary` | `#01512A` |
| `--text-primary` | `#E9657D` |
| `--text-secondary` | `#01512A` |
| `--text-tertiary` | `#FFF8E6` |
| `--button-text-primary` | `#FFF8E6` |
| `--button-background-primary` | `#01512A` |
| `--button-text-secondary` | `#01512A` |
| `--button-background-secondary` | `#F6DBD0` |

- Warna teks terbanyak: #01512a (69), #e9657d (35), #fff8e6 (15), #ffffff (14), #000000 (2)
- Background terbanyak: #f6dbd0 (28), #01512a (21), #fff8e6 (15), #f6eed7 (4), #01512a @0.2 (4), #ffffff (3)

### Motion

- AOS: 144 elemen; efek teratas fade-up (81), zoom-in (42), zoom-out (12), fade-down (2), zoom-in-up (1), fade-down-right (1); durasi 400–2000 ms (terbanyak 1000 (66), 1200 (39), 2000 (31)).
- CSS keyframes khas template: goyang, slowRotate, twinkle, twinkle-2, cloud-left, cloud-right; sedang jalan: goyang×8, twinkle×20, slowRotate×10, cloud-left×1.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 20 img + 1 background (format: png 18, jpg 2, ? 1).
- Ornamen terbesar (px): 1122×2149, 1122×1467, 1200×600, 640×480, 480×360, 312×516, 345×464, 377×274.
- Foto/upload pengguna tampil: 23 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 20.

