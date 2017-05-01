import React from 'react'
import { compose } from 'recompose'

import Button from '../common/Button'

export const Knowledge = ({ linkedinResume }) => (
  <div className='tc pa2 pa4-ns'>
    <ul className='ma0 pv2 ph0'>
      {linkedinResume.skills.map((item, index) => (
        <li
          key={index}
          className='dib mr1 mb2'
        >
          <Button
            href={`https://www.google.com.ar/search?q=${item.name}`}
            target='_blank'
          >
            {item.name}
          </Button>
        </li>
      ))}
    </ul>
    <div className='f6 f5-ns b db pa2 ba dib mt3 br1'>
      Múchas más
    </div>
  </div>
)

Knowledge.propTypes = {
  linkedinResume: React.PropTypes.object.isRequired
}

export const KnowledgeHOC = compose()

export default KnowledgeHOC(Knowledge)
