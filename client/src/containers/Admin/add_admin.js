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
    return <div>hehe</div>;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(AddAdmin);
