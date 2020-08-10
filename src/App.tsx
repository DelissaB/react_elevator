import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Sidenav from "./components/Sidenav";
// import Floor from "./components/Floor";
// import SlideDrawer from './components/SlideDrawer';
// import RightDoor from './components/RightDoor';
// import LeftDoor from './components/LeftDoor';
// import Curtains from "./components/Curtains";
import Elevator from "./components/Elevator";



class App extends React.Component {
  state = { drawerOpen: false }
  
  render() {
    return(

      <div>
          <Sidenav />
          {/* <Floor />    */}
          {/* <SlideDrawer />      */}
          <Elevator /> 
           {/* {Curtains /> 
          <RightDoor />
          <LeftDoor /> */} 
    </div> 
    ) 
  }


}

export default App;
