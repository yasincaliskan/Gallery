import React, { Component } from "react";
import "./loader.css";

const Loader = (WrappedComponent) => {
  return class Loader extends Component {
    render() {
      return (this.props.isLoading === true ? (
        <div className="loader">Loading..</div>
      ) :  <WrappedComponent {...this.props} /> )
    }
  };
};


export default Loader;
