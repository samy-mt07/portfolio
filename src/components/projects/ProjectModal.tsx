import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiFileText } from 'react-icons/fi';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <motion.div
            className="glass max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl p-0"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              >
                <FiX size={18} />
              </button>
            </div>

            <div className="p-8">
              <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{project.longDescription}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>

              {project.architecture && (
                <div className="mt-6">
                  <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">Architecture</h4>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{project.architecture}</p>
                </div>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">Challenges</h4>
                    <ul className="mt-2 space-y-2 text-sm text-muted">
                      {project.challenges.map((c) => (
                        <li key={c} className="leading-relaxed">
                          — {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {project.solutions && (
                    <div>
                      <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">Solutions</h4>
                      <ul className="mt-2 space-y-2 text-sm text-muted">
                        {project.solutions.map((s) => (
                          <li key={s} className="leading-relaxed">
                            — {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-medium text-white"
                  >
                    <FiExternalLink size={14} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
                  >
                    <FiGithub size={14} /> Source Code
                  </a>
                )}
                {project.caseStudy && (
                  <a
                    href={project.caseStudy}
                    target="_blank"
                    rel="noreferrer"
                    className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
                  >
                    <FiFileText size={14} /> Case Study
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
