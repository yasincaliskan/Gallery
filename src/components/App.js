import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./Search/Search";
import Gallery from "./Gallery/Gallery";
import Photo from "./Detail/Photo";
import { connect } from "react-redux";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Route path="/" component={() => <Search isLoading={this.props.isLoading} />} />
          <Route exact path="/" component={() => <Gallery isLoading={this.props.isLoading} />} />
          <Route exact path="/photo/:id" component={() => <Photo isLoading={this.props.isLoading} />} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps)(App);
