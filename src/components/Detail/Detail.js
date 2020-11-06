import React, { Component } from "react";
import axios from "axios";
import "./detail.css";

class Detail extends Component {
  state = {
    photoId: "",
    photo: {},
  };

  componentDidMount() {
    axios.get(`https://api.unsplash.com/photos/${this.props.photoId}`, {
        headers: {
          Authorization:
            "Client-ID Mm0ZkI5cVVOTWwfBKLCoQHmrUEC1Ecao15N1xsl6hN0",
        },
      })
      .then((resultPhoto) => {
        this.setState({
          photo: resultPhoto,
        });
      });
  }

  render() {
    return (
      <div className="photo-detail">
        <img id="photo-detail" src={this.state.photo.data.urls.regular} alt="" />
        <div className="detail-container">
          <div className="user">
            <img src={this.state.photo.data.user.profile_image.large} alt="" />
            <h3>{this.state.photo.data.user.first_name}</h3>
            <h1>{this.state.photo.data.alt_description}</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Detail;
