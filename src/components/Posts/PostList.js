import React, { Component } from "react";
import styled from "styled-components";
import Post from "./Post";
import Featured from "./Featured";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";
import Masonry from "react-masonry-component"

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
// const Container = styled.div`
//  display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
// `;

// const Tags = styled.div``;

const style = {
  backgroundColor:"orangered"
}

const imagesLoadedOptions = { background: '.my-bg-image-el' }
class PostList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const childElements = this.props.posts.map(function(post){
      return(
        
        <div key={post.id}>
      

        <Post post={post} key={post.slug} />
        
      </div>
      )
   
    })
    return (
      <PostBody>
        {this.props.loading ? <h1>LOADING...</h1> : null}
        {this.props.error !== "" ? <h1>{this.props.error}</h1> : null}
      
        <Masonry
         className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                style={style}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
        {childElements}
        </Masonry>
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
