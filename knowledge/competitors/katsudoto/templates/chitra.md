---
source_url: https://chitrasandi.katsudoto.id/970223
competitor: katsudoto
template: chitra
katsudoto_id: 15
tags: [minimalist]
released: 2022-08-14
used_count: 23
editable_colors: true
captured_at: 2026-09-25
---
# Chitra (katsudoto) — analisis desain

## Ringkasan
**Clean sage-grey modern**: latar **putih kehijauan pucat** (`#eef2ee`-an), blok **abu-sage gelap** (`#5d6a58`-an) dengan **gradasi**, kartu putih ber-**bayangan lembut** (elevasi). Heading **condensed serif/sans tinggi** (mirip "Oswald Light") + **script signature** untuk judul. Tombol **pil outline**. **Jam acara dalam kapsul kecil**. Nol ornamen. Modern dan mudah dipakai. Populer untuk kategori minimalis (23).

## Layout & alur per section
1. **Cover pembuka**: foto full redup, nama script besar putih, "Hai {tamu}", tombol pil sage gelap.
2. **Cover**: foto full, "WEDDING INVITATION" caps berspasi, nama script, tanggal caps berspasi, **tombol "E-Invitation"**.
3. **Mempelai**: kartu putih ber-shadow, foto lingkaran, nama condensed besar, ortu, **pil IG outline**.
4. **Ayat** (blok sage), **Love story**: kartu foto dengan **overlay gradasi sage** + judul script + teks, slider garis.
5. **Galeri**: foto utama besar + **strip thumbnail rounded**. **Video** ("The Happiest Moments").
6. **Save the date**: 4 kotak outline, tombol "+ Add to Calendar". **Acara**: pil gradasi sage berisi hari script + tanggal; **3 acara** (Akad, Resepsi, **Night Party**) dengan **jam dalam kapsul outline**.
7. **Rundown**, **RSVP**: kartu sage dengan **E-Invitation QR** + "Download E-Invitation", status "Will Attend" + "Thank you love! see you on our wedding day?".
8. **Filter IG**, **Gift** (kartu sage gradasi dengan **QR rekening**), **Ucapan** (input + tombol "Send ✈" menempel), **Penutup** (blok sage + nama script).

## Aset
- Nol ilustrasi. Gradasi CSS + shadow.

## Tipografi & warna
- Heading: condensed + script signature. Body: sans geometris (mirip "Outfit").
- Palet: putih-hijau `#eef2ee`-an, sage gelap `#5d6a58`-an, abu.

## Arah orisinal untuk kita
- Template **"UI modern"** dengan kartu elevasi & kapsul jam terasa seperti aplikasi. Cocok untuk milenial. Mudah dibangun di atas `W.ui` kita (satu CSS).
- Detail layak diadopsi:
  - **jam dalam kapsul**;
  - **input + tombol kirim menempel** (satu komponen);
  - **acara ke-3 "After Party"** sebagai tipe preset.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 10,687 px ≈ 11.7 layar; 14 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Chitra & Sandi | fade-up (3), zoom-in (1), fade-down (1) | 1 |
| 2 | `couple` | 1394 | The Wedding of / Sandi Priagung / & | fade-up (7), zoom-in (4) | 2 |
| 3 | `quote` | 287 | – | fade-up (1) | 0 |
| 4 | `love_story` | 708 | Our Story / Our Memories / Our Journey | fade-up (5) | 0 |
| 5 | `gallery_photo` | 849 | Galery Photo | fade-left (5), fade-up (4) | 10 |
| 6 | `gallery_video` | 449 | The Happiest Moments | zoom-out (1), zoom-out-up (1), zoom-in (1) | 2 |
| 7 | `save_the_date` | 469 | Save The Date / 0 | fade-up (6), zoom-out (1), zoom-in (1) | 0 |
| 8 | `event` | 1013 | The Wedding Day / Saturday / Akad Nikah | fade-up (14), zoom-in (1) | 0 |
| 9 | `rundown` | 449 | Rundown / Resepsi | – | 0 |
| 10 | `rsvp` | 780 | RSVP / Will Attend | fade-up (4), zoom-in (1) | 1 |
| 11 | `filter_instagram` | 334 | Wedding Filter | fade-up (3) | 0 |
| 12 | `wedding_gift` | 1033 | Wedding Gift / BANK BCA / BANK BCA (014) | zoom-in (1), fade-up (1) | 3 |
| 13 | `wedding_wish` | 1125 | Wedding Wish / Katsudoto / Nora | fade-up (10) | 0 |
| 14 | `greet_thanks` | 244 | Thank You | – | 0 |
| 15 | `footnote` | 318 | Chitra & Sandi | fade-up (2) | 0 |

### Tipografi

- Heading: Instrument Serif (14), Creattion Demo (10), Visia Pro Heavy (10), Roboto (8)
- Body: Visia Pro SemiBold (23), Visia Pro Light (12), Roboto (10), Visia Pro Bold (8)
- Tombol: Visia Pro SemiBold (6), Roboto (4), Visia Pro ExtraBold (1)
- Font face termuat: Roboto 400, Instrument Serif 400, Montserrat 500, Creattion Demo 400, Visia Pro Bold 400, Visia Pro SemiBold 400, Visia Pro ExtraBold 400, Visia Pro Heavy 400, Visia Pro Light 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#53594A` |
| `--background-secondary` | `#919B8D` |
| `--background-tertiary` | `#EEF3F1` |
| `--text-primary` | `#3F3F3F` |
| `--text-secondary` | `#FFFFFF` |
| `--text-tertiary` | `#000000` |
| `--button-text-primary` | `#FFFFFF` |
| `--button-background-primary` | `#53594A` |
| `--button-text-secondary` | `#53594A` |
| `--button-background-secondary` | `#FFFFFF` |

- Warna teks terbanyak: #3f3f3f (61), #ffffff (31), #53594a (7), #000000 @0.5 (6), #ffffff @0.5 (2), #3f3f3f @0.25 (1)
- Background terbanyak: #919b8d (11), #53594a (6), #ffffff (4), #eef3f1 (4), #73859f @0.5 (2), #ffffff @0.5 (1)

### Motion

- AOS: 84 elemen; efek teratas fade-up (62), zoom-in (10), zoom-out (5), fade-left (5), fade-down (1), zoom-out-up (1); durasi 400–2000 ms (terbanyak 1000 (49), 1200 (29), 1500 (5)).
- CSS keyframes khas template: –; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 4 img + 1 background (format: png 2, jpg 1, jpeg 1, ? 1).
- Ornamen terbesar (px): 840×1170, 1280×720, 377×274, 0×0.
- Foto/upload pengguna tampil: 15 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 4.

