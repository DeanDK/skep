import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
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
            placeholder="login"
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
          <Link to="/signup">Go back to login ?</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
