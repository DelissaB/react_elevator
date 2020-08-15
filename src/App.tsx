import React, { Component } from 'react';
import './App.css';
import Sidenav from "./components/Sidenav";
// import Floor from "./components/Floor";
import Elevator from "./components/Elevator";
// import { Link, animateScroll as scroll }
// from "react-scroll";



class App extends Component {
  render() {
    return(
      <div className="App">
         {/* <Floor /> */}
        <Sidenav />
          <Elevator />
    </div> 
    ) 
  }
}

export default App;
