import { FC } from 'react'

export const SectionHeader: FC<{ index: string; title: string }> = ({ index, title }) => (
  <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent mb-8">
    <span className="text-faint">/ {index}</span> {title}
  </p>
)
