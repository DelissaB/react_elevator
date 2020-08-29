import React from "react";
import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import Sidenav from "./components/Sidenav";
// import Floor from "./components/Floor";
// import Doors from "./components/Doors";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import floorText from "./FloorText";
// import shortid from "shortid";
// import LeftDoor from "./components/LeftDoor";
// import RightDoor from "./components/RightDoor";

class App extends React.Component {
  state = {
    isDoorVisible: false,
  };

  toggleDoor = () => {
    this.setState({ isDoorVisible: !this.state.isDoorVisible });
  };

  render() {
    const { isDoorVisible } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Section 1"
          subtime={floorText}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtime={floorText}
          dark={true}
          id="section2"
        />
        <Section
          title="Section 3"
          subtime={floorText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtime={floorText}
          dark={true}
          id="section4"
        />
        <Section
          title="Section 5"
          subtime={floorText}
          dark={true}
          id="section5"
        />
        <Section
          title="Section 6"
          subtime={floorText}
          dark={true}
          id="section6"
        />
        <Section
          title="Section 6"
          subtime={floorText}
          dark={true}
          id="section7"
        />

        {/* <Floor /> */}

        {/* <React.Fragment> */}
        {/* <Sidenav toggleDoor={this.toggleDoor} /> */}
        {/* <Doors isDoorVisible={isDoorVisible} /> */}
        {/* </React.Fragment> */}
      </div>
    );
  }
}

export default App;
