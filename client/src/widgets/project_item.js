import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectItem = item => {
  switch (item.id) {
    case "home":
      return (
        <Link to={`/files/${item._id}`} className="book_item">
          <div className="book_header">
            <h2>{item.files[0].name}</h2>
          </div>
          <div className="book_items">
            <div className="book_author">{item.files[0].subject}</div>

            <div className="book_bubble">
              <strong>Study: </strong> {item.files[0].study}
            </div>

            <div className="book_bubble">
              <strong>Grade: </strong> {item.files[0].grade}
            </div>

            <div className="book_publisher">
              <strong>Published by: </strong> {item.email}
            </div>
          </div>
        </Link>
      );
    case "approve":
      return (
        <Link to={`/files/${item._id}`} className="book_item">
          <div className="book_header">
            <h2>{item.files[0].name}</h2>
          </div>
          <div className="book_items">
            <div className="book_author">{item.files[0].subject}</div>

            <div className="book_bubble">
              <strong>Study: </strong> {item.files[0].study}
            </div>

            <div className="book_bubble">
              <strong>Grade: </strong> {item.files[0].grade}
            </div>

            <div className="book_publisher">
              <strong>Published by: </strong> {item.email}
            </div>

            <FontAwesomeIcon icon="check" id="check" size="2x" />
            <FontAwesomeIcon icon="times" id="times" size="2x" />
          </div>
        </Link>
      );
      break;
    default:
  }
};

export default ProjectItem;
