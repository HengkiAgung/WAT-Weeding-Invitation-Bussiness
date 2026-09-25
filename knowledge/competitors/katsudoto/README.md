# Katsudoto — riset pesaing

| File | Isi |
|---|---|
| [product-flow.md](product-flow.md) | lini produk, harga dan add-on, flow daftar→bayar→dashboard, menu editor, kelola tamu, buku tamu, dan **ide yang diadopsi** (tabel §8) |
| [catalog.json](catalog.json) | 59 desain (id, nama, tag, rilis, jumlah pemakaian, URL demo) diambil dari endpoint katalog |
| [templates/](templates/) | 1 file analisis desain per template demo, berisi layout, aset, animasi, konten, dan pelajaran untuk kita |
| [templates/INDEX.md](templates/INDEX.md) | ringkasan semua template: mood, palet, font, ciri khas, dan pemakaian |

## Aturan pakai (penting)
1. **Ini riset, bukan bahan jiplak.** Template katsudoto (kode, ilustrasi PNG, foto, font berlisensi, dan teks) adalah hak cipta mereka. Kita **tidak** mengunduh, menyimpan, atau menjual ulang aset maupun kode mereka. Screenshot hanya disimpan di `.tmp/demos/` (gitignored, lokal) sebagai bahan analisis.
2. Yang boleh diambil adalah **ide dan pola**: urutan section, jenis interaksi, cara menata ornamen, ritme animasi, dan kombinasi palet+font sebagai inspirasi *mood*. Semua itu dieksekusi ulang dengan aset orisinal kita, nama lain, komposisi lain, dan copy sendiri.
3. Saat membuat template baru dari analisis ini, gunakan bagian **"Arah orisinal untuk kita"** di tiap file, bukan deskripsi visual mentahnya. Uji sederhana: kalau orang awam menaruh dua undangan berdampingan dan bilang "ini sama", berarti terlalu dekat.
4. Jangan pakai nama template mereka (Eloise, Sekar, Ningrum, …) untuk produk kita.

## Cara memperbarui
SOP: [workflows/research_competitor_templates.md](../../../workflows/research_competitor_templates.md). Ringkas:
- daftar desain: `POST https://katsudoto.id/desain/` dengan form `status=get_all_designs` (JSON) → simpan ke `catalog.json`;
- capture tiap demo dengan `node tools/capture_demo.mjs <url> .tmp/demos/<nama>`. Kalau cover tidak terbuka, tambahkan `--open "<selector>"`. Untuk animasi yang lambat, pakai `--step-wait 3500`;
- lihat `sheet-*.png` + `cover.png`, lalu tulis narasi;
- isi blok data teknis dengan `python tools/demo_digest.py .tmp/demos/<nama> --inject templates/<nama>.md`.
