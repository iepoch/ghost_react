import React, { Component } from "react";
// import styled from "styled-components";
import { connect } from "react-redux";
import { getSettings } from "../../actions/settingsActions";
import { Link } from "react-router-dom";



class Nav extends Component {
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
        <Link to={item.url}>
        {item.label}
        </Link>
        </li>)
      })
    }
  


    return (
      <> 
      <ul>
        {itemsToRender}
      </ul>
      </>
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
