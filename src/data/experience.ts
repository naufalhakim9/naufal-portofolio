export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'experience' | 'education';
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'microsoft-data-engineer',
    title: 'Microsoft Data Engineer ',
    organization: 'PT Maribelajar Indonesia Cerdas - Studi Independen by MSIB',
    period: 'Feb 2024 - Jun 2024',
    description: 'Menganalisis performa Mentee dan membangun dashboard KPI untuk tim business intelligence.',
    type: 'experience',
  },
  {
    id: 'education-unsap',
    title: 'S1 Informatika',
    organization: 'Universitas Sebelas April',
    period: 'Sept 2021 - Nov 2025',
    description: 'Fokus pada data science, machine learning, dan sistem informasi.',
    type: 'education',
  },
];
