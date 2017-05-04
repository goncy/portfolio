import React from 'react'
import { compose } from 'recompose'

import { constants } from '../../data'

import Icon from '../common/Icon'
import Avatar from '../common/Avatar'

import './Header.css'

const { SOCIAL_LINKS } = constants

const Header = ({ githubProfile, linkedinResume }) => (
  <div className='Header'>
    <div className='tc pa2 pa4-ns'>
      <div className='mw9 center ph2 pv2 pv0-ns'>
        <div className='cf'>
          <div className='w-100'>
            <Avatar
              size='200px'
              url={githubProfile.avatar_url}
            />
          </div>
          <div className='w-100'>
            <span className='f1 b db'>{ linkedinResume.basics.name }</span>
            <blockquote className='ph0 bb mh0 mt0'>
              <p className='lh-copy f5'>
                {linkedinResume.basics.summary}
              </p>
              <p className='i f6 lh-copy pb1'>
                Información actualizada al 2017/04/31
              </p>
            </blockquote>
            <div className='w-100 overflow-auto'>
              <div className='social-container'>
                {SOCIAL_LINKS.map((item, index) => (
                  <a
                    key={index}
                    className='social-icon dim pointer'
                    href={item.url}
                  >
                    <Icon
                      size='lg'
                      icon={item.icon}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  githubProfile: React.PropTypes.object.isRequired,
  linkedinResume: React.PropTypes.object.isRequired
}

const HeaderHOC = compose()

export default HeaderHOC(Header)
