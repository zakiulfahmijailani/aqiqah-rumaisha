# 🌸 Undangan Digital Aqiqah — Rumaisha Qonita

> _"Dan jika kamu menghitung nikmat Allah, niscaya kamu tidak akan mampu menghitungnya."_
> — QS. Ibrahim: 34

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ecf8e?logo=supabase)](https://supabase.com)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://vercel.com)

---

## 📖 Tentang Proyek

Undangan digital berbasis web untuk acara **Syukuran Aqiqah Rumaisha Qonita**, dibangun dengan teknologi modern agar dapat diakses dari mana saja melalui browser — tanpa perlu install aplikasi.

Dirancang dengan nuansa **pastel lembut**, animasi halus, dan pengalaman pengguna yang nyaman di perangkat mobile maupun desktop.

---

## 🗓️ Detail Acara

| Info | Detail |
|------|--------|
| **Nama Acara** | Syukuran Aqiqah Rumaisha Qonita |
| **Hari & Tanggal** | Ahad, 29 Maret 2026 |
| **Waktu** | 13:00 – 17:00 WIB |
| **Lokasi** | Wisma Indah VI Blok i no 2, Balai Baru, Kel. Kalumbuk, Kec. Kuranji, RT 003/RW 007, Kota Padang (25155) |

---

## ✨ Fitur

- 🎨 **Animated Cover** — halaman pembuka dengan animasi sebelum konten terbuka
- 🧕 **Ilustrasi Muslimah** — SVG custom baby muslimah tanpa wajah
- 📅 **Detail Acara** — informasi lengkap hari, waktu, dan lokasi
- 🗺️ **Integrasi Maps** — tombol langsung ke Google Maps
- 💌 **Ucapan & Doa** — form interaktif dengan realtime display, confetti, dan toast notifikasi
- 📋 **RSVP** — konfirmasi kehadiran tamu
- 🎵 **Music Player** — latar musik otomatis dengan kontrol play/pause
- 📱 **Bottom Navigation Bar** — navigasi mobile-friendly
- 🌊 **Wave Dividers** — transisi antar section yang halus
- 🌸 **Credit Section** — dengan tombol order WhatsApp langsung
- ♿ **Reduced Motion Support** — menghormati preferensi aksesibilitas pengguna

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|-------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Database** | Supabase (PostgreSQL) |
| **Deployment** | Vercel |
| **Illustrations** | Inline SVG (custom) |

---

## 🚀 Menjalankan Secara Lokal

### 1. Clone repo

```bash
git clone https://github.com/zakiulfahmijailani/aqiqah-rumaisha.git
cd aqiqah-rumaisha
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 📁 Struktur Proyek

```
src/
├── app/
│   ├── page.tsx              # Root page & layout assembly
│   └── globals.css           # Global styles & custom animations
├── components/
│   ├── AnimatedBackground.tsx
│   ├── BabyIllustrations.tsx  # SVG illustrations (muslimah)
│   ├── BabyNamesSection.tsx
│   ├── BottomNavBar.tsx
│   ├── BismillahCalligraphy.tsx
│   ├── ClosingSection.tsx
│   ├── CoverSection.tsx
│   ├── CreditSection.tsx      # Made by + WhatsApp order button
│   ├── EventDetailsSection.tsx
│   ├── GiftSection.tsx
│   ├── MapsSection.tsx
│   ├── MusicPlayer.tsx
│   ├── RSVPSection.tsx
│   ├── ScrollProgressBar.tsx
│   ├── WaveDivider.tsx
│   └── WishesSection.tsx
├── hooks/
│   └── useReducedMotion.ts
└── lib/
    └── supabase.ts
```

---

## 🗄️ Database (Supabase)

Proyek ini menggunakan dua tabel utama di Supabase:

```sql
-- Tabel ucapan & doa
CREATE TABLE wishes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabel RSVP
CREATE TABLE rsvp (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  attendance TEXT NOT NULL,
  guests INTEGER DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 📦 Deploy ke Vercel

```bash
npm run build
```

Atau hubungkan repo ini langsung ke [Vercel](https://vercel.com) untuk auto-deploy setiap push ke `main`.

Jangan lupa tambahkan environment variables di dashboard Vercel.

---

## 👨‍💻 Dibuat Oleh

**Zakiul Fahmi Jailani**

Ingin undangan digital serupa untuk acara Anda?

[![WhatsApp](https://img.shields.io/badge/Pesan_via-WhatsApp-25D366?logo=whatsapp&logoColor=white)](https://wa.me/6282349732594?text=Halo%20Kak%20Zakiul%2C%20saya%20tertarik%20memesan%20undangan%20digital%20seperti%20ini!)

---

<p align="center">
  Made with 🤍 for Rumaisha Qonita
</p>
