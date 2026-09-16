# Bima-Nesia: Kamus Digital Bahasa Bima - Bahasa Indonesia

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML-5-E34F26.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS-3-1572B6.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Web Speech API](https://img.shields.io/badge/API-Web_Speech_API-5C3EE8.svg)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Aplikasi web kamus dan penerjemah interaktif dua arah antara Bahasa Bima dan Bahasa Indonesia. Dirancang sebagai sarana pelestarian bahasa daerah dan media pembelajaran digital, dilengkapi fitur pengenalan suara (*Speech-to-Text*) dan pelafalan otomatis (*Text-to-Speech*).

---

## Ringkasan Proyek

Bahasa Bima (Nggahi Mbojo) merupakan bahasa daerah yang kaya akan nilai budaya dan dituturkan oleh masyarakat di Pulau Sumbawa bagian timur, Nusa Tenggara Barat. 

**Bima-Nesia** dibangun untuk menyediakan akses kamus digital yang cepat, interaktif, dan mudah digunakan tanpa memerlukan instalasi server yang rumit. Pengguna dapat mencari terjemahan kata atau kalimat, mendengarkan pelafalan, melakukan input suara melalui mikrofon, serta menelusuri katalog perbendaharaan kata melalui tabel referensi interaktif.

---

## Fitur Utama

- **Penerjemah Dua Arah (Bidirectional Translator)**:
  - Mode terjemahan Bahasa Bima ke Bahasa Indonesia dan sebaliknya.
  - Tiga opsi ruang lingkup pencarian: Kata saja, Kalimat saja, atau Pencarian Menyeluruh.
  - Pencarian langsung (*real-time search*) dengan algoritma pencocokan yang tidak sensitif huruf besar/kecil (*case-insensitive*).
  - Rekomendasi kata serupa secara otomatis jika kata kunci tidak ditemukan secara eksak.
  - Tombol pembalik arah terjemahan (*swap direction*).

- **Pengenalan Suara (Speech-to-Text)**:
  - Input teks terjemahan secara langsung melalui rekaman mikrofon peramban.
  - Indikator status rekaman dengan penanganan kesalahan yang informatif.

- **Sintesis Suara (Text-to-Speech)**:
  - Fitur pelafalan suara otomatis untuk teks hasil terjemahan maupun teks sumber.
  - Pengaturan laju artikulasi suara terkalibrasi untuk kejelasan pendengaran.

- **Tabel Referensi Kosakata dan Kalimat**:
  - Daftar perbendaharaan kata dan contoh percakapan terstruktur.
  - Fitur penyorotan teks (*highlight*) dan integrasi klik langsung ke kotak penerjemah.

- **Otomasi Pembaruan Dataset**:
  - Sinkronisasi basis data kosakata berbasis berkas CSV menggunakan utilitas skrip Node.js.

---

## Teknologi dan Dependensi

- **Frontend Core**: HTML5 Semantik, CSS3 Vanilla (Responsive Design, Flexbox/Grid, Variabel Desain)
- **Logika Aplikasi**: Vanilla JavaScript (ES6+)
- **Speech Engine**: Web Speech API (`SpeechRecognition` dan `SpeechSynthesis`)
- **Utilitas Dataset**: Node.js (`update-dataset.js` untuk pemrosesan file CSV ke array JavaScript)
- **Penyedia Font**: Google Fonts (Poppins)
- **Platform Deployment**: Vercel (`vercel.json`)

---

## Struktur Direktori Repositori

```text
Bima-Nesia/
├── index.html                   # Berkas markup HTML utama aplikasi
├── style.css                    # Lembar gaya CSS: tata letak, komponen UI, dan animasi
├── script.js                    # Logika utama penerjemah, antarmuka Speech API, & basis data runtime
├── kosakata_bima_indonesia.csv  # Sumber data mentah kosakata (format CSV)
├── kalimat_bima_indonesia.csv   # Sumber data mentah contoh kalimat (format CSV)
├── update-dataset.js            # Skrip otomasi Node.js untuk menyinkronkan data CSV ke script.js
├── vercel.json                  # Konfigurasi deployment hosting Vercel
├── .gitignore                   # Konfigurasi pengabaian berkas sementara Git
├── LICENSE                      # Berkas lisensi resmi MIT (Hak Cipta Murdifin)
└── README.md                    # Dokumentasi teknis proyek
```

### Penjelasan Komponen Berkas

| Berkas / Direktori | Deskripsi Fungsional |
| :--- | :--- |
| `index.html` | Struktur dokumen antarmuka web, panel input terjemahan, kontrol tombol suara, dan tabel referensi. |
| `style.css` | Mengatur tema visual, palet warna, tipografi Poppins, responsivitas seluler, dan animasi status mikrofon. |
| `script.js` | Menangani algoritma penerjemahan, pemetaan kamus data, integrasi Web Speech API, dan manipulasi DOM. |
| `kosakata_bima_indonesia.csv` | Dataset tabel kata dasar Bahasa Bima dan padanan artinya dalam Bahasa Indonesia. |
| `kalimat_bima_indonesia.csv` | Dataset kumpulan kalimat percakapan sehari-hari Bahasa Bima dan terjemahannya. |
| `update-dataset.js` | Program CLI Node.js untuk mengonversi berkas CSV terbaru menjadi array objek pada `script.js` secara otomatis dengan pembuatan berkas cadangan (*backup*). |

---

## Panduan Penggunaan

### Menjalankan Aplikasi Secara Lokal
Aplikasi ini berbasis *client-side* mandiri dan tidak memerlukan konfigurasi server khusus. Cukup buka berkas `index.html` pada peramban web:

- **Windows**:
  ```cmd
  start index.html
  ```
- **macOS**:
  ```bash
  open index.html
  ```
- **Linux**:
  ```bash
  xdg-open index.html
  ```

---

## Panduan Pembaruan Dataset

Untuk memperbarui atau menambahkan entri kosakata dan kalimat baru:

### 1. Perbarui Berkas CSV
- Buka `kosakata_bima_indonesia.csv` untuk menambah kata baru:
  ```csv
  Bahasa_Bima,Bahasa_Indonesia
  KataBaru,TerjemahanIndonesia
  ```
- Buka `kalimat_bima_indonesia.csv` untuk menambah contoh kalimat baru:
  ```csv
  Bahasa_Bima,Bahasa_Indonesia
  KalimatBima,TerjemahanIndonesia
  ```

### 2. Jalankan Skrip Sinkronisasi
Jalankan perintah Node.js berikut di terminal:
```bash
node update-dataset.js
```
Skrip akan memvalidasi data CSV, memperbarui array pada `script.js`, dan membuat cadangan berkas secara otomatis.

---

## Matriks Kompatibilitas Peramban

| Peramban | Penerjemah Teks | Speech-to-Text (STT) | Text-to-Speech (TTS) |
| :--- | :---: | :---: | :---: |
| Google Chrome 89+ | Didukung | Didukung | Didukung |
| Microsoft Edge 89+ | Didukung | Didukung | Didukung |
| Mozilla Firefox | Didukung | Terbatas | Didukung |
| Apple Safari | Didukung | Terbatas | Didukung |
| Opera | Didukung | Didukung | Didukung |

---

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE) - Hak Cipta (c) 2026 **Murdifin**.
