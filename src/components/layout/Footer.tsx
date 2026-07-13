import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, href: 'https://github.com/samy-mt07', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/aissi-samy-6338ab322/', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/yourname', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:aissisamy@outlook.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-muted">© {new Date().getFullYear()} Samy Aissi. All rights reserved.</p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
