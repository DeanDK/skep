import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./containers/home_container";
import Login from "./containers/Admin/login";
import Layout from "./hoc/layout";
import AddProject from "./components/Add/project.js";
import SignUp from "./containers/Admin/sign_up.js";
import AddAdmin from "./containers/Admin/add_admin.js";
import Logout from "./containers/Admin/logout.js";

import Auth from "./hoc/auth";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Auth(Login, false)} />
      <Route path="/signup" exact component={Auth(SignUp, false)} />
      <Layout>
        <Route path="/home" exact component={Auth(Home)} />
        <Route path="/user/add" exact component={Auth(AddProject)} />
        <Route path="/user/register" exact component={Auth(AddAdmin)} />
        <Route path="/user/logout" exact component={Auth(Logout)} />
      </Layout>
    </Switch>
  );
};

export default Routes;
