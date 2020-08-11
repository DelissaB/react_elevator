import React from "react"
// import Curtains from "./Curtains";

interface IFloorProps {}

function Floor(props: IFloorProps)  { 
  return (
    <div className="floors">
      <div className="section" id="box6"><h1>This is the sixth floor</h1></div>
      <div className="section" id="box5"><h1>This is the fifth floor</h1></div>
      <div className="section" id="box4"><h1>This is the fourth floor</h1></div>
      <div className="section" id="box3"><h1>This is the third floor</h1></div>
      <div className="section" id="box2"><h1>This is the second floor</h1></div>
      <div className="section active" id="box1"><h1>This is the first floor</h1></div>
      </div>
  )
}

export default Floor;
