import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
import "./search.css";
import { connect } from "react-redux";
import axios from "axios";

class Search extends Component {
  state = {
    search: "",
  };

  inputChange = async (event) => {
    const searchKey = event.target.value;
    await this.setState({
      search: searchKey,
    });
    console.log(this.state.search);
  };

  setPhotos = async () => {
    await axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: this.state.search,
          page: 1,
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
  };

  pressEnter = (event) => {
    if (event.key === "Enter") {
      this.setPhotos();
    }
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

          <select className="dropdown-container" defaultValue="mahmut">
            <option className="dropdown-item"  disabled hidden>
              Collections
            </option>
            <option className="dropdown-item">Mercedes</option>
            <option className="dropdown-item">Audi</option>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setSearchKey: (search) => dispatch(setSearchKey(search, 1))
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    setPhotos: (photos) => dispatch({ type: "SET_PHOTOS", photos }),
  };
};

export default connect(null, mapDispatchToProps)(Search);
