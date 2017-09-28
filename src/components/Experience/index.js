import React from 'react'
import { compose } from 'recompose'

import './Experience.css'

export const Experience = ({ linkedinResume }) => (
  <div className='tc pa2 pa4-ns Experience'>
    <h1 className='f3 mt3 mt0-ns mb3 lh-title'>
      Experience
    </h1>
    <div className='jobs-container mw9 center pa2'>
      {linkedinResume.work.map((item, index) => (
        <div
          key={index}
          className='dt dt--fixed w-100 bb job pv3'
        >
          <div className='dtc v-mid tl'>
            <div className='f6 f5-ns b'>
              { item.company }
            </div>
            <div className='f6 f5-ns'>
              { item.position }
            </div>
            <div className='f7 dn dtc-ns'>
              { item.summary }
            </div>
          </div>
          <div className='dtc v-mid tr'>
            <p className='f7 f6-ns db'>
              { item.startDate } - { item.endDate || 'now' }
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

Experience.propTypes = {
  linkedinResume: React.PropTypes.object.isRequired
}

export const ExperienceHOC = compose()

export default ExperienceHOC(Experience)
