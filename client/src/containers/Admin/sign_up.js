import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    courses: [
      "Software Engineering",
      "Value Chain Management",
      "Architectural Technology and Construction Management",
      "Civil Engineering",
      "Global Bussiness Engineering",
      "Marketing Management",
      "Mechanical Engineering"
    ]
  };
  // SHOULD BE UPDATED OR INC. WITH LOGIN COMPONENT
  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Sign Up </h2>

          <div className="fadeIn first">
            <img
              src="http://danielzawadzki.com/codepen/01/icon.svg"
              id="icon"
              alt="User Icon"
            />
          </div>
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="e.g 239993@via.dk"
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
          <div id="login_error" />

          <div id="formFooter">
            <Link to="/">Go back to login ?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
