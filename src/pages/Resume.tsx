import { FiDownload } from 'react-icons/fi';
import { experience } from '@/data/experience';
import { education, certifications } from '@/data/education';
import { skills } from '@/data/skills';
import { GradientButton } from '@/components/ui/GradientButton';
import { GlassCard } from '@/components/ui/GlassCard';

export function Resume() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-28 pt-36">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold">Alex Rivera</h1>
          <p className="mt-1 text-muted">Software Engineer</p>
        </div>
        <GradientButton href="/resume.pdf" icon={<FiDownload />}>
          Download PDF
        </GradientButton>
      </div>

      <GlassCard className="mt-10 p-8">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">Experience</h2>
        <div className="mt-4 space-y-6">
          {experience.map((item) => (
            <div key={item.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium">
                  {item.role} · {item.company}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {item.startDate} — {item.endDate}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="mt-6 p-8">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">Education</h2>
        <div className="mt-4 space-y-4">
          {education.map((item) => (
            <div key={item.id} className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium">
                {item.degree} · {item.school}
              </h3>
              <span className="font-mono text-xs text-muted">
                {item.startDate} — {item.endDate}
              </span>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="mt-6 p-8">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">Certifications</h2>
        <ul className="mt-4 space-y-2">
          {certifications.map((cert) => (
            <li key={cert.id} className="text-sm text-muted">
              {cert.name} — {cert.issuer} ({cert.date})
            </li>
          ))}
        </ul>
      </GlassCard>

      <GlassCard className="mt-6 p-8">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">Skills</h2>
        <p className="mt-4 text-sm text-muted">{skills.map((s) => s.name).join(' · ')}</p>
      </GlassCard>
    </main>
  );
}
