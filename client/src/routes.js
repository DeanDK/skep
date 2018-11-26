import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./containers/home_container";
import Internship from "./containers/internship_container";
import Login from "./containers/Admin/login";
import Layout from "./hoc/layout";
import AddProject from "./components/Add/project.js";
import MyProfile from "./components/MyProfile/myprofile.js";
import File from "./components/File/Home/home_file.js";
import InternshipFile from "./components/File/Home/internship_file.js";
import SignUp from "./containers/Admin/sign_up.js";
import AddAdmin from "./containers/Admin/add_admin.js";
import Logout from "./containers/Admin/logout.js";
import Approve from "./containers/Admin/approve.js";
import ApproveInternship from "./containers/Admin/approve_internship.js";
import Auth from "./hoc/auth";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Auth(Login, false)} />
      <Route path="/signup" exact component={Auth(SignUp, false)} />
      <Layout>
        <Route path="/home" exact component={Auth(Home, true)} />
        <Route path="/internship" exact component={Auth(Internship, true)} />
        <Route path="/user" exact component={Auth(MyProfile, true)} />
        <Route path="/user/add" exact component={Auth(AddProject, true)} />
        <Route path="/user/register" exact component={Auth(AddAdmin, true)} />
        <Route path="/user/logout" exact component={Auth(Logout, true)} />
        <Route
          path="/user/approve/project"
          exact
          component={Auth(Approve, true)}
        />
        <Route
          path="/user/approve/internship"
          exact
          component={Auth(ApproveInternship, true)}
        />
        <Route path="/file/:id/:file_id" exact component={Auth(File, null)} />
        <Route
          path="/approve/:id/:file_id"
          exact
          component={Auth(File, true)}
        />
        <Route
          path="/approve_internship/:id/:file_id"
          exact
          component={Auth(InternshipFile, true)}
        />
        <Route
          path="/internship/:id/:file_id"
          exact
          component={Auth(InternshipFile, true)}
        />
      </Layout>
    </Switch>
  );
};

export default Routes;
