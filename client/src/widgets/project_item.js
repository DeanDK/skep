import React from "react";
import { Link } from "react-router-dom";

// TODO: Use map
const ProjectItem = items => {
  const element = (item, i) => (
    <div key={i}>
      {item.approved &&
        items.id === "home" && (
          <Link to={`/files`} className="book_item">
            <div className="book_header">
              <h2>{item.name}</h2>
            </div>
            <div className="book_items">
              <div className="book_author">{item.subject}</div>

              <div className="book_bubble">
                <strong>Study: </strong> {item.study}
              </div>

              <div className="book_bubble">
                <strong>Grade: </strong> {item.grade}
              </div>

              <div className="book_publisher">
                <strong>Published by: </strong> {items.email}
              </div>
            </div>
          </Link>
        )}

      {!item.approved &&
        items.id === "approve" && (
          <Link to={`/files`} className="book_item">
            <div className="book_header">
              <h2>{item.name}</h2>
            </div>
            <div className="book_items">
              <div className="book_author">{item.subject}</div>

              <div className="book_bubble">
                <strong>Study: </strong> {item.study}
              </div>

              <div className="book_bubble">
                <strong>Grade: </strong> {item.grade}
              </div>

              <div className="book_publisher">
                <strong>Published by: </strong> {items.email}
              </div>
            </div>
          </Link>
        )}
    </div>
  );

  const showItems = () =>
    items.files.map((item, i) => {
      return element(item, i);
    });

  return <div>{showItems()}</div>;
};

export default ProjectItem;
