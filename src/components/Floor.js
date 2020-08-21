import React from "react";
import LeftDoor from "./LeftDoor";
import RightDoor from "./RightDoor";

const Floor = (props) => {
  return (
    <div className="floors">
      <div className="section6">
        <h1 onClick={props.showFloor}>{props.title}</h1>
      </div>
      <div className="section5">
        <h1 onClick={props.showFloor}>{props.title}</h1>
      </div>
      <div className="section4">
        <h1 onClick={props.showFloor}>{props.title}</h1>
      </div>
      <div className="section3">
        <h1 onClick={props.showFloor}>{props.title}</h1>
      </div>
      <div className="section2">
        <h1 onClick={props.showFloor}>{props.title}</h1>
      </div>
      <div className="section1">
        <h1 onClick={props.showFloor}>{props.title}</h1>
      </div>
      <LeftDoor />
      <RightDoor />
    </div>
  );
};

export default Floor;
