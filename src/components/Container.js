import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Floor1 from "./Floor1";
import Floor2 from "./Floor2";
import Floor3 from "./Floor3";
import Floor4 from "./Floor4";
import Floor5 from "./Floor5";
import Floor6 from "./Floor6";

function Container({ location }) {
  return (
    <div>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 3000, exit: 3000 }}
          classNames="slide"
        >
          <Switch location={location}>
            <Route exact path="/floor1" component={Floor1} />
            <Route path="/floor2" component={Floor2} />
            <Route path="/floor3" component={Floor3} />
            <Route path="/floor4" component={Floor4} />
            <Route path="/floor5" component={Floor5} />
            <Route path="/floor6" component={Floor6} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(Container);
