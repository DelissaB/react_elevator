import React from "react";
import "./App.css";
import Sidenav from "./components/Sidenav";
import Floor from "./components/Floor";
import LeftDoor from "./components/LeftDoor";
import RightDoor from "./components/RightDoor";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDoorOpen: true,
    };
  }
  componentDidMount() {
    this.setState({ door: true });
  }
  render() {
    const title = "This is a floor";
    return (
      <div className="App">
        <Sidenav />

        <RightDoor />

        <LeftDoor />
        <Floor title={title} />
      </div>
    );
  }
}

export default App;
