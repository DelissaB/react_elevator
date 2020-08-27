import React, { Component } from "react";
import "./App.css";
import Sidenav from "./components/Sidenav";
import Floor from "./components/Floor";
import LeftDoor from "./components/LeftDoor";
import RightDoor from "./components/RightDoor";
// import Elevator from "./components/Elevator";
// import { Link, animateScroll as scroll }
// from "react-scroll";

class App extends Component {
  // handleChange() {
  //   alert("This should click");
  // }

  render() {
    return (
      <div className="App">
        <Sidenav />
        <LeftDoor />
        <RightDoor />
        <Floor />
      </div>
    );
  }
}

export default App;
