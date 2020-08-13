import React, { Component } from 'react';
import './App.css';
import Sidenav from "./components/Sidenav";
import Elevator from "./components/Elevator";
import { Link, animateScroll as scroll }
from "react-scroll";
import Floor from "./components/Floor";


class App extends Component {
  render() {
    return(
      <div className="App">
        <Sidenav />
        
        <Link
         to="section6"
        smooth={true}
        duration={1000}/>
       

        <Link
         to="section5"
        smooth={true}
        duration={2000}/>

        <Link
         to="section4"
        smooth={true}
        duration={3000}/>
        

        <Link
         to="section3"
        smooth={true}
         duration={4000}/>
         

        <Link
         to="section2" 
         smooth={true}
         duration={5000}/>  

        <Link
         to="section1" smooth={true}
         duration={6000}/>
         


          <Floor />
          <Elevator />
          
    </div> 
    ) 
  }
}

export default App;
