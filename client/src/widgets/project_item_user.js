import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO: should be part of project_item
const ProjectItemUser = props => {
  const display = () => (
    <div>
      {!props.id && (
        <div className="book_item">
          <div className="book_header">
            <h2>{props.name}</h2>
          </div>
          <div className="book_this">
            <div className="book_author">{props.subject}</div>

            <div className="book_bubble">
              <strong>Study: </strong> {props.study}
            </div>

            <div className="book_bubble">
              <strong>Grade: </strong> {props.grade}
            </div>

            <FontAwesomeIcon icon="trash" id="trash" onClick={props.onClick} />
          </div>
        </div>
      )}
      {props.id && (
        <div className="book_item">
          <div className="book_header">
            <h2>{props.companyName}</h2>
          </div>
          <div className="book_this">
            <div className="book_author">{props.country}</div>

            <div className="book_bubble">
              <strong>Study: </strong> {props.study}
            </div>

            <div className="book_bubble">
              <strong>Grade: </strong> {props.year}
            </div>

            <FontAwesomeIcon icon="trash" id="trash" onClick={props.onClick} />
          </div>
        </div>
      )}
    </div>
  );

  return <div>{display()}</div>;
};

export default ProjectItemUser;
