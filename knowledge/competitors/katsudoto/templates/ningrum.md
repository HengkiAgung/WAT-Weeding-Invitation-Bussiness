---
source_url: https://nicholasarabella.katsudoto.id/731900
competitor: katsudoto
template: ningrum
katsudoto_id: 62
tags: [fairytale, vintage]
released: 2026-07-20
used_count: 33
editable_colors: true
captured_at: 2026-09-25
---
# Ningrum (katsudoto) — analisis desain

## Ringkasan
Konsep **"malam gala di istana Eropa"**: gelap, dramatis, dan mewah. Latar hitam-cokelat pekat berselang dengan panel **merah marun beludru**. Ornamennya bingkai cermin barok emas, tirai beludru dengan rumbai emas, pilar ionik, lilin, lampu gantung kristal, mawar merah + peony putih, dan kotak perhiasan. Teks memakai emas pudar dan krem. Targetnya pasangan yang ingin nuansa *old money / fairytale gothic* dengan foto prewed studio malam. Ini desain terbaru (Jul 2026).

## Layout & alur per section
1. **Cover pembuka** (sebelum buka): bingkai cermin barok raksasa berisi foto pasangan, dikerubungi lilin, mawar, peony, lampu minyak emas, dan kotak perhiasan di atas kain beludru merah. Pilar klasik terpotong di kiri. Di atasnya ada label kategori tamu (★ VIP), nama pasangan dalam script emas, "Hai {tamu}", dan tombol pil emas "Open Invitation".
2. **Cover (hero)**: tirai merah-emas terbuka dari atas, bingkai emas + foto, lilin dan mawar di pojok, subjudul kecil + nama dua baris + hashtag.
3. **Quote**: kartu krem membulat di atas latar gelap, kutipan pendek + nama penulis.
4. **Mempelai**: judul script "Groom and Bride"; masing-masing punya bingkai foto emas persegi berukir, nama script besar, nama ortu, dan link IG. Ada pemisah "&". Latar bawah bermotif lampu gantung samar.
5. **Save the date**: latar merah tua dengan motif damask, lampu kristal di atas, dua pilar di sisi. Countdown 4 angka besar (serif ramping) + tombol "Add to Calendar".
6. **Galeri foto**: kolase bingkai emas berbagai ukuran (1 besar + 2 kecil + potongan di tepi).
7. **Acara**: kartu **krem berbentuk lengkung (arch/scalloped)** dengan pola damask samar, diapit tirai merah di kiri-kanan. Isinya tanggal dalam cartouche emas, ikon cincin, nama acara script, jam, venue, dan "View Maps". Kartu kedua untuk resepsi. Dresscode berupa foto contoh + palet warna.
8. **Rundown**: latar merah, judul script, label acara dalam cartouche emas, daftar jam | kegiatan. Transisi ke section berikutnya memakai **tepi kertas sobek putih**.
9. **RSVP** (tampilan sudah konfirmasi): judul script, teks terima kasih, tombol "Change".
10. **Live streaming**: ilustrasi bulan di balik awan malam dalam bingkai, lalu tombol "Open Link".
11. **Love story**: slider kertas perkamen tua bertepi sobek (carousel dengan dot).
12. **Video**: player dalam kartu krem ber-ikon hati.
13. **Wedding gift**: accordion per bank (pil emas), form konfirmasi transfer (nama, pemilik rekening, pesan, nominal), lalu daftar kado (kartu produk + harga + total), lalu alamat kirim.
14. **Filter IG**: tirai merah dengan medali oval emas; kartu preview filter (foto berbingkai barok) + tombol.
15. **Ucapan**: ornamen mahkota/filigri kecil, judul script, input + daftar kartu ucapan.
16. **Terima kasih / penutup**: foto tangga istana berkarpet merah (full-bleed), monogram inisial, nama, hashtag, bingkai cermin di bawah.
17. **Footnote**: bingkai cermin + foto, lalu "Powered by katsudoto" pada merah tua.

Desktop: split screen dengan foto/cover tetap di kiri dan konten di kanan.

## Aset
- ±53 PNG ornamen unik, banyak yang besar (hingga 1000×1824 / 700×2252). Semuanya ilustrasi fotorealistik bergaya AI/digital painting: bingkai cermin barok, tirai beludru, pilar, lilin, chandelier, mawar/peony, lampu minyak, kotak perhiasan, perkamen, tepi sobek.
- Latar: tekstur damask/beludru merah dan hitam pekat.
- Foto pengguna: cover, 2 profil, 8+ galeri, GIF, dan foto penutup. Semua lewat image proxy WebP.
- Ikon garis tipis emas (cincin, gelas bersulang).

## Animasi & interaksi
- Sangat banyak AOS (±230 elemen): terutama `zoom-in`, `fade-up`, `zoom-out`, dengan durasi panjang 1–3 dtk sehingga ornamen "mengembang" saat masuk.
- Keyframe khas: `goyang` (ayun pelan pada lilin/rumbai), `smokeRise` (asap), `bgTcaReveal`.
- Tirai di cover seolah terbuka. Parallax ringan via GSAP ScrollTrigger.
- Music box piringan hitam berputar di kiri bawah. Carousel love story dan kado (Swiper/Slick). Lightbox galeri.

## Tipografi & warna
- Heading: **Sloop** (script kaligrafi tinggi). Body: **Lancelot** (serif dekoratif medieval). Kombinasinya memberi nuansa dongeng klasik.
- Palet: latar `#17130E` (hitam-cokelat), `#48110C` (marun), panel krem `#E7E4DB`, aksen emas pudar `#A29166`, tombol sekunder `#56483B`.

## Arah orisinal untuk kita
- **Tema "Gala Keraton / Istana Malam"**: pakai ornamen lokal sendiri (ukiran Jepara emas, lampu gantung robyong, gebyok, tirai beludru hijau botol/marun). Jangan pakai bingkai cermin barok Eropa.
- Pola yang layak diadopsi:
  - **kartu acara berbentuk lengkung** diapit tirai;
  - **transisi tepi sobek** antar section;
  - countdown angka besar di latar tekstur;
  - ornamen dengan ayunan halus (`goyang`).
- Varian gelap + emas cocok untuk tier premium. Perhatikan kontras teks emas di latar gelap (WCAG) dan berat halaman: 50+ PNG besar terlalu berat. Pakai WebP/AVIF + lazy + sprite.

## Data teknis (otomatis, `tools/demo_digest.py`)

- Viewport capture: 412×915 (phone). Tinggi halaman ≈ 14,916 px ≈ 16.3 layar; 19 frame.
- Bahasa demo: `en`. Scroller: `kat-page__side-to-side`.
- Tombol buka: `Open Invitation` (butuh DOM click)

### Urutan section

| # | section | tinggi (px) | judul terlihat | animasi AOS dominan | img |
|---|---|---|---|---|---|
| 1 | `cover` | 915 | Nicholas & Arabella | zoom-in (3), zoom-in-down (2), fade-down-left (2) | 11 |
| 2 | `quote` | 518 | – | zoom-in (3), fade-up (1) | 3 |
| 3 | `couple` | 1507 | Groom and Bride / Nicholas Alexander / & | zoom-in (8), fade-up (7), zoom-out (4) | 18 |
| 4 | `save_the_date` | 964 | Save the date / 56 / 22 | zoom-out (5), fade-up (5), fade-left (3) | 7 |
| 5 | `gallery_photo` | 558 | Our Gallery | zoom-in (8), fade-up (1) | 8 |
| 6 | `event` | 1846 | The Wedding Day / Holy Matrimony / Reception | zoom-in (27), zoom-out (6), fade-down-left (2) | 20 |
| 7 | `rundown` | 733 | Rundown / Reception | zoom-in (3), fade-sup (1), fade-up (1) | 3 |
| 8 | `rsvp` | 416 | Will Attend | fade-up (2) | 0 |
| 9 | `live_streaming` | 531 | Live Streaming | fade-up (3), zoom-in (1), zoom-out (1) | 2 |
| 10 | `love_story` | 915 | A Timeless Tale / The First Chapter / Little Moments | zoom-in (9), zoom-out (3) | 11 |
| 11 | `gallery_video` | 528 | Our Footage / The Pre-Wedding | zoom-out (1), zoom-out-up (1), zoom-in (1) | 2 |
| 12 | `wedding_gift` | 1804 | Wedding Gift / BANK MANDIRI / Upload proof of transfer | zoom-out (15), fade-up (11), zoom-in (8) | 33 |
| 13 | `filter_instagram` | 947 | A Night in Frames | fade-up (5) | 1 |
| 14 | `wedding_wish` | 673 | Words for Their Forever / Katsudoto | fade-up (8), zoom-in (1) | 1 |
| 15 | `greet_thanks` | 821 | Thank You | zoom-in (6), zoom-in-up (3), zoom-out-up (1) | 8 |
| 16 | `footnote` | 925 | Nicholas & Arabella | zoom-out (5), fade-left (2), fade-up (1) | 11 |

### Tipografi

- Heading: Sloop (22), Lancelot (20), Roboto (11)
- Body: Lancelot (92), Roboto (13)
- Tombol: Lancelot (12), Roboto (4)
- Font face termuat: Roboto 400, Montserrat 500, Lancelot 400, Sloop 400

### Warna

Token editor (primary/secondary/tertiary):

| token | nilai |
|---|---|
| `--background-primary` | `#17130E` |
| `--background-secondary` | `#E7E4DB` |
| `--background-tertiary` | `#48110C` |
| `--text-primary` | `#A29166` |
| `--text-secondary` | `#E7E4DB` |
| `--text-tertiary` | `#48110C` |
| `--button-text-primary` | `#E7E4DB` |
| `--button-background-primary` | `#A29166` |
| `--button-text-secondary` | `#E7E4DB` |
| `--button-background-secondary` | `#56483B` |

- Warna teks terbanyak: #48110c (58), #e7e4db (46), #a29166 (27), #ffffff (9), #48110c @0.6 (2), #56483b (1)
- Background terbanyak: #e7e4db (18), #a29166 (8), #48110c (6), #56483b (5), #f6eed7 (2), #73859f @0.5 (2)

### Motion

- AOS: 233 elemen; efek teratas zoom-in (80), fade-up (55), zoom-out (46), zoom-in-up (16), zoom-in-left (7), fade-left (5); durasi 400–3000 ms (terbanyak 1000 (55), 2500 (47), 1200 (41)).
- CSS keyframes khas template: bgTcaReveal, smokeRise, goyang; sedang jalan: goyang×6.
- Library aktif: jquery, gsap, ScrollTrigger, AOS, tsParticles, Swiper, slick, lightGallery, videojs, html2canvas, Flip.

### Aset

- Ornamen/ilustrasi template unik: 53 img + 1 background (format: png 51, jpg 2, ? 1).
- Ornamen terbesar (px): 1000×1824, 700×2252, 832×1736, 1116×1116, 1280×720, 1280×720, 1200×756, 1140×731.
- Foto/upload pengguna tampil: 20 (termasuk GIF: 1).
- Video embed: 1; `<video>`: 0; audio tag: 0.
- Ikon: Font Awesome ya, Phosphor ya, inline SVG 12.

