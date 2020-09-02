import React from "react";
import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import Sidenav from "./components/Sidenav";
// import Floor from "./components/Floor";
import Doors from "./components/Doors";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import floorText from "./FloorText";
// import Background from "./components/Background";

// import turkey from "../images/turkey.jpg";

// import shortid from "shortid";
// import LeftDoor from "./components/LeftDoor";
// import RightDoor from "./components/RightDoor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      // isFloorActive: false,
    };
  }

  toggleHidden = (e, v) => {
    this.setState({ isHidden: true });
    setTimeout(() => {
      this.setState({ isHidden: false });
    }, 3000);
  };

  render() {
    return (
      <div className="App">
        <Navbar
          toggleHidden={this.toggleHidden}
          toggleDuration={this.toggleDuration}
        />

        <Doors isHidden={this.state.isHidden} />
        <Section
          className="section-morocco"
          title="Welcome to the first floor!"
          dark={true}
          id="section1"
        />
        <Section
          className="section-dark"
          title="Welcome to the second floor!"
          dark={false}
          id="section2"
        />
        <Section
          className="section-chicago"
          title="Welcome to the third floor!"
          dark={false}
          id="section3"
          // color="purple"
        />
        <Section
          className="section-japan"
          title="Welcome to the fourth floor!"
          dark={false}
          id="section4"
          // color="yellow"
        />
        <Section
          className="section-africa"
          title="Welcome to the fifth floor!"
          dark={false}
          id="section5"
          // color="blue"
        />
        <Section
          className="section-turkey"
          title="Welcome to the sixth floor!"
          dark={false}
          id="section6"
          color="red"
        />
        <Section
          className="section-grandcanyon"
          title="Welcome to the seventh floor!"
          dark={false}
          id="section7"
          // color="orange"
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
