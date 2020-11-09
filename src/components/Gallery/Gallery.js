import React, { Component } from "react";
import "./gallery.css";
import "../HOC/loader.css";
import Image from "./Image";
import Pagination from "../Pagination/Pagination";
import Loader from "../HOC/Loader";
import { connect } from "react-redux";
import { getPhoto } from "../../actions/photoActions";

class Gallery extends Component {
  render() {
    return (
      <div>
        <div className="gallery-container">
          {this.props.photos.map((photo) => (
            <Image
              key={photo.id}
              photo={photo}
              getPhoto={() => {
                this.props.getPhoto(photo.id);
              }}
            />
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

const mapDispatchToProps = (dispatch) => {
  return {
    getPhoto: (id) => dispatch(getPhoto(id)),
  };
};

export default Loader(connect(mapStateToProps, mapDispatchToProps)(Gallery));
