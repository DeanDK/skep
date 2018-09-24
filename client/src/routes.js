import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./containers/home_container";
import Login from "./containers/Admin/login";
import Layout from "./hoc/layout";

import Auth from "./hoc/auth";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Auth(Login, false)} />
      <Layout>
        <Route path="/home" exact component={Auth(Home)} />
      </Layout>
    </Switch>
  );
};

export default Routes;
