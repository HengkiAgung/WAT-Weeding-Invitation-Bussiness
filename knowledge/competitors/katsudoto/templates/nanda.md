---
source_url: https://dyapertamananterakhir.katsudoto.id
competitor: katsudoto
template: nanda
katsudoto_id: 5
tags: [fairytale]
released: 2021-11-14
used_count: 1
editable_colors: true
captured_at: 2026-09-25
---
# Nanda (katsudoto) — analisis desain

## Ringkasan
**Pastel pink-mint "princess" dari undangan nyata (2021)**: dibuat untuk pasangan selebritas/influencer lalu dijadikan template. **Pink dusty** (`#d49c93`-an), **mint pucat** (`#e3f3ef`-an), **krem** (`#f3e7d4`-an), **kuning mustard** (`#e8b93b`-an) untuk nama & tombol "Let's Begin", **teal gelap** untuk tombol form. Ornamen **mahkota filigri putih** dan **gulungan emas**. **Ilustrasi karakter pasangan + keluarga** (kartun) di atas ucapan. Love story **ditulis gaya bercerita santai bahasa Indonesia** ("gua", "sms-an"). Catatan: capture memakai fallback clip (scroll-lock), sehingga beberapa frame terpotong.

## Layout & alur per section
1. **Cover pembuka**: foto glamour pink, nama serif mustard besar, tombol mustard "Let's Begin", kilau.
2. **Cover**: foto + panel pink dengan **mahkota filigri putih**, nama, tanggal.
3. **Mempelai**: foto, nama serif mustard, ortu, IG.
4. **Love story "Our Journey"**: **kartu bergantian pink/krem dengan foto + judul bab besar** ("First Meet", "Fall in Love", "Dating", "Propose"), teks panjang santai.
5. **Galeri**: mosaik foto sangat banyak (±25+, beberapa sesi prewed berbeda). **Video**.
6. **Acara**: "Wedding Day" + tanggal + Akad Nikah dengan catatan "Live on IG … and Youtube" (akad disiarkan). Ornamen gulungan emas.
7. **Live streaming**, **Gift**: dropdown + **QR rekening** + **tombol nominal cepat** (50.000 / 100.000 / 200.000 / Lainnya) + form bahasa Indonesia ("Lanjutkan").
8. **Ucapan** di bawah **ilustrasi keluarga kartun** + deretan ikon protokol kesehatan (era pandemi). **Penutup**: kastil pink samar + hashtag + nama.

## Aset
- Mahkota filigri, gulungan emas, ilustrasi karakter pasangan + keluarga, kastil samar. Banyak foto.

## Tipografi & warna
- Heading: serif display (mirip "Yeseva One"). Body: serif.
- Palet: pink `#d49c93`-an, mint `#e3f3ef`-an, krem, mustard `#e8b93b`-an, teal `#3e5b62`-an.

## Arah orisinal untuk kita
- **Tombol nominal cepat di amplop digital** (50rb/100rb/200rb/lainnya) memudahkan tamu. Adopsi di form konfirmasi hadiah (S7).
- **Love story bergaya kartu bab dengan judul besar** + teks panjang → pastikan schema story mendukung teks panjang (limit karakter cukup, mis. 1.500).
- Catatan akad disiarkan → field `events[].note`.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 12,305 px ≈ 13.4 layar; 16 frame.
- Bahasa demo: `en`. Scroller: `window`.
- Tombol buka: tidak ketemu

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `top-cover` | 915 | – | zoom-out (2), zoom-in (1), fade-up (1) | 11 |
| 2 | `start` | 915 | Nanda & Ardya | zoom-out-up (2), fade-down (1), fade-up (1) | 1 |
| 3 | `greetings` | 226 | Hai | zoom-in-up (1), fade-down (1), fade-up (1) | 0 |
| 4 | `bridegroom` | 1416 | Ardya Tridwantoro Handjoko / Nanda Arsyinta Marcheliend Hermiandy | fade-up (4), fade-down (3), zoom-in (2) | 2 |
| 5 | `save-date` | 381 | Save The Date / 0 | fade-up (6), flip-left (2), flip-right (2) | 0 |
| 6 | `love-story` | 2726 | Our Journey / First Meet / Fall in Love | zoom-in (5), fade-down (4), fade-up (4) | 4 |
| 7 | `gallery` | 1870 | – | zoom-in (22) | 22 |
| 8 | `video-gallery` | 362 | I'm enganged to my first love | zoom-in (1), fade-up (1) | 1 |
| 9 | `event-outer` | 658 | Wedding Day Save The Date / Wedding Day / Sunday May 30th, 2021 | zoom-in (4), fade-down (3), fade-up (2) | 1 |
| 10 | `live-streaming` | 550 | Live Streaming | fade-up (1), zoom-in (1), fade-down (1) | 1 |
| 11 | `gift` | 1365 | Wedding Gift It's a big honor to see you at our wedding cere / Wedding | fade-up (1), zoom-in-down (1), zoom-in (1) | 2 |
| 12 | `protocol` | 359 | – | zoom-in (1), zoom-out-up (1) | 3 |
| 13 | `comment-outer` | 926 | Wedding Wish | fade-up (7), fade-down (1) | 0 |
| 14 | `quote` | 136 | – | fade-up (1), fade-down (1) | 0 |
| 15 | `footnote` | 165 | Nanda & Ardya | fade-up (1), zoom-in (1) | 0 |
| 16 | `footer` | 41 | – | – | 1 |
| 17 | `music-outer` | 45 | – | – | 0 |

### Tipografi

- Heading: Elsie Swash Caps (19), Roboto (7), Ventura Times (3)
- Body: Ventura Times (47)
- Tombol: Ventura Times (2)
- Font face termuat: Roboto 400, Roboto 700, Ventura Times normal, Elsie Swash Caps normal

### Warna

- Warna teks terbanyak: #464646 (19), #3f636a (17), #000000 (16), #ffffff (14), #d6a59a (5), #e2b744 (4)
- Background terbanyak: #ffffff (9), #fafafa (5), #f5ebdd (4), #e9f7f4 (3), #d6a59a (2), #b37d70 (2)

### Motion

- AOS: 110 elemen; efek teratas zoom-in (40), fade-up (31), fade-down (16), fade-right (4), fade-left (4), zoom-out (3); durasi 400–2000 ms (terbanyak 1000 (105), 1200 (4), 2000 (2)).
- CSS keyframes khas template: –; sedang jalan: nanda-effects×10.
- Library aktif: jquery, AOS, lightGallery.

### Aset

- Ornamen/ilustrasi template unik: 42 img + 9 background (format: jpeg 23, png 18, jpg 9, ? 1).
- Ornamen terbesar (px): 1400×2097, 1920×1347, 1400×1811, 1400×1750, 1400×1750, 1400×1750, 1400×1750, 1400×1750.
- Foto/upload pengguna tampil: 0 (termasuk GIF: 0).
- Video embed: 0; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor tidak, inline SVG 0.

- Error JS di halaman demo: 1 (contoh: `EXCEPTION Uncaught ReferenceError: tsParticles is not defined`).
