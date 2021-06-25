import { DELETE_USER, SET_USER } from "../types"
import * as endPoints from '../../components/config/endPoints'

export const getUserFromServer = (id) => async (dispatch) => {
  const response = await fetch(endPoints.getUser(id), { credentials: 'include' })
  if (response.status === 200) {
    const currentUser = await response.json()
    dispatch(setUser(currentUser))
  }
}

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
})

export const signUp = (payload) => async (dispatch) => {
  console.log(payload);
  const response = await fetch(endPoints.signUp(), {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(setUser(user))
  }
}

export const signIn = (payload, history, from) => async (dispatch) => {
  const response = await fetch(endPoints.signIn(), {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(setUser(user))
    history.replace(from);
  } else {
    history.replace('/signin')
  }
}

export const signOut = () => async (dispatch) => {
  const response = await fetch(endPoints.signOut(), {
    credentials: 'include'
  })
  if (response.status === 200) {
    dispatch(deleteUser())
  }
}

export const checkAuth = () => async (dispatch) => {
  const response = await fetch(endPoints.checkAuth(), {
    credentials: 'include'
  })
  if (response.status === 200) {
    const user = await response.json()
    dispatch(setUser(user))
  }
}

export const deleteUser = () => ({
  type: DELETE_USER
})
