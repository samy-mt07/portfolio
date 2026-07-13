import type { EducationItem, Certification, Testimonial } from '@/types';

export const education: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'DEC in Computer Science & Development',
    school: 'Andre Grasset',
    location: 'Montréal, QC',
    startDate: '2024',
    endDate: '2026',
    description: 'Focus on distributed systems and human-computer interaction & Networking & Operating Systems.',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'In progress',
    credentialUrl: '',
  },
  {
    id: 'cert-2',
    name: 'Professional Scrum Master I',
    issuer: '',
    date: '2025-09',
    credentialUrl: '',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Albert .Z',
    role: 'CEO of Federation internation de Football Cotporate',
    company: 'Federation internation de Football Cotporate',
    quote:
      '****',
    avatar: '/testimonials/jordan.svg',
  },
  {
    id: 't-2',
    name: '',
    role: '',
    company: '',
    quote:
      'Combines strong fundamentals with real product sense — always asking whether a feature actually helps the user, not just whether it works.',
    avatar: '/testimonials/priya.svg',
  },
  {
    id: 't-3',
    name: '',
    role: '',
    company: '',
    quote: '****',
    avatar: '/testimonials/marcus.svg',
  },
];
