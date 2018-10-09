import React from "react";
import axios from "axios";

const Logout = props => {
  console.log("hhehe");
  axios.get("/api/logout").then(request => {
    props.history.push("/");
  });

  return <div />;
};

export default Logout;
