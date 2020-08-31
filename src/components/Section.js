import React from "react";
// import Doors from "./Doors";

export default function Section({ title, subtitle, color, image, dark, id }) {
  return (
    <div
      duration={1000}
      style={{ backgroundColor: color }}
      // style={{ backgroundImage:  }}
      className={"section" + (dark ? " section-dark" : "")}
    >
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {/* <Doors /> */}
    </div>
  );
}
