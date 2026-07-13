import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { projects } from '@/data/projects';
import type { Project, ProjectCategory } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectModal } from '@/components/projects/ProjectModal';
import clsx from '@/utils/clsx';

type SortKey = 'newest' | 'oldest';

const categories: (ProjectCategory | 'All')[] = ['All', 'Web', 'Mobile', 'AI/ML', 'Backend', 'Tooling'];

export function Projects() {
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortKey>('newest');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    let list = [...projects];

    if (category !== 'All') list = list.filter((p) => p.category === category);

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q)) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }

    list.sort((a, b) => {
      const diff = new Date(b.date).getTime() - new Date(a.date).getTime();
      return sort === 'newest' ? diff : -diff;
    });

    // featured projects first, preserving the chosen sort within each group
    list.sort((a, b) => Number(b.featured) - Number(a.featured));

    return list;
  }, [category, query, sort]);

  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A mix of shipped products, experiments, and open-source tools. Add a new one to src/data/projects.ts and it shows up here automatically."
        />

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={clsx(
                  'rounded-full px-4 py-2 font-mono text-xs transition-colors',
                  category === cat ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'glass text-muted hover:text-white',
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <div className="glass flex items-center gap-2 rounded-full px-4 py-2">
              <FiSearch size={14} className="text-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="w-40 bg-transparent text-sm outline-none placeholder:text-muted sm:w-48"
                aria-label="Search projects"
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="glass rounded-full px-4 py-2 text-sm outline-none"
              aria-label="Sort projects by date"
            >
              <option value="newest" className="bg-bg">
                Newest first
              </option>
              <option value="oldest" className="bg-bg">
                Oldest first
              </option>
            </select>
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted">No projects match that search — try a different term or category.</p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
