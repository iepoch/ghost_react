import api from "../ghostApi";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const GET_POSTS = "GET_POSTS";


export const getPosts = () => dispatch => {
  dispatch({ type: LOADING });
  api.posts
    .browse({ include: "tags" })
    .then(res => {
      console.log(res)
      dispatch({ type: GET_POSTS, payload: res });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error Loading Posts" });
    });
};

export const getTags = () => dispatch => {
  dispatch({ type: LOADING });
  api.tags
    .browse()
    .then(res => {
      console.log("this is in the GetPost Actions", res);
      dispatch({ type: GET_POSTS, payload: res });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error Loading Posts" });
    });
};
