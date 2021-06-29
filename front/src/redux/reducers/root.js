import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import userReducer from "./userReducer";
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  films: filmReducer,
})

export default rootReducer
