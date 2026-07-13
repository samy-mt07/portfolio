# Portfolio

A futuristic, animated personal portfolio built with React 19, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Making it yours

Everything content-related lives in a handful of files — you shouldn't need to touch component code to personalize the site.

| What to change | Where |
|---|---|
| Name, title, hero copy, social links | `src/components/sections/Hero.tsx` |
| Bio text | `src/components/sections/About.tsx` |
| Skills + proficiency levels | `src/data/skills.ts` |
| **Projects** (the main section) | `src/data/projects.ts` — push a new object, it shows up automatically with filtering, search, sort, and the detail modal already wired up |
| Work experience | `src/data/experience.ts` |
| Education / certifications / testimonials | `src/data/education.ts` |
| Contact details, social links | `src/components/sections/Contact.tsx`, `src/components/layout/Footer.tsx` |
| Site title, meta description, OG tags | `index.html` |
| Colors, fonts, animation tokens | `tailwind.config.ts` |

### Assets to replace

- `public/resume.pdf` — placeholder PDF, swap in your real CV (keep the filename or update the `href` in `Hero.tsx` / `Resume.tsx`)
- `public/projects/*.svg` — placeholder gradient covers, swap for real project screenshots (`.png`/`.jpg` work fine, just update the `image` path in `projects.ts`)
- `public/testimonials/*.svg` — placeholder avatar initials
- `public/og-image.png` — add a real 1200×630 social preview image (referenced in `index.html`)
- `public/favicon.svg` — swap for your own mark if you'd like

### Contact form

The form in `Contact.tsx` currently simulates a submission (for the success animation). Wire the `handleSubmit` function up to a real email service — [Resend](https://resend.com), [Formspree](https://formspree.io), or your own API route — when you're ready to receive real messages.

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS
- Framer Motion (all animation, page transitions, scroll reveals)
- React Router (Home / Resume / 404)
- React Icons (`react-icons/fi` for UI icons, `react-icons/si` for tech logos)

## Accessibility & performance notes

- Respects `prefers-reduced-motion` globally (see `src/index.css`)
- Visible keyboard focus states on all interactive elements
- Images are lazy-loaded; JS is split into vendor/motion chunks in `vite.config.ts`
- Custom cursor and parallax effects are skipped automatically on touch devices
