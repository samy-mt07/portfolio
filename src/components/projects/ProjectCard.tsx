import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import type { Project } from '@/types';
import { useTilt } from '@/hooks/useTilt';
import clsx from '@/utils/clsx';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const statusStyles: Record<Project['status'], string> = {
  Live: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  'In Progress': 'text-amber-400 border-amber-400/30 bg-amber-400/10',
  Archived: 'text-muted border-white/10 bg-white/5',
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      style={{ transformStyle: 'preserve-3d' }}
      className="group relative rounded-2xl border border-border bg-surface p-px transition-shadow duration-300 hover:shadow-glow"
    >
      {/* animated border glow that follows the cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(300px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(59,130,246,0.25), transparent 60%)',
        }}
      />

      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-bg/60">
        <button onClick={() => onOpen(project)} className="relative aspect-video w-full overflow-hidden text-left">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
          {project.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-white">
              Featured
            </span>
          )}
          <span
            className={clsx(
              'absolute right-3 top-3 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wide',
              statusStyles[project.status],
            )}
          >
            {project.status}
          </span>
        </button>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-accent"
              >
                <FiExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-white"
              >
                <FiGithub size={14} /> Code
              </a>
            )}
            <button
              onClick={() => onOpen(project)}
              className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
            >
              Details <FiArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
