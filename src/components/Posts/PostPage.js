import React, { Component } from "react";
import Post from "./Post";
import styled from "styled-components";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";
// import api from "../../ghostApi";
const Container = styled.div``;
class PostPage extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <Container>
        {this.props.loading ? <h1>LOADING...</h1> : null}
        {this.props.error !== "" ? <h1>{this.props.error}</h1> : null}
        {this.props.posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.postReducer.posts,
    loading: state.postReducer.loading,
    error: state.postReducer.error
  };
};

export default connect(mapStateToProps, { getPosts })(PostPage);
