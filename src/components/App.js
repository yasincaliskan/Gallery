import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./Search/Search";
import Gallery from "./Gallery/Gallery";
import Photo from "./Detail/Photo";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Search />
          <Route exact strict path="/" component={() => <Home />} />
          <Route exact path="/photos/:search" component={() => <Gallery />} />
          <Route exact path="/photo/:id" component={() => <Photo />} />
        </Router>
      </div>
    );
  }
}

export default App;
