import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Interweave, { ALLOWED_TAG_LIST } from "interweave";
import { getPosts } from "../../actions/postActions";
const Container = styled.div``

class PostPage extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    if (this.props.posts.length) {
      let post = this.props.posts.find(
        post => `${post.slug}` === this.props.match.params.slug
      );
      return (
        <Container key={post.comment_id}>
          <Interweave
            content={post.html}
            allowList={ALLOWED_TAG_LIST.concat("iframe")}
          />
        </Container>
      );
    } else {
      return <> </>;
    }
  }
}
const mapStateToProps = state => ({
  posts: state.postReducer.posts
});

export default connect(mapStateToProps, { getPosts })(PostPage);
