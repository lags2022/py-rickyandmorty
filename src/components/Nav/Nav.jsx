import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

const Nav = (props) => {
  const location = useLocation();
  return (
    <header className={location.pathname === "/error"?style.oculto:""}>
      <div className={style.links}>
        <Link className={style.link} to="home">
          Home
        </Link>
        <Link className={style.link} to="about">
          About
        </Link>
      </div>
      <SearchBar {...props} />
    </header>
  );
};

export default Nav;
