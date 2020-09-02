import { LOADING, GET_PAGES, ERROR } from "../actions/pageActions";

const intialState = {
  pages: [],
  page: null,
  loading: false,
  error: ""
};

export const pageReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_PAGES:
      return { ...state, pages: action.payload, loading: false };
    case ERROR:
      return { ...state, error: action.errorMessage, loading: false };
    default:
      return state;
  }
};
