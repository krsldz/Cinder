const initState = {
  user: null,
  loader: false,
  films: [],
  
}

const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem('redux'))
  return stateFromLS ? stateFromLS : initState

}

export default getInitState
