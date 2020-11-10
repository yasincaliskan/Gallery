import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
import "./search.css";
import { connect } from "react-redux";
import axios from "axios";
import { setInitPage } from "../../actions/searchActions";
import { setPhotos } from '../../actions/photoActions';
import { getPhotos } from '../../api/PhotoAPI';
import { setLoaded, setLoading } from "../../actions/loadingActions";

class Search extends Component {
  state = {
    search: "",
    collection: "",
    collections: [
      { title: "Nature" , id:1},
      { title: "Technology", id:2 },
      { title: "Popular", id:3 },
    ],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.callPhotos();
    }
  }

  inputChange = (event) => {
    const searchKey = event.target.value;
     this.setState({
      search: searchKey,
    });
  };

  callPhotos = () => {
    setLoading();
    getPhotos(this.state.search, this.props.page, this.state.collection, (photos) => {
      this.props.setPhotos(photos);
    });
    setLoaded();
  }

  pressEnter = (event) => {
    if (event.key === "Enter") {
      this.props.setInitPage();
      this.callPhotos(); 
    }
  };

  onClick = () => {
    this.props.setInitPage();
      this.callPhotos();
  }

  handleChange = (e) => {
    this.setState({
      collection: e.target.value,
    });
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
            onKeyPress={this.pressEnter}
            placeholder="Query"
          />

          <select
            onChange={this.handleChange}
            className="dropdown-container"
            defaultValue="mahmut"
          >
            {this.state.collections.map((collection) => (
              <option key={collection.id} className="dropdown-item" value={collection.title}>
                {collection.title}
              </option>
            ))}
          </select>

          <Link to="/">
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
    // setLoader: (isLoading) => dispatch(setLoader(isLoading)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);