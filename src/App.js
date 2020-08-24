import React from "react";
import "./App.css";
import Sidenav from "./components/Sidenav";
import Floor from "./components/Floor";
import LeftDoor from "./components/LeftDoor";
import RightDoor from "./components/RightDoor";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1500);
  }
  render() {
    return (
      <div className="App">
        <Sidenav />

        <RightDoor />

        <LeftDoor isLoading={this.state.isLoading} />

        <Floor />
      </div>
    );
  }
}

export default App;
