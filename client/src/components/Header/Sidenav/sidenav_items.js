import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideNavItems = () => {
  const items = [
    {
      type: "sideItem",
      icon: "home",
      text: "Home",
      link: "/home",
      restricted: false
    },
    {
      type: "sideItem",
      icon: "user-alt",
      text: "My Profile",
      link: "/user",
      restricted: false
    },
    {
      type: "sideItem",
      icon: "crown",
      text: "Add Admin",
      link: "/user/register",
      restricted: false
    },

    {
      type: "sideItem",
      icon: "book",
      text: "My Projects",
      link: "/user/user-reviews",
      restricted: false
    },
    {
      type: "sideItem",
      icon: "book",
      text: "Add Projects",
      link: "/user/add",
      restricted: false
    },
    {
      type: "sideItem",
      icon: "crown",
      text: "Approve",
      link: "/user/approve",
      restricted: false
    },
    {
      type: "sideItem",
      icon: "sign-out-alt",
      text: "Logout",
      link: "/user/logout",
      restricted: false
    }
  ];

  const element = (item, i) => (
    <div key={i} className={item.type}>
      <Link to={item.link}>
        <FontAwesomeIcon icon={item.icon} id="icons" />
        {item.text}
      </Link>
    </div>
  );

  const showItems = () =>
    items.map((item, i) => {
      return element(item, i);
    });

  return <div>{showItems()}</div>;
};

export default SideNavItems;
