import React, { Component } from "react";

import SecondHeader from "./../components/SecondHeader";
import HomeItems from "./home_items_container.js";
class Home extends Component {
  render() {
    return (
      <div>
        <SecondHeader />
        <HomeItems />
      </div>
    );
  }
}

export default Home;
