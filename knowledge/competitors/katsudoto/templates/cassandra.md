---
source_url: https://cassandradamiean.katsudoto.id/843472
competitor: katsudoto
template: cassandra
katsudoto_id: 31
tags: [minimalist]
released: 2024-03-07
used_count: 17
editable_colors: true
captured_at: 2026-09-25
---
# Cassandra (katsudoto) — analisis desain

## Ringkasan
**Urban editorial / city-night**: foto prewed malam di kota (bokeh lampu), heading **serif all-caps tipis** besar, blok warna solid **olive/khaki** (`#7f7a55`-an), **biru abu** (`#7a8aa3`-an), dan **krem pasir**. Garis vertikal tipis sebagai aksen. Ornamen hanya **line-art bunga tipis** krem. Terasa seperti majalah/lookbook. Cover menampilkan **label kategori tamu ★ VIP**.

## Layout & alur per section
1. **Cover pembuka**: foto full-bleed gelap, garis vertikal putih di kiri, ★ VIP, "Wedding Invitation", nama serif caps besar, "Hai {tamu}", dan tombol pil krem di kanan bawah.
2. **Cover**: foto + nama caps + hashtag, garis vertikal.
3. **Ayat** (bahasa Indonesia) di krem + line-art. **"THE WEDDING OF"** di blok biru abu dengan salam islami.
4. **Mempelai**: nama dalam **kotak bergaris**, foto **setengah lingkaran atas (arch)**, ortu, pil IG.
5. **Galeri**: kolase asimetris + judul caps di blok. **Video** di blok olive. **Save the date** di blok biru abu + angka tipis.
6. **Acara**: tanggal caps sangat besar ("SATURDAY, MARCH 08TH 2025"), kartu olive dengan bingkai garis tipis.
7. **Dresscode**: **ilustrasi karakter pria/wanita** berbaju sesuai tema + swatch cokelat. **Rundown** (kartu olive bergaris), **RSVP** dengan huruf R-S-V-P **vertikal**.
8. **Love story**: kartu foto gelap + teks overlay. **Live streaming** (blok biru abu), **Filter IG**, **Ucapan** (kartu olive + "Show more comments"), **Terima kasih**, **Penutup** (foto + nama).

## Temuan keamanan (penting)
Daftar ucapan demo menampilkan **payload SQL injection** yang dikirim pengunjung (`…/**/and/**/0=DBMS_PIPE.RECEIVE_MESSAGE(...)`). Artinya form ucapan publik mereka discan bot/penyerang dan teksnya tampil mentah (aman dari XSS karena di-escape, tapi tanpa moderasi).
- Pelajaran untuk kita (S7/S10):
  - **rate limit** per IP/tamu;
  - **moderasi / filter** pola serangan;
  - opsi "ucapan hanya tamu berkode";
  - query **wajib parameterized** (Prisma sudah).

## Aset
- Minim: line-art bunga tipis, garis. Foto adalah bintang.

## Animasi & interaksi
- AOS ringan. Layout blok warna.

## Tipografi & warna
- Heading: serif caps tipis (mirip "Cormorant SC"). Body: serif.
- Palet: olive `#7f7a55`-an, biru abu `#7a8aa3`-an, krem pasir `#d8d1c1`-an.

## Arah orisinal untuk kita
- **Editorial blok warna** murah dan cocok untuk prewed urban (Jakarta, Bandung). Versi kita: **"Kota"** dengan tipografi grotesk + serif, palet bata/terracotta + abu beton.
- Pola:
  - **RSVP huruf vertikal**;
  - **ilustrasi karakter dresscode**;
  - **label kategori tamu (VIP) di cover**. Kita punya `guest.group`; tampilkan badge bila ada.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 11,856 px ≈ 13.0 layar; 16 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Cassandra & Damiean | fade-up (3), fade-down (2), zoom-out (1) | 1 |
| 2 | `quote` | 309 | – | fade-right (3), fade-up (1) | 0 |
| 3 | `couple` | 1656 | The Wedding Of / Damian Felixo / & | fade-up (7), zoom-in (4) | 2 |
| 4 | `gallery_photo` | 790 | Our Galery | fade-up (4) | 34 |
| 5 | `gallery_video` | 462 | Video Gallery / Our Footage | zoom-out (1), zoom-out-up (1), zoom-in (1) | 2 |
| 6 | `save_the_date` | 389 | Save The Date / 0 | fade-up (5), zoom-out (2), zoom-in (1) | 0 |
| 7 | `event` | 1814 | It's The Day / Saturday, / March 08th 2025 | fade-up (19), fade-left (2), zoom-in (1) | 2 |
| 8 | `rundown` | 500 | Rundown / Wedding Celebration | – | 0 |
| 9 | `rsvp` | 303 | RSVP / Unable To Attend | zoom-in (2), fade-up (2) | 0 |
| 10 | `love_story` | 641 | Our Story | zoom-in (6), fade-up (1) | 2 |
| 11 | `live_streaming` | 406 | Live Streaming | fade-down (1), zoom-in (1), fade-up (1) | 1 |
| 12 | `filter_instagram` | 916 | Wedding Filter | fade-up (4), zoom-in (1) | 1 |
| 13 | `wedding_wish` | 1268 | Wedding Wish / Katsudoto | fade-up (11) | 0 |
| 14 | `greet_thanks` | 251 | Thank You | – | 0 |
| 15 | `footnote` | 915 | Cassandra & Damiean | zoom-out (4), fade-down (1), fade-up (1) | 1 |

### Tipografi

- Heading: Nanum Myeongjo (27), Benne (10), Roboto (8)
- Body: Benne (47), Roboto (10), Nanum Myeongjo (1)
- Tombol: Roboto (4), Benne (3)
- Font face termuat: Roboto 400, Roboto 700, Montserrat 500, Benne 400, Nanum Myeongjo 400, Nanum Myeongjo 700

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#D9D2C3` |
| `--background-secondary` | `#788596` |
| `--background-tertiary` | `#817B5C` |
| `--text-primary` | `#D3D1C8` |
| `--text-secondary` | `#FFFFFF` |
| `--text-tertiary` | `#817B5C` |
| `--button-text-primary` | `#817B5C` |
| `--button-background-primary` | `#D9D2C3` |
| `--button-text-secondary` | `#D9D2C3` |
| `--button-background-secondary` | `#817B5C` |

- Warna teks terbanyak: #ffffff (61), #d3d1c8 (26), #817b5c (18), #d9d2c3 (1)
- Background terbanyak: #d9d2c3 (15), #817b5c (11), #788596 (9), #d3d1c8 (3), #fafafa (3), #ffffff (3)

### Motion

- AOS: 104 elemen; efek teratas fade-up (65), zoom-in (18), zoom-out (9), fade-down (6), fade-right (3), fade-left (2); durasi 400–2000 ms (terbanyak 1000 (54), 1200 (39), 1500 (9)).
- CSS keyframes khas template: –; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 1 img + 1 background (format: jpg 1, png 1).
- Ornamen terbesar (px): 1280×720.
- Foto/upload pengguna tampil: 44 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor tidak, inline SVG 8.

