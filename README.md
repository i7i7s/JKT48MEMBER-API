# JKT48 Member API 🎤

API sederhana dan cepat untuk mendapatkan data member JKT48. Dibuat menggunakan Node.js dan Express, serta dikonfigurasi untuk hosting instan di Vercel.

## 🚀 Fitur
- 📋 Daftar semua member JKT48.
- 🔍 Pencarian berdasarkan nama/nickname.
- 🎭 Filter berdasarkan tim (PASSION, LOVE, DREAM, TRAINEE, dll).
- 👤 Detail member berdasarkan kode unik.
- ⚡ Ringan dan siap pakai.

## 🛠️ Tech Stack
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Hosting**: [Vercel](https://vercel.com/)
- **CORS**: Diaktifkan (Siap dikonsumsi frontend apa pun).

---

## 📖 Dokumentasi API

### 1. Mendapatkan Semua Member
`GET /api/members`

**Query Parameters (Opsional):**
- `type`: Filter berdasarkan tim (contoh: `PASSION`, `DREAM`, `LOVE`).
- `name`: Cari berdasarkan nama atau nickname (contoh: `freya`).

**Contoh Request:**
`GET /api/members?type=PASSION&name=olla`

---

### 2. Mendapatkan Detail Member
`GET /api/members/:code`

Mendapatkan informasi lengkap satu member menggunakan kode uniknya.

**Contoh Request:**
`GET /api/members/FREYA_JAYAWARDANA`

---

### 3. Mendapatkan Daftar Tim
`GET /api/teams`

Menampilkan semua tim atau status yang tersedia saat ini.

---

### 4. Mendapatkan Member per Tim
`GET /api/teams/:team`

Mengambil daftar member dari tim tertentu secara langsung.

**Contoh Request:**
`GET /api/teams/DREAM`

---

## 💻 Instalasi Lokal

1. Clone repository:
   ```bash
   git clone https://github.com/i7i7s/JKT48MEMBER-API.git
   cd JKT48MEMBER-API
   ```

2. Install dependensi:
   ```bash
   npm install
   ```

3. Jalankan server:
   ```bash
   npm start
   ```
   Server akan berjalan di `http://localhost:3000`.

## ☁️ Deployment
API ini sudah memiliki file `vercel.json`. Kamu bisa langsung melakukan deploy ke Vercel hanya dengan menghubungkan repository ini ke dashboard Vercel kamu.

---

## 📄 Lisensi
[MIT License](LICENSE)

*Dibuat untuk keperluan komunitas JKT48.*
