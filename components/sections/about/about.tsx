import { FC } from 'react'
import { SectionHeader, Reveal } from '../../common'
import { aboutParagraph } from '../../../content/copy'

export const About: FC = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeader index="01" title="About" />
      <Reveal>
        <p className="max-w-2xl text-lg leading-relaxed text-body">
          {aboutParagraph}
        </p>
      </Reveal>
    </div>
  </section>
)
