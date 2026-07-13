import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        surface: 'rgba(255,255,255,0.04)',
        border: 'rgba(255,255,255,0.08)',
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#06B6D4',
        text: '#FFFFFF',
        muted: '#94A3B8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'aurora-1': 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0) 70%)',
        'aurora-2': 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(139,92,246,0) 70%)',
        'aurora-3': 'radial-gradient(circle, rgba(6,182,212,0.30) 0%, rgba(6,182,212,0) 70%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(59,130,246,0.25)',
        'glow-lg': '0 0 80px rgba(139,92,246,0.25)',
      },
      animation: {
        blob: 'blob 18s infinite ease-in-out',
        'blob-slow': 'blob 26s infinite ease-in-out',
        marquee: 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.15)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.9)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
