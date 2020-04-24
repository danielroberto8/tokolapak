import React from "react";
import "./Button.css";

const ButtonUI = ({ type, children }) => {
  return <div className={`custom-btn custom-btn-${type}`}>{children}</div>;
};

export default ButtonUI;
