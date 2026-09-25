---
source_url: https://katsudoto.id/desain/
captured_at: 2026-09-25
sources:
  - https://katsudoto.id/undangan-website
  - https://katsudoto.id/undangan-lite
  - https://katsudoto.id/v2/package
  - https://katsudoto.id/buku-tamu-digital
  - https://katsudoto.id/wedding-planner
  - https://panduan.katsudoto.id/llms.txt (77 halaman panduan, versi .md)
---
# Katsudoto — produk, flow aplikasi, fitur (riset 2026-09-25)

Katsudoto berdiri 14 Okt 2018 dan mengklaim 11.872+ pasangan. Posisinya **mid–premium self-serve**: desain eksklusif, dashboard lengkap, dan add-on dijual à-la-carte. Ini pesaing yang paling mirip arah produk kita, jadi layak dibedah.

> Catatan IP: dokumen ini mencatat **fitur dan pola UX**. Itu ide, dan boleh ditiru. Kode, ilustrasi, foto, font berlisensi, dan copy teks mereka **tidak** kita salin. Detail per template ada di [templates/](templates/), dengan aturan pakai di [README](README.md).

## 1. Lini produk
| Produk | Harga | Inti |
|---|---|---|
| **Undangan Website Premium** | paket Rp250rb–700rb atau rakit sendiri (fitur dasar Rp250rb + add-on) | 59 desain, semua boleh dipakai dan diganti kapan saja tanpa biaya |
| **Undangan Website Lite** | **Rp100rb flat**, aktif 2 bulan | desain terbatas (`for_lite_bundle`), fitur dasar, WA manual, bisa upgrade ke Premium |
| **Digital Guestbook & QR** | via WhatsApp (paket Online / On-site), sudah termasuk undangan website | app usher, check-in QR, layar sapa, meja, souvenir, doorprize |
| **Wedding Planner** | Rp99rb (gratis di paket Pengantin) | budget, tabungan nikah, to-do, vendor, administrasi, seragam, seserahan, rundown |
| Undangan Event, Mitra/reseller, Custom desain | via WA | di luar fokus |

## 2. Paket & harga (halaman `/v2/package`)
| Paket | Harga | Tambahan dari paket sebelumnya | Masa aktif |
|---|---|---|---|
| **Fitur Dasar** | Rp250.000 | unlimited edit, maps, countdown, add to calendar, smart dashboard, protokol kesehatan, autoplay lagu, IG mempelai, RSVP, amplop digital, wedding wish, subdomain, pilihan bahasa, semua desain, 15 foto, crop foto, GIF, sapa tamu, WA manual, free wedding planner | 1 tahun |
| **Lamar** | Rp400.000 | custom lagu, love story, filter IG, live streaming, personalized invitation, 25 foto, galeri video, sesi acara, icon event | 2 tahun |
| **Mantu** | Rp500.000 | 35 foto, ganti warna & font, kirim kado, dresscode, custom teks WA, turut mengundang, efek daun jatuh | selamanya |
| **Pengantin** | Rp700.000 | foto unlimited, custom loading logo, crop lagu, rundown, RSVP+, atur section, table & souvenir management, digital wedding planner, 100 Smart WhatsApp | selamanya |

**Add-on à-la-carte** (di atas Fitur Dasar Rp250rb):

| Add-on | Harga | Add-on | Harga |
|---|---|---|---|
| Atur Section | 50rb | RSVP+ | 150rb |
| Ganti Warna & Font | 80rb | Rundown | 50rb |
| Custom Lagu | 50rb | Crop Lagu | 30rb |
| Custom Loading | 30rb | Custom Teks WA | 50rb |
| Daun Jatuh (efek) | 30rb | Dresscode | 50rb |
| Kirim Kado | 50rb | Turut Mengundang | 20rb |
| Love Story | 20rb | Icon Event | 20rb |
| Sesi Acara | 25rb | Live Streaming / Galeri Video / Filter IG / Personalized Invitation | 10rb masing-masing |
| Masa Aktif Tanpa Batas | 100rb | Galeri Foto | 1rb/foto |
| Smart WhatsApp | 1rb/pesan | WhatsApp Reminder | 1rb/pesan |

Pelajaran: harga mereka **2–3× di atas** draft tier kita (Rp79–249rb). Untuk pembeli, nilai yang terasa ada di **desain + dashboard tamu**, bukan di fitur section (fitur section dijual murah, 10–50rb). Model "fitur dasar + add-on" membuat harga awal terlihat rendah dan menaikkan rata-rata nilai order (AOV).

## 3. Flow pengguna (dari panduan)
1. **Landing → Daftar/Buat undangan.**
2. **Onboarding data minimum**: nama kamu + pasangan, judul undangan, tanggal nikah, tahap persiapan.
3. **Akun**: email + no. WA (keduanya unik), lalu **OTP ke email**.
4. **Detail pernikahan**: alamat venue, perkiraan jumlah tamu. Semua bisa diubah nanti.
5. **Pilih paket atau rakit fitur**: ada kalkulator harga live, lalu tombol "Beli Sekarang".
6. **Checkout**: voucher/**kode referral**, lalu payment gateway (kartu, VA, e-wallet). **Invoice berlaku 1×24 jam.**
7. **Smart Dashboard**: undangan langsung bisa diisi. FAQ bilang self-service bisa jadi & disebar di hari yang sama. Ada juga opsi "dibantu admin" via WA.
8. **Upgrade kapan saja**: halaman Upgrade Paket menampilkan fitur yang belum dimiliki, bayar, dan fitur **aktif otomatis**.
9. Guestbook: beli lewat WA (manual), lalu CS memberi link, user daftar, lalu **claim code**.

**Preview desain publik**: tiap desain punya demo live di subdomain (`{pasangan}.katsudoto.id/{kodeTamu}`), plus mode `?mode=DREAMBOARD` (teaser/preview versi pendek).

## 4. Smart Dashboard — menu & fitur editor
| Menu | Isi |
|---|---|
| **Ubah Desain → Tampilan** | ganti template (semua desain), preview desktop/HP/tablet, landscape/portrait |
| **Ubah Desain → Warna** | 3 slot: **Primary / Secondary / Tertiary** untuk background, teks, dan tombol; color picker + input RGB (hanya desain bertanda "editable") |
| **Ubah Desain → Typography** | 2 font (Heading, Body): jenis, ukuran, ketebalan, kapitalisasi |
| **Ubah Desain → Susunan** | drag urutan section, on/off section, **ukuran font per section** |
| **Informasi Mempelai** | judul + deskripsi section, foto profil (toggle), nama, nama ortu (toggle), IG, deskripsi, "nama mempelai wanita duluan" |
| **Informasi Acara** | multi-**hari** → multi-acara per hari; "lokasi sama dalam satu hari"; ikon acara custom; format waktu + **zona waktu**; dresscode (deskripsi, gambar/ikon, multi warna, catatan); **Acara Utama** (menggerakkan cover, countdown, penutup, pesan WA); **Private** (acara hanya tampil bagi tamu berkode/terdaftar) |
| **Informasi Tambahan** | alamat website (subdomain, **boleh ganti maks 1×**), bahasa ID/EN, lagu (pustaka atau upload mp3/wav/ogg), **crop lagu**, live streaming (YouTube/Zoom/Meet + akses + keterangan), filter IG (link + gambar preview), protokol kesehatan, countdown, quote/doa, turut mengundang |
| **Cover** | logo inisial (toggle), judul, teks atas/bawah, foto cover **terpisah desktop & mobile** |
| **Cover Pembuka** | loading custom (logo + teks, atau teks + warna); teks cover pembuka (judul, sapaan, **kategori tamu**, teks tombol); **efek visual**: Mawar/Sakura/Sparkle/Cream Petals/Snow/White Petals + intensitas (sangat sedikit…sangat banyak) + kecepatan; fallback ke foto cover atau ilustrasi template |
| **RSVP** | personalized invitation (teks sapaan personal); sapa tamu ("Hai/Kepada Yth." + nama tamu terpisah/gabung); on/off RSVP (mode "announcement"); **batas waktu RSVP**; teks pertanyaan; teks tombol; pilihan acara; teks greeting setelah konfirmasi |
| **RSVP+** | pertanyaan lanjutan: **Makanan & Minuman**, **Akomodasi** (maks 3 pertanyaan pilihan ganda/isian); privasi: semua / kode unik / grup / per nama; jawaban manual; diagram ringkasan; download |
| **Galeri** | foto (maks 5 MB, jpg/png, multi-hapus, drag urut) + video YouTube (URL/ID, judul, drag urut) |
| **Hadiah** | **Amplop digital**: rekening (nama, nomor, bank, **barcode/QR**), visibilitas per tamu/grup, **form konfirmasi transfer** dari tamu, lalu "dana terkumpul" + riwayat transaksi. **Kado**: daftar hadiah (gambar, nama, deskripsi, jumlah, harga, link marketplace), alamat kirim, konfirmasi pembelian dari tamu, lalu status kado |
| **Cerita Cinta** | unlimited cerita (gambar, judul, isi) |
| **Ucapan Pernikahan** | judul/deskripsi; komentar publik vs hanya tamu terdaftar; **moderasi sebelum tampil**; tampilkan kategori tamu |
| **Rundown** | per acara, agenda (ikon, judul, jam), **highlight agenda**, toggle tampil di undangan |
| **Pengaturan** | SEO on/off (index Google + OG preview), **thumbnail share manual** |
| **Kelola Tamu** | lihat §5 |
| **Akun** | profil, password, **tagihan** (invoice, jatuh tempo), notifikasi per fitur |

## 5. Kelola Tamu & distribusi
- **Kategori tamu**: Tamu Khusus (data diinput host, langsung punya link berkode) vs Tamu Umum (isi form dulu). Guestbook menambah label **VVIP (mahkota) / VIP (bintang) / Regular** + nomor urut VIP.
- **Grup tamu** (keluarga, kantor, …). Sesi acara, RSVP (maks pax), dan teks bisa diatur **per grup / per tamu / tamu umum**.
- **3 cara tambah tamu**:
  - manual;
  - **import .xls** (unduh contoh → upload → validasi → halaman *Tinjau Tamu* → proses);
  - **link form** per grup: kuota, minta email/WA, pertanyaan RSVP, template teks. Tamu yang daftar lewat form **otomatis dikirimi link** via email/WA.
- **Pengiriman**:
  - **Smart WhatsApp**: WA Business API milik katsudoto, kuota berbayar, status per tamu.
  - **WhatsApp manual**: pakai WA pribadi, unlimited.
  - **Email**: unlimited.
  - **Salin link** + teks.
- **Custom template teks WA**: maks 512 karakter / 10 baris, lalu **approval 5–10 menit**. Ini approval template Meta untuk WA API.
- **Status tracking per tamu**: `New → Pending → Invited / Failed → Read → Opened → Going / Not Going`, plus `Reminded`.
- **Reminder RSVP** untuk tamu Invited/Opened; **Auto Wedding Day Reminder** (H-n, jam bisa diatur, per tamu atau semua; default H-1) hanya untuk tamu yang sudah Going.
- **Statistik**: kuota RSVP terisi, WA terkirim, total tamu hadir termasuk plus-one.

## 6. Buku tamu digital (hari-H)
- **App Penerima Tamu (usherapp)**: web app, login pakai **passkey** atau **scan QR** dari dashboard. Mode usher: **Check-In / Check-Out / Tracking (WO)**.
- **Registrasi**: scan QR tamu; cari nama (manual); tambah tamu on-the-spot. Setelah itu opsional: verifikasi → **selfie check-in** → **print tiket penomoran** (per kategori, n kali) → **pop-up sapaan**.
- **Hadiah**: amplop/kado dicatat saat check-in + **penomoran hadiah** (kode ditulis di amplop), plus hadiah titipan dengan tiket print.
- **Layar Sapa**: TV ≥ 42" menampilkan nama pengantin (idle) lalu sapaan nama tamu saat check-in; 3 layout per kategori.
- **Table management**: meja × kursi per acara; tamu Going di-assign dan **plus-one ikut otomatis**; seating card siap cetak; PDF; pindah meja manual di hari-H.
- **Souvenir management**: jenis + stok, pencatatan per tamu, download.
- **Doorprize**: acak nama dari tamu yang sudah check-in, filter kategori.
- **WO Tracking**: daftar VIP/VVIP masuk real-time, centang sudah diproses, notifikasi data baru.
- **Hybrid Mode**: check-in tetap jalan saat internet putus (sinkron belakangan).
- **E-Invitation**: kartu ringkas (foto, nama tamu, info acara, **QR**) yang tampil di undangan dan bisa diunduh; **QR General** untuk tamu tanpa kode (dipindai, lalu "tambah tamu on the spot"); warna/font; **bulk download** per kategori/grup/nama untuk dicetak.
- **Auto Thank You Message** via WA setelah check-in.
- **Statistik**: hadir vs RSVP, per kategori, check-in/out, tamu tambahan, per grup; peringatan **overcapacity**.

## 7. Anatomi undangan (pola teknis di demo)
Diambil dari demo live (lihat [templates/](templates/)):
- **Section berurutan** ditandai `data-section-order`. Katalog section: `opening_cover, cover, quote, couple, love_story, save_the_date, event (+dresscode), live_streaming, rundown, rsvp, gallery_photo, gallery_video, filter_instagram, wedding_gift (+kado), wedding_wish, greet_thanks, footnote`. Ini sama persis dengan katalog section S2 kita, dan urutannya bisa diubah user.
- **Desktop = split screen**: panel kiri berisi cover/foto tetap, panel kanan konten scroll. **Mobile**: cover pembuka, lalu konten.
- **Kontrak warna editor**: token `--background-{primary,secondary,tertiary}`, `--text-*`, `--button-text-*`, `--button-background-*`, `--body-text-{family,size,weight,style,lettercase}`, `--heading-*`. Konsep 3-slot ini mirip `--c-*` kita, tapi dinamai per *peran pemakaian* sehingga editor bisa generik.
- **Stack**: jQuery, AOS (utama, ratusan elemen per halaman, durasi 1–3 dtk), GSAP (+ScrollTrigger/Flip/Observer/Draggable), tsParticles, Swiper + Slick, lightGallery, Video.js (+YouTube), html2canvas (tiket QR), selectize, Font Awesome 5 + Phosphor. CSS/JS di-bundle hash (`/public/dist/<hash>.css`).
- **Ornamen**: PNG transparan besar (500–2000 px), puluhan per template, dilayer absolut di tiap section. Sebagian besar template memakai ilustrasi AI/digital painting.
- **Foto pengguna**: lewat image proxy (`ar:1/q:90/<base64>.webp`), otomatis ke WebP dan resize.
- **Music box**: tombol piringan hitam berputar (`play-music` keyframe) di pojok.
- **Nama tamu + kategori** (mis. "VIP") tampil di cover pembuka.

## 8. Yang layak diadopsi (prioritas untuk roadmap kita)
| # | Ide | Kenapa | Masuk sesi |
|---|---|---|---|
| 1 | **Onboarding data minimum → bayar → dashboard** (nama, pasangan, tanggal, venue) | validasi quick buy kita; katsudoto juga butuh <5 field sebelum bayar | S5/S8 |
| 2 | **Pricing "dasar + add-on" + kalkulator live**, dengan bundel paket sebagai jangkar | harga awal terasa murah, AOV naik, upgrade kapan saja tanpa migrasi | S8 (model `Entitlement` per fitur, bukan sekadar tier) |
| 3 | **Acara Utama** + acara **Private** + **zona waktu** per acara | satu sumber tanggal untuk cover/countdown/WA; privasi akad | S6 (schema `events[].main`, `private`, `tz`) |
| 4 | **Tamu Khusus vs Tamu Umum** + **link form pendaftaran per grup** (kuota, auto-kirim link) | mengumpulkan data tamu tanpa Excel; cocok untuk grup kantor/komunitas | S9 |
| 5 | **Status funnel tamu** `new→sent→opened→going/not going` + reminder RSVP + H-1 reminder | kita sudah rencana `openedAt`; tambah status & reminder | S7/S9 |
| 6 | **RSVP+** (menu makanan, akomodasi, maks 3 pertanyaan, privasi per grup) + **batas waktu RSVP** | nilai jual tier atas, murah dibangun (form dinamis) | S7 (schema `rsvp.questions[]`, `rsvp.deadline`) |
| 7 | **Moderasi ucapan** + ucapan hanya tamu terdaftar | anti-spam, sudah ada di rencana S10; jadikan toggle | S7 |
| 8 | **Amplop: form konfirmasi transfer** + "dana terkumpul" + **daftar kado** (marketplace link, konfirmasi beli) | fitur hadiah jadi interaktif; tidak butuh payment gateway | S6/S7 (section `gift` + `registry`) |
| 9 | **Efek cover** (kelopak/sakura/sparkle/snow) dengan intensitas & kecepatan | efek murah (canvas ringan) tapi terasa premium; jadikan fitur core `W.fx` | S6 (core runtime) |
| 10 | **Custom loading** (logo inisial / teks) + **thumbnail share manual** + toggle SEO | detail kecil, dijual 30rb | S6/S7 |
| 11 | **Crop lagu** (start/end) + pustaka lagu | di render: `music.start`, `music.end` | S6 |
| 12 | Editor **Warna 3-slot** (primary/secondary/tertiary × bg/text/button) + **Typography 2-font** + **Susunan** (drag + ukuran font per section) | melengkapi varian preset kita dengan custom bebas di tier atas | S6 (tambah kontrak token per peran di `_core`) |
| 13 | Preview editor **desktop/HP/tablet × portrait/landscape** | QA oleh user sendiri | S6 |
| 14 | **Subdomain** `{slug}.domain` + ganti slug maks 1× | link lebih cantik dari `/slug`; batasi ganti agar link tidak rusak | S7/S11 |
| 15 | **E-Invitation kartu QR** + QR General + bulk download untuk dicetak | jembatan ke buku tamu digital | fase lanjut (setelah S9) |
| 16 | Buku tamu: usher app passkey/QR, check-in/out, selfie, print nomor, layar sapa, meja, souvenir, doorprize, hybrid offline | paket hari-H bernilai tinggi (Rp1–2jt di pasar) | fase 2 (roadmap baru S12+) |
| 17 | Kode **referral/voucher** di checkout | kanal mitra/WO/influencer | S8 |
| 18 | Wedding planner (budget, seserahan, seragam, vendor) sebagai **bonus** | retensi dan "alasan buka dashboard" sebelum undangan disebar | nanti (di luar MVP) |

**Tidak ditiru**: WA API sendiri (biaya dan approval Meta, ditunda sesuai keputusan S2); pembelian guestbook manual via WA (kita self-serve); stack berat jQuery + 15 library (kita tetap ringan dengan core `W.ui`).

## 9. Kelemahan katsudoto (celah untuk kita)
- **Mahal**: paket termurah Premium Rp250rb; Lite Rp100rb hanya aktif 2 bulan.
- **Halaman berat**: 150+ gambar PNG, ~15 library, dan ratusan elemen AOS dalam satu halaman. Ini lambat di HP murah dan in-app browser WhatsApp.
- **Ganti warna/font** tidak bisa di semua desain.
- **Guestbook** hanya bisa dibeli lewat chat.
- **Dana amplop** hanya berdasarkan konfirmasi manual tamu, tidak terverifikasi.
