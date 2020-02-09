import { LOADING, GET_POSTS, ERROR } from "../actions/postActions";

const intialState = {
  posts: [],
  post: null,
  loading: false,
  error: ""
};

export const postReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case ERROR:
      return { ...state, error: action.errorMessage, loading: false };
    default:
      return state;
  }
};
