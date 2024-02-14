import React from "react";
import {NavLink} from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={"/pages/home"} className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/pages/about"} className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/pages/contact"} className="nav-link">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/pages/divisions"} className="nav-link">Divisions</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;