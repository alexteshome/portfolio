import { useState, useEffect, FC, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import { Layout } from '../components/layout'
import { About } from '../components/sections/about'
import { Skills } from '../components/sections/skills'
import { Contact } from '../components/sections/contact'
import { objectKeys } from 'ts-extras'
import { MenuItem, Section } from '../types.dt'

const menuItems = {
  about: About,
  skills: Skills,
  contact: Contact,
} as Record<MenuItem, FC>

interface SectionObserverProps {
  name: MenuItem
  onVisChange: (isVisible: boolean, tab: Section) => void
  children: ReactNode
}

const SectionObserver: FC<SectionObserverProps> = ({
  name,
  onVisChange,
  children,
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '0px 0px -115px 0px',
  })

  useEffect(() => {
    onVisChange(inView, name)
  }, [inView, name, onVisChange])

  return <div ref={ref}>{children}</div>
}

const App = () => {
  const [currentSection, setSection] = useState<Section>('home')

  const onChange = (isVisible: boolean, tab: Section): void => {
    if (isVisible) {
      setSection(tab)
    }
  }

  return (
    <Layout
      onVisChange={onChange}
      menuItems={objectKeys(menuItems)}
      currentSection={currentSection}
    >
      <main className="et-main">
        <div className="body-theme">
          {objectKeys(menuItems).map((item) => {
            const Section = menuItems[item]
            return (
              <SectionObserver key={item} name={item} onVisChange={onChange}>
                <Section />
              </SectionObserver>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

export default App
