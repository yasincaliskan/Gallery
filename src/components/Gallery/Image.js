import React, { Component } from "react";
import { Link } from "react-router-dom";


class Image extends Component {
  constructor(props) {
    super(props);
    this.photoRef = React.createRef();
    this.state = {
      spanCount: 0
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

  render() {
    return (
      <div
        key={this.props.photo.id}
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


export default Image;
