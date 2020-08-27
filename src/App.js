import React from "react";
import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Floor from "./components/Floor";
import LeftDoor from "./components/LeftDoor";
import RightDoor from "./components/RightDoor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      door: false,
    };
  }

  // handleClick = () => {
  //   this.setStaet({});
  // };

  render() {
    return (
      <div className="App">
        <Sidenav />

        <Floor />

        <LeftDoor />

        <RightDoor />
      </div>
    );
  }
}

export default App;
