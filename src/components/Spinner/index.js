import React from 'react'

import { SecondaryBackground, PrimaryBackground } from '../common/themed/elements'

import './Spinner.css'

const Spinner = () => (
  <PrimaryBackground>
    <SecondaryBackground className='Spinner' />
  </PrimaryBackground>
)

export default Spinner
