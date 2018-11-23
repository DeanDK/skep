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

  if (props.name === "approve" || props.name === "approve_internship") {
    if (props.url === "") {
      return <div className="loader">Loading...</div>;
    } else {
      return (
        <div>
          <div className="file">
            <iframe src={props.url} title="file" width="800px" height="600px" />
          </div>
          <div className="approve_buttons">
            <button id="approve" onClick={() => props.approve(true)}>
              Approve
            </button>
            <button id="dissaprove" onClick={() => props.deleteFile()}>
              Dissaprove
            </button>
          </div>
          <div id={props.messageClassName}>{props.message}</div>
        </div>
      );
    }
  }
};

export default File;
