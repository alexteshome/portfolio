import { FC } from 'react'
import styles from './about.module.scss'
import { Fade } from 'react-awesome-reveal'
import { SectionHeader } from '../../common'
import { aboutParagraph } from '../../../content/copy'

export const About: FC = () => {
  return (
    <div className={`slide ${styles.slide}`} id="about">
      <SectionHeader title="About Me" />
      <div className="slide-content">
        <Fade triggerOnce>
          <p>{aboutParagraph}</p>
        </Fade>
      </div>
    </div>
  )
}
