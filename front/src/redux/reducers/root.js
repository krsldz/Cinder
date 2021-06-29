import { combineReducers } from "redux";
import filmReducer from "./filmReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  films: filmReducer,
})

export default rootReducer
