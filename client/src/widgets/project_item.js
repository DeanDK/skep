import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = item => {
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
      </div>
    </Link>
  );
};

export default ProjectItem;
