import { FC } from 'react'
import { Fade } from 'react-awesome-reveal'
import styles from './portfolio.module.scss'
import { SectionHeader, ProjectCard } from '../../common'
import { projects } from '../../../content/projects'
import { portfolioIntro } from '../../../content/copy'

export const Portfolio: FC = () => {
  return (
    <div className={`slide ${styles.slide}`} id="portfolio">
      <SectionHeader title="My Work" />
      <Fade triggerOnce>
        <p>{portfolioIntro}</p>
      </Fade>
      <div className="slide-content">
        <div className={styles.cardGrid}>
          <Fade triggerOnce>
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  )
}
