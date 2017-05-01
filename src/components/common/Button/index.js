import React from 'react'

const Button = ({ children, className = '', ...rest }) => (
  <a
    className={`${className} f6 f5-ns b dim br1 ba ph3 pv2 dib pointer`}
    {...rest}
  >
    {children}
  </a>
)

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
}

export default Button
