import React from "react";
import {NavLink} from "react-router-dom";
import {PageData} from "../../type";

interface Props{
  pages: PageData[],
}

const NavBar: React.FC<Props> = ({pages}) => {

  return (
    <nav className="navbar navbar-expand">
      <ul className="navbar-nav">
        {pages.map((page, index) => {
          return (
            <li key={`${page.id}${index}`} className="nav-item">
              <NavLink to={`/pages/${page.id}`} className="nav-link">{page.title}</NavLink>
            </li>
          );
        }).reverse()}
      </ul>
    </nav>
  );
};

export default NavBar;