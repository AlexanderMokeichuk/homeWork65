import {Link} from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Header: React.FC = () => {
  return (
    <header>
      <div className={"container d-flex align-items-center justify-content-between bg-white"}>
        <Link to={"/pages/home"} className={"sign-wrap-1 nav-link"}>
          <h3>Static Pages</h3>
        </Link>
        <NavBar/>
      </div>
    </header>
  );
};

export default Header;