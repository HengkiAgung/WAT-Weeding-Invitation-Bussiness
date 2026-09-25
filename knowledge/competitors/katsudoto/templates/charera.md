---
source_url: https://leoncelesta.katsudoto.id/728632
competitor: katsudoto
template: charera
katsudoto_id: 50
tags: [fairytale]
released: 2025-08-12
used_count: 5
editable_colors: true
captured_at: 2026-09-25
---
# Charera (katsudoto) — analisis desain

## Ringkasan
**Winter wonderland / istana es "Frozen"**: **istana putih-biru bermenara** di awan, **pohon bersalju**, pegunungan salju, cemara, dan **mawar biru + putih** cat air. Latar **biru periwinkle pucat bertekstur** (`#c9d9f5`-an), kartu putih **arch**, bingkai foto **oval perak/es berukir**, tombol **navy-teal gelap** (`#1f4a63`-an). Heading **script kaligrafi navy**. Monogram inisial serif besar. **Pemilih bahasa (bendera) melayang** di kanan atas tiap layar. Kupu-kupu biru.

## Layout & alur per section
1. **Cover pembuka**: istana es + awan, ★ VIP, nama script navy, pohon salju, mawar biru, "Hai {tamu}", tombol navy.
2. **Cover**: monogram "CM" serif, "Wedding Invitation", nama script, hashtag, pegunungan salju + cemara + balustrade.
3. **Quote**: kartu **arch putih** berbingkai mawar biru, filigri kecil.
4. **Mempelai**: foto dalam **oval cermin perak** + mawar biru, nama script, ortu, pil IG navy, pemisah "|&|".
5. **Acara**: **setengah halaman arch putih** di atas istana samping, "The Wedding Day" + tanggal vertikal, Holy Matrimony/Reception.
6. **Dresscode**: kartu ikon gaun/jas besar putih dengan swatch biru di atasnya ("WOMEN"/"MEN" dengan garis).
7. **Rundown**, **RSVP** (kartu arch), **Galeri "Portraits of Us"** (**stack kartu miring**/deck swipe), **Video**, **Love story** (foto + teks overlay + "‹ 1/2 ›").
8. **Gift** (kartu dengan **QR rekening**), **Kado** (alamat + produk grid 2), **Live streaming** (arch), **Filter IG** (poster), **Countdown** (dalam **karangan mawar biru oval**), **Ucapan**, **Terima kasih**, **Penutup** (istana es + monogram).

## Aset
- Lukisan: istana es, pohon salju, gunung, cemara, balustrade. Mawar biru/putih, bingkai oval perak, filigri, kupu-kupu biru.

## Animasi & interaksi
- **Galeri tumpukan kartu (card stack/swiper effect: cards)**. Pemilih bahasa melayang. AOS.

## Tipografi & warna
- Heading: script kaligrafi + serif monogram. Body: serif.
- Palet: periwinkle `#c9d9f5`-an, putih, navy-teal `#1f4a63`-an, beige tombol dropdown.

## Arah orisinal untuk kita
- **Galeri card-stack** (Swiper `effect: 'cards'` atau CSS sederhana) adalah interaksi menyenangkan. Tambahkan sebagai **mode galeri** di `W.ui` (grid | carousel | cards).
- **Pemilih bahasa melayang** di pojok: pola konsisten di template katsudoto baru. Kita tambahkan di core bila undangan punya >1 bahasa.
- Tema salju kurang relevan untuk Indonesia (hanya 5 pemakaian). Versi kita: **"Kabut Dieng/Bromo"** (dingin, biru-putih, lokal).

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 14,349 px ≈ 15.7 layar; 19 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Leon &Celesta | fade-up (5), fade-right (4), zoom-in (3) | 13 |
| 2 | `quote` | 554 | – | fade-right (3), fade-up (3), fade-left (2) | 10 |
| 3 | `couple` | 1572 | The Wedding of / Leon Alistair / & | fade-up (21), zoom-in (8), zoom-out (2) | 22 |
| 4 | `event` | 2446 | The Wedding Day / Friday / 29 | fade-up (24), zoom-in (14), fade-left (10) | 39 |
| 5 | `rundown` | 489 | Rundown / Reception | – | 0 |
| 6 | `rsvp` | 562 | RSVP / Will Attend | fade-up (11), zoom-in (5) | 13 |
| 7 | `gallery_photo` | 492 | Potraits of Us | zoom-out (1), fade-up (1) | 8 |
| 8 | `gallery_video` | 564 | Our Footage / The Pre-Wedding | fade-up (9), zoom-out (1), zoom-out-up (1) | 10 |
| 9 | `love_story` | 876 | Our Story / The First Snow / Forever in Frost | fade-up (13), zoom-in (4), fade-up-left (4) | 20 |
| 10 | `wedding_gift` | 1655 | Wedding Gift / BANK MANDIRI / BANK MANDIRI (008) | fade-up (13), zoom-in (10) | 19 |
| 11 | `live_streaming` | 541 | Live Streaming | fade-left (4), zoom-in (3), fade-up (2) | 9 |
| 12 | `filter_instagram` | 799 | Wedding Filter | fade-up (4) | 1 |
| 13 | `save_the_date` | 741 | Save The Date / 0 | zoom-in (11), fade-up (5), fade-right (2) | 16 |
| 14 | `wedding_wish` | 811 | Wedding Wish / Katsudoto | fade-up (8) | 0 |
| 15 | `greet_thanks` | 265 | Thank You | – | 0 |
| 16 | `footnote` | 751 | Leon&Celesta | fade-up (11), fade-up-right (4), zoom-out (2) | 33 |

### Tipografi

- Heading: Meie Script (29), Lora (16), Roboto (11)
- Body: Lora (60), Roboto (10), Montserrat (2)
- Tombol: Lora (6), Roboto (4)
- Font face termuat: Roboto 400, Roboto 500, Montserrat 500, Montserrat 100 900, Lora 400 700, Meie Script 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#DFECFF` |
| `--background-secondary` | `#FBFCFD` |
| `--background-tertiary` | `#557789` |
| `--text-primary` | `#254E64` |
| `--text-secondary` | `#6388BC` |
| `--text-tertiary` | `#404040` |
| `--button-text-primary` | `#F6F2E9` |
| `--button-background-primary` | `#254E64` |
| `--button-text-secondary` | `#254E64` |
| `--button-background-secondary` | `#E4D9BE` |

- Warna teks terbanyak: #254e64 (51), #6388bc (32), #404040 (16), #ffffff (9), #f6f2e9 (8)
- Background terbanyak: #fbfcfd (17), #254e64 (12), #e4d9be (5), #dfecff (4), #ffffff (3), #f6eed7 (2)

### Motion

- AOS: 275 elemen; efek teratas fade-up (143), zoom-in (64), fade-right (21), fade-left (16), fade-up-right (11), zoom-out (8); durasi 400–2100 ms (terbanyak 1000 (75), 1200 (52), 1300 (43)).
- CSS keyframes khas template: goyang, goyang-slow, fly-1, fly-2, flap, flap-2, cloud-left; sedang jalan: goyang×40, flap×7, flap-2×4, cloud-left×3, chindy-effects×10.
- Library aktif: jquery, AOS, tsParticles, Swiper, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 52 img + 2 background (format: png 53, jpg 1).
- Ornamen terbesar (px): 800×1001, 800×706, 936×578, 700×765, 650×791, 600×753, 400×1091, 780×536.
- Foto/upload pengguna tampil: 10 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 4.

