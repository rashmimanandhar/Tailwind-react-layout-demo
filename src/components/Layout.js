import React, { useState, useEffect } from "react";
import Content from "./Content";
import SideBar from "./SideBar";
import SideBarContent from "./SideBarContent";

const Layout = ({ role }) => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const handleToggle = () => {
    setsidebarOpen(!sidebarOpen);
  };
  return (
    <div className="h-screen bg-gray-700 flex overflow-hidden">
      <Content
        role={role}
        handleToggle={handleToggle}
        sidebarOpen={sidebarOpen}
      ></Content>
      <div className="flex flex-row">
        <SideBar handleToggle={handleToggle}></SideBar>
        <SideBarContent sidebarOpen={sidebarOpen}></SideBarContent>
      </div>
    </div>
  );
};

export default Layout;
