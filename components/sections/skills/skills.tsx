import { Paper, Divider } from '@mui/material'
import { FaNetworkWired, FaLaptopCode, FaRobot } from 'react-icons/fa'
import { Fade } from 'react-awesome-reveal'
import { FC, Fragment } from 'react'
import { mainStack, skillCategories } from '../../../content/skills'
import { SkillCategory } from '../../../types.dt'

const categoryIcon = (icon: SkillCategory['icon']) =>
  icon === 'frontend' ? (
    <FaLaptopCode className="title-icon" />
  ) : icon === 'backend' ? (
    <FaNetworkWired className="title-icon" />
  ) : (
    <FaRobot className="title-icon" />
  )

export const Skills: FC = () => {
  return (
    <div className="slide" id="skills">
      <div className="slide-content">
        <Paper className={`skills-table skills-table-other`} elevation={5}>
          <div className="skills-details">
            {skillCategories.map((cat, i) => (
              <Fragment key={cat.title}>
                {i > 0 && (
                  <>
                    <Divider
                      className="skills-divider-vertical"
                      orientation="vertical"
                    />
                    <Divider
                      className="skills-divider-horizontal"
                      orientation="horizontal"
                    />
                  </>
                )}
                <div className="skills-section">
                  <Fade triggerOnce>
                    {categoryIcon(cat.icon)}
                    <h3>{cat.title}</h3>
                    <p>{cat.blurb}</p>
                    <h4>Languages</h4>
                    <p>{cat.languages}</p>
                    <h4>Tools & Frameworks</h4>
                    <p>{cat.tools}</p>
                  </Fade>
                </div>
              </Fragment>
            ))}
          </div>
        </Paper>
        <Paper className={`skills-table skills-table-main`} elevation={0}>
          <div className="skills-main-stack">
            {mainStack.map((logo) => {
              return (
                <div
                  key={logo}
                  className="orbit-container"
                  id={`${logo}-orbit`}
                >
                  <h2>Main Stack</h2>
                  <div className="orbit" id={`${logo}`}>
                    <div className="pos">
                      <div className="skill-logo">
                        <img src={`/logos/${logo}.svg`} alt={logo} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Paper>
      </div>
    </div>
  )
}
