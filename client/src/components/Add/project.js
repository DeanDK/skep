import React, { Component } from "react";
import Cookies from "universal-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import { storage } from "./../../firebase";
import { addFile } from "./../../actions";

const cookies = new Cookies();
class Project extends Component {
  state = {
    file: null,
    url: "",
    email: "",
    uploadTask: "",
    projectName: "",
    grade: "",
    study: "",
    subject: "",
    projectOrInternship: true
  };

  _handleChange = e => {
    if (e.target.files[0]) {
      this.setState({ file: e.target.files[0] });
    }
  };

  _handleProjectName = e => {
    this.setState({ projectName: e.target.value });
  };

  _handleGrade = e => {
    this.setState({ grade: e.target.value });
  };

  _handleStudy = e => {
    this.setState({ study: e.target.value });
  };

  _handleSubject = e => {
    this.setState({ subject: e.target.value });
  };

  _handleUpload = e => {
    const auth = cookies.get("auth");
    this.props.dispatch(
      addFile(
        this.state.projectName,
        this.state.subject,
        this.state.grade,
        this.state.study,
        auth
      )
    );
    const { file } = this.state;
    const projectName = this.state.projectName;
    const email = this.props.user.auth.email;
    storage.ref(`${email}/${projectName}`).put(file);
  };

  _handleToggle = e =>
    this.setState({ projectOrInternship: !this.state.projectOrInternship });

  render() {
    if (this.state.projectOrInternship) {
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
            <div className="toggle">
              <label className="switch">
                <input
                  id="preenty-switch"
                  type="checkbox"
                  v-model="preenty_switch"
                  onClick={this._handleToggle}
                />
                <span className="slider round" />
              </label>
              <div className="fas fa-lock">Upload Project</div>
            </div>
            <input
              type="text"
              name="nameField"
              placeholder="Project Name "
              required
              onChange={this._handleProjectName}
            />
            <label htmlFor="semester">Study:</label>
            <select
              id="semester"
              name="semesterSelect"
              onChange={this._handleStudy}
            >
              <option value="ICT">ICT</option>
              <option value="Marketing">Marketing</option>
              <option value="VCM">VCM</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Architectural Engineering">
                Architectural Engineering
              </option>
            </select>
            <label htmlFor="subject">Subject:</label>
            <select
              id="subject"
              name="subjectSelect"
              onClick={this._handleSubject}
            >
              <option value="SDJ">SDJ</option>
              <option value="CON">CON</option>
              <option value="SEP">SEP</option>
            </select>
            <label htmlFor="grade">Grade:</label>
            <select id="grade" name="gradeSelect" onClick={this._handleGrade}>
              <option value="7">7</option>
              <option value="10">10</option>
              <option value="12">12</option>
            </select>
            <input
              type="file"
              name="file"
              id="file-upload"
              className="inputfile"
              onChange={this._handleChange}
            />
            <label htmlFor="file-upload">
              <span className="fas fa-upload" /> Choose a file
            </label>
            <div id="file-upload-filename" />
            <button type="submit" onClick={this._handleUpload}>
              <i className="fas fa-check" /> Submit
            </button>
          </div>
        </div>
      );
    }

    if (!this.state.projectOrInternship) {
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
            <div className="toggle">
              <label className="switch">
                <input
                  id="preenty-switch"
                  type="checkbox"
                  v-model="preenty_switch"
                  onClick={this._handleToggle}
                />
                <span className="slider round" />
              </label>
              <div className="fas fa-lock"> Upload Intern</div>
            </div>
            <input
              type="text"
              name="nameField"
              placeholder="Company Name"
              required
            />
            <label htmlFor="semester">Study:</label>
            <select id="semester" name="semesterSelect">
              <option value="ICT">ICT</option>
              <option value="Marketing">Marketing</option>
              <option value="VCM">VCM</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Architectural Engineering">
                Architectural Engineering
              </option>
            </select>
            <label htmlFor="subject">Country:</label>
            <select
              id="subject"
              name="subjectSelect"
              onClick={this._handleSubject}
            >
              <option value="SDJ">Denmark</option>
              <option value="CON">USA</option>
              <option value="SEP">Germany</option>
            </select>
            <label htmlFor="grade">Year of Finishing:</label>
            <select id="grade" name="gradeSelect" onClick={this._handleGrade}>
              <option value="7">2018</option>
              <option value="10">2017</option>
              <option value="12">2016</option>
            </select>
            <input
              type="file"
              name="file"
              id="file-upload"
              className="inputfile"
              onChange={this._handleChange}
            />
            <label htmlFor="file-upload">
              <span className="fas fa-upload" /> Choose a file
            </label>
            <div id="file-upload-filename" />
            <button type="submit" onClick={this._handleUpload}>
              <i className="fas fa-check" /> Submit
            </button>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Project);
