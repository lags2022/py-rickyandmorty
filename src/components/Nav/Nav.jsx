import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

const Nav = (props) => {
  return (
    <header>
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
