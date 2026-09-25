---
source_url: https://annakristoff.katsudoto.id/185536
competitor: katsudoto
template: hanna
katsudoto_id: 36
tags: [minimalist]
released: 2024-07-31
used_count: 6
editable_colors: true
captured_at: 2026-09-25
---
# Hanna (katsudoto) — analisis desain

## Ringkasan
**Monokrom "toile de Jouy" biru-abu**: seluruh ornamen berupa **ilustrasi garis botani** (peony, lili, pakis, lavender) satu warna **biru debu** (`#8fa5b8`-an) di atas latar putih-abu sangat terang. Heading **script tanda tangan tipis** (mirip "Monsieur La Doulaise"/signature). Foto demo B/W. Tenang, sangat elegan, dan satu warna. Mudah di-recolor.

## Layout & alur per section
1. **Cover pembuka**: bingkai oval dari rangkaian bunga garis biru di tepi layar, nama script tipis biru, "Hai {tamu}", tombol pil biru debu.
2. **Cover**: latar **pola toile** samar full, monogram inisial, foto **oval** B/W, nama script, dan hashtag.
3. **Ayat** diapit tangkai lavender garis. "The Wedding Of" + salam islami di atas bunga garis.
4. **Mempelai**: foto B/W full-width tanpa bingkai (editorial), nama script, ortu, IG.
5. **Love story**: foto membulat + teks. **Save the date**: angka tipis besar + tombol pudar. Bunga garis merambat di sisi.
6. **Acara**: kartu **oval besar dari karangan bunga garis**, ikon cincin, Akad/Resepsi, dan tombol View Maps biru.
7. **Dresscode** (ikon dalam lingkaran + dot abu-biru), **Rundown**, **RSVP** (kartu putih di atas toile).
8. **Galeri**: foto besar + strip thumbnail + panah. **Video**. **Live streaming**: blob biru muda bertepi toile.
9. **Filter IG**, **Gift** (kartu putih + dropdown biru), **Kado** (arch garis tipis + alamat), **Ucapan** (blob biru muda), **Terima kasih**, **Penutup** (arch biru muda di atas toile + monogram).

## Aset
- Ilustrasi garis botani satu warna (peony, lili, pakis, lavender, dedaunan) dan pola toile. **Satu warna → gampang dijadikan varian** (recolor via CSS mask atau `recolor_svg`).

## Animasi & interaksi
- AOS lembut. Strip thumbnail galeri.

## Tipografi & warna
- Heading: script signature tipis. Body: serif kecil.
- Palet: putih-abu `#f4f5f6`-an, biru debu `#8fa5b8`-an, biru muda `#dfe7ef`-an panel.

## Arah orisinal untuk kita
- **Satu-warna line-art = template paling efisien untuk varian** (1 set SVG, recolor ke sage/dusty-rose/navy/terakota). Arsitektur kita (mask + `--c-accent`) sudah mendukung. Buat template **"Garis"** dengan ilustrasi garis flora Indonesia (melati, cempaka, anggrek bulan, pakis).
- Pola: foto mempelai **full-width tanpa bingkai** (editorial); karangan bunga oval sebagai kontainer acara.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 14,744 px ≈ 16.1 layar; 19 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Anna &Kristoff | fade-down (2), zoom-out (1), zoom-in-up (1) | 2 |
| 2 | `quote` | 535 | – | fade-up-right (7), fade-up-left (4), fade-up (1) | 11 |
| 3 | `couple` | 1502 | The Wedding Of / Kristoff Livione / & | fade-up (9), zoom-in (2) | 2 |
| 4 | `love_story` | 589 | Our Story / We're Forever / First Date | fade-up (11), zoom-in (6), fade-up-right (2) | 8 |
| 5 | `save_the_date` | 915 | Save The Date / 0 | fade-up (4), fade-up-right (2), fade-up-left (2) | 5 |
| 6 | `event` | 1999 | It's Wedding Day / Akad Nikah / Resepsi | fade-left (26), fade-up (13), zoom-in (9) | 32 |
| 7 | `rundown` | 486 | Rundown / Resepsi | – | 0 |
| 8 | `rsvp` | 505 | RSVP / Will Attend | fade-up (2), zoom-in (1) | 0 |
| 9 | `gallery_photo` | 842 | Potrait of Us | fade-up (3) | 14 |
| 10 | `gallery_video` | 445 | Video Galeri | fade-up (3) | 2 |
| 11 | `live_streaming` | 747 | Live Streaming | fade-up (22), zoom-in (1) | 21 |
| 12 | `filter_instagram` | 1083 | Wedding Filter | fade-up (24) | 21 |
| 13 | `wedding_gift` | 1971 | Wedding Gift / BANK BCA / BANK BCA (014) | zoom-in (1), fade-up (1), fade-up-left (1) | 5 |
| 14 | `wedding_wish` | 865 | Wedding Wish / Katsudoto | fade-up (27) | 20 |
| 15 | `greet_thanks` | 289 | Thank You | – | 0 |
| 16 | `footnote` | 739 | Anna&Kristoff | fade-left (13), fade-up (4), fade-right (1) | 15 |

### Tipografi

- Heading: Crimson Text (25), Brigend Signature (21), Roboto (5)
- Body: Crimson Text (67), Roboto (12), Montserrat (2)
- Tombol: Roboto (6), Crimson Text (6)
- Font face termuat: Roboto 400, Montserrat 500, Montserrat 100 900, Crimson Text 400, Brigend Signature 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#F5F5F5` |
| `--background-secondary` | `#E4EBF2` |
| `--background-tertiary` | `#FEFEFC` |
| `--text-primary` | `#94ABB9` |
| `--text-secondary` | `#94ABB9` |
| `--text-tertiary` | `#94ABB9` |
| `--button-text-primary` | `#F5F5F5` |
| `--button-background-primary` | `#94ABB9` |
| `--button-text-secondary` | `#94ABB9` |
| `--button-background-secondary` | `#E4EBF2` |

- Warna teks terbanyak: #94abb9 (105), #ffffff (11), #f5f5f5 (10), #000000 (2)
- Background terbanyak: #94abb9 (13), #e4ebf2 (13), #fefefc (6), #ffffff (3), #f5f5f5 (2), #73859f @0.5 (2)

### Motion

- AOS: 228 elemen; efek teratas fade-up (136), fade-left (39), zoom-in (22), fade-up-right (11), fade-up-left (7), fade-down (5); durasi 400–2000 ms (terbanyak 1300 (93), 1000 (52), 1200 (42)).
- CSS keyframes khas template: movebounce-galeri-kiri, movebounce-galeri-kanan, goyang, goyang-slow, zoomFade; sedang jalan: zoomFade×1, goyang×46.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 32 img + 1 background (format: png 32, jpg 1).
- Ornamen terbesar (px): 1307×2048, 1214×1214, 1280×720, 684×1347, 796×1115, 1088×708, 868×844, 844×828.
- Foto/upload pengguna tampil: 23 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 6.

