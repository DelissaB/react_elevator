import React from "react"

interface ICurtainsProps {}

function Curtains(props: ICurtainsProps)  { 
  return (
    <div className="curtains">
      <div className="section6" id="box6"><h1>This is the sixth floor</h1></div>
      <div className="section6" id="box5"><h1>This is the fifth floor</h1></div>
      <div className="section4" id="box4"><h1>This is the fourth floor</h1></div>
      <div className="section3" id="box3"><h1>This is the third floor</h1></div>
      <div className="section2" id="box2"><h1>This is the second floor</h1></div>
      <div className="section active" id="box1"><h1>This is the first floor</h1></div>
      </div>
  )
}

export default Curtains;
