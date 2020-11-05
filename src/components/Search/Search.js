import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
import "./search.css";

class Search extends Component {
  state = {
    search: "",
  };

  inputChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  searchImage = () => {
    this.props.getSearchKey(this.state.search);
    console.log("search.js");
    console.log(this.state.search);
  };

  pressEnter = (event) => {
    if (event.key === "Enter") {
      this.searchImage();
    }
  };

  render() {
    return (
      <div className="nav-container">
        <img className="logo" src={logo} alt=""></img>
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            onChange={this.inputChange}
            onKeyPress={this.pressEnter}
            placeholder="Query"
          />

          <select className="dropdown-container">
            <option className="dropdown-item" selected disabled hidden>
              Collections
            </option>
            <option className="dropdown-item">Mercedes</option>
            <option className="dropdown-item">Audi</option>
          </select>

          <Link to="/">
            <button className="search-button" onClick={this.searchImage}>
              <p>SEARCH</p>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Search;
