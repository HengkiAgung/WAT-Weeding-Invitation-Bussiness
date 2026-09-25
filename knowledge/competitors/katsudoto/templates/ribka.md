---
source_url: https://rianribka.katsudoto.id/912865
competitor: katsudoto
template: ribka
katsudoto_id: 42
tags: [floral]
released: 2025-02-24
used_count: 15
editable_colors: true
captured_at: 2026-09-25
---
# Ribka (katsudoto) — analisis desain

## Ringkasan
**Forest-floral romantis**: hutan pinus berkabut di cover, **gapura bunga melengkung** (mawar pink, putih, hydrangea biru, daun eucalyptus) membingkai foto, dan kupu-kupu biru. Latar krem kertas, **emas mustard** (`#a8862f`-an) untuk heading script & tombol utama, **hijau sage** untuk tombol sekunder. Heading script tulisan tangan ringan. Klasik floral, mengandalkan foto.

## Layout & alur per section
1. **Cover pembuka**: kabut hutan pinus di atas, nama script emas, **foto pasangan di dalam gapura bunga lengkung**, bunga cat air menutup kedua sisi bawah, "Hai {tamu}", tombol emas.
2. **Cover**: monogram emas, foto dalam **arch putih** + bunga, kartu putih berisi nama script + hashtag + kupu-kupu.
3. **Quote**: **kertas perkamen kuning bertepi sobek** di atas bunga samar.
4. **Mempelai**: foto dalam **arch bunga** dengan **pita/gulungan kain emas** di bawah, nama script emas, ortu, IG.
5. **Save the date**: **bingkai bergelombang ungu** tipis (garis lengkung) dengan countdown angka tipis + tombol emas.
6. **Galeri**: foto utama + strip thumbnail. **Video**.
7. **Acara**: "It's Wedding Day" + **gapura bunga setengah lingkaran** di atas tiap acara, lanskap kabur, dan tombol emas View Maps.
8. **Dresscode**: ikon dalam lingkaran pink + dot warna. **Rundown** timeline.
9. **RSVP** (kartu arch), **Live streaming** (tombol hijau), **Love story**: foto dalam **bingkai oval memanjang (pill)** + teks.
10. **Gift**: dropdown hijau, kartu rekening dengan **pagar trellis kayu berbunga** di sisi, form, tombol emas. **Kado**: produk dengan status **"SOLD OUT"** (overlay abu).
11. **Filter IG**, **Ucapan**, **Terima kasih**, **Penutup**: foto dalam **karangan bunga bulat penuh**, hashtag + tanggal.

## Aset
- Cat air: hutan pinus kabut, gapura/karangan bunga (lengkung, bulat, setengah), trellis kayu, pita kain emas, perkamen sobek, dan kupu-kupu.

## Animasi & interaksi
- AOS. Kupu-kupu. Carousel galeri. Kado bisa **habis (sold out)** saat kuantitas terpenuhi.

## Tipografi & warna
- Heading: script tulisan tangan tipis (mirip "Mrs Saint Delafield"). Body: serif ringan.
- Palet: krem `#f6f0e4`-an, emas mustard `#a8862f`-an, sage `#6b7f55`-an.

## Arah orisinal untuk kita
- Pola kado **sold out**: registry dengan kuantitas; kalau semua sudah dikonfirmasi, item ditandai habis. Adopsi di schema `gift.registry[].qty` + counter konfirmasi.
- Foto di dalam **gapura bunga** adalah motif umum pasar. Versi kita memakai **janur/kembang mayang** sebagai gapura (lokal, belum dipakai pesaing ini).

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 15,654 px ≈ 17.1 layar; 20 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Rian &Ribka | fade-up (9), zoom-in (5), fade-down (2) | 14 |
| 2 | `quote` | 640 | – | fade-up (7), zoom-in (3) | 9 |
| 3 | `couple` | 1579 | The Wedding of / & | fade-up (21), zoom-in (12), zoom-out (2) | 26 |
| 4 | `save_the_date` | 700 | Save the date | zoom-in (10), fade-up (5), zoom-out (2) | 9 |
| 5 | `gallery_photo` | 827 | Potrait of Us | fade-up (9) | 29 |
| 6 | `gallery_video` | 395 | Our Footage / The Pre-Wedding | zoom-in (5), zoom-out (1), zoom-out-up (1) | 6 |
| 7 | `event` | 2340 | It's Wedding Day / Akad Nikah / Resepsi | fade-up (27), zoom-in (17), zoom-out (4) | 38 |
| 8 | `rundown` | 496 | Rundown / Resepsi | – | 0 |
| 9 | `rsvp` | 530 | RSVP / Unable To Attend | fade-up (12), zoom-in (2) | 11 |
| 10 | `live_streaming` | 424 | Live Streaming | zoom-in (5), fade-up (2) | 5 |
| 11 | `love_story` | 1617 | Our Love Story / First Meet / We're Forever | zoom-in (14), fade-up-left (4), fade-up (4) | 17 |
| 12 | `wedding_gift` | 2177 | Wedding Gift / BANK MANDIRI / BANK MANDIRI (008) | fade-up (19), fade-up-right (4), zoom-in (3) | 27 |
| 13 | `filter_instagram` | 829 | Wedding Filter | fade-up (12) | 9 |
| 14 | `wedding_wish` | 771 | Wedding Wish / Katsudoto | fade-up (8) | 0 |
| 15 | `greet_thanks` | 265 | Thank You | – | 0 |
| 16 | `footnote` | 837 | Rian & Ribka | fade-up (14), zoom-out (6), fade-right (4) | 27 |

### Tipografi

- Heading: Travel November (23), Josefin Slab (16), Roboto (10)
- Body: Josefin Slab (73), Roboto (10), Travel November (2), Montserrat (2)
- Tombol: Josefin Slab (6), Roboto (5)
- Font face termuat: Roboto 400, Roboto 500, Roboto 700, Montserrat 500, Montserrat 100 900, Josefin Slab 100 700, Travel November 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#FDFAF2` |
| `--background-secondary` | `#FCFCFC` |
| `--background-tertiary` | `#F1DFCB` |
| `--text-primary` | `#A17F37` |
| `--text-secondary` | `#64744F` |
| `--text-tertiary` | `#404040` |
| `--button-text-primary` | `#FDF6E4` |
| `--button-background-primary` | `#A17F37` |
| `--button-text-secondary` | `#F1E6C9` |
| `--button-background-secondary` | `#64744F` |

- Warna teks terbanyak: #404040 (44), #a17f37 (42), #64744f (15), #ffffff (9), #fdf6e4 (7), #f1e6c9 (4)
- Background terbanyak: #f1dfcb (13), #a17f37 (8), #fcfcfc (7), #64744f (5), #ffffff (3), #fdfaf2 (2)

### Motion

- AOS: 304 elemen; efek teratas fade-up (167), zoom-in (82), zoom-out (19), fade-right (12), fade-up-left (8), fade-up-right (6); durasi 400–2000 ms (terbanyak 1200 (105), 1000 (74), 1300 (37)).
- CSS keyframes khas template: goyang, fly-1, flap, cloud-left, cloud-right; sedang jalan: goyang×78, flap×12, fly-1×3, cloud-right×1, cloud-left×1.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 41 img + 2 background (format: png 42, jpg 1).
- Ornamen terbesar (px): 1440×2279, 1114×1804, 907×1455, 842×1253, 995×982, 1280×720, 924×820, 708×964.
- Foto/upload pengguna tampil: 29 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 6.

