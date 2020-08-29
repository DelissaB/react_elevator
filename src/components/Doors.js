import React from "react";

class Doors extends React.Component {
  render() {
    const { isHidden } = this.props;
    return (
      <div className={`doors_wrapper ${isHidden && "doors_wrapper-visible"}`}>
        <div className="doors">
          <div className="leftDoor"></div>
          <div className="rightDoor"></div>
        </div>
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
