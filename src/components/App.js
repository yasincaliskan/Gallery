import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Search from "./Search/Search";
import PhotoList from "./Gallery/PhotoList";
import Detail from "./Detail/Detail";

class App extends Component {
  state = {
    photos: [],
    page: 1,
    photoId: "",
    search: "",
  };

  getSearchKey = (searchKey) => {
    this.setState({
      search: searchKey,
    });
    this.onSearch();
  };

  onSearch = async () => {
      console.log(this.state.search);
      await axios
        .get("https://api.unsplash.com/search/photos", {
          params: {
            query: this.state.search,
            page: this.state.page,
          },
          headers: {
            Authorization:
              "Client-ID Mm0ZkI5cVVOTWwfBKLCoQHmrUEC1Ecao15N1xsl6hN0",
          },
        })
        .then((resultPhotos) => {
          console.log("app js log");
          console.log(resultPhotos.data.results);
          this.setState({
            photos: resultPhotos.data.results,
          });
        })
        .catch((error) => {
          console.log(error);
        });
  };

  getPagination = (way) => {
    if (way === "Prev") {
      this.setState({
        page: this.state.page - 1, //TODO: page==0 prev display:none
      });
    } else if (way === "Next") {
      this.setState({
        page: this.state.page + 1,
      });
      console.log(this.state.page);
    }
    this.onSearch();
  };

  getPhotoId = (photoId) => {
    this.setState({
      photoId: photoId
    })
  };

  render() {
    return (
      <div>
        <Router>
          <Search getSearchKey={this.getSearchKey} />
          <Route
            exact
            path="/"
            component={() => (
              <PhotoList
                getDetail={this.getDetail}
                photos={this.state.photos}
                getPagination={this.getPagination}
                getPhotoId={this.getPhotoId}
              />
            )}
          />

          <Route
            exact
            path="/photos/:id"
            component={() => (
              <Detail
                photoId={this.state.photoId}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
