import { Project } from '../types.dt'

export const projects: Project[] = [
  {
    id: 'cmbaconsulting',
    title: 'Chika Mba Consulting Inc (Freelance)',
    tech: 'React + Gatsby + Node',
    image: '/screenshots/cmbaconsulting.png',
    alt: 'Homepage of the Chika Mba Consulting marketing site',
    links: [{ type: 'live', url: 'https://cmbaconsulting.ca/' }],
  },
  {
    id: 'atmdb',
    title: 'ATMDb - Popular Movies',
    tech: 'React + Redux + Semantic UI',
    image: '/screenshots/atmdb.png',
    alt: 'ATMDb app showing a grid of popular movie posters',
    links: [
      { type: 'live', url: 'https://alexteshome.github.io/ATMDb/' },
      { type: 'repo', url: 'https://github.com/alexteshome/ATMDb' },
    ],
  },
]
