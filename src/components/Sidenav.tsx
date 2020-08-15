import React, { Component } from "react";
import { Link, animateScroll as scroll, Events, scrollSpy } from "react-scroll";




export default function Sidenav() {
  
  return (
    <div className="sidenav-content">
      <h1>Please Select a floor </h1>
      <ul className="sidenav-items">
        <button className="sidenav-item">      
            <Link
            activeClass="active"
            to="section6"
            spy={true}
            smooth={true}
            duration={6000}
            // onClick={handleClick}
            >
               6
          </Link> 
        </button>           
        <button className="sidenav-item">      
            <Link
            activeClass="active"
            to="box5"
            spy={true}
            smooth={true}
            duration={5000}
            
            >
             5
            </Link> 
          </button>           
          <button className="sidenav-item">      
            <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            duration={4000}
            
            >
             4
            </Link> 
          </button>           
          <button className="sidenav-item">      
            <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            duration={3000}
            >
             3
            </Link> 
          </button>           
          <button className="sidenav-item">      
            <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            duration={2000}
            >
             2
            </Link> 
          </button>           
          <button className="sidenav-item">      
            <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            duration={1000}
            >
             1
            </Link> 
          </button>           
      </ul>
    </div>
  );
    
  }




