import { FC } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { Project, ProjectLink } from '../../types.dt'
import { ExternalLink } from './ExternalLink'
import styles from '../sections/portfolio/portfolio.module.scss'

const linkIcon = (type: ProjectLink['type']) =>
  type === 'live' ? <FaExternalLinkAlt /> : <FaGithub />

const linkLabel = (title: string, type: ProjectLink['type']) =>
  type === 'live'
    ? `Open ${title} (live site)`
    : `View ${title} source on GitHub`

export const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const renderLinks = () =>
    project.links.map((link) => (
      <ExternalLink
        key={link.type}
        href={link.url}
        label={linkLabel(project.title, link.type)}
      >
        {linkIcon(link.type)}
      </ExternalLink>
    ))

  return (
    <div className={styles.cardGroup}>
      <Card className={styles.card}>
        <div className={styles.cardContent} id={project.id}>
          <img
            className={styles.cardImage}
            src={project.image}
            alt={project.alt}
            width="400"
            height="200"
          />
          <CardContent>
            <div className={styles.cardDescription}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <Typography variant="body2" component="p">
                {project.tech}
              </Typography>
              <div className={styles.insideButtons}>{renderLinks()}</div>
            </div>
          </CardContent>
        </div>
      </Card>
      <div className={styles.outsideButtons}>{renderLinks()}</div>
    </div>
  )
}
