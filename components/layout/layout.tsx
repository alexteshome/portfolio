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
import { MenuItem, Section } from '../../types.dt'

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
const icons: Record<string, JSX.Element> = {
  home: <FaHome size={size} />,
  about: <FaRegUser size={size} />,
  skills: <FaCode size={size} />,
  portfolio: <FaRegFolder size={size} />,
  portfolioOpen: <FaRegFolderOpen size={size} />,
  contact: <FaRegEnvelope size={size} />,
}

const NavTabs: FC<{ items: MenuItem[]; variant: 'browser' | 'mobile' }> = ({
  items,
  variant,
}) => (
  <>
    {items.map((item) => (
      <Link
        activeClass="active-section"
        key={variant === 'mobile' ? `${item}-mobile` : item}
        className={`hero-tab link-${item} ${variant}`}
        to={item}
        spy={true}
        smooth="easeInOutQuad"
        duration={700}
        {...(variant === 'mobile' ? { offset: -75 } : {})}
      >
        <span className="tab-container">{icons[item]}</span>
      </Link>
    ))}
  </>
)

export interface LayoutProps {
  currentSection: Section
  menuItems: MenuItem[]
  onVisChange: (isVisible: boolean, tab: Section) => void
  children: ReactNode
}

export const Layout: FC<LayoutProps> = (props) => {
  const [transition, setTranstion] = useState('bottom bottom-initial')
  const [isHome, setIsHome] = useState(true)
  const { menuItems, onVisChange } = props
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
              <h3>Software Engineer | React · TypeScript · GraphQL</h3>
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
              <NavTabs items={menuItems} variant="browser" />
              <NavTabs items={menuItems} variant="mobile" />
            </div>
          </div>
          {props.children}
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  )
}
