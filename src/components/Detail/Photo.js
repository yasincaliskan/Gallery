import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../HOC/Loader";
import "./photo.css";

class Photo extends Component {
  render() {
    return (
      <div className="photo-detail">
        <img id="photo-detail" src={this.props.photo.urls.regular} alt="" />
        <div className="detail-container">
          <div className="user">
            <img src={this.props.photo.user.profile_image.large} alt="" />
            <h3>{this.props.photo.user.name}</h3>
            <h5>{this.props.photo.user.bio}</h5>
            <p>{this.props.photo.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photo: state.photo,
  };
};

export default Loader(connect(mapStateToProps)(Photo));
