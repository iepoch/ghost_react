import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import Interweave, { ALLOWED_TAG_LIST } from "interweave";
// import connect from "react-redux/lib/connect/connect";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 30px 0;
  img {
    width: 200px;
  }
  .kg-image-card {
    img {
      width: 650px;
      height: 600px;
    }
  }
  .kg-gallery-row {
    display: flex;
    justify-content: center;
  }
  .kg-gallery-image {
    flex: 0.2 0 1%;
    margin: 2px;
    img {
      width: 250px;
      height: 200px;
    }
  }
  h1 {
    white-space: nowrap;
    font-size: 16px;
    color: black;
    margin: 20px 10px;
    cursor: pointer;

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

// const PostCard = styled.div`
//   flex: 1;
//   width: 300x;
//   height: 100px;
//   border: 0.5px solid #ccc;
//   background-color: white;
//   border-radius: 5px;
//   box-shadow: 1px 1px 15px 1px Gainsboro;

//   h1 {
//     white-space: nowrap;
//     font-size: 16px;
//     color: black;
//     margin: 10px 10px;
//     cursor: pointer;

//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
//   p {
//     overflow: hidden;
//     line-height: 10px;
//     margin: 0px 10px;
//     text-overflow: ellipsis;
//     display: -webkit-box;
//     -webkit-line-clamp: 7;
//     -webkit-box-orient: vertical;
//   }
//   hr {
//     width: 10%;
//     border: 0.5px solid #ccc;
//   }
// `;

const Post = ({ post }) => {
  return <div key={post.id}>{post.html}</div>;
};
const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Post);
