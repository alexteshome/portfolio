import { render } from '@testing-library/react'
import App from './App'

vi.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: () => undefined, inView: true }),
}))

vi.mock('react-scroll', () => ({
  Link: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  scroller: { scrollTo: vi.fn() },
  Events: { scrollEvent: { register: vi.fn(), remove: vi.fn() } },
}))

describe('App scroll-spy wiring', () => {
  it('renders all three section anchors', () => {
    const { container } = render(<App />)
    expect(container.querySelector('#about')).not.toBeNull()
    expect(container.querySelector('#skills')).not.toBeNull()
    expect(container.querySelector('#contact')).not.toBeNull()
  })

  it('renders home anchor in the hero section', () => {
    const { container } = render(<App />)
    expect(container.querySelector('#home')).not.toBeNull()
  })
})
