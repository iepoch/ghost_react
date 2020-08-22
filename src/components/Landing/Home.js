import React, { Component } from "react";
import styled from "styled-components";
import Featured from "../Posts/Featured"
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";


class Home extends Component {
    componentDidMount() {
        this.props.getPosts();
      }
    

    render(){
        const post = this.props.posts.map()
        return(<Featured post={post} key={post.id} />)
    }
}


const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts,
    loading: state.postReducer.loading,
    error: state.postReducer.error
  };
};

export default connect(mapStateToProps, { getPosts })(Home);
