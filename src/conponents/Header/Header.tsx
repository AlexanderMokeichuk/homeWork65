import React, {useCallback, useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import axiosApi from "../../axiosApi";
import {PageData} from "../../type";

const Header: React.FC = () => {
  const [navBar, setNavBar] = useState<PageData[]>([]);

  const fetchPageForLink = useCallback(async () => {
    try {
      const {data: response} = await axiosApi.get(".json");
      if (response) {
        setNavBar(Object.keys(response).map(id => ({
          ...response[id],
          id,
        })));
      } else {
        setNavBar([]);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    void fetchPageForLink();
  }, [fetchPageForLink]);

  console.log(navBar);

  return (
    <header>
      <div className={"container d-flex align-items-center justify-content-between bg-white"}>
        <Link to={"/pages/home"} className={"sign-wrap-1 nav-link"}>
          <h3>Static Pages</h3>
        </Link>
        <NavBar pages={navBar}/>
        <NavLink to={"/admin"}>Admin</NavLink>
      </div>
    </header>
  );
};

export default Header;