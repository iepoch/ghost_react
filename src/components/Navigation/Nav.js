import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getSettings } from "../../actions/settingsActions";
import Link from "../../utils/Link"
import GlitchClip from 'react-glitch-effect/core/Clip'

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  background-color: transparent;

 >.blog-title-name {
  font-size: 30px;
  justify-content: flex-start;
  font-weight: bold;
  color: #44444;
  margin: 20px;
  font-family: "Quarz";
}

ul {
  display: flex;
 flex-direction: row;
}
li {
list-style: none;
 display: flex;
 margin: 20px;
 font-family:"Major";
 font-size: 16px;
 color: white ;
 a:visited{
   color: white;
 }
 justify-content: space-between;
}

`

class Nav extends Component  {
  componentDidMount() {
    this.props.getSettings();
  }

  render() {
    let nav = this.props.settings.navigation
    let itemsToRender; 
    if(nav){
      itemsToRender = nav.map(item => {
        return (
        <li key={item.label}>
        <Link style={{textDecoration:`none`}} to={item.url}>
        {item.label}
    
        </Link>
        </li>)
      })
    }
    const setting = this.props.settings


    return (
      <Navigation> 
       <div className="blog-title-name">
       <GlitchClip disabled={false}  duration="3s">
      {setting.title }

       </GlitchClip>
       </div>
      <ul>
        {itemsToRender}
      </ul>
      </Navigation>
    );
  }
}
const mapStateToProps = state => {
  return {
    settings: state.settingsReducer.settings,
    loading: state.settingsReducer.loading,
    error: state.settingsReducer.error
  };
};

export default connect(mapStateToProps, { getSettings })(Nav);
