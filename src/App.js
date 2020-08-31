import React from "react";
import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import Sidenav from "./components/Sidenav";
// import Floor from "./components/Floor";
import Doors from "./components/Doors";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import floorText from "./FloorText";

// import shortid from "shortid";
// import LeftDoor from "./components/LeftDoor";
// import RightDoor from "./components/RightDoor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      currentFloor: "active",
    };
  }

  toggleHidden = () => {
    this.setState({ isHidden: true });
    setTimeout(() => {
      this.setState({ isHidden: false });
    }, 3000);
  };

  toggleDuration = (floor) => {
    this.setState({ currentFloor: "not active" });
    console.log("this is the duration function");
  };

  render() {
    console.log(this.state);
    // console.log(this.state);
    return (
      <div className="App">
        <Navbar
          toggleHidden={this.toggleHidden}
          toggleDuration={this.toggleDuration}
        />

        <Doors isHidden={this.state.isHidden} />
        <Section
          title="This is the first floor"
          subtime={floorText}
          dark={true}
          id="section1"
          // image="/Users/delissa/Actualize/react_elevator/public/Turkey.jpg"
          color="hotpink"
        />
        <Section
          title="This is the second floor"
          subtime={floorText}
          dark={true}
          id="section2"
          color="green"
        />
        <Section
          title="This is the third floor"
          subtime={floorText}
          dark={true}
          id="section3"
          color="purple"
        />
        <Section
          title="This is the fourth floor"
          subtime={floorText}
          dark={true}
          id="section4"
          color="yellow"
        />
        <Section
          title="This is the fifth floor"
          subtime={floorText}
          dark={true}
          id="section5"
          color="blue"
        />
        <Section
          title="This is the sixth floor"
          subtime={floorText}
          dark={true}
          id="section6"
          color="red"
        />
        <Section
          title="Section 6"
          subtime={floorText}
          dark={true}
          id="section7"
          color="orange"
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
