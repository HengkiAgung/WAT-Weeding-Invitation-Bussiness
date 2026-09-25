---
source_url: https://jhonnyjanny.katsudoto.id/
competitor: katsudoto
template: ayyara
katsudoto_id: 22
tags: [minimalist]
released: 2023-03-14
used_count: 4
editable_colors: true
lite_bundle: true
captured_at: 2026-09-25
---
# Ayyara (katsudoto) — analisis desain

## Ringkasan
**Bold sporty / poster**: **hitam arang** (`#1c1c1c`-an) + **merah menyala** (`#c8102e`-an), heading **sans condensed tebal all-caps** (mirip "Bebas Neue/PT Sans Narrow Bold"). Foto dramatis. Blok merah dengan **gradasi garis vertikal**. Tanpa ornamen. Terasa seperti poster film/olahraga. Untuk pasangan yang tidak suka "undangan cantik". Catatan: capture memakai fallback clip (scroll-lock), jadi animasi masuk tidak terekam.

## Layout & alur per section
1. **Cover pembuka**: foto B/W full, nama condensed merah besar, "Dear Mr/Mrs/Ms" (link tanpa kode tamu), tombol putih kotak.
2. **Cover**: foto dengan **overlay garis-garis warna vertikal** (merah/kuning/hijau gelap), "Wedding Invitation", nama putih condensed.
3. **"THE WEDDING OF"** merah + doa bahasa Indonesia; foto mempelai rounded dengan **nama besar menimpa bagian bawah foto**; "&" abu raksasa.
4. **Love story**: **nomor bab besar** ("1", "2") di samping foto, judul caps, teks.
5. **Save the date**: kotak countdown merah solid + tombol outline putih.
6. **Wedding Day**: blok merah besar berisi hari-tanggal condensed; Akad/Resepsi dengan ikon garis merah, tombol merah.
7. **Rundown** (timeline merah), **Galeri**: blok merah bergradasi + foto **berbingkai hitam tebal** bertumpuk vertikal.
8. **Video** (blok merah), **Live streaming**, **Gift** (kartu merah + form putih), **Ucapan** (input putih, tombol merah, "Show More Comments"), **Ayat**, **Penutup** (nama merah + footer merah).

## Aset
- Nol ilustrasi. Overlay garis warna (CSS gradient).

## Tipografi & warna
- Heading: sans condensed bold caps. Body: sans.
- Palet: hitam `#1c1c1c`-an, merah `#c8102e`-an, putih.

## Arah orisinal untuk kita
- Segmen **"anti-mainstream / maskulin"**. Template poster kita: tipografi condensed + palet kustom (hitam-kuning, navy-oranye), **nama menimpa foto**, dan **nomor bab besar** di love story.
- Tanpa aset → murah dan cepat.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 12,517 px ≈ 13.7 layar; 16 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `opening_cover` | 0 | – | fade-up (3), zoom-out (2) | 1 |
| 2 | `cover` | 915 | Jhonny & Janny | fade-up (2), zoom-out (1), zoom-in (1) | 2 |
| 3 | `couple` | 1770 | The Wedding Of / Jhonny Andrean / & | fade-up (6), zoom-in (4), fade-right (1) | 2 |
| 4 | `love_story` | 1447 | Our Love Story / 1 / First Date | fade-up (9), fade-right (2), zoom-in-left (1) | 2 |
| 5 | `save_the_date` | 525 | Save The Date / 0 | fade-up (2), zoom-in (1), fade-down-right (1) | 0 |
| 6 | `event` | 1268 | Wedding Day / Saturday, / Akad Nikah | fade-up (11), zoom-in (1), zoom-out (1) | 0 |
| 7 | `rundown` | 497 | Rundown / Resepsi | – | 0 |
| 8 | `rsvp` | 0 | – | – | 0 |
| 9 | `gallery_photo` | 2170 | Our Gallery | zoom-in (4), zoom-out (1), fade-up (1) | 4 |
| 10 | `gallery_video` | 406 | Our Footage | zoom-out (1), zoom-out-up (1), zoom-in (1) | 2 |
| 11 | `live_streaming` | 574 | Live Streaming | fade-up (3), zoom-in (1) | 1 |
| 12 | `wedding_gift` | 1099 | Wedding Gift / BANK BCA / BANK BCA (014) | zoom-in (1), fade-up (1) | 2 |
| 13 | `wedding_wish` | 1237 | Wedding Wish / Katsudoto / 1 | fade-up (10), fade-right (1) | 0 |
| 14 | `quote` | 260 | – | fade-up (1) | 0 |
| 15 | `footnote` | 246 | Jhonny & Janny | fade-up (3), fade-left (2), fade-right (1) | 0 |

### Tipografi

- Heading: PT Sans Narrow (24), Red Hat Display (15), Roboto (7)
- Body: Red Hat Display (42), Roboto (10), PT Sans Narrow (1)
- Tombol: Roboto (6), Red Hat Display (3)
- Font face termuat: Roboto 400, Roboto 500, Montserrat 500, PT Sans Narrow 700, Red Hat Display 300 900

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#141414` |
| `--background-secondary` | `#971113` |
| `--background-tertiary` | `#B50005` |
| `--text-primary` | `#EC1D23` |
| `--text-secondary` | `#FFFFFF` |
| `--text-tertiary` | `#EDEDED` |
| `--button-text-primary` | `#141414` |
| `--button-background-primary` | `#FFFFFF` |
| `--button-text-secondary` | `#FFFFFF` |
| `--button-background-secondary` | `#971113` |

- Warna teks terbanyak: #ffffff (84), #ec1d23 (14), #141414 (4), #ededed @0.1 (1)
- Background terbanyak: #ffffff (17), #971113 (15), #000000 (5), #141414 (3), #b50005 (2), #73859f @0.5 (2)

### Motion

- AOS: 93 elemen; efek teratas fade-up (54), zoom-in (14), zoom-out (8), fade-right (6), fade-left (4), fade-down (1); durasi 400–2500 ms (terbanyak 1000 (49), 1200 (32), 1500 (7)).
- CSS keyframes khas template: –; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 5 img + 1 background (format: png 3, jpg 2, ? 1).
- Ornamen terbesar (px): 1280×720, 390×844, 377×274, 120×90, 0×0.
- Foto/upload pengguna tampil: 11 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 3.

