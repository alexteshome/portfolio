import { FC } from 'react'
import styles from './about.module.scss'
import { Fade } from 'react-awesome-reveal'

export const About: FC = () => {
  return (
    <div className={`slide ${styles.slide}`} id="about">
      <div className="slide-header">
        <Fade triggerOnce>
          <h2>About Me</h2>
        </Fade>
        <div className="underline" />
      </div>

      <div className="slide-content">
        <Fade triggerOnce>
          <p>
            I'm a Toronto-based full-stack developer with a passion for
            creative, efficient, and intuitive web design, primarily with the
            MERN stack. I graduated from the University of Toronto for Computer
            Science.
          </p>
        </Fade>
      </div>
    </div>
  )
}
