export type MenuItem = 'about' | 'skills' | 'portfolio' | 'contact'
export type Section = MenuItem | 'home'

export interface ProjectLink {
  type: 'live' | 'repo'
  url: string
}

export interface Project {
  id: string
  title: string
  tech: string
  image: string
  alt: string
  links: ProjectLink[]
}

export interface SkillCategory {
  icon: 'frontend' | 'backend' | 'ai'
  title: string
  blurb: string
  languages: string
  tools: string
}
