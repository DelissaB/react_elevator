import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Floor from "./components/Floor";
import LeftDoor from "./components/LeftDoor";
import RightDoor from "./components/RightDoor";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bool: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      bool: !prevState.bool,
    }));
  };

  render() {
    const {
      toggle,
      state: { bool },
    } = this;

    return (
      <div>
        <Router></Router>

        <Sidenav />

        <RightDoor />
        <LeftDoor />

        <Floor />
      </div>
    );
  }
}

export default App;
