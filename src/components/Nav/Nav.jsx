import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav = (props) => {
  const [toggle, setToggle] = useState(false);
  const renderLink = () => {
    return (
      <>
        <Link className={style.link} to="home">
          Home
        </Link>
        <Link className={style.link} to="about">
          About
        </Link>
        <button onClick={()=>props.logouted()} >Logout</button>
      </>
    );
  };
  return (
    <header>
      <FontAwesomeIcon
        className={style.icon}
        icon={faBars}
        onClick={() => setToggle(!toggle)}
      />
      <div className={style.links}>{renderLink()}</div>
      {toggle && <div className={style.links2}>{renderLink()}</div>}
      <SearchBar {...props} />
    </header>
  );
};

export default Nav;
