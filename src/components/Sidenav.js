import React, { Component } from "react";
import { Link, animateScroll as scroll, Events, scrollSpy } from "react-scroll";

class Sidenav extends React.Component {
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
            // onClick={handleClick}
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
            // onClick={handleClick}
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
            // onClick={handleClick}
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
            // onClick={handleClick}
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
            // onClick={handleClick}
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
            // onClick={handleClick}
          >
            1
          </Link>
        </ul>
      </div>
    );
  }
}

// Sidenav.propTypes = {
//   slide: React.PropTypes/func
// };

export default Sidenav;
