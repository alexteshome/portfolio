import { render, screen } from '@testing-library/react'
import { ProjectCard } from './ProjectCard'
import { Project } from '../../types.dt'

vi.mock('react-awesome-reveal', () => ({
  Fade: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

const twoLinkProject: Project = {
  id: 'atmdb',
  title: 'ATMDb - Popular Movies',
  tech: 'React + Redux + Semantic UI',
  image: '/screenshots/atmdb.png',
  alt: 'atmdb screenshot',
  links: [
    { type: 'live', url: 'https://alexteshome.github.io/ATMDb/' },
    { type: 'repo', url: 'https://github.com/alexteshome/ATMDb' },
  ],
}

const oneLinkProject: Project = {
  id: 'cmbaconsulting',
  title: 'Chika Mba Consulting Inc (Freelance)',
  tech: 'React + Gatsby + Node',
  image: '/screenshots/cmbaconsulting.png',
  alt: 'cmbaconsulting screenshot',
  links: [{ type: 'live', url: 'https://cmbaconsulting.ca/' }],
}

describe('ProjectCard', () => {
  it('renders title, tech, and img alt', () => {
    render(<ProjectCard project={twoLinkProject} />)
    expect(screen.getByText('ATMDb - Popular Movies')).toBeTruthy()
    expect(screen.getByText('React + Redux + Semantic UI')).toBeTruthy()
    expect(screen.getByAltText('atmdb screenshot')).toBeTruthy()
  })

  it('renders live link as anchor with correct href and aria-label', () => {
    render(<ProjectCard project={twoLinkProject} />)
    const liveLinks = screen.getAllByRole('link', {
      name: 'Open ATMDb - Popular Movies (live site)',
    })
    expect(liveLinks.length).toBe(2) // inside + outside groups
    liveLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe(
        'https://alexteshome.github.io/ATMDb/'
      )
      expect(link.getAttribute('target')).toBe('_blank')
      expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    })
  })

  it('renders repo link as anchor with correct href and aria-label', () => {
    render(<ProjectCard project={twoLinkProject} />)
    const repoLinks = screen.getAllByRole('link', {
      name: 'View ATMDb - Popular Movies source on GitHub',
    })
    expect(repoLinks.length).toBe(2)
    repoLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe(
        'https://github.com/alexteshome/ATMDb'
      )
    })
  })

  it('renders both inside and outside link groups', () => {
    const { container } = render(<ProjectCard project={twoLinkProject} />)
    const links = container.querySelectorAll('a[href]')
    expect(links.length).toBe(4) // 2 links × 2 groups
  })

  it('works for a project with a single live link', () => {
    render(<ProjectCard project={oneLinkProject} />)
    const liveLinks = screen.getAllByRole('link', {
      name: 'Open Chika Mba Consulting Inc (Freelance) (live site)',
    })
    expect(liveLinks.length).toBe(2)
    liveLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe('https://cmbaconsulting.ca/')
    })
  })

  it('card div has the project id', () => {
    const { container } = render(<ProjectCard project={twoLinkProject} />)
    expect(container.querySelector('#atmdb')).not.toBeNull()
  })
})
