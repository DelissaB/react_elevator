import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";




export default class Sidenav extends Component {
  render() {
    return (
      <div className="sidenav-content">
        <h1>Please Select a floor </h1>
        <ul className="sidenav-items">
          <li className="sidenav-item">      
              <Link
              activeClass="active"
              to="section6"
              spy={true}
              smooth={true}
              duration={1000}
              >
                 6
            </Link> 
          </li>           
          <li className="sidenav-item">      
              <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              duration={1000}
              >
               5
              </Link> 
            </li>           
            <li className="sidenav-item">      
              <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              duration={1000}
              >
               4
              </Link> 
            </li>           
            <li className="sidenav-item">      
              <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              duration={1000}
              >
               3
              </Link> 
            </li>           
            <li className="sidenav-item">      
              <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              duration={1000}
              >
               2
              </Link> 
            </li>           
            <li className="sidenav-item">      
              <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              duration={1000}
              >
               1
              </Link> 
            </li>           
        </ul>
      </div>
    );
  }
}



