import { useState, useEffect } from "react";
import "./layout.scss";
import Head from "next/head";
import { Link } from "react-scroll";
import {
  FaHome,
  FaRegUser,
  FaCode,
  FaRegFolder,
  FaRegFolderOpen,
  FaRegEnvelope
} from "react-icons/fa";
import VisibilitySensor from "react-visibility-sensor";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#5898b1"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#8C8997"
      // dark: will be calculated from palette.secondary.main,
    },
    info: {
      main: "#1e1420"
    },
    success: {
      main: "#44a469"
    },
    warning: {
      main: "#c19431"
    },
    error: {
      main: "#f44336"
    }
  }
});

const size = "2.5rem";
const icons = {
  home: <FaHome size={size} />,
  about: <FaRegUser size={size} />,

  skills: <FaCode size={size} />,
  portfolio: <FaRegFolder size={size} />,
  portfolioOpen: <FaRegFolderOpen size={size} />,
  contact: <FaRegEnvelope size={size} />
};

export default props => {
  const [transition, setTranstion] = useState("bottom");
  const [isHome, setIsHome] = useState(true);
  const { currentSection, menuItems, onVisChange } = props;

  useEffect(() => {
    const transitionNav = () => {
      setTranstion(isHome ? "bottom" : "left");
    };
    transitionNav(currentSection);
  }, [isHome]);
  return (
    <div>
      <Head>
        <title>Alex Teshome</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <VisibilitySensor
          onChange={isVisible => {
            setIsHome(isVisible);
            return onVisChange(isVisible, "home", 0);
          }}
          partialVisibility="top"
          offset={{
            top:
              typeof window !== "undefined" ? -window.innerHeight + 115 : -200
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
              {menuItems.map(item => (
                <Link
                  key={item}
                  className={`hero-tab link-${item}`}
                  to={item}
                  spy={true}
                  smooth="easeInOutQuad"
                  duration={700}
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
    </div>
  );
};
