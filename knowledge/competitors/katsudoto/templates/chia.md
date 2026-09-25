---
source_url: https://fathiarandha.katsudoto.id
competitor: katsudoto
template: chia
katsudoto_id: 9
tags: [minimalist]
released: 2022-02-14
used_count: 2
editable_colors: true
captured_at: 2026-09-25
---
# Chia (katsudoto) — analisis desain

## Ringkasan
**Ilustrasi pop-folk Nusantara, custom art**: cover **poster ilustrasi tangan bergaya linocut/woodcut berwarna** yang padat simbol: **awan mega mendung** biru, gunung, **bunga rafflesia**, anggrek kuning, **kerbau/sapi**, dan dua figur samping berpola zodiak (Libra ♎, Scorpio ♏). Teks "Dua jiwa, satu cinta" dan "Kasih la sapai" (bahasa daerah). Isi undangan **krem pasir** (`#ead9bf`-an) + **merah bata** (`#a34a3f`-an), **awan mega mendung line-art** di sudut, bingkai **garis ganda Art Deco** dengan lingkaran, font **sans condensed** (mirip "Josefin/Kanit"). **Full bahasa Indonesia** ("Siaran Langsung", "Hari Yang Ditunggu", "Tambah Ke Kalender", "Foto-Foto", "Ucapan & Harapan"). Foto prewed **vintage/film** di rumah kolonial. Dinamis dan sangat personal.

## Layout & alur per section
1. **Cover pembuka**: poster ilustrasi full, "F&R" huruf besar bertekstur, "Dear Mr/Mrs/Ms", tombol merah bata "Buka Undangan".
2. **Cover**: bingkai garis ganda + lingkaran di sisi, awan mega mendung di sudut, "Dua Jiwa, Satu Cinta", monogram "FR", **foto oval berbingkai hitam**, "Pernikahan", nama merah bata, tanggal.
3. **Ayat** + **pita merah bata full-width** berisi salam + basmalah. **Mempelai**: foto lingkaran, nama merah bata, "Putri kedua dari Bapak Dr. …", IG, "&" besar.
4. **Acara**: doa, **tanggal besar di antara dua garis**, Akad Nikah, **catatan tautan live streaming**.
5. **Siaran Langsung**: **QR code live streaming** + short link + tombol "Buka Tautan". Unik: tamu bisa memindai dari layar lain/TV.
6. **Hari Yang Ditunggu**: countdown **kapsul putih di atas pita merah** full-width. **Foto-Foto**: mosaik foto film B/W & warna. **Ucapan & Harapan**. **Penutup** (nama + hashtag + kilau garis).

## Aset
- Ilustrasi poster custom (linocut berwarna) dengan simbol lokal: mega mendung, rafflesia, anggrek, kerbau, dan zodiak. Line-art mega mendung. Bingkai garis Art Deco (CSS).

## Tipografi & warna
- Heading: sans condensed. Body: sans.
- Palet: krem pasir `#ead9bf`-an, merah bata `#a34a3f`-an, hitam; cover warna-warni (biru, kuning, merah, hijau).

## Arah orisinal untuk kita
- **Custom ilustrasi poster pasangan** (simbol zodiak, kota asal, hewan kesayangan, bahasa daerah) adalah layanan premium bernilai tinggi (pasar Rp150–500rb+). Kita bisa tawarkan **add-on "Cover Ilustrasi Custom"** via ilustrator mitra; template menerima `cover.illustration` sebagai pengganti foto.
- **QR code untuk live streaming** gratis dibuat (qrcode-generator sudah ada di core). Tambah opsi di section live.
- **Mega mendung line-art** sebagai ornamen sudut: gaya yang juga cocok untuk template Cirebon/Sunda kita.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 7,041 px ≈ 7.7 layar; 10 frame.
- Bahasa demo: `en`. Scroller: `window`.
- Tombol buka: `Buka Undangan` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Fathia Izzati Saripudin & Randha Trihatmaja | fade-up (3), fade-down (2), zoom-in (1) | 2 |
| 2 | `quote-top` | 267 | – | fade-up (1) | 0 |
| 3 | `guest` | 100 | – | fade-right (1), fade-left (1) | 0 |
| 4 | `couple` | 1052 | Randha Trihatmaja / Fathia Izzati Saripudin | fade-up (9), zoom-in (4) | 2 |
| 5 | `event-outer` | 866 | Sunday08 August 2021 / Akad Nikah 15:00 - 17:00 / Akad Nikah | fade-up (4), zoom-in (3), fade-right (1) | 1 |
| 6 | `streaming` | 478 | Siaran Langsung | fade-up (3), zoom-in (1) | 1 |
| 7 | `save-date` | 416 | Hari Yang Ditunggu / 0 | fade-up (5), zoom-in (1), zoom-in-up (1) | 0 |
| 8 | `gallery` | 990 | Foto - Foto | zoom-in (11) | 10 |
| 9 | `comment-outer` | 1458 | Ucapan & Harapan | fade-up (6), zoom-in (2) | 0 |
| 10 | `footnote` | 461 | Fathia Izzati Saripudin & Randha Trihatmaja | fade-up (4) | 0 |
| 11 | `footer` | 39 | – | – | 0 |
| 12 | `music-outer` | 45 | – | – | 0 |

### Tipografi

- Heading: Gallery Modern (14), Abalc (2)
- Body: Abalc (21), Gallery Modern (8)
- Tombol: Abalc (1)
- Font face termuat: Roboto 400 italic, Roboto 400, Gallery Modern normal, Abalc normal

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

- Warna teks terbanyak: #ab5047 (22), #060709 (15), #a23d33 (5), #ffffff (4), #4455aa (2), #000000 (1)
- Background terbanyak: #ebdbc2 (9), #ffffff (5), #000000 (4), #383635 (4), #ab5047 (3)

### Motion

- AOS: 65 elemen; efek teratas fade-up (36), zoom-in (23), fade-down (2), fade-right (2), fade-left (1), zoom-in-up (1); durasi 400–1200 ms (terbanyak 1000 (51), 1200 (14), 400 (1)).
- CSS keyframes khas template: –; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 16 img + 8 background (format: jpg 12, png 9, jpeg 3).
- Ornamen terbesar (px): 1066×1600, 950×818, 600×600, 600×600, 360×450, 340×450, 300×450, 300×450.
- Foto/upload pengguna tampil: 0 (termasuk GIF: 0).
- Video embed: 0; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor tidak, inline SVG 5.

