import { Project } from '../types.dt'

export const projects: Project[] = [
  {
    id: 'cmbaconsulting',
    title: 'Chika Mba Consulting Inc (Freelance)',
    tech: 'React + Gatsby + Node',
    image: '/screenshots/cmbaconsulting.png',
    alt: 'cmbaconsulting',
    links: [{ type: 'live', url: 'https://cmbaconsulting.ca/' }],
  },
  {
    id: 'atmdb',
    title: 'ATMDb - Popular Movies',
    tech: 'React + Redux + Semantic UI',
    image: '/screenshots/atmdb.png',
    alt: 'atmdb',
    links: [
      { type: 'live', url: 'https://alexteshome.github.io/ATMDb/' },
      { type: 'repo', url: 'https://github.com/alexteshome/ATMDb' },
    ],
  },
  {
    id: 'fantasyat',
    title: 'FantasyAT - Fantasy Basketball Team Storage',
    tech: 'React + Redux + Node + MongoDB',
    image: '/screenshots/fantasyat.png',
    alt: 'fantasyat',
    links: [
      { type: 'live', url: 'https://fantasyat.herokuapp.com/' },
      { type: 'repo', url: 'https://github.com/alexteshome/FantasyBB' },
    ],
  },
]
