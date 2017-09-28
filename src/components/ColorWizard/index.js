import React from 'react'
import { compose, withState, withHandlers } from 'recompose'

import Button from '../common/Button'

export const ColorWizard = ({ handleChangeThemeClick, handleLikedClick, pristine, liked }) => (
  <div className='ColorWizard no-select'>
    <div className='tc pa2 pa4-ns'>
      <div className='mw9 center pa2'>
        {/* Pristine title */}
        {pristine && (
          <h1 className='f3 mt0 mb3'>
            ¿Do you like this web colors?
          </h1>
        )}

        {/* Didn't liked title */}
        {!pristine && !liked && (
          <h1 className='f3 mt0 mb3'>
            ¿Now?
          </h1>
        )}

        {/* Liked title */}
        {!pristine && liked && (
          <h1 className='f3 mt0 mb3'>
            ¡Great!
          </h1>
        )}

        {/* Didn't liked buttons */}
        {!liked && (
          <div>
            <Button onClick={handleLikedClick}>
              Yes
            </Button>
            <Button
              onClick={handleChangeThemeClick}
              className='ml3'
            >
              No
            </Button>
          </div>
        )}

        {/* Liked buttons */}
        {liked && (
          <Button
            onClick={handleChangeThemeClick}
            className='f7-ns'
          >
            I want to change them anyway
          </Button>
        )}
      </div>
    </div>
  </div>
)

ColorWizard.propTypes = {
  handleChangeThemeClick: React.PropTypes.func.isRequired,
  handleLikedClick: React.PropTypes.func.isRequired,
  pristine: React.PropTypes.bool,
  liked: React.PropTypes.bool
}

export const ColorWizardHOC = compose(
  withState(
    'pristine',
    'setPristine',
    true
  ),
  withState(
    'liked',
    'setLiked',
    false
  ),
  withHandlers({
    handleChangeThemeClick: ({ setPristine, changeTheme }) => () => {
      setPristine(false)
      changeTheme()
    },
    handleLikedClick: ({ setPristine, setLiked, changeTheme }) => () => {
      setPristine(false)
      setLiked(true)
    }
  })
)

export default ColorWizardHOC(ColorWizard)
