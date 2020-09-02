import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getSettings } from "../../actions/settingsActions";
import { Link } from "react-router-dom";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;

 >.blog-title-name {
  font-size: 30px;
  justify-content: flex-start;
  font-weight: bold;
  color: #44444;
  margin: 20px;
}

ul {
  display: flex;
 flex-direction: row;
}
li {
list-style: none;
 display: flex;
 margin: 20px;
 font-size: 20px;
 color:#444444 ;
 a:visited{
   color: #444444;
 }
 justify-content: space-between;
}

`

class SubNav extends Component  {
  componentDidMount() {
    this.props.getSettings();
  }

  render() {
    let nav = this.props.settings.secondary_navigation
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
      {setting.title }
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

export default connect(mapStateToProps, { getSettings })(SubNav);
