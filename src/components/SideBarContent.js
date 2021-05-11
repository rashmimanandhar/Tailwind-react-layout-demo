import React from "react";

const SideBarContent = ({ sidebarOpen }) => {
  return (
    <>
      <aside
        className={
          " transition-all duration-300" + (!sidebarOpen ? " w-0" : " w-64 ")
        }
      >
        <div className="h-full bg-red-900"></div>
      </aside>
    </>
  );
};

export default SideBarContent;
