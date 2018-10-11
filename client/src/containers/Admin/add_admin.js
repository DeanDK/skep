import React, { Component } from "react";
import { connect } from "react-redux";

import { addAdmin } from "../../actions";

class AddAdmin extends Component {
  state = {
    showNav: false,
    email: "",
    message: "",
    messageColor: ""
  };

  componentWillMount = () => {
    if (this.props.user.auth.role !== 1) this.props.history.push("/home");
  };

  componentWillReceiveProps = nextProps => {
    nextProps.user.add_admin.message
      ? this.setState({
          message: nextProps.user.add_admin.message,
          messageColor: "login_error_success"
        })
      : this.setState({
          message: nextProps.user.add_admin.error,
          messageColor: "login_error"
        });
  };

  _handleInput = e => {
    this.setState({ email: e.target.value });
  };

  _onSubmit = e => {
    e.preventDefault();
    this.props.dispatch(addAdmin(this.state.email));
  };

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Add Admin</h2>
          <form onSubmit={this._onSubmit}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="email"
              placeholder="email"
              onChange={this._handleInput}
            />

            <input type="submit" className="fadeIn fourth" value="Log In" />
            <div id={this.state.messageColor}>{this.state.message}</div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(AddAdmin);
