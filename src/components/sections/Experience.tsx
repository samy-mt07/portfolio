import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiAward } from 'react-icons/fi';
import { experience } from '@/data/experience';
import { education, certifications } from '@/data/education';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';

export function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Journey" title="Experience &amp; education" />

        {/* Experience timeline */}
        <div className="mt-16">
          <h3 className="mb-8 flex items-center gap-2 font-display text-lg font-semibold">
            <FiBriefcase className="text-accent" /> Experience
          </h3>
          <div className="relative border-l border-border pl-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                className="relative mb-10 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-gradient-to-r from-primary to-secondary shadow-glow" />
                <GlassCard className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-base font-semibold">{item.role}</h4>
                    <span className="font-mono text-xs text-muted">
                      {item.startDate} — {item.endDate}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-accent">
                    {item.company} · {item.location}
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
                  <ul className="mt-3 space-y-1.5">
                    {item.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted leading-relaxed">
                        — {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span key={t} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education timeline */}
        <div className="mt-20">
          <h3 className="mb-8 flex items-center gap-2 font-display text-lg font-semibold">
            <FiBookOpen className="text-accent" /> Education
          </h3>
          <div className="relative border-l border-border pl-8">
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                className="relative mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-gradient-to-r from-secondary to-accent shadow-glow" />
                <GlassCard className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-base font-semibold">{item.degree}</h4>
                    <span className="font-mono text-xs text-muted">
                      {item.startDate} — {item.endDate}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-accent">
                    {item.school} · {item.location}
                  </p>
                  {item.description && <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="mb-8 flex items-center gap-2 font-display text-lg font-semibold">
            <FiAward className="text-accent" /> Certifications
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlassCard className="p-5">
                  <h4 className="font-display text-sm font-semibold">{cert.name}</h4>
                  <p className="mt-1 text-xs text-muted">
                    {cert.issuer} · {cert.date}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
