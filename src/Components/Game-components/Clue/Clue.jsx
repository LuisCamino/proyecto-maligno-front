import React from "react";
import Magnifier from "react-magnifier";

const Clue = (props) => {
  let top = Math.random() * 90;
  let left = Math.random() * 90;

  return (
    <div
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
        zIndex: "999",
      }}
    >
      <Magnifier {...props} />
    </div>
  );
};

export default Clue;
