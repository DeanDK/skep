import React from "react";
import { Link } from "react-router-dom";

const InternshipItems = items => {
  const element = (item, i) => (
    <div key={i}>
      {!item.approved &&
        items.id === "internship" && (
          <Link to={`/file/${items._id}/${item._id}`} className="book_item">
            <div className="book_header">
              <h2>{item.companyName}</h2>
            </div>
            <div className="book_items">
              <div className="book_author">{item.study}</div>

              <div className="book_bubble">
                <strong>Country: </strong> {item.country}
              </div>

              <div className="book_bubble">
                <strong>Year: </strong> {item.year}
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
    items.internships.map((item, i) => {
      return element(item, i);
    });

  return <div>{showItems()}</div>;
};

export default InternshipItems;
