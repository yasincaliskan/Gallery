import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.photoRef = React.createRef();
    this.state = {
      spanCount: 0,
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
    const { photo } = this.props;
    const currentRoute = `/photos/${photo.id}`;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spanCount}` }}>
        <NavLink to={currentRoute}>
          <img
            ref={this.photoRef}
            key={photo.id}
            src={photo.urls.small}
            alt=""
          />
        </NavLink>
      </div>
    );
  }
}

export default Gallery;
