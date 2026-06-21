import { SkillCategory } from '../types.dt'

export const mainStack = [
  'typescript',
  'react',
  'graphql',
  'rails',
  'nodejs',
  'python',
  'aws',
] as const

export const skillCategories: SkillCategory[] = [
  {
    title: 'Front End',
    blurb:
      'I build accessible, performant interfaces and care about the details that make a product feel effortless to use.',
    languages: 'TypeScript, JavaScript, HTML5, CSS3',
    tools: 'React, GraphQL, REST APIs, Testing',
  },
  {
    title: 'Back End',
    blurb:
      'I design APIs and data models that hold up under real-world scale, and I enjoy untangling gnarly legacy systems.',
    languages: 'Ruby, TypeScript, Python, SQL',
    tools: 'Ruby on Rails, PostgreSQL, GraphQL, REST APIs',
  },
  {
    title: 'AI / LLM',
    blurb:
      'I build LLM-powered product features along with the eval harnesses and agent tooling that keep them reliable.',
    languages: 'Python, TypeScript',
    tools: 'Claude, LLM agent architecture, Evals & observability',
  },
]
