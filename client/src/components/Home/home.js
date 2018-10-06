import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllFiles } from "./../../actions";
import ProjectItem from "./../../widgets/project_item";
import LoadMore from "./../../widgets/load_more.js";

class Home extends Component {
  state = {
    limit: 2
  };

  componentWillMount = () => {
    this.props.dispatch(getAllFiles(0, this.state.limit, "asc"));
  };

  _loadmore = () => {
    const count = this.props.files.file.length;
    this.props.dispatch(
      getAllFiles(count, this.state.limit, "asc", this.props.files.file)
    );
  };

  _renderItems = files =>
    files
      ? files.map((item, i) => {
          return <ProjectItem {...item} key={i} index={i} />;
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

export default connect(mapStateToProps)(Home);
