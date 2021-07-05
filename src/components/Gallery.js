import React from "react";
import "./Gallery.scss";

export const Gallery = (props) => {
  const titleStyle = {
    color: "#111",
    fontFamily: "Helvetica Neue, sans-serif",
    fontSize: "6vw",
    fontWeight: "bold",
    letterSpacing: "-1px",
    lineHeight: 1,
    textAlign: "center",
    padding: "20px",
    background: "rgb(110, 105, 106)",
  };

  return (
    <div className="gallery-wrapper">
      <div style={titleStyle}>{props.title}</div>
      <div className="gallery-content">{props.children}</div>
    </div>
  );
};
