import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const BothDoors = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="App">
      {/* <h1>Left Door Entering? </h1> */}
      <div className="grids">
        <div
          data-aos="slide-right"
          className="leftDoor"
          data-aos-easing="ease-in-out"
        >
          1
        </div>
        <div
          data-aos="slide-left"
          className="rightDoor"
          data-aos-easing="ease-in-out"
        >
          1
        </div>
        {/* <div className="boxes">2</div> */}
      </div>
    </div>
  );
};

export default BothDoors;
