import React from 'react'
import { compose, branch, renderNothing, defaultProps } from 'recompose'

import { getQueryParameter } from './selectors'

export const Greeter = ({ visitor }) => (
  <div className='tc pa1 ph2'>
    <h1 className='f3 lh-copy ma0'>
      👋 { visitor }
    </h1>
  </div>
)

Greeter.propTypes = {
  visitor: React.PropTypes.string
}

export const GreeterHOC = compose(
  defaultProps({
    visitor: getQueryParameter('visitor')
  }),
  branch(
    ({ visitor }) => !visitor,
    renderNothing
  )
)

export default GreeterHOC(Greeter)
