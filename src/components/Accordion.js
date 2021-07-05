import React, { useState, useRef, useEffect } from "react";

export const Accordion = (props) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleActive = () => {
    setActive(!active);
  };

  const titleStyle = {
    color: "#111",
    fontFamily: "Helvetica Neue, sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "-1px",
    lineHeight: 1,
    textAlign: "center",
    padding: "20px",
  };

  return (
    <div className="accordion-wrapper">
      <button
        className="accordion-title"
        onClick={toggleActive}
        onKeyPress={toggleActive}
      >
        <div style={titleStyle}>{props.title}</div>
        <span className={active ? "arrow down" : "arrow right"}></span>
      </button>
      <div ref={contentRef} className="accordion-content">
        {props.children}
      </div>
    </div>
  );
};
