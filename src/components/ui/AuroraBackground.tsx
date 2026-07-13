import { motion } from 'framer-motion';

/**
 * Signature ambient element: three soft gradient blobs that drift slowly
 * behind the hero, layered over a faint grid to suggest a technical/CAD feel.
 * Purely decorative — aria-hidden, and respects prefers-reduced-motion via
 * the animate-blob utility class (disabled globally in index.css).
 */
export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]" />
      <motion.div
        className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-aurora-1 blur-3xl animate-blob"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 h-[380px] w-[380px] rounded-full bg-aurora-2 blur-3xl animate-blob-slow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-aurora-3 blur-3xl animate-blob"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />
    </div>
  );
}
