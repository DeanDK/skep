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

  if (props.name === "user") {
    if (props.url === "") {
      return <div className="loader">Loading...</div>;
    } else {
      return (
        <div className="file">
          <iframe src={props.url} title="file" width="800px" height="600px" />
          <button className="deleteButton">Delete</button>
        </div>
      );
    }
  }

  if (props.name === "approve") {
    if (props.url === "") {
      return <div className="loader">Loading...</div>;
    } else {
      return (
        <div className="file">
          <iframe src={props.url} title="file" width="800px" height="600px" />
          <button className="approveButton" onClick={() => props.approve(true)}>
            Approve
          </button>
          <button className="approveButton" onClick={() => props.deleteFile()}>
            Dissaprove
          </button>
        </div>
      );
    }
  }
};

export default File;
