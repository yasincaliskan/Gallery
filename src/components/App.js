import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./Search/Search";
import Gallery from "./Gallery/Gallery";
import Photo from "./Detail/Photo";

class App extends Component {
  // getPagination = (way) => {
  //   if (way === "Prev") {
  //     this.setState({
  //       page: this.state.page - 1, //TODO: page==0 prev display:none
  //     });
  //   } else if (way === "Next") {
  //     this.setState({
  //       page: this.state.page + 1,
  //     });
  //   }
  //   this.onSearch();
  // };

  render() {
    return (
      <div>
        <Router>
          <Search/>
          <Route exact path="/" component={() => <Gallery />} />
          <Route exact path="/photos/:id" component={() => <Photo />} />
        </Router>
      </div>
    );
  }
}

export default App;
