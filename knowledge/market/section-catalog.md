# Katalog Section — Standar + Khas Indonesia (S2, final)

Disusun dari demo pesaing, antara lain:
- akaddigitech adat-jawa
- tamuspecial Bali
- rincian paket Sangmempelai, Acaranya, Indoinvite, dan Invitato
- panduan isi undangan (Griyo Kreasi, Webnikah)

Daftar ini adalah **section registry target** untuk `templates/_core/` (S3). Setiap template wajib menyediakan section **core**. Section **opt** boleh diaktif/nonaktifkan per undangan lewat `window.SECTIONS`.

## Urutan umum di pasar
Cover (Buka Undangan + "Kepada Yth. {tamu}") → salam pembuka → ayat/doa → mempelai (+ orang tua) → countdown/save the date → acara (akad/pemberkatan, resepsi) → live streaming → love story → galeri/video → amplop digital/kado → RSVP + ucapan → turut mengundang → penutup/terima kasih → footer credit.

Urutan boleh berbeda per template (Bali: ucapan sebelum galeri; akaddigitech: mempelai sebelum ayat). Karena itu registry hanya menentukan **id dan kontrak data**. Urutan ditentukan oleh manifest template.

## Registry section final

| id | Label (id) | Status | Data utama | Ada di Eloise? | Sumber pasar |
|---|---|---|---|---|---|
| `cover` | Sampul / Buka Undangan | core | nama panggilan, tanggal, `guest.name`, label "Kepada Yth." | ✅ `#topCover` | semua |
| `opening` | Salam pembuka | core | `religion` → preset salam + paragraf pembuka ("Dengan memohon rahmat…") | ⚠️ sebagian (`intro`) | semua |
| `verse` | Ayat / Doa / Kutipan | opt (default on) | `verse{text, source, translationLang}`, preset per agama (Ar-Rum 21, Kej 2:24, Rg Veda X.85.42), bisa custom | ⚠️ `#quote` (generik) | semua |
| `couple` | Mempelai | core | `groom/bride{fullName, nickname, childOrder ("putra pertama"), father, mother, instagram, photo}` | ✅ `#couple` (tanpa `childOrder`) | semua |
| `countdown` | Hitung mundur / Save the Date | core | tanggal utama, tombol "Simpan ke Kalender" (Google + .ics) | ✅ `#saveDate` | semua |
| `events` | Acara | core | `events[]{type, title, date, timeStart, timeEnd, tz (WIB/WITA/WIT), venue, address, mapUrl, photo, guestGroups[]}` | ✅ `#agenda` | semua; **visibilitas acara per grup tamu** (Invitato, RSVP pilih acara) |
| `rundown` | Susunan acara | opt | `rundown[]{time, title}` | ✅ | Acaranya (Mengundang) |
| `live` | Live streaming | opt | `live{platform, url, schedule}` | ✅ | Indoinvite Premium, Acaranya, Viding |
| `story` | Kisah cinta | opt | `story[]{year/date, title, text, photo}` | ✅ | umum di tier menengah |
| `gallery` | Galeri | opt | `gallery[]` (kuota per paket 6/10/20) | ✅ | semua |
| `video` | Video prewedding | opt | `video{youtubeId \| r2Key}` | ✅ `#footage` | Sangmempelai, Acaranya |
| `gift` | Amplop digital & kado | opt (default on) | `gift{accounts[]{bank/ewallet, number, holder}, qris (gambar), address{name, phone, text}}` + tombol salin | ✅ (tanpa QRIS, tanpa logo bank) | **wajib di pasar ID** |
| `rsvp` | Konfirmasi kehadiran | opt (default on) | nama (terisi otomatis dari tamu), hadir/tidak/ragu, pilih acara, jumlah orang (maks dari data tamu) | ✅ (localStorage) | semua |
| `wishes` | Ucapan & doa | opt (default on) | nama, pesan, (opsional) stiker/emoji; moderasi | ✅ | semua; stiker di akaddigitech |
| `turutMengundang` | Turut mengundang | opt | `inviters[]` (nama keluarga besar, dikelompokkan pihak pria/wanita) | ❌ **baru** | umum di undangan Jawa/formal |
| `qrTicket` | QR tamu / check-in | opt (tier premium) | QR per tamu (dari `guest.code`), dipindai di lokasi | ⚠️ ada tiket RSVP html2canvas (bukan QR) | Indoinvite, Sangmempelai, Acaranya, Hadirly |
| `igFilter` | Filter Instagram | opt | `instagram{url}`, hashtag | ✅ `#ig` | Sangmempelai (add-on Rp25rb), tamuspecial |
| `dresscode` | Dress code / catatan | opt | `notes{dressCode, colors[], text}` | ⚠️ `#footnote` | sebagian |
| `protocol` | Protokol kesehatan | opt (default off) | teks | ❌ | sudah jarang (era COVID); cukup section teks generik |
| `closing` | Penutup / Terima kasih | core | salam penutup per agama, "Kami yang berbahagia", nama keluarga | ✅ `#thanks` (h2 hardcoded, bug) | semua |
| `footer` | Kredit | core (tidak bisa dimatikan di tier dasar) | brand + link | ✅ | semua (sarana copyright + pemasaran) |

Elemen global (bukan section): **musik latar** (`music`, bisa pilih dari pustaka lagu), **navigasi bawah** (ikon Home/Mempelai/Acara/Galeri/Gift/Ucapan, dipakai tamuspecial), **nama tamu** di cover, **mode tanpa foto**, dan **bahasa** (id/en; nanti jw/su untuk teks preset).

## Perubahan data inti (masukan untuk Zod schema S3)
- `religion`: `islam | kristen | katolik | hindu | buddha | konghucu | umum`. Menentukan preset salam, ayat, nama acara default, dan salam penutup.
- `events[].type`: `akad | pemberkatan | pawiwahan | resepsi | siraman | midodareni | mappacci | ngunduh_mantu | sangjit | tea_pai | lainnya`, beserta label default per bahasa.
- `events[].tz`: WIB/WITA/WIT. Undangan lintas pulau sering salah zona waktu.
- `events[].guestGroups[]` + `guest.group`: tamu dari grup tertentu hanya melihat acara tertentu (contoh: akad hanya untuk keluarga).
- `groom/bride.childOrder`, `father`, `mother`: frasa "putra kedua dari Bapak … & Ibu …" dirakit oleh i18n, bukan diketik user.
- `inviters[]` untuk turut mengundang.
- `gift.qris` (gambar QRIS pribadi, bukan pembayaran lewat kita) dan `gift.accounts[].type: bank | ewallet` + logo.
- `guest{name, code, group, maxPax, phone}` dari Excel. RSVP dibatasi `maxPax`.
- `photoless: boolean`.

## Teks WhatsApp (untuk S9 export)
Pasar memakai 4 gaya template: formal keluarga, kantor, teman santai, dan virtual. Placeholder minimum: `{nama_tamu}`, `{link}`, `{nama_mempelai}`, `{tanggal}`. User memilih gaya, lalu teks diisi otomatis per baris Excel dan dibuatkan tautan `wa.me/{phone}?text=…`.

## Fitur hari-H (fase lanjut, setelah S11)
QR check-in (scan lewat HP panitia), **layar sapa** (nama tamu muncul di TV/proyektor), dashboard kehadiran real-time, denah meja, dan laporan Excel. Rujukan: Hadirly, BukuTamu Pro, Invitato (Rp2jt+ dengan usher). Ini peluang upsell premium.

## Sumber
- https://inv.akaddigitech.id/adat-jawa/ · https://www.tamuspecial.com/bali/ · https://www.tamuspecial.com/demo/
- https://www.griyokreasi.com/contoh-isi-undangan-pernikahan/
- https://www.webnikah.com/blog/bank-konten-undangan-digital-lengkap-mulai-dari-ayat-ar-rum-pantun-hingga-template-chat-whatsapp
- https://abadikan.id/id/blog/undangan-digital-islami · https://abadikan.id/id/blog/cara-kirim-amplop-digital
- https://hadirly.id/tutorial/buku-tamu-qr · https://pro.bukutamu.net/pricing · https://katsudoto.id/buku-tamu-digital
