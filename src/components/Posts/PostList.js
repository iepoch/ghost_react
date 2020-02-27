import React, { Component } from "react";
import styled from "styled-components";
import Post from "./Post";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  .span {
    justify-content: space-between;
  }
  img {
    width: 20%;
    height: 50%;
  }
`;

// const Tags = styled.div``;
class PostList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <PostBody>
        {this.props.loading ? <h1>LOADING...</h1> : null}
        {this.props.error !== "" ? <h1>{this.props.error}</h1> : null}
        <Container>
          {this.props.posts.map(post => (
            <Post post={post} key={post.slug} />
          ))}
        </Container>
      </PostBody>
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

export default connect(mapStateToProps, { getPosts })(PostList);
