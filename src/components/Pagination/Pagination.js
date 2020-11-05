import React, {Component} from "react";

class Pagination extends Component {
  findWay = (way) => {
    this.props.getPagination(way);
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.findWay("Prev");
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            this.findWay("Next");
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
