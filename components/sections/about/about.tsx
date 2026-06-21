import { FC } from 'react'
import { SectionHeader, Reveal } from '../../common'
import { aboutParagraph, aboutFacts } from '../../../content/copy'

export const About: FC = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="max-w-5xl mx-auto px-6">
      <SectionHeader index="01" title="About" />
      <div className="grid gap-12 md:grid-cols-[1fr_240px]">
        <Reveal>
          <p className="max-w-2xl text-lg leading-relaxed text-body">
            {aboutParagraph}
          </p>
        </Reveal>
        <Reveal>
          <dl className="font-mono text-xs space-y-4">
            {aboutFacts.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-muted uppercase tracking-widest mb-0.5">{label}</dt>
                <dd className="text-slate2">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  </section>
)
