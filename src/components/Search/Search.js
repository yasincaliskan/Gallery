import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
import "./search.css";
import { connect } from "react-redux";
import { setInitPage } from "../../actions/searchActions";
import { setPhotos } from "../../actions/photoActions";
import { getPhotos } from "../../api/PhotoAPI";

class Search extends Component {
  state = {
    search: "",
    collection: "Nature",
    collections: [
      { title: "Nature", id: 1 },
      { title: "Technology", id: 2 },
      { title: "Popular", id: 3 },
    ],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.callPhotos();
    }
  }

  inputChange = (event) => {
    const searchKey = event.target.value;
    this.setState({ search: searchKey });
  };

  callPhotos = () => {
    getPhotos(
      this.state.search,
      this.props.page,
      this.state.collection,
      (photos) => {
        this.props.setPhotos(photos);
      }
    );
  };

  onClick = () => {
    this.props.setInitPage();
    this.callPhotos();
  };

  render() {
    return (
      <div className="nav-container">
        <Link to="/">
          <img className="logo" src={logo} alt="gallery-logo"></img>
        </Link>
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            onChange={this.inputChange}
            placeholder="Query"
          />

          <select
            onChange={this.handleChange}
            className="dropdown-container"
            defaultValue="mahmut"
          >
            {this.state.collections.map((collection) => (
              <option
                key={collection.id}
                className="dropdown-item"
                value={collection.title}
              >
                {collection.title}
              </option>
            ))}
          </select>

          <Link to={`/photos/${this.state.search}`}>
            <button className="search-button" onClick={this.onClick}>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
