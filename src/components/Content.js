import React from "react";
import ControlsBar from "./ControlsBar";
import Header from "./Header";
import RelayIn from "./RelayIn";
import RelayOut from "./RelayOut";
import SideBarContent from "./SideBarContent";
import Video from "./Video";

const Content = ({ role, handleToggle, sidebarOpen }) => {
  return (
    <>
      <div class="flex-1">
        <div className="h-screen flex-grow flex flex-col px-6">
          <Header></Header>
          {role === "participant" && (
            <>
              <Video></Video>
              <ControlsBar></ControlsBar>
            </>
          )}
          {role === "interpreter" && (
            <div className="grid grid-cols-12 flex-grow gap-4">
              <div className="col-span-9 h-full flex flex-col">
                <Video></Video>
                <ControlsBar></ControlsBar>
              </div>
              <div className="col-span-3 flex gap-4 flex-col">
                <RelayIn></RelayIn>
                <RelayOut></RelayOut>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Content;
