import React, { Component } from "react";

class Btn extends Component {
  render() {
    return (
      <div className="btn-container">
        <button className="btn" onClick={this.props.prev}>
          Prev
        </button>
        <button className="btn" onClick={this.props.next}>
          Next
        </button>
      </div>
    );
  }
}

export default Btn;
