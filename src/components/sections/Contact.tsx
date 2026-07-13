import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiCheck } from 'react-icons/fi';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { GradientButton } from '@/components/ui/GradientButton';

const details = [
  { icon: FiMail, label: 'aissisamy@outlook.com', href: 'mailto:aissisamy@outlook.com' },
  { icon: FiMapPin, label: 'Montréal, QC · Open to remote', href: undefined },
  { icon: FiGithub, label: 'github.com/samy-mt07', href: 'https://github.com/samy-mt07' },
  { icon: FiLinkedin, label: 'https://www.linkedin.com/in/aissi-samy-6338ab322/', href: 'https://www.linkedin.com/in/aissi-samy-6338ab322/' },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Wire this up to your email service of choice (Resend, Formspree, etc).
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have a role, project, or just want to say hi? My inbox is open."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            {details.map(({ icon: Icon, label, href }) => (
              <GlassCard key={label} className="flex items-center gap-3 p-4" hover={false}>
                <span className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-accent">
                  <Icon size={16} />
                </span>
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer" className="text-sm hover:text-accent">
                    {label}
                  </a>
                ) : (
                  <span className="text-sm text-muted">{label}</span>
                )}
              </GlassCard>
            ))}
          </div>

          <GlassCard className="relative overflow-hidden p-8 md:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[280px] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary">
                    <FiCheck size={24} />
                  </span>
                  <p className="mt-4 font-display text-lg font-semibold">Message sent</p>
                  <p className="mt-1 text-sm text-muted">Thanks for reaching out — I&apos;ll reply soon.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-accent hover:underline">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-5" exit={{ opacity: 0 }}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-muted">Name</span>
                      <input
                        required
                        type="text"
                        className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                        placeholder="Jane Doe"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-muted">Email</span>
                      <input
                        required
                        type="email"
                        className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                        placeholder="jane@company.com"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-medium text-muted">Message</span>
                    <textarea
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                      placeholder="THISE SECTION ISN'T WORKING FOR NOW , PLEASE CONTACT ME DIRECTLY VIA EMAIL"
                    />
                  </label>
                  <GradientButton type="submit" className="w-full justify-center" disabled={sending}>
                    {sending ? 'Sending…' : 'Send message'}
                  </GradientButton>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
