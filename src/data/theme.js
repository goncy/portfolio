let lastTheme = null

const green = '#19a974'
const navy = '#001b44'
const darkRed = '#E7040F'
const purple = '#5E2CA5'
const blue = '#357EDD'
const washedRed = '#FFDFDF'
const lightGreen = '#9EEBCF'
const white = '#FFFFFF'
const lightBlue = '#96CCFF'
const lightestBlue = '#CDECFF'
const orange = '#FF6300'
const grey = '#555555'
const washedGreen = '#E8FDF5'
const gold = '#FFB700'
const darkPink = '#D5008F'
const lightPurple = '#A463F2'

const themes = [{
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
  primary: navy,
  secondary: white
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
  primary: darkRed,
  secondary: white
}, {
  primary: navy,
  secondary: lightPurple
}]

const getTheme = () => {
  let theme = null

  while (!theme || lastTheme === theme) {
    theme = themes[Math.floor(Math.random() * themes.length)]
  }

  lastTheme = theme

  return {
    primary: theme.primary,
    secondary: theme.secondary
  }
}

export default getTheme
