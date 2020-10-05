import "./about.scss";
import { Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <div className="slide" id="about">
      <div className="slide-header">
        <Fade direction="up" triggerOnce>
          <h2>About Me</h2>
        </Fade>
        <div className="underline" />
      </div>

      <div className="slide-content">
        <Fade direction="up" triggerOnce>
          <p>
            I'm a Toronto-based full-stack developer with a passion for
            creative, efficient, and intuitive web design, primarily with the
            MERN stack. I recently graduated from the University of Toronto for
            Computer Science, and currently, I am building an SEO-friendly web
            application with React, Gatsby, and Node for a consulting business.
          </p>
        </Fade>
      </div>
    </div>
  );
};
