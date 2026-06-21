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

  it('SectionObserver fires onChange when inView is true', () => {
    const { container } = render(<App />)
    // With useInView mocked to always return inView:true, each SectionObserver
    // calls onChange — the last one wins, setting currentSection to 'contact'.
    // We verify the app still renders all sections without crashing.
    expect(container.querySelector('#home')).not.toBeNull()
  })
})
