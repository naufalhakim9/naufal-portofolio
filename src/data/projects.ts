import { withBaseUrl } from '../utils/assetPaths';

export type ProjectCategory = 'Data Analytics' | 'Data Visualization' | 'Data Engineering' | 'Business Intelligence' | 'Web Development';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  thumbnail: string;
  featured: boolean;
  order: number;
  problemStatement?: string;
  solution?: string;
  keyInsights?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  completedAt: string;
  status: 'completed' | 'in-progress' | 'archived';
}

export const projects: Project[] = [
  {
    id: 'performance-tracker',
    title: 'Performance Tracker',
    shortDescription: 'Proyek ini bertujuan untuk membangun dashboard performance-tracker interaktif menggunakan Power BI.',
    description: 'Dashboard Power BI yang membantu stakeholder memantau performance-tracker secara berkala.',
    category: 'Data Visualization',
    tags: ['Power BI', 'Excel', 'Data Modeling', 'DAX'],
    thumbnail: withBaseUrl('images/projects/4.png'),
    featured: true,
    order: 1,
    problemStatement: 'Dashboard ini dibuat untuk menyederhanakan analisis tersebut dalam satu tampilan visual yang informatif.',
    solution: 'Dashboard dirancang untuk membantu pengambilan keputusan keuangan berbasis data serta evaluasi kesehatan finansial dalam jangka panjang.',
    keyInsights: ['Memberikan gambaran cepat kondisi performance saat ini'],
    githubUrl: '',
    completedAt: '2025-12',
    status: 'completed',
  },
  {
    id: 'personal-finance-performance',
    title: 'Personal Finance Performance',
    shortDescription: 'Proyek ini bertujuan untuk membangun dashboard keuangan interaktif menggunakan Power BI.',
    description: 'Dashboard Power BI yang membantu stakeholder memantau income, expenses, dan savings secara berkala.',
    category: 'Business Intelligence',
    tags: ['Power BI', 'Excel', 'Data Modeling', 'DAX'],
    thumbnail: withBaseUrl('images/projects/2.png'),
    featured: true,
    order: 1,
    problemStatement: 'Mengelola keuangan sering kali menjadi sulit karena: Data pemasukan, pengeluaran, dan tabungan tersebar.',
    solution: 'Dashboard dirancang untuk membantu pengambilan keputusan keuangan berbasis data serta evaluasi kesehatan finansial dalam jangka panjang.',
    keyInsights: ['Memberikan gambaran cepat kondisi finansial saat ini'],
    githubUrl: 'https://canva.link/nokr69z5kfm9p14',
    completedAt: '2025-11',
    status: 'completed',
  },
  {
    id: 'healthcare-dashboard',
    title: 'Healthcare Dashboard',
    shortDescription: 'Dashboard Power BI untuk analisis performa rumah sakit dan pemantauan KPI klinis.',
    description: 'Dashboard Power BI yang membantu stakeholder memantau tren pasien, pendapatan, dan performa layanan medis.',
    category: 'Business Intelligence',
    tags: ['Power BI', 'Excel', 'Data Modeling', 'DAX'],
    thumbnail: withBaseUrl('images/projects/5.png'),
    featured: true,
    order: 2,
    problemStatement: 'Rumah sakit kesulitan memantau performa operasional dan melihat tren pasien secara cepat.',
    solution: 'Membangun dashboard interaktif yang terhubung ke dataset Excel dan menampilkan metrik klinis utama.',
    keyInsights: ['Visual KPI digunakan untuk memberikan gambaran cepat terkait performa utama rumah sakit'],
    githubUrl: 'https://canva.link/wa240q0gg4vwwjm',
    completedAt: '2025-10',
    status: 'completed',
  },
  {
    id: 'pizza-sales-analytics',
    title: 'Pizza Sales Analytics',
    shortDescription: 'Berdasarkan kategori produk, ukuran pizza, tren pendapatan, dan perilaku pemesanan pelanggan.',
    description:
      'Dashboard ini dibuat untuk menganalisis performa penjualan pizza berdasarkan kategori produk, ukuran pizza, tren pendapatan, dan perilaku pemesanan pelanggan. Dashboard membantu bisnis restoran dalam memonitor revenue, mengetahui produk terlaris, serta memahami kontribusi setiap kategori pizza terhadap total penjualan.',
    category: 'Data Analytics',
    tags: ['Excel', 'Pivot Table', 'Pivot Chart', 'Slicer'],
    thumbnail: withBaseUrl('images/projects/6.png'),
    featured: true,
    order: 3,
    problemStatement: 'Kesulitan menentukan kategori produk dengan kontribusi margin tertinggi.',
    solution: 'Membangun pipeline ETL untuk data penjualan dan mengembangkan visualisasi komparatif performa produk.',
    keyInsights: ['Dashboard menampilkan tiga indikator utama untuk memberikan gambaran cepat terhadap performa bisnis'],
    githubUrl: 'https://canva.link/wbbz3tgamss25kg',
    completedAt: '2025-08',
    status: 'completed',
  },
  {
    id: 'hr-analytics',
    title: 'HR Analytics Team',
    shortDescription: 'Memonitor dan menganalisis data sumber daya manusia (Human Resources).',
    description:
      'Dashboard ini dibuat untuk memonitor dan menganalisis data sumber daya manusia (Human Resources) dalam sebuah perusahaan. Dashboard membantu tim HR dan manajemen dalam memahami kondisi workforce, tingkat attrition, pertumbuhan karyawan, diversity, stabilitas karyawan, hingga distribusi karyawan berdasarkan department dan job level.',
    category: 'Data Engineering',
    tags: ['Excel', 'Pivot Table', 'Pivot Chart', 'Slicer'],
    thumbnail: withBaseUrl('images/projects/7.png'),
    featured: true,
    order: 4,
    problemStatement: 'Dashboard dibuat untuk menjawab beberapa pertanyaan bisnis utama.',
    solution: 'Dashboard bersifat interaktif sehingga pengguna dapat melakukan filter berdasarkan Department, Reporting Manager, danEmployee Data',
    keyInsights: ['Dashboard menampilkan indikator utama HR untuk memberikan overview kondisi workforce perusahaan'],
    githubUrl: 'https://canva.link/0akza710wy49hw3',
    completedAt: '2025-07',
    status: 'completed',
  },
  {
    id: 'optimalisasi-analisis-data-pendidikan',
    title: 'Optimalisasi Analisis Data Untuk Peningkatan Kinerja Pendidikan',
    shortDescription: 'Proyek ini bertujuan untuk menganalisis kinerja akademik siswa menggunakan dashboard interaktif berbasis Power BI.',
    description: 'Analisis difokuskan pada status kelulusan, nilai UTS & UAS, perbandingan gender, mata pelajaran, serta evaluasi pengajar guna membantu institusi pendidikan dalam pengambilan keputusan berbasis data.',
    category: 'Data Visualization',
    tags: ['Power BI', 'Excel', 'Data Modeling', 'DAX'],
    thumbnail: withBaseUrl('images/projects/1.png'),
    featured: true,
    order: 5,
    problemStatement: 'Dashboard ini dikembangkan untuk menjawab kebutuhan tersebut melalui visualisasi yang informatif dan mudah dipahami.',
    solution: 'Membangun UI dashboard responsif dengan card summary dan filter interaktif.',
    keyInsights: ['Dashboard memudahkan review meeting mingguan', 'UI ringan dan mudah digunakan'],
    githubUrl: 'https://canva.link/raowinwy3lgohyf',
    completedAt: '2025-06',
    status: 'completed',
  },
  {
    id: 'msib-analisis-data-pendidikan',
    title: 'Optimalisasi Analisis Data Untuk Peningkatan Kinerja Pendidikan',
    shortDescription: 'Proyek ini bertujuan untuk menganalisis kinerja akademik siswa menggunakan dashboard interaktif berbasis Power BI.',
    description: 'Analisis difokuskan pada status kelulusan, nilai UTS & UAS, perbandingan gender, mata pelajaran, serta evaluasi pengajar guna membantu institusi pendidikan dalam pengambilan keputusan berbasis data.',
    category: 'Data Visualization',
    tags: ['Power BI', 'Excel', 'Data Modeling', 'DAX'],
    thumbnail: withBaseUrl('images/projects/8.png'),
    featured: true,
    order: 6,
    problemStatement: 'Dashboard ini dikembangkan untuk menjawab kebutuhan tersebut melalui visualisasi yang informatif dan mudah dipahami.',
    solution: 'Membangun UI dashboard responsif dengan card summary dan filter interaktif.',
    keyInsights: ['Dashboard memudahkan review meeting mingguan', 'UI ringan dan mudah digunakan'],
    githubUrl: 'https://canva.link/vyoor2nha08maaf',
    completedAt: '2024-06',
    status: 'completed',
  },
];
