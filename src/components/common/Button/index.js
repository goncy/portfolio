import React from 'react'

import Link from '../Link'

const Button = ({ children, className = '', ...rest }) => (
  <Link
    className={`${className} f6 f5-ns b dim br1 ba ph3 pv2 dib pointer`}
    {...rest}
  >
    {children}
  </Link>
)

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
}

export default Button
