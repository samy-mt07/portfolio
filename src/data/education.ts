import type { EducationItem, Certification, Testimonial } from '@/types';

export const education: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'B.Sc. Computer Science',
    school: 'Université de Montréal',
    location: 'Montréal, QC',
    startDate: '2021',
    endDate: '2025',
    description: 'Focus on distributed systems and human-computer interaction.',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2025-04',
    credentialUrl: '',
  },
  {
    id: 'cert-2',
    name: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    date: '2024-09',
    credentialUrl: '',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Jordan Lee',
    role: 'Engineering Manager',
    company: 'Nimbus Systems',
    quote:
      'One of the fastest ramp-ups I\u2019ve seen. Shipped production code in week one and has been raising the bar for the team ever since.',
    avatar: '/testimonials/jordan.svg',
  },
  {
    id: 't-2',
    name: 'Priya Nair',
    role: 'Senior Engineer',
    company: 'Fielder Labs',
    quote:
      'Combines strong fundamentals with real product sense — always asking whether a feature actually helps the user, not just whether it works.',
    avatar: '/testimonials/priya.svg',
  },
  {
    id: 't-3',
    name: 'Marcus Webb',
    role: 'CTO',
    company: 'Fielder Labs',
    quote: 'Turned a vague internship brief into a tool the whole team still relies on. Rare initiative for a first role.',
    avatar: '/testimonials/marcus.svg',
  },
];
