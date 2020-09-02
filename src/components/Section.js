import React from "react";

export default function Section({ title, subtitle, color, dark, id }) {
  return (
    <div
      duration={1000}
      // style={{ backgroundColor: color }}
      // style={{ backgroundImage:  }}
      className={"section" + (dark ? " section-dark" : "")}
      // className={"section" + (turkey ? " section-turkey" : "")}
    >
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {/* <Doors /> */}
    </div>
  );
}
