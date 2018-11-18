import React, { Component } from "react";
import { connect } from "react-redux";

import { getUserFiles } from "./../../actions/index.js";
import { getAllFiles } from "./../../actions";
import { deleteFile } from "./../../actions";
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

  handleDelete = e =>
    this.props.dispatch(deleteFile(this.props.user.auth.id, e._id));

  _renderItems = files =>
    files
      ? files.map((item, i) => {
          return (
            <ProjectItemUser
              {...item}
              key={i}
              index={i}
              onClick={() => this.handleDelete(item)}
            />
          );
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
