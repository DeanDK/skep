import React from "react";

const File = props => {
  if (props.name === "file") {
    if (props.url === "") {
      return <div className="loader">Loading...</div>;
    } else {
      return (
        <div className="file">
          <iframe src={props.url} title="file" width="800px" height="600px" />
        </div>
      );
    }
  }

  if (props.name === "approve") {
    if (props.url === "") {
      return <div className="loader">Loading...</div>;
    } else {
      return (
        <div>
          <div className="file">
            <iframe src={props.url} title="file" width="800px" height="600px" />
          </div>
          <button className="deleteButton">Delete</button>
        </div>
      );
    }
  }
};

export default File;
