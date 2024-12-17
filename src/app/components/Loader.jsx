import React from "react";

function Loader(props) {
  return (
    <span
      className={`loader ${props.width} ${props.border} ${props.height}`}
    ></span>
  );
}

export default Loader;
