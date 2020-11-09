import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from '../HOC/Loader';
import axios from "axios";
import './photo.css';

class Photo extends Component {
  state = {
    photo: {},
  };

  async componentDidMount() {
    await axios
      .get(`https://api.unsplash.com/photos/${this.props.photoId}`, {
        headers: {
          Authorization:
            "Client-ID Mm0ZkI5cVVOTWwfBKLCoQHmrUEC1Ecao15N1xsl6hN0",
        },
      })
      .then((resultPhoto) => {
        this.setState({ photo: resultPhoto.data });
      });
  }

  render() {
    if (this.state.photo.urls === undefined) {
      return <div> Loading.. </div>;
    } else {
      return (
        <div className="photo-detail">
          <img id="photo-detail" src={this.state.photo.urls.regular} alt="" />
          <div className="detail-container">
            <div className="user">
              <img src={this.state.photo.user.profile_image.large} alt="" />
            <h3>{this.state.photo.user.name}</h3>
            <h5>{this.state.photo.user.bio}</h5>
            <p>{this.state.photo.description}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    photoId: state.photoId,
    isLoading : state.isLoading
  };
};

export default Loader(connect(mapStateToProps, null)(Photo));
