import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./Search/Search";
import Gallery from "./Gallery/Gallery";
import Photo from "./Detail/Photo";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Route path="/" component={() => <Search />} />
          <Route exact path="/" component={() => <Gallery />} />
          <Route exact path="/photo/:id" component={() => <Photo />} />
        </Router>
      </div>
    );
  }
}


export default App;
