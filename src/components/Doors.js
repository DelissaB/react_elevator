import React from "react";

class Doors extends React.Component {
  render() {
    const { isHidden } = this.props;
    return (
      <div className="doors">
        <div className={`leftDoor ${isHidden && "leftDoorOpening"}`}></div>
        <div className={` rightDoor ${isHidden && "rightDoorOpening"}`}></div>
      </div>
    );
  }
}

export default Doors;

// function Doors() {
//   return (
//     <div className="doors">
//       <div className="leftDoor"></div>
//       <div className="rightDoor"></div>
//     </div>
//   );
// }
// export default Doors;
