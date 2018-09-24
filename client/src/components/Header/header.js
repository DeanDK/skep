import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    showNav: false
  };

  onHideNav = () => {
    this.setState({ showNav: false });
  };

  render() {
    return (
      <header>
        <div className="open_nav">
          <FontAwesomeIcon
            icon="bars"
            style={{ color: "#ffffff", padding: "10px", cursor: "pointer" }}
          />
        </div>
        <Link to="/home" className="logo">
          SKEP
        </Link>
      </header>
    );
  }
}

export default Header;
