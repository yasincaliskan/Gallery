import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
        Math.round(this.photoRef.current.clientHeight / 5) + 2; // add try catch
      this.setState({
        spanCount: calculatedSpan,
      });
    });
  }

  render() {
    const { photo } = this.props;
    const currentRoute = `/photos/${photo.id}`;
  
    return (
      <div 
      // onClick={() => {this.props.getDetail(photo.id)}} 
      onClick={() => {this.props.getPhotoId(photo.id)}}
      style={{ gridRowEnd: `span ${this.state.spanCount}` }}>
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
