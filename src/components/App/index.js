import React, { Component } from 'react'
import { compose, withState, lifecycle, branch, renderComponent } from 'recompose'
import { ThemeProvider } from 'styled-components'

import mockedData from '../../mockedData.json'
import theme from '../../data/theme'

import Header from '../Header'
import ReposList from '../ReposList'
import Spinner from '../Spinner'
import LoadingError from '../LoadingError'

// const USER_URL = 'https://api.github.com/users/goncy'

class App extends Component {
  static propTypes = {
    userInfo: React.PropTypes.object,
    userRepos: React.PropTypes.array
  }

  render () {
    const {userInfo, userRepos} = this.props
    return (
      <ThemeProvider theme={theme}>
        <div className='fadeIn'>
          <Header userInfo={userInfo} />
          <ReposList
            userRepos={userRepos}
            userInfo={userInfo}
          />
        </div>
      </ThemeProvider>
    )
  }
}

const AppHOC = compose(
  withState(
    'error',
    'setError',
    null
  ),
  withState(
    'userInfo',
    'setUserInfo',
    null
  ),
  withState(
    'userRepos',
    'setUserRepos',
    null
  ),
  lifecycle({
    async componentDidMount () {
      const { setUserInfo, setUserRepos, setError } = this.props

      try {
        // const userInfoReq = await fetch(USER_URL)
        // const userInfoRes = await userInfoReq.json()

        // setUserInfo(userInfoRes)
        setUserInfo(mockedData.userInfo)

        // const userReposReq = await fetch(userInfoRes.repos_url + '?type=owner&sort=updated')
        // const userReposRes = await userReposReq.json()

        // setUserRepos(userReposRes)
        setUserRepos(mockedData.userRepos)
      } catch (e) {
        setError(e)
      }
    }
  }),
  branch(
    ({ userInfo, userRepos }) => userInfo === null || userRepos === null,
    renderComponent(Spinner)
  ),
  branch(
    ({ error }) => error,
    renderComponent(LoadingError)
  )
)

export default AppHOC(App)
