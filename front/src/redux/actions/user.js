import { DELETE_USER, SET_USER } from "../types"

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
})

export const signUp = (payload, history) => async (dispatch) => {
  const response = await fetch('http://localhost:8080/api/v1/auth/signup', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
    const user = await response.json()
    if (user) {
      dispatch(setUser(user))
      history.replace('/test');
    } else {
      history.replace('/register');
    }
  }

export const signIn = (payload, history, from) => async (dispatch) => {
  const response = await fetch('http://localhost:8080/api/v1/auth/signin', {
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
  const response = await fetch('http://localhost:8080/api/v1/auth/signout', {
    credentials: 'include'
  })
  if (response.ok) {
    dispatch(deleteUser())
  }
}

export const deleteUser = () => ({
  type: DELETE_USER
})
