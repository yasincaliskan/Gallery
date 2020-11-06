import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

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
        console.log(this.state);
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
              {/* <img src={photo.data.user.profile_image.large} alt="" />
            <h3>{photo.data.user.first_name}</h3>
            <h1>{photo.data.alt_description}</h1> */}
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
  };
};

export default connect(mapStateToProps, null)(Photo);