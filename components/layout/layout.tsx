import { useEffect, FC, ReactNode } from 'react'
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import { MenuItem, Section } from '../../types.dt'

export interface LayoutProps {
  currentSection: Section
  menuItems: MenuItem[]
  onVisChange: (isVisible: boolean, tab: Section) => void
  children: ReactNode
}

const navLabel: Record<string, string> = {
  home: 'home',
  about: 'about',
  skills: 'skills',
  portfolio: 'work',
  contact: 'contact',
}

const NavLink: FC<{ to: string; label: string }> = ({ to, label }) => (
  <Link
    activeClass="!text-accent"
    to={to}
    spy={true}
    smooth="easeInOutQuad"
    duration={700}
    offset={-64}
    className="font-mono text-xs text-muted uppercase tracking-widest cursor-pointer transition-colors hover:text-slate2"
  >
    {label}
  </Link>
)

export const Layout: FC<LayoutProps> = ({ menuItems, onVisChange, children }) => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0 })

  useEffect(() => {
    onVisChange(heroInView, 'home')
  }, [heroInView, onVisChange])

  const allNavItems: string[] = ['home', ...menuItems]

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Fixed top nav */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-navy-950/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            to="home"
            spy={true}
            smooth="easeInOutQuad"
            duration={700}
            className="font-display font-bold text-ink text-lg cursor-pointer select-none"
          >
            AT
          </Link>
          <nav className="flex items-center gap-6">
            {allNavItems.map((item) => (
              <NavLink key={item} to={item} label={navLabel[item] ?? item} />
            ))}
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[radial-gradient(120%_120%_at_82%_-10%,theme(colors.navy-850),theme(colors.navy-950)_58%)]"
      >
        {/* Faint grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
            Software Engineer @ Gusto
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-ink mb-6 leading-none">
            Alex Teshome
          </h1>
          <p className="text-lg md:text-xl text-body max-w-xl mb-10 leading-relaxed">
            I build the onboarding experiences that turn new Gusto sign-ups into activated,
            long-term customers, increasingly with AI in the loop.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="portfolio"
              spy={false}
              smooth="easeInOutQuad"
              duration={700}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-ink font-display font-semibold text-sm cursor-pointer transition-opacity hover:opacity-90"
            >
              View work
            </Link>
            <Link
              to="contact"
              spy={false}
              smooth="easeInOutQuad"
              duration={700}
              className="inline-flex items-center px-6 py-3 rounded-lg border border-line-strong text-slate2 font-display font-semibold text-sm cursor-pointer transition-colors hover:text-ink hover:border-slate2"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {children}
    </div>
  )
}
