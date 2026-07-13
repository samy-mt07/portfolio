import { useEffect, useRef } from 'react';

/**
 * Desktop-only ambient cursor glow. Skips itself on touch devices and
 * respects prefers-reduced-motion by simply not animating.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reduceMotion) return;

    const el = dotRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-6 w-6 rounded-full bg-primary/40 blur-md transition-transform duration-100 ease-out will-change-transform md:block"
    />
  );
}
