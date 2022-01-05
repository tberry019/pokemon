
// @ts-ignore
export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  timeout: 8000
})

// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/TBerry/pokemon',
  timeout: 8000
})

// NOTE edit correct urls on pokemon