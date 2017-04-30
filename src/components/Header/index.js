import React from 'react'
import { compose, defaultProps } from 'recompose'
import moment from 'moment'

import { PrimaryColor, SecondaryBackground } from '../common/Themed'
import Icon from '../common/Icon'
import Avatar from '../common/Avatar'
import Link from '../common/Link'

import './Header.css'

const Header = ({ age, userInfo }) => (
  <div className='Header'>
    <PrimaryColor>
      <SecondaryBackground>
        <div className='tc pa4'>
          <div className='mw9 center ph2'>
            <div className='cf'>
              <div className='fl w-100'>
                <Avatar
                  size='200px'
                  url={userInfo.avatar_url}
                />
              </div>
              <div className='fl w-100'>
                <span className='f1 b db pr3'>Gonzalo Pozzo</span>
                <blockquote className='ph0 pb2 mb3 bb mh0 mt0'>
                  <p className='lh-copy f6'>
                    <span className='b'>{userInfo.bio}</span> en <span className='b'>{userInfo.company}</span>, <span className='b'>{age}</span> años, viviendo en <span className='b'>{userInfo.location}</span>. Me gusta codear, el open source y los datos libres.
                    Actualmente tengo <span className='b'>{userInfo.public_repos}</span> repositorios subidos a <span className='b'><Link className='link' href={userInfo.url}> mi GitHub</Link></span>.
                  </p>
                </blockquote>
                <div className='w-100 overflow-auto'>
                  <div className='social-container'>
                    <a
                      className='social-icon dim pointer'
                      href='tel:5491141634695'
                    >
                      <Icon
                        size='lg'
                        icon='phone-square'
                      />
                    </a>
                    <a
                      className='social-icon dim pointer'
                      href='https://twitter.com/goncy'
                    >
                      <Icon
                        size='lg'
                        icon='twitter-square'
                      />
                    </a>
                    <a
                      className='social-icon dim pointer'
                      href='https://github.com/goncy'
                    >
                      <Icon
                        size='lg'
                        icon='github-square'
                      />
                    </a>
                    <a
                      className='social-icon dim pointer'
                      href='https://www.linkedin.com/in/gonzalopozzo/'
                    >
                      <Icon
                        size='lg'
                        icon='linkedin-square'
                      />
                    </a>
                    <a
                      className='social-icon dim pointer'
                      href='https://www.facebook.com/goncy.pozzo'
                    >
                      <Icon
                        size='lg'
                        icon='facebook-official'
                      />
                    </a>
                    <a
                      className='social-icon dim pointer'
                      href='mailto:gonzalo.pozzo4@gmail.com'
                    >
                      <Icon
                        size='lg'
                        icon='envelope-square'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecondaryBackground>
    </PrimaryColor>
  </div>
)

Header.propTypes = {
  age: React.PropTypes.number.isRequired,
  userInfo: React.PropTypes.object.isRequired
}

const HeaderHOC = compose(
  defaultProps({
    age: moment().diff('1992-05-04', 'years')
  })
)

export default HeaderHOC(Header)
