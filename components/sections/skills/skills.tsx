import { FC } from 'react'
import { mainStack, skillCategories } from '../../../content/skills'
import { SectionHeader, Reveal } from '../../common'

export const Skills: FC = () => (
  <section id="skills" className="py-24 md:py-32 bg-navy-900/30">
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeader index="02" title="Skills" />

      {/* Category cards */}
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-3 mb-14">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-navy-900 border border-line border-t-2 border-t-accent rounded-xl p-5"
            >
              <p className="font-mono text-[11px] tracking-widest text-accent uppercase mb-2">
                {cat.title}
              </p>
              <p className="text-sm text-slate2 mb-4">{cat.blurb}</p>
              <p className="font-mono text-xs text-muted">
                {cat.languages}, {cat.tools}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Logo marquee */}
      <div className="relative overflow-hidden">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-16 z-10 bg-gradient-to-r from-navy-950 to-transparent" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-16 z-10 bg-gradient-to-l from-navy-950 to-transparent" />

        <div className="flex w-max animate-[marquee_32s_linear_infinite] motion-reduce:animate-none">
          {[...mainStack, ...mainStack].map((logo, i) => (
            <div key={`${logo}-${i}`} className="px-8 flex items-center">
              <img
                src={`/logos/${logo}.svg`}
                alt={logo}
                className="h-7 opacity-50"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
