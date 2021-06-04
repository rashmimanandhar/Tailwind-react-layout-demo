import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = ({ handleToggle }) => {
  return (
    <div className="w-24 bg-gray-900 h-screen flex-none ">
      <button className="bg-blue-500 rounded p-2 m-5" onClick={handleToggle}>
        Open
      </button>
      {/* <div className="flex flex-col items-center">
        <button className="bg-blue-500 rounded p-2 m-5" onClick={handleToggle}>
          <FontAwesomeIcon icon={["fab", "apple"]} size="4x" color="white" />
        </button>
        <button className="bg-blue-500 rounded p-2 m-5" onClick={handleToggle}>
          <FontAwesomeIcon
            icon={["fab", "microsoft"]}
            size="4x"
            color="white"
          />
        </button>
        <button className="bg-blue-500 rounded p-2 m-5" onClick={handleToggle}>
          <FontAwesomeIcon icon={["fab", "google"]} size="4x" color="white" />
        </button>
        <button className="bg-blue-500 rounded p-2 m-5" onClick={handleToggle}>
          <FontAwesomeIcon icon="check-square" size="4x" color="white" />
        </button>
      </div> */}
    </div>
  );
};

export default SideBar;
