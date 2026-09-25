# Katsudoto — indeks 59 template (riset 2026-09-25)

Diurutkan menurut **jumlah pemakaian** (`used_count` dari katalog). Kolom ornamen dan AOS diambil otomatis dari capture (`tools/demo_digest.py`). Detail per template ada di file masing-masing. Aturan pakai ada di [../README.md](../README.md): riset ide, **bukan** jiplak aset/kode/copy.

## Pola lintas template (sintesis)

### 1. Apa yang laku
- **Top 6 (106–50 pemakaian)** didominasi dua gaya:
  - **ilustrasi lukisan cat air/"AI painting" yang padat** (40–57 PNG ornamen, 300–500 elemen AOS per halaman), bertema **adat Jawa/Sunda** (anselma, alsa, silika) atau **taman Eropa romantis** (cassie, aulia, ivana);
  - **floral minimalis** (eloise #1, 128).
- **Photo-first tanpa ilustrasi** adalah grup kedua: noir 40, nadia 24, chitra 23, cassandra 17. Modal aset nol, tetap laku.
- **Ceruk yang sepi**: salju (charera 5), laut (oceana 1), retro Y2K (valerie 2), poster sporty (ayyara 4), Bugis (katrina 8), princess (anin 9). Menarik tapi volume kecil.
- **Evolusi**: 2021–22 berupa template sederhana (1–16 ornamen, script + serif, foto dominan). Sejak 2024–26 bergeser ke ilustrasi padat bergaya lukisan dengan copy "sastrawi" per section. Rilis ±1 template/bulan.

### 2. Anatomi yang konsisten di semua template
- Urutan section fleksibel (`data-section-order`), tapi urutan default hampir selalu: cover pembuka → cover → quote/ayat → mempelai → (love story) → save the date → acara (+dresscode) → rundown → RSVP (+E-Invitation QR) → galeri → video → live → filter IG → gift (+kado) → ucapan → terima kasih → footnote. **Sama dengan registry kita**, validasi S2.
- **Cover pembuka**: nama + "Hai/Kepada Yth. {tamu}" + badge kategori (★ VIP) + satu tombol. Copy tombol bervariasi: "Open Invitation", "Buka Undangan", "Step Inside", "Start The Journey", "Let's Begin", "Lihat Undangan".
- **Music box piringan hitam** berputar di pojok (semua template).
- **Desktop**: split-screen (kiri cover tetap, kanan scroll).

### 3. Pola UI yang layak masuk `_core` kita (frekuensi di 59 demo)
| Pola | Contoh | Status kita |
|---|---|---|
| E-Invitation (kartu QR) + tombol unduh setelah RSVP | palace, jeni, sintia, chitra, tiani, alunan | ✅ `W.ui.qrTicket` |
| QR code per rekening di kartu gift | eleanor, valerie, charera, jessica, tasya, chitra | ⚠️ tambah `gift.accounts[].qr` |
| Daftar kado (registry) + kuantitas + **SOLD OUT** + alamat + copy | ribka, nadira, kinanti, aine, anin | ❌ baru, S6/S7 |
| Form konfirmasi transfer (nama, pemilik rek, pesan, nominal) + **tombol nominal cepat** | semua, nanda | ❌ S7 |
| Tab "Amplop Digital \| Kirim Kado" | sukma | ❌ S6 |
| Ucapan dengan pagination "Show more comments" | hampir semua | ⚠️ tambah paging di `W.ui.wishes` |
| **Pemilih bahasa melayang** | tia, cassie, charera, aulia | ❌ core, bila >1 bahasa |
| **Tombol RSVP di cover** | aulia, aine, olan, jessica, serlyn | ❌ opsi `cover.rsvpShortcut` |
| Countdown di dalam "objek" (cermin, cartouche, tirai, karangan bunga) | ningrum, anin, camelia, jessica | template-level |
| **Kalender bulan** dengan tanggal ditandai | nadia | ❌ `W.ui.calendar` |
| **Latar foto per section** (galeri jadi backdrop) | noir, nadia | ❌ core `sections.*.bgPhoto` |
| **Galeri mode**: grid / carousel peek / strip thumbnail / **card stack** | charera (stack), banyak (strip) | ⚠️ tambah mode |
| Love story slider dengan counter "1/3" + panah bulat | ivana, eleanor, aine | template-level |
| **Efek partikel** di cover (daun/kelopak/salju/sparkle) | chindy + fitur editor | ❌ `W.fx.falling` ringan |
| Cover **slideshow foto** | juwita | ❌ `cover.photos[]` |
| Rundown **horizontal** (≤6 item) & **pil dua warna** | juwita, alunan, nadia | template-level |
| Tanggal gaya: pil ganda "FRI \| May 09", titik "07 • 09 • 24", superscript "24th", pemisah vertikal | ruri, sekar, noir, sukma | template-level |
| Dresscode: ikon line-art jas/gaun + swatch + **deskripsi palet teks** | ivana, cassandra (karakter) | ✅ `W.ui.swatches` + tambah `note` |
| Label ortu **(Alm.)/(Almh.)**, gelar panjang (dr., S.Ked, pangkat TNI) | linda, tasya, nadya | ❌ schema `parents.*Late`, uji panjang |
| Acara ke-2 **Ngunduh Mantu**, "Night/After Party", Tea Pai | tiani, chitra, chinese | ⚠️ preset tipe acara |
| Catatan/aturan acara (anak <12 th, siaran langsung akad) | ashilla, nanda | ❌ `events[].note` |
| Multi-video berjudul (Engagement/Prewedding/Akad) | syanin, nadia | ❌ `videos[]` |
| Kredit fotografer di cover | nadya, tasya | ❌ `credits.photographer` |

### 4. Bahasa visual yang berulang (untuk pustaka aset kita, dibuat orisinal)
- **Bentuk frame**: arch, ogee, oval cermin, cartouche/label berlekuk, scalloped, stamp/perangko, lobed/bunga, chamfer + bintang kilau, kapsul bergaris dengan titik. → **Pustaka `frame shapes` di `_core`** (SVG `clip-path`/mask, recolor via token).
- **Border tekstil nusantara** sebagai divider (songket, tenun chevron, pucuk rebung, tumpal): ringan (SVG repeat-x). → **Pustaka pola tekstil** kita sendiri.
- **Tepi**: kertas sobek, wavy, scalloped, awan. Semuanya murah via CSS mask.
- **Kartu**: kaca buram (glass), bayangan offset solid (neo-brutal), notebook spiral, jendela browser.

### 5. Tipografi (dari font face termuat)
Pasangan umum: **script kaligrafi** (Pinyon Script, Imperial Script, Great Vibes, Kapakana, Niconne, Hurricane, Monsieur La Doulaise, Alex Brush) + **serif** (Perpetua, Cormorant, Lancelot, Crimson Text, EB Garamond, Playfair, Libre Caslon). Minimalis memakai Instrument Serif / Cormorant Unicase / Didone condensed + sans. Sebagian besar Google Fonts (OFL), aman dipakai. Font komersial (Exmouth, Sloop, Astagina Signature, Anglecia) dihindari.

### 6. Rekomendasi template berikutnya untuk katalog kita (orisinal, prioritas)
1. **Pasundan** (Sunda: siger/kujang, Priangan, mega mendung). Pembanding anselma (106) memvalidasi permintaan.
2. **Sekar Taman** (varian terang Sekar: krem + cat air melati/kantil). Pembanding alsa (87) dan silika (55).
3. **Monokrom Foto** (tanpa aset; latar foto per section + kaca buram). Pembanding noir (40).
4. **Film Summer** (photo-first + kalender + script casual). Pembanding nadia (24).
5. **Peranakan** (batik Lasem, ubin, lampion; acara Teh Pai/Sangjit). Pembanding chinese (15).
6. **Garis** (line-art flora Indonesia satu warna → varian gampang). Pembanding hanna.
7. **Seri adat nusantara** di satu kerangka (Minang, Bugis, Batak, Bali, Betawi): kulit ornamen berbeda di atas layout yang sama.
8. **Avatar faceless** (opsi ilustrasi karakter pengganti foto). Pembanding alunan dan serene; pembeda untuk pasangan yang tidak ingin menampilkan wajah.

### 7. Peringatan
- **Moderasi ucapan wajib**: demo cassandra (payload SQL injection), jeni (spam link), dan syanin (komentar troll) tampil publik.
- **Eloise kita = turunan Eloise katsudoto**: nama sama, palet, motif renda/amplop/piringan, copy demo, dan **font identik (Exmouth + Instrument Serif)**. Lihat [eloise.md](eloise.md) dan PROGRESS.
- Demo anin memakai materi Disney (foto/trailer). Contoh yang tidak boleh ditiru.

## Tabel

| # | template | tag | rilis | dipakai | mood / ciri | font heading (terdeteksi) | ornamen | AOS | warna editable | Lite |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [eloise](eloise.md) | minimalist, floral | 2026-07 | 128 | Garden-romantic minimalis | Exmouth / Instrument Serif | 45 | 199 | ✓ |  |
| 2 | [anselma](anselma.md) | adat, floral, nature | 2025-10 | 106 | Adat Sunda/Jawa Barat modern | Pinyon Script / Lancelot | 51 | 338 | ✓ |  |
| 3 | [alsa](alsa.md) | adat, floral | 2026-04 | 87 | Adat Jawa gaya "botanical watercolor" | Imperial Script / Perpetua | 51 | 373 | ✓ |  |
| 4 | [cassie](cassie.md) | fairytale, nature | 2025-12 | 69 | "European chateau garden wedding" | Playwrite US Trad / Ibarra Real Nova | 57 | 353 | ✓ |  |
| 5 | [silika](silika.md) | adat, floral | 2026-04 | 55 | Adat Jawa "ukir kayu Jepara" hangat | Monsieur La Doulaise / Abhaya Libre | 48 | 398 | ✓ |  |
| 6 | [aulia](aulia.md) | floral, nature | 2025-11 | 50 | "Enchanted lakeside garden" | Imperial Script / Halant | 52 | 507 | ✓ |  |
| 7 | [syakira](syakira.md) | floral | 2023-02 | 41 | Dusty rose & sage vintage floral | Astagina Signature / EB Garamond | 41 | 202 | ✓ |  |
| 8 | [noir](noir.md) | minimalist | 2023-10 | 40 | Hitam-putih sinematik | Cormorant Unicase / Newsreader | 4 | 92 | ✓ |  |
| 9 | [ivana](ivana.md) | floral, nature | 2026-05 | 38 | "Secret garden chapel" romantis Eropa | Pinyon Script / Perpetua | 32 | 316 | ✓ |  |
| 10 | [kinanti](kinanti.md) | adat, floral, nature | 2024-10 | 37 | Jawa "wayang & janur" berpalet mauve | Hurricane / Crimson Text | 38 | 330 | ✓ |  |
| 11 | [ningrum](ningrum.md) | fairytale, vintage | 2026-07 | 33 | "malam gala di istana Eropa" | Sloop / Lancelot | 54 | 233 | ✓ |  |
| 12 | [olan](olan.md) | floral, nature | 2023-09 | 27 | Lukisan lanskap klasik Eropa (romantisisme abad 18–19) | Cormorant Infant / Cormorant | 49 | 153 | ✓ | ✓ |
| 13 | [nadia](nadia.md) | minimalist | 2026-01 | 24 | "Film-look summer / Korean indie movie" | Hurricane / Indie Flower | 9 | 124 | ✓ |  |
| 14 | [chitra](chitra.md) | minimalist | 2022-08 | 23 | Clean sage-grey modern | Instrument Serif / Creattion Demo | 5 | 84 | ✓ |  |
| 15 | [arsya](arsya.md) | floral, nature | 2026-04 | 21 | "Tea party di taman Inggris" / storybook garden | Kapakana / Cormorant Upright | 50 | 379 | ✓ |  |
| 16 | [helga](helga.md) | adat, floral | 2023-08 | 20 | Bold marun + krem, "boho-autumn floral" | Marcellus / Playfair Display | 32 | 156 | ✓ | ✓ |
| 17 | [eleanor](eleanor.md) | floral, nature | 2025-07 | 19 | "Rumah kaca penuh mawar" bergaya lukisan cat minyak impresionis | Niconne / Brygada 1918 | 24 | 311 | ✓ |  |
| 18 | [cassandra](cassandra.md) | minimalist | 2024-03 | 17 | Urban editorial / city-night | Nanum Myeongjo / Benne | 2 | 104 | ✓ |  |
| 19 | [chinese](chinese.md) | adat | 2026-05 | 15 | Pernikahan Tionghoa-Indonesia modern | Damion / Cardo | 40 | 226 | ✓ |  |
| 20 | [jessica](jessica.md) | floral | 2025-07 | 15 | Istana pink di taman hijau "garden princess" | Kapakana / Alegreya | 51 | 339 | ✓ |  |
| 21 | [sukma](sukma.md) | floral | 2025-03 | 15 | Soft pink garden | Niconne / Gabriela | 45 | 301 | ✓ |  |
| 22 | [ribka](ribka.md) | floral | 2025-02 | 15 | Forest-floral romantis | Travel November / Josefin Slab | 43 | 304 | ✓ |  |
| 23 | [palace](palace.md) | floral, fairytale, nature | 2023-07 | 15 | Sketsa arsitektur istana Eropa + taman botani | Great Vibes / Libre Caslon Text | 45 | 113 | ✓ | ✓ |
| 24 | [gienzka](gienzka.md) | adat, floral | 2025-04 | 14 | Jawa Tengah "candi & tropis" | Brygada 1918 / Carattere | 36 | 249 | ✓ | ✓ |
| 25 | [aile](aile.md) | minimalist, vintage | 2025-04 | 12 | Editorial vintage / "magazine grid" | Viaoda Libre / Fustat | 10 | 120 | ✓ |  |
| 26 | [irish](irish.md) | nature | 2024-03 | 11 | Taman cat air cerah bergaya "garden party" muda | Milonga / Linden Hill | 42 | 261 | ✓ | ✓ |
| 27 | [anin](anin.md) | floral | 2024-09 | 9 | Princess fairytale (Cinderella) | Milonga / Cormorant Infant | 37 | 212 | ✓ | ✓ |
| 28 | [sintia](sintia.md) | adat | 2023-04 | 9 | Adat Minangkabau | Playfair Display / Bona Nova | 19 | 112 | ✓ | ✓ |
| 29 | [anabelle](anabelle.md) | minimalist | 2025-04 | 8 | Photo-first, playful-modern / "Korean prewed casual" | Luckiest Guy / Fredoka | 21 | 144 | ✓ |  |
| 30 | [katrina](katrina.md) | adat | 2025-02 | 8 | Adat Bugis-Makassar (Sulawesi Selatan) | Aladin / Annapurna SIL | 39 | 236 | ✓ | ✓ |
| 31 | [insan](insan.md) | minimalist | 2022-06 | 8 | Monokrom editorial "Didone condensed" | Rondal Regular / Roboto | 3 | 96 | ✓ |  |
| 32 | [tia](tia.md) | minimalist | 2026-01 | 7 | "Alice in Wonderland tea party" yang whimsical | Miss Fajardose / Bellefair | 37 | 236 | ✓ |  |
| 33 | [camelia](camelia.md) | floral, fairytale | 2023-11 | 7 | Komidi putar (carousel) pastel vintage | Cormorant Garamond / Carattere | 47 | 147 | ✓ | ✓ |
| 34 | [nadira](nadira.md) | floral | 2024-10 | 6 | Floral pastel "Timur Tengah-modern" | Cormorant SC / Cormorant Infant | 45 | 285 | ✓ |  |
| 35 | [hanna](hanna.md) | minimalist | 2024-07 | 6 | Monokrom "toile de Jouy" biru-abu | Crimson Text / Brigend Signature | 33 | 228 | ✓ |  |
| 36 | [ruri](ruri.md) | floral | 2022-12 | 6 | Marun + peach + kuning mentega, boho tropis | Abhaya Libre / Lora | 17 | 109 | ✓ | ✓ |
| 37 | [chindy](chindy.md) | fairytale | 2021-12 | 6 | Marmer krem + daun emas (generasi awal 2021) | Roboto / Mr De Haviland | 36 | 104 | ✓ | ✓ |
| 38 | [charera](charera.md) | fairytale | 2025-08 | 5 | Winter wonderland / istana es "Frozen" | Meie Script / Lora | 54 | 275 | ✓ |  |
| 39 | [aine](aine.md) | fairytale | 2024-07 | 5 | Enchanted forest / "Sleeping Beauty" hutan ajaib | Cormorant Upright / Ovo | 24 | 222 | ✓ | ✓ |
| 40 | [serlyn](serlyn.md) | minimalist | 2022-11 | 5 | Navy & emas "toile jungle" | Playfair Display / Cormorant Garamond | 15 | 107 | ✓ | ✓ |
| 41 | [rosalia](rosalia.md) | floral, vintage | 2024-08 | 4 | Art Nouveau / botanical engraving | Amarante / Crushed | 35 | 352 | ✓ |  |
| 42 | [jeni](jeni.md) | minimalist, nature | 2023-06 | 4 | Minimalis modern "olive & stone" | Newsreader / Poppins | 7 | 120 | – | ✓ |
| 43 | [ayyara](ayyara.md) | minimalist | 2023-03 | 4 | Bold sporty / poster | PT Sans Narrow / Red Hat Display | 6 | 93 | ✓ | ✓ |
| 44 | [juwita](juwita.md) | minimalist | 2021-10 | 4 | Navy malam + emas pasir (generasi awal 2021) | Bonheur Royale / Playfair Display | 14 | 105 | ✓ | ✓ |
| 45 | [dewanty](dewanty.md) | fairytale | 2023-01 | 3 | Noir-romantis "red rose" | Ibarra Real Nova / Gilda Display | 21 | 143 | – | ✓ |
| 46 | [linda](linda.md) | minimalist | 2022-10 | 3 | Hijau army & krem "militer elegan" | New York / Tangerine | 9 | 127 | – | ✓ |
| 47 | [valerie](valerie.md) | floral | 2025-06 | 2 | Retro-coquette / Y2K pastel | Lily Script One / Ysabeau | 40 | 210 | ✓ | ✓ |
| 48 | [tiani](tiani.md) | adat, minimalist | 2022-09 | 2 | Songket marun & sage | Viaoda Libre / EB Garamond | 17 | 110 | – | ✓ |
| 49 | [chia](chia.md) | minimalist | 2022-02 | 2 | Ilustrasi pop-folk Nusantara, custom art | Gallery Modern / Abalc | 24 | 65 | ✓ |  |
| 50 | [senandika](senandika.md) | minimalist | 2021-09 | 2 | Template pertama katsudoto (kategori "biasa") | Noto Sans JP / Great Vibes | 6 | 35 | ✓ | ✓ |
| 51 | [oceana](oceana.md) | fairytale | 2024-07 | 1 | Bawah laut / under the sea | Marcellus / Fanwood Text | 36 | 244 | ✓ | ✓ |
| 52 | [serene](serene.md) | minimalist, nature | 2024-03 | 1 | Storybook cottage "Delft blue & pink" | Sofia / Source Serif 4 | 26 | 148 | ✓ |  |
| 53 | [tasya](tasya.md) | fairytale | 2022-07 | 1 | Glamour ballroom khaki-emas (desain lama 2022) | ALS / Anglecia Pro Display | 12 | 84 | – | ✓ |
| 54 | [syanin](syanin.md) | fairytale, minimalist, vintage | 2022-03 | 1 | Beige & cokelat kopi susu, filigri vintage (2021) | Anglecia / Roboto | 10 | 122 | – | ✓ |
| 55 | [nanda](nanda.md) | fairytale | 2021-11 | 1 | Pastel pink-mint "princess" dari undangan nyata (2021) | Elsie Swash Caps / Roboto | 51 | 110 | ✓ |  |
| 56 | [sekar](sekar.md) | minimalist | 2023-05 | 0 | Tropis pop "flat illustration" | Petrona / Quattrocento | 18 | 120 | – | ✓ |
| 57 | [ashilla](ashilla.md) | minimalist | 2022-05 | 0 | Monokrom abu dengan ornamen wayang/gunungan hitam-putih (2021) | Crimson Text / Roboto | 6 | 71 | ✓ |  |
| 58 | [nadya](nadya.md) | minimalist | 2022-04 | 0 | Navy malam + origami bangau (2021) | Pinyon Script / Cormorant Garamond | 14 | 78 | ✓ | ✓ |
| 59 | [alunan](alunan.md) | minimalist | 2022-01 | 0 | Template "biasa" (kategori termurah) dengan ilustrasi karakter pasangan tanpa wajah | Abhaya Libre / Bad Script | 8 | 33 | – | ✓ |
