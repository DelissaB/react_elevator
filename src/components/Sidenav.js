import React, { Component } from "react";
import { Link } from "react-scroll";

class Sidenav extends Component {
  render() {
    const { toggleHidden } = this.props;
    return (
      <div className="sidenav-content">
        <h1>Please Select a floor </h1>
        <div className="sidenav-items">
          <Link
            className="sidenav-item"
            activeClass="active"
            to="section6"
            spy={true}
            smooth={true}
            duration={6000}
            onClick={toggleHidden}
          >
            6
          </Link>

          <Link
            className="sidenav-item"
            activeClass="active"
            to="section5"
            spy={true}
            smooth={true}
            duration={5000}
            onClick={toggleHidden}
          >
            5
          </Link>

          <Link
            className="sidenav-item"
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            duration={4000}
            onClick={toggleHidden}
          >
            4
          </Link>

          <Link
            className="sidenav-item"
            activeClass="active"
            to="section3"
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
            to="section2"
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
            to="section1"
            spy={true}
            smooth={true}
            duration={1000}
            // onClick={handleClick}
          >
            1
          </Link>
        </div>
      </div>
    );
  }
}

// Sidenav.propTypes = {
//   slide: React.PropTypes/func
// };

export default Sidenav;
