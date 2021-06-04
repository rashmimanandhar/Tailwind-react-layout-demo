import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SideBarContent = ({ sidebarOpen }) => {
  return (
    <>
      <aside
        className={
          " transition-all duration-300 overflow-hidden" +
          (!sidebarOpen ? " w-0" : " w-64 ")
        }
      >
        <div className="h-full bg-red-900 flex flex-col items-center"></div>
      </aside>
    </>
  );
};

export default SideBarContent;
