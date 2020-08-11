import React from "react";
import "./SidebarOptions.css";

const SidebarOptions = ({ active, text, Icon }) => {
  return (
    <div className={`sidebarOptions ${active && "sidebarOption--active"}`}>
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOptions;
