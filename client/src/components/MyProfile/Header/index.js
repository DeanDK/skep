import React, { Component } from "react";

class Nav extends Component {
  state = {
    project: "My Projects",
    internship: "My Internships",
    bool: true
  };

  _handleToggle = bool => {
    this.setState({ bool: !this.state.bool }, () => {
      this.props.handleToggle(this.state.bool);
    });
  };

  render() {
    return (
      <div className="profileHeader">
        <p id="profileText">
          {this.state.bool ? this.state.project : this.state.internship}
        </p>
        <label className="switch">
          <input
            id="preenty-switch"
            type="checkbox"
            v-model="preenty_switch"
            onClick={this._handleToggle}
          />
          <span className="slider round" />
        </label>
      </div>
    );
  }
}

export default Nav;
