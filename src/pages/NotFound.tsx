import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { AuroraBackground } from '@/components/ui/AuroraBackground';

export function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <AuroraBackground />
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-display text-8xl font-bold text-gradient">404</span>
        <p className="mt-4 text-lg text-muted">This page doesn&apos;t exist — or it moved.</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.03]"
          >
            <FiArrowLeft /> Back home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
