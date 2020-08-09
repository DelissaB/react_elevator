import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Sidenav from "./components/Sidenav";
import Floor from "./components/Floor";
import Curtains from "./components/Curtains";


function App() {
  return (
    <div>
      <Sidenav />
      <Floor />
      <Curtains />
    </div>
    
  );
}

export default App;
