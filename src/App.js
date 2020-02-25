import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Post from "./components/Posts/Post";
import PostPage from "./components/Posts/PostPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={PostPage} />
      <Route path="/post/:slug" render={props => <Post {...props} />} />
    </Switch>
  );
}

export default App;
