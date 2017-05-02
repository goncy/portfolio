import React from 'react'
import compose from 'recompose/compose'

export const Extra = () => (
  <div>{'<Extra />'}</div>
)

export const ExtraHOC = compose()

export default ExtraHOC(Extra)
