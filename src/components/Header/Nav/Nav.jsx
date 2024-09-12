import React from "react";
import './nav.css'
import NavNotice from "./Subnav/NavNotice";
import NavMessage from "./Subnav/NavMessage";
import NavAvtar from "./Subnav/NavAvtar";

function Nav() {
  return (
   
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
       
          <NavNotice></NavNotice>
          <NavMessage></NavMessage>
          <NavAvtar></NavAvtar>

        </ul>
      </nav>
  );
}

export default Nav;