const green = '#19a974'
const navy = '#001b44'
const red = '#EA4335'
const purple = '#5E2CA5'
const blue = '#4285F4'
const washedRed = '#FFDFDF'
const lightGreen = '#9EEBCF'
const white = '#FFFFFF'
const lightBlue = '#96CCFF'
const lightestBlue = '#CDECFF'
const orange = '#FF6300'
const grey = '#555555'
const washedGreen = '#E8FDF5'
const darkPink = '#D5008F'
const lightPurple = '#A463F2'
const gold = '#FBBC05'
const googleGreen = '#34A853'
const black = '#111111'

const themes = [{
  primary: navy,
  secondary: white
}, {
  primary: green,
  secondary: navy
}, {
  primary: white,
  secondary: purple
}, {
  primary: washedRed,
  secondary: navy
}, {
  primary: lightGreen,
  secondary: navy
}, {
  primary: blue,
  secondary: white
}, {
  primary: white,
  secondary: orange
}, {
  primary: washedGreen,
  secondary: grey
}, {
  primary: lightestBlue,
  secondary: navy
}, {
  primary: navy,
  secondary: gold
}, {
  primary: lightBlue,
  secondary: grey
}, {
  primary: grey,
  secondary: lightGreen
}, {
  primary: darkPink,
  secondary: white
}, {
  primary: white,
  secondary: lightPurple
}, {
  primary: red,
  secondary: white
}, {
  primary: navy,
  secondary: lightPurple
}, {
  primary: googleGreen,
  secondary: white
}, {
  primary: black,
  secondary: white
}, {
  primary: gold,
  secondary: purple
}, {
  primary: gold,
  secondary: grey
}, {
  primary: blue,
  secondary: lightestBlue
}]

let nextThemes = themes.slice(0)

/* const getTheme = () => {
  if (!lastTheme) {
    lastTheme = themes[0]
    return lastTheme
  }

  let theme = null

  while (!theme || lastTheme === theme) {
    theme = themes[Math.floor(Math.random() * themes.length)]
  }

  lastTheme = theme

  return theme
} */

const getTheme = () => {
  const theme = nextThemes.shift()

  if (!nextThemes.length) {
    nextThemes = themes.slice(0)
  }

  console.log(themes, nextThemes)

  return theme
}

export default getTheme
