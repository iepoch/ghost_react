import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router";
// import PostList from "./components/Posts/PostList";
import PostPage from "./components/Posts/PostPage";
import PageRenderer from "./page-renderer"
import Nav from "./components/Navigation/Nav"

export default () => (
  <>
  <Nav />
  <Switch>
    <Route path="/:page" exact component={PageRenderer} />
    <Route path="/" render={()=><Redirect to='/home' /> } />
    {/* <Route path="/post" exact component={PostList} /> */}
    <Route path="/post/:slug" render={props => <PostPage {...props} />} />
    <Route component={()=> 404} />
  </Switch>
  </>
);
