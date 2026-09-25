---
source_url: https://tianidimas.katsudoto.id/609544
competitor: katsudoto
template: tiani
katsudoto_id: 16
tags: [adat, minimalist]
released: 2022-09-14
used_count: 2
editable_colors: false
lite_bundle: true
captured_at: 2026-09-25
---
# Tiani (katsudoto) — analisis desain

## Ringkasan
**Songket marun & sage**: krem (`#f3ecdc`-an), **merah marun tua** (`#5e1717`-an), dan **hijau sage abu** (`#4c5b47`-an / `#c5ccb5`-an). **Border tenun/songket berulang** (motif geometris marun/putih) sebagai pembatas section. **Line-art tangan menjangkau** (gaya "Creation of Adam") di section ayat. Heading **script kaligrafi** (nama) + serif tipis (judul). Ada **dua hari acara** (Akad-Resepsi Januari + **Ngunduh Mantu** Juni) dan **catatan pandemi** di section live streaming.

## Layout & alur per section
1. **Cover pembuka**: foto dengan overlay abu, nama script putih, "Hai {tamu}", tombol sage.
2. **Cover**: krem, foto dengan **tepi robek (torn paper)** abu, hashtag, nama script, tanggal, **tombol "E-Invitation"** (bingkai garis), border songket bawah.
3. **Mempelai**: foto **lingkaran berbingkai titik-titik songket marun**, nama script, ortu, pil IG sage.
4. **Save the date**: blok marun + border songket, kotak countdown krem.
5. **Love story**: daftar bab dengan **foto kecil kiri + teks kanan** ("Our Memories", "Our Journey"). **Video**, **Galeri** (grid 2 kolom).
6. **Acara**: blok marun, "It's Wedding Day", tanggal; Akad Nikah & Resepsi; **hari kedua: "Ngunduh mantu"** dengan tanggal & venue berbeda.
7. **Ayat** dengan line-art **dua tangan**; **Rundown** (krem), **RSVP** + **E-Invitation QR**, **Live streaming**, **Filter IG** dengan **teks pandemi** ("Dikarenakan situasi pandemi… kami memohon maaf atas keterbatasan…").
8. **Gift**: rekening + **QR code rekening**; **Ucapan** (latar sage); **Penutup** (sage + border songket + nama script).

## Aset
- Border songket (SVG repeat), line-art tangan, tepi robek. Minim.

## Tipografi & warna
- Heading: script kaligrafi (nama) + serif tipis. Body: serif italic.
- Palet: krem `#f3ecdc`-an, marun `#5e1717`-an, sage `#4c5b47`-an.

## Arah orisinal untuk kita
- **Multi-hari dengan "Ngunduh Mantu"** adalah kebutuhan umum. Schema `events[]` kita sudah mendukung multi-acara; pastikan ada **tipe acara preset** (akad, pemberkatan, resepsi, **ngunduh mantu**, **unduh mantu**, teh pai, sangjit, siraman, midodareni) + label i18n.
- **Catatan khusus/himbauan** per section (contoh pandemi): field opsional `note` di live streaming/events.
- Border tekstil sebagai divider: pola berulang di banyak template (lihat ruri, sintia, katrina).

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 12,742 px ≈ 13.9 layar; 17 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 975 | Tiani & Dimas | fade-up (4), zoom-out (3), zoom-in (1) | 3 |
| 2 | `couple` | 1517 | The Wedding of / Dimas Syahputra / & | fade-up (8), zoom-in (4), fade-right (2) | 3 |
| 3 | `save_the_date` | 548 | Save The Date / 0 | fade-up (6), zoom-out (2), zoom-in (1) | 1 |
| 4 | `love_story` | 826 | Our Story / Our Memories / Our Journey | fade-left (4), fade-up (3), fade-right (2) | 3 |
| 5 | `gallery_video` | 629 | 1 + 1 | fade-up (2) | 1 |
| 6 | `gallery_photo` | 766 | Galery Photo | fade-up (3), zoom-out (1) | 6 |
| 7 | `event` | 1912 | It's Wedding Day / Saturday / Akad Nikah | fade-up (27), zoom-in (1) | 2 |
| 8 | `quote` | 745 | – | zoom-out (1), fade-up (1) | 1 |
| 9 | `rundown` | 498 | Rundown / Resepsi | zoom-out (1) | 1 |
| 10 | `rsvp` | 1014 | RSVP / Will Attend | fade-up (5), zoom-in (1) | 1 |
| 11 | `live_streaming` | 265 | Live Streaming | zoom-in (1), fade-up (1) | 0 |
| 12 | `filter_instagram` | 495 | Wedding Filter | fade-up (3) | 0 |
| 13 | `wedding_gift` | 1089 | Wedding Gift / BANK BRI / BANK BRI (002) | zoom-in (1), fade-up (1) | 3 |
| 14 | `wedding_wish` | 830 | Wedding Wish / Katsudoto / Lisa | fade-up (5), zoom-out (2) | 2 |
| 15 | `greet_thanks` | 273 | Thank You | – | 0 |
| 16 | `footnote` | 339 | Tiani & Dimas | zoom-out (1), fade-right (1), fade-left (1) | 1 |

### Tipografi

- Heading: Viaoda Libre (18), EB Garamond (11), Bonheur Royale (5), Raleway SemiBold (4)
- Body: EB Garamond (42), Viaoda Libre (2), Raleway (1)
- Tombol: EB Garamond (6)
- Font face termuat: Roboto 400, Raleway Bold 400, Montserrat 500, Bonheur Royale 400, EB Garamond 400, EB Garamond 500, EB Garamond 400 italic, Viaoda Libre 400, Raleway 400, Raleway Light 400, Raleway SemiBold 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#fff` |
| `--background-secondary` | `#fff` |
| `--background-tertiary` | `#fff` |
| `--text-primary` | `#000` |
| `--text-secondary` | `#000` |
| `--text-tertiary` | `#000` |
| `--button-text-primary` | `#fff` |
| `--button-background-primary` | `#000` |
| `--button-text-secondary` | `#fff` |
| `--button-background-secondary` | `#000` |

- Warna teks terbanyak: #000000 (39), #f1ead8 (21), #030303 (17), #ffffff (9), #000000 @0.5 (4), #000000 @0.25 (1)
- Background terbanyak: #f1ead8 (11), #ffffff (10), #465644 (5), #c4c9b2 (5), #800000 (5), #e7ebe9 (5)

### Motion

- AOS: 110 elemen; efek teratas fade-up (72), zoom-out (15), zoom-in (10), fade-left (7), fade-right (5), fade-down (1); durasi 400–2000 ms (terbanyak 1000 (50), 1200 (37), 1500 (22)).
- CSS keyframes khas template: –; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 10 img + 7 background (format: png 13, jpg 2, jpeg 1, ? 1).
- Ornamen terbesar (px): 2200×2228, 840×1170, 2442×276, 2211×250, 2211×250, 444×600, 500×271, 377×274.
- Foto/upload pengguna tampil: 12 (termasuk GIF: 0).
- Video embed: 0; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 8.

