import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Login from "./Login";
import SignUp from "./SignUp";
import Header from "../Header/Header";
import SideBar from "../Sidebar/SideBar";
import DashMain from "../dashMain/DashMain";
import Dashboard from "../dashMain/Dashboard";
import Wrapper from "../../Wrapper";
import MonitorReadings from "../dashMain/MonitorReadings/MonitorReadings";
import UserProfile from "../UseProfile/UserProfile";
import UserComplaints from "../dashMain/UserComplaints/UserComplaints";
import SensorLoc from "../dashMain/sensLoc/SensorLoc";
import ImageResult from "../dashMain/ImageResult/ImageResult";

// Fix Urls in data IFle accordingly

function Controller() {
  const auth = useAuth() || {};

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={!auth.isLoggedIn ? <Login /> : <Navigate to="/dashboard" />}
        ></Route>
        {/* <Route path="/login"  element={! false ? <Login /> : <Navigate to="/dashboard" />}></Route> */}

        {/* {true && true ? ( */}
        {auth.isLoggedIn && auth.user ? (
          <Route path="/" element={<Wrapper></Wrapper>}>
            <Route path="dashboard" element={<Dashboard />}>
              {" "}
            </Route>
            <Route path="monitoring" element={<MonitorReadings />}>
              {" "}
            </Route>
            <Route
              path="imageresults"
              element={<ImageResult></ImageResult>}
            ></Route>
            <Route
              path="complaints"
              element={<UserComplaints></UserComplaints>}
            ></Route>
            <Route
              path="sensorslocations"
              element={<SensorLoc></SensorLoc>}
            ></Route>
            <Route path="register" element={<SignUp></SignUp>}></Route>
            <Route path="profile" element={<UserProfile></UserProfile>}></Route>
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}

        <Route path="/*" element={<Navigate to="/login" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Controller;
