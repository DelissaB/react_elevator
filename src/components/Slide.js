import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const Slide = ({ bool, children }) => (
  <TransitionGroup component={null}>
    <CSSTransition
      in={true}
      appear={false}
      key={bool}
      timeout={900}
      classNames={"slide"}
    >
      {children}
    </CSSTransition>
  </TransitionGroup>
);
