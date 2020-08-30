import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Navbar extends Component {
  render() {
    const { toggleHidden } = this.props;
    console.log(this.props);
    return (
      <nav className="sidenav" id="navbar">
        <div className="sidenav-content">
          <ul className="sidenav-items">
            <li className="sidenav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={6000}
                onSetActive={toggleHidden}
              >
                1
              </Link>
            </li>
            <li className="sidenav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={5000}
                onSetActive={toggleHidden}
              >
                2
              </Link>
            </li>
            <li className="sidenav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={4000}
                onSetActive={toggleHidden}
              >
                3
              </Link>
            </li>
            <li className="sidenav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={3000}
                onSetActive={toggleHidden}
              >
                4
              </Link>
            </li>
            <li className="sidenav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                onSetActive={toggleHidden}
              >
                5
              </Link>
            </li>
            <li className="sidenav-item">
              <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onSetActive={toggleHidden}
              >
                6
              </Link>
            </li>
            <li className="sidenav-item">
              <Link
                activeClass="active"
                to="section7"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                onSetActive={toggleHidden}
              >
                ?
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
