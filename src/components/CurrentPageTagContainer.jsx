import React from "react";
import CurrentPageTag from "./CurrentPageTag.jsx";

function CurrentPageTagContainer({ tags }) {
  return (
    <div className="CurrentPageTagContainer">
      {tags.map(tagname => (
        <CurrentPageTag tagname={tagname} />
      ))}
    </div>
  );
}
export default CurrentPageTagContainer;
