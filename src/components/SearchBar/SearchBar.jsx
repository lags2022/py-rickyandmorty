import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faShuffle,
  faRotate,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch, onClean }) => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  //autocompletado
  const searchRef = useRef();
  const getValue = () => searchRef.current?.value;

  // const handleChange = (e) => {
  //   setId(e.target.value);
  // };

  //autocompletado
  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div className={style.searchBar}>
      <p>Character</p>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="name..."
        value={id}
        ref={searchRef}
      />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        <FontAwesomeIcon className={style.fawe} icon={faCheck} />
        <span>Add</span>
      </button>
      <button onClick={() => onSearch(Math.floor(Math.random() * 826) + 1)}>
        <FontAwesomeIcon className={style.fawe} icon={faShuffle} />
        <span>Random</span>
      </button>
      <button onClick={() => onClean()}>
        <FontAwesomeIcon className={style.fawe} icon={faRotate} />
        <span>Reset</span>
      </button>
      <button onClick={() => navigate("/error404")}>
        <FontAwesomeIcon className={style.fawe} icon={faCircleExclamation} />
        <span>404</span>
      </button>
    </div>
  );
};

export default SearchBar;
