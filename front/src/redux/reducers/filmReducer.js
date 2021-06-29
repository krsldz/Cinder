import { INIT_FILMS } from "../types";

const filmReducer = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case INIT_FILMS: {
      return  payload ;
    }

    default:
      return state
  }
}

export default filmReducer
