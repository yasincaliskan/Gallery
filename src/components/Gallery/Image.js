import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { setLoaded, setLoading } from "../../actions/loadingActions";
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
      setLoaded();
    });
  };

  render() {
    return (
      <div
        key={this.props.photo.id}
        onClick={this.handleClick}
        style={{ gridRowEnd: `span ${this.state.spanCount}` }}
      >
        <NavLink to={`/photo/${this.props.photo.id}`}>
          <img
            ref={this.photoRef}
            key={this.props.photo.id}
            src={this.props.photo.urls.small}
            alt=""
          />
        </NavLink>
      </div>
    );
  }
}

export default Loader(Image);
