import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
      const calculatedSpan =
        Math.round(this.photoRef.current.clientHeight / 5) + 2;
      this.setState({
        spanCount: calculatedSpan,
      });
    });
  }

  render() {
    return (
      <div
        key={this.props.photo.id}
        onClick={() => this.props.getPhoto(this.props.photo.id)}
        style={{ gridRowEnd: `span ${this.state.spanCount}` }}
      >
        <NavLink to={`/photos/${this.props.photo.id}`}>
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

export default Image;
