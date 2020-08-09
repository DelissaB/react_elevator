import React from "react"

interface ICurtainsProps {}

function Curtains(props: ICurtainsProps)  { 
  return (
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
