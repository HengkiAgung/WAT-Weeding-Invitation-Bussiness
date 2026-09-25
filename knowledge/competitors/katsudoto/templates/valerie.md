---
source_url: https://valeriejames.katsudoto.id/173463
competitor: katsudoto
template: valerie
katsudoto_id: 47
tags: [floral]
released: 2025-06-19
used_count: 2
editable_colors: true
lite_bundle: true
captured_at: 2026-09-25
---
# Valerie (katsudoto) — analisis desain

## Ringkasan
**Retro-coquette / Y2K pastel**: pola kisi (lattice) pink, **bola disko** berpita kuning, **ceri merah berpita**, bunga cat air pink-oranye (lili, kosmos, tulip), dan bintang kilau 4 sudut. Heading **script retro tebal** (mirip font 70-an) berwarna raspberry, latar abu-krem + panel **krem kuning** dan **lilac**. Playful dan fun, untuk pasangan muda. Termasuk bundel Lite.

## Layout & alur per section
1. **Cover pembuka**: pola lattice pink full, nama retro pink transparan di atas, bola disko menggantung kanan atas, cluster bunga + ceri di bawah, dan tombol teks samar. Loader berupa **logo hati berdenyut** + teks "Loading".
2. **Cover**: monogram inisial serif tinggi, foto dalam **bingkai arch bergelombang (scalloped) bergaris pink**, bunga di sisi, dan ceri di sudut.
3. **Quote**: kartu krem kuning dengan **garis orbit melengkung + bintang kilau**, ceri di sudut. Lalu blob **lilac bergelombang** berisi "The Wedding of".
4. **Mempelai**: foto dalam **bingkai perangko (stamp, tepi bergerigi)** + bunga, nama retro raspberry, ortu, dan **badge IG berbentuk hati + pil**.
5. **Love story**: foto dengan **tepi sobek/robek organik** dibingkai bunga, teks rata kiri dengan judul kecil.
6. **Acara**: tanggal dalam **pil ganda bergaris**; kartu acara krem dengan **bayangan offset hitam** (neo-brutalist) + ikon, View Maps pil raspberry.
7. **Dresscode**: kartu ikon kecil + dot warna (zig-zag). **Rundown**: timeline titik-garis pink.
8. **Save the date**: blok lilac dengan **kartu krem berbentuk awan/scalloped besar** berisi countdown.
9. **RSVP** (arch bunga), **Galeri** (carousel foto dengan tepi melengkung), **Video**, **Gift**: kartu rekening dengan **QR code** + copy, form di **kartu "notebook" berlubang spiral**.
10. **Kado** (kartu arch), **Live streaming** (blob lilac), **Filter IG**, **Ucapan** (kartu notebook + pagination), **Terima kasih**, **Penutup**: monogram besar, nama retro, hashtag; footer krem kuning.

## Aset
- Ilustrasi: bola disko, ceri + pita, bunga cat air, bintang kilau, dan pola lattice.
- **Bentuk-bentuk CSS/SVG**: blob scalloped, awan, stamp, notebook spiral, orbit line. Banyak dekorasi yang bisa dibuat vektor murah.

## Animasi & interaksi
- AOS dengan durasi panjang (sampai 3–3,5 dtk). Konten terasa "muncul pelan"; capture perlu jeda ≥3 dtk per layar.
- Loader hati berdenyut. Pemilih bahasa.

## Tipografi & warna
- Heading: script retro tebal (bold brush script 70-an). Body: sans humanis.
- Palet: abu-krem `#f1efea`-an, krem kuning `#f8f6d8`-an, lilac `#dcc3d9`-an, raspberry `#c8384f`-an.

## Arah orisinal untuk kita
- **Tema "Retro Pop"** murah dibuat (mayoritas bentuk vektor): palet sendiri (mis. oranye-teal 70-an), stiker **kaset & piringan**, lampu tumbler.
- Pola layak diadopsi:
  - **kartu dengan bayangan offset solid**;
  - bingkai foto **stamp**;
  - form di kartu **notebook spiral**;
  - blob scalloped sebagai latar section.
  Semuanya bisa dibuat CSS mask + SVG tanpa PNG besar.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 14,217 px ≈ 15.5 layar; 19 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 805 | Valerie & James | zoom-in (5), fade-left (4), fade-up (3) | 16 |
| 2 | `quote` | 495 | – | zoom-in (9), fade-up (1) | 9 |
| 3 | `couple` | 1683 | The Wedding of / Theo James / & | zoom-in (14), fade-up (6), zoom-out (2) | 17 |
| 4 | `love_story` | 1336 | Our Love Story / First Meet / We're Forever | fade-up (10), zoom-in (6) | 13 |
| 5 | `event` | 1551 | It's Wedding Day / Holy Matrimony / Reception | fade-up (15), zoom-in (13), fade-up-right (1) | 15 |
| 6 | `rundown` | 577 | Rundown / Reception | – | 0 |
| 7 | `save_the_date` | 559 | Save The Date / 0 | zoom-in (6), fade-down-right (1), fade-down-left (1) | 5 |
| 8 | `rsvp` | 370 | RSVP / Will Attend | zoom-in (16), fade-up (2) | 15 |
| 9 | `gallery_photo` | 535 | Potraits of Us | zoom-out (1), fade-up (1), zoom-in (1) | 9 |
| 10 | `gallery_video` | 375 | Our Footage / The Pre-Wedding | zoom-in (3), zoom-out (1), zoom-out-up (1) | 4 |
| 11 | `wedding_gift` | 1752 | Wedding Gift / BANK BNI / BANK BNI (009) | zoom-in (9), fade-up (1) | 17 |
| 12 | `live_streaming` | 584 | Live Streaming | fade-up (2), zoom-in (1) | 2 |
| 13 | `filter_instagram` | 761 | Wedding Filter | fade-up (10), zoom-in (3) | 10 |
| 14 | `wedding_wish` | 1421 | Wedding Wish / Katsudoto | fade-up (11), zoom-in (7) | 8 |
| 15 | `greet_thanks` | 291 | Thank You | – | 0 |
| 16 | `footnote` | 805 | Valerie&James | zoom-in (9), fade-up (3), fade-down (1) | 10 |

### Tipografi

- Heading: Lily Script One (28), Ysabeau (18), Roboto (11)
- Body: Ysabeau (70), Roboto (10), Montserrat (2)
- Tombol: Ysabeau (8), Roboto (4)
- Font face termuat: Roboto 400, Roboto 500, Montserrat 500, Montserrat 100 900, Lily Script One 400, Ysabeau 1 1000

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#F2F0EC` |
| `--background-secondary` | `#DAC2D2` |
| `--background-tertiary` | `#F9FADB` |
| `--text-primary` | `#BF3856` |
| `--text-secondary` | `#F57937` |
| `--text-tertiary` | `#0A0A0A` |
| `--button-text-primary` | `#BF3856` |
| `--button-background-primary` | `#F2DCDD` |
| `--button-text-secondary` | `#F9FADB` |
| `--button-background-secondary` | `#BF3856` |

- Warna teks terbanyak: #0a0a0a (55), #bf3856 (44), #f57937 (10), #f9fadb (9), #ffffff (9), #000000 (2)
- Background terbanyak: #dac2d2 (17), #f9fadb (15), #bf3856 (10), #f2f0ec (8), #f6eed7 (4), #f2dcdd (3)

### Motion

- AOS: 210 elemen; efek teratas zoom-in (108), fade-up (70), zoom-in-up (6), zoom-out (5), fade-up-left (5), fade-down (4); durasi 400–3500 ms (terbanyak 1200 (62), 1000 (47), 1600 (20)).
- CSS keyframes khas template: goyang, twinkle, rotate360, fly-1, flap; sedang jalan: goyang×27, flap×10, twinkle×18, rotate360×2.
- Library aktif: jquery, AOS, tsParticles, Swiper, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 39 img + 1 background (format: png 39, jpg 1).
- Ornamen terbesar (px): 1643×1647, 1164×1500, 1280×720, 600×984, 648×694, 559×612, 486×688, 453×724.
- Foto/upload pengguna tampil: 16 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 4.

