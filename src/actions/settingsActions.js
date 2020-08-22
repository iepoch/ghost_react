import api from "../ghostApi";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const GET_SETTINGS = "GET_SETTINGS";


export const getSettings = () => dispatch => {
  dispatch({ type: LOADING });
  api.settings
    .browse({ include: "tags" })
    .then(res => {
      dispatch({ type: GET_SETTINGS, payload: res });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error Loading Settings" });
    });
};
// export const getTags = () => dispatch => {
//   dispatch({ type: LOADING });
//   api.tags
//     .browse()
//     .then(res => {
//       console.log("this is in the GetPost Actions", res);
//       dispatch({ type: GET_SETTINGS, payload: res });
//     })
//     .catch(err => {
//       dispatch({ type: ERROR, errorMessage: "Error Loading Settings" });
//     });
// };
