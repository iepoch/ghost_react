import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Interweave, { ALLOWED_TAG_LIST } from "interweave";
import { getPosts } from "../../actions/postActions";
const Container = styled.div``;

const Header = styled.div`
  // flex: 1;
  // width: 270px;
  // height: 100px;
  // border: 0.5px solid #ccc;
  // background-color: white;
  // border-radius: 5px;
  // box-shadow: 1px 1px 15px 1px lightgray;

  // h1 {
  //   white-space: nowrap;
  //   font-size: 16px;
  //   color: black;
  //   margin: 10px 10px;
  //   cursor: pointer;

  //   overflow: hidden;
  //   text-overflow: ellipsis;
  // }
  // p {
  //   overflow: hidden;
  //   line-height: 10px;
  //   margin: 0px 10px;
  //   text-overflow: ellipsis;
  //   display: -webkit-box;
  //   -webkit-line-clamp: 7;
  //   -webkit-box-orient: vertical;
  // }
  // hr {
  //   width: 10%;
  //   border: 0.5px solid #ccc;
  // }
`;

class Post extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    let post = this.props.posts.find(
      post => `${post.slug}` === this.props.match.params.slug
    );
    return (
      <Container key={post.id}>
        <Interweave
          content={post.html}
          allowList={ALLOWED_TAG_LIST.concat("iframe")}
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.postReducer.posts
});

export default connect(mapStateToProps, { getPosts })(Post);
