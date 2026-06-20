import { FC, ReactNode } from 'react'
import { IconButton } from '@mui/material'

export const ExternalLink: FC<{
  href: string
  label: string
  children: ReactNode
}> = ({ href, label, children }) => (
  <IconButton
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    color="inherit"
    size="large"
  >
    {children}
  </IconButton>
)
