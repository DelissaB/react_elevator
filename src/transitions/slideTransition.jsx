import React from "react";

export default class SlideTransition extends React.Component {
  constructor(props) {
    super(props);

    this.defaultStyle = {
      transitionProperty: "transform",
      transition: `${this.props.duration}ms ease-in-out`,
    };

    this.transitionStyle = {
      entering: {
        transform: "translateX(-100)",
        position: "absolute",
      },
      entered: {
        transform: "translateX(0)",
      },
      exiting: {
        transform: "translateX(0)",
      },
      exited: {
        transform: "translateX(100)",
      },
    };
  }
}
/* ENTER TRANSITION */
/* Declare transition start properties*/
/* .slide-enter {
  transform: translateX(-100vw);
  opacity: 0;
  position: absolute;
}

/* Declare transition properties */
/* .slide-enter.slide-enter-active {
  transform: translateX(0);
  opacity: 1;
  transition: all 300ms linear 300ms;
} */

/* EXIT TRANSITION */
/* .slide-exit {
  transform: translateX(0);
  opacity: 1;
} */

/* .slide-exit.slide-exit-active {
  transform: translateX(100vw);
  opacity: 0;
  transition: all 300ms linear;
} */
