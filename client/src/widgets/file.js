import React from "react";

const File = props => {
  if (props.url === "") {
    return <div className="loader">Loading...</div>;
  } else {
    return (
      <div className="file">
        <iframe src={props.url} title="file" width="800px" height="600px" />
      </div>
    );
  }
};

export default File;
