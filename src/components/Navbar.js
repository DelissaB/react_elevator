import React, { Component } from "react";
import { Link, Events } from "react-scroll";

export default class Navbar extends Component {
  handleDuration = (distance) => {
    const value = Math.abs(distance);
    const numberOfFloors = value / 980;
    return numberOfFloors * 1000;
  };

  render() {
    const { toggleHidden } = this.props;
    const { toggleDuration } = this.props;

    Events.scrollEvent.register("end", function (to, element) {
      toggleHidden();
      console.log("end", to, element);
    });

    return (
      <div className="sidenav-content">
        <Link
          className="sidenav-item"
          activeClass="active"
          to="section7"
          spy={true}
          smooth={true}
          duration={this.handleDuration}
        >
          7
        </Link>

        <Link
          className="sidenav-item"
          activeClass="active"
          to="section6"
          spy={true}
          smooth={true}
          duration={this.handleDuration}
        >
          6
        </Link>

        <Link
          className="sidenav-item"
          activeClass="active"
          to="section5"
          spy={true}
          smooth={true}
          duration={this.handleDuration}
        >
          5
        </Link>

        <Link
          className="sidenav-item"
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          duration={this.handleDuration}
        >
          4
        </Link>

        <Link
          className="sidenav-item"
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          duration={this.handleDuration}
        >
          3
        </Link>

        <Link
          className="sidenav-item"
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          duration={this.handleDuration}
        >
          2
        </Link>

        <Link
          className="sidenav-item"
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          duration={this.handleDuration}
        >
          1
        </Link>
      </div>
    );
  }
}
