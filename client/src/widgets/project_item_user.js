import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO: should be part of project_item
class ProjectItemUser extends Component {
  render() {
    return (
      <div>
        <div className="book_item">
          <div className="book_header">
            <h2>{this.props.name}</h2>
          </div>
          <div className="book_this">
            <div className="book_author">{this.props.subject}</div>

            <div className="book_bubble">
              <strong>Study: </strong> {this.props.study}
            </div>

            <div className="book_bubble">
              <strong>Grade: </strong> {this.props.grade}
            </div>

            <FontAwesomeIcon
              icon="trash"
              id="trash"
              onClick={this.props.onClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItemUser;
