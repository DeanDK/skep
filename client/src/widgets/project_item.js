import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// TODO: Use map
const ProjectItem = item => {
  let count = 0;

  if (item.files[count].approved && item.id === "home") {
    return (
      <Link to={`/files/${item._id}`} className="book_item">
        <div className="book_header">
          <h2>{item.files[count].name}</h2>
        </div>
        <div className="book_items">
          <div className="book_author">{item.files[count].subject}</div>

          <div className="book_bubble">
            <strong>Study: </strong> {item.files[count].study}
          </div>

          <div className="book_bubble">
            <strong>Grade: </strong> {item.files[count].grade}
          </div>

          <div className="book_publisher">
            <strong>Published by: </strong> {item.email}
          </div>
        </div>
      </Link>
    );
  } else if (item.id === "approve" && !item.files[count].approved) {
    return (
      <Link to={`/files/${item._id}`} className="book_item">
        <div className="book_header">
          <h2>{item.files[count].name}</h2>
        </div>
        <div className="book_items">
          <div className="book_author">{item.files[count].subject}</div>

          <div className="book_bubble">
            <strong>Study: </strong> {item.files[count].study}
          </div>

          <div className="book_bubble">
            <strong>Grade: </strong> {item.files[count].grade}
          </div>

          <div className="book_publisher">
            <strong>Published by: </strong> {item.email}
          </div>

          <FontAwesomeIcon icon="check" id="check" size="2x" />
          <FontAwesomeIcon icon="times" id="times" size="2x" />
        </div>
      </Link>
    );
  } else {
    return <div />;
  }
};

export default ProjectItem;
