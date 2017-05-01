import React, { Component } from 'react'
import { compose, withState, lifecycle, branch, renderComponent, defaultProps } from 'recompose'

import mockedData from '../../data/mockedData.json'

import { sections } from '../common/themed'

import Header from '../Header'
import ReposList from '../ReposList'
import Spinner from '../Spinner'
import LoadingError from '../LoadingError'
import Greeter from '../Greeter'
import Experience from '../Experience'
import Knowledge from '../Knowledge'
import ColorWizard from '../ColorWizard'

const { PrimaryBackgroundSection, SecondaryBackgroundSection } = sections

// const USER_URL = 'https://api.github.com/users/goncy'

class App extends Component {
  static propTypes = {
    githubProfile: React.PropTypes.object,
    githubRepositories: React.PropTypes.array,
    linkedinResume: React.PropTypes.object,
    changeTheme: React.PropTypes.func
  }

  render () {
    const {githubProfile, githubRepositories, linkedinResume, changeTheme} = this.props
    return (
      <div className='fadeIn'>
        { /* Greeter */ }
        <SecondaryBackgroundSection>
          <Greeter />
        </SecondaryBackgroundSection>

        { /* Header */ }
        <PrimaryBackgroundSection>
          <Header
            githubProfile={githubProfile}
            linkedinResume={linkedinResume}
          />
        </PrimaryBackgroundSection>

        { /* Repositories */ }
        <SecondaryBackgroundSection>
          <ReposList
            githubRepositories={githubRepositories}
            githubProfile={githubProfile}
          />
        </SecondaryBackgroundSection>

        { /* Experience */ }
        <PrimaryBackgroundSection>
          <Experience linkedinResume={linkedinResume} />
        </PrimaryBackgroundSection>

        { /* Knowledge */ }
        <SecondaryBackgroundSection>
          <Knowledge linkedinResume={linkedinResume} />
        </SecondaryBackgroundSection>

        { /* Knowledge */ }
        <PrimaryBackgroundSection>
          <ColorWizard changeTheme={changeTheme} />
        </PrimaryBackgroundSection>
      </div>
    )
  }
}

const AppHOC = compose(
  defaultProps({
    linkedinResume: mockedData.linkedinResume
  }),
  withState(
    'error',
    'setError',
    null
  ),
  withState(
    'githubProfile',
    'setGithubProfile',
    null
  ),
  withState(
    'githubRepositories',
    'setGithubRepositories',
    null
  ),
  lifecycle({
    async componentDidMount () {
      const { setGithubProfile, setGithubRepositories, setError } = this.props

      try {
        // const githubProfileReq = await fetch(USER_URL)
        // const githubProfileRes = await githubProfileReq.json()

        // setGithubProfile(githubProfileRes)
        setGithubProfile(mockedData.githubProfile)

        // const githubRepositoriesReq = await fetch(githubProfileRes.repos_url + '?type=owner&sort=updated')
        // const githubRepositoriesRes = await githubRepositoriesReq.json()

        // setGithubRepositories(githubRepositoriesRes)
        setGithubRepositories(mockedData.githubRepositories)
      } catch (e) {
        setError(e)
      }
    }
  }),
  branch(
    ({ githubProfile, githubRepositories }) => githubProfile === null || githubRepositories === null,
    renderComponent(Spinner)
  ),
  branch(
    ({ error }) => error,
    renderComponent(LoadingError)
  )
)

export default AppHOC(App)
