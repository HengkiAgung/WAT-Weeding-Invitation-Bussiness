---
source_url: https://juliakevin.katsudoto.id/552440
competitor: katsudoto
template: aile
katsudoto_id: 44
tags: [minimalist, vintage]
released: 2025-04-07
used_count: 12
editable_colors: true
captured_at: 2026-09-25
---
# Aile (katsudoto) — analisis desain

## Ringkasan
**Editorial vintage / "magazine grid"**: latar **kertas milimeter (grid biru muda)** di atas krem, garis margin merah vertikal seperti buku tulis, **serif display condensed tinggi** berwarna **merah anggur** (`#9b1c2c`-an), dan bintang kilau 4 sudut. Tanpa ornamen bunga, hanya bentuk geometris (lingkaran, arch, oval bergaris ganda). Foto film/analog. Terasa seperti majalah fashion 60-an.

## Layout & alur per section
1. **Cover pembuka**: grid milimeter, nama serif condensed besar rata kiri di atas, foto potret besar (motion blur/analog), bintang di margin, "Hai {tamu}", **tombol oval bergaris ganda** dengan titik di kedua ujung.
2. **Cover**: foto full + **setengah lingkaran merah besar** di bawah berisi monogram inisial serif, nama, dan hashtag.
3. **Quote**: lingkaran merah besar (quote di dalam), lalu "The Wedding of".
4. **Mempelai**: foto persegi, nama serif besar, garis bawah, ortu, **pil IG bergaris**, "+ & +".
5. **Save the date**: **lingkaran pink besar** berisi countdown dalam kotak bergaris.
6. **Acara "Wedding Day!"**: kartu **arch bergaris** di atas grid, tanggal besar serif, Akad & Resepsi, dan tombol oval.
7. **Dresscode**: tabel 2 kolom bergaris (Men | Women) + ikon + dot warna. **Rundown**: timeline titik.
8. **RSVP**: "+ RSVP +" dengan tombol oval.
9. **Love story**: blok merah full, carousel 3 foto + panah bulat, teks 2 kolom (label kiri, isi kanan).
10. **Galeri**: judul dalam **oval bergaris**, foto + indikator titik. **Video**, **Live streaming** (setengah lingkaran merah).
11. **Gift**: dropdown oval, rekening + copy, form garis bawah. **Kado**: carousel produk.
12. **Filter IG**, **Ucapan** (judul + garis panjang), **Terima kasih**, **Penutup**: grid, nama serif, foto berjalan, tanggal; footer merah.

## Aset
- Praktis nol ilustrasi: grid milimeter (CSS background), bintang kilau, dan bentuk geometris (lingkaran, arch, oval bergaris). Semua bisa CSS.

## Animasi & interaksi
- AOS sederhana. Carousel love story & kado dengan panah bulat.

## Tipografi & warna
- Heading: serif condensed display (mirip "Gloock/Instrument Serif" condensed). Body: sans kecil.
- Palet: krem `#fdf6ec`-an + grid `#cfe0ee`-an, merah anggur `#9b1c2c`-an, pink muda.

## Arah orisinal untuk kita
- **Template editorial super-ringan** (hampir 0 aset) sangat efisien untuk tier murah dan loading cepat. Versi kita: **"Koran / Majalah"**: kolom teks bergaya surat kabar, tipografi serif condensed, palet biru tinta atau hijau.
- Pola layak diadopsi:
  - **tombol oval bergaris ganda**;
  - geometri besar (setengah lingkaran berwarna) sebagai "ornamen";
  - background grid CSS;
  - love story teks 2 kolom.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 11,751 px ≈ 12.8 layar; 15 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Julia & Kevin | fade-down (2), zoom-out (1), zoom-in (1) | 2 |
| 2 | `quote` | 386 | – | fade-up (3) | 0 |
| 3 | `couple` | 1182 | The Wedding of / Kevin Marcello / & | fade-up (8), zoom-in (2) | 2 |
| 4 | `save_the_date` | 644 | Save The Date / 0 | zoom-in (5), fade-down-right (1), fade-down-left (1) | 0 |
| 5 | `event` | 1395 | Wedding Day! / Saturday, / 09 August 2025 | fade-up (13), zoom-in (5) | 2 |
| 6 | `rundown` | 491 | Rundown / Resepsi | – | 0 |
| 7 | `rsvp` | 380 | RSVP / Will Attend | fade-up (2), zoom-in (1) | 0 |
| 8 | `love_story` | 672 | Our Story / We're Forever / First Meet | fade-up (10), zoom-in (6) | 5 |
| 9 | `gallery_photo` | 650 | Our Gallery | fade-up (3), zoom-in (1) | 10 |
| 10 | `gallery_video` | 442 | Our Footage / The Pre-Wedding | zoom-in (3), zoom-out (1), zoom-out-up (1) | 2 |
| 11 | `live_streaming` | 520 | Live Streaming | fade-up (3), zoom-in (1) | 1 |
| 12 | `wedding_gift` | 1511 | Wedding Gift / BANK MANDIRI / BANK MANDIRI (008) | fade-up (10), zoom-in (4) | 7 |
| 13 | `filter_instagram` | 815 | Wedding Filter | fade-up (4) | 1 |
| 14 | `wedding_wish` | 448 | Wedding Wish / Katsudoto | fade-up (7) | 0 |
| 15 | `greet_thanks` | 250 | Thank You | – | 0 |
| 16 | `footnote` | 732 | Julia & Kevin | zoom-out (6), zoom-in (2), fade-down (1) | 2 |

### Tipografi

- Heading: Viaoda Libre (29), Fustat (21), Roboto (9)
- Body: Fustat (81), Roboto (20), Montserrat (2)
- Tombol: Roboto (15), Fustat (9)
- Font face termuat: Roboto 300, Roboto 400, Roboto 500, Montserrat 500, Montserrat 100 900, Fustat 200 800, Viaoda Libre 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#FFF6E7` |
| `--background-secondary` | `#95212D` |
| `--background-tertiary` | `#F1DDD4` |
| `--text-primary` | `#95212D` |
| `--text-secondary` | `#FFF6E7` |
| `--text-tertiary` | `#95212D` |
| `--button-text-primary` | `#95212D` |
| `--button-background-primary` | `#FFF6E7` |
| `--button-text-secondary` | `#95212D` |
| `--button-background-secondary` | `#F0DCD1` |

- Warna teks terbanyak: #95212d (60), #95212d @0.75 (39), #fff6e7 (19), #ffffff (19)
- Background terbanyak: #fff6e7 (17), #95212d (16), #fff6e7 @0.2 (8), #f0dcd1 (6), #fafafa (3), #fffde7 (2)

### Motion

- AOS: 120 elemen; efek teratas fade-up (70), zoom-in (33), zoom-out (9), fade-down (3), fade-down-right (1), fade-down-left (1); durasi 400–2000 ms (terbanyak 1000 (64), 1200 (47), 1500 (4)).
- CSS keyframes khas template: twinkle, twinkle-2; sedang jalan: twinkle×13, twinkle-2×1.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 8 img + 2 background (format: png 7, jpg 2, ? 1).
- Ornamen terbesar (px): 1280×720, 1280×720, 1200×600, 377×274, 255×170, 96×96, 96×96, 0×0.
- Foto/upload pengguna tampil: 28 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 47.

