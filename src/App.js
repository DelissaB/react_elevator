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
    };
  }

  toggleHidden = () => {
    this.setState({ isHidden: true });
    setTimeout(() => {
      this.setState({ isHidden: false });
    }, 3000);
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Navbar toggleHidden={this.toggleHidden} />
        {/* onClick={this.toggleHidden.bind(this)}  */}
        {/* {!this.state.isHidden && <Doors />} */}
        <Doors isHidden={this.state.isHidden} />
        <Section
          title="Section 1"
          subtime={floorText}
          dark={true}
          id="section1"
          color="pink"
        />
        <Section
          title="Section 2"
          subtime={floorText}
          dark={true}
          id="section2"
          color="green"
        />
        <Section
          title="Section 3"
          subtime={floorText}
          dark={true}
          id="section3"
          color="purple"
        />
        <Section
          title="Section 4"
          subtime={floorText}
          dark={true}
          id="section4"
          color="yellow"
        />
        <Section
          title="Section 5"
          subtime={floorText}
          dark={true}
          id="section5"
          color="blue"
        />
        <Section
          title="Section 6"
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
