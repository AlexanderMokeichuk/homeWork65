import {NavLink} from "react-router-dom";
import {PAGES} from "../../constants";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand">
      <ul className="navbar-nav">
        {PAGES.map((page) => {
          return (
            <li key={page.id} className="nav-item">
              <NavLink to={`/pages/${page.id}`} className="nav-link">{page.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;