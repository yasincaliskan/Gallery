import React, { Component } from "react";
import "./loader.css";
import { connect } from 'react-redux';

const Loader = (WrappedComponent) => {
  return class Loader extends Component {
    render() {
      return (this.props.isLoading === true ? (
        <div className="loader">Loading..</div>
      ) :  <WrappedComponent {...this.props} /> )
    }
  };
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(Loader);
