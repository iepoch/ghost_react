import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { settingsReducer } from './settingsReducer'
import { pageReducer }  from './pageReducer'

export default combineReducers({
  postReducer,
  settingsReducer,
  pageReducer
});
