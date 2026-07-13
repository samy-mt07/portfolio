import type { HTMLAttributes, ReactNode } from 'react';
import clsx from '@/utils/clsx';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true, ...rest }: GlassCardProps) {
  return (
    <div
      className={clsx(
        'glass rounded-2xl transition-all duration-300',
        hover && 'hover:border-primary/40 hover:shadow-glow',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
