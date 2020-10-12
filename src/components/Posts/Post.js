import React from "react";
import { Main } from '../../styles/styles'
import { Link } from "react-router-dom";
import { connect } from "react-redux";


const Post = ({ post }) => {
  if (!post.featured) {
    return (
      <Link
        to={post.slug}
        key={post.id}
        style={{ textDecoration: "none", color: "black" }}
      >
      <Main>
          <img  src={post.feature_image} style={{width: 300}} alt={post.slug} />
     </Main>
      </Link>
    );
  } else {
    return <> </>;
  }
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Post);
