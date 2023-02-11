import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = (props) => {
  return (
    <header>
      <FontAwesomeIcon className={style.icon} icon={faBars} />
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
