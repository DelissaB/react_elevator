import React, { Component } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";




export default class Sidenav extends Component {
  render() {
    return (
      <div className="sidenav-content">
        <h1>Please Select a floor </h1>
        <ul className="sidenav-items">
          
        <button className="sidenav-item"> 6</button>
    
        <button className="sidenav-item"> 5</button>
    
    
        <button className="sidenav-item"> 4</button>
    
    
        <button className="sidenav-item"> 3</button>
    
    
          <button className="sidenav-item"> 2</button>
      
    
        <button className="sidenav-item"> 1</button>
          
        </ul>
      </div>
    );
  }
}



