# Katalog Tema — Undangan Digital Indonesia (S2)

Pedoman untuk membuat template baru (S4+). Setiap tema dijabarkan jadi **token warna/font + ornamen SVG + preset teks** (salam, ayat, nama acara), sehingga bisa jadi *variant* dari satu layout, atau template tersendiri kalau layout-nya beda.

## Tema adat (regional)

| Tema | Palet | Ornamen/motif | Acara khas (preset `events[].type`) | Catatan |
|---|---|---|---|---|
| **Jawa** | sogan/coklat–emas, hijau tua–emas, krem | gunungan wayang, batik kawung/parang, ukiran keraton, melati, aksara Jawa | siraman, midodareni, akad, panggih, resepsi | Paling laku (Acaranya: 23 tema). Opsi bahasa Jawa krama |
| **Sunda** | emas–coklat, hijau, biru–emas | siger Sunda, mega mendung, kujang | akad, resepsi (+ saweran, huap lingkung) | Ayat terjemahan bahasa Sunda |
| **Minang** | merah–emas, jewel tone | rumah gadang, songket | akad, baralek/resepsi | "Tradisional glam" |
| **Batak** | merah–hitam–putih | ulos, gorga | pemberkatan, adat/ulaon, resepsi | Umumnya Kristen → ayat Alkitab |
| **Bali (Hindu)** | ungu–emas, putih–emas | kamboja/frangipani, gapura/candi bentar | pawiwahan, resepsi | Salam "Om Swastyastu" / penutup "Om Shanti Shanti Shanti Om", kutipan Rg Veda |
| **Palembang** | marun–emas, burgundy | songket | akad, resepsi | |
| **Bugis/Makassar** | hijau zamrud | baju bodo, phinisi | mappacci, akad, resepsi | |
| **Betawi** | kuning–hijau | kembang goyang, ondel-ondel | akad, resepsi | Kesan meriah |
| **Melayu** | zamrud–emas | tanjak, songket | akad, bersanding | Pasar ID + MY |
| **Banjar, Dayak, Aceh, Lampung, Papua, Toraja** | beragam | sasirangan, ukir Dayak, pintu Aceh, tapis | — | Pasar khusus; tema fusion ("Aceh × Jawa", "Batak × Minang") juga ada |

## Tema religi
| Tema | Palet | Elemen | Preset teks |
|---|---|---|---|
| **Islami** | hijau–emas, netral lembut | kaligrafi, kubah/lengkung, floral, **opsi tanpa foto** | "Assalamu'alaikum Wr. Wb.", QS Ar-Rum:21 (terjemahan id/Jawa/Sunda/en), "Maha Suci Allah…", penutup "Wassalamu'alaikum…" |
| **Kristen/Katolik** | putih, krem, pastel | salib halus, merpati, cincin | Kejadian 2:24, 1 Korintus 13:4-7, Kolose 3:14, Matius 19:6; acara "Pemberkatan Nikah" + "Resepsi"; salam "Salam Kasih"/"Shalom" |
| **Hindu Bali** | lihat Bali | | Om Swastyastu, Rg Veda X.85.42 |
| **Buddha / Konghucu** | emas, merah | teratai / lampion | "Namo Buddhaya"; kutipan Dhammapada (perlu riset kalau ada permintaan) |

## Tema modern/gaya
| Tema | Palet | Ornamen | Cocok untuk |
|---|---|---|---|
| **Rustic** (Eloise masuk sini) | olive, kayu, krem | daun kering, kayu | outdoor/garden |
| **Minimalis** | netral, hitam–putih | nyaris tanpa ornamen, tipografi kuat | pasangan urban |
| **Floral / Garden** | pastel, hijau segar | bunga cat air, sunflower | pesta taman |
| **Luxury / Elegan** | hitam marmer–emas, royal blue–silver, merah–emas | garis geometris, foil emas | gedung/ballroom |
| **Vintage / Victorian** | krem, forest | frame klasik, cupid | |
| **Boho** | terracotta | pampas, rattan | |
| **Pantai** | biru–krem | kerang, ombak | destination wedding |
| **Jepang** | sakura pastel | sakura, minimalis | |
| **Chinese** | merah–emas | lampion, 囍 (double happiness) | Sangjit/Tea pai → preset acara |
| **Motion / Premium** | beragam | animasi motion graphic, transisi sinematik | tier premium (Kekondangan Rp249rb) |

## Pola warna populer 2026 (nama varian, siap jadi `variants[]`)
sage/olive botanical · dusty rose / soft rose · baby/ice blue · latte brown–gold · black marble–gold · royal blue–silver · maroon–gold · emerald–gold · terracotta · navy–gold · lilac.

## Prioritas template yang disarankan (untuk S3–S4 dan sesudahnya)
1. **Eloise** (rustic olive) → varian: sage, dusty rose, latte.
2. **Jawa klasik** (sogan–emas, gunungan) → S4 bukti spesifikasi; varian hijau–emas & krem.
3. **Islami minimalis tanpa foto** → pasar besar, desainnya mudah.
4. **Luxury black–gold**.
5. **Sunda**, **Minang**, **Bali**, **Kristen elegan (putih–emas)**.
6. **Floral pastel**, **Chinese**.

## Implikasi spesifikasi template
- Preset teks (salam, ayat, nama acara) **bergantung pada agama dan adat**, bukan pada template. Jadi `religion` dan `ceremony` masuk ke data inti; template hanya menampilkan.
- Ornamen adat = aset SVG milik template; warna ikut token (strategi SVG yang bisa diwarnai ulang dari S1).
- Mode "tanpa foto" wajib bisa diaktifkan (Islami, privasi): galeri/foto mempelai diganti ilustrasi atau inisial.

## Sumber
- https://abadikan.id/id/blog/tema-undangan-digital · https://kekondangan.id/tema-motion-undangan-adat-2026/
- https://acaranya.id/desain-undangan-digital/pernikahan/ · https://www.weddingbestie.id/id/tema/jawa
- https://www.senduh.id/blog/tema-undangan-pernikahan-adat-digital · https://www.webnikah.com/blog/bank-konten-undangan-digital-lengkap-mulai-dari-ayat-ar-rum-pantun-hingga-template-chat-whatsapp
- https://tirto.id/ayat-alkitab-yang-bermakna-untuk-pernikahan-di-undangan-hek3
