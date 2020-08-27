import React, { Component } from "react";
// import LeftDoor from "./LeftDoor";

class Doors extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <div>
        <LeftDoor door={this.state.open} />
      </div>
    );
  }
}

export default Doors;
