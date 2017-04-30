import React from 'react'

import RepoCard from '../RepoCard'
import { SecondaryColor, PrimaryBackground } from '../common/Themed'

import './ReposList.css'

const ReposList = ({ userRepos, userInfo }) => (
  <div className='ReposList'>
    <SecondaryColor>
      <PrimaryBackground>
        <div className='tc pa4'>
          <div className='mw9 center'>
            <div className='cf'>
              {userRepos.map((repo, index) => (
                <RepoCard
                  key={index}
                  repo={repo}
                />
              ))}
              <article className='fl w-100 w-50-m w-25-l pa2'>
                <a
                  className='more-card-box tc br3 ba b--dashed bw2 pv3 ph2 grow flex flex-column justify-center pointer no-underline'
                  href={userInfo.html_url}
                  target='_blank'
                >
                  <h1 className='f1 ma0'>
                    <span className='ph2'>
                      { userInfo.public_repos - 30 }
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
      </PrimaryBackground>
    </SecondaryColor>
  </div>
)

ReposList.propTypes = {
  userRepos: React.PropTypes.array.isRequired,
  userInfo: React.PropTypes.object.isRequired
}

export default ReposList
