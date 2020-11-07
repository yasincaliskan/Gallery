import React, { Component } from "react";
import Pagination from "../Pagination/Pagination";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Image from './Image';
import { getPhoto } from "../../actions/photoActions";
import "./gallery.css";

class Gallery extends Component {
  state = {
    photoId: ""
  }

  getPhoto = (id) => {
    this.props.getPhoto(id);
  };

  render() {
    return (
      <div>
        <div className="gallery-container">
          {this.props.photos.map((photo) => 
            <Image photo={photo} getPhoto={this.getPhoto}/>
          )}
        </div>
        {/* <div className="pagination">
          <Pagination />
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhoto: (id) => dispatch(getPhoto(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
