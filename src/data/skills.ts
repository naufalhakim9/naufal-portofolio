export type SkillCategory = 'Data Analytics' | 'Data Visualization' | 'Cloud & Engineering' | 'Programming';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon: string;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export const skills: Skill[] = [
  {
    id: 'office',
    name: 'Microsoft Office',
    category: 'Data Analytics',
    icon: '/icons/microsoft.svg',
    proficiency: 'Advanced',
  },
  {
    id: 'power-bi',
    name: 'Power BI',
    category: 'Data Visualization',
    icon: '/icons/powerbi.svg',
    proficiency: 'Advanced',
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Data Analytics',
    icon: '/icons/database.svg',
    proficiency: 'Intermediate',
  },
  {
    id: 'code',
    name: 'JavaScript',
    category: 'Programming',
    icon: '/icons/code.svg',
    proficiency: 'Beginner',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Data Analytics',
    icon: '/icons/python.svg',
    proficiency: 'Beginner',
  },
  {
    id: 'bigquery',
    name: 'BigQuery',
    category: 'Cloud & Engineering',
    icon: '/icons/cloud.svg',
    proficiency: 'Beginner',
  },
];
