<div align="center">

# 🏗️ Materials-DeV (Toko Bangunan Sejahtera)

**Website toko bangunan modern, responsif, dan interaktif dengan fitur filter produk serta chat widget cerdas**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/id/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/id/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/id/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-4CAF50?style=for-the-badge)](LICENSE)

</div>

---

## 🎯 Apa itu Materials-DeV?

**Materials-DeV** adalah templat website *storefront* (toko online) untuk usaha material bangunan yang dirancang dengan antarmuka modern, bersih, dan sangat responsif. 

Dibangun sepenuhnya menggunakan **Vanilla HTML, CSS, dan JavaScript** (tanpa framework berat seperti React atau Bootstrap), website ini menawarkan performa loading yang sangat cepat, animasi yang halus, serta fitur interaktif yang meningkatkan pengalaman pengguna (*User Experience*).

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|---------|-------------|
| 🔍 **Filter Produk Dinamis** | Pengunjung dapat menyaring produk berdasarkan kategori (Semen, Besi, Bata, dll.) secara *real-time* tanpa reload halaman |
| 🪟 **Modal Detail Produk** | Klik pada produk untuk melihat spesifikasi lengkap, harga, dan tombol "Pesan via WhatsApp" yang terintegrasi |
| 💬 **Chat Widget Interaktif** | Asisten virtual sederhana yang dapat menjawab pertanyaan umum seputar harga, stok, dan cara pemesanan secara otomatis |
| 📱 **Fully Responsive** | Tampilan beradaptasi sempurna di desktop, tablet, dan mobile, lengkap dengan menu hamburger yang halus |
| 🎬 **Scroll Reveal Animation** | Elemen halaman muncul dengan animasi halus saat di-*scroll* menggunakan `IntersectionObserver` |
| ⚡ **Performa Tinggi** | Tanpa dependensi eksternal, memastikan waktu muat (*loading time*) yang sangat cepat dan skor Lighthouse yang tinggi |

---

## 🚀 Cara Menjalankan Proyek

Karena ini adalah website statis murni, Anda tidak memerlukan *backend* atau proses *build* yang rumit.

### Opsi 1: Langsung di Browser (Paling Cepat)
1. Download atau clone repository ini.
2. Buka folder proyek, lalu klik dua kali file `index.html`.
3. Website akan langsung terbuka di browser default Anda.

### Opsi 2: Menggunakan VS Code Live Server (Direkomendasikan)
1. Buka folder proyek di **Visual Studio Code**.
2. Instal ekstensi **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**.
3. Klik kanan pada file `index.html` dan pilih **"Open with Live Server"**.
4. Browser akan otomatis terbuka di `http://127.0.0.1:5500` dengan fitur *hot reload* saat Anda mengedit kode.

---

## 📂 Struktur Proyek

```text
Materials-DeV/
├── index.html          # Struktur utama halaman (HTML5 semantik)
├── style.css           # Semua styling, variabel CSS, animasi, dan media queries responsif
├── script.js           # Logika interaktif: filter, modal, chat widget, dan scroll reveal
├── .gitattributes      # Konfigurasi line ending Git
└── README.md           # Dokumentasi ini
