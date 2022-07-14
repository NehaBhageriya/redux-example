import { counterReducer } from "./Reducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  counter: counterReducer
});
export default allReducers;
