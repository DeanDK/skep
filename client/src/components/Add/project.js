import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import { storage } from "./../../firebase";

class Project extends Component {
  state = {
    file: null,
    url: "",
    email: "",
    uploadTask: "",
    projectName: ""
  };

  handleChange = e => {
    if (e.target.files[0]) {
      this.setState({ file: e.target.files[0] });
    }
  };

  handleProjectName = e => {
    this.setState({ projectName: e.target.value });
  };

  handleUpload = e => {
    const { file } = this.state;
    const projectName = this.state.projectName;
    const email = this.props.user.auth.email;
    storage.ref(`${email}/${projectName}`).put(file);
  };

  render() {
    console.log(this.state.projectName);
    return (
      <div className="container">
        <div className="sideText">
          <label id="legend" className="fas fa-paper-plane">
            <FontAwesomeIcon icon="paper-plane" id="paper-icon" />
            SHARE
          </label>
          <label id="share">Share Your files</label>
          <label id="safe">Safe. Secure. Free</label>
        </div>
        <div className="form-style-5">
          <legend className="fas fa-lock"> Upload a project</legend>
          <input
            type="text"
            name="nameField"
            placeholder="Project Name *"
            required
            onChange={this.handleProjectName}
          />
          <label htmlFor="semester">Semester:</label>
          <select id="semester" name="semesterSelect">
            <option value="first">1</option>
            <option value="second">2</option>
            <option value="third">3</option>
          </select>
          <label htmlFor="subject">Subject:</label>
          <select id="subject" name="subjectSelect">
            <option value="sdj">SDJ</option>
            <option value="con">CON</option>
            <option value="sep">SEP</option>
          </select>
          <label htmlFor="grade">Grade:</label>
          <select id="grade" name="gradeSelect">
            <option value="7">7</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </select>
          <input
            type="file"
            name="file"
            id="file-upload"
            className="inputfile"
            onChange={this.handleChange}
          />
          <label htmlFor="file-upload">
            <span className="fas fa-upload" /> Choose a file
          </label>
          <div id="file-upload-filename" />
          <button type="submit" onClick={this.handleUpload}>
            <i className="fas fa-check" /> Submit
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Project);
