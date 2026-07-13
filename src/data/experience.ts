import type { ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Software Engineer',
    company: 'Nimbus Systems',
    location: 'Remote',
    startDate: '2024-06',
    endDate: 'Present',
    description:
      'Own the front-end platform for a B2B analytics product used by 200+ teams, from architecture through shipping.',
    highlights: [
      'Rebuilt the dashboard rendering pipeline, cutting time-to-interactive by 40%',
      'Introduced a shared component library adopted across 4 product teams',
      'Mentored two junior engineers through their first six months',
    ],
    tech: ['React', 'TypeScript', 'GraphQL', 'AWS'],
  },
  {
    id: 'exp-2',
    role: 'Frontend Engineer Intern',
    company: 'Fielder Labs',
    location: 'Montréal, QC',
    startDate: '2023-05',
    endDate: '2023-08',
    description: 'Shipped customer-facing features for an internal tools platform during a 12-week internship.',
    highlights: [
      'Built a reusable form engine that replaced three one-off implementations',
      'Wrote the team\u2019s first end-to-end test suite with Playwright',
    ],
    tech: ['React', 'Node.js', 'Playwright'],
  },
];
