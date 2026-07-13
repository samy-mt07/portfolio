import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="About"
          title="A little about me"
          description="The short version of how I got here, and what I care about when I build."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-5">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full p-8">
              <p className="text-muted leading-relaxed">
                I&apos;m a software developer  who likes taking products from a rough idea to something
                people actually rely on. I care most about the parts that are easy to skip: how a
                system behaves under real load, how a codebase reads six months later, and whether an
                interface still makes sense at 2am during an incident.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Outside of shipping features, contributing to
                a couple of open-source tools, and slowly working through a personal reading list on
                distributed systems.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard className="grid h-full grid-cols-2 gap-6 p-8">
              <AnimatedCounter to={5} suffix="+" label="Shipped Projects" />
              <AnimatedCounter to={2} suffix="yr" label="Experience" />
              <AnimatedCounter to={12} suffix="+" label="Technologies" />
              <AnimatedCounter to={100} suffix="%" label="Committed" />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
