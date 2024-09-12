import React from "react";
import "./sidebar.css";

import {navList,navItems} from "../../data/data";

function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>



        
        {navItems.map((navItem) => (
        <li className="nav-item" key={navItem.id}>
          <a
            className="nav-link collapsed"
            data-bs-target={`#nav-${navItem.id}`}
            data-bs-toggle="collapse"
            href="#"
          >
            <i className={navItem.icon}></i>
            <span>{navItem.title}</span>
            {/* <i className="bi bi-chevron-down ms-auto"></i> */}
          </a>
        
        </li>
      ))}

    

        <li className="nav-heading">Pages</li>
        {navList.map((nav) => (
          <li className="nav-item" key={nav._id}>
            <a href="#" className="nav-link collapsed">
              <i className={nav.icon}></i>
              <span>{nav.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;

// Chart

// Icons;
// Bootstrap Remix Boxicon
