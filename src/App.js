import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import PostList from "./components/Posts/PostList";
import PostPage from "./components/Posts/PostPage";
import Home from "./components/Landing/Home";

export default () => (
  <Switch>
    <Route path="/post" exact component={PostList} />
    <Route path="/cinphul" exact component={Home} />
    <Route path="/post/:slug" render={props => <PostPage {...props} />} />
  </Switch>
);
