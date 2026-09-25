---
source_url: https://weddingnadyarozi.katsudoto.id
competitor: katsudoto
template: nadya
katsudoto_id: 11
tags: [minimalist]
released: 2022-04-14
used_count: 0
editable_colors: true
lite_bundle: true
captured_at: 2026-09-25
---
# Nadya (katsudoto) — analisis desain

## Ringkasan
**Navy malam + origami bangau (2021)**: **navy tinta** (`#0f1a3a`-an) dengan **noda cat air biru royal**, aksen **emas** (`#d4a85a`-an). Ornamen **bangau origami menggantung** (line-art emas; ikut tema foto prewed dengan instalasi 1.000 bangau), **sudut filigri emas**, dan **bingkai foto garis emas dengan titik di sudut** (seperti bounding box). Heading **script kaligrafi emas tebal** (mirip "Great Vibes"). **Banyak kutipan** berselang dengan foto (Zelda Fitzgerald, Mignon McLaughlin, Daisaku Ikeda, Shania Twain). Kredit fotografer di cover.

## Layout & alur per section
1. **Cover pembuka**: foto (instalasi bangau kertas), nama script putih, "Dear Mr/Mrs/Ms", tombol navy, **kredit fotografer** di bawah.
2. **Cover**: navy + bangau menggantung, nama script emas, tanggal, **foto B/W dalam sudut filigri emas**.
3. **Mempelai**: foto dalam **bingkai garis emas + titik sudut**, nama lengkap + gelar ("S.Ked", "dr."), ortu dengan gelar panjang, IG.
4. **Rangkaian foto + kutipan** (5–6 kutipan berselang foto rounded dengan fade gelap).
5. **Save the date**: kotak countdown putih rounded, tombol emas. **Acara**: hari script emas, tanggal serif, Akad/Resepsi script emas, lantai venue ("1st floor"), tombol emas.
6. **Gift**: kartu putih + **QR rekening** + form, tombol emas. **Ucapan** (input putih, "Show more comments" emas). **Ayat** dengan bangau. **Penutup** (nama script emas).

## Aset
- Line-art bangau origami menggantung, filigri emas, noda cat air biru, bingkai garis emas (CSS).

## Tipografi & warna
- Heading: script kaligrafi emas. Body: serif (EB Garamond).
- Palet: navy `#0f1a3a`-an, biru royal (noda), emas `#d4a85a`-an, putih.

## Arah orisinal untuk kita
- **Ornamen yang mengikuti tema foto prewed** (bangau origami) → template dengan **"motif pilihan"** (user memilih 1 dari set ikon: bangau, kupu-kupu, daun, bintang, melati) yang ditaburkan di header section. Satu template, banyak personalisasi, murah (SVG sprite + recolor).
- **Kutipan berselang foto** sebagai section "moments": galeri naratif. Schema: `gallery[].caption` opsional.
- **Kredit fotografer** di cover (`credits.photographer`) → nilai untuk kerja sama vendor/WO (mitra).

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 9,569 px ≈ 10.5 layar; 13 frame.
- Bahasa demo: `en`. Scroller: `kat-page__solo-pane`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 1039 | Nadya & Rozi | fade-down (8), zoom-in (2) | 3 |
| 2 | `couple` | 1243 | dr. Ahmad Fakhrurozi Lubis / Nadya Putri Salsabila, S.Ked | fade-up (7), zoom-out (3), zoom-in (2) | 2 |
| 3 | `love_story` | 2740 | – | fade-up (10), zoom-out (5) | 5 |
| 4 | `save_the_date` | 567 | Save The Date / 0 | fade-up (2), zoom-in (1), zoom-out (1) | 0 |
| 5 | `event` | 1015 | Wedding Day / Sunday October 10th, 2021 / Sunday | fade-up (12), zoom-in (3) | 3 |
| 6 | `rsvp` | 0 | – | – | 0 |
| 7 | `wedding_gift` | 1205 | Wedding Gift Your blessing and coming to our wedding are eno / Wedding | fade-up (1), zoom-in-down (1), zoom-in (1) | 2 |
| 8 | `wedding_wish` | 1171 | Wedding Wish | fade-up (9), fade-down (2) | 0 |
| 9 | `footnote` | 544 | Nadya & Rozi | fade-up (2), zoom-in (1) | 0 |

### Tipografi

- Heading: Pinyon Script (8), Cormorant Garamond (8), Roboto (3)
- Body: Cormorant Garamond (42), Ebrima Bold (6), Pinyon Script (1)
- Tombol: Cormorant Garamond (3)
- Font face termuat: Roboto 400, Roboto 500, Roboto 700, Montserrat 500, Ebrima Bold 400, Cormorant Garamond 400, Cormorant Garamond 500, Cormorant Garamond 600, Cormorant Garamond 700, Cormorant Garamond 400 italic, Pinyon Script 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#050D29` |
| `--background-secondary` | `#FFFFFF` |
| `--background-tertiary` | `#FCB765` |
| `--text-primary` | `#FAFAFA` |
| `--text-secondary` | `#FCB765` |
| `--text-tertiary` | `#050D29` |
| `--button-text-primary` | `#FAFAFA` |
| `--button-background-primary` | `#1A2B3F` |
| `--button-text-secondary` | `#FAFAFA` |
| `--button-background-secondary` | `#D5AF6F` |

- Warna teks terbanyak: #fafafa (45), #050d29 (17), #fcb765 (7), #050d29 @0.5 (1)
- Background terbanyak: #ffffff (14), #050d29 (12), #d5af6f (5), #fafafa @0.8 (4), #fafafa (1)

### Motion

- AOS: 78 elemen; efek teratas fade-up (44), fade-down (11), zoom-in (10), zoom-out (9), fade-up-right (1), fade-down-right (1); durasi 400–1500 ms (terbanyak 1000 (73), 1200 (3), 400 (1)).
- CSS keyframes khas template: zooming; sedang jalan: zooming×3.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 1 img + 13 background (format: png 13, ? 1).
- Ornamen terbesar (px): 0×0.
- Foto/upload pengguna tampil: 14 (termasuk GIF: 0).
- Video embed: 0; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor tidak, inline SVG 3.

