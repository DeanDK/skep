import React from "react";
import { Link } from "react-router-dom";

// TODO: should be part of project_item
const ProjectItemUser = items => {
  return (
    <div>
      <Link to={`/files`} className="book_item">
        <div className="book_header">
          <h2>{items.name}</h2>
        </div>
        <div className="book_itemss">
          <div className="book_author">{items.subject}</div>

          <div className="book_bubble">
            <strong>Study: </strong> {items.study}
          </div>

          <div className="book_bubble">
            <strong>Grade: </strong> {items.grade}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItemUser;
