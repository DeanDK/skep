import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserFiles } from "./../../actions/index.js";

class MyProfile extends Component {
  componentWillMount = () => {
    this.props.dispatch(getUserFiles(this.props.user.auth.id));
  };

  // TODO: connect with <ProjectItem />
  render() {
    console.log(this.props);
    return <div>Hello</div>;
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(MyProfile);
