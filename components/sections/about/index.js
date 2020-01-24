import "./about.scss";
import config from "react-reveal/globals";
import Fade from "react-reveal/Fade";

config({ ssrFadeout: true });

export default () => {
  return (
    <div className="slide" id="about">
      <div className="slide-header">
        <Fade bottom>
          <h2>About Me</h2>
        </Fade>
        <div className="underline" />
      </div>

      <div className="slide-content">
        <Fade bottom>
          <h3>
            I'm a Toronto-based full-stack developer with a passion for
            creative, efficient, and intuitive web design, primarily with the
            MERN stack. I recently graduated from the University of Toronto for
            Computer Science, and currently, I am building an SEO-friendly web
            application with React, Gatsby, and Node for a consulting business.
          </h3>
        </Fade>
      </div>
    </div>
  );
};
