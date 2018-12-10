import React, { Component } from "react";
import { connect } from "react-redux";

import { filterInternships } from "./../../actions";
class SecondHeader extends Component {
  state = {
    country: "",
    study: ""
  };

  _handleCountry = value => {
    this.setState({ country: value }, () => {
      this.props.dispatch(filterInternships(this.state.country));
    });
  };

  render() {
    if (this.props.id === "project") {
      return (
        <div id="container">
          <nav className="searchBar">
            <ul>
              <li>
                <a>Grades</a>
                <ul>
                  <li>
                    <a>7</a>
                  </li>
                  <li>
                    <a>10</a>
                  </li>
                  <li>
                    <a>12</a>
                  </li>
                </ul>
              </li>

              <li>
                <a>Study</a>
                <ul>
                  <li>
                    <a>ICT</a>
                  </li>
                  <li>
                    <a>Marketing</a>
                  </li>
                  <li>
                    <a>Civil Engineering</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
    if (this.props.id === "internship") {
      return (
        <div id="container">
          <nav className="searchBar">
            <ul>
              <li>
                <a>Country</a>
                <ul>
                  <li onClick={e => this._handleCountry("Denmark")}>
                    <a>Denmark</a>
                  </li>
                  <li onClick={e => this._handleCountry("USA")}>
                    <a>USA</a>
                  </li>
                  <li onClick={e => this._handleCountry("Germany")}>
                    <a>Germany</a>
                  </li>
                </ul>
              </li>

              <li>
                <a>Study</a>
                <ul>
                  <li>
                    <a>ICT</a>
                  </li>
                  <li>
                    <a>Marketing</a>
                  </li>
                  <li>
                    <a>Civil Engineering</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { internships: state.internship };
}

export default connect(mapStateToProps)(SecondHeader);
