import React from 'react'

import { elements } from '../common/themed'

import './Spinner.css'

const { SecondaryBackground, PrimaryBackground } = elements

const Spinner = () => (
  <PrimaryBackground>
    <SecondaryBackground className='Spinner' />
  </PrimaryBackground>
)

export default Spinner
