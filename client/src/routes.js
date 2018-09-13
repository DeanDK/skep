import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./containers/home_container";
import Login from "./containers/Admin/login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
    </Switch>
  );
};

export default Routes;
