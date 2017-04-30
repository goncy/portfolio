import React from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.img`
  max-width: ${({size}) => size};
  max-height: ${({size}) => size};
  border-radius: 50%;
`

const Avatar = ({ url, ...rest }) => (
  <StyledAvatar
    src={url}
    {...rest}
  />
)

Avatar.propTypes = {
  url: React.PropTypes.string.isRequired
}

export default Avatar
