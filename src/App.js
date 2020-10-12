import React from "react";
// import {createGlobalStyle} from 'styled-components';
import { Route, Switch, Redirect } from "react-router";
import PostPage from "./components/Posts/PostPage";
import PagePost from "./components/Page/PagePost"
import PostList from "./components/Posts/PostList"
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from "./components/Navigation/Nav"
import styled from "styled-components";
import GlobalFonts from './__fonts/fonts';

const GlobalStyle = styled.body`
  
    background-color: #171719;
    margin: auto 0;
    height: 100%;
    width: 100%;
    color: white;
   
  
`

export default () => (
  <>
  <CssBaseline />
  <GlobalStyle>
  <GlobalFonts />
  <Nav />
  <Switch>
    <Route path="/post" exact component={PostList} />
    <Route path="/:post/:slug" exact render={props => <PostPage {...props} />} />
    <Route path="/:slug" exact render={props => <PagePost {...props} />} />
    <Route path="/" render={()=><Redirect to='/home' /> } />
    <Route component={()=> 404} />
  </Switch>
  
  </GlobalStyle>
  </>
);
