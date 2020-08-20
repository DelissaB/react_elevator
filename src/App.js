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
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  toggleShow = () => {
    this.setState((state) => ({ isShow: !state.isShow }));
  };
  render() {
    const title = "This is a floor";
    return (
      <div className="App">
        <Sidenav />
        <div>
          {this.state.isShow ? <RightDoor className="rightDoor" /> : null}
        </div>
        <LeftDoor />
        <Floor title={title} />
      </div>
    );
  }
}

export default App;
