import React from "react";
import Table from "./Table";

const Video = () => {
  const tableData = {
    1: {
      id: "1",
      "Meeting Name": "Test 1",
      "Start Date": "2021-10-12",
      "End Date": "2021-10-13",
      Timezone: "EST",
      "Meeting Type": "Adhoc",
      Status: "Active"
    },
    2: {
      id: "1",
      "Meeting Name": "Test 1",
      "Start Date": "2021-10-12",
      "End Date": "2021-10-13",
      Timezone: "EST",
      "Meeting Type": "Adhoc",
      Status: "Active"
    }
  };
  return (
    <div className="bg-green-500 flex-grow flex items-center justify-center">
      {/* <Table data={tableData} rows={Object.keys(tableData).length} cols="6" /> */}
    </div>
  );
};

export default Video;
