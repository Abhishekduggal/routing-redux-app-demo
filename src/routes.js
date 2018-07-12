import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Compose from "./components/Compose/Compose";
import Todos from "./components/Todos/Todos";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/todos" component={Todos} />
    <Route path="/compose" component={Compose} />
  </Switch>
);
