import React from 'react'
import { compose } from 'recompose'

export const Education = ({ linkedinResume }) => (
  <div className='tc pa2 pa4-ns Education'>
    <div className='mw9 center pa2'>
      <div className='cf'>
        {linkedinResume.education.map((item, index) => (
          <article
            key={index}
            className='fl w-50 dib-ns pr2 pr0-ns'
          >
            <h4 className='f5 f4-l fw6 mt0 mb1'>{item.studyType}</h4>
            <span className='f6 f5-l fw5 db'>{item.institution}</span>
            <span className='f7 f6-l'>{item.startDate} - {item.endDate}</span>
          </article>
        ))}
        <article className='fl w-100 dib-ns pr2 pr0-ns mt3'>
          <h4 className='f5 f4-l fw6 mt0 mb1'>English</h4>
          <span className='f6 f5-l fw5 db'>Very fain (6th grade finished on institute)</span>
          <span className='f7 f6-l'>2015-10-01 - 2015-12-31</span>
        </article>
      </div>
    </div>
  </div>
)

Education.propTypes = {
  linkedinResume: React.PropTypes.object.isRequired
}

export const EducationHOC = compose()

export default EducationHOC(Education)
