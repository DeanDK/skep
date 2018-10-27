import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserFiles } from "./../../actions/index.js";
import { getAllFiles } from "./../../actions";
import ProjectItemUser from "./../../widgets/project_item_user";
import LoadMore from "./../../widgets/load_more.js";

class MyProfile extends Component {
  state = {
    arr: [],
    files: []
  };
  componentWillMount = () => {
    this.props.dispatch(getUserFiles(this.props.user.auth.id));
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ arr: nextProps.user.get_user_files.files });
  };

  _loadmore = () => {
    const count = this.props.files.file.length;
    this.props.dispatch(getAllFiles(count, this.state.limit, "asc"));
  };

  _renderItems = files =>
    files
      ? files.map((item, i) => {
          return <ProjectItemUser {...item} key={i} index={i} />;
        })
      : null;

  render() {
    return (
      <div>
        {this._renderItems(this.state.arr)}
        <LoadMore onClick={this._loadmore} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(MyProfile);
