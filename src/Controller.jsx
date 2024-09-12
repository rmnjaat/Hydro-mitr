import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Login from "./Login";

function Controller() {
  const auth = useAuth() || {};
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route element={<Login />} path="/login" />
        
          {auth.isLoggedIn && auth.user && (
            <Route path="/home" element={<h1> hii Logined</h1>} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Controller;
