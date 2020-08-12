import React from "react"
// import Curtains from "./Curtains";


interface IFloorProps {}

function Floor(props: IFloorProps)  { 

  return (
    <div className="floors">
      <div id="box"><h1>Welcome to the Elevator! Please select a floor </h1></div>
      <div id="box6"><h1>This is the sixth floor</h1></div>
      <div id="box5"><h1>This is the fifth floor</h1></div>
      <div id="box4"><h1>This is the fourth floor</h1></div>
      <div id="box3"><h1>This is the third floor</h1></div>
      <div id="box2"><h1>This is the second floor</h1></div>
      <div id="box1"><h1>This is the first floor</h1></div>
      </div>
  )
}

export default Floor;



// className="section active" 