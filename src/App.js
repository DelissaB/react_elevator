import React from "react";
import "./App.css";
import Sidenav from "./components/Sidenav";
import Floor from "./components/Floor";
// import LeftDoor from "./components/LeftDoor";
// import RightDoor from "./components/RightDoor";

class App extends React.Component {
  state = {
    title: "This will represent a floor",
  };

  // onChange() => {

  // }
  // componentDidMount() {
  //   this.setState({ door: true });
  // }
  render() {
    return (
      <div className="App">
        <Sidenav />

        {/* <RightDoor />

        <LeftDoor /> */}
        <Floor title={this.state.title} />
      </div>
    );
  }
}

export default App;
