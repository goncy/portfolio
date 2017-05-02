import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import { getTheme } from './data'

import App from './components/App'

class Layout extends Component {
  state = {
    theme: getTheme()
  }

  changeTheme = () => {
    this.setState({
      theme: getTheme()
    })
  }

  render () {
    const { theme } = this.state

    return (
      <ThemeProvider theme={theme}>
        <div className='vh-100 helvetica'>
          <App changeTheme={this.changeTheme} />
        </div>
      </ThemeProvider>
    )
  }
}

export default Layout
