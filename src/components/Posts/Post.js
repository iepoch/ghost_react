import React from "react";
import styled from "styled-components";
import PostPage from "./PostPage";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Post = ({ post }) => {
  if (post.featured) {
    return (
      <Link
        to={"/post/" + post.slug}
        key={post.id}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div key={post.id + post.slug}>
          <img src={post.feature_image} alt={post.slug} />
          <h1>{post.title}</h1>
          {post.tags.map(tag => (
            <span key={tag.slug}> {tag.name} </span>
          ))}
        </div>
      </Link>
    );
  } else {
    return <> </>;
  }
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Post);
