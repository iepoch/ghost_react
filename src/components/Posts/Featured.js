import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";



const Content = styled.div`


  img {
    width: 25%;
  }
  span {

    margin: 10px 10px;

  }
  h1{
    white-space: nowrap;
    font-size: 16px;
    font-weight: bold;
    color: black;
    margin: 10px 10px;
    cursor: pointer;
     width: 40%;
    overflow: hidden;
    text-overflow: ellipsis;
    }
  p {
    overflow: hidden;
    line-height: 10px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
  hr {
    width: 10%;
    border: 0.5px solid #ccc;
  }
`;
const Featured = ({ post }) => {
  if (post.featured) {
    return (
      <Link
        to={post.slug}
        key={post.id}
        style={{ textDecoration: "none", color: "black" }}
      >
      <Content>
          <img src={post.feature_image} alt={post.slug} />
          <h1>{post.title}</h1>
          {post.tags.map(tag => (
            <span key={tag.slug}> {tag.name} </span>
          ))}
          </Content>
      </Link>
    );
  } else {
    return <> </>;
  }
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Featured);
