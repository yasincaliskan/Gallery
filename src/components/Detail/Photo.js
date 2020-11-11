import React, { Component } from "react";
import { connect } from "react-redux";
import { getPhoto } from "../../api/PhotoAPI";
import { Loading } from "../Loading/Loading";
import "./photo.css";

class Photo extends Component {
  state = {
    photo: {},
  };
  componentDidMount() {
    getPhoto(this.props.photoId, (photo) => {
      this.setState({ photo: photo });
    });
  }

  render() {
    if (this.state.photo.urls === undefined) {
      return <Loading />;
    } else {
      return (
        <div className="photo-detail">
          <img
            id="photo-detail"
            src={this.state.photo.urls.regular}
            alt={this.state.photo.description}
          />
          <div className="detail-container">
            <div className="user">
              <img
                src={this.state.photo.user.profile_image.large}
                alt={this.state.photo.description}
              />
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
  };
};

export default connect(mapStateToProps)(Photo);
