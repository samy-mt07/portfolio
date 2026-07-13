import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonials } from '@/data/education';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section id="testimonials" className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Kind words" title="What people I've worked with say" />

        <div className="relative mt-14">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard className="p-10 text-center">
                <p className="font-display text-xl leading-relaxed text-white/90">&ldquo;{current.quote}&rdquo;</p>
                <p className="mt-6 text-sm font-medium">{current.name}</p>
                <p className="text-xs text-muted">
                  {current.role} · {current.company}
                </p>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="glass flex h-10 w-10 items-center justify-center rounded-full hover:text-accent"
            >
              <FiChevronLeft />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-accent' : 'w-1.5 bg-white/20'}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="glass flex h-10 w-10 items-center justify-center rounded-full hover:text-accent"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
