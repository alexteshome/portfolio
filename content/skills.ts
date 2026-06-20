import { SkillCategory } from '../types.dt'

export const mainStack = [
  'typescript',
  'react',
  'sass',
  'nodejs',
  'mysql',
  'python',
  'aws',
] as const

export const skillCategories: SkillCategory[] = [
  {
    icon: 'frontend',
    title: 'Front End',
    blurb:
      'I like to design and showcase my creative vision while optimizing user experience, with the benefit of instant feedback',
    languages: 'JavaScript, Typescript, HTML5, CSS3/SASS/SCSS',
    tools: 'React, Next, Gatsby, Redux, Bootstrap, Material-UI, Semantic-UI',
  },
  {
    icon: 'backend',
    title: 'Back End',
    blurb:
      'I enjoy finding new and interesting problems to solve while designing flexible and secure APIs / database models',
    languages: 'JavaScript, TypeScript, Python, Java, C#, Bash, Perl, SQL',
    tools: 'Node, Django, Flask, MongoDB, AWS, GCP, Azure',
  },
]
