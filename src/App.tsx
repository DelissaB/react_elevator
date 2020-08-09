import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Sidenav from "./components/Sidenav";
import Floor from "./components/Floor";
// import Curtains from "./components/Curtains";
import Elevator from "./components/Elevator";


function App() {
  return (
    <div>
      <Sidenav />
      <Floor />
     <Elevator />
    </div> 
  )
}

export default App;
