import React from "react";
import "./App.css";

import Doors from "./components/Doors";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
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
        />
        <Section
          className="section-japan"
          title="Welcome to the fourth floor!"
          dark={false}
          id="section4"
        />
        <Section
          className="section-africa"
          title="Welcome to the fifth floor!"
          dark={false}
          id="section5"
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
        />
      </div>
    );
  }
}

export default App;
