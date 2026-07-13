import type { Project } from '@/types';

/**
 * Add a new project by pushing an object to this array.
 * Nothing else needs to change — Projects grid, filters, search,
 * sort, and the detail modal all read from here automatically.
 */
export const projects: Project[] = [
  {
    id: 'orbit-realtime-dashboard',
    title: 'Orbit — Realtime Ops Dashboard',
    description:
      'A realtime infrastructure monitoring dashboard with sub-100ms metric streaming and anomaly alerts.',
    longDescription:
      'Orbit ingests metrics from distributed services over WebSockets and renders live, animated charts capable of holding 50k+ data points without dropping frames. Built to help on-call engineers spot anomalies before they become incidents.',
    image: '/projects/orbit-cover.svg',
    technologies: ['React', 'TypeScript', 'WebSockets', 'D3.js', 'Node.js', 'Redis'],
    category: 'Web',
    github: 'https://github.com/yourname/orbit-dashboard',
    live: 'https://orbit-demo.yourdomain.dev',
    caseStudy: '',
    featured: true,
    status: 'Live',
    date: '2025-11-02',
    tags: ['realtime', 'dashboard', 'observability'],
    challenges: [
      'Rendering tens of thousands of live points without blocking the main thread',
      'Keeping WebSocket reconnection seamless during network flaps',
    ],
    solutions: [
      'Offloaded chart math to a Web Worker and batched DOM updates with requestAnimationFrame',
      'Built an exponential-backoff reconnect layer with local buffering so no data is lost',
    ],
    architecture:
      'React front end talking to a Node.js gateway over WebSockets, with Redis as a short-lived hot cache for the last N metric points per stream.',
  },
  {
    id: 'lumen-ai-writing',
    title: 'Lumen — AI Writing Copilot',
    description:
      'An AI-assisted writing tool with inline suggestions, tone control, and versioned drafts.',
    longDescription:
      'Lumen wraps an LLM in a focused editor experience: inline suggestions, tone adjustment, and a draft history you can branch from, aimed at making the model feel like a collaborator instead of an autocomplete.',
    image: '/projects/lumen-cover.svg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Postgres', 'OpenAI API'],
    category: 'AI/ML',
    github: 'https://github.com/yourname/lumen',
    live: 'https://lumen-demo.yourdomain.dev',
    featured: true,
    status: 'Live',
    date: '2025-06-15',
    tags: ['ai', 'editor', 'productivity'],
    challenges: ['Keeping suggestion latency low enough to feel inline, not disruptive'],
    solutions: ['Streamed completions token-by-token with optimistic UI and debounced requests'],
    architecture: 'Next.js app router, Postgres for draft versioning, edge functions for streaming completions.',
  },
  {
    id: 'ferry-mobile-payments',
    title: 'Ferry — Peer Payments App',
    description: 'A cross-platform mobile app for splitting bills and sending money between friends.',
    longDescription:
      'Ferry lets groups track shared expenses and settle up with a single tap, with offline-first sync so it works reliably on flaky connections.',
    image: '/projects/ferry-cover.svg',
    technologies: ['React Native', 'TypeScript', 'GraphQL', 'Stripe'],
    category: 'Mobile',
    github: 'https://github.com/yourname/ferry',
    featured: false,
    status: 'In Progress',
    date: '2026-02-10',
    tags: ['fintech', 'mobile', 'offline-first'],
  },
  {
    id: 'atlas-api-gateway',
    title: 'Atlas — Lightweight API Gateway',
    description: 'A minimal, fast API gateway with rate limiting, auth, and request tracing built in.',
    longDescription:
      'Atlas is a small, self-hosted API gateway for teams who want the essentials — routing, auth, rate limiting, tracing — without the operational weight of a full service mesh.',
    image: '/projects/atlas-cover.svg',
    technologies: ['Go', 'Redis', 'Docker', 'PostgreSQL'],
    category: 'Backend',
    github: 'https://github.com/yourname/atlas-gateway',
    featured: false,
    status: 'Live',
    date: '2024-09-20',
    tags: ['infrastructure', 'api', 'golang'],
  },
  {
    id: 'forge-cli',
    title: 'Forge — Project Scaffolding CLI',
    description: 'An open-source CLI that scaffolds full-stack projects with sane defaults in seconds.',
    longDescription:
      'Forge generates opinionated, production-ready project scaffolds (frontend, backend, CI, linting) from a single command, so new projects start from a good baseline instead of a blank folder.',
    image: '/projects/forge-cover.svg',
    technologies: ['Node.js', 'TypeScript', 'Commander.js'],
    category: 'Tooling',
    github: 'https://github.com/yourname/forge-cli',
    featured: false,
    status: 'Archived',
    date: '2024-01-05',
    tags: ['cli', 'developer-tools', 'open-source'],
  },
];
