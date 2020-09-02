import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router";
import PostPage from "./components/Posts/PostPage";
import PagePost from "./components/Page/PagePost"
import PostList from "./components/Posts/PostList"

import Nav from "./components/Navigation/Nav"

export default () => (
  <>
  <Nav />

  <Switch>
    <Route path="/post" exact component={PostList} />
    <Route path="/:post/:slug" exact render={props => <PostPage {...props} />} />
    <Route path="/:slug" exact render={props => <PagePost {...props} />} />
    <Route path="/" render={()=><Redirect to='/home' /> } />
    <Route component={()=> 404} />
  </Switch>
  </>
);
