# PRD — Portfolio Website Naufal Hakim

**Product Requirements Document**
**Version:** 1.0.0
**Status:** Draft
**Last Updated:** 2025
**Author:** Product Team
**Stakeholder:** Naufal Hakim

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Project Overview](#2-project-overview)
3. [Goals & Success Metrics](#3-goals--success-metrics)
4. [Scope](#4-scope)
5. [User Personas](#5-user-personas)
6. [User Journey](#6-user-journey)
7. [Information Architecture](#7-information-architecture)
8. [Functional Requirements](#8-functional-requirements)
9. [Non-Functional Requirements](#9-non-functional-requirements)
10. [Design System](#10-design-system)
11. [Component Library](#11-component-library)
12. [Data Structure](#12-data-structure)
13. [Folder Structure](#13-folder-structure)
14. [Technical Architecture](#14-technical-architecture)
15. [Page Specifications](#15-page-specifications)
16. [SEO Strategy](#16-seo-strategy)
17. [Performance Strategy](#17-performance-strategy)
18. [Accessibility Requirements](#18-accessibility-requirements)
19. [Deployment Workflow](#19-deployment-workflow)
20. [Development Milestones](#20-development-milestones)
21. [Risks & Mitigations](#21-risks--mitigations)

---

## 1. Executive Summary

Website portfolio ini adalah representasi digital profesional dari **Naufal Hakim**, seorang Data Analyst dan Data Engineer lulusan Informatika. Tujuan utama website ini adalah membangun personal brand yang kuat, menyajikan portofolio proyek secara profesional, dan menarik perhatian recruiter serta hiring manager di bidang Data Analytics dan Business Intelligence.

Website ini dibangun sebagai **Single Page Application (SPA)** menggunakan **React 19 + Vite + TypeScript**, dengan pendekatan _static site_ tanpa backend, database, atau CMS. Semua data dikelola secara manual melalui file TypeScript di folder `src/data/`, dan perubahan dideploy otomatis melalui pipeline **GitHub → Vercel**.

---

## 2. Project Overview

| Atribut             | Detail                                                      |
| ------------------- | ----------------------------------------------------------- |
| **Nama Proyek**     | Portfolio Website Naufal Hakim                              |
| **Tipe Website**    | Landing Page Portfolio (SPA)                                |
| **Target Pengguna** | Recruiter, Hiring Manager, Data Team Lead, Potential Client |
| **Framework**       | React 19 + Vite + TypeScript                                |
| **Styling**         | Tailwind CSS                                                |
| **Animasi**         | Framer Motion                                               |
| **Deployment**      | Vercel (via GitHub)                                         |
| **Backend**         | Tidak ada                                                   |
| **Database**        | Tidak ada                                                   |
| **CMS**             | Tidak ada                                                   |
| **Domain**          | TBD (contoh: `naufalhakim.dev`)                             |

### 2.1 Latar Belakang

Naufal Hakim membutuhkan sebuah platform digital personal yang:

- Mencerminkan kompetensi teknis sebagai Data Analyst dan Data Engineer
- Menampilkan portofolio proyek secara terstruktur dan menarik
- Berfungsi sebagai alat utama dalam proses job seeking
- Mudah diperbarui tanpa memerlukan keahlian backend atau infrastruktur tambahan

### 2.2 Permasalahan yang Diselesaikan

| Masalah                                      | Solusi                                                |
| -------------------------------------------- | ----------------------------------------------------- |
| Tidak ada platform personal yang profesional | Membangun website portfolio modern                    |
| Portofolio sulit diakses oleh recruiter      | Website publik yang mudah diakses                     |
| Data sulit diperbarui tanpa sistem admin     | File TypeScript di `src/data/` yang diedit via VSCode |
| Tidak ada showcase project yang proper       | Halaman `/portfolio` dengan search & filter           |

---

## 3. Goals & Success Metrics

### 3.1 Business Goals

- Meningkatkan peluang mendapatkan interview untuk posisi Data Analyst / Data Engineer
- Membangun personal brand yang konsisten dan profesional
- Menjadi referensi utama ketika nama Naufal Hakim di-search di internet

### 3.2 User Goals

- Recruiter: Menemukan informasi kandidat secara cepat dan terstruktur
- Hiring Manager: Melihat kualitas teknis dan proyek yang relevan
- Professional Network: Mudah menghubungi dan berkolaborasi

### 3.3 Success Metrics

| Metrik                         | Target                     |
| ------------------------------ | -------------------------- |
| Lighthouse Performance Score   | > 90                       |
| Lighthouse SEO Score           | > 95                       |
| Lighthouse Accessibility Score | > 90                       |
| First Contentful Paint (FCP)   | < 1.5 detik                |
| Largest Contentful Paint (LCP) | < 2.5 detik                |
| Cumulative Layout Shift (CLS)  | < 0.1                      |
| Time to Interactive (TTI)      | < 3.5 detik                |
| Mobile Responsiveness          | Semua breakpoint berfungsi |

---

## 4. Scope

### 4.1 In Scope

- [x] Landing Page (SPA) dengan semua section
- [x] Halaman Portfolio (`/portfolio`) dengan search & filter
- [x] Project Detail (Modal atau Dedicated Page)
- [x] Dark Mode
- [x] Animasi dengan Framer Motion
- [x] Responsive (Mobile, Tablet, Laptop, Desktop)
- [x] Form Kontak via Formspree atau EmailJS
- [x] SEO Optimization
- [x] Deployment ke Vercel

### 4.2 Out of Scope

- [ ] Backend / API Server
- [ ] Database (SQL, NoSQL, dsb.)
- [ ] CMS (Contentful, Sanity, dsb.)
- [ ] Firebase / Supabase
- [ ] Admin Panel / Dashboard
- [ ] Sistem Login / Autentikasi
- [ ] CRUD System
- [ ] Fitur komentar / blog

---

## 5. User Personas

### Persona 1: Recruiter — "Rini"

| Atribut        | Detail                                                                  |
| -------------- | ----------------------------------------------------------------------- |
| **Jabatan**    | HR Recruiter di perusahaan teknologi                                    |
| **Usia**       | 28–35 tahun                                                             |
| **Tujuan**     | Menemukan kandidat yang sesuai dengan job opening Data Analyst          |
| **Pain Point** | Terlalu banyak profil, butuh informasi ringkas dan visual yang jelas    |
| **Kebutuhan**  | Nama, skill, pengalaman, tombol download CV, dan cara kontak yang mudah |
| **Behavior**   | Rata-rata menghabiskan < 2 menit di portfolio; scroll cepat             |

### Persona 2: Hiring Manager — "Bagas"

| Atribut        | Detail                                                                |
| -------------- | --------------------------------------------------------------------- |
| **Jabatan**    | Data Team Lead di startup                                             |
| **Usia**       | 30–40 tahun                                                           |
| **Tujuan**     | Mengevaluasi kemampuan teknis kandidat secara mendalam                |
| **Pain Point** | Ingin lihat bukti nyata kemampuan, bukan hanya daftar skill           |
| **Kebutuhan**  | Proyek dengan detail problem statement, tools, dan hasil nyata        |
| **Behavior**   | Menghabiskan waktu lebih lama, membuka project detail, melihat GitHub |

### Persona 3: Professional Network — "Dinda"

| Atribut        | Detail                                          |
| -------------- | ----------------------------------------------- |
| **Jabatan**    | Data Analyst di perusahaan lain                 |
| **Usia**       | 25–32 tahun                                     |
| **Tujuan**     | Berkolaborasi atau berbagi pengetahuan          |
| **Pain Point** | Sulit menemukan kontak profesional yang relevan |
| **Kebutuhan**  | LinkedIn, GitHub, Email yang mudah diakses      |
| **Behavior**   | Langsung menuju section Contact atau Footer     |

### Persona 4: Potential Client — "Pak Hendra"

| Atribut        | Detail                                                                |
| -------------- | --------------------------------------------------------------------- |
| **Jabatan**    | Pemilik usaha / manajer non-tech                                      |
| **Usia**       | 35–50 tahun                                                           |
| **Tujuan**     | Mencari freelancer untuk project data atau dashboard                  |
| **Pain Point** | Tidak familiar dengan jargon teknis                                   |
| **Kebutuhan**  | Visual yang menarik, hasil proyek yang bisa dilihat, cara menghubungi |
| **Behavior**   | Tertarik pada tampilan visual dashboard dan hasil nyata proyek        |

---

## 6. User Journey

### 6.1 Journey: Recruiter Mencari Kandidat

```
[Google Search "Naufal Hakim Data Analyst"]
        ↓
[Halaman Portfolio Muncul di SERP]
        ↓
[Landing di Hero Section]
        ↓
[Scroll ke About — membaca ringkasan profil]
        ↓
[Scroll ke Skills — melihat daftar skill]
        ↓
[Scroll ke Experience — melihat pengalaman kerja]
        ↓
[Klik "Download CV"]
        ↓
[Scroll ke Contact — klik LinkedIn atau Email]
        ↓
[Menghubungi Naufal untuk interview]
```

### 6.2 Journey: Hiring Manager Evaluasi Teknis

```
[Menerima link portfolio dari recruiter / LinkedIn]
        ↓
[Landing di Hero Section]
        ↓
[Scroll ke Featured Projects]
        ↓
[Klik salah satu project card]
        ↓
[Membaca Project Detail: Problem, Solution, Tools, Insights]
        ↓
[Klik GitHub URL untuk melihat kode]
        ↓
[Klik "View More Projects" untuk melihat semua project]
        ↓
[Halaman /portfolio — filter by category / tools]
        ↓
[Scroll ke Certifications — validasi kompetensi]
        ↓
[Klik Contact / Email untuk follow up]
```

### 6.3 Journey: Kunjungan via Mobile

```
[Membuka link dari WhatsApp / Instagram]
        ↓
[Mobile layout tampil optimal]
        ↓
[Hamburger menu untuk navigasi]
        ↓
[Smooth scroll antar section]
        ↓
[Tap project card → modal detail tampil]
        ↓
[Tap email / LinkedIn di Contact section]
```

---

## 7. Information Architecture

### 7.1 Struktur Halaman

```
/ (Home — SPA)
├── #home        → Hero Section
├── #about       → About Me
├── #skills      → Skills
├── #experience  → Experience & Education
├── #certifications → Certifications
├── #projects    → Featured Projects
└── #contact     → Contact

/portfolio       → Full Portfolio Page
└── [project-id] → Project Detail (Modal atau /portfolio/[slug])
```

### 7.2 Navigasi

- **Navbar** sticky di atas, transparan saat di top, solid saat di-scroll
- **Links** adalah anchor scroll ke section (`#about`, `#skills`, dst.)
- **"View More Projects"** → navigasi ke `/portfolio`
- **Logo / Nama** → kembali ke `#home`
- **Mobile** → Hamburger menu dengan overlay

---

## 8. Functional Requirements

### 8.1 Navbar

| ID     | Requirement                                                                                  |
| ------ | -------------------------------------------------------------------------------------------- |
| NAV-01 | Navbar harus selalu terlihat (sticky/fixed) saat user scroll                                 |
| NAV-02 | Navbar transparan saat posisi paling atas, berubah menjadi solid (blur + border) saat scroll |
| NAV-03 | Links navigasi melakukan smooth scroll ke section yang sesuai                                |
| NAV-04 | Active state pada link sesuai section yang sedang dilihat (Intersection Observer)            |
| NAV-05 | Tombol "Download CV" / CTA tersedia di navbar                                                |
| NAV-06 | Toggle Dark Mode tersedia di navbar                                                          |
| NAV-07 | Di mobile: hamburger icon menampilkan drawer/overlay menu                                    |
| NAV-08 | Drawer menu mobile menutup saat link diklik                                                  |
| NAV-09 | Nama / Logo di sisi kiri, navigasi di sisi kanan                                             |

### 8.2 Hero Section

| ID      | Requirement                                                                                                     |
| ------- | --------------------------------------------------------------------------------------------------------------- |
| HERO-01 | Menampilkan nama lengkap: "Naufal Hakim"                                                                        |
| HERO-02 | Menampilkan title/role dengan efek typewriter (berganti-ganti: "Data Analyst", "Data Engineer", "BI Developer") |
| HERO-03 | Menampilkan tagline / deskripsi singkat (1–2 kalimat)                                                           |
| HERO-04 | Tombol CTA utama: "View My Work" → scroll ke #projects                                                          |
| HERO-05 | Tombol CTA sekunder: "Contact Me" → scroll ke #contact                                                          |
| HERO-06 | Tombol Download CV                                                                                              |
| HERO-07 | Avatar / foto profil dengan desain modern (opsional: gradient border / ring)                                    |
| HERO-08 | Ikon sosial media: GitHub, LinkedIn, Email                                                                      |
| HERO-09 | Animasi scroll indicator (arrow atau mouse icon)                                                                |
| HERO-10 | Background: gradient halus atau particle/grid pattern subtle                                                    |

### 8.3 About Me Section

| ID     | Requirement                                                          |
| ------ | -------------------------------------------------------------------- |
| ABT-01 | Foto profil                                                          |
| ABT-02 | Paragraf perkenalan diri (background, passion, tujuan karier)        |
| ABT-03 | Quick stats: jumlah project, sertifikasi, atau pengalaman (opsional) |
| ABT-04 | Tombol "Download CV" yang jelas                                      |
| ABT-05 | Highlight key traits / values sebagai data professional              |

### 8.4 Skills Section

| ID     | Requirement                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------ |
| SKL-01 | Menampilkan skill dalam kategori: Data Analytics, Data Visualization, Cloud & Engineering, Programming |
| SKL-02 | Setiap skill memiliki ikon / logo teknologi                                                            |
| SKL-03 | Data skill diambil dari `src/data/skills.ts`                                                           |
| SKL-04 | Layout: grid atau card-based                                                                           |
| SKL-05 | Opsional: Progress bar / proficiency level (Beginner / Intermediate / Advanced)                        |
| SKL-06 | Animasi stagger saat masuk viewport                                                                    |

### 8.5 Experience & Education Section

| ID     | Requirement                                                               |
| ------ | ------------------------------------------------------------------------- |
| EXP-01 | Timeline vertikal untuk Experience dan Education                          |
| EXP-02 | Setiap entry menampilkan: judul, perusahaan/institusi, periode, deskripsi |
| EXP-03 | Data diambil dari `src/data/experience.ts`                                |
| EXP-04 | Tab untuk switch antara "Experience" dan "Education" (opsional)           |
| EXP-05 | Animasi slide-in dari kiri/kanan saat scroll                              |

### 8.6 Certifications Section

| ID      | Requirement                                                           |
| ------- | --------------------------------------------------------------------- |
| CERT-01 | Menampilkan kartu sertifikasi dengan: nama, issuer, tahun, badge/logo |
| CERT-02 | Data diambil dari `src/data/certifications.ts`                        |
| CERT-02 | Setiap sertifikasi memiliki link verifikasi (opsional)                |
| CERT-03 | Layout: grid responsive (3 kolom desktop, 2 tablet, 1 mobile)         |
| CERT-04 | Animasi stagger saat masuk viewport                                   |

### 8.7 Featured Projects Section

| ID      | Requirement                                                                      |
| ------- | -------------------------------------------------------------------------------- |
| PROJ-01 | Menampilkan maksimal 6 project terbaik                                           |
| PROJ-02 | Project diambil dari `src/data/projects.ts` dengan flag `featured: true`         |
| PROJ-03 | Setiap project card menampilkan: thumbnail, judul, deskripsi singkat, tags tools |
| PROJ-04 | Hover state pada card: overlay dengan CTA "View Details"                         |
| PROJ-05 | Klik card membuka Project Detail (modal atau halaman `/portfolio/[slug]`)        |
| PROJ-06 | Tombol "View More Projects" muncul jika total project > 6                        |
| PROJ-07 | "View More Projects" mengarah ke halaman `/portfolio`                            |
| PROJ-08 | Animasi stagger card saat scroll                                                 |

### 8.8 Project Detail

| ID    | Requirement                                                    |
| ----- | -------------------------------------------------------------- |
| PD-01 | Menampilkan screenshot / mockup project                        |
| PD-02 | Judul dan deskripsi lengkap project                            |
| PD-03 | Problem Statement                                              |
| PD-04 | Solution / Approach                                            |
| PD-05 | Tools Used (dengan ikon)                                       |
| PD-06 | Key Insights / Hasil                                           |
| PD-07 | Link GitHub (jika ada)                                         |
| PD-08 | Link Live Demo (jika ada)                                      |
| PD-09 | Link Case Study (jika ada)                                     |
| PD-10 | Tombol tutup (untuk modal) atau tombol kembali (untuk halaman) |

### 8.9 Portfolio Page (`/portfolio`)

| ID      | Requirement                                                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------- |
| PORT-01 | Menampilkan semua project dari `src/data/projects.ts`                                                         |
| PORT-02 | Search: input pencarian project berdasarkan judul atau deskripsi                                              |
| PORT-03 | Filter kategori: Data Analytics, Data Visualization, Data Engineering, Business Intelligence, Web Development |
| PORT-04 | Filter tools: Power BI, SQL, Python, Excel, BigQuery, dst.                                                    |
| PORT-05 | Grid layout responsive: 3 kolom desktop, 2 tablet, 1 mobile                                                   |
| PORT-06 | Animasi filter: smooth transition saat filter berubah                                                         |
| PORT-07 | State "No results found" saat pencarian tidak ditemukan                                                       |
| PORT-08 | Tombol "Back to Home" atau navigasi kembali                                                                   |

### 8.10 Contact Section

| ID     | Requirement                                                              |
| ------ | ------------------------------------------------------------------------ |
| CON-01 | Menampilkan email, LinkedIn, GitHub sebagai kartu/link                   |
| CON-02 | Form kontak (nama, email, pesan) menggunakan Formspree atau EmailJS      |
| CON-03 | Validasi form: field wajib, format email                                 |
| CON-04 | Loading state saat form dikirim                                          |
| CON-05 | Success / Error state setelah pengiriman                                 |
| CON-06 | Tidak ada backend — form dikirim langsung ke email via Formspree/EmailJS |

### 8.11 Footer

| ID     | Requirement                                                 |
| ------ | ----------------------------------------------------------- |
| FTR-01 | Copyright text: "© 2025 Naufal Hakim. All rights reserved." |
| FTR-02 | Link sosial media (GitHub, LinkedIn)                        |
| FTR-03 | Link navigasi singkat                                       |
| FTR-04 | Desain minimal, tidak terlalu berat                         |

### 8.12 Dark Mode

| ID    | Requirement                                                   |
| ----- | ------------------------------------------------------------- |
| DM-01 | Toggle dark/light mode tersedia di navbar                     |
| DM-02 | Preferensi disimpan di `localStorage`                         |
| DM-03 | Default mengikuti system preference (`prefers-color-scheme`)  |
| DM-04 | Transisi smooth saat toggle                                   |
| DM-05 | Semua komponen mendukung dark mode via Tailwind `dark:` class |

---

## 9. Non-Functional Requirements

### 9.1 Performa

| Requirement              | Target           |
| ------------------------ | ---------------- |
| Lighthouse Performance   | > 90             |
| First Contentful Paint   | < 1.5 detik      |
| Largest Contentful Paint | < 2.5 detik      |
| Cumulative Layout Shift  | < 0.1            |
| Time to Interactive      | < 3.5 detik      |
| Bundle size (JS)         | < 300 KB gzipped |

### 9.2 SEO

| Requirement      | Detail                                       |
| ---------------- | -------------------------------------------- |
| Meta title       | Dinamis per halaman                          |
| Meta description | Deskriptif, < 160 karakter                   |
| Open Graph tags  | og:title, og:description, og:image, og:url   |
| Twitter Card     | Tersedia                                     |
| Sitemap          | sitemap.xml di-generate otomatis atau manual |
| Robots.txt       | Mengizinkan semua crawler                    |
| Structured Data  | JSON-LD untuk Person dan Website             |
| Canonical URL    | Setiap halaman memiliki canonical URL        |

### 9.3 Aksesibilitas (a11y)

| Requirement         | Detail                                                |
| ------------------- | ----------------------------------------------------- |
| WCAG 2.1 Level AA   | Standar minimal                                       |
| Alt text            | Semua gambar memiliki alt text                        |
| Keyboard navigation | Semua interaksi bisa dilakukan via keyboard           |
| Focus indicator     | Visible focus ring pada elemen interaktif             |
| Color contrast      | Minimum 4.5:1 untuk teks normal, 3:1 untuk teks besar |
| ARIA labels         | Tersedia untuk elemen non-semantik                    |
| Screen reader       | Konten dapat dibaca oleh screen reader                |

### 9.4 Keamanan

| Requirement            | Detail                                                |
| ---------------------- | ----------------------------------------------------- |
| No backend             | Tidak ada API server yang bisa diserang               |
| Form submission        | Dihandle oleh Formspree/EmailJS (trusted third-party) |
| No secrets in frontend | API key Formspree/EmailJS di-scope ke domain tertentu |
| HTTPS                  | Vercel menyediakan SSL otomatis                       |
| CSP Header             | Konfigurasi via `vercel.json`                         |

### 9.5 Maintainability

| Requirement         | Detail                                          |
| ------------------- | ----------------------------------------------- |
| Data management     | Semua data di `src/data/*.ts` — edit via VSCode |
| No CMS, no database | Zero dependency pada external data service      |
| Git-based deploy    | Edit → Commit → Push → Auto deploy              |
| TypeScript          | Type safety untuk semua data                    |
| Clean code          | ESLint + Prettier konfigurasi standar           |

---

## 10. Design System

### 10.1 Color Palette

#### Light Mode

| Token         | Hex       | Usage               |
| ------------- | --------- | ------------------- |
| `primary-50`  | `#eff6ff` | Background tint     |
| `primary-100` | `#dbeafe` | Light background    |
| `primary-500` | `#3b82f6` | Primary brand color |
| `primary-600` | `#2563eb` | Primary hover       |
| `primary-700` | `#1d4ed8` | Primary active      |
| `accent-400`  | `#22d3ee` | Accent / highlight  |
| `accent-500`  | `#06b6d4` | Accent brand        |
| `slate-50`    | `#f8fafc` | Page background     |
| `slate-100`   | `#f1f5f9` | Surface             |
| `slate-200`   | `#e2e8f0` | Border              |
| `slate-600`   | `#475569` | Body text secondary |
| `slate-800`   | `#1e293b` | Body text primary   |
| `slate-900`   | `#0f172a` | Heading             |

#### Dark Mode

| Token            | Hex       | Usage            |
| ---------------- | --------- | ---------------- |
| `bg-primary`     | `#0a0f1e` | Page background  |
| `bg-surface`     | `#111827` | Card / surface   |
| `bg-elevated`    | `#1f2937` | Elevated surface |
| `border`         | `#1e293b` | Border / divider |
| `text-primary`   | `#f8fafc` | Heading          |
| `text-secondary` | `#94a3b8` | Body secondary   |
| `primary-400`    | `#60a5fa` | Primary (dark)   |
| `accent-400`     | `#22d3ee` | Accent (dark)    |

### 10.2 Typography

```css
/* Heading */
font-family: 'Plus Jakarta Sans', sans-serif;
font-weight: 700, 800;

/* Body */
font-family: 'DM Sans', sans-serif;
font-weight: 400, 500;

/* Code / Technical Labels */
font-family: 'JetBrains Mono', monospace;
font-weight: 400, 500;
```

#### Type Scale

| Token       | Size | Line Height | Usage                |
| ----------- | ---- | ----------- | -------------------- |
| `text-xs`   | 12px | 1.5         | Caption, label kecil |
| `text-sm`   | 14px | 1.5         | Body kecil, tag      |
| `text-base` | 16px | 1.6         | Body utama           |
| `text-lg`   | 18px | 1.6         | Body besar           |
| `text-xl`   | 20px | 1.4         | Subheading kecil     |
| `text-2xl`  | 24px | 1.3         | Subheading           |
| `text-3xl`  | 30px | 1.2         | Section heading      |
| `text-4xl`  | 36px | 1.1         | Hero subheading      |
| `text-5xl`  | 48px | 1.1         | Hero heading         |
| `text-6xl`  | 60px | 1.0         | Display              |

### 10.3 Spacing System

Menggunakan skala 4px base (Tailwind default):

```
4 → 4px   (space-1)
8 → 8px   (space-2)
12 → 12px (space-3)
16 → 16px (space-4)
24 → 24px (space-6)
32 → 32px (space-8)
48 → 48px (space-12)
64 → 64px (space-16)
80 → 80px (space-20)
96 → 96px (space-24)
```

### 10.4 Border Radius

```
rounded-sm   → 4px   (badge, tag kecil)
rounded      → 6px   (tombol kecil)
rounded-md   → 8px   (input)
rounded-lg   → 12px  (card)
rounded-xl   → 16px  (card featured)
rounded-2xl  → 24px  (section background)
rounded-full → 9999px (avatar, pill)
```

### 10.5 Shadow

```css
/* Light subtle */
box-shadow:
  0 1px 3px rgba(0, 0, 0, 0.08),
  0 1px 2px rgba(0, 0, 0, 0.04);

/* Card */
box-shadow:
  0 4px 6px rgba(0, 0, 0, 0.05),
  0 2px 4px rgba(0, 0, 0, 0.04);

/* Card hover */
box-shadow:
  0 10px 25px rgba(0, 0, 0, 0.1),
  0 4px 10px rgba(0, 0, 0, 0.05);

/* Primary glow */
box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
```

### 10.6 Breakpoints

| Breakpoint | Width  | Target Device    |
| ---------- | ------ | ---------------- |
| `sm`       | 640px  | Mobile landscape |
| `md`       | 768px  | Tablet           |
| `lg`       | 1024px | Laptop           |
| `xl`       | 1280px | Desktop          |
| `2xl`      | 1536px | Large desktop    |

### 10.7 Animation Tokens

```typescript
// Framer Motion variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Duration tokens
const DURATION = {
  fast: 0.2,
  normal: 0.35,
  slow: 0.5,
  verySlow: 0.8,
};

// Easing
const EASE = {
  easeOut: [0.0, 0.0, 0.2, 1.0],
  easeInOut: [0.4, 0.0, 0.2, 1.0],
  spring: { type: 'spring', stiffness: 300, damping: 30 },
};
```

---

## 11. Component Library

### 11.1 Layout Components

```
<PageLayout>       — Wrapper utama dengan Navbar + Footer
<Section>          — Section container dengan padding dan max-width
<Container>        — Max-width wrapper (1280px) dengan padding horizontal
<Grid>             — Responsive grid layout
<Stack>            — Flex column layout
<Cluster>          — Flex row layout
```

### 11.2 Navigation Components

```
<Navbar>           — Sticky navbar utama
<NavLink>          — Link navigasi dengan active state
<MobileMenu>       — Drawer menu untuk mobile
<DarkModeToggle>   — Toggle switch dark/light mode
```

### 11.3 UI Components

```
<Button>           — Primary, Secondary, Ghost, Outline variants
<Badge>            — Tag kecil untuk skill / kategori
<Card>             — Base card dengan hover state
<ProjectCard>      — Card khusus project dengan overlay
<SkillCard>        — Card skill dengan ikon
<CertCard>         — Card sertifikasi
<TimelineItem>     — Item untuk experience timeline
<Modal>            — Overlay modal untuk project detail
<Chip>             — Pill/chip untuk filter
<SearchInput>      — Input dengan ikon search
<Avatar>           — Foto profil dengan ring/border
<SectionHeading>   — Heading section dengan subtitle
<StatCard>         — Quick stat card (angka + label)
```

### 11.4 Form Components

```
<Input>            — Text input dengan label
<Textarea>         — Textarea dengan label
<FormField>        — Wrapper dengan error state
<SubmitButton>     — Button dengan loading state
```

### 11.5 Animation Components

```
<FadeIn>           — Wrapper animasi fade in
<ScrollReveal>     — Trigger animasi saat masuk viewport
<StaggerList>      — List dengan stagger animation
<PageTransition>   — Transisi antar halaman
<TypewriterText>   — Efek typewriter untuk teks
```

---

## 12. Data Structure

### 12.1 `src/data/projects.ts`

```typescript
export interface Project {
  id: string; // Unique slug: "healthcare-dashboard"
  title: string; // Judul project
  shortDescription: string; // Deskripsi singkat (1–2 kalimat, untuk card)
  description: string; // Deskripsi lengkap (untuk detail)
  category: ProjectCategory; // Kategori utama
  tags: string[]; // Daftar tools / teknologi
  thumbnail: string; // Path gambar thumbnail: "/images/projects/..."
  images: string[]; // Array screenshot untuk project detail
  featured: boolean; // Tampilkan di Featured section (max 6)
  order: number; // Urutan tampil (untuk featured)

  // Problem & Solution
  problemStatement?: string;
  solution?: string;
  keyInsights?: string[];

  // Links
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudyUrl?: string;

  // Metadata
  completedAt: string; // Format: "2024-03" atau "March 2024"
  status: 'completed' | 'in-progress' | 'archived';
}

export type ProjectCategory = 'Data Analytics' | 'Data Visualization' | 'Data Engineering' | 'Business Intelligence' | 'Web Development';

export const projects: Project[] = [
  {
    id: 'healthcare-dashboard',
    title: 'Healthcare Dashboard',
    shortDescription: 'Dashboard interaktif untuk analisis data pasien dan performa rumah sakit.',
    description: 'Dashboard Power BI komprehensif yang memvisualisasikan data pasien, performa dokter, dan tren penyakit selama 3 tahun terakhir...',
    category: 'Business Intelligence',
    tags: ['Power BI', 'SQL', 'DAX', 'Data Modeling'],
    thumbnail: '/images/projects/healthcare-dashboard.webp',
    images: ['/images/projects/healthcare-dashboard-1.webp'],
    featured: true,
    order: 1,
    problemStatement: 'Manajemen rumah sakit kesulitan memonitor performa operasional secara real-time...',
    solution: 'Membangun dashboard Power BI terintegrasi dengan SQL Server...',
    keyInsights: ['Pasien rawat jalan meningkat 23% dalam Q3', 'Lama rawat inap rata-rata turun 1.2 hari setelah implementasi protokol baru'],
    githubUrl: 'https://github.com/naufalhakim/healthcare-dashboard',
    completedAt: '2024-10',
    status: 'completed',
  },
  // ... project lainnya
];
```

### 12.2 `src/data/skills.ts`

```typescript
export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon: string; // Path ikon atau nama dari icon library
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience?: number;
}

export type SkillCategory = 'Data Analytics' | 'Data Visualization' | 'Cloud & Engineering' | 'Programming' | 'Other';

export const skills: Skill[] = [
  {
    id: 'power-bi',
    name: 'Power BI',
    category: 'Data Visualization',
    icon: '/icons/powerbi.svg',
    proficiency: 'Advanced',
    yearsOfExperience: 2,
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Data Analytics',
    icon: '/icons/sql.svg',
    proficiency: 'Advanced',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming',
    icon: '/icons/python.svg',
    proficiency: 'Intermediate',
  },
  {
    id: 'bigquery',
    name: 'BigQuery',
    category: 'Cloud & Engineering',
    icon: '/icons/bigquery.svg',
    proficiency: 'Intermediate',
  },
  // ... skills lainnya
];
```

### 12.3 `src/data/certifications.ts`

```typescript
export interface Certification {
  id: string;
  name: string; // Nama sertifikasi
  issuer: string; // Penerbit (Google, Microsoft, dsb.)
  issuerLogo: string; // Path logo issuer
  badge?: string; // Path badge sertifikasi (opsional)
  issuedDate: string; // "2024-06"
  expiryDate?: string; // "2027-06" atau undefined jika no expiry
  credentialId?: string;
  credentialUrl?: string; // Link verifikasi
  category: 'Cloud' | 'Data' | 'Analytics' | 'Engineering' | 'Other';
}

export const certifications: Certification[] = [
  {
    id: 'gcp-associate-cloud-engineer',
    name: 'Associate Cloud Engineer',
    issuer: 'Google Cloud',
    issuerLogo: '/icons/google-cloud.svg',
    issuedDate: '2024-06',
    expiryDate: '2027-06',
    credentialUrl: 'https://cloud.google.com/certification/...',
    category: 'Cloud',
  },
  // ...
];
```

### 12.4 `src/data/experience.ts`

```typescript
export interface ExperienceItem {
  id: string;
  type: 'work' | 'education';
  title: string; // Jabatan atau Gelar
  organization: string; // Perusahaan atau Universitas
  organizationLogo?: string; // Path logo
  location: string; // "Jakarta, Indonesia"
  startDate: string; // "2023-01"
  endDate?: string; // "2024-12" atau undefined jika masih aktif
  current: boolean; // Masih aktif atau tidak
  description: string; // Deskripsi singkat
  responsibilities?: string[]; // Daftar poin tanggung jawab
  achievements?: string[]; // Pencapaian
  skills?: string[]; // Skills yang digunakan
}

export const experience: ExperienceItem[] = [
  {
    id: 'msib-2024',
    type: 'work',
    title: 'Microsoft Data Engineer',
    organization: 'PT. Maribelajar Indonesia Cerdas',
    location: 'Jakarta, Indonesia',
    startDate: '2024-02',
    endDate: '2024-06',
    current: false,
    description: 'Menganalisis data pendidikan dan membangun dashboard untuk tim bisnis.',
    responsibilities: ['Membuat laporan analitik mingguan menggunakan Power BI', 'Menulis SQL query untuk ekstraksi data dari data warehouse'],
    achievements: ['Mengurangi waktu pelaporan dari 3 hari menjadi 4 jam'],
    skills: ['Power BI', 'SQL', 'Python', 'BigQuery'],
  },
  {
    id: 'education-informatics',
    type: 'education',
    title: 'S1 Informatika',
    organization: 'Universitas XYZ',
    location: 'Indonesia',
    startDate: '2021-09',
    endDate: '2025-08',
    current: false,
    description: 'Jurusan Ilmu Komputer dengan fokus pada data dan sistem informasi.',
    achievements: ['IPK: 3.63/4.0', 'Tugas Akhir: OPTIMALISASI ANALISIS DATA UNTUK PENINGKATAN KINERJA PENDIDIKAN DENGAN POWER BI'],
    skills: ['Python', 'SQL', 'Database'],
  },
];
```

---

## 13. Folder Structure

```
naufalhakim-portfolio/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── og-image.png              # Open Graph image (1200x630)
│   └── images/
│       ├── profile/
│       │   └── naufal-hakim.webp
│       └── projects/
│           ├── healthcare-dashboard.webp
│           ├── sales-dashboard.webp
│           └── ...
│
├── src/
│   ├── main.tsx                  # Entry point
│   ├── App.tsx                   # Router + layout
│   ├── vite-env.d.ts
│   │
│   ├── assets/
│   │   ├── icons/                # SVG tool icons (powerbi, python, etc.)
│   │   └── fonts/                # Self-hosted fonts (opsional)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── PageLayout.tsx
│   │   │   ├── Section.tsx
│   │   │   └── Container.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── SearchInput.tsx
│   │   │   ├── Chip.tsx
│   │   │   ├── Avatar.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── DarkModeToggle.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── TypewriterText.tsx
│   │   │   │   └── HeroBackground.tsx
│   │   │   ├── About/
│   │   │   │   └── About.tsx
│   │   │   ├── Skills/
│   │   │   │   ├── Skills.tsx
│   │   │   │   └── SkillCard.tsx
│   │   │   ├── Experience/
│   │   │   │   ├── Experience.tsx
│   │   │   │   └── TimelineItem.tsx
│   │   │   ├── Certifications/
│   │   │   │   ├── Certifications.tsx
│   │   │   │   └── CertCard.tsx
│   │   │   ├── Projects/
│   │   │   │   ├── FeaturedProjects.tsx
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   └── ProjectDetail.tsx
│   │   │   └── Contact/
│   │   │       ├── Contact.tsx
│   │   │       └── ContactForm.tsx
│   │   │
│   │   └── animations/
│   │       ├── FadeIn.tsx
│   │       ├── ScrollReveal.tsx
│   │       ├── StaggerList.tsx
│   │       └── PageTransition.tsx
│   │
│   ├── data/                     # ⚠️ Data dikelola manual di sini
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── certifications.ts
│   │   └── experience.ts
│   │
│   ├── hooks/
│   │   ├── useDarkMode.ts
│   │   ├── useScrollSpy.ts       # Active nav link
│   │   ├── useInView.ts          # Trigger animasi
│   │   └── useProjectFilter.ts  # Filter logic
│   │
│   ├── pages/
│   │   ├── HomePage.tsx          # SPA home
│   │   └── PortfolioPage.tsx     # /portfolio
│   │
│   ├── lib/
│   │   ├── animations.ts         # Framer Motion variants
│   │   ├── constants.ts          # Konstanta (nama, email, dll.)
│   │   └── utils.ts              # Helper functions
│   │
│   ├── styles/
│   │   └── globals.css           # Global styles + Tailwind directives
│   │
│   └── types/
│       └── index.ts              # Shared types
│
├── .github/
│   └── workflows/
│       └── deploy.yml            # (opsional, Vercel auto-detect)
│
├── .env.example                  # Template env variables
├── .eslintrc.cjs
├── .prettierrc
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```

---

## 14. Technical Architecture

### 14.1 Tech Stack Detail

| Layer      | Teknologi           | Versi  | Alasan                                     |
| ---------- | ------------------- | ------ | ------------------------------------------ |
| Framework  | React               | 19.x   | Ecosystem terbesar, future-proof           |
| Build Tool | Vite                | 6.x    | Extremely fast DX, optimized build         |
| Language   | TypeScript          | 5.x    | Type safety, better DX                     |
| Styling    | Tailwind CSS        | 3.x    | Utility-first, dark mode support           |
| Animation  | Framer Motion       | 11.x   | Production-grade animation                 |
| Routing    | React Router        | 6.x    | Untuk navigasi Home ↔ /portfolio           |
| Icons      | Lucide React        | latest | Konsisten, tree-shakeable                  |
| Form       | Formspree / EmailJS | -      | No backend needed                          |
| Deployment | Vercel              | -      | Free, auto-deploy dari GitHub              |
| Fonts      | Google Fonts        | -      | Plus Jakarta Sans, DM Sans, JetBrains Mono |

### 14.2 Konfigurasi Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animation: ['framer-motion'],
        },
      },
    },
  },
});
```

### 14.3 Konfigurasi Tailwind

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          /* 50-950 shades */
        },
        accent: {
          /* cyan shades */
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
```

### 14.4 Routing

```typescript
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import PortfolioPage from '@/pages/PortfolioPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 14.5 Vercel Configuration

```json
// vercel.json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

### 14.6 Environment Variables

```bash
# .env.local (tidak di-commit ke Git)
VITE_FORMSPREE_ID=your_formspree_id
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 15. Page Specifications

### 15.1 Home Page (`/`)

**Layout:**

```
┌─────────────────────────────────────┐
│              NAVBAR                 │  sticky, height: 64px
├─────────────────────────────────────┤
│              HERO                   │  min-height: 100vh
├─────────────────────────────────────┤
│             ABOUT ME                │  padding: 96px 0
├─────────────────────────────────────┤
│              SKILLS                 │  padding: 96px 0
├─────────────────────────────────────┤
│         EXPERIENCE & EDU            │  padding: 96px 0
├─────────────────────────────────────┤
│          CERTIFICATIONS             │  padding: 96px 0
├─────────────────────────────────────┤
│        FEATURED PROJECTS            │  padding: 96px 0
├─────────────────────────────────────┤
│             CONTACT                 │  padding: 96px 0
├─────────────────────────────────────┤
│              FOOTER                 │  padding: 48px 0
└─────────────────────────────────────┘
```

**Hero Section Layout (Desktop):**

```
┌──────────────────────────────────────────────────┐
│                                                  │
│   Hi, I'm                          ┌──────────┐  │
│   Naufal Hakim                     │  Avatar  │  │
│   ─────────────────                │   Photo  │  │
│   [Data Analyst | BI Developer]    │          │  │
│                                    └──────────┘  │
│   Turning raw data into                          │
│   meaningful insights.                           │
│                                                  │
│   [View My Work ▶]  [Contact Me]                 │
│   [⬇ Download CV]                               │
│                                                  │
│   GitHub  LinkedIn  Email                        │
│                                    ↓ scroll      │
└──────────────────────────────────────────────────┘
```

### 15.2 Portfolio Page (`/portfolio`)

**Layout:**

```
┌─────────────────────────────────────┐
│              NAVBAR                 │
├─────────────────────────────────────┤
│   All Projects (jumlah)             │
│                                     │
│   [🔍 Search projects...]           │
│                                     │
│   [All] [Analytics] [Viz] [Eng]...  │  ← Category filter
│   Tools: [Power BI] [SQL] [Python]  │  ← Tools filter
│                                     │
│  ┌────┐ ┌────┐ ┌────┐               │
│  │Proj│ │Proj│ │Proj│               │  ← Grid 3 col
│  └────┘ └────┘ └────┘               │
│  ┌────┐ ┌────┐ ┌────┐               │
│  │Proj│ │Proj│ │Proj│               │
│  └────┘ └────┘ └────┘               │
├─────────────────────────────────────┤
│              FOOTER                 │
└─────────────────────────────────────┘
```

### 15.3 Project Detail Modal

```
┌────────────────────────────────────────────────┐
│ ╳                               [GitHub] [Demo] │
├────────────────────────────────────────────────┤
│                                                │
│  ┌──────────────────────────────────────────┐  │
│  │           Project Screenshot             │  │
│  └──────────────────────────────────────────┘  │
│                                                │
│  Healthcare Dashboard                          │
│  [Power BI] [SQL] [DAX]  ← tags               │
│                                                │
│  Problem Statement                             │
│  ──────────────────                            │
│  Teks problem statement...                     │
│                                                │
│  Solution                                      │
│  ─────────                                     │
│  Teks solusi...                                │
│                                                │
│  Key Insights                                  │
│  ────────────                                  │
│  • Insight 1                                   │
│  • Insight 2                                   │
│                                                │
└────────────────────────────────────────────────┘
```

---

## 16. SEO Strategy

### 16.1 Meta Tags

```html
<!-- index.html -->
<head>
  <title>Naufal Hakim — Data Analyst & Data Engineer</title>
  <meta name="description" content="Portfolio profesional Naufal Hakim, Data Analyst dan Data Engineer yang spesialis dalam Power BI, SQL, Python, dan Google Cloud Platform." />
  <meta name="keywords" content="Data Analyst, Data Engineer, Power BI, SQL, Python, BigQuery, Business Intelligence, Portfolio" />
  <meta name="author" content="Naufal Hakim" />
  <link rel="canonical" href="https://naufalhakim.dev" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://naufalhakim.dev" />
  <meta property="og:title" content="Naufal Hakim — Data Analyst & Data Engineer" />
  <meta property="og:description" content="Portfolio profesional Naufal Hakim..." />
  <meta property="og:image" content="https://naufalhakim.dev/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Naufal Hakim — Data Analyst & Data Engineer" />
  <meta name="twitter:description" content="Portfolio profesional Naufal Hakim..." />
  <meta name="twitter:image" content="https://naufalhakim.dev/og-image.png" />
</head>
```

### 16.2 Structured Data (JSON-LD)

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Naufal Hakim",
    "jobTitle": "Data Analyst",
    "description": "Data Analyst and Data Engineer specializing in Power BI, SQL, Python, and Google Cloud Platform.",
    "url": "https://naufalhakim.dev",
    "email": "naufal@email.com",
    "sameAs": ["https://linkedin.com/in/naufalhakim", "https://github.com/naufalhakim"],
    "knowsAbout": ["Data Analytics", "Business Intelligence", "Power BI", "SQL", "Python", "BigQuery"],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Universitas XYZ"
    }
  }
</script>
```

### 16.3 `robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://naufalhakim.dev/sitemap.xml
```

### 16.4 `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://naufalhakim.dev/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://naufalhakim.dev/portfolio</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 17. Performance Strategy

### 17.1 Image Optimization

- Gunakan format **WebP** untuk semua gambar project (konversi dari PNG/JPG)
- Ukuran thumbnail project: **800×500px** (max)
- Ukuran gambar detail: **1200×800px** (max)
- Gunakan `loading="lazy"` pada semua gambar di bawah fold
- Gunakan `width` dan `height` attribute untuk menghindari CLS
- Simpan di `public/images/` (bukan `src/assets/`) agar tidak di-bundle oleh Vite

```tsx
// Contoh implementasi
<img src="/images/projects/healthcare-dashboard.webp" alt="Healthcare Dashboard Power BI" width={800} height={500} loading="lazy" decoding="async" />
```

### 17.2 Code Splitting

```typescript
// pages/HomePage.tsx — lazy load section yang tidak critical
import { lazy, Suspense } from 'react';

const Certifications = lazy(() => import('@/components/sections/Certifications'));
const Contact = lazy(() => import('@/components/sections/Contact'));

// Lazy load halaman portfolio
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
```

### 17.3 Font Loading

```html
<!-- Preconnect ke Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Font dengan display=swap untuk mencegah FOUT yang lama -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=DM+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

### 17.4 Bundle Optimization

```typescript
// vite.config.ts — Manual chunk splitting
manualChunks: {
  'vendor-react': ['react', 'react-dom', 'react-router-dom'],
  'vendor-animation': ['framer-motion'],
  'vendor-icons': ['lucide-react'],
}
```

### 17.5 Tailwind CSS Purge

Tailwind CSS v3+ secara default melakukan purge unused CSS. Pastikan `content` di `tailwind.config.ts` mencakup semua file TSX.

---

## 18. Accessibility Requirements

### 18.1 Semantic HTML

- Gunakan elemen HTML semantik: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`
- Setiap `<section>` memiliki `<h2>` sebagai heading
- Hierarki heading: `h1` (nama di Hero) → `h2` (section heading) → `h3` (sub-item)

### 18.2 ARIA

```tsx
// Navbar mobile toggle
<button
  aria-label="Toggle navigation menu"
  aria-expanded={isOpen}
  aria-controls="mobile-menu"
>

// Modal
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
>

// Skip link
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

### 18.3 Color Contrast

- Teks body (slate-800) pada background putih: rasio 12.6:1 ✅
- Teks secondary (slate-600) pada background putih: rasio 5.9:1 ✅
- Dark mode — teks primary (slate-50) pada bg-primary: rasio 15.3:1 ✅
- CTA button — teks putih pada primary-600: rasio 4.9:1 ✅

### 18.4 Keyboard Navigation

- Semua elemen interaktif fokusable via `Tab`
- Modal dapat ditutup dengan `Escape`
- Focus trap di dalam modal saat terbuka
- Focus dikembalikan ke trigger button saat modal ditutup

### 18.5 Reduced Motion

```tsx
// Respek preferensi reduced-motion
import { useReducedMotion } from 'framer-motion';

const shouldReduceMotion = useReducedMotion();

const variants = shouldReduceMotion
  ? { hidden: {}, visible: {} } // No animation
  : fadeInUp; // Normal animation
```

---

## 19. Deployment Workflow

### 19.1 Setup Awal

```bash
# 1. Clone / init repo
git init
git remote add origin https://github.com/naufalhakim/portfolio.git

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env.local
# Edit .env.local dengan nilai sebenarnya

# 4. Development server
npm run dev

# 5. Build untuk production
npm run build

# 6. Preview build
npm run preview
```

### 19.2 Workflow Update Data

```
1. Buka VSCode
        ↓
2. Edit file di src/data/
   (projects.ts / skills.ts / certifications.ts / experience.ts)
        ↓
3. Preview lokal: npm run dev
        ↓
4. Verifikasi perubahan tampil dengan benar
        ↓
5. git add src/data/
   git commit -m "feat: tambah project [nama project]"
   git push origin main
        ↓
6. Vercel otomatis mendeteksi push ke main
        ↓
7. Vercel build otomatis (±1–2 menit)
        ↓
8. Website live dengan data terbaru
```

### 19.3 Konfigurasi Vercel

1. Connect GitHub repository ke Vercel
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Environment Variables: set via Vercel Dashboard
6. Custom Domain: konfigurasi DNS sesuai domain yang dipilih

### 19.4 Branch Strategy

```
main          → Production (auto-deploy ke Vercel)
develop       → Development / staging
feature/*     → Feature branches
```

---

## 20. Development Milestones

### Milestone 1 — Setup & Foundation (Hari 1–2)

- [ ] Inisialisasi project: `npm create vite@latest`
- [ ] Install semua dependencies
- [ ] Konfigurasi TypeScript, Tailwind, ESLint, Prettier
- [ ] Setup folder structure
- [ ] Konfigurasi fonts (Google Fonts)
- [ ] Buat design tokens di Tailwind config
- [ ] Setup dark mode dengan Tailwind `class` strategy
- [ ] Setup routing (React Router)
- [ ] Buat layout komponen dasar (Navbar, Footer, Section, Container)

### Milestone 2 — Data & Components (Hari 3–4)

- [ ] Buat semua file di `src/data/` dengan type definitions lengkap
- [ ] Isi data awal (projects, skills, certifications, experience)
- [ ] Buat animation variants di `src/lib/animations.ts`
- [ ] Buat komponen UI dasar (Button, Badge, Card, Modal)
- [ ] Buat komponen animasi (FadeIn, ScrollReveal, StaggerList)
- [ ] Buat hook: `useDarkMode`, `useScrollSpy`, `useInView`

### Milestone 3 — Home Page Sections (Hari 5–8)

- [ ] **Hero Section** — dengan typewriter effect, avatar, CTA buttons
- [ ] **About Me** — foto, bio, download CV
- [ ] **Skills** — grid dengan ikon, kategori, stagger animation
- [ ] **Experience & Education** — timeline vertikal
- [ ] **Certifications** — grid card dengan link verifikasi
- [ ] **Featured Projects** — 6 cards dengan hover overlay
- [ ] **Contact** — form + social links
- [ ] **Footer**

### Milestone 4 — Portfolio Page (Hari 9–11)

- [ ] Halaman `/portfolio` dengan semua project
- [ ] Implementasi search functionality
- [ ] Implementasi filter kategori
- [ ] Implementasi filter tools
- [ ] Project Detail Modal (atau dedicated page)
- [ ] Animasi filter transition

### Milestone 5 — Polish & Optimization (Hari 12–14)

- [ ] Dark mode: pastikan semua komponen mendukung
- [ ] Responsive: test di semua breakpoint
- [ ] Animasi: refine semua Framer Motion
- [ ] Accessibility audit: keyboard nav, ARIA, contrast
- [ ] Image optimization: konversi ke WebP
- [ ] SEO: meta tags, OG, structured data
- [ ] sitemap.xml dan robots.txt
- [ ] Performance audit: Lighthouse

### Milestone 6 — Deployment (Hari 15)

- [ ] Setup repository GitHub
- [ ] Connect ke Vercel
- [ ] Set environment variables di Vercel
- [ ] Custom domain konfigurasi
- [ ] Final Lighthouse audit
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS Safari, Android Chrome)

---

## 21. Risks & Mitigations

| #   | Risiko                                        | Probabilitas | Impact | Mitigasi                                                                                  |
| --- | --------------------------------------------- | ------------ | ------ | ----------------------------------------------------------------------------------------- |
| R1  | Performa animasi buruk di mobile              | Medium       | High   | Test early di device nyata; gunakan `will-change` sparingly; batasi concurrent animations |
| R2  | Form email tidak terkirim (Formspree/EmailJS) | Low          | High   | Setup fallback: tampilkan email langsung jika form gagal; test end-to-end sebelum deploy  |
| R3  | Gambar project terlalu besar, LCP buruk       | Medium       | High   | Konversi ke WebP, compress sebelum upload, gunakan lazy loading                           |
| R4  | Dark mode inconsistency di beberapa komponen  | Medium       | Medium | Buat checklist dark mode untuk setiap komponen baru                                       |
| R5  | TypeScript errors saat edit data manual       | Low          | Medium | Tipe data yang ketat + JSDoc comments; gunakan Zod untuk runtime validation (opsional)    |
| R6  | Broken links di project (GitHub, Demo)        | High         | Low    | Validasi URL di `projects.ts`; gunakan optional chaining dan conditional render           |
| R7  | Font loading memperlambat FCP                 | Low          | Medium | Preconnect, font-display: swap, preload critical fonts                                    |
| R8  | SPA routing tidak berfungsi di Vercel         | Low          | High   | Setup `vercel.json` dengan rewrite rule sebelum deploy                                    |
| R9  | Open Graph image tidak muncul saat di-share   | Medium       | Medium | Test dengan Facebook Debugger dan Twitter Card Validator sebelum launch                   |
| R10 | Scroll spy tidak akurat (active nav link)     | Medium       | Low    | Gunakan Intersection Observer dengan rootMargin yang tepat; test manual                   |

---

## Appendix

### A. Daftar Project Awal (Seed Data)

| #   | Judul                 | Kategori              | Tools                       | Featured |
| --- | --------------------- | --------------------- | --------------------------- | -------- |
| 1   | Healthcare Dashboard  | Business Intelligence | Power BI, SQL, DAX          | ✅       |
| 2   | Sales Dashboard       | Data Visualization    | Power BI, Excel             | ✅       |
| 3   | Pizza Sales Analysis  | Data Analytics        | Python, SQL, Matplotlib     | ✅       |
| 4   | Customer Segmentation | Data Analytics        | Python, scikit-learn, SQL   | ✅       |
| 5   | SIPERJAS              | Web Development       | React, Node.js, PostgreSQL  | ✅       |
| 6   | Portfolio Website     | Web Development       | React, TypeScript, Tailwind | ✅       |

### B. Tools Referensi

| Keperluan               | Tools                                |
| ----------------------- | ------------------------------------ |
| Desain mockup           | Figma (opsional)                     |
| Konversi gambar ke WebP | Squoosh (squoosh.app)                |
| Optimize SVG ikon       | SVGO                                 |
| Test responsivitas      | Chrome DevTools, Responsively App    |
| Lighthouse audit        | Chrome DevTools, web.dev/measure     |
| OG Image preview        | opengraph.xyz, metatags.io           |
| Twitter Card preview    | cards-dev.twitter.com/validator      |
| Accessibility audit     | axe DevTools extension               |
| Color contrast check    | webaim.org/resources/contrastchecker |

### C. Referensi Desain

- [Linear.app](https://linear.app) — minimalist SaaS, dark mode, typography
- [Stripe.com](https://stripe.com) — premium feel, gradient, motion
- [Vercel.com](https://vercel.com) — dark-first, clean, technical
- [Framer.com](https://framer.com) — animation-heavy, modern
- [Notion.so](https://notion.so) — clean, minimal, readable

### D. Kontak Informasi

| Platform | Info                         |
| -------- | ---------------------------- |
| Email    | `[email naufal]`             |
| LinkedIn | `linkedin.com/in/[username]` |
| GitHub   | `github.com/[username]`      |

---

_Dokumen ini bersifat living document dan dapat diperbarui sesuai perkembangan proyek._

**PRD Version History:**

| Versi | Tanggal | Perubahan       |
| ----- | ------- | --------------- |
| 1.0.0 | 2026    | Initial release |
