import React from "react"
// import Curtains from "./components/Curtains";

function Curtains() {
  return(
    <div className="curtain">
      <div className="curtain__wrapper">
        <input type="checkbox" checked></input>
        <div className="curtain__panel curtain__panel--left">
        </div> 
        <div className="curtain__prize">
        </div> 
        <div className="curtain__panel curtain__panel--right">
        </div>
      </div> 
    </div>
  )
}

export default Curtains;