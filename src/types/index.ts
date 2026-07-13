export type ProjectCategory = 'Web' | 'Mobile' | 'AI/ML' | 'Backend' | 'Tooling';
export type ProjectStatus = 'Live' | 'In Progress' | 'Archived';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery?: string[];
  technologies: string[];
  category: ProjectCategory;
  github?: string;
  live?: string;
  caseStudy?: string;
  featured: boolean;
  status: ProjectStatus;
  date: string; // ISO string, e.g. '2025-03-01'
  tags: string[];
  challenges?: string[];
  solutions?: string[];
  architecture?: string;
}

export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Cloud'
  | 'Database'
  | 'DevOps'
  | 'Tools'
  | 'Languages'
  | 'Frameworks'
  | 'Soft Skills';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 0-100
  icon: string; // react-icons key, resolved in Skills.tsx
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  highlights: string[];
  tech: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}
