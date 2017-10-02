import React from 'react'
import { compose } from 'recompose'

import {constants} from '../../data'

export const Download = ({ visitor }) => (
  <div className='tc pa2 pa4-ns'>
    <div className='mw9 center pa2'>
      <h1 className='f3 mt0 mb3'>Need the old and trustable PDF?</h1>
      <a style={{height: 84}} target='_blank' href={constants.CV_LINK} className='f6 f5-ns b dim br1 ba dib pointer no-underline'>
        <img width='128' src={constants.PERHAPS_IMG} alt='Perhaps' />
      </a>
    </div>
  </div>
)

Download.propTypes = {
  visitor: React.PropTypes.string
}

export const DownloadHOC = compose()

export default DownloadHOC(Download)
