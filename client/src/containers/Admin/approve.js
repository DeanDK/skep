import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllFiles } from "./../../actions";
import ProjectItem from "./../../widgets/project_item";
import LoadMore from "./../../widgets/load_more.js";

class Approve extends Component {
  state = {
    limit: 2
  };

  componentWillMount = () => {
    this.props.dispatch(getAllFiles(0, this.state.limit, "asc"));
  };

  _loadmore = () => {
    const count = this.props.files.file.length;
  };

  _renderItems = files =>
    files
      ? files.map((item, i) => {
          return <ProjectItem {...item} key={i} index={i} id="approve" />;
        })
      : null;

  render() {
    return (
      <div>
        {this._renderItems(this.props.files.file)}
        <LoadMore onClick={this._loadmore} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { files: state.file };
}

export default connect(mapStateToProps)(Approve);
