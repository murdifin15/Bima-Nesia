# 🌺 Bima-Nesia
### Kamus Digital Bahasa Bima – Bahasa Indonesia

> Aplikasi translator interaktif berbasis web untuk menerjemahkan **Bahasa Bima ↔ Bahasa Indonesia**, dilengkapi fitur suara (Speech-to-Text & Text-to-Speech).

---

## 📸 Tampilan

```
┌─────────────────────────────────────────┐
│  🌺 Bima-Nesia                          │
│  KAMUS DIGITAL BAHASA BIMA              │
│─────────────────────────────────────────│
│  [🏝️ Bima → Indonesia]  ⇄  [🇮🇩 Indonesia → Bima] │
│  [ 📝 Kata ]  [ 💬 Kalimat ]  [ 🔍 Cari Semua ] │
│  🎤 [ ketik kata atau kalimat...      ✕ ] │
│  [        🔍 Terjemahkan             ] │
│─────────────────────────────────────────│
│  📝 Kosakata   hasil terjemahan         │
│  🔊 Dengarkan  🔊 Kata Asli             │
└─────────────────────────────────────────┘
```

---

## ✨ Fitur

### 🔤 Translator
- **Toggle arah terjemahan** — Bima → Indonesia atau Indonesia → Bima
- **Tiga mode pencarian** — Kata saja, Kalimat saja, atau Cari Semua
- **Pencarian real-time** — hasil langsung muncul saat mengetik
- **Pencarian case-insensitive** — tidak sensitif huruf besar/kecil
- **Saran otomatis** — tampil chip kata-kata serupa jika tidak ditemukan persis
- **Swap arah** — tombol ⇄ untuk membalik arah terjemahan

### 🎤 Speech-to-Text (Rekam Suara)
- Klik tombol 🎤 di kotak input untuk mulai merekam
- Ucapkan kata atau kalimat — teks otomatis muncul dan diterjemahkan
- Animasi **pulse merah** saat sedang merekam
- Pesan status: *"🔴 Sedang merekam..."* atau pesan error yang informatif
- Bahasa: `id-ID` (Bahasa Indonesia)
- Otomatis disembunyikan jika browser tidak mendukung

### 🔊 Text-to-Speech (Ucapkan Teks)
- Tombol **🔊 Dengarkan** dan **🔊 Kata/Kalimat Asli** di setiap hasil terjemahan
- Ikon 🔊 / 🗣️ di setiap baris tabel kosakata dan kalimat
- Klik tombol yang sama = **hentikan suara**
- Animasi pulse saat sedang berbicara
- Kecepatan bicara: `0.88x` (lebih lambat agar jelas)

### 📋 Tabel Referensi
- **Tabel Kalimat** — daftar 52+ kalimat lengkap dengan filter pencarian
- **Tabel Kosakata** — daftar 37+ kosakata lengkap dengan filter pencarian
- Klik baris tabel → otomatis isi input dan terjemahkan
- Highlight teks saat filter aktif

---

## 📁 Struktur File

```
Bima-Nesia/
│
├── index.html                   # Halaman utama (struktur HTML)
├── style.css                    # Semua styling dan animasi
├── script.js                    # Logika JS + dataset kosakata/kalimat
│
├── kosakata_bima_indonesia.csv  # ✏️ Dataset kosakata (edit di sini)
├── kalimat_bima_indonesia.csv   # ✏️ Dataset kalimat (edit di sini)
│
├── update-dataset.js            # 🔧 Script updater dataset (Node.js)
├── script.js.bak                # 📂 Backup otomatis script.js
│
└── README.md                    # 📖 Dokumentasi ini
```

---

## 🚀 Cara Menjalankan

Aplikasi ini **tidak membutuhkan server** — cukup buka file HTML di browser.

```bash
# Buka langsung di browser
start index.html         # Windows
open index.html          # macOS
xdg-open index.html      # Linux
```

> **Rekomendasi Browser**: Google Chrome atau Microsoft Edge  
> (untuk fitur Speech-to-Text & Text-to-Speech penuh)

---

## 🔄 Cara Update Dataset

Setiap kali ingin menambah atau mengedit kosakata/kalimat:

### 1. Edit file CSV

**Tambah kosakata** → buka `kosakata_bima_indonesia.csv`:
```csv
Bahasa_Bima,Bahasa_Indonesia
Nahu,Saya (Kasual)
Mada,Saya (Sopan)
...
KataBaru,TerjemahanBaru        ← tambahkan di baris baru
```

**Tambah kalimat** → buka `kalimat_bima_indonesia.csv`:
```csv
Bahasa_Bima,Bahasa_Indonesia
Au taho nggomi?,Apa kabar kamu?
...
Kalimat baru dalam Bima,Terjemahan kalimat baru    ← tambahkan di baris baru
```

### 2. Jalankan script updater

```bash
node update-dataset.js
```

Script akan:
1. ✔ Membaca kedua file CSV
2. ✔ Memperbarui array `vocabulary` dan `sentences` di `script.js`
3. ✔ Menyimpan backup ke `script.js.bak`
4. ✔ Menampilkan ringkasan dan preview 3 entri pertama

### 3. Buka ulang `index.html` di browser

Selesai! Dataset langsung terupdate.

---

## 📊 Dataset

### Kosakata (`kosakata_bima_indonesia.csv`)

| Kategori | Contoh |
|---|---|
| Kata Ganti | Nahu (Saya), Nggomi (Kamu), Sia (Dia) |
| Kata Kerja | Ngaha (Makan), Lao (Pergi), Turo (Tidur) |
| Kata Sifat | Taho (Baik), Na'e (Besar), To'i (Kecil) |
| Benda | Uma (Rumah), Dana (Tanah), Oi (Air) |
| Keluarga | Ina (Ibu), Ama (Ayah), Ompu (Kakek) |
| Pertanyaan | Au taho? (Apa kabar?), Pira? (Berapa?) |

### Kalimat (`kalimat_bima_indonesia.csv`)

| Kategori | Contoh |
|---|---|
| Salam & Sapaan | Selamat wura. (Selamat pagi.) |
| Perkenalan | Ipi cou nggomi? (Siapa nama kamu?) |
| Keluarga | Ina nahu taho. (Ibu saya baik.) |
| Aktivitas | Nahu lao ku uma. (Saya pergi ke rumah.) |
| Pertanyaan | Pira harga au ndi? (Berapa harga ini?) |
| Ekspresi | Dana Bima taho na'e. (Kampung Bima sangat indah.) |

---

## 🛠️ Teknologi

| Teknologi | Kegunaan |
|---|---|
| **HTML5** | Struktur halaman |
| **CSS3** (Vanilla) | Styling, animasi, responsive design |
| **JavaScript** (Vanilla) | Logika translator, render tabel |
| **Web Speech API** | Speech-to-Text & Text-to-Speech |
| **Node.js** | Script `update-dataset.js` (offline tool) |
| **Google Fonts** | Font Poppins |

---

## 🌐 Kompatibilitas Browser

| Browser | Translator | STT 🎤 | TTS 🔊 |
|---|:---:|:---:|:---:|
| Chrome 89+ | ✅ | ✅ | ✅ |
| Edge 89+ | ✅ | ✅ | ✅ |
| Firefox | ✅ | ⚠️ Terbatas | ✅ |
| Safari | ✅ | ⚠️ Terbatas | ✅ |
| Opera | ✅ | ✅ | ✅ |

> ⚠️ **Catatan STT**: Speech-to-Text membutuhkan koneksi internet dan izin mikrofon dari browser.  
> ⚠️ **Catatan Bahasa Bima**: Tidak ada kode bahasa khusus untuk Bima di Web Speech API, sehingga digunakan `id-ID` sebagai fallback.

---

## 📝 Format CSV

File CSV menggunakan format standar dengan aturan berikut:

```
Bahasa_Bima,Bahasa_Indonesia       ← baris pertama adalah HEADER (wajib)
KataBima,TerjemahanIndonesia       ← setiap baris adalah satu entri
```

**Aturan penting:**
- Baris pertama **harus** berisi header `Bahasa_Bima,Bahasa_Indonesia`
- Pisahkan kolom dengan **koma** (`,`)
- Jika nilai mengandung koma, bungkus dengan tanda kutip ganda: `"nilai, dengan koma"`
- Baris kosong di akhir file diabaikan otomatis
- Encoding: **UTF-8**

---

## 🤝 Kontribusi Dataset

Ingin menambahkan kosakata atau kalimat Bahasa Bima?

1. Buka file `kosakata_bima_indonesia.csv` atau `kalimat_bima_indonesia.csv`
2. Tambahkan entri baru di baris terakhir dengan format: `KataBima,TerjemahanIndonesia`
3. Jalankan `node update-dataset.js`
4. Verifikasi di browser

---

## 📜 Lisensi

Proyek ini dibuat secara terbuka untuk keperluan **pelestarian Bahasa Bima** dan **pendidikan budaya NTB**.  
Bebas digunakan, dimodifikasi, dan disebarluaskan untuk tujuan non-komersial.

---

<div align="center">

**🌺 Bima-Nesia**  
*Melestarikan Bahasa Bima* ♥  
Dibangun dengan ❤️ untuk budaya Bima & NTB

</div>
