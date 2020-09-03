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
          title="Welcome to the Grand Canyon National Park, Arizona"
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
          title="Welcome to the Cappadocia International Hot-Air Balloon Festival"
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
          title="Welcome to Victoria Falls, Zimbabwe, Africa"
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
          title="Cherry Blossom Gardens, Japan"
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
          title="Chicago, Illinois - Best City Ever"
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
          title="Pantai Merah, Bali, Indonesia"
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
          title="Chefchaouen–Morocco’s Blue City"
        >
          1
        </Link>
      </div>
    );
  }
}
