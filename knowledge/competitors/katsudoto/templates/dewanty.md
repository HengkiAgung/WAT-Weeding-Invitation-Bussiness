---
source_url: https://pashadewanty.katsudoto.id/905033
competitor: katsudoto
template: dewanty
katsudoto_id: 20
tags: [fairytale]
released: 2023-01-14
used_count: 3
editable_colors: false
lite_bundle: true
captured_at: 2026-09-25
---
# Dewanty (katsudoto) — analisis desain

## Ringkasan
**Noir-romantis "red rose"**: hitam pekat + **merah darah/marun** (`#5a0000`-an) + **krem-emas** (`#f5e6c4`-an). Latar **kelopak mawar merah kabur** (bokeh) di balik blok, **bingkai garis emas dengan sudut dipotong (chamfer)** + bintang kilau 4 sudut, **mahkota filigri emas** kecil. Heading serif klasik krem. Dramatis, elegan-gelap, seperti film romantis. Foto prewed bernuansa merah-hitam.

## Layout & alur per section
1. **Cover pembuka**: foto B/W full, nama serif krem besar, "Hai {tamu}", tombol **kotak marun** teks emas.
2. **Cover**: latar batu kelabu, nama **script** krem, foto dalam **bingkai bergaris putih melengkung/berkerawang** + kilau, tanggal spasi.
3. **Pembukaan** (doa bahasa Indonesia) + **Mempelai**: foto dalam **arch bergaris tipis** + kilau, **kelopak mawar melayang**, nama serif krem, ortu, tombol IG merah.
4. **Love story** (latar marun, foto bundar + teks), **Save the date**: **kartu marun bentuk arch dengan sudut berlekuk** + filigri, kotak countdown krem, tombol emas.
5. **Galeri** (mosaik rapat di latar hitam), **Video**, **Acara**: filigri mahkota emas, tanggal dengan garis emas, ikon garis emas.
6. **Rundown**, **RSVP** (kartu **kaca buram** di atas mawar kabur), **Live streaming**, **Filter IG**.
7. **Gift**: kartu marun dengan **bingkai garis emas bersudut chamfer** + bintang di sudut. **Ucapan**: input krem + tombol **Send ✈** (ikon pesawat). **Penutup** (bingkai chamfer, nama, tanggal).

## Aset
- Foto mawar/kelopak bokeh, filigri mahkota, bintang kilau, bingkai garis chamfer (CSS), dan kelopak melayang.

## Animasi & interaksi
- Kelopak mawar melayang. Kaca buram. AOS.

## Tipografi & warna
- Heading: serif klasik (+ script di cover). Body: serif.
- Palet: hitam `#0b0b0b`-an, marun `#5a0000`-an, krem-emas `#f5e6c4`-an.

## Arah orisinal untuk kita
- **Bingkai garis bersudut chamfer + bintang kilau** murah (CSS `clip-path` + pseudo-element) dan terasa "premium". Tambahkan ke pustaka frame `_core`.
- Palet merah-hitam cocok untuk pasangan Tionghoa-Indonesia modern juga (merah = keberuntungan).

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 11,553 px ≈ 12.6 layar; 15 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Pasha & Dewanty | fade-down (2), zoom-in (1), zoom-out (1) | 1 |
| 2 | `couple` | 1706 | The Wedding Of / Pasha Aditya / & | zoom-in (22), fade-up (7) | 6 |
| 3 | `love_story` | 693 | Our Story / We're Forever / First Date | fade-up (10), zoom-in (3) | 5 |
| 4 | `save_the_date` | 624 | Save The Date / 0 | fade-up (6), fade-down (1), zoom-out (1) | 0 |
| 5 | `gallery_photo` | 908 | Gallery Of Us | zoom-in (6), fade-up (1), zoom-out (1) | 6 |
| 6 | `gallery_video` | 417 | Video Gallery | zoom-out (1), zoom-out-up (1), zoom-in (1) | 2 |
| 7 | `event` | 1198 | Wedding Day / Saturday, January 25th 2025 / Akad Nikah | fade-up (14), fade-down (2), zoom-in (1) | 0 |
| 8 | `rundown` | 462 | Rundown / Resepsi | – | 0 |
| 9 | `rsvp` | 448 | RSVP / Will Attend | fade-up (2), zoom-in (1) | 0 |
| 10 | `live_streaming` | 472 | Live Streaming | fade-up (2), zoom-in (1) | 1 |
| 11 | `filter_instagram` | 758 | Wedding Filter | zoom-in (5), fade-up (4) | 1 |
| 12 | `wedding_gift` | 882 | Wedding Gift / BANK BCA / BANK BCA (014) | fade-up (13), fade-down-right (1), fade-up-right (1) | 2 |
| 13 | `wedding_wish` | 1178 | Wedding Wish / Katsudoto / Zahwa & Partner | fade-up (10) | 0 |
| 14 | `quote` | 282 | – | fade-up (1) | 0 |
| 15 | `footnote` | 293 | Pasha & Dewanty | fade-down-right (1), fade-up-right (1), fade-down-left (1) | 0 |

### Tipografi

- Heading: Ibarra Real Nova (26), Gilda Display (16), Roboto (7), Flowatt (1)
- Body: Gilda Display (46), Roboto (12)
- Tombol: Roboto (6), Gilda Display (5)
- Font face termuat: Roboto 400, Montserrat 500, Ibarra Real Nova 400, Ibarra Real Nova 500, Ibarra Real Nova 600, Gilda Display 400, Flowatt 400

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

- Warna teks terbanyak: #f9f0e0 (53), #e5c68e (32), #4f0600 (13), #ffffff (12), #f9f0e0 @0.5 (2)
- Background terbanyak: #f9f0e0 (12), #4f0600 (12), #010101 (9), #ffffff (8), #010101 @0.2 (5), #e5c68e (3)

### Motion

- AOS: 143 elemen; efek teratas fade-up (74), zoom-in (43), zoom-out (7), fade-down (6), fade-down-right (3), fade-up-right (3); durasi 400–2000 ms (terbanyak 1000 (61), 1200 (58), 1500 (23)).
- CSS keyframes khas template: –; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 5 img + 16 background (format: png 17, jpg 3, ? 1).
- Ornamen terbesar (px): 1280×720, 377×274, 1045×48, 120×90, 0×0.
- Foto/upload pengguna tampil: 16 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor tidak, inline SVG 3.

