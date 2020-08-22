import React from "react";
import { Link } from "react-scroll";

class Sidenav extends React.Component {
  render() {
    return (
      <div className="sidenav-content">
        <h1>Please Select a floor </h1>
        <ul className="sidenav-items">
          <li>
            <Link
              className="sidenav-item"
              activeClass="active"
              to="section6"
              spy={true}
              smooth={true}
              duration={6000}
              onClick={this.handleClick}
            >
              6
            </Link>
          </li>

          <li>
            <Link
              className="sidenav-item"
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              duration={5000}
              // onClick={handleClick}
            >
              5
            </Link>
          </li>

          <li>
            <Link
              className="sidenav-item"
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              duration={4000}
              // onClick={handleClick}
            >
              4
            </Link>
          </li>

          <li>
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
          </li>

          <li>
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
          </li>

          <li>
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
          </li>
        </ul>
      </div>
    );
  }
}

// Sidenav.propTypes = {
//   slide: React.PropTypes/func
// };

export default Sidenav;
