import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Search/Search";
import Gallery from "./Gallery/Gallery";
import Photo from "./Detail/Photo";
import Home from "./Root/Home";
import NotFound from "./Root/NotFound";
import "../index.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Search />
          <Switch>
            <Route exact strict path="/" component={() => <Home />} />
            <Route exact path="/photos/:search" component={() => <Gallery />} />
            <Route exact path="/photo/:id" component={() => <Photo />} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
