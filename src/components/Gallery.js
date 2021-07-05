import React from "react";
import "./Gallery.scss";

export const Gallery = (props) => {
  return (
    <div className="gallery-wrapper">
      <div>{props.title}</div>
      <div className="gallery-content">{props.children}</div>
    </div>
  );
};
