---
source_url: https://marcelisa.katsudoto.id/490068
competitor: katsudoto
template: helga
katsudoto_id: 27
tags: [adat, floral]
released: 2023-08-14
used_count: 20
editable_colors: true
lite_bundle: true
captured_at: 2026-09-25
---
# Helga (katsudoto) — analisis desain

## Ringkasan
**Bold marun + krem, "boho-autumn floral"**: blok **merah marun penuh** (`#7e1f27`-an) berselang latar **krem-abu** (`#ebe4df`-an), bunga musim gugur (artichoke/protea, dahlia oranye, bunga matahari, bunga kering, pampas) cat air, dan **line-art bunga sepia** sebagai lapisan. Heading **serif display bulat** (mirip "Marcellus/Philosopher"). Terdapat **basmalah Arab** kecil di pembukaan. Berani, hangat, dan kontras kuat.

## Layout & alur per section
1. **Cover pembuka**: foto pasangan full dengan fade krem bawah, line-art bunga + bunga oranye di sudut, nama serif marun besar, "Hai {tamu}", tombol pil mauve-marun.
2. **Cover**: foto dalam **bingkai ogee/arch berlekuk** penuh bunga musim gugur, nama marun, hashtag.
3. **Ayat** di atas lanskap pudar. "The Wedding Of" + **kaligrafi basmalah** + salam.
4. **Mempelai**: foto dalam **arch bergaris tipis** + ranting kering, nama serif marun, ortu, IG.
5. **Save the date**: **kartu marun rounded** berisi foto fade + tanggal spasi lebar ("January 28th, 2024") + countdown lingkaran outline putih.
6. **Acara**: kartu marun **arch tinggi** + ikon garis putih, View Maps teks garis bawah.
7. **Dresscode**: kartu marun ber-**tepi bawah arch** + bunga, dot merah, ikon Ethnic.
8. **Rundown**, **RSVP**, **Galeri** (mosaik rapat), **Video**, **Love story** (blok marun + bunga, foto dengan teks overlay).
9. **Live streaming**, **Filter IG**, **Gift** (kartu marun dengan input putih pil), **Ucapan** ("Show more comments"), **Terima kasih**, **Penutup** (blok marun + bunga).

## Aset
- Bunga musim gugur cat air (protea, dahlia, bunga matahari, bunga kering), line-art bunga sepia, lanskap pudar, dan kaligrafi basmalah.

## Animasi & interaksi
- AOS. Countdown lingkaran outline.

## Tipografi & warna
- Heading: serif display bulat. Body: serif.
- Palet: krem-abu `#ebe4df`-an, marun `#7e1f27`-an, mauve `#8e5a64`-an tombol, oranye bunga.

## Arah orisinal untuk kita
- **Blok warna penuh bergantian** (marun ↔ krem) membuat halaman ritmis tanpa banyak ornamen. Cocok untuk sistem varian kita: `--c-bg` ↔ `--c-accent` per section.
- **Basmalah Arab** sebagai elemen opsional untuk preset religi Islam (kita punya preset religion). Tambahkan toggle `showBasmalah`.
- Palet autumn (terakota/marun/mustard) layak jadi varian warna default beberapa template.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 12,482 px ≈ 13.6 layar; 16 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Marcell & Lisa | zoom-in (7), zoom-in-up (1), fade-down (1) | 8 |
| 2 | `quote` | 354 | – | fade-up (1) | 0 |
| 3 | `couple` | 1329 | The Wedding Of / Marcell Bramantyo / & | zoom-in (7), fade-up (7) | 4 |
| 4 | `save_the_date` | 766 | Save The Date / 0 | fade-up (6), zoom-out (1), zoom-in-up (1) | 1 |
| 5 | `event` | 1746 | It's The Day / Sunday, / Akad Nikah | fade-up (17), fade-down (6), zoom-in (1) | 8 |
| 6 | `rundown` | 476 | Rundown / Resepsi | – | 0 |
| 7 | `rsvp` | 337 | RSVP / Unable To Attend | fade-up (2), zoom-in (1) | 0 |
| 8 | `gallery_photo` | 857 | Potraits of Us | fade-up-left (7), fade-right (1), fade-up (1) | 8 |
| 9 | `gallery_video` | 378 | Our Footage | zoom-out (1), zoom-out-up (1), zoom-in (1) | 2 |
| 10 | `love_story` | 769 | Our Story / First Date / We're Forever | fade-up (10), fade-down (5), fade-down-right (1) | 7 |
| 11 | `live_streaming` | 494 | Live Streaming | zoom-in (2), fade-up (1) | 1 |
| 12 | `filter_instagram` | 850 | Wedding Filter | fade-up (13) | 10 |
| 13 | `wedding_gift` | 1120 | Wedding Gift / BANK BCA / BANK BCA (014) | fade-up (10), zoom-in (1) | 10 |
| 14 | `wedding_wish` | 1028 | Wedding Wish / Katsudoto / Chindy & Partner | fade-up (11) | 0 |
| 15 | `greet_thanks` | 267 | Thank You | – | 0 |
| 16 | `footnote` | 475 | Marcell & Lisa | fade-up (14), fade-down (5) | 15 |

### Tipografi

- Heading: Marcellus (27), Playfair Display (17), Roboto (7)
- Body: Playfair Display (50), Roboto (10), Montserrat (2), Marcellus (1)
- Tombol: Playfair Display (6), Roboto (4)
- Font face termuat: Roboto 400, Montserrat 500, Montserrat 100 900, Marcellus 400, Playfair Display 400, Playfair Display 500

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#EAE2DC` |
| `--background-secondary` | `#7D2229` |
| `--background-tertiary` | `#A5785D` |
| `--text-primary` | `#89565C` |
| `--text-secondary` | `#404040` |
| `--text-tertiary` | `#EAE2DC` |
| `--button-text-primary` | `#EAE2DC` |
| `--button-background-primary` | `#89565C` |
| `--button-text-secondary` | `#89565C` |
| `--button-background-secondary` | `#EAE2DC` |

- Warna teks terbanyak: #eae2dc (45), #404040 (34), #89565c (24), #ffffff (9), #000000 (2)
- Background terbanyak: #eae2dc (17), #7d2229 (16), #ffffff (5), #89565c (3), #e14444 (2), #d11414 (2)

### Motion

- AOS: 156 elemen; efek teratas fade-up (100), zoom-in (21), fade-down (17), fade-up-left (7), zoom-out (4), fade-right (2); durasi 400–1500 ms (terbanyak 1200 (95), 1000 (55), 1500 (6)).
- CSS keyframes khas template: leftRight; sedang jalan: leftRight×6.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 30 img + 2 background (format: png 29, jpg 2, ? 1).
- Ornamen terbesar (px): 1500×1412, 1000×1707, 1280×720, 648×742, 400×827, 500×634, 400×666, 400×594.
- Foto/upload pengguna tampil: 13 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 4.

