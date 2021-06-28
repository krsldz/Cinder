import { INIT_FILMS } from "../types";
import axios from 'axios';
axios.defaults.withCredentials = true;

export const setAllUserFilms = (films) =>{
  return {
      type: INIT_FILMS,
      payload: films
  }
}
// thunk чтобы показывать юзеру подборку его фильмов после прохождения теста
export const initFilmsAC = (value) => async (dispatch) => {
  try {
  const response = await axios.post('http://localhost:8080/api/v1/compilation', value);
 
    dispatch(setAllUserFilms(response.data))
  } catch (error) {
    console.log(error)
  }
};
