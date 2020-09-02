import React, { Component } from "react";
import styled from "styled-components";
import Post from "./Post";
// import Featured from "./Featured";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";
// import Masonry from "react-masonry-css"
// import Masonry from 'react-masonry-component';



const PostBody = styled.div`

   background-color: #444444;
   height:100%;


`;

const Masonry = styled.div`


`;

// const breakpointColumnsObj = {
//   default: 4,
//   1100: 3,
//   700: 2,
//   500: 1
// }


class PostList extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {


    const childElements = this.props.posts.map(function(post){
      
      return(
        
        <div className='grid.image' key={post.id} >
        <Post post={post} key={post.slug} />
        {/* <img src={post.feature_image} /> */}
      </div>
      )
   
    })
    return (
     
      <PostBody>
        {this.props.loading ? <h1>LOADING...</h1> : null}
        {this.props.error !== "" ? <h1>{this.props.error}</h1> : null}
        <Masonry className='grid' >
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
