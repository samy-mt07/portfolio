import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-muted">{description}</p>}
    </motion.div>
  );
}
