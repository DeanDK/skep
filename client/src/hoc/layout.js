import React from "react";
import Header from "./../components/Header/header.js";

const Bar = props => {
  console.log(props);
  return (
    <div>
      <Header />
      <div>{props.children}</div>
    </div>
  );
};

export default Bar;
