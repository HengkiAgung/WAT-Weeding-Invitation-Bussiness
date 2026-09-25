---
source_url: https://rezadita.katsudoto.id/483049
competitor: katsudoto
template: sintia
katsudoto_id: 23
tags: [adat]
released: 2023-04-14
used_count: 9
editable_colors: true
lite_bundle: true
captured_at: 2026-09-25
---
# Sintia (katsudoto) — analisis desain

## Ringkasan
**Adat Minangkabau**: cover **Rumah Gadang** (atap gonjong) dalam **gravir/etsa merah-marun** di atas kertas, pohon kelapa gravir hitam, dan bunga liar cat air (bunga matahari, dahlia, mawar). Isi halaman **merah marun tua bertekstur kain** (`#6b0a0a`-an) dengan **border songket/pucuak rabuang krem** (motif geometris segitiga berulang) sebagai pembatas, dan kartu **krem**. Heading serif klasik (mirip "Playfair") krem/kuning. Copy islami bahasa Indonesia penuh. Mewah dan berkarakter.

## Layout & alur per section
1. **Cover pembuka**: kertas krem bertekstur, sapuan cat abu, nama serif marun besar, "Hai {tamu}", tombol marun teks kuning, Rumah Gadang gravir + kelapa + bunga.
2. **Cover**: latar marun, monogram serif, foto dalam **bingkai sapuan kuas/robekan kasar** (organic torn frame), kupu-kupu, nama + hashtag.
3. **Ayat**: blok krem di antara **border songket** atas-bawah. "The Wedding Of" + basmalah (latin) + doa panjang bahasa Indonesia.
4. **Mempelai**: foto dalam **bingkai sapuan kuas**, nama serif krem, "Putra dari Bapak…", IG.
5. **Save the date**: kotak countdown krem, ornamen **sulur keriting** krem.
6. **Love story**: kartu foto krem dengan tepi sobek + teks. **Acara "Wedding Day"**: doa, siluet Rumah Gadang samar, tanggal, ikon garis krem, tombol kuning View Maps.
7. **Dresscode** (motif pucuk rebung di sudut), **Rundown** (latar krem), **Reservation**: kartu krem dengan **E-Invitation QR** + "Download E-Invitation".
8. **Galeri** (mosaik), **Live streaming**, **Gift** (kartu krem + rekening di kartu marun + tombol "Confirm"), **Ucapan** (tombol kuning), **Terima kasih**, **Penutup** (marun + bunga + border songket).

## Aset
- Gravir Rumah Gadang & kelapa, border songket/pucuk rebung (bisa SVG repeat), tekstur kain marun, bingkai sapuan kuas, bunga cat air, sulur keriting.

## Animasi & interaksi
- AOS; kupu-kupu. E-Invitation QR.

## Tipografi & warna
- Heading: serif klasik (Playfair). Body: serif.
- Palet: marun tua `#6b0a0a`-an, krem `#efe3cc`-an, kuning `#f9d77e`-an tombol.

## Arah orisinal untuk kita
- **Tema Minang** ada di pasar. Versi kita: **"Gadang"** dengan **songket emas di atas hitam/merah** (warna marawa: hitam-merah-kuning), ilustrasi gonjong line-art, **tanpa gravir**.
- Pola layak diadopsi:
  - **border motif tekstil sebagai divider section** (SVG repeat-x kecil, sangat ringan);
  - **bingkai foto sapuan kuas** (CSS mask dengan PNG alpha kecil).
- Masuk "seri adat nusantara" (lihat katrina.md): Minang = kulit berikutnya setelah Sunda.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 12,723 px ≈ 13.9 layar; 17 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 995 | Reza & Dita | fade-down (3), zoom-in-up (1), fade-down-right (1) | 4 |
| 2 | `quote` | 403 | – | zoom-out (1), fade-up (1) | 1 |
| 3 | `couple` | 1765 | The Wedding Of / Reza Mahendra / & | fade-up (7), zoom-in (4), zoom-out (1) | 4 |
| 4 | `save_the_date` | 695 | Save The Date / 0 | fade-up (5), zoom-out (1), fade-right (1) | 1 |
| 5 | `love_story` | 966 | The Start / The Beginning | fade-up (6), zoom-out (3) | 3 |
| 6 | `event` | 2137 | Wedding Day / Sunday / Akad Nikah | fade-up (19), fade-left (4), fade-down-right (1) | 4 |
| 7 | `rundown` | 473 | Rundown / Resepsi | – | 0 |
| 8 | `rsvp` | 904 | Reservation / Will Attend | fade-up (4), zoom-out (1), zoom-in (1) | 2 |
| 9 | `gallery_photo` | 772 | Photo Gallery | zoom-in (5), zoom-out (1), fade-up (1) | 6 |
| 10 | `live_streaming` | 419 | Live Streaming | fade-up (2), zoom-in (1) | 1 |
| 11 | `wedding_gift` | 1080 | Wedding Gift / BANK BCA / BANK BCA (014) | zoom-out (1), zoom-in (1), fade-up (1) | 3 |
| 12 | `wedding_wish` | 1094 | Wedding Wish / Katsudoto | fade-up (10) | 0 |
| 13 | `greet_thanks` | 332 | Thank You | – | 0 |
| 14 | `footnote` | 608 | Reza & Dita | fade-up (8), zoom-out (1) | 5 |

### Tipografi

- Heading: Playfair Display (21), Bona Nova (19), Roboto (7)
- Body: Playfair Display (51), Montserrat (2)
- Tombol: Playfair Display (6)
- Font face termuat: Roboto 400, Roboto 500, Montserrat 500, Montserrat 100 900, Bona Nova 400, Playfair Display 400, Playfair Display 500, Playfair Display 600, Playfair Display 500 italic

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#650B04` |
| `--background-secondary` | `#F4E1C3` |
| `--background-tertiary` | `#501817` |
| `--text-primary` | `#FFDE8F` |
| `--text-secondary` | `#F4E1C3` |
| `--text-tertiary` | `#650B04` |
| `--button-text-primary` | `#FFDE8F` |
| `--button-background-primary` | `#650B04` |
| `--button-text-secondary` | `#620B04` |
| `--button-background-secondary` | `#FFDE8F` |

- Warna teks terbanyak: #f4e1c3 (39), #650b04 (31), #ffde8f (27), #620b04 (3), #000000 (2), #f4e1c3 @0.8 (2)
- Background terbanyak: #f4e1c3 (18), #650b04 (17), #ffffff (6), #ffde8f (3), #150f0f (2), #5e5757 (2)

### Motion

- AOS: 112 elemen; efek teratas fade-up (73), zoom-in (13), zoom-out (11), fade-left (6), fade-down (4), fade-down-right (3); durasi 400–2000 ms (terbanyak 1000 (47), 1200 (46), 1500 (13)).
- CSS keyframes khas template: kupu-kupu-2, goyang, bungagoyang; sedang jalan: kupu-kupu-2×3, bungagoyang×2.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 13 img + 6 background (format: png 16, jpeg 1, jpg 1, ? 1).
- Ornamen terbesar (px): 840×1170, 1280×720, 1160×538, 430×692, 338×528, 338×528, 1000×112, 377×274.
- Foto/upload pengguna tampil: 11 (termasuk GIF: 0).
- Video embed: 0; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 9.

