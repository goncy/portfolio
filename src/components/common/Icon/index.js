import React from 'react'
import styled from 'styled-components'

const getSize = ({ size = 'xs' }) => {
  switch (size) {
    case 'lg':
      return '3rem'
    case 'md':
      return '2rem'
    case 'sm':
      return '1.5rem'
    case 'xs':
    default:
      return size + 'rem'
  }
}

const StyledIcon = styled.i`
  font-size: ${getSize} !important;
`

const Icon = ({ className = '', icon, ...rest }) => (
  <StyledIcon
    className={`${className} fa fa-${icon}`}
    {...rest}
  />
)

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
  className: React.PropTypes.string
}

export default Icon
