import React from 'react'
import R from 'ramda'
import {compose, withProps} from 'recompose'

import RepoCard from '../RepoCard'

import './ReposList.css'

const REPOS_LIMIT = 11

const ReposList = ({ githubRepositories, githubProfile }) => (
  <div className='tc pa2 pa4-ns ReposList'>
    <h1 className='f3 mt3 mt0-ns mb3 lh-title'>
      Repositories
    </h1>
    <div className='mw9 center'>
      <div className='cf'>
        {githubRepositories.slice(0, REPOS_LIMIT).map((repo, index) => (
          <RepoCard
            key={index}
            repo={repo}
          />
        ))}
        <article className='fl w-100 w-50-m w-25-l pa2'>
          <a
            className='more-card-box tc br3 ba b--dashed bw2 pv3 ph2 grow flex flex-column justify-center pointer no-underline'
            href={githubProfile.html_url}
            target='_blank'
          >
            <h1 className='f1 ma0'>
              <span className='ph2'>
                { githubProfile.public_repos - REPOS_LIMIT }
              </span>
              <span className='plus-sign'>
                +
              </span>
            </h1>
          </a>
        </article>
      </div>
    </div>
  </div>
)

ReposList.propTypes = {
  githubRepositories: React.PropTypes.array.isRequired,
  githubProfile: React.PropTypes.object.isRequired
}

const ReposListHOC = compose(
  withProps(({githubRepositories}) => ({
    githubRepositories: R.pipe(
      R.sort(R.prop('stargazers_count')),
      R.reverse
    )(githubRepositories)
  }))
)

export default ReposListHOC(ReposList)
