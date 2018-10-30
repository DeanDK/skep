import React, { Component } from "react";
import { connect } from "react-redux";

import { storage } from "./../../firebase";
import { getUserFiles } from "./../../actions";

class File extends Component {
  state = {
    url: "",
    files: [],
    projectName: "",
    email: "",
    fileId: "",
    url: ""
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
                storage
                  .ref(`${this.state.email}`)
                  .child(`${this.state.projectName}`)
                  .getDownloadURL()
                  .then(urlLink => {
                    this.setState({ url: urlLink });
                  });
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
                    storage
                      .ref(`${this.state.email}`)
                      .child(`${this.state.projectName}`)
                      .getDownloadURL()
                      .then(urlLink => {
                        this.setState({ url: urlLink });
                      });
                  }
                );
              }
            });
          }
        }
      }
    );
  };

  render() {
    if (this.state.url === "") {
      return <div className="loader">Loading...</div>;
    } else {
      return (
        <div className="file">
          <iframe
            src={this.state.url}
            title="file"
            width="800px"
            height="600px"
          />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(File);
