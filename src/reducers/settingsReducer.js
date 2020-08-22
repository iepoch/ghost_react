import { LOADING, GET_SETTINGS, ERROR } from "../actions/settingsActions.js";

const intialState = {
  settings: {},
  setting: null,
  loading: false,
  error: ""
};

export const settingsReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_SETTINGS:
      return { ...state, settings: action.payload, loading: false };
    case ERROR:
      return { ...state, error: action.errorMessage, loading: false };
    default:
      return state;
  }
};
