import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import { GradientButton } from '@/components/ui/GradientButton';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
      <AuroraBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs text-accent"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-slow" />
          Available for internships &amp; new grad roles
        </motion.span>

        <motion.h1 variants={item} className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
          Hi, I&apos;m <span className="text-gradient">Samy Aissi</span>
          <br />
          Software Developer
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-lg text-muted">
          I build fast, reliable products with clean interfaces and solid systems underneath —
          from realtime dashboards to developer tooling.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <GradientButton
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            icon={<FiArrowRight />}
          >
            View Projects
          </GradientButton>
          <GradientButton variant="outline" href="/resume.pdf" icon={<FiDownload />}>
            Download CV
          </GradientButton>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://github.com/samy-mt07"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-white"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/aissi-samy-6338ab322/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-white"
          >
            <FiLinkedin size={18} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-9 w-5 rounded-full border border-white/20 p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
