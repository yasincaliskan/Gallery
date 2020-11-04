import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Search from "./Search/Search";
import PhotoList from "./Gallery/PhotoList";
import Detail from "./Gallery/Detail";


class App extends Component {
  state = {
    photos: [],
    photoDetail: {} 
  };

  onSearch = async (search) => {
    await axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: search,
        },
        headers: {
          Authorization:
            "Client-ID Mm0ZkI5cVVOTWwfBKLCoQHmrUEC1Ecao15N1xsl6hN0",
        },
      })
      .then((resultPhotos) => {
        this.setState({
          photos: resultPhotos.data.results,
        });
      });
  };

  render() {
    return (
      <div>
        <Search onSearch={this.onSearch} />
        <Router>
          <Route
            exact
            path="/"
            component={() => <PhotoList photos={this.state.photos} />}
          />

          <Route
            exact
            path="/photos/:id"
            component={() => <Detail photoDetail={this.state.photoDetail} />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
