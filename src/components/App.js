import React, { Component } from "react";
import Search from "./Search/Search";
import "./app.css";

class App extends Component {
  onSearch = (search) => {
    console.log("app: " + search);
  };
  render() {
    return (
      <div className="app-container">
        <Search onSearch={this.onSearch} />
      </div>
    );
  }
}

export default App;
