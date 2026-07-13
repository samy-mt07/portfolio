import { useRef, type MouseEvent } from 'react';

/**
 * Lightweight tilt-on-hover effect for glassmorphic cards.
 * Applies a subtle perspective rotation following the cursor position,
 * and resets smoothly on mouse leave.
 */
export function useTilt(maxTilt = 8) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-y * maxTilt}deg) rotateY(${x * maxTilt}deg) scale3d(1.02,1.02,1.02)`;
    el.style.setProperty('--glow-x', `${(x + 0.5) * 100}%`);
    el.style.setProperty('--glow-y', `${(y + 0.5) * 100}%`);
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  };

  return { ref, onMouseMove, onMouseLeave };
}
