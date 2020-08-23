import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router";
import PostList from "./components/Posts/PostList";
import PostPage from "./components/Posts/PostPage";
import PageRenderer from "./page-renderer"
import Nav from "./components/Navigation/Nav"

export default () => (
  <>
  <Nav />
  <Switch>
    <Route path="/:page" exact component={PageRenderer} />
  <Route path="/:page/:slug" exact render={props => <PostPage {...props} />} />
    <Route path="/" render={()=><Redirect to='/' /> } />
    <Route component={()=> 404} />
  </Switch>
  <Route path="/post" exact component={PostList} />
  </>
);
