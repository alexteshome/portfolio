import { useState, useEffect, FC, ReactNode } from 'react'
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles'
import Head from 'next/head'
import { Link } from 'react-scroll'
import {
  FaHome,
  FaRegUser,
  FaCode,
  FaRegFolder,
  FaRegFolderOpen,
  FaRegEnvelope,
} from 'react-icons/fa'
import VisibilitySensor from 'react-visibility-sensor'
import { MY_SEO } from '../../config'
import { MenuItem } from '../../types.dt'

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#5898b1',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#8C8997',
      // dark: will be calculated from palette.secondary.main,
    },
    info: {
      main: '#1e1420',
    },
    success: {
      main: '#44a469',
    },
    warning: {
      main: '#c19431',
    },
    error: {
      main: '#f44336',
    },
  },
})

const size = '2.5rem'
const icons = {
  home: <FaHome size={size} />,
  about: <FaRegUser size={size} />,

  skills: <FaCode size={size} />,
  portfolio: <FaRegFolder size={size} />,
  portfolioOpen: <FaRegFolderOpen size={size} />,
  contact: <FaRegEnvelope size={size} />,
}

export interface LayoutProps {
  currentSection: string
  menuItems: MenuItem[]
  onVisChange: (isVisible: boolean, tab: string) => void
  children: ReactNode
}

export const Layout: FC<LayoutProps> = (props) => {
  const [transition, setTranstion] = useState('bottom bottom-initial')
  const [isHome, setIsHome] = useState(true)
  const { currentSection, menuItems, onVisChange } = props
  const [renderType, setRenderType] = useState('mounted')

  useEffect(() => {
    const transitionNav = () => {
      if (renderType === 'updated')
        setTranstion(isHome ? 'bottom bottom-transition' : 'left-transition')
    }

    transitionNav()
    setRenderType('updated')
  }, [isHome])
  return (
    <div>
      <Head>
        <title key="title">{MY_SEO.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          key="description"
          name="description"
          content={MY_SEO.description}
        />
        <meta key="og:type" name="og:type" content={MY_SEO.openGraph.type} />
        <meta key="og:title" name="og:title" content={MY_SEO.openGraph.title} />
        <meta
          key="og:description"
          name="og:description"
          content={MY_SEO.openGraph.description}
        />
        <meta key="og:url" name="og:url" content={MY_SEO.openGraph.url} />
        <meta key="og:image" name="og:image" content={MY_SEO.openGraph.image} />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <VisibilitySensor
            onChange={(isVisible: boolean) => {
              setIsHome(isVisible)
              return onVisChange(isVisible, 'home')
            }}
            offset={{
              top:
                typeof window !== 'undefined' ? -window.innerHeight + 80 : -200,
            }}
          >
            <div className="hero-tabs" id="home">
              <div className="content">
                <h1 id="title">HI, I'M ALEX TESHOME</h1>
                <h3>Full Stack Developer | React | Node</h3>
              </div>
              <div className={`hero-tabs-container ${transition}`}>
                <Link
                  className="hero-tab link-home"
                  to="home"
                  spy={true}
                  smooth="easeInOutQuad"
                  duration={700}
                >
                  <span>{icons.home}</span>
                </Link>
                {menuItems.map((item) => (
                  <Link
                    activeClass="active-section"
                    key={item}
                    className={`hero-tab link-${item} browser`}
                    to={item}
                    spy={true}
                    smooth="easeInOutQuad"
                    duration={700}
                  >
                    <span className="tab-container">{icons[item]}</span>
                  </Link>
                ))}
                {menuItems.map((item) => (
                  <Link
                    activeClass="active-section"
                    key={item + '-mobile'}
                    className={`hero-tab link-${item} mobile`}
                    to={item}
                    spy={true}
                    smooth="easeInOutQuad"
                    duration={700}
                    offset={-75}
                  >
                    <span className="tab-container">{icons[item]}</span>
                  </Link>
                ))}

                <span
                  className={`hero-tab-slider hero-tab-slider-${currentSection}`}
                ></span>
              </div>
            </div>
          </VisibilitySensor>
          {props.children}
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  )
}
