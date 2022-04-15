import React from "react";
import ReactDOM from "react-dom";
import "./portal.css";

export function Portal(props) {
  return ReactDOM.createPortal(
    <div className="portal">{props.children}</div>,
    document.getElementById("portalDiv")
  );
}
