import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import userReducer from "./userReducer";
import loaderReducer from './loaderReducer';
import SuperLikesFilmsReducer from './SuperLikesFilmsReducer';
import LikesFilmsReducer from './LikesFilmsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  films: filmReducer,
  // superLikes: SuperLikesFilmsReducer,
  likes: LikesFilmsReducer,

})

export default rootReducer
