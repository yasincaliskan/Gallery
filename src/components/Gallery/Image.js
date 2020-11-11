import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {  setPhotoId } from "../../actions/photoActions";


class Image extends Component {
  constructor(props) {
    super(props);
    this.photoRef = React.createRef();
    this.state = {
      spanCount: 0,
      photoId: "",
    };
  }

  componentDidMount() {
    this.photoRef.current.addEventListener("load", () => {
      if (this.photoRef.current !== null) {
        const calculatedSpan =
          Math.round(this.photoRef.current.clientHeight / 5) + 2;
        this.setState({
          spanCount: calculatedSpan,
        });
      }
    });
  }

  handleClick = async (photoId) => {
    this.props.setPhotoId(photoId);
  };

  render() {
    return (
      <div
        key={this.props.photo.id}
        onClick={() => {
          this.handleClick(this.props.photo.id);
        }}
        style={{ gridRowEnd: `span ${this.state.spanCount}` }}
      >
        <Link to={`/photo/${this.props.photo.id}`}>
          <img
            ref={this.photoRef}
            key={this.props.photo.id}
            src={this.props.photo.urls.small}
            alt=""
          />
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPhotoId: (photoId) => dispatch(setPhotoId(photoId))
  };
};

export default connect(null, mapDispatchToProps)(Image);
