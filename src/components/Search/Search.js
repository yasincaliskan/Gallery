import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
import "./search.css";
import { connect } from "react-redux";
import axios from "axios";
import { setPhotos, setLoader, setInitPage } from "../../actions/searchActions";

class Search extends Component {
  state = {
    search: "",
    collection: "",
    collections: [
      { title: "Nature" },
      { title: "Technology" },
      { title: "Popular" },
    ],
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.setPhotos();
    }
  }

  inputChange = async (event) => {
    const searchKey = event.target.value;
    await this.setState({
      search: searchKey,
    });
  };

  setPhotos = () => {
    // this.props.setLoader(true);
    axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: this.state.search,
          page: this.props.page,
          collections: this.state.collection,
        },
        headers: {
          Authorization:
            "Client-ID Mm0ZkI5cVVOTWwfBKLCoQHmrUEC1Ecao15N1xsl6hN0",
        },
      })
      .then((resultPhotos) => {
        this.props.setPhotos(resultPhotos);
      })
      .catch((error) => {
        console.log(error);
      });
    // this.props.setLoader(false);
  };

  pressEnter = (event) => {
    if (event.key === "Enter") {
      this.props.setInitPage();
      this.setPhotos();
    }
  };

  handleChange = (e) => {
    this.setState({
      collection: e.target.value,
    });
  };

  render() {
    return (
      <div className="nav-container">
        <Link to="/">
          <img className="logo" src={logo} alt=""></img>
        </Link>
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            onChange={this.inputChange}
            onKeyPress={this.pressEnter}
            placeholder="Query"
          />

          <select
            onChange={this.handleChange}
            className="dropdown-container"
            defaultValue="mahmut"
          >
            {this.state.collections.map((collection) => (
              <option className="dropdown-item" value={collection.title}>
                {collection.title}
              </option>
            ))}
          </select>

          <Link to="/">
            <button className="search-button" onClick={this.setPhotos}>
              <p>SEARCH</p>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPhotos: (photos) => dispatch(setPhotos(photos)),
    setInitPage: () => dispatch(setInitPage()),
    // setLoader: (isLoading) => dispatch(setLoader(isLoading)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
