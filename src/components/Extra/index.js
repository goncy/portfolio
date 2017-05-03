import React from 'react'
import { compose, branch, renderNothing, defaultProps } from 'recompose'

import { getQueryParameter, parseToken } from './selectors'

export const Extra = ({ data }) => (
  <div className='tc pa2 pa4-ns'>
    <div className='mw9 center pa2'>
      <p className='lh-copy f4 mt0'>
        {data.intro}
      </p>
      <div>
        <div className='measure center tc cf mv4'>
          <div className='fl w-100 w-50-ns mb4 mb0-ns'>
            <h4 className='f5 f4-l fw6 mt0 mb1'>Requerimientos</h4>
            <ul className='list pl0 mv0'>
              {data.requirements.map((item, index) => (
                <li
                  key={index}
                  className='lh-copy pv1'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='fl w-100 w-50-ns'>
            <h4 className='f5 f4-l fw6 mt0 mb1'>Preferencias</h4>
            <ul className='list pl0 mv0'>
              {data.preferences.map((item, index) => (
                <li
                  key={index}
                  className='lh-copy pv1'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className='i f6 lh-copy mb0'>
        {data.outro}
      </p>
    </div>
  </div>
)

Extra.propTypes = {
  data: React.PropTypes.object
}

export const ExtraHOC = compose(
  defaultProps({
    data: parseToken(getQueryParameter('token'))
  }),
  branch(
    ({ data }) => !data,
    renderNothing
  )
)

export default ExtraHOC(Extra)
