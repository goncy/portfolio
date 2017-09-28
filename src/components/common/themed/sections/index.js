import React from 'react'

import { PrimaryColor, SecondaryBackground, PrimaryBackground, SecondaryColor } from '../elements'

export const PrimaryBackgroundSection = ({ children }) => (
  <PrimaryColor>
    <SecondaryBackground>
      {children}
    </SecondaryBackground>
  </PrimaryColor>
)

PrimaryBackgroundSection.propTypes = {
  children: React.PropTypes.node.isRequired
}

export const SecondaryBackgroundSection = ({ children }) => (
  <SecondaryColor>
    <PrimaryBackground>
      {children}
    </PrimaryBackground>
  </SecondaryColor>
)

SecondaryBackgroundSection.propTypes = {
  children: React.PropTypes.node.isRequired
}
