import { useState, useEffect, FC } from 'react'
import { Events } from 'react-scroll'
import VisibilitySensor from 'react-visibility-sensor'
import { Layout } from '../components/layout'
import { About } from '../components/sections/about'
import { Skills } from '../components/sections/skills'
import { Portfolio } from '../components/sections/portfolio'
import { Contact } from '../components/sections/contact'
import { objectKeys } from 'ts-extras'

const menuItems = {
  about: About,
  skills: Skills,
  portfolio: Portfolio,
  contact: Contact,
} as Record<MenuItem, FC>

const App = () => {
  const [currentSection, setSection] = useState('home')
  useEffect(() => {
    Events.scrollEvent.register('begin', function () {})
    Events.scrollEvent.register('end', function () {})
    return function cleanup() {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [])

  const onChange = (isVisible: boolean, tab: string): void => {
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
              <VisibilitySensor
                key={item}
                onChange={(isVisible: boolean) => onChange(isVisible, item)}
                offset={{ bottom: -115 }}
              >
                <Section />
              </VisibilitySensor>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

export default App
