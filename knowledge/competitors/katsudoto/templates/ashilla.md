---
source_url: https://ashillaheisel.katsudoto.id
competitor: katsudoto
template: ashilla
katsudoto_id: 12
tags: [minimalist]
released: 2022-05-14
used_count: 0
editable_colors: true
captured_at: 2026-09-25
---
# Ashilla (katsudoto) — analisis desain

## Ringkasan
**Monokrom abu dengan ornamen wayang/gunungan hitam-putih (2021)**: latar **abu linen muda** (`#e9e9e9`-an) bertekstur, putih, dan hitam. Ornamen **gunungan wayang siluet hitam-putih** di sudut bawah cover & penutup, **siluet gunungan samar** di latar countdown, **filigri kecil hitam**. Heading **serif klasik** (mirip "Playfair Display") hitam. **Full bahasa Indonesia** ("Kepada Yth Bapak/Ibu/Saudara/i", "Buka Undangan", "Hari Yang Ditunggu", "Rangkaian Acara", "Siaran Langsung", "Tanda Kasih", "Ucapan & Harapan", "Lebih Banyak Komentar"). Foto prewed studio berwarna (ungu, kuning spotlight, hijau). Ada catatan **aplikasi PeduliLindungi** + **anak < 12 tahun tidak diperkenankan** (era COVID).

## Layout & alur per section
1. **Cover pembuka**: foto studio spotlight, nama serif putih, "Kepada Yth Bapak/Ibu/Saudara/i", tombol putih "Buka Undangan".
2. **Cover**: filigri, "THE WEDDING OF", **foto oval berbingkai hitam tipis**, hashtag, nama, tanggal Indonesia ("24 Oktober 2021"), gunungan di sudut.
3. **Salam**: "Assalamualaikum wr. wb." + basmalah + kalimat undangan formal. **Mempelai**: foto lingkaran, nama, "Putri dari Bapak … & Ibu …", IG.
4. **Galeri Foto** (kartu putih rounded + mosaik), **Video** ("Prewedding Clip").
5. **Hari Yang Ditunggu**: countdown dalam **kotak outline rounded** (Hari/Jam/Menit/Detik) + tombol hitam "Tambah ke Kalender", gunungan samar.
6. **Rangkaian Acara**: catatan protokol (PeduliLindungi, anak <12 tahun dilarang).
7. **Siaran Langsung** (teks permohonan maaf keterbatasan, video), **Tanda Kasih** (amplop digital: QR rekening + form "Nominal" + "Lanjutkan"), **Ucapan & Harapan** (tombol "Kirim", "Lebih Banyak Komentar"), **Penutup** (nama + gunungan).

## Aset
- Siluet gunungan wayang hitam-putih, filigri kecil, tekstur linen abu.

## Tipografi & warna
- Heading: serif klasik. Body: serif.
- Palet: abu linen `#e9e9e9`-an, putih, hitam.

## Arah orisinal untuk kita
- **Gunungan monokrom** adalah cara modern-minimal membawa unsur Jawa ke template netral. Sekar kita memakai gunungan; tambah varian **"Sekar Monokrom"** (abu + hitam).
- **Aturan tamu** ("anak di bawah 12 tahun tidak diperkenankan", "maksimal 2 orang") adalah kebutuhan nyata. Field `events[].rules[]` atau catatan RSVP (maxPax sudah ada).
- Istilah **"Tanda Kasih"** untuk amplop digital adalah label ID alternatif yang lebih halus. Tambahkan ke preset label `id`.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 8,615 px ≈ 9.4 layar; 11 frame.
- Bahasa demo: `en`. Scroller: `kat-page__solo-pane`.
- Tombol buka: `Buka Undangan` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 1015 | Ashilla & Heisel | zoom-in (3), fade-up (3), fade-down (2) | 1 |
| 2 | `couple` | 1322 | Assalamualaikum wr. wb. / Ridwan Heisel Bolang / Ashilla Zahrantiara | fade-up (7), zoom-in (3), zoom-out (3) | 2 |
| 3 | `gallery_photo` | 1097 | Galeri Foto | zoom-in (9), zoom-out (1), fade-up (1) | 9 |
| 4 | `gallery_video` | 594 | Ashilla & Heisel Prewedding / Ashilla & Heisel Prewedding Clip | zoom-out (1), zoom-out-up (1), zoom-in (1) | 1 |
| 5 | `save_the_date` | 417 | Hari Yang Ditunggu / 0 | fade-up (3), zoom-in (1), zoom-out (1) | 0 |
| 6 | `event` | 482 | RANGKAIAN ACARA | fade-up (2), fade-down (1), zoom-in (1) | 0 |
| 7 | `rsvp` | 0 | – | – | 0 |
| 8 | `live_streaming` | 719 | Siaran Langsung | fade-up (2), zoom-in (1) | 1 |
| 9 | `wedding_gift` | 1196 | Tanda Kasih Kedatangan anda sangatlah berarti. Namun, jika A / Tanda K | zoom-in (2), fade-up (1) | 2 |
| 10 | `wedding_wish` | 1356 | Ucapan & Harapan | fade-up (8), fade-down (2) | 0 |
| 11 | `footnote` | 377 | Ashilla & Heisel | fade-up (2), fade-down (1), zoom-in (1) | 0 |

### Tipografi

- Heading: Crimson Text (16), Roboto (3), Playfair Display (2)
- Body: Playfair Display (31), Ebrima Bold (6), Crimson Text (1)
- Tombol: Playfair Display (3)
- Font face termuat: Roboto 400 italic, Roboto 400, Roboto 500, Roboto 700, Montserrat 500, Ebrima Bold 400, Crimson Text 400, Playfair Display 400 900, Playfair Display 400 900 italic

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#F6F5F5` |
| `--background-secondary` | `#FFFFFF` |
| `--background-tertiary` | `#2F2F2F` |
| `--text-primary` | `#0A0A0A` |
| `--text-secondary` | `#303030` |
| `--text-tertiary` | `#FAFAFA` |
| `--button-text-primary` | `#0A0A0A` |
| `--button-background-primary` | `#FAFAFA` |
| `--button-text-secondary` | `#FAFAFA` |
| `--button-background-secondary` | `#232323` |

- Warna teks terbanyak: #303030 (52), #0a0a0a (4), #fafafa (3)
- Background terbanyak: #ffffff (12), #f6f5f5 (9), #232323 (4), #2f2f2f (2), #fafafa (2)

### Motion

- AOS: 71 elemen; efek teratas fade-up (31), zoom-in (22), fade-down (7), zoom-out (7), zoom-out-up (1), fade-up-right (1); durasi 400–2000 ms (terbanyak 1000 (61), 1500 (6), 1200 (2)).
- CSS keyframes khas template: –; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 3 img + 3 background (format: png 3, jpg 2, ? 1).
- Ornamen terbesar (px): 1280×720, 120×90, 0×0.
- Foto/upload pengguna tampil: 13 (termasuk GIF: 0).
- Video embed: 0; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor tidak, inline SVG 6.

