import React, { Component } from "react";
import { connect } from "react-redux";

class AddAdmin extends Component {
  state = {
    showNav: false,
    email: ""
  };

  componentWillMount = () => {
    if (this.props.user.auth.role !== 1) this.props.history.push("/home");
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
            />

            <input type="submit" className="fadeIn fourth" value="Log In" />
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
