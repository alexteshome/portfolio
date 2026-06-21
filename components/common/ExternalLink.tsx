import { FC, ReactNode } from 'react'

export const ExternalLink: FC<{ href: string; label: string; children: ReactNode }> = ({
  href,
  label,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center justify-center text-slate2 transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
  >
    {children}
  </a>
)
