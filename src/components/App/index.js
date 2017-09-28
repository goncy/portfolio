import React, { Component } from 'react'
import { compose, defaultProps } from 'recompose'

import { githubProfile, githubRepositories, linkedinResume } from '../../data'

import { sections } from '../common/Themed'

import Header from '../Header'
import ReposList from '../ReposList'
import Greeter from '../Greeter'
import Experience from '../Experience'
import Skills from '../Skills'
import Education from '../Education'
import ColorWizard from '../ColorWizard'
import Extra from '../Extra'

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

        { /* Experience */ }
        <SecondaryBackgroundSection>
          <Experience linkedinResume={linkedinResume} />
        </SecondaryBackgroundSection>

        { /* Skills */ }
        <PrimaryBackgroundSection>
          <Skills linkedinResume={linkedinResume} />
        </PrimaryBackgroundSection>

        { /* Education */ }
        <SecondaryBackgroundSection>
          <Education linkedinResume={linkedinResume} />
        </SecondaryBackgroundSection>

        { /* Repositories */ }
        <PrimaryBackgroundSection>
          <ReposList
            githubRepositories={githubRepositories}
            githubProfile={githubProfile}
          />
        </PrimaryBackgroundSection>

        { /* Color wizard */ }
        <SecondaryBackgroundSection>
          <ColorWizard changeTheme={changeTheme} />
        </SecondaryBackgroundSection>

        { /* Extra */ }
        <PrimaryBackgroundSection>
          <Extra />
        </PrimaryBackgroundSection>
      </div>
    )
  }
}

const AppHOC = compose(
  defaultProps({
    linkedinResume: linkedinResume,
    githubProfile: githubProfile,
    githubRepositories: githubRepositories
  })
)

export default AppHOC(App)
