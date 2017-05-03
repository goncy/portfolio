export const getQueryParameter = variable => {
  const query = window.location.search.substring(1)
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    if (pair[0] === variable) return decodeURI(pair[1])
  }
  return null
}

export const parseToken = token => {
  if (!token) return null

  try {
    const parsedToken = atob(token)
    const jsonToken = JSON.parse(parsedToken)
    return jsonToken
  } catch (e) {
    return null
  }
}
