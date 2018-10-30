import React, { Component } from "react";
import { connect } from "react-redux";

import { storage } from "./../../firebase";

class File extends Component {
  state = {
    url: ""
  };

  componentWillMount = () => {
    const email = "239999@via.dk";
    const projectName = "Hello World";
    storage
      .ref(`${email}`)
      .child(`${projectName}`)
      .getDownloadURL()
      .then(urlLink => {
        this.setState({ url: urlLink });
      });
  };

  render() {
    if (this.state.url === "") {
      return <div className="Loading" />;
    }
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

function mapStateToProps(state) {
  return { files: state.file };
}

export default connect(mapStateToProps)(File);
