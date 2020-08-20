import React, { Component } from "react";
import "./App.css";
import Sidenav from "./components/Sidenav";
import Floor from "./components/Floor";
import LeftDoor from "./components/LeftDoor";
import RightDoor from "./components/RightDoor";
// import { CSSTransition, transit } from "react-css-transition";
import { Link, animateScroll as scroll, Events, scrollSpy } from "react-scroll";
// import Elevator from "./components/Elevator";
// import { Link, animateScroll as scroll }
// from "react-scroll";
// interface Props {
//   active: true;
// }
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RightDoor />
        <LeftDoor />
        <Sidenav />
        <Floor />
      </div>
    );
  }
}

export default App;
