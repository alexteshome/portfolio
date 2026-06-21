import { useState, useEffect, FC } from 'react'
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

const HEADER_HEIGHT = 64

const App = () => {
  const [currentSection, setSection] = useState<Section>('home')

  useEffect(() => {
    const sectionIds: Section[] = ['home', ...(objectKeys(menuItems) as MenuItem[])]

    const handleScroll = () => {
      const scrollY = window.scrollY + HEADER_HEIGHT + 1
      let active: Section = 'home'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          active = id
        }
      }
      setSection(active)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Layout menuItems={objectKeys(menuItems)} currentSection={currentSection}>
      <main className="et-main">
        <div className="body-theme">
          {objectKeys(menuItems).map((item) => {
            const Section = menuItems[item]
            return <Section key={item} />
          })}
        </div>
      </main>
    </Layout>
  )
}

export default App
