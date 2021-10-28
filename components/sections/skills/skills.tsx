import { Paper, Divider } from "@material-ui/core/";
import { FaNetworkWired, FaLaptopCode } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { FC } from "react";

const mainStack = [
  "typescript",
  "react",
  "sass",
  "nodejs",
  "mysql",
  "mongodb",
  "azure",
];

export const Skills: FC = () => {
  return (
    <div className="slide" id="skills">
      <div className="slide-content">
        <Paper className={`skills-table skills-table-other`} elevation={5}>
          <div className="skills-details">
            <div className="skills-section">
              <Fade triggerOnce>
                <FaLaptopCode className="title-icon" />
                <h3>Front End</h3>
                <p>
                  I like to design and showcase my creative vision while
                  optimizing user experience, with the benefit of instant
                  feedback
                </p>
                <h4>Languages</h4>
                <p>JavaScript, Typescript, HTML5, CSS3/SASS/SCSS</p>
                <h4>Frameworks / Libraries / Tools</h4>
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
              <Fade triggerOnce>
                <FaNetworkWired className="title-icon" />
                <h3>Back End</h3>
                <p>
                  I enjoy finding new and interesting problems to solve while
                  designing flexible and secure APIs / database models
                </p>
                <h4>Languages</h4>
                <p>JavaScript, TypeScript, Python, Java, C#, Bash, Perl, SQL</p>
                <h4>Frameworks / Libraries / Tools</h4>
                <p>
                  Express, NestJS, Django, MySQL, Oracle, PostgreSQL, MSSQL,
                  MongoDB, Azure
                </p>
              </Fade>
            </div>
          </div>
        </Paper>
        <Paper className={`skills-table skills-table-main`} elevation={0}>
          <div className="skills-main-stack">
            {mainStack.map((logo) => {
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
        </Paper>
      </div>
    </div>
  );
};
