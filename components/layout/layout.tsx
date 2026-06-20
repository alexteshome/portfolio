import { useState, useEffect, useRef, FC, ReactNode } from 'react'
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles'
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import {
  FaHome,
  FaRegUser,
  FaCode,
  FaRegFolder,
  FaRegFolderOpen,
  FaRegEnvelope,
} from 'react-icons/fa'
import { MenuItem } from '../../types.dt'

const theme = createTheme({
  palette: {
    primary: {
      main: '#5898b1',
    },
    secondary: {
      main: '#8C8997',
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
  const hasMounted = useRef(false)

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0 })

  useEffect(() => {
    setIsHome(heroInView)
    onVisChange(heroInView, 'home')
  }, [heroInView, onVisChange])

  useEffect(() => {
    if (hasMounted.current) {
      setTranstion(isHome ? 'bottom bottom-transition' : 'left-transition')
    }
    hasMounted.current = true
  }, [isHome])

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <div className="hero-tabs" id="home" ref={heroRef}>
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
          {props.children}
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  )
}
