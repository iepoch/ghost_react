import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import {settingsReducer} from './settingsReducer'

export default combineReducers({
  postReducer,
  settingsReducer
});
