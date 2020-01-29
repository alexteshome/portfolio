import { useState } from "react";
import { Paper, Divider } from "@material-ui/core/";
import { FaNetworkWired, FaLaptopCode } from "react-icons/fa";
import "./skills.scss";
import config from "react-reveal/globals";
import Fade from "react-reveal/Fade";

config({ ssrFadeout: true });

const mainStack = [
  "javascript",
  "react",
  "redux",
  /* "css3", */
  "sass",
  "nodejs",
  /* "express", */
  "mysql",
  "mongodb"
];

const other = [
  "python",
  "java",
  "csharp",
  "gatsby",
  "nextjs",
  "graphql",
  "bootstrap",
  "materialui"
];
export default () => {
  const [skills, setSkills] = useState(0);

  return (
    <div className="slide" id="skills">
      <div className="slide-content">
        {/* <h3>
          I have a strong foundation of web development/programming principles,
          with MERN (MongoDB/MySQL, Express, React, Node) as the main technology
          stack that I use.
        </h3> */}
        <Paper className={`skills-table skills-table-other`} elevation={5}>
          <div className="skills-details">
            <div className="skills-section">
              <Fade bottom>
                <FaLaptopCode className="title-icon" />
                <h2>Front End</h2>
                <p>
                  I like to design and showcase my creative vision while
                  optimizing user experience, with the benefit of instant
                  feedback
                </p>
                <h3>Languages</h3>
                <p>JavaScript, HTML5, CSS3/SASS/SCSS</p>
                <h3>Frameworks / Libraries / Tools</h3>
                <p>
                  React, Next, Gatsby, Redux, Bootstrap, Material-UI,
                  Semantic-UI
                </p>
              </Fade>
            </div>
            <Divider
              className="skills-divider-vertical"
              orientation="vertical"
            />
            <Divider
              className="skills-divider-horizontal"
              orientation="horizontal"
            />

            <div className="skills-section">
              <Fade bottom>
                <FaNetworkWired className="title-icon" />
                <h2>Back End</h2>
                <p>
                  I enjoy finding new and interesting problems to solve while
                  designing flexible and secure APIs / database models
                </p>
                <h3>Languages</h3>
                <p>JavaScript, Python, Java, C#, Bash, Perl, [No]SQL</p>
                <h3>Frameworks / Libraries / Tools</h3>
                <p>
                  Express, Django, MySQL, Oracle, PostgreSQL, MSSQL, MongoDB
                </p>
              </Fade>
            </div>
          </div>
        </Paper>
        <Paper className={`skills-table skills-table-main`} elevation={0}>
          {skills === 0 ? (
            <div className="skills-main-stack">
              {mainStack.map(logo => {
                return (
                  <div
                    key={logo}
                    className="orbit-container"
                    id={`${logo}-orbit`}
                  >
                    <h2>Main Stack</h2>
                    <div className="orbit" id={`${logo}`}>
                      <div className="pos">
                        <div className="skill-logo">
                          <img src={`/logos/${logo}.svg`} alt={logo} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="skills-other-tech">
              <h2>Other Technologies</h2>
              {other.map(logo => {
                return (
                  <div key={logo} className="skill-logo" id={`${logo}-x`}>
                    <img
                      className="skill-logo"
                      id={`${logo}-y`}
                      src={`/logos/${logo}.svg`}
                      alt={logo}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </Paper>

        {/* <div id="skills-buttons">
          <Button
            size="large"
            color={skills === 0 ? "primary" : "secondary"}
            variant="contained"
            onClick={() => setSkills(0)}
          >
            Main Stack
          </Button>
          <Button
            size="large"
            color={skills === 1 ? "primary" : "secondary"}
            variant="contained"
            onClick={() => setSkills(1)}
          >
            Other Tech
          </Button>
          <Button
            size="large"
            color={skills === 2 ? "primary" : "secondary"}
            variant="contained"
            onClick={() => setSkills(2)}
          >
            Details
          </Button>
        </div> */}
      </div>
    </div>
  );
};
