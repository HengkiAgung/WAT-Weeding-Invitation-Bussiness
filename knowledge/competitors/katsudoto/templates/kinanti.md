---
source_url: https://kinantiadimas.katsudoto.id/968513
competitor: katsudoto
template: kinanti
katsudoto_id: 39
tags: [adat, floral, nature]
released: 2024-10-08
used_count: 37
editable_colors: true
captured_at: 2026-09-25
---
# Kinanti (katsudoto) — analisis desain

## Ringkasan
**Jawa "wayang & janur" berpalet mauve**: cover gapura batu ukir abu (gaya candi/gebyok batu), **janur melengkung (penjor) emas** menjuntai, gunung kabut, **wayang kulit** (tokoh berhadapan) di kaki cover, dan gunungan emas. Bunga cat air pink-mauve-krem. Latar **blush/pink krem**, aksen **plum/mauve tua** (`#6a3a4e`-an) + **mustard** untuk tombol sekunder. Ornamen **awan Jawa (mega mendung-like)** sebagai pembatas. **Copy full bahasa Indonesia** ("Buka Undangan", "Hari Yang Ditunggu", "Konfirmasi Kehadiran", "Siaran Langsung", "Ucapan & Harapan").

## Layout & alur per section
1. **Cover pembuka**: gapura batu ukir abu sebagai bingkai atas, janur emas melengkung, gunung, pohon mauve, nama script plum, "Hi {tamu}", tombol "Buka Undangan", wayang + gunungan + bunga di bawah.
2. **Cover**: "Wedding Invitation", nama script, foto dalam **bingkai emas oval dengan janur**, gunung kabut, pohon mauve.
3. **Love story**: foto persegi + kartu krem transparan berbingkai daun (slider titik).
4. **Ayat**: **bingkai ukir hijau-abu berlekuk** + bunga, watermark wayang samar di belakang teks.
5. **Pembukaan**: "The Wedding Of" + salam islami.
6. **Mempelai**: foto dalam **bingkai emas berlekuk-lekuk (arch Jawa)** + bunga, nama script, "Putra dari Bapak …", IG. Busana adat Jawa putih (blangkon, ronce melati).
7. **Countdown "Hari Yang Ditunggu"**: **karangan bunga bulat** dengan gunungan samar di tengah; label bahasa Indonesia (Hari/Jam/Menit/Detik); tombol "Tambah ke Kalender".
8. **Acara**: tanggal dengan pemisah vertikal; **gapura batu ukir** besar membingkai Akad/Resepsi; tombol "Lihat Peta"; bunga di kaki.
9. **Dresscode** ("Traditional Attire", ikon Ethnic, keterangan "Woman: Kebaya, Man: Batik"). **Rundown** + ornamen **lampu/kawung emas** filigri.
10. **Konfirmasi Kehadiran** (tombol "Ubah"), **Galeri** (foto dalam bingkai gunungan emas + strip thumbnail), **Video**, **Filter IG** ("Gunakan Filter").
11. **Gift**: dropdown plum + kartu rekening mustard dengan **awan Jawa**, form ("Lanjutkan"). **Kado**: alamat + daftar kado ("SUDAH HABIS").
12. **Siaran Langsung**, **Ucapan & Harapan** (tombol mustard "Kirim"), **Terima kasih**, **Penutup** (wayang + gunung + janur).

## Aset
- Gapura batu ukir, janur/penjor emas, wayang kulit, gunungan, gunung kabut, pohon mauve, bunga cat air, awan Jawa, dan filigri kawung emas.

## Animasi & interaksi
- AOS; slider love story. Semua label UI dalam bahasa Indonesia (i18n penuh, termasuk status kado "Sudah Habis").

## Tipografi & warna
- Heading: script kaligrafi. Body: serif.
- Palet: blush `#f5e9e1`-an, plum `#6a3a4e`-an, mustard `#d8a95a`-an, abu batu.

## Arah orisinal untuk kita
- Bukti **i18n penuh bahasa Indonesia** (termasuk label tombol & countdown) adalah ekspektasi pasar. Label `id` kita sudah ada; pastikan semua string UI (termasuk status kado, tombol form) terkunci di `labels.id`.
- **Janur** sudah dipakai katsudoto di sini. Kalau kita pakai janur, bedakan gaya (line-art hijau muda segar, bukan emas).
- Palet **mauve/plum + mustard** untuk Jawa terlihat segar (tidak cokelat-emas klise). Jadikan varian warna Sekar ("Sekar Ungu Terong").

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 14,637 px ≈ 16.0 layar; 19 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Buka Undangan` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Kinanti & Adimas | fade-up (18), zoom-out (2), fade-down (2) | 21 |
| 2 | `love_story` | 708 | Our Story / First Date / We're Forever | zoom-in (15), fade-up (4) | 14 |
| 3 | `quote` | 584 | – | fade-up-left (14), zoom-in (2), fade-up (1) | 16 |
| 4 | `couple` | 1886 | The Wedding Of / Adimas Fernando / & | fade-down (24), fade-up (7), zoom-in (4) | 28 |
| 5 | `save_the_date` | 744 | Hari Yang Ditunggu / 0 | zoom-in (13), fade-up (2), fade-down-right (1) | 13 |
| 6 | `event` | 2380 | It's Wedding Day / 19 / Akad Nikah | zoom-in (33), fade-up (22), zoom-out (2) | 36 |
| 7 | `rundown` | 525 | Rundown / Resepsi | – | 0 |
| 8 | `rsvp` | 634 | Konfirmasi Kehadiran / Hadir | fade-down (13), fade-up (2), zoom-in (1) | 13 |
| 9 | `gallery_photo` | 772 | Potraits of Us | fade-up (45) | 65 |
| 10 | `gallery_video` | 471 | Our Footage / Pre-Wedding | zoom-in (5), fade-up (2), zoom-out-up (1) | 6 |
| 11 | `filter_instagram` | 828 | Wedding Filter | fade-up (13) | 10 |
| 12 | `wedding_gift` | 1592 | Wedding Gift / BANK BCA / BANK BCA (014) | fade-up (6), zoom-in (1) | 8 |
| 13 | `live_streaming` | 422 | Siaran Langsung | zoom-in (5), fade-up (1) | 5 |
| 14 | `wedding_wish` | 705 | Ucapan & Harapan / Katsudoto | fade-up (9) | 1 |
| 15 | `greet_thanks` | 331 | Thank You | – | 0 |
| 16 | `footnote` | 818 | Kinanti & Adimas | fade-up (23), zoom-out (2), zoom-in (1) | 24 |

### Tipografi

- Heading: Hurricane (28), Crimson Text (15), Roboto (7)
- Body: Crimson Text (74), Roboto (12), Montserrat (2)
- Tombol: Roboto (6), Crimson Text (6)
- Font face termuat: Roboto 400, Roboto 500, Roboto 700, Montserrat 500, Montserrat 100 900, Crimson Text 400, Crimson Text 600, Crimson Text 700, Hurricane 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#F3E4D8` |
| `--background-secondary` | `#E9DDBB` |
| `--background-tertiary` | `#FFFAEB` |
| `--text-primary` | `#613947` |
| `--text-secondary` | `#57411C` |
| `--text-tertiary` | `#57411C` |
| `--button-text-primary` | `#ECE8D8` |
| `--button-background-primary` | `#613947` |
| `--button-text-secondary` | `#ECE8D8` |
| `--button-background-secondary` | `#D0A25E` |

- Warna teks terbanyak: #613947 (54), #57411c (47), #ffffff (11), #ece8d8 (9), #57411c @0.5 (3), #000000 (2)
- Background terbanyak: #e9ddbb (12), #613947 (9), #f3e4d8 (4), #ffffff (3), #f6eed7 (2), #73859f @0.5 (2)

### Motion

- AOS: 330 elemen; efek teratas fade-up (178), zoom-in (85), fade-down (40), fade-up-left (15), zoom-out (8), fade-down-right (1); durasi 400–2000 ms (terbanyak 1200 (237), 1000 (52), 1500 (24)).
- CSS keyframes khas template: goyang, goyang-slow, cloud, scaleAnimate; sedang jalan: scaleAnimate×4, goyang-slow×16, goyang×36, cloud×4.
- Library aktif: jquery, AOS, tsParticles, slick, lightGallery, videojs, html2canvas.

### Aset

- Ornamen/ilustrasi template unik: 36 img + 2 background (format: png 38).
- Ornamen terbesar (px): 1200×2038, 1599×1033, 1600×865, 700×1807, 700×1308, 700×1107, 600×1228, 800×838.
- Foto/upload pengguna tampil: 6 (termasuk GIF: 0).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 3.

