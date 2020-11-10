import React, { Component } from "react";
import "./gallery.css";
import "../HOC/loader.css";
import Image from "./Image";
import Pagination from "../Pagination/Pagination";
import Loader from "../HOC/Loader";
import { connect } from "react-redux";

class Gallery extends Component {
  render() {
    return (
      <div>
        <div className="gallery-container">
          {this.props.photos.map((photo) => (
            <Image key={photo.id} photo={photo} />
          ))}
        </div>
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    // isLoading: state.isLoading,
  };
};

export default Loader(connect(mapStateToProps)(Gallery));
