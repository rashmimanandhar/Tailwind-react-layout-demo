import React from "react";

const SideBar = ({ handleToggle }) => {
  return (
    <div className="w-24 bg-gray-900 h-screen flex-none">
      <button className="bg-blue-600 text-white" onClick={handleToggle}>
        Open sidepanel
      </button>
    </div>
  );
};

export default SideBar;
