import {UPDATE_LIKES_USER, GET_LIKES_USER} from '../types';


export default function LikesFilmsReducer(state =[], action){
  const {type, payload} = action;

  switch (type) {
    case GET_LIKES_USER: {
      return payload 
    }
    
    case UPDATE_LIKES_USER:
      return [...state, payload]
    
  
    default:
      return state;
      
  }

}
