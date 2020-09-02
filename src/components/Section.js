import React from "react";

export default function Section({
  title,
  subtitle,
  className,
  backgroundImage,
  color,
  dark,
  morocco,
  id,
}) {
  return (
    <div
      duration={1000}
      // style={{ backgroundColor: color }}
      // style={{ backgroundImage:  }}
      // className={"section" + (dark ? " section-dark" : "")}
      // className={"section" + (turkey ? " section-turkey" : "")}
    >
      <div className={className} id={id} backgroundImage={backgroundImage}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
