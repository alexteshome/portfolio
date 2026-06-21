import { FC } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { Project, ProjectLink } from '../../types.dt'
import { ExternalLink } from './ExternalLink'

const linkIcon = (type: ProjectLink['type']) =>
  type === 'live' ? <FaExternalLinkAlt /> : <FaGithub />

const linkLabel = (title: string, type: ProjectLink['type']) =>
  type === 'live'
    ? `Open ${title} (live site)`
    : `View ${title} source on GitHub`

export const ProjectCard: FC<{ project: Project }> = ({ project }) => (
  <div
    id={project.id}
    className="bg-navy-900 border border-line rounded-xl overflow-hidden"
  >
    <div
      className="aspect-[2/1] w-full bg-gradient-to-br from-navy-850 to-navy-900"
    >
      <img
        src={project.image}
        alt={project.alt}
        width={400}
        height={200}
        className="aspect-[2/1] w-full object-cover"
      />
    </div>
    <div className="p-5">
      <h3 className="font-display font-bold text-ink mb-1">{project.title}</h3>
      <p className="font-mono text-xs text-muted mb-4">{project.tech}</p>
      <div className="flex gap-3">
        {project.links.map((link) => (
          <ExternalLink
            key={link.type}
            href={link.url}
            label={linkLabel(project.title, link.type)}
          >
            {linkIcon(link.type)}
          </ExternalLink>
        ))}
      </div>
    </div>
  </div>
)
