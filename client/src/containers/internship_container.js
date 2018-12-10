import React, { Component } from "react";

import SecondHeader from "./../components/SecondHeader";
import Internship from "./../components/Internship/internship.js";
class InternshipContainer extends Component {
  render() {
    return (
      <div>
        <SecondHeader id="internship" />
        <Internship />
      </div>
    );
  }
}

export default InternshipContainer;
