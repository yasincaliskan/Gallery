import React, { Component } from "react";
import { Link } from "react-router-dom";
import { setLoaded, setLoading } from "../../actions/loadingActions";
import { setPhoto } from "../../actions/photoActions";
import { getPhoto } from "../../api/PhotoAPI";
import Loader from "../HOC/Loader";

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

  handleClick = (e) => {
    setLoading();
    this.setState({
      photoId: e.target.key,
    });
    getPhoto(this.state.photoId, (photo) => {
      this.props.setPhoto(photo);
      console.log(photo);
    })
  };

  render() {
    return (
      <div
        key={this.props.photo.id}
        onClick={this.handleClick}
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
    setPhoto: (photo) => dispatch(setPhoto(photo)),
  };
}

export default Loader(Image);
