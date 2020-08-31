import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Navbar extends Component {
  render() {
    const { toggleHidden } = this.props;
    const { toggleDuration } = this.props;
    // console.log(this.props);
    return (
      <div className="sidenav-content">
        <Link
          className="sidenav-item"
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          duration={toggleDuration}
          onSetActive={toggleHidden}
        >
          1
        </Link>

        <Link
          className="sidenav-item"
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          // duration={5000}
          onSetActive={toggleHidden}
        >
          2
        </Link>

        <Link
          className="sidenav-item"
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          // duration={4000}
          onSetActive={toggleHidden}
        >
          3
        </Link>

        <Link
          className="sidenav-item"
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          // duration={3000}
          onSetActive={toggleHidden}
        >
          4
        </Link>

        <Link
          className="sidenav-item"
          activeClass="active"
          to="section5"
          spy={true}
          smooth={true}
          // duration={2000}
          onSetActive={toggleHidden}
        >
          5
        </Link>

        <Link
          className="sidenav-item"
          activeClass="active"
          to="section6"
          spy={true}
          smooth={true}
          // duration={1000}
          onSetActive={toggleHidden}
        >
          6
        </Link>

        <Link
          className="sidenav-item"
          activeClass="active"
          to="section7"
          spy={true}
          smooth={true}
          // duration={1000}
          onSetActive={toggleHidden}
        >
          ?
        </Link>
      </div>
    );
  }
}
