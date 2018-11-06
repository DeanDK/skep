import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";

import { userLogin } from "../../actions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.user.login.isAuth) this.props.history.push("/home");
  };

  _handleEmailInput = e => {
    this.setState({ email: e.target.value });
  };

  _handlePasswordInput = e => {
    this.setState({ password: e.target.value });
  };

  _isEmail = email => {
    return validator.isEmail(email);
  };

  _isViaEmail = email => {
    let isViaEmail = email.split("@")[1];
    return isViaEmail === "via.dk" ? true : false;
  };

  _isValidEmail = email => {
    let isValidEmail = this._isEmail(this.state.email);
    if (isValidEmail) {
      return this._isViaEmail(this.state.email);
    }
  };

  _onSubmit = e => {
    e.preventDefault();
    let shouldDispatch = this._isValidEmail(this.state.email);
    if (shouldDispatch) {
      this.setState({ emailError: "", loading: true }, () => {
        this.props.dispatch(userLogin(this.state));
      });
    } else {
      this.setState({
        error: "Only via emails are allowed"
      });
    }
  };

  // _isValidPassword = () => {
  //   if (this.state.password.length < 3) {
  //     this.setState({ error: "Password has to be longer :)" });
  //   }
  // };

  render() {
    let error = this.state.error;
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Sign In </h2>

          <div className="fadeIn first">
            <img src="/images/student_icon.png" id="icon" alt="User Icon" />
          </div>

          <form onSubmit={this._onSubmit}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="only via.dk email"
              onChange={this._handleEmailInput}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              onChange={this._handlePasswordInput}
            />
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={this._isValidPassword}
            />
          </form>
          <div id="login_error">{error}</div>

          <div id="formFooter">
            <Link to="/signup">Sign up ?</Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    login: state.login
  };
}

export default connect(mapStateToProps)(Login);
