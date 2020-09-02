import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Interweave, { ALLOWED_TAG_LIST } from "interweave";
import { getPages } from "../../actions/pageActions";

const Main = styled.div`
// vh: 100%;
// vw: 100%;
// background-color:#333;

// `
const Container = styled.div`

// figure {
//   border: 1px #cccccc solid;
//   padding: 4px;
//   margin: auto;
// }

// figcaption {
//   background-color: black;
//   color: white;
//   font-style: italic;
//   padding: 2px;
//   text-align: center;
// }

//   img {

//     margin:20px;
//     width: 40%;
//     height:40%;
 
//   }
//   span {

//     margin: 10px 10px;

//   }
//   h2{
//     white-space: nowrap;
//     font-size: 20px;
//     font-weight: bold;
//     color: white;
//     margin: 10px 10px;
//     cursor: pointer;
//      width: 40%;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     }
//     code {
//     font-family: Monaco, monospace;
//     font-size: 12px;
//     line-height: 100%;
//     background-color: orange;
//     padding: 0.2em;
//     letter-spacing: -0.05em;
//     word-break: normal;
//     border-radius: 5px;
//   }
// `;

class PagePost extends Component {
    
  componentDidMount() {
    this.props.getPages();
  }
  
  render() {
  
    if (this.props.pages.length) {
      let page = this.props.pages.find(
        page =>`${page.slug}` === this.props.match.params.slug

      );
      return (
            <Main>
            <Container>

          <Interweave
            content={page.html}
            allowList={ALLOWED_TAG_LIST.concat("iframe")}
          />
           </Container>

    </Main>
    
      );
    } else {
      return <> Coming Soon </>;
    }
  }
}
const mapStateToProps = state => ({
  pages: state.pageReducer.pages
});

export default connect(mapStateToProps, { getPages })(PagePost);
