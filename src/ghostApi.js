import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.REACT_APP_URL,
  key: process.env.REACT_APP_API_KEY,
  version: "v3"
});

export default api;
