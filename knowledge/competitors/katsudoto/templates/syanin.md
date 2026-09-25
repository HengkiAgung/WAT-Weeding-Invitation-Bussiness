---
source_url: https://syaninivan.katsudoto.id
competitor: katsudoto
template: syanin
katsudoto_id: 10
tags: [fairytale, minimalist, vintage]
released: 2022-03-14
used_count: 1
category: biasa
editable_colors: false
lite_bundle: true
captured_at: 2026-09-25
---
# Syanin (katsudoto) — analisis desain

## Ringkasan
**Beige & cokelat kopi susu, filigri vintage (2021)**: latar **beige pasir** (`#ede1d1`-an) berselang **putih**, **pita cokelat** (`#a57a52`-an) full-width, **ornamen filigri/mahkota barok cokelat** kecil di atas judul, **bingkai foto garis cokelat bersudut membulat** + **medali lingkaran ber-filigri** untuk mempelai. Heading **serif display tinggi** (mirip "Cinzel/Italiana") caps cokelat. Love story **sangat panjang** (6 bab "Unexpected Hello/Truth/Dream/Journey…", puisi) + **3 video** (Engagement, Prewedding, Akad Nikah). Undangan resepsi setelah akad (akad sudah lewat, "The Vow 28th August"). Ucapan demo berisi **komentar negatif/troll** ("Apa benar pasangan ini udah cerai ya?"), bukti perlunya moderasi.

## Layout & alur per section
1. **Cover pembuka**: foto gelap, nama serif caps krem, "Dear Mr/Mrs/Ms", tombol cokelat.
2. **Cover**: filigri kecil, "The Wedding of", **foto dalam bingkai garis cokelat**, hashtag, nama caps, tanggal caps.
3. **Mempelai**: foto **lingkaran dalam medali filigri**, nama serif, "The first daughter of…", IG, "&" cokelat.
4. **Love story "Our Unexpected Fate"**: 6 kartu bab (foto berbingkai + judul + teks puisi panjang), **"The Vow"** (akad sudah dilaksanakan, tanggal).
5. **Galeri**: mosaik foto sangat banyak (±40). **Highlight video** (Engagement, Prewedding, Akad Nikah).
6. **Save the date**: kotak countdown **berbentuk lengkung (tag)** di atas pita cokelat. **Our Special Day** (hanya Resepsi), **Live streaming** (akad), **Gift** (QR rekening), **Ucapan** (troll comments!), **Penutup**.

## Aset
- Filigri/mahkota barok cokelat, medali lingkaran, bingkai garis (CSS). Banyak foto & video.

## Tipografi & warna
- Heading: serif display caps. Body: sans (Roboto).
- Palet: beige `#ede1d1`-an, putih, cokelat `#a57a52`-an.

## Arah orisinal untuk kita
- **Moderasi ucapan wajib**. Tiga demo (cassandra, jeni, syanin) menampilkan spam/SQLi/troll. Default kita: **ucapan baru "pending" sampai disetujui, atau auto-approve + filter kata kasar + tombol sembunyikan di dashboard**. Masukkan ke S7 sebagai requirement, bukan nice-to-have.
- **Multi-video dengan judul** (Engagement/Prewedding/Akad) → schema `video` jadi array `videos[] {title, url}`.
- **Acara yang sudah lewat** (akad sudah terjadi) → tampil sebagai "sudah dilaksanakan" (render berdasarkan tanggal: `event.date < now`).

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 13,428 px ≈ 14.7 layar; 18 frame.
- Bahasa demo: `en`. Scroller: `kat-page__solo-pane`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 1015 | Syanin & Ivan | zoom-in (6), fade-up (3), fade-down (2) | 1 |
| 2 | `couple` | 990 | Muhammad Rifai / Ananda Zahira Syanindita | fade-up (6), zoom-out (2), zoom-in (1) | 2 |
| 3 | `love_story` | 3358 | Our Unexpected Fate / Unexpected Hello / Unexpected Truth | zoom-in (11), fade-down (5), fade-up (5) | 10 |
| 4 | `gallery_photo` | 2561 | – | zoom-in (31), fade-up (2) | 31 |
| 5 | `gallery_video` | 1173 | Highlight of #SYANinIVANstory / Engagement / Prewedding | fade-up (4), zoom-in (3), zoom-out-up (1) | 3 |
| 6 | `save_the_date` | 296 | Save The Date / 0 | fade-up (4), zoom-in (1), fade-right (1) | 0 |
| 7 | `event` | 849 | Our Special Day / SundayNovember 07th 2021 / RESEPSI 15:00 - 17:00 | fade-up (7), zoom-in-up (2), zoom-in (2) | 0 |
| 8 | `rsvp` | 0 | – | – | 0 |
| 9 | `live_streaming` | 481 | Live Streaming | fade-up (2), zoom-in (1) | 1 |
| 10 | `wedding_gift` | 1171 | Wedding Gift Your presence is more important to us than anyt / Wedding | fade-up (1), zoom-in-down (1), zoom-in (1) | 2 |
| 11 | `wedding_wish` | 1202 | Wedding Wish | fade-up (9), fade-down (2), zoom-in-up (1) | 0 |
| 12 | `footnote` | 268 | Syanin & Ivan | fade-up (3) | 0 |

### Tipografi

- Heading: Anglecia (24), Roboto (8)
- Body: Roboto (30), Anglecia (6), Ebrima Bold (6), Ebrima Regular (6)
- Tombol: Roboto (3)
- Font face termuat: Roboto 300 italic, Roboto 400 italic, Roboto 300, Roboto 400, Roboto 500, Roboto 700, Montserrat 500, Ebrima Bold 400, Ebrima Regular 400, Anglecia normal

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#F4EBDC` |
| `--background-secondary` | `#D6A59A` |
| `--background-tertiary` | `#FFFFFF` |
| `--text-primary` | `#E2B744` |
| `--text-secondary` | `#0D2A30` |
| `--text-tertiary` | `#FFFFFF` |
| `--button-text-primary` | `#F4EBDC` |
| `--button-background-primary` | `#E2B744` |
| `--button-text-secondary` | `#0D2A30` |
| `--button-background-secondary` | `#D6A59A` |

- Warna teks terbanyak: #634832 (20), #242424 (18), #a27854 (15), #68675e (10), #452812 (4), #ffffff (3)
- Background terbanyak: #ffffff (19), #ece0d1 (12), #a27854 (9), #baa485 (2), #fafafa (1)

### Motion

- AOS: 122 elemen; efek teratas zoom-in (57), fade-up (46), fade-down (9), zoom-in-up (3), zoom-out (2), zoom-in-down (2); durasi 400–1500 ms (terbanyak 1000 (107), 1200 (7), 1500 (6)).
- CSS keyframes khas template: –; sedang jalan: –.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 4 img + 6 background (format: png 7, jpg 2, ? 1).
- Ornamen terbesar (px): 1365×836, 1280×720, 120×90, 0×0.
- Foto/upload pengguna tampil: 40 (termasuk GIF: 0).
- Video embed: 0; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor tidak, inline SVG 2.

