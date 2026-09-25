---
source_url: https://evelynhendry.katsudoto.id/435344
competitor: katsudoto
template: chinese
katsudoto_id: 60
tags: [adat]
released: 2026-05-28
used_count: 15
editable_colors: true
captured_at: 2026-09-25
---
# Chinese (katsudoto) — analisis desain

## Ringkasan
**Pernikahan Tionghoa-Indonesia modern**, perpaduan lukisan tinta (shan shui) dan chinoiserie. Latar kertas xuan krem bertekstur, lanskap gunung-paviliun-perahu dalam tinta abu, dan aksen **biru indigo** + emas + merah lampion. Bunga peony, lotus, dan plum blossom bergaya lukisan porselen. Ada section **Tea Pai** (sangjit/teh pai) sebagai acara khas.

## Layout & alur per section
1. **Cover pembuka**: panel **biru indigo** berbingkai emas dengan border motif **meander/huiwen** di atas, lukisan gunung & tembok besar samar di dalam panel. Diapit rangkaian peony merah, lotus, burung mandarin, dan **lampion merah** menggantung. Label ★ VIP, nama script putih, "Hai {tamu}", dan medali **simpul keberuntungan** emas di bawah. Tombol pil biru "Open Invitation".
2. **Cover**: monogram inisial tipis, foto pasangan di bingkai putih bertepi bunga, dan lanskap tinta di bawah.
3. **Quote**: **amplop merah** dengan lipatan bermotif gunung & gelombang (seigaiha), kartu kutipan miring keluar dari amplop.
4. **Mempelai**: judul script biru; foto dalam **bingkai berbentuk bunga plum/lobed emas**, nama script biru, ortu, IG.
5. **Save the date**: 4 kotak countdown biru membulat, tombol emas Add to Calendar, ornamen pinus bonsai emas di sisi, tanggal "27th, 2026 / SATURDAY".
6. **Acara**: kartu dengan **sudut bingkai kisi Tionghoa emas** (fretwork) + lampion di tepi; ikon garis cincin/gelas; "Tea Pai" dan "Reception" dengan venue + "View Maps". Lanskap paviliun & perahu di bawah.
7. **Dresscode**: ikon pria/wanita + dua baris swatch warna pastel dalam pil.
8. **Rundown**: kartu biru tua dengan medali simpul emas di atas; daftar jam | kegiatan dengan garis pemisah putih.
9. **RSVP** → **Galeri "Captured Moments"** (ikon lampion, kolase foto miring) → **Video** (frame dengan border meander + lampion) → **Live streaming**.
10. **Love story "Written in Time"**: kartu biru berbentuk **pintu bulan/arch berlekuk** dengan foto redup + teks (slider).
11. **Filter IG** (kartu merah dengan ilustrasi), **Gift** (accordion biru), **Kado** (daftar produk + load more), **Ucapan**.
12. **Penutup**: gerbang **moon gate** melengkung, monogram, nama script biru besar, hashtag, lampion, dan lanskap. Footer biru "Powered by".

## Aset
- Ilustrasi lukisan tinta lanskap (gunung, paviliun, perahu, pinus), rangkaian bunga chinoiserie (peony, lotus, plum, krisan biru), lampion merah, burung mandarin, simpul keberuntungan, border meander, sudut fretwork, pola seigaiha, dan tekstur kertas.
- Foto pengguna: cover, 2 profil berbingkai bunga, galeri, dan foto love story.

## Animasi & interaksi
- AOS zoom/fade. Lampion kemungkinan berayun (`goyang`). Slider love story + dot. Kartu kutipan "keluar" dari amplop.

## Tipografi & warna
- Heading: script tebal miring (mirip brush script). Body: serif.
- Palet: indigo `#1c2a5e`-an, krem kertas, emas, aksen merah lampion.

## Arah orisinal untuk kita
- **Tema "Peranakan / Tionghoa-Nusantara"** belum ada di katalog kita. Diferensiasi: gabungkan **batik pesisir Lasem/encim** (merah-biru), ubin peranakan, dan lampion. Jangan pakai lukisan tinta.
- Section khusus: **Sangjit / Teh Pai** sebagai tipe acara di schema (`events[].kind = 'teapai'`), serta shio & pantangan warna dresscode (opsional).
- Pola layak ditiru:
  - panel cover berbingkai dengan border motif tradisional;
  - kartu acara dengan **sudut ornamen** (murah: 4 sudut SVG, bukan satu PNG besar);
  - bingkai foto berbentuk (lobed) via CSS `clip-path`/mask.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 14,199 px ≈ 15.5 layar; 19 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Evelyn & Hendry | fade-up-left (6), zoom-in (3), zoom-in-up (3) | 13 |
| 2 | `quote` | 673 | – | zoom-out (2), fade-up (2), zoom-in (2) | 6 |
| 3 | `couple` | 1601 | A Celebration of Love & Harmony / Hendry Alexander Huang / & | fade-up (9), zoom-in (4), fade-up-left (4) | 14 |
| 4 | `save_the_date` | 431 | Save the date / 0 | fade-up (6), zoom-out (2), zoom-in (1) | 1 |
| 5 | `event` | 2602 | The Wedding Day / June / 27th, 2026 | fade-up (16), zoom-in (14), zoom-in-down (8) | 22 |
| 6 | `rundown` | 777 | Rundown / Reception | zoom-in (4), zoom-out-up (2), zoom-in-up (2) | 8 |
| 7 | `rsvp` | 282 | Will Attend | zoom-out (2), fade-up (2) | 2 |
| 8 | `gallery_photo` | 574 | Captured Moments | fade-up (2), zoom-out (1), fade-left (1) | 12 |
| 9 | `gallery_video` | 469 | Treasured Together / The Pre-Wedding | zoom-in (7), zoom-out (2), zoom-out-up (1) | 10 |
| 10 | `live_streaming` | 465 | Live Streaming | zoom-in (2), fade-up (2) | 2 |
| 11 | `love_story` | 821 | Written in Time / A Serendipitous Beginning / Moments We Cherish | fade-up (8), zoom-in (4), zoom-in-left (2) | 13 |
| 12 | `filter_instagram` | 752 | Wedding Filter | fade-up (4), zoom-out (2) | 3 |
| 13 | `wedding_gift` | 1766 | Wedding Gift / BANK BCA / Upload proof of transfer | zoom-in (5), fade-up (5), zoom-out-up (3) | 14 |
| 14 | `wedding_wish` | 668 | Share Your Wishes / Katsudoto | fade-up (10), zoom-out (1) | 1 |
| 15 | `greet_thanks` | 378 | With Love & Gratitude | zoom-out (2), zoom-in-down (2), zoom-in (1) | 3 |
| 16 | `footnote` | 789 | Evelyn&Hendry | fade-up (4), zoom-in (4), zoom-out (2) | 11 |

### Tipografi

- Heading: Damion (22), Cardo (20), Roboto (11)
- Body: Cardo (66), Roboto (10), Montserrat (2)
- Tombol: Cardo (7), Roboto (4)
- Font face termuat: Roboto 400, Montserrat 500, Montserrat 100 900, Cardo 400, Cardo 700, Damion 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#FCFCF4` |
| `--background-secondary` | `#17245A` |
| `--background-tertiary` | `#AE8F5A` |
| `--text-primary` | `#17245A` |
| `--text-secondary` | `#AE8F5A` |
| `--text-tertiary` | `#FCFCF4` |
| `--button-text-primary` | `#F3F2EE` |
| `--button-background-primary` | `#17245A` |
| `--button-text-secondary` | `#FFFF` |
| `--button-background-secondary` | `#AE8F5A` |

- Warna teks terbanyak: #17245a (44), #fcfcf4 (33), #ae8f5a (26), #ffffff (15), #f3f2ee (6)
- Background terbanyak: #17245a (15), #fcfcf4 (9), #ae8f5a (7), #f0d6c9 (4), #b7ccd1 (3), #f6eed7 (2)

### Motion

- AOS: 226 elemen; efek teratas fade-up (77), zoom-in (57), zoom-out (25), zoom-in-up (15), zoom-in-down (14), zoom-out-up (12); durasi 400–4500 ms (terbanyak 1000 (66), 2500 (66), 1200 (30)).
- CSS keyframes khas template: goyang; sedang jalan: goyang×37.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 39 img + 1 background (format: png 38, jpg 2).
- Ornamen terbesar (px): 1251×2236, 1156×2144, 1236×1788, 688×1596, 1280×720, 1280×720, 840×1024, 800×924.
- Foto/upload pengguna tampil: 20 (termasuk GIF: 1).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 14.

