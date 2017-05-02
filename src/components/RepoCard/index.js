import React from 'react'

import Icon from '../common/Icon'

import './RepoCard.css'

const RepoCard = ({ repo: { name, owner, html_url, stargazers_count, watchers, language, forks } }) => (
  <div className='RepoCard'>
    <article className='fl w-100 w-50-m w-25-l pa2'>
      <a
        className='card-box tc br3 ba bw2 pv3 ph2 grow flex flex-column justify-center pointer no-underline'
        href={html_url}
        target='_blank'
      >
        <div className='cf'>
          <img
            src={owner.avatar_url}
            className='br-100 h4 w4 dib ba bw2 pa2'
            alt='Owner avatar'
          />
          <h1 className='f4 mb2'>{ name }</h1>
          <h2 className='f5 fw4 mt0'>
            <Icon
              size='xs'
              icon='star'
              className='ph1'
            />
            { stargazers_count }
            <span className='ph1' />
            <Icon
              size='xs'
              icon='eye'
              className='ph1'
            />
            { watchers }
            <span className='ph1' />
            <Icon
              size='xs'
              icon='code-fork'
              className='ph1'
            />
            { forks }
          </h2>
          <h3 className='f7 br-pill ba bw2 ph2 pv2 dib ttu tracked ma0'>
            {language}
          </h3>
        </div>
      </a>
    </article>
  </div>
)

RepoCard.propTypes = {
  repo: React.PropTypes.object.isRequired
}

export default RepoCard
