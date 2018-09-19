import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bar = props => {
  return (
    <div>
      <FontAwesomeIcon id="bar" icon="bars" sixe="2x" />
      <div>{props.children}</div>
    </div>
  );
};

export default Bar;
