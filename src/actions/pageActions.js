import api from "../ghostApi";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const GET_PAGES = "GET_PAGES";


export const getPages = () => dispatch => {
  dispatch({ type: LOADING });
  api.pages
     .browse({ include: "tags" })
     .then(res => {
       console.log(res)
       dispatch({ type: GET_PAGES, payload: res });
    })
     .catch(err => {
       dispatch({ type: ERROR, errorMessage: `Error Loading Pages: ${err}` });
    });
};