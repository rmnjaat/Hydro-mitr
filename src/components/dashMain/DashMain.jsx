import React from "react";
import "./dashmain.css";
import PageTitle from "./Pagettitle/PageTitle";
import Dashboard from "./Dashboard";
import UserProfile from "../UseProfile/UserProfile";
import MonitorReadings from "./MonitorReadings/MonitorReadings";
import UserComplaints from "./UserComplaints/UserComplaints";
function DashMain() {
  return (
    <main id="main" className="main">
      <PageTitle page={"Dashboard"}></PageTitle>

      <UserComplaints></UserComplaints>
      {/* <MonitorReadings></MonitorReadings> */}

      {/* <UserProfile></UserProfile> */}
      {/* <Dashboard></Dashboard>  */}
    </main>
  );
}

export default DashMain;
