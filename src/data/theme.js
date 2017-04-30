const green = '#19a974'
const navy = '#001b44'
const darkRed = '#E7040F'
const lightYellow = '#FBF1A9'
const purple = '#5E2CA5'
const blue = '#357EDD'
const darkPink = '#D5008F'
const lightGreen = '#9EEBCF'
const white = '#FFFFFF'
const lightestblue = '#CDECFF'
const yellow = '#FFD700'
const orange = '#FF6300'

const themes = [{
  primary: green,
  secondary: navy
}, {
  primary: navy,
  secondary: darkRed
}, {
  primary: lightYellow,
  secondary: purple
}, {
  primary: lightYellow,
  secondary: navy
}, {
  primary: lightYellow,
  secondary: blue
}, {
  primary: darkPink,
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
  primary: blue,
  secondary: navy
}, {
  primary: lightestblue,
  secondary: blue
}, {
  primary: purple,
  secondary: yellow
}, {
  primary: white,
  secondary: orange
}]

const theme = themes[Math.floor(Math.random() * themes.length)]

export default {
  primary: theme.primary,
  secondary: theme.secondary
}
