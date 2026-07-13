import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useActiveSection } from '@/hooks/useActiveSection';
import clsx from '@/utils/clsx';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(links.map((l) => l.id));

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full glass px-6 py-3">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="font-display text-lg font-semibold tracking-tight"
        >
          A<span className="text-gradient">S</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={clsx(
                  'relative rounded-full px-4 py-2 text-sm transition-colors',
                  activeId === link.id ? 'text-white' : 'text-muted hover:text-white',
                )}
              >
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          className="rounded-full p-2 text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 mt-2 rounded-2xl glass p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={clsx(
                      'w-full rounded-xl px-4 py-3 text-left text-sm',
                      activeId === link.id ? 'bg-white/10 text-white' : 'text-muted',
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
