import React, { Component } from "react";
import Pagination from "../Pagination/Pagination";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getPhoto } from "../../actions/photoActions";
import "./photolist.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.photoRef = React.createRef();
    this.state = {
      spanCount: 0,
      photoId: "",
    };
  }

  componentDidMount() {
    // this.photoRef.current.addEventListener("load", () => {
    //   const calculatedSpan =
    //     Math.round(this.photoRef.current.clientHeight / 5) + 2;
    //   this.setState({
    //     spanCount: calculatedSpan,
    //   });
    // });
  }

  getPhoto = (id) => {
    this.props.getPhoto(id);
  };

  render() {
    return (
      <div>
        <div className="gallery-container">
          {this.props.photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => this.getPhoto(photo.id)}
              style={{ gridRowEnd: `span ${this.state.spanCount}` }}
            >
              <NavLink to={`/photos/${photo.id}`}>
                <img
                  ref={this.photoRef}
                  key={photo.id}
                  src={photo.urls.small}
                  alt=""
                />
              </NavLink>
            </div>
          ))}
        </div>
        {/* <div className="pagination">
          <Pagination />
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhoto: (id) => dispatch(getPhoto(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
