import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './data/theme'

import { PrimaryBackground, SecondaryColor } from './components/common/Themed'
import App from './components/App'

class Layout extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <div className='vh-100 helvetica'>
          <PrimaryBackground>
            <SecondaryColor>
              <App />
            </SecondaryColor>
          </PrimaryBackground>
        </div>
      </ThemeProvider>
    )
  }
}

export default Layout
