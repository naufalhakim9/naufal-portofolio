export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

export const certifications: Certificate[] = [
  {
    id: 'gcp',
    title: 'Google Cloud Platform',
    issuer: 'Google Cloud Computing Foundations',
    year: '2025',
    link: 'https://www.skills.google/public_profiles/8421bc62-a983-4c61-bda4-9b63d1fe018d',
  },
  {
    id: 'jobready',
    title: 'JobReady Employability Skills',
    issuer: 'Wadhwani Foundation',
    year: '2024',
    link: 'https://web.certificate.wfglobal.org/en/certificate?certificateId=66bc531e80bcef0123a99b4e',
  },
  {
    id: 'dp900',
    title: 'DP 900: Microsoft Azure Data Fundamentals',
    issuer: 'Certiport',
    year: '2024',
    link: 'https://canva.link/y04sqwvc293w12s',
  },
  {
    id: 'ms-data-engineer',
    title: 'Microsoft Data Engineer',
    issuer: 'MSIB - Studi Independent Learning',
    year: '2024',
    link: 'https://canva.link/0474z6b6b1s0nq2',
  },
  {
    id: 'applied-microsoft-office',
    title: 'Applied Microsoft Office',
    issuer: 'Trust Training Partners',
    year: '2023',
    link: 'https://canva.link/7jp2gsulrjjyof4',
  },
];
