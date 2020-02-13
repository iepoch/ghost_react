import React, { Component } from "react";
import Post from "./Post";
import styled from "styled-components";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .kg-gallery-row {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;
    margin-left: 30px;
    img {
      width: 96.2%;
      height: 100%;
    }
  }
`;
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
          <Post post={post} key={post.id} tags={post.tags} />
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
