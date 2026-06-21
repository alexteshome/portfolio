import { FC } from 'react'
import { SectionHeader, ProjectCard, Reveal } from '../../common'
import { projects } from '../../../content/projects'
import { portfolioIntro } from '../../../content/copy'

export const Portfolio: FC = () => (
  <section id="portfolio" className="py-24 md:py-32">
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeader index="03" title="Selected work" />
      <Reveal>
        <p className="text-body mb-10">{portfolioIntro}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Reveal>
    </div>
  </section>
)
