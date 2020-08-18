import React, { Component } from "react";
import { Link, animateScroll as scroll, Events, scrollSpy } from "react-scroll";

class Sidenav extends Component {
  render() {
    return (
      <div className="sidenav-content">
        <h1>Please Select a floor </h1>
        <ul className="sidenav-items">
          <Link
            className="sidenav-item"
            activeClass="active"
            to="box6"
            spy={true}
            smooth={true}
            duration={6000}
            onClick={() => {
              this.setState({ visible: false });
            }}
          >
            6
          </Link>

          <Link
            className="sidenav-item"
            activeClass="active"
            to="box5"
            spy={true}
            smooth={true}
            duration={5000}
            onClick={() => {
              this.setState({ visible: false });
            }}
          >
            5
          </Link>

          <Link
            className="sidenav-item"
            activeClass="active"
            to="box4"
            spy={true}
            smooth={true}
            duration={4000}
            onClick={() => {
              this.setState({ visible: false });
            }}
            // onClick={}
          >
            4
          </Link>

          <Link
            className="sidenav-item"
            activeClass="active"
            to="box3"
            spy={true}
            smooth={true}
            duration={3000}
            onClick={() => {
              this.setState({ visible: false });
            }}
          >
            3
          </Link>

          <Link
            className="sidenav-item"
            activeClass="active"
            to="box2"
            spy={true}
            smooth={true}
            duration={2000}
            onClick={() => {
              this.setState({ visible: false });
            }}
          >
            2
          </Link>

          <Link
            className="sidenav-item"
            activeClass="active"
            to="box1"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => {
              this.setState({ visible: false });
            }}
          >
            1
          </Link>
        </ul>
      </div>
    );
  }
}

export default Sidenav;
