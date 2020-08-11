import React from 'react';
import './App.css';
// import Sidenav from "./components/Sidenav";
import Elevator from "./components/Elevator";

class App extends React.Component {
  render() {
    return(

      <div>
          <Elevator />
          {/* <Sidenav /> */}
    </div> 
    ) 
  }
}

export default App;
