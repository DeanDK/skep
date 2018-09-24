import React from "react";
import SideNav from "react-simple-sidenav";

const Nav = props => {
  return <SideNav showNav={props.showNav}>Items</SideNav>;
};

export default Nav;
