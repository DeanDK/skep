import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllFiles } from "./../../actions";

class Home extends Component {
  state = {
    skip: 0,
    limit: 3,
    order: "asc"
  };

  componentWillMount = () => {
    this.props.dispatch(
      getAllFiles(this.state.skip, this.state.limit, this.state.order)
    );
  };

  render() {
    return <div>Hello</div>;
  }
}

function mapStateToProps(state) {
  return { file: state.file };
}

export default connect(mapStateToProps)(Home);
