import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Nav from "./Sidenav/sidenav";

class Header extends Component {
  state = {
    showNav: false,
    email: ""
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.user.auth.isAuth) {
      console.log(nextProps.user.auth.email);
      this.setState({ email: nextProps.user.auth.email });
    }
  };
  onHideNav = () => {
    this.setState({ showNav: false });
  };

  render() {
    return (
      <header>
        <div className="open_nav">
          <FontAwesomeIcon
            onClick={() => this.setState({ showNav: true })}
            icon="bars"
            style={{ color: "#ffffff", padding: "10px", cursor: "pointer" }}
          />
        </div>
        <Nav showNav={this.state.showNav} onHideNav={() => this.onHideNav()} />
        <Link to="/home" className="logo">
          SKEP
          <div id="username">{this.state.email}</div>
        </Link>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Header);
