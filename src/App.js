import React from "react";
import "./App.css";
import Sidenav from "./components/Sidenav";
import Floor from "./components/Floor";
import LeftDoor from "./components/LeftDoor";
import RightDoor from "./components/RightDoor";
import { CSSTransition, transit } from "react-css-transition";
import { Button } from "@material-ui/core";

const styles = {
  defaultStyle: {
    transform: "translate(0, 0)",
  },
  enterStyle: {
    transform: transit("translate(175px, 0)", 500, "ease-in-out"),
  },
  leaveStyle: {
    transform: transit("translate(0, 0)", 500, "ease-in-out"),
  },
  activeStyle: {
    transform: "translate(175px, 0)",
  },
};

const leftDoorStyle = {
  width: "50%",
  height: "100%",
  margin: 0,
  padding: 0,
  top: 0,
  left: 0,
};

// const LeftDoor = () => <div style={leftDoorStyle} />;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <Sidenav />

          <Floor />
        </div>

        <div>
          <CSSTransition {...leftDoorStyle} active={this.state.active}>
            <LeftDoor />
            <RightDoor />
          </CSSTransition>
          <button onClick={this.handleClick}>Trigger</button>
        </div>
      </div>
    );
  }
}

export default App;
