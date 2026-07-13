import type { MouseEventHandler, ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from '@/utils/clsx';

interface GradientButtonProps {
  children: ReactNode;
  variant?: 'solid' | 'outline';
  icon?: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

/** Renders a <button> or an <a> depending on whether `href` is passed. */
export function GradientButton({
  children,
  variant = 'solid',
  icon,
  className,
  href,
  target,
  rel,
  type = 'button',
  disabled,
  onClick,
}: GradientButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium font-body transition-all duration-300 focus-visible:outline-2 disabled:opacity-50 disabled:pointer-events-none';
  const solid =
    'bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.03]';
  const outline = 'glass text-text hover:border-accent/50 hover:text-accent';

  const classes = clsx(base, variant === 'solid' ? solid : outline, className);

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} className={classes} whileTap={{ scale: 0.97 }} onClick={onClick}>
        {children}
        {icon}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} disabled={disabled} className={classes} whileTap={{ scale: 0.97 }} onClick={onClick}>
      {children}
      {icon}
    </motion.button>
  );
}
