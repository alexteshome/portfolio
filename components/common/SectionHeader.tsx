import { FC } from 'react'
import { Fade } from 'react-awesome-reveal'

export const SectionHeader: FC<{ title: string }> = ({ title }) => (
  <div className="slide-header">
    <Fade triggerOnce>
      <h2>{title}</h2>
    </Fade>
    <div className="underline" />
  </div>
)
