import React, { Component } from "react";
import { connect } from "react-redux";

import { storage } from "./../../firebase";
import { getUserFiles } from "./../../actions";
import File from "./../../widgets/file";

class HomeFile extends Component {
  state = {
    url: "",
    files: [],
    projectName: "",
    email: "",
    fileId: ""
  };

  componentWillMount = () => {
    const partialURL = window.location.href.split("/");
    const id = partialURL[4];
    this.setState({ fileId: partialURL[5] });
    this.props.dispatch(getUserFiles(id));
  };

  componentWillReceiveProps = nextProps => {
    this.setState(
      {
        files: nextProps.user.get_user_files.files,
        email: nextProps.user.get_user_files.email
      },
      () => {
        if (this.state.files.length > 0) {
          if (this.state.files.length === 1) {
            this.setState(
              {
                projectName: this.state.files[0].name
              },
              () => {
                this._getFilesFromFirebase(
                  this.state.email,
                  this.state.projectName
                );
              }
            );
          } else {
            this.state.files.forEach(i => {
              if (i._id === this.state.fileId) {
                this.setState(
                  {
                    projectName: i.name
                  },
                  () => {
                    this._getFilesFromFirebase(
                      this.state.email,
                      this.state.projectName
                    );
                  }
                );
              }
            });
          }
        }
      }
    );
  };

  _getFilesFromFirebase = (email, projectName) => {
    storage
      .ref(`${email}`)
      .child(`${projectName}`)
      .getDownloadURL()
      .then(urlLink => {
        this.setState({ url: urlLink });
      });
  };

  render() {
    return (
      <div>
        <File url={this.state.url} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(HomeFile);
