import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiSwift,
  SiPostgresql,
  SiPfsense,
  SiDocker,
  SiDotnet,
  SiVercel,
  SiGit,
  SiN8N,
  SiClaude,
} from 'react-icons/si';
import { FaLinux } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FiMessageCircle, FiUsers, FiTarget, FiCode, FiCloud } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import { skills } from '@/data/skills';
import type { SkillCategory } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import clsx from '@/utils/clsx';

const iconMap: Record<string, IconType> = {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  FaLinux,
  SiSwift,
  SiPostgresql,
  VscVscodeInsiders,
  SiPfsense,
  SiDocker,
  SiDotnet,
  SiVercel,
  SiGit,
  IoLogoJavascript,
  FiMessageCircle,
  FiUsers,
  FiTarget,
  FiCloud,
  SiN8N,
  SiClaude,
};

const categories: (SkillCategory | 'All')[] = [
  'All',
  'Frontend',
  'Backend',
  'Cloud',
  'Database',
  'DevOps',
  'Tools',
  'Languages',
  'Frameworks',
  'Soft Skills',
];

export function Skills() {
  const [active, setActive] = useState<(typeof categories)[number]>('All');

  const filtered = useMemo(
    () => (active === 'All' ? skills : skills.filter((s) => s.category === active)),
    [active],
  );

  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="A working toolkit built through shipped projects, not just tutorials."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={clsx(
                'rounded-full px-4 py-2 font-mono text-xs transition-colors',
                active === cat ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'glass text-muted hover:text-white',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? FiCode;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                whileHover={{ y: -4 }}
              >
                <GlassCard className="flex h-full flex-col items-center gap-3 p-5 text-center">
                  <Icon size={28} className="text-accent" />
                  <span className="text-sm font-medium">{skill.name}</span>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
