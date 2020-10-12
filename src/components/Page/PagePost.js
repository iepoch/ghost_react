import React, { Component } from "react";
import { connect } from "react-redux";
import Interweave, { ALLOWED_TAG_LIST } from "interweave";
import { getPages } from "../../actions/pageActions";
import {Container, Main} from '../../styles/styles'
// import { AnimatePresence } from 'framer-motion'


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
