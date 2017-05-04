export const getLanguageIcon = language => {
  switch (language) {
    case 'JavaScript':
      return 'icon-javascript-alt'
    case 'PHP':
      return 'icon-php-alt'
    case 'HTML':
      return 'icon-html5-alt'
    case 'CSS':
      return 'icon-css3-alt'
    default:
      return 'icon-shell'
  }
}
