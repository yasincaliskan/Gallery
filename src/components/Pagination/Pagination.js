import React, { Component } from "react";
import { connect } from "react-redux";
import { setPageNumber } from "../../actions/searchActions";
import "./pagination.css";

class Pagination extends Component {
  render() {
    return (
      <div>
        <button
          className="prev-button"
          onClick={() => {
            this.props.setPageNumber("PREV");
          }}
        >
          Prev
        </button>

        <button
          className="next-button"
          onClick={() => {
            this.props.setPageNumber("NEXT");
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPageNumber: (pageWay) => dispatch(setPageNumber(pageWay)),
  };
};

export default connect(null, mapDispatchToProps)(Pagination);
