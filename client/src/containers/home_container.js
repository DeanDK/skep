import React, { Component } from "react";

import SecondHeader from "./../components/SecondHeader";
import Home from "./../components/Home/home.js";
class HomeContainer extends Component {
  render() {
    return (
      <div>
        <SecondHeader id="project" />
        <Home />
      </div>
    );
  }
}

export default HomeContainer;
